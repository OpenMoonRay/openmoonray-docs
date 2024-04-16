---
title: MoonRay command-line tool
---
# MoonRay command-line tool

**moonray** is the command-line tool for rendering scenes in [RDL2](../../../getting-started/about/rdl-scene-format/) scene format with MoonRay.<br>
For interactive rendering, see [**moonray_gui**](../moonray-gui).<br>
For distributed single/multi machine rendering, see [**arras_render**](../arras_render).<br>

**moonray** takes in one or more input files, and when the render is complete the resulting rendered image is written to disk, along with any additional images that are specified via
[RenderOutputs](../../scene-objects/render-output/RenderOutput/) in the scene description.

## Command-line options
Use the _-h_ flag to display the full list of command-line options.

```bash
$ moonray -h
Usage: moonray [options]
Options:
    -help
        Print this message.

    -in scene.rdl{a|b}
        Input RDL scene data. May appear more than once. Processes multiple
        files in order.

    -deltas file.rdl{a|b}
        Updates to apply to RDL scene data. May appear more than once.
        First renders without deltas and outputs the image. Then applies each
        delta file in order, outputting an image between each one.

    -out scene.exr
        Output image name and type.

    -threads n
        Number of threads to use (all by default).

    -cpuAffinity cpuIdDef
        set CPU affinity definition. "-1" disables CPU affinity control.
        cpuIdDef example : 0,1,2     => 0 1 2
                           0-2,4,6-9 => 0,1,2,4,6,7,8,9
                           -1        => disable CPU affinity (default)

    -socketAffinity socketIdDef
        set Socket affinity definition
        socketIdDef example : 0
                              0,1 or 0-1 => 0 1

    -size 1920 1080
        Canonical frame width and height (in pixels).

    -res 1.0
        Resolution divisor for frame dimensions.

    -exec_mode mode
        Choose a specific mode of execution. Valid options are:
        scalar - run in scalar mode (default).
        vector - always run vectorized regardless if volumes are found.
        xpu    - run in xpu mode.
        auto   - attempt to run vectorized but fall back to scalar if volumes are found.

    -sub_viewport l b r t
    -sub_vp       l b r t
        Clamp viewport render region.

    -debug_pixel x y
        Only render this one pixel for debugging. Overrides viewport.

    -dso_path dso/path
        Prepend to search path for RDL DSOs.

    -camera camera
        Camera to render from.

    -layer layer
        Layer to render from.

    -fast_geometry_update
        Turn on supporting fast geometry update for animation.

    -record_rays .raydb/.mm
        Save ray database or mm for later debugging.

    -primary_range 0 [0]
        Start and end range of primary ray(s) to debug. Only active with
        -record_rays.

    -depth_range 0 [0]
        Start and end range of ray depths to debug. Only active with
        -record_rays.

    -rdla_set "var name" "expression"
        Sets a global variable in the Lua interpreter before any RDLA is
        executed.

    -scene_var "name" "value"
        Override a specific scene variable.

    -attr_set "object" "attribute name" "value"
        Override the value of an attribute on a specific SceneObject.

    -attr_bind "object" "attribute name" "bound object name"
        Override the binding on an attribute of a specific SceneObject.

    -info
        Enable verbose progress and statistics logging on stdout.

    -debug
        Enable debug level logging on stdout.

    -stats filename.csv
        Enable logging of statistics to a formatted file.

    -athena_tags "TAG1=VALUE1 TAG2=VALUE2 ... TAGN=VALUEN"
        Provided string will be sent to Athena Log Server and can be used to access stats on this render
        Intended to be used for storing user specific data of interest such as RATS tests, testmaps, etc
        TAG and VALUES are entirely up to the user

    -resume_render
        activate both of resume render and checkpoint render

    -resumable_output
        Make aov output as resumable for resume render

    -checkpoint
        Enable progress checkpoint rendering mode
```

Below is more information on the some of the most commonly used options and workflows.

### CPU (physical socket/core) affinity control

```
-socketAffinity <id-def-string>
-cpuAffinity <id-def-string>
```

You can run the moonray process attached to the physical cores by using one of 2 different CPU affinity control options. "-socketAffinity" is used for physical socket-based CPU-affinity control. And "-cpuAffinity" is used for physical core-based CPU-affinity control.<br>
We can get the same control of "-socketAffinity" option using "-cpuAffinity" if you carefully consider which core# belongs to which socket. However, this is not as user-friendly, so we provide a "-socketAffinity" option for simplifying the socket-based CPU affinity control.<br>
"-cpuAffinity" option allows us to attach the MoonRay process to the cores in a more detailed way like partial cores of particular sockets. This is useful when you want to run MoonRay inside a particular NUMA node.

Both options use id-def-string as an argument. The same id-def-string format is used for both of options but the meaning is different. The id-def-string for "-socketAffinity" indicates physical socket-id and the id-def-string for "-cpuAffinity" indicates physical core-id.

Format of id-def-string for "-socketAffinity" and "-cpuAffinity" option
1. list of ids : separator is ‘,’(comma) without space.
```
	“0,1,2”	-> 	0 1 2
	“9,8,5”	->	5 8 9
	“9,5,7”	->	5 7 9
```
2. range def by ‘-‘(dash) without space
```
	“0-3”		->	0 1 2 3
	“1-3,8-9”	->	1 2 3 8 9
	“5-7,0-2”	->	0 1 2 5 6 7
```
3. You can use both the list of ids and range def at the same time
```
	“0-2,3,4-6”	->	0 1 2 3 4 5 6
	“4,7-8,1-3”	->	1 2 3 4 7 8
```

Combination of “-socketAffinity” and “-cpuAffinity” options
* If you specify "-cpuAffinity" then MoonRay gets cpu-based control. If you specify "-cpuAffinity -1", CPU-affinity is disabled.
* If you specify "-socketAffinity" then MoonRay gets socket-based control.
* If you specify both "-socketAffinity" and "-cpuAffinity", MoonRay gets cpu-based control (socketAffinity setting is ignored).
* If you specify neither of "-socketAffinity" and "-cpuAffinity" then CPU-affinity is disabled.

### Checkpoint Rendering
See the [Checkpoint/Resume Rendering](../../how-to-guides/checkpoint-resume/) page.

### Execution Mode
See the [Execution Modes](../../execution-modes/) page for more info.

### Inputs
The inputs to **moonray** are one or more RDLA or RDLB files (see the [RDL2](../../../getting-started/about/rdl-scene-format/) scene format).

```bash
$ moonray -in scene.rdla
```

Multiple RDL2 input files are supported.  Each input file can declare new [SceneObjects](../../scene-objects) along with their attributes, as well
as override or set attributes on SceneObjects that were declared in previously processed files.  The RDL2 files are processed in the order they
are given on the command-line.

It is sometimes convenient to store large vector attributes (vertices, face indices, or other per-vertex data, for example) in RDLB binary format,
while the bulk of the SceneClasses and their non-vector attributes are stored in RDLA format for easy human readability.

```bash
$ moonray -in main_scene.rdla -in extra_lights.rdla -in some_large_geom_data.rdlb
```

### Outputs
By default, **moonray** writes out an image named _scene.exr_.  This name of this file can be changed using the _-out_ argument:

```bash
$ moonray -in scene.rdla -out my_image.exr
```

**moonray** will also potentially write out additional images containing various data if the scene contains
[RenderOutputs](../../scene-objects/render-output/RenderOutput/)

### Overriding Scene Variables
It is possible to set or override any attribute of the [SceneVariables](../../scene-objects/scene-variables/SceneVariables/) directly from the command-line,
via the _-scene_var_ command-line argument.  This is useful for things like optimizing render settings on an existing scene without modifying the input RDL2
files.

```lua
-- scene.rdla
SceneVariables {
    ["pixel_samples"] = 12,
    ["max_depth"] = 10,
    ["image_width"] = 1920,
    ["image_height"] = 782,
}
```

```bash
$ moonray -in scene.rdla -scene_var "max_depth" "2" -scene_var "pixel_samples" "1" -scene_var "res" "2"
```

### Overriding Attributes
You can override an attribute of any Scene Object using _-attr_set_ on the command-line. This feature can be useful for things like running a series of
wedge renders via bash script, for example.

Here's a simple example:
```lua
-- sphere.rdla
SphereGeometry("sphere") {
    ["radius"] = 1,
    ["phi_max"] = 360,
    ["zmax"] = 1,
    ["zmin"] = -1,
}
```

```bash
$ moonray -in sphere.rdla -attr_set "sphere" "radius" "42"
```

### Setting Lua Variables
It is also possible to set global Lua variables that will be available during the processing of the input RDLA files using
the _-rdla_set_ command-line argument.  These variables can then be accessed in an RDLA file.

Here's an simple example:
```lua
-- sphere.rdla
SphereGeometry("sphere") {
    ["radius"] = my_radius,
    ["phi_max"] = 360,
    ["zmax"] = 1,
    ["zmin"] = -1,
}
```

```bash
$ moonray -in sphere.rdla -rdla_set "my_radius" "42"
```

