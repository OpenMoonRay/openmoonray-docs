---
title: Resume rendering
---
# Resume rendering
---

## What's "Resume Rendering"
moonray can adding more sampling to the previously computed image. This is a idea of resume rendering.
(Currently only moonray is supporting resume rendering mode and moonray_gui does not.)<br>
However we can not use all of the image files as resume image file (which is a input of resume rendering).
We need special procedure to create resume file. <br>
This resume file needs to have stored special information for resume rendering. We need to generate
this special resume file for resume render input by "**resumable output**" mode.<br>
<br>

## Resume file generation as resumable output
You can use any output image and checkpoint file image for resume rendering however these files should
be created by "**resumable_output**" mode.<br>
moonray can not start resume render from resume file which is not created by "**resumable_output**" mode.
In order to create "**resumable_output**" mode file, you should use scene_variable `"resumable output"` like
```
["resumable output"] = true
```
or
```
moonray command option "-resumable_output" to create resume file.
```
Resume file also need to include 5 special AOV buffers. (See also
[here](../checkpoint/how-to-use-checkpoint/#b-special-aovs-definition-for-resume-rendering))

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

Without these special AOV buffers, moonray also can not start render and fall back to normal
rendering mode. These "**beauty**", "**alpha**", "**weight**", "**beauty aux**", and "**alpha aux**" AOVs
definitions are not created by "`resumable_output`" option automatically.
You need to define these by yourself.<br>
<br>

## How to run "resume rendering"
First of all, you need to modify RenderOutput block "`resume file name`" command and specify resume file name.
for example
```
["resume file name"] = "resume0.exr"
```
If you have multiple file output configuration on your `RenderOutput` block, you need to set
"`resume file name`" as exactly same pattern as "`file name`". 
This means different pattern settings are not supported for resume rendering like regular file output goes
to 2 files and resume file is 1 file. In this case, moonray shows error then exit.
Resume file setting should follow same pattern of regular output file setting.<br>
After setup resume file name setting by `RenderOutput`, you are ready to do resume rendering.<br>
<br>
There are 2 ways to activate resume render.<br>
<br>
scene variable (rdla) solution 
```
["resume_render"] = <bool> -- enable or disable resume render.
```
or
moonray command option solution
```
-resume_render # enable resume render
```
Resume render is disabled by default.<br>
**Resume render mode is canceled and fall back to regular standard rendering when resume render can not open
resume file.**<br>
<br>

## Goal and Quality of resume render
Thinking about following 2 situations.
1. using some sampling parameters and create images by normal render
2. using same sampling parameters of 1. but image is created by multiple phases by resume render from resume
file which created by checkpoint render.

Basically renderer try to create same image for above 2 situations.
For **uniform sampling** with full float resume file case, results are match by very high precision.<br>
However, **adaptive sampling** with float resume file case, renderer can not guarantee to render exactly the
same image. Basically #2 is slightly better (more samples) than #1 in this case.<br>
If resume file is created half float instead of full float, result is also slightly different between
#1 and #2 then simillaly #2 is also slightly better than #1.<br>
<br>

## Fall back to regular render from resume render
Some case resume render fallbacks to regular render when render got trouble to revert information from
resume file. Followings are cases which fallbacks to the regular render from resume render.

### A. Resume file related error
1. resume file is not specified inside RenderOutput definition => fallback
2. can not open resume file or multiple resume files => fallback
3. read data from resume file failed => fallback
4. multipart image name is wrong between RenderOutput definition => fallback
5. resume file resolution mismatch with scene variable => fallback
6. resume file AOV configuration is different from RenderOutput definition => fallback
7. no weight AOV data in the resume file => fallback
8. no beautyAUX data in the resume file => fallback
9. no "progressCheckpointTileSamples" in the resume file exr meta data => fallback
10. resume related metadata is different between multiple defined resume files => fallback

### B. Sampling condition related error
1. previous sample is **ADAPTIVE** and current is **UNIFORM** => fallback

### C. Internal memory related error
1. There is small possibility to get memory allocation error which related to resume render => fallback

<br>

## Limitation and quality control for resume render
Basically you can not any scene description change between previous render and resume render.
Obviously change scene does not make sense for resume render.
However, you can change sampling parameters for resume render. This sampling parameters are the only
parameter which you can change by resume render.<br>
Most typical scenario is set higher sampling rate for resume render. And some times might change
sampling mode between **uniform** / **adaptive**.<br>
<br>
Regarding sampling type, technically there are 4 different situation for resume render and resume
file configurations.

1. uniform sampled resume file -> uniform sampling resume render
2. uniform sampled resume file -> adaptive sampling resume render
3. adaptive sampled resume file -> adaptive sampling resume render
4. adaptive sampled resume file -> uniform sampling resume render

All the case from #1 to #3 are OK. moonray properly compute resume render task.
However, #4 does not work so far. Main internal resume logic can support #4 but
progress percentage update logic does not support situation of #4 so far unfortunately.<br>
You can not use #4 at this moment. If your resume render has situation of #4,
moonray shows error and cancel resume render and fall back to normal rendering.<br>
<br>

## On-resume LUA script execution
Moonray provides the way to run LUA script on the resume action started.
Detail info is [here](./on-resume-LUA-script).




