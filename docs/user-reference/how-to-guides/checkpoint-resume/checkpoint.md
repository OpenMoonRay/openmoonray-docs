---
title: Checkpoint rendering
---
# Checkpoint rendering
---

## Checkpoint Rendering
There are two modes of checkpoint rendering time- and quality-based.  The time-based mode generates checkpoint files based on a user-defined time interval. The quality-based checkpoint mode generates checkpoint files based on a user defined quality steps interval. 

To use the time-based mode, you need to specify the time interval as the logic of generating checkpoint files.  To use the quality-based mode, you need to specify quality interval as the logic of generating checkpoint files.  From a user control standpoint, this is an only difference between time and quality-based checkpoint renders.  Other checkpoint related parameters and controls are shared between modes, such as the checkpoint related renderOutput definitions.

The default mode is time-based for checkpoint rendering.

## What is  time-based checkpoint rendering?
When using time-based checkpoint rendering, MoonRay will produce checkpoint image outputs according to a user defined time interval.  Intervals are measured from the 'MCRT_computation' start time and do not include 'renderPrep' time.  For example, setting the checkpoint interval to 15 minutes means that MoonRay will generate intermediate rendering results every 15 minutes as checkpoint images.  There are exceptions to this logic:

1. The very first checkpoint image file is always written out 5 seconds from  when an MCRT computation is started.
2. Additionally MoonRay will try to write out a checkpiont when 1 sample per pixel is completed.

Other than those two exceptions, the user specified interval is used for writing out each checkpoint image.

## What is quality-based checkpoint rendering? 
When using quality-based checkpoint rendering, MoonRay will produce checkpoint image output according to a user defined quality steps interval definition.  The quality steps parameter has a slightly different meaning between uniform and adaptive sampling, which is detailed in the [how to use checkpoint rendering](./how-to-use-checkpoint/#d-checkpoint-mode) section.

Similar to time-based mode, quality-based also will try to output a checkpoint when 1 sample per pixel is completed, which is an exception to the user-specified quality steps setting.

## How to use "Checkpoint Rendering"
Detailed information is [here](./how-to-use-checkpoint).

## Interrupting a rendering process with a SIGINT
MoonRay includes a special feature to write and dump checkpoint files due to a render process interruption received via SIGINT.  Details are [here](./sigint-interruption).

## Additional features of checkpoint rendering
Regardless of the checkpoint mode, you can set a checkpoint render [time cap](./optional-checkpoint-sceneVariables/#time-cap-control) in total minutes or [sample cap](./optional-checkpoint-sceneVariables/#sample-cap-control) by total number of samples per pixel.  At that point checkpoint rendering will be forced finished when the entire render time (not including 'renderPrep' time) or the quality exceeds the user defined cap.

Specifically MoonRay checks the finish condition _after_ each output checkpoint file is written, which means that the last checkpoint file may be a bit past the user defined cap.

All intermediary checkpoint images have the same AOV buffers as the final regular output. The sampling condition is the only difference between a checkpoint file and final regular output.  Therefore, if checkpoint rendering is completed without any fatal errors, the very last checkpoint file and the regular output file contain identical output (though they may be written to different locations).

You can specify the intermediary checkpoint file location different from the regular final output location via the RenderOutput definition.  Note that all intermediate checkpoint files are overwritten at their output location, which is the default behavior.  This behavior can be changed to 
[not-overwrite](./optional-checkpoint-sceneVariables/#checkpoint-file-overwrite-and-multi-version-control)  the intermediate checkpoint files, as desired. If you select to use the non-overwrite mode, each output filename will add the sample total count per tile as a pert of filename.  

This non-overwrite mode is particularly useful when using quality-based checkpoint mode.  Note that the non-overwrite mode is only only supported in *moonray* command-line usage, and *moonray_gui* is not supported.

MoonRay also provides a way to run a LUA script just after finishing an intermediary checkpoint write.  This is useful to execute a user-defined action for checkpoint files.  Further details are [here](./post-checkpoint-LUA-script).

There are additional [functionalities](./optional-checkpoint-sceneVariables) that can be changed for Checkpoint rendering.

## Checkpoint Progress Percentage and ETA (Estimated Time for Accomplishment)
MoonRay provide progress percentage _and_ ETA information for checkpoint rendering.  The progress percentage is calculated based on sample count. This means that the progress percentage does not include any pixel computation cost information (i.e. it does not care about each pixel's computation cost difference), and is purely computed by sampling count base.  The percentage is given regardless of sampling mode.

The ETA _is_ computed based on an estimation of sample cost. However, ETA is supported for uniform sampling mode only, and not adaptive sampling.

## Checkpointing Limitations
With the time-based mode, MoonRay will try to keep the user defined time interval for each checkpoint image file output. Note however that the interval value is a _target_ and may not create checkpoint output file at the exact timing per the interval specified due to things such as a low precision sample cost estimation and/or unexpected computational cost changes such as cache hit failures or CPU load changes.

