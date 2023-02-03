---
title: How to use Checkpoint Rendering
---
# How to use Checkpoint Rendering
---
First of all, you need to set several parameters for `RenderOutput` block

## a) Checkpoint image file name
You have to specify checkpoint image file location by definition of `RenderOutput`.
Use `"checkpoint file name"` for specify checkpoint file location and name

for example,
```
["checkpoint file name"] = "checkpoint0.exr"
```
in this case, checkpoint image file is created as "checkpoint0.exr" on current directory.

If you have multiple definition of RenderOutput blocks you should follow same pattern of regular output filename definition.
For example if you create 2 files, FileA contents AOV 0 and 1, FileB contents AOV 2. You should use same pattern for checkpoint file as well.
So AOV 0 and 1 go to checkpointFileA and AOV 2 goes to checkpointFileB.
We can not define different file configuration for regular file output and checkpoint file output.
If moonray find inconsistent file definition patterns between regular file outputs and checkpoint file outputs, process exit w/ error status.

## b) Special AOVs definition for "resume rendering"
Technically checkpoint logic does not required following special AOVs but you need following special AOVs
if you would like to use checkpoint file as resume file (= input of resume rendering).
It would be useful and safe if following special AOVs are always defined for all of the final render and checkpoint render scripts.
If so you can always adding more samples to the image by resume rendering.
5 special AOVs are required for resume render. "**beauty**", "**alpha**", "**weight**", "**beauty aux**" and "**alpha aux**" AOVs

1. beauty AOV
```
["result"] = 0 -- or "beauty" : this is for "beauty" AOV
```
2. alpha AOV
```
["result"] = 1 -- or "alpha" : this is for "alpha" AOV
```
3. weight AOV
```
["result"] = 11 -- or "weight" : this is for "weight" AOV
```
4. beauty aux AOV
```
["result"] = 12 -- or "beauty aux" : this is for "beauty aux" AOV
```
5. alpha aux AOV
```
["result"] = 14 -- or "alpha aux" : this is for "alpha aux" AOV
```

These 5 special AOVs are mandatory required for resume file which uses for input of resume rendering.
If you don't have these 3 special AOVs in the resume file, moonray can not resume from that file and
fall back to normal rendering and start from beginning.

## c) Special "resumable output" setting for output file
Technically checkpoint logic does not required following special `"resumable output"` but you need
following setting if you would like to use checkpoint image as resume file.
In order to create "**resumable_output**" mode file, you should use scene-variable `"resumable output"` like

```
["resumable output"] = true
```
or
```
moonray command option "-resumable_output" to create resume file.
```

## d) Checkpoint mode
You have to choose one of the checkpoint modes of "**time-based**" or "**quality-base**".
Each checkpoint mode has different command to control intervals of checkpoint creation.
Explain these control by scene-variables as
[d-1](#d-1-scene-variables-for-time-based-checkpoint-render) (time-based) section and
[d-2](#d-2-scene-variables-for-quality-based-checkpoint-render) (quality-based) section. 
After that other scene-variables which are shared by both checkpoint mode are explained in
[**optional checkpoint sceneVariables**](../optional-checkpoint-sceneVariables) section.

## d-1) Scene variables for time based checkpoint render
If you want to use **time-based** checkpoint mode, you have to set following scene-variables
```
["checkpoint mode"] = 0 -- or "time"  
["checkpoint interval"] = <minute> -- checkpoint interval time in minutes by float. default is 15min
```
actually **time-based** checkpoint mode is default.
checkpoint interval value is ignored when using **quality-based** checkpoint mode.

## d-2) Scene variables for quality based checkpoint render
There are 2 different ways to control **quality-based** checkpoint render. One for easy-mode and other for expert-mode.

### d-2a) Scene variables for quality based checkpoint render (easy-mode)
This is an easy way to control checkpoint file generation intervals under **quality-based** checkpoint mode. 
```
["checkpoint mode"] = 1 -- or "quality"
["checkpoint total files"] = <n> -- total checkpoint files you want by int. default is 0
```
`checkpoint_total_files` value is ignored when using **time-based** checkpoint mode.

If you use 0 for `checkpoint_total_files`, this `checkpoint_total_files` control is skipped and use
`checkpoint_quality_steps` values. See d-2b expert section for more detail.
Default `checkpoint_total_files` is 0 (this means if you don't use `checkpoint_total_files`,
checkpoint file generation interval is controlled by `checkpoint_quality_steps`). 
If you use 1 or bigger value for `checkpoint_total_files`, `checkpoint_quality_steps` value is ignored.

Regarding `<n>` of `checkpoint_total_files`, you specify the total number of checkpoint files
which you want to finally get from rendering under quality based checkpoint mode. 
`checkpoint_total_files` command also respects `checkpoint_start_sample` value as well.
In some cases, the renderer might not create the requested `checkpoint_total_files` due to
current limitation of internal implementation or user specified bigger than 1 for
`checkpoint_start_sample` variable.
However even in that case, the renderer tries to create the closest number of total checkpoint files
which user defined number as `checkpoint_total_files`.<br>
<br>
There is a log message and you can get information about the final SPP for each checkpoint file when
you use `checkpoint_total_files`.

### Example message of uniform sampling
This rendering is using `pixel samples` = 8 (max SPP is 64)
```
checkpoint_total_files:11 was converted ... (minSPP:18 qSteps:4) SPP:{21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61} checkpointFiles:11
```
You set `checkpoint_total_files` to 11.
Script already has `checkpoint_start_sample` as 18.
Final internal converted quality steps was 4.
SPP table shows you the exact SPP which is used at each checkpoint file.
In this case total 11 checkpoint files will create.

### Example message of adaptive sampling
This rendering is using `max_adaptive_samples` = 4096
```
checkpoint_total_files:11 was converted ... (minSPP:18 qSteps:6) SPP:{55, 181, 379, 649, 991, 1405, 1891, 2449, 3079, 3781} checkpointFiles:10
```
You set `checkpoint_total_files` to 11.
Script already has `checkpoint_start_sample` as 18.
Final internal converted quality steps was 6
SPP table shows you the exact SPP value which is used at each checkpoint file.
In this case total 10 checkpoint files will create.
This case renderer creates 10 checkpoint files instead of user defined 11.


### d-2b) Scene variables for quality based checkpoint render (expert-mode)
This procedure directly controls checkpoint file interval by `checkpoint quality steps`.
You can define checkpoint file generation intervals based on the SPP sampling number using
`checkpoint quality steps` like follows.
```
["checkpoint mode"] = 1 -- or "quality"
["checkpoint quality steps"] = <n> -- quality steps by int. default is 2
```
`checkpoint quality steps` value is ignored when using **time-based** checkpoint mode.
If `checkpoint_total_files` value is 1 or bigger, this `checkpoint_quality_steps` definition is ignored.
See d-2a for more detail.
checkpoint quality steps value is different meaning depending on you choose "**uniform-sampling**" or
"**adaptive-sampling**".

If choose "**uniform-sampling**", this value is identical as samples per pixel count (SPP).
If you set `checkpoint quality steps` as 3, checkpoint file is written start from 1 SPP and
every 3 sub samples.
Checkpoint file is created when all pixels has SPP count as
```
1, 4, 7, 10, 13, 16, 19, 22, and so on.
```
(Original SPP sequence is grouped by steps number=3 and pick 1st number of each group.
```
(1), 2, 3 / (4), 5, 6, / (7), 8, 9 / (10), 11, 12 / (13), 14, 15 / (16), 17, 18 / (19), 20, 21 / (22), 23, 24 / ,,,)
```
If you are use
[overwrite mode](../optional-checkpoint-sceneVariables/#checkpoint-file-overwrite-and-multi-version-control)
= false, you can see following output file.
(User define `checkpoint file` name as "checkpoint.exr" in this case).

```
checkpoint_064.exr
checkpoint_256.exr
checkpoint_448.exr
checkpoint_640.exr
and so on.
```

Subpixel sampling number is converted to the tile-based sampling number (i.e. multiply 64,
1 tile = 64 pixels) first.
Then this tile sample number is now part of the checkpoint file name.<br>
<br>
If choose "**adamptive-sampling**", this `checkpoint quality steps` value is slightly different
meaning from "**uniform-sampling**" situation. Adaptive sampling case, this value indicates
internal adaptive test iteration loop count. If you set this value as 3, checkpoint file
is written start from 1 SPP and is written every after 3 adaptive sampling iteration loop is completed.
Please keep in mind this checkpoint quality steps value is not a pixel sampling step value when
using adaptive sampling mode. Under adaptive sampling case, due to each pixel is sampled adaptively and
global pixel sampling count control like **uniform-sampling** does not fit well.<br>
<br>
So far, each pixel is tested pixel variance and decide pixel is completed or not.
However this test is not executed every single sub pixel samples.
Adaptive sampling executes this test at special predefined subpixel sampling count only.
At this moment, this test is done at after finishing following subpixel samples.
```
1, 5, 11, 19, 29, 41, 55, 71, 89, 109, 131, 155, 181, 209, 239, 271, 305, , , ,
```

This special subpixel sampling sequence (calls as [KJ sequence](../../kj-sequence))
is hardcoded internal of adaptive sampling logic and user can not change (also this sequence might be
changed in the future).<br>
<br>
We can not stop and save intermediate image between above subpixel sampling count during adaptive sampling.
This is the main reason of this value has different meaning between **uniform-sampling** and
**adaptive-sampling**.<br>
<br>
If you set `checkpoint quality steps` as 3 under **adaptive sampling**, checkpoint file is created start
from 1 SPP and file is created every 3 steps of this sequence's subpixel sampling number completed. 
```
1, 19, 55, 109, 181, 271, , ,
```
(Original SPP sequence is grouped by steps number=3 and pick 1st number of each group.
```
(1), 5, 11 / (19), 29, 41 / (55), 71, 89 / (109), 131, 155 / (181), 209, 239 / (271), 305,,,)
```
If you are use
[overwrite mode](../optional-checkpoint-sceneVariables/#checkpoint-file-overwrite-and-multi-version-control)
= false, you can see following output file.
(User define `checkpoint file name` as "checkpoint.exr" in this case).
```
checkpoint_0064.exr
checkpoint_1216.exr
checkpoint_3520.exr
checkpoint_6976.exr
and so on.
```
Subpixel sampling number is converted to the tile sampling number (i.e. multiply 64, 1 tile = 64 pixels)
first. Then this tile sample number is now part of the checkpoint file name.<br>
<br>

## Activation of checkpoint rendering
After setup all parameters of above, you are ready to do checkpoint rendering.
There are 2 ways to activate checkpoint rendering.
scene variable solution
```
["checkpoint active"] = <bool> -- true or false
```
or
moonray command option solution
```
-checkpoint # checkpoint render enable
```



