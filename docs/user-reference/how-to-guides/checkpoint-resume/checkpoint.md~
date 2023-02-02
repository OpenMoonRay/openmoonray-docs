---
title: Checkpoint rendering
---
# Checkpoint and Resume rendering
---

## Checkpoint Rendering
There are 2 types of checkpoint rendering mode. "time-based" and "quality-based". Time-based checkpoint rendering mode generates checkpoint files based on the rendering time interval. Quality-based checkpoint rendering mode generates checkpoint files based on the quality. 
If you want to use time-based checkpoint mode, you have to specify time interval as the logic of generate checkpoint files. If you want to use Quality-based checkpoint mode, you have to specify quality interval as the logic of generate checkpoint files. This is an only difference of time-based and quality-based from user control stand point.  Basically other checkpoint related parameters and controls are shared with both of time-based and quality-based checkpoint mode, for example, checkpoint related renderOutput definitions.
User need to select one of the time-based or quality-based checkpoint mode for checkpoint rendering. Defualt checkpoint mode is time-based at this moment.

## What is a time-based checkpoint rendering
If you use time-based checkpoint rendering, moonray can produce checkpoint image output according to the user defined time intervals. Intervals are measured from the MCRT_computation start time and not include renderPrep time. Setting  the checkpoint interval to 15 minutes means moonray will generate intermediate rendering result every 15 minutes as checkpoint images.
1) beauty AOV
2 exceptions, very first checkpoint image file is always write out at 5 second from MCRT computation started. And also moonray tries to write out when 1 sample/pixel is completed. Otherwise user specified interval is used for write out checkpoint image.

## What is a quality-based checkpoint rendering
If you use quality-based checkpoint rendering, moonray can produce checkpoint image output according to the user defined quality steps definition. Quality steps parameter is slightly different meaning between uniform sampling and adaptive sampling (explain detail later).
Quality-based checkpoint render also try to output 1 sample/pixel image regardless of your specified quality step setting.

## Misc information of checkpoint rendering
Regardless of checkpoint mode (i.e. time-based or quality-based checkpoint mode), you can set checkpoint render time cap by minutes. Checkpoint render is forced finished when entire render time (not include renderPrep time) is exceeded to the user define time cap length. Strictly speaking, moonray checks finish condition every after output checkpoint file. This means, last checkpoint file has longer than user define time cap length when time cap is defined.
Created checkpoint image has same AOV buffers as final regular output. A sampling condition is an only difference between checkpoint file and final regular output.
If rendering is completed as normal condition without any fatal error, very last checkpoint file and regular output file is information wise identical always (might be different location).
You can specify checkpoint file location different from regular output by RenderOutput definition. All repeatedly output checkpoint files are overwritten again and again. This is default behavior. You can change this behavior to non-overwrite mode if you want. If you select non-overwrite mode, checkpoint output filename changed and add sample total count per tile as a pert of filename. This non-overwrite mode is useful when you are using quality-based checkpoint render mode.
Currently this checkpoint rendering mode is only supported moonray and raas_qui is not supported.

## Progress / ETA (Estimated Time for Accomplishment)
moonray provide progress percentage and ETA information under checkpoint rendering.
Progress percentage information is calculated based on sampling count. This means this percentage does not include any pixel computation cost information (i.e. percentage does not care about each pixel computation cost difference) and purely computed by sampling count base.
ETA is computed based on estimation of sample cost. However only support uniform sampling mode only so far.

## Limitation
Under time-based checkpoint mode, moonray try to keep checkpoint interval for every checkpoint image file output by user defined time interval. But checkpoint_interval value is a target interval and might not create checkpoint output file as proper timing due to low precision sample cost estimation result and/or unexpected computational cost change like cache hit failure or CPU load change.
ETA information is only provided when using time-based checkpoint w/ uniform sampling.
