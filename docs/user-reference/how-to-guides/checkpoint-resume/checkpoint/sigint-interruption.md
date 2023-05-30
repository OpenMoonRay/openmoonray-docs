---
title: Interrupting a Rendering Process with SIGINT
---
# Interrupting a rendering process with SIGINT
---

Moonray can save a checkpoint file when receiving a **SIGINT** signal.  This functionality works with both time- and quality-based checkpoint modes.  This is particularly useful for offline rendering and would save RU cost and re-rendering from scratch due to an unexpected interruption if the render job management system properly kills a MoonRay job using SIGINT.


Note that this functionality is disabled by default.



In detail, MoonRay is doing a snapshot action internally on an interval, regardless of receiving a SIGINT signal or not.  This creates a memory copy of the snapshot data inside the render process, which we call "extra-snapshot", and which is always prepared to receive a SIGINT signal. 

MoonRay can start the checkpoint write action immediately for snapshot data already saved in memory when receiving the SIGINT signal.  The "extra-snapshot" needs one set of snapshot memory space, which means MoonRay needs extra memory space in order to use this functionality.  However, the regular checkpoint output logic _also_ needs 1 set of snapshot memory, and so the extra-snapshot data simply shares the extra memory space with the required regular checkpoint logic, and the memory overhead is not an issue.

The interval of the extra-snapshot is controlled by one of following two settings:

```lua 
["checkpoint_snapshot_interval"] = <minute>
```
The default value is zero.  If this value is ZERO or negative, _checkpoint_max_snapshot_overhead_ setting is used instead.

If the setting is set to a small value, the extra-snapshot is executed at a high frequency, with the result that MoonRay will pick up snapshot data quickly when receiving SIGINT.  This can minimize any lost RU cost when interrupting the render.  The tradeoff in this case however, is that the extra-snapshot cost over the entire MCRT stage is getting larger, and the efficiency of rendering lowered.

If the setting is set to a larger value, the extra-snapshot is executed at a low frequency, with the result that MoonRay will pick up a potentially older snapshot data when receiving SIGNINT.  In this case, more RU cost is sunk, but the extra snapshot cost over the entire MCRT stage is smaller and the efficiency of rendering is increased.

In general, try to set a reasonable interval value for the extra-snapshot creation for typical checkpoint workflows.  This may be difficult to balance, so there is also setting for:

```lua
["checkpoint_max_snapshot_overhead"] = <fraction>
```
The default value is zero.

As it can be difficult to specify a proper number for the _checkpoint_snapshot_interval_ setting, it would be useful to specify an affordable overhead for extra-snapshots as a fraction of the MCRT stage.  This setting allows that functionality.  In order to do so, set the _checkpoint_snapshot_interval_ to zero or a negative value. Then set the fraction value of _checkpoint_max_snapshot_overhead from 0.0 to 1.0 to get an affordable extra_snapshot cost against the 
MCRT computation stage.

For example, a setting of 0.01 would mean that MoonRay assigns 1% of the MCRT stage resources to creating the extra snapshop.  We warn not to use a large number such as 0.99 or greater without a very specific reason.  That would likely work, but MoonRay will be very busy with extrasnapshot tasks and will result in extremely slow rendering progress.


If both of the prior settings are set zero or negative, then MoonRay will not support the functionality of creating a checkpoint files due to a SIGINT signal.


When MoonRay does write out a checkpoint file via SIGINT, the checkpoint file name is defined by the regular checkpoint logic, so the only difference the trigger to write is started by receiving SIGINT. 

If [overwriting](../optional-checkpoint-sceneVariables/#checkpoint-file-overwrite-and-multi-version-control) is off or
[multi-version](../optional-checkpoint-sceneVariables/#checkpoint-file-overwrite-and-multi-version-control) is on, then MoonRay gets its sampling information from the extra-snapshot data.

When using quality-based checkpoint rendering, the quality steps (i.e. sampling total) are not used, but rather Moonray  will get that from  the extra-snapshot data.

The SIGINT functionality works with both time- and **quality-based** checkpoint modes, along with all other checkpoint settings such as [background checkpoint write](../optional-checkpoint-sceneVariables/#background-checkpoint-write-control), [post checkpoint LUA scripting](../post-checkpoint-LUA-script/), [sample caps](../optional-checkpoint-sceneVariables/#sample-cap-control) and [time caps](../optional-checkpoint-sceneVariables/#time-cap-control).

## Image write progress information
Moonray creates a special ASCII file in order to report the image writing progress information to other
processes. This functionality was originally designed for the queue system so that it could wait to send a **SIGKILL** to
MoonRay if it is still writing the checkpoint file. This functionality is only enabled when configuration is set:

- The _checkpoint_snapshot_interval_ value is greater than zero, or
- The _checkpoint_max_snapshot_overhead_ has a proper fraction value greater than zero.

In this scenario, MoonRay executes extra-snapshots internally for any SIGINT interrupts, and so will also create a special ASCII file for reporting the write-action progress.  The file name for this progress update is:

```plaintext
/tmp/moonray_write.<PID>.log
```

\<PID\> is the MoonRay process id number.  This file is automatically removed when the MoonRay process exits.  When MoonRay starts the image writing phase, it will output the condition of that stage to this file in at least **250ms** intervals. 

MoonRay guarantees the progress file is updated at every 250ms interval as long as the write action is ongoing.  If MoonRay has completed the checkpoint file output or the checkpoint output is hung-up during the write action, then this progress file update will stop.  This means that a different process, such as a queue system, can recognize whether MoonRay is in the middle of a writing action or not, by checking this progress file's size at greater than 250ms intervals.

Also note that the progress file is plaintext ASCII and the detailed write progress can be seen by tailing the file:

```plaintext
tail -f /tmp/moonray_write.<PID>.log
```