---
title: hd_render Command

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# hd_render Command
The HdMoonray project includes a command-line program, hd_render, that performs Hydra renders from
a USD scene file. hd_render can use any Hydra render delegate except for Storm (the Pixar openGl
renderer) : this limitation is simply because Storm requires OpenGL libraries to be linked into
the main application, and we have chosen not to do this for hd_render.

## Usage
```bash
hd_render [Flags]
-h|-help
    Print this message.

Required:
-in scene.usd{a}
    Input USD scene data.

-out scene.exr
    Output image name and type.

Optional:
-aov color
    Name or aov (color, depth, normal, etc...)

-camera <CAMERA_NAME>
    Name of the rendering camera.  If not specified, a default
    camera is created that frames the scene geometry.

-sampling_camera <CAMERA_NAME>
     Use this cameras shutter:open and shutter:close to
     define the motion blur sample steps

-renderer Moonray
    Which hydra render delegate plugin to use.
    Use '-renderer' to see a list of available renderers.

-delta_in <DELTA>.usd
    After finishing the main render, apply the contents of
    <DELTA>.usd to the scene and re-render the result into
    the file specified with the -delta_out option.

-delta_out <DELTA>.exr
    Specifies the output delta file.

-delta_set <SETTING> <VALUE>
    After finishing the main render, apply this render setting
    and re-render the result into the file specified with the -delta_out
    option.  This option can appear multiple times.

-purpose <PURPOSE>
    Specifies a UsdGeomImageable purpose to include in the render.
    <PURPOSE> can be one of 'render', 'proxy', or 'guide'.  This option
    can appear multiple times in order to select multiple purposes.
    The 'default' purpose is implicity set.

-refine-level <N>
    Set geometry refine level fallback to N. Tessellation rate is
    2^N. 0 disables subdivision, 1 is the default.

-res 1.0
    Resolution divisor for frame dimensions.

-set <SETTING> <VALUE>.
    Sets the render setting <SETTING> to <VALUE>.  This
    option can appear multiple times.
    Use '-set' to see a list of available settings.

-size 1920 1080
    Canonical frame width and height (in pixels).

-time <FRAME>
    Set timecode (i.e. frame) to render at. If not set, uses the special
    value 'Earliest' (see pxr::UsdTimeCode)

-timing [<file>]
    Write elapsed time in seconds for each step to the given file in simple
    text format. If no file is specified, write timing to stdout

-trace <STEPNAME> [<FILE>]
    Use the Pixar trace library to trace function calls for the given
    step. Supported step names are: load_plugin, open_stage, populate, render,
    open_delta_stage and delta_render. Writes log to the specified file, or to
    /tmp/trace_<STEPNAME> if no file is specified. Can appear multiple times
```
