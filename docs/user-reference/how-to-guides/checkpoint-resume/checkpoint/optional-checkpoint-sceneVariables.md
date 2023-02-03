---
title: Optional Checkpoint SceneVariables
---
# Optional Checkpoint SceneVariables
---
There are other optional scene-variables which are shared by both of **time-based** and
**quality-based** checkpoint rendering.

## Checkpoint file overwrite and multi-version control
Every time checkpoint files are created, previous checkpoint files are overwritten.
This is default behavior. If you don't want to overwrite checkpoint files
(i.e. keep every checkpoint file), you can set overwrite mode to **false** by
using the following scene variable.
```
["checkpoint overwrite"] = <bool> -- true or false
```
If you set `checkpoint_overwrite` as **false**, the renderer outputs each checkpoint file as
the following filename.
```
<checkpointFileName> + "_" + <tileSampleNumber> + ".exr"
```
checkpointFileName is a  name which is defined by `"checkpoint_file_name"` inside `RenderOutput`.
Regular checkpoint file which is defined by `checkpoint_file_name` is always written out regardless
of `checkpoint_overwrite` condition under checkpoint rendering.
Default of `checkpoint overwrite` is **true** and all previous checkpoint files are overwritten.
If you want to save checkpoint files as a different location from regular checkpoint output,
you have to set `checkpoint_multi_version_file_name` inside `RenderOutput` definition.
```
["checkpoint multi version file name"] = <multiVersionFilename>
```
If `checkpoint_multi_version_file_name` is not empty, checkpoint file name is changed as follows.
```
<multiVersionFileName> + "_" + <tileSampleNumber> + ".exr"
```
Using this `checkpoint_multi_version_file_name`, you can save all intermediate sample images to
the new location. This is useful for generating machine learning training data for example.
Default of `checkpoint_multi_version_file_name` is empty.<br>
<br>

## Background checkpoint write control
Image file write operation cost is not free. We are using openEXR and other image format and
mostly they are using data compression logic and it is CPU intensive task. Also posix I/O
operation over the network disk is costly. We need to write multiple checkpoint files during
rendering and we would like to minimize this checkpoint file write cost and maximize MCRT efficiency.
One of the very strong idea is that the checkpoint write is executed by background thread
independently from regular MCRT threads by parallel.<br>
<br>
This solution hides inperfectness of image library's (moonray is using openimageio) multi thread
implementation and maximize total rendering efficiency. moonray is writing all checkpoint files
by this idea (i.e. writing checkpoint files by background thread) as default.<br>
<br>
There is a special scene variable to disable this logic and fall back to old school solution.
```
["checkpoint_bg_write"] = <bool> -- true or false. default is true
```
If you set **false** to this variable, all background checkpoint write logic is disable and
checkpoint file is exclusively wrote under all MCRT threads are stopped.
There is no particular reason to set **false** this scene variable from performance stand point.
Mainly provide this scene variable as debugging purposes.
Default of this scene variable is **true** and always checkpoint file is write out by background
thread by parallel.<br>
<br>

## Checkpoint max bg cache control
```
["checkpoint_max_bgcache"] = <n>
```
This `checkpoint_max_bgcache` parameter controls maximum memory usage of temporary memory space
under `checkpoint_bg_write` = true. If `checkpoint_bg_write` = false, this `checkpoint_max_bgcache`
value does not do anything.
Renderer writes image by background thread when `checkpoint_bg_write` = true situation.
In order to do this, the renderer saves output data into temporary memory space first and
this temporary memory data is written out by the output thread in the later.
If checkpoint interval is shorter than write out cost, internal temporary memory is gradually
increased and process size getting bigger. This `checkpoint_max_bgcache` is safety logic to avoid
this situation.<br>
<br>
If for some reason, the renderer tries to keep data more than this `checkpoint_max_bgcache` number,
bg thread writing logic is temporally suspended and falls back to serial write mode.
Renderer writes out file by background thread again when extra memory is ready.
Renderer only increases internal memory if needed. This means the renderer always tries to use
as minimum memory as possible regardless of `checkpoint_max_bgcache` number which you set.<br>
<br>
You can not set 0. You have to set 1 or bigger number.
Default is 2. This means the renderer can keep a maximum 2 sets of output data and this default
value is reasonable and recommended.<br>
If you set bigger than 2, renderer can keep more backlog data internally and might get faster
write out results but you have to pay more memory usage cost.<br>
If you set 1, it reduces memory usage but some slow down might happen at (last - 1) checkpoint
and last checkpoint output. Usually (last - 1) and last checkpoint output is executed short
interval under time based checkpoint and might request increased internal memory usage.<br>
<br>

## Checkpoint output start sample control
You can specify samples per pixel (SPP) number to control when checkpoint render starts dumping file.
Checkpoint file is created when all pixel's SPP are same or bigger than this number.
Until then, checkpint file dump logic is skipped.
```
["checkpoint start sample"] = <int>
```
Deafult is 1. This means all checkpoint output sequence will be executed equal or bigger than 1 SPP.
You can set to 0 as well. If so checkpoint output file is always created regardless of SPP.<br>
<br>

## Sample cap control
You can set sub pixel sample cap count for one pixel.
```
["checkpoint sample cap"] = <int> -- sub pixel sample limit
```
This is a subpixel sample value for one pixel. If you set 64, rendering will stop when subpixel
sample exceeds 64.
Defaul is 0. This disables sample cap functionality.
This control is basically designed for debugging purpose.<br>
<br>

## Time cap control
You can set MCRT rendering time cap length by minute.
```
["checkpoint time cap"] = <float> -- minute
```
Checkpoint render is forced finished when entire render time (not include renderPrep time) is
exceeded to the user define time cap length.
Strictly speaking, moonray checks finish condition every after output checkpoint file.
This means, last checkpoint file has longer than user define time cap length when time cap is defined.
Default is 0. This disables time cap functionality.
