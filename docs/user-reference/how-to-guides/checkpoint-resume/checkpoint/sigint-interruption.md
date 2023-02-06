---
title: Unexpected rendering process Interruption by SIGINT
---
# Unexpected rendering process Interruption by SIGINT
---

Moonray can save the checkpoint file when receiving **SIGINT** signal.
This functionality is working with both **time-based** and **quality-based** checkpoint modes.
Moonray starts checkpoint write out action immediately when receiving the **SIGINT** signal.
This is pretty useful for offline rendering and we can save lots of RU from unexpected interruption
if queueing system properly kill offline moonray by **SIGINT**.<br>
<br>
This functionality is disabled by default.<br>
<br>
Technically, moonray is doing snapshot action internally by some interval regardless of receiving
**SIGINT** signal or not. This creates a memory copy of snapshot data inside the process always
(we call this as **extra-snapshots**) and prepares to receive unexpected **SIGINT** signal.
Moonray can start to save checkpoint files immediately for already memory saved snapshot data
when receives **SIGINT** signal. This **extra-snapshot** needs one set of snapshot memory space.
This means we need extra memory space in order to use this functionality. However, soon or later,
regular checkpoint output logic also needs 1 set of snapshot memory. Actually, the **extra-snapshot**
can share this memory space with regular checkpoint action. This means in most cases,
the memory overhead of **extra-snapshots** is not a big issue.<br>
<br>
You can control the interval of the **extra-snapshot** by one of following 2 scene variables.

1. `["checkpoint_snapshot_interval"] = <minute>`<br>
You can set extra snapshot interval time by minute by yourself. 
If you set a small value, **extra-snapshot** is executed in high frequency.
As a result, moonray can pick snapshot data quickly when receiving **SIGINT** signals.
This causes lost (wasted) RU is getting smaller. However, in this case, **extra-snapshot** cost
over the entire MCRT stage is getting bigger, and the efficiency of rendering dropped. <br>
If you set a bigger value, **extra-snapshot** is executed in low frequency.
As a result, moonray pickup bit older snapshot data when receiving **SIGINT**.
In this case, lost (wasted) RU is getting bigger. But, like the opposite of above,
extra snapshot cost over the entire MCRT stage is getting smaller and efficiency of rendering is gained.<br>
You should set a reasonable interval value for **extra-snapshot** (but this is not easy in most cases.
This is why the next `checkpoint_max_snapshot_overhead` scene variable was introduced).<br>
Actually, this `checkpoint_snapshot_interval` is mainly used for development purposes.<br>
<br>
If this value is ZERO or negative, `checkpoint_max_snapshot_overhead` parameter is used instead.<br>
ZERO is the default.

2. `["checkpoint_max_snapshot_overhead"] = <fraction>`<br>
It is pretty difficult to specify a proper number for `checkpoint_snapshot_interval` scene variable.
It would be nice if users can specify affordable overhead for extra-snapshot by a fraction of MCRT stage.
This `checkpoint_max_snapshot_overhead` scene variable does this for you.<br>
In order to use this functionality, you should set `checkpoint_snapshot_interval` as ZERO or negative.
You set fraction value from 0.0 to 1.0 range for affordable extra snapshot cost against
MCRT computation stage.<br>
If you set 0.01, this means, moonray assigns 1% of MCRT stage resources to the extra snapshot.<br>
Please do not use a big number (like 0.99 or more) without a particular reason.
It probably works but moonray is too busy with extra-snapshot tasks and it creates extremely slow
rendering progress.<br>
ZERO is the default.

<br>
If both of the scene variables are set ZERO or negative, moonray cancels the feature of creating
checkpoint files by unexpected interruption by SIGINT signal.<br>
<br>
When moonray writes out checkpoint file by receiving SIGINT, checkpoint file name is defined by
regular checkpoint logic as usual. the only difference is to write action is started by receiving SIGINT.<br>
If you use
[overwrite](../optional-checkpoint-sceneVariables/#checkpoint-file-overwrite-and-multi-version-control)=off
or
[multi-version](../optional-checkpoint-sceneVariables/#checkpoint-file-overwrite-and-multi-version-control)=on,
moonray gets sampling information from **extra-snapshot** data.<br>
If you use **quality-based** checkpoint, obviously quality steps (i.e. sampling total) are not
used as you expected. Moonray gets them from **extra-snapshot** data and over-written.<br>
This functionality is working with both **time-based** and **quality-based** checkpoint modes.
And also this is working with all the options about checkpoint control like follows
- [background checkpoint write](../optional-checkpoint-sceneVariables/#background-checkpoint-write-control)
- [post checkpoint LUA scripting](../post-checkpoint-LUA-script/)
- [sample cap](../optional-checkpoint-sceneVariables/#sample-cap-control)
- [time cap](../optional-checkpoint-sceneVariables/#time-cap-control)

<br>

# Image data write action progress information for queue system
Moonray creates a special ASCII file in order to report image-writing action progress information to other
process. 
This functionality was originally designed for the queue system in order to wait to send **SIGKILL** to
moonray if moonray is writing the checkpoint file.<br>
<br>
This functionality is only enabled when you set the following configuration.<br>
<br>

1. use `checkpoint_snapshot_interval <minute>` with positive non zero minute
or
2. use `checkpoint_max_snapshot_overhead <fraction>` with proper fraction value.

This means if moonray executes **extra-snapshots** internally for unexpected interruption by **SIGINT**,
moonray creates a special ASCII file for reporting write-action progress updates.<br>
The write action progress update file name is like this.  **PID** is moonray process id number.<br>
```
/tmp/moonray_write.<PID>
```
<br>
This file is automatically removed when moonray process exits.<br>
When moonray starts the image writing phase, moonray outputs the condition of the writing stage to this file
at least **250ms** interval. <br>
This means moonray guarantees file is updated every **250ms** interval as long as moonray write action is
properly ongoing.<br>
If moonray completed file out or file out is hang-up during write action, this file update is also stopped.<br>
This means another process (like a queue system) can recognize moonray is in the middle of the writing action or not
by checking this file's size by more than **250ms** interval.<br>
<br>
FYI, This is an ASCII file and you can see the detailed write action progress if you see the internal
of this file by

```
tail -f /tmp/moonray_write.<PID>
```
for example.
