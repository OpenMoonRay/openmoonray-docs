---
title: How to use Checkpoint Rendering
---
# How to use Checkpoint Rendering
---
To start using Checkpoint rendering, you need to set several parameters in the `RenderOutput` definition block.

### A) Set the Checkpoint image file name and location
Specify the checkpoint image file location by setting the parameter in the `RenderOutput` definition.  Use `"checkpoint file name"` to specify both checkpoint file location and name.  For example:

```lua
["checkpoint file name"] = "checkpoint0.exr"
```
In this example each intermediary checkpoint image file would be created as "checkpoint0.exr" in the current directory.

If you have multiple definitions of RenderOutput blocks, you should follow same pattern of regular output filename definition.  For example you create two file:  FileA has the contents of AOVs 0 and 1, FileB has the contents of AOV2.  You should use the same pattern for the checkpoint files, so that AOVs 0 and 1 are writtent to CheckpointFileA, and AOV 2 goes to CheckpointFileB.  Note that it is not possible to define different file configurations for regular file output versus checkpoint file output.  If MoonRay finds inconsisten file definition patterns between ruglar and checkpiont file outpust, it will process an exit with an error status.

### B) Optionally specify a special set of AOVs to allow Resume Rendering
The Checkpoint logic does not require the following special AOVs, however these do need to be defined if you would like to enable any given checkpoint file as _resumable_, and be the input file for Resume rendering.  It is fine (and generally useful) if the following special AOVs are _always_ defined for all of the final render and checkpoint render scripts.  Doing so allows more samples to be added to a checkpoint image via Resume rendering.

The set of five AOVs required for Resume rendering are:

1. Beauty 
> ```lua
> ["result"] = 0
> ``` 
> or 
> ```lua
> ["result"] = "beauty"
> ```
2. Alpha
> ```lua
> ["result"] = 1
> ``` 
> or 
> ```lua
> ["result"] = "alpha"
> ```
3. Weight
> ```lua
> ["result"] = 11
> ``` 
> or 
> ```lua
> ["result"] = "weight"`
> ```
4. Beauty Aux
> ```lua
> ["result"] = 12
> ```
> or 
> ```lua
> ["result"] = "beauty aux"
> ```
5. Alpha Aux
> ```lua
> ["result"] = 14 
> ``` 
> or 
> ```lua
> ["result"] = "alpha aux" 
> ```

These AOVs are mandatory for Resume rendering and are for input to Resume rendering.  If these AOVs are not in the resumable Checkpoint file, MoonRay can not resume from that file, and will fall back to normal rendering, starting at the beginning.

### C) Optionally specify a "resumable output" setting
The Checkpoint logic does not require this parameter unless you would like to use any given checkpoint image as resumable file.  In order to create "**resumable_output**" mode file, you need to define the `"resumable output"` scene variable parameter:
> ```lua
> ["resumable output"] = true
> ```
> Or pass the command option to MoonRay to create a resumable file; e.g.
> ```bash
> -resumable_output
> ```

### D) Specify Checkpoint mode
Choose either one of the checkpoint modes "**time-based**" or "**quality-based**".  Each mode has different settings to control the intervals of checkpoint creation.  The settings are controlled by scene variables as explained below.

All other scene variables are the same for either checkpoint mode, and are explained in
[**optional checkpoint sceneVariables**](../optional-checkpoint-sceneVariables) section.

#### Scene variables for time-based checkpoint mode
Note that the **time-based** checkpoint mode is the default for MoonRay.  You can also set the following scene variables:
> ```lua
> ["checkpoint mode"] = 0
> ```
> or 
> ```lua
> ["checkpoint mode"] = "time"
> ```
  
> ```lua
> ["checkpoint interval"] = <minute>
> -- Sets the checkpoint interval time in minutes, using a float value. The default is 15 minutes.
> ```


Note that the `checkpoint interval` setting is ignored when using **quality-based** checkpoint mode.

#### Scene variables for quality based checkpoint mode
There are two different ways to control **quality-based** checkpoint renders. One we define as 'easy-mode' and the other we define as an 'expert-mode'.

##### 'Easy-mode' scene variables for quality based checkpoint renders 
The following setting are an easy way to control checkpoint file generation intervals using **quality-based** checkpoint mode. 
> ```lua
> ["checkpoint mode"] = 1 
> ```
> or 
> ```lua
> ["checkpoint mode"] = "quality"
> ```

> ```lua
> ["checkpoint total files"] = <n> 
> -- total number checkpoint files desired, using an integer.  The default is 0
```

Note that the `checkpoint_total_files` setting is ignored when using **time-based** checkpoint mode.

Also note that if you use or keep the default value of 0 for `checkpoint_total_files`, then this control is skipped and MoonRay will use the `checkpoint_quality_steps` value to determine how often the checkpoint file generation is written. If you set the value of this setting to 1 or larger, then `checkpoint_total_files` is used and `checkpiont_quality_steps` is ignored.  See the 'expert-mode' section below for more details.

Regarding `<n>` of `checkpoint_total_files`, you specify the total number of checkpoint files
which you want to finally get from rendering under quality based checkpoint mode.
 
The `checkpoint_total_files` setting also respects `checkpoint_start_sample` setting.  In some cases, MoonRay may not create the requested number of `checkpoint_total_files` due to current limitations of the implementation or if the user specified a value larger than 1 for the `checkpoint_start_sample` variable.  Nevertheless, in this case, MoonRay will attempt to create the closest number of total checkpoint files to what was set in the `checkpoint_total_files` setting.

There is a log entry in the MoonRay output, with information about the final samples per pixel for each checkpoint file when using `checkpoint_total_files`.

###### Example log when using uniform sampling
In this example the rendering is using a `pixel samples` setting = 8 (max SPP is 64)
```plaintext
checkpoint_total_files:11 was converted ... (minSPP:18 qSteps:4) SPP:{21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61} checkpointFiles:11
```
Here's how to interpret that log message:
> The `checkpoint_total_files` setting was set to 11.
> The render had `checkpoint_start_sample` setting set to 18.
> The final internal converted quality steps was 4.
> The SPP table shows you the exact samples per pixel which was used at each checkpoint file.
> In this example a total of 11 checkpoint files were created.

###### Example log when using adaptive sampling
In this example, the rendering is using a `max_adaptive_samples` setting = 4096
```plaintext
checkpoint_total_files:11 was converted ... (minSPP:18 qSteps:6) SPP:{55, 181, 379, 649, 991, 1405, 1891, 2449, 3079, 3781} checkpointFiles:10
```
Here's how to interpret that log message:
> The `checkpoint_total_files` setting was set to 11.
> The render had `checkpoint_start_sample` setting set to 18.
> The final internal converted quality steps was 6
> The SPP table shows you the exact samples per pixel which was used at each checkpoint file.
> In this example a total 10 checkpoint files were created.
>>As can be seen, in this example MoonRay created 10 checkpoint files instead of the user defined 11.

##### 'Expert-mode' scene variables for quality based checkpoint renders 
These settings directly control the checkpoint file interval by using `checkpoint quality steps`. Checkpoint file generation intervals based on the SPP sampling number using `checkpoint quality steps` are defined as follows.

> ```lua
> ["checkpoint mode"] = 1 
> ```
> or 
> ```lua
> ["checkpoint mode"] = "quality"
> ```

> ```lua
> ["checkpoint quality steps"] = <n>
> -- the number of steps between quality checkpoints, using an integer.  The default is 2
> ```

Note that the `checkpoint quality steps` setting is ignored when using **time-based** checkpoint mode.

Also note that if the `checkpoint_total_files` value is 1 or larger, then this `checkpoint_quality_steps` setting is ignored.

The `checkpoint quality steps` setting has different effect depending on if you are rendering with "**uniform-sampling**" or "**adaptive-sampling**".

When rendering with "**uniform-sampling**", this setting is identical to samples per pixel count (SPP).  For example, a setting of `checkpoint quality steps` = 3, will result in a checkpoint file being written at the beginning at 1 SPP and then every 3 sub samples.  So in effect, a checkpoint file will be created when all pixels have the following SPP counts:
```plaintext
1, 4, 7, 10, 13, 16, 19, 22, and so on.
```
I.e. the original SPP sequence is grouped in steps of number=3 and then picks the first number of each group:
```plaintext
(1), 2, 3 / (4), 5, 6, / (7), 8, 9 / (10), 11, 12 / (13), 14, 15 / (16), 17, 18 / (19), 20, 21 / (22), 23, 24 / ,,,)
```

If you have the setting for [overwrite mode](../optional-checkpoint-sceneVariables/#checkpoint-file-overwrite-and-multi-version-control) = false, then you would see the following output files in the specified file location (assuming you have defined the `checkpoint file` name as "checkpoint.exr", with the subpixel sampling number appended in this case):
```plaintext
checkpoint_064.exr
checkpoint_256.exr
checkpoint_448.exr
checkpoint_640.exr
and so on.
```

The subpixel sampling number is first converted to the tile-based sampling number (i.e. multiply by 64, as 1 tile = 64 pixels).  This tile sample number now becomes part of the checkpoint file name, because 'overwrite mode' was set to false.

When using the "**adaptive-sampling**" mode, the `checkpoint quality steps` setting has a slightly different meaning than in "**uniform-sampling**" mode.  In the adaptive sampling mode the setting applies to the internal adaptive test iteration loop count.  For instance if you set this value as 3, a checkpoint file is written starting from 1 SPP and is subsequently  written after every 3 adaptive sampling iteration loops are completed.

Please keep in mind that the `checkpoint quality steps` value is _not_ a pixel sampling step value when rendering in  adaptive sampling mode. In the adaptive sampling mode because each pixel is sampled adaptively, a global pixel sampling count control like in **uniform-sampling** mode, does not fit well.

So in adaptive sampling, each pixel variance is tested and a decision is made whether that pixel is completed or not.  However this test is not executed for every single subpixel sample.  Adaptive sampling executes this test at special predefined subpixel sampling counts only.  Currently this test is done at after finishing the following subpixel samples.
```plaintext
1, 5, 11, 19, 29, 41, 55, 71, 89, 109, 131, 155, 181, 209, 239, 271, 305, , , ,
```

This special subpixel sampling sequence, called a [KJ sequence](../../kj-sequence) is hardcoded internal to the adaptive sampling logic and is not user defined. Additionally, this sequence may be changed in the future).

The rendering can not stop and save an intermediate image between the above subpixel sampling sequence count during adaptive sampling.  This is the main reason why the `checkpoint quality steps` setting has different meaning between **uniform-sampling** and **adaptive-sampling**.

If you set `checkpoint quality steps` as 3 under **adaptive sampling**, a checkpoint file is created, starting from 1 SPP and a checkpoint file is created every 3 steps of this sequence's subpixel sampling number until rendering is completed. 
```plaintext
1, 19, 55, 109, 181, 271, , ,
```
Note that the original SPP sequence is grouped by steps number=3 and then picks the first number of each group.  E.g.
```plaintext
(1), 5, 11 / (19), 29, 41 / (55), 71, 89 / (109), 131, 155 / (181), 209, 239 / (271), 305,,,)
```
If you have the setting for [overwrite mode](../optional-checkpoint-sceneVariables/#checkpoint-file-overwrite-and-multi-version-control) = false, then you would see the following output files in the specified file location (assuming you have defined the `checkpoint file` name as "checkpoint.exr", with the subpixel sampling number appended in this case):
```
checkpoint_0064.exr
checkpoint_1216.exr
checkpoint_3520.exr
checkpoint_6976.exr
and so on.
```
Again the subpixel sampling number is first converted to the tile-based sampling number (i.e. multiply by 64, as 1 tile = 64 pixels).  This tile sample number now becomes part of the checkpoint file name, because 'overwrite mode' was set to false.


### Activation of checkpoint rendering
After setting up all of the settings above, you are ready to do checkpoint rendering.  There are two ways to activate checkpoint rendering.  Via scene variable:
> ```lua
> ["checkpoint active"] = <bool>
> -- true or false
> ```
> or MoonRay command option
> ```bash
> -checkpoint # checkpoint render enable
> ```



