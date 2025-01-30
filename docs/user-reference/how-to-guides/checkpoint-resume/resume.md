---
title: Resume rendering
---
# Resume rendering
---

## What is "Resume Rendering"
Resume rendering allows more sample data to be added to a previously computed image.  This is supported in `moonray` running in "resume rendering" mode, and is not supported in `moonray_gui`.

It is important to note that not all image files can be used as a resumable image file, which is the
required input for resume rendering. Additional information is required for resume rendering
functionality, and storing this information in the resumable file is done by enabling the
_resumable_output_ attribute on SceneVariables.<br>
<br>
Also, we must start resume rendering with _resumable_output_ enabled. Enabling _resumable_output_ mode at
resume rendering time generates special frame buffer data internally and is used for reading in
resumable data. This data is required to start the resume rendering process.
The resume rendering might generate checkpoint image again and this checkpoint image must also contain
the extra information required to make it resumable.<br>
<br>
Therefore we need _resumable_output_ enabled for both generating resumable data and starting resume rendering.

## Creating resumable output files (Resumable output mode)
Any output image or checkpoint file image can be used for resume rendering, as long as they were created
with `moonray` running in _resumable_output_ mode.  MoonRay can not start resume a render from an image
file that was not rendered using _resumable_output_ mode.
Also, _resumable_output_ mode is required to start resume rendering from an already generated resumable file.<br>
To set a _resumable_output_ mode, you should use the setting like so:
```lua
["resumable_output"] = true
```
or set the command option to create a resumable file:
```bash
moonray -resumable_output
```
Each resumable image file needs to include five special AOV buffers, similar to [checkpoint image files](../checkpoint/how-to-use-checkpoint/#b-special-aovs-definition-for-resume-rendering). 

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

Without these special AOV buffers, MoonRay can not start resumable renderering and will fall back to normal
rendering mode.  These AOVs are *not* created by the _resumable_output_ option automatically, and will need to be defined.

## How to run Resume rendering
The first step is to modify the _resume_file_name setting in the "RenderOutput" block to specify the resumable file name.  For example
```lua
["resume_file_name"] = "resume0.exr"
```
If there are multiple file output settings in the RenderOutput" block, then the setting for _resume_file_name_ needs to follow the exact same pattern as the setting for _file_name_, which is used for regular image file output.

In other words, different patterns for both settings are not supported for resume rendering, such as regular image file output going to two files, but the resumable image file output going only to one file.   In such a case, `moonray` would show an error and then exit.

After setting the _resume_file_name value, MoonRay is ready to do resume rendering.  There are two ways to activate a resumable render; either via a setting:

```lua
["resume_render"] = <bool> -- enable or disable resume render
```
or via the command option:

```bash
moonray -resume_render 
```

Resume rendering is disabled by default.  Also note that Resume rendering mode is canceled and will fall back to regular standard rendering when it can not open a resumable file.

## Goals and quality output of Resume rendering
Consider the following two scenarios, for which MoonRay will try to create the same image:

1. Using some sampling parameters and creating an image with normal, non-resumable rendering
2. Using the same sampling parameters, however this time the image is created in multiple phases by resumable rendering via a resumable file which created by checkpoint rendering.


When rendering using uniform sampling and with a full float resumable image file, the rendering results results are matched with a very high precision.

However, when rendering using adaptive sampling with a full float resumable image file, the rendering results can not guarantee to render exactly the same image as in uniform sampling. Essentially, scenario #2 is slightly better (more samples) than scenario #1.

If the resumable file is created at half float instead of full float, then the rendered result is also slightly different between  Scenarios 1 and 2, with Scenario #2 having slightly better results.

## Falling back to regular, non-resumable rendering
In some cases, Resume rendering mode falls back to regular rendering mode, when MoonRay has trouble to revert information from a resumable file.  The following are some cases this can be seen:

### Resumable file errors
- The _resume_file_name_ setting is not specified inside RenderOutput definition
- MoonRay can not open the resume file or multiple resume files
- Reading data from resume file fails
- Multipart image name is wrong in the RenderOutput definition
- There is resumable file resolution mismatch with the resume setting
- The resumable file AOV configuration is different the settings defined in the RenderOutput block
- No Weight AOV data exists in the resumable file
- No Beauty AUX AOV data exists in the resumable file
- No "progressCheckpointTileSamples" exists in the resumable file exr meta data
- Resume related metadata is different between multiple defined resumable files

### Sampling condition error
- The prior sampling mode of the resumable image file is *ADAPTIVE* and current sampling mode Resume rendering is *UNIFORM* 

### Internal memory error
- There is small possibility to get memory allocation error related to resume render


## Limitations and quality controls for Resume rendering
The essential limitation of Resume rendering is that there can not be any scene description changes between previous resumable image file and resuming the render, which would not make sense.  However, the sampling setting can be changed when resuming a render. In fact, the sampling settings are the only parameters which can be changed when resuming renders.

The most typical scenario is to set a higher sampling rate for resuming a render.  Occasionaly there may be a desire to also change the sampling mode between uniform and adaptive sampling.  That would entail the following four scenarios:

1. Uniformly sampled resumable file -> resuming a render with uniform sampling
2. Uniformly sampled resumable file -> resuming a render with adaptive sampling
3. Adaptively sampled resumable file -> resuming a render with adaptive sampling
4. Adaptively sampled resumable file -> resuming a render with uniform sampling

The scenarios from 1 to 3 are fine and MoonRay will properly compute the resume render task.  However, the fourth scenario does not currently work.  This is because although the internal resume logic can support Scenario #4, the progress percentage update logic does not support it (yet).  Therefore if MoonRay encounters that fourth scenario, it will show an error, cancel resume rendering and fall back to normal rendering.

## On-resume LUA script execution
MoonRay also provides a way to run a LUA script when a resume rendering action has started.  This is useful to execute a user-defined action for resumable image files.  Further details are [here](./on-resume-LUA-script).



