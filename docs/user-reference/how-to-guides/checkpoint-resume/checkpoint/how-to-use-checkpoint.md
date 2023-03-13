---
title: How to use Checkpoint Rendering
---
# How to use Checkpoint Rendering
---
To start using Checkpoint rendering, you need to set several parameters in the "RenderOutput" definition block.

### A) Set the Checkpoint image file name and location
Specify the checkpoint image file location by setting the value in the RenderOutput definition.  Use the _checkpoint file name_ setting to specify both checkpoint file location and name.  For example:

```lua
["checkpoint_file_name"] = "checkpoint0.exr"
```
In this example each intermediary checkpoint image file would be created as "checkpoint0.exr" in the current directory.

If you have multiple definitions of RenderOutput blocks, you should follow same pattern of regular output filename definition.  For example you create two file:  FileA has the contents of AOVs 0 and 1, FileB has the contents of AOV2.  You should use the same pattern for the checkpoint files, so that AOVs 0 and 1 are writtent to CheckpointFileA, and AOV 2 goes to CheckpointFileB.  Note that it is not possible to define different file configurations for regular file output versus checkpoint file output.  If MoonRay finds inconsistent file definition patterns between ruglar and checkpiont file outputs, it will process an exit with an error status.

### B) Optionally specify a special set of AOVs to allow Resume Rendering
The Checkpoint logic does not require the following special AOVs, however these do need to be defined if you would like to enable any given checkpoint file as _resumable_, and be the input file for Resume rendering.  It is fine (and generally useful) if the following special AOVs are always defined for all of the final render and checkpoint render scripts.  Doing so allows more samples to be added to a checkpoint image via Resume rendering.

The set of five AOVs required for Resume rendering are:

1. Beauty AOV
```lua
["result"] = 0 -- or "beauty"
```
2. Alpha AOV
```lua
["result"] = 1 -- or "alpha" 
```
3. Weight AOV
```lua
["result"] = 11 -- or "weight" 
```
4. Beauty Aux AOV
```lua
["result"] = 12 -- or "beauty aux"
```
5. Alpha Aux AOV
```lua
["result"] = 14 -- or "alpha aux" 
```

These AOVs are mandatory for Resume rendering and are for input to Resume rendering.  Note that if these AOVs are not in the resumable Checkpoint file, MoonRay can not resume from that file, and will fall back to normal rendering, starting at the beginning.

### C) Optionally specify a "resumable output" setting
The Checkpoint logic does not require this parameter unless you would like to use any given checkpoint image as resumable file.  In order to create "resumable output" mode file, you need to define the _resumable_output_ setting:
```lua
["resumable_output"] = true
```
Or pass the command option to MoonRay to create a resumable file; e.g.
```bash
-resumable_output
```

### D) Specify Checkpoint mode
Choose one of the checkpoint modes, either time- or quality-based.  Each mode has different settings to control the intervals of checkpoint creation.  The settings are explained below. Note that all other scene variables are the same for either checkpoint mode, and are explained in the 
[optional checkpoint settings](../optional-checkpoint-sceneVariables) section.

#### Settings for time-based checkpoint mode
Note that the time-based checkpoint mode is the default for MoonRay.  The settings are:
```lua
["checkpoint_mode"] = 0 -- or "time"
```
  
```lua
["checkpoint_interval"] = <minute>  -- Sets the checkpoint interval time in minutes, using a float value. The default is 15 minutes.
```

Note that the _checkpoint_interval_ setting is ignored when using quality-based checkpoint mode.

#### Settings for quality based checkpoint mode
There are two different ways to control quality-based checkpoint renders. One we define as 'easy-mode' and the other we define as an 'expert-mode'.

##### 'Easy-mode' scene variables for quality based checkpoint renders 
The following setting are an easy way to control checkpoint file generation intervals using quality-based checkpoint mode. 
```lua
["checkpoint_mode"] = 1 -- or "quality"
```

```lua
["checkpoint_total_files"] = <n> -- total number checkpoint files desired, using an integer.  The default is 0
```

Note that the _checkpoint_total_files_ setting is ignored when using time-based checkpoint mode.

Also note that if you use or keep the default value of 0 for _checkpoint_total_files_, then this control is skipped and MoonRay will use the _checkpoint_quality_steps_ value to determine how often the checkpoint file generation is written. If you set the value of this setting to 1 or larger, then _checkpoint_total_files_ is used and _checkpiont_quality_steps_ is ignored.  See the 'expert-mode' section below for more details.

The the '<n>' value of _checkpoint_total_files_ specifies the total number of checkpoint files to get from rendering in quality-based checkpoint mode.
 
The _checkpoint_total_files_ setting also respects the _checkpoint_start_sample_ setting.  In some cases, MoonRay may not create the requested number of _checkpoint_total_files_ due to current limitations of the implementation or if the user specified a value larger than 1 for the _checkpoint_start_sample_ setting.  Nevertheless in this case, MoonRay will attempt to create the closest number of total checkpoint files to what was set in the _checkpoint_total_files_ setting.

There is a log entry in the MoonRay output, with information about the final samples per pixel for each checkpoint file when using _checkpoint_total_files_.

###### Example log when using uniform sampling
In this example the rendering is using a _pixel_samples_ setting = 8 (max SPP is 64)
```plaintext
checkpoint_total_files:11 was converted ... (minSPP:18 qSteps:4) SPP:{21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61} checkpointFiles:11
```
Here's how to interpret that log message:
> The _checkpoint_total_files_ setting was set to 11.
> The render had _checkpoint_start_sample_ setting set to 18.
> The final internal converted quality steps was 4.
> The SPP table shows you the exact samples per pixel which was used at each checkpoint file.
> In this example a total of 11 checkpoint files were created.

###### Example log when using adaptive sampling
In this example, the rendering is using a _max_adaptive_samples_ setting = 4096
```plaintext
checkpoint_total_files:11 was converted ... (minSPP:18 qSteps:6) SPP:{55, 181, 379, 649, 991, 1405, 1891, 2449, 3079, 3781} checkpointFiles:10
```
Here's how to interpret that log message:
> The _checkpoint_total_files_ setting was set to 11.
> The render had _checkpoint_start_sample_ setting set to 18.
> The final internal converted quality steps was 6
> The SPP table shows you the exact samples per pixel which was used at each checkpoint file.
> In this example a total 10 checkpoint files were created.
>>As can be seen, in this example MoonRay created 10 checkpoint files instead of the user defined 11.

##### 'Expert-mode' scene variables for quality based checkpoint renders 
These settings directly control the checkpoint file interval by using _checkpoint_quality_steps_. Checkpoint file generation intervals based on the SPP sampling number using _checkpoint_quality_steps_ are defined as follows:

```lua
["checkpoint_mode"] = 1 -- or "quality"
```

```lua
["checkpoint_quality_steps"] = <n> -- the number of steps between quality checkpoints, using an integer.  The default is 2
```

Note that the _checkpoint_quality_steps_ setting is ignored when using time-based checkpoint mode.  Also note that if the _checkpoint_total_files_ value is 1 or larger, then this `checkpoint_quality_steps` setting is ignored. The _checkpoint_quality_steps+ setting has different effect depending on if you are rendering with uniform- or adaptive-sampling.

When rendering with uniform-sampling, this setting is identical to samples per pixel count (SPP).  For example, a setting of _checkpoint_quality_steps = 3 will result in a checkpoint file being written at the beginning at 1 SPP and then at every 3 sub samples.  So in effect, a checkpoint file will be created when all pixels have the following SPP counts:

```plaintext
1, 4, 7, 10, 13, 16, 19, 22, and so on.
```

I.e. the original SPP sequence is grouped in steps of number =3  and then picks the first number of each group:

```plaintext
(1), 2, 3 / (4), 5, 6, / (7), 8, 9 / (10), 11, 12 / (13), 14, 15 / (16), 17, 18 / (19), 20, 21 / (22), 23, 24 / ,,,)
```

If the setting for [overwrite mode](../optional-checkpoint-sceneVariables/#checkpoint-file-overwrite-and-multi-version-control) is false, then you would see the following output files in the specified file location (assuming _checkpoint_file_ name has been defined as "checkpoint.exr"), with the subpixel sampling number appended like so:

```plaintext
checkpoint_064.exr
checkpoint_256.exr
checkpoint_448.exr
checkpoint_640.exr
and so on.
```

The subpixel sampling number is first converted to the tile-based sampling number by multiplying by 64 (as 1 tile = 64 pixels).  This tile sample number now becomes part of the checkpoint file name, because 'overwrite mode' was set to false.

When using the adaptive-sampling mode, the _checkpoint_quality_steps_ setting has a slightly different meaning than in the uniform-sampling mode.  In the adaptive sampling mode the setting applies to the internal adaptive test iteration loop count.  For instance if you set this value to '3', a checkpoint file is written starting from 1 SPP and is subsequently  written after every 3 adaptive sampling iteration loops are completed.

Please keep in mind that the _checkpoint_quality_steps_ value is _not_ a pixel sampling step value when rendering in adaptive sampling mode.  Because each pixel is sampled adaptively, a global pixel sampling count control like in uniform-sampling mode, does not fit well.

So in adaptive sampling, each pixel variance is tested and a decision is made whether that pixel is completed or not.  However this test is not executed for every single subpixel sample.  Adaptive sampling executes this test at special predefined subpixel sampling counts only.  Currently this test is done at after finishing the following subpixel samples.
```plaintext
1, 5, 11, 19, 29, 41, 55, 71, 89, 109, 131, 155, 181, 209, 239, 271, 305, , , ,
```

This special subpixel sampling sequence, called a [KJ sequence](../../kj-sequence) is hardcoded internal to the adaptive sampling logic and is not user defined. Additionally, this sequence may be changed in the future.

The rendering can not stop and save an intermediate image between the above subpixel sampling sequence count during adaptive sampling.  This is the main reason why the _checkpoint_quality_steps_ setting has different meaning between uniform-sampling and adaptive-sampling modes.

If  _checkpoint_quality_steps_ is set to to '3' in adaptive sampling mode, then a checkpoint file is created starting from 1 SPP and a subsequent checkpoint file is created every 3 steps of this sequence's subpixel sampling number until rendering is completed. For example:

```plaintext
1, 19, 55, 109, 181, 271, , ,
```

Note that the original SPP sequence is grouped by steps = 3 and then picks the first number of each group. 

```plaintext
(1), 5, 11 / (19), 29, 41 / (55), 71, 89 / (109), 131, 155 / (181), 209, 239 / (271), 305,,,)
```

If the setting for [overwrite mode](../optional-checkpoint-sceneVariables/#checkpoint-file-overwrite-and-multi-version-control) is false, then you would see the following output files in the specified file location (assuming the _checkpoint_file_ setting is defined as "checkpoint.exr", with the subpixel sampling number appended, like so:

```plaintext
checkpoint_0064.exr
checkpoint_1216.exr
checkpoint_3520.exr
checkpoint_6976.exr
and so on.
```
Again the subpixel sampling number is first converted to the tile-based sampling number (i.e. multiply by 64, as 1 tile = 64 pixels).  This tile sample number now becomes part of the checkpoint file name, because 'overwrite mode' was set to false.


### Activation of checkpoint rendering
After setting up all of the settings above, you are ready to do checkpoint rendering.  There are two ways to activate checkpoint rendering.  Via a setting:
```lua
["checkpoint_active"] = <bool> -- true or false
```
or via MoonRay command option
```bash
-checkpoint # checkpoint render enable
```



