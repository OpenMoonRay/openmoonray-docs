---
title: moonray
---
# moonray

**moonray** is the command-line tool for rendering scenes in [RDL2]({{site.baseurl}}/getting-started/about/rdl-scene-format/) scene format with MoonRay.

When the render is complete the resulting beauty render is written to disk, as well as any additional images that are specified via
[RenderOutputs]({{site.baseurl}}/user-reference/scene-objects/render-output/RenderOutput/)

## Command-line options
**moonray** has many command-line options -- too many to mention them all here so we'll just cover some of the
most commonly used options.

Use the _-h_ flag to display the full list of command-line options.

```bash
$ moonray -h
```

### Inputs
The inputs to **moonray** are one or more RDLA or RDLB files (see the [RDL2]({{site.baseurl}}/getting-started/about/rdl-scene-format/) scene format).

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

### Scene Variables
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

### Lua Variables
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
---

Here's a slightly more practical example where we combine some of the ideas mentioned on this page.

First we have some snippet of some input scene, "sphere.rdla":
```lua
-- sphere.rdla
SceneVariables {
    ["pixel_samples"] = 12,
    ["max_depth"] = 10,
    ["image_width"] = 1920,
    ["image_height"] = 782,
}
SphereGeometry("sphere") {
    ["radius"] = 1,
    ["phi_max"] = 360,
    ["zmax"] = 1,
    ["zmin"] = -1,
}

-- ... Skipping the rest of this content for brevity.
-- ... Don't forget to add a Camera, Layer, GeometrySet, LightSet, Lights, Materials, etc...
```

Next we create a new RLDA file to override the sphere's _radius_, "override.rdla"
```lua
-- override.rdla
SphereGeometry("sphere") {
    ["radius"] = my_radius, -- override sphere's radius by accessing a global Lua variable
}
```

Lastly we render the scene using
```bash
$ moonray -in sphere.rdla -in override.rdla -rdla_set "my_radius" "42" -scene_var "pixel_samples" "1" -scene_var "max_depth" "2" -scene_var "res" "2"
```

In this example, we used:
  - two input RDLA files, presumably an "original" scene file and a file containing only overrides
  - a Lua variable which is used in the second file to override an attribute from an object in the first file
  - some SceneVariable overrides, to make the scene render more quickly while testing

.. All of that and we didn't even modify the original "sphere.rdla" scene file!  This type of command-line workflow can be handy
when testing heavy scenes, wedging parameters,  or for other purposes such as... 

... a bash script that batch renders a static scene by using _-rdla_set_ with
a different value each time to drive a Lua variable that in turn animates a camera spin, for a poor man's wedge/asset review tool.
