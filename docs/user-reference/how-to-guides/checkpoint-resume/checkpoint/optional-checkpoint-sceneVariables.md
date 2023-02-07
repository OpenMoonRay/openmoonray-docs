---
title: Optional Checkpoint Settings
---
# Optional Checkpoint Settings
---
There are other optional settings which are shared by both of time- and quality-based checkpoint rendering, listed below.

## Checkpoint file overwrite and multi-version control
 The default behavior for intermediate checkpoints is that each time a checkpoint file is created, the previous checkpoint file is overwritten.  To _not_ overwrite checkpoint files, set the overwrite mode to false by using the following setting:

```lua
["checkpoint_overwrite"] = <bool> -- true or false
```

If _checkpoint_overwrite_ is set to false, then MoonRay outputs each checkpoint file as the following filename:

```plaintext
<checkpointFileName> + "_" + <tileSampleNumber> + ".exr"
```

The name of the intermediate checkpoint files are defined by _checkpoint_file_name_ inside of the **RenderOutput** block.  The regular checkpoint files which are defined by _checkpoint_file_name_ are always written out regardless of the _checkpoint_overwrite_ setting.

To save the intermediate checkpoint files in a different location from the regular checkpoint output, set the _checkpoint_multi_version_file_name_ setting inside the **RenderOutput** block.  For example:

```lua
["checkpoint multi version file name"] = <multiVersionFilename>
```

If the _checkpoint_multi_version_file_name_ value is not empty, the checkpoint file names are changed as follows:

```plaintext
<multiVersionFileName> + "_" + <tileSampleNumber> + ".exr"
```

By using this _checkpoint_multi_version_file_name_, yall intermediate sample checkpoint images are saved to a new location. This can be useful for generating training data for machine learning datasets, for example.  The default value for the _checkpoint_multi_version_file_name_ setting is empty.

## Background checkpoint write control
The image file write operation is not a free cost.  MoonRay uses openEXR and other image formats of which most are using data compression logic which is a CPU intensive task.  Additionally posix I/O operation over a network disk is costly. MoonRay writes multiple checkpoint files during rendering and needs to minimize this checkpoint file write cost and to maximize MCRT efficiency.

To accomplish this, the checkpoint write operation is executed by a background thread independently from regular MCRT threads which are running in parallel.  This solution hides any inperfections of an image library's multi-threading implementation and maximizes the total rendering efficiency.  Using an independent background thread is the way that MoonRay writes all checkpoint files by default.

However, there is a special setting to disable this logic and fall back to an alternate write operation:.

```lua
["checkpoint_bg_write"] = <bool> -- true or false. default is true
```

When this setting is false, the checkpoint writing logic using an independent background thread is disabled and a given checkpoint file is written exclusively while all other MCRT threads are stopped.  This is useful for debugging purposes, but there is otherwise no particular reason to set this setting = false from a performance standpoint.


## Checkpoint max background cache setting

```lua
["checkpoint_max_bgcache"] = <n>
```

The _checkpoint_max_bgcache_ setting controls the maximum memory usage of the temporary memory space when _checkpoint_bg_write_ = true. If _checkpoint_bg_write_ = false, then the _checkpoint_max_bgcache_ value does not do anything.

In order for MoonRay to write a checkpiont image using a background thread, it saves the output data into temporary memory space first and then this temporary memory data is written out by an output thread later.  If the checkpoint interval is shorter than the write-out cost, then the internal temporary memory will gradually increase and the process size will get  bigger. The _checkpoint_max_bgcache_ is a safety setting to avoid this situation.

If for some reason MoonRay tries to keep more data than specified by _checkpoint_max_bgcache_, then the background thread writing logic is temporally suspended and will fall back back to serial writes.  MoonRay will continue to use the background thread for writing logic when extra memory is again available.  

Also note that MoonRay increases the internal memory only as needed and will try to use the minimum memory possible, regardless of the value set for _checkpoint_max_bgcache_.  The value for this setting must be 1 or larger.  The default value is 2.  This means rendering can keep a maximum of 2 sets of output data; this is a reasonable and recommended setting

By setting _checkpoint_max_bgcache_ to a value larger than 2, MoonRay can keep more backlog data internally and might get faster write-out but pay more memory usage cost.  By setting the value to 1, it will reduce memory usage, but there could be a slow down at the <final-1> and <final> checkpoints.  Usually these two checkpoints are executed in short intervals during time-based checkpointing, and therefore may request increased internal memory.

## Checkpoint output start sample setting
This setting specifies the minimum samples per pixel for when the checkpoint render starts writing files.  The initial checkpoint file is created when all pixel's SPP are same or larger than this number.

```lua
["checkpoint_start_sample"] = <int>
```

The default value is 1.  This means that the initial checkpoint output will be written when SPP is equal to or higher than than 1 sample per pixel.  This value can also be set to zero, in which case the intial output file is created regardless of SPP.

## Subpixel Sample cap setting
This setting specifies a sub pixel sample cap count for one pixel.

```lua
["checkpoint_sample_cap"] = <int> -- sub pixel sample limit
```

For example, if the value is set to 64, then rendering will stop when the subpixel sample count exceeds 64.  The default is 0, which disables the sample cap entirely.  This setting is mainly used for debugging purposes.

## MCRT Time cap setting
This setting specified a cap in minutes on MCRT rendering time.

```lua
["checkpoint time cap"] = <float> -- minute
```

For example, the checkpoint render will forced finished when the entire render time, excluding renderPrep time, is
exceededs time cap value.  The default value is zero, which disables the time cap entirely.
