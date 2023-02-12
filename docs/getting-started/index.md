---
title: Getting Started
---
# Getting Started

![The Bad Guys]({{ "/assets/images/getting-started/badguys_car.png" | absolute_url }})

## Contents
The open source release contains the following pieces of technology:

- [MoonRay]({{ "/getting-started/about/moonray" | absolute_url }}): path-tracing renderer
- [Scene Object Classes]({{ "/user-reference/scene-objects" | absolute_url }}): (materials, geometry, lights, cameras, etc) used at Dreamworks Animation (about 150 in total)
- [HdMoonRay]({{ "/user-reference/tools/hydra" | absolute_url }}): the hydra plugin for MoonRay
- [Arras]({{ "/getting-started/about/arras" | absolute_url }}): execution and distribution framework, used to integrate MoonRay into applications as well as provide multi-machine rendering

The source is contained in multiple Git repositories. The `openmoonray` repository contains the top-level CMake build files, and uses submodules to link in all the others. The zipped source release is the `openmoonray` repository with the submodules filled in.

For more information, see [What's Included?]({{ "/getting-started/source-contents" | absolute_url }})

## Installation

For information on how to install MoonRay, please see our instructions on [Building MoonRay]({{ "/getting-started/installation/building-moonray/" | absolute_url }}). You can also find a list of MoonRay's [Dependencies]({{ "/getting-started/installation/moonray-dependencies" | absolute_url }}) 

## Running MoonRay

### Scene Authoring with RDL

`RDL2` is the scene format used by MoonRay : scene files are either in RDLA (text : `.rdla`) or RDLB (binary : `.rdlb`) format. There are several utilities in the release **bin** directory. Generally these require the environment variable `RDL2_DSO_PATH` to be set to point to the scene object SO files -- at least the proxy versions are needed to read and write RDL2 files.

`rdl2_convert` converts between RDLA and RDLB format :

```bash
rdl2_convert <inputfile> <outputfile>
```

 The format of each file is determined by the extension (`.rdla` or `.rdlb`). Converting from one RDLA file to another will produce an output in a *canonical* form  (removing any non-trivial Lua scripting). 

`rdl2_print` has two functions :

- `rdl2_print <classname>` lists the attribute of the given scene object class, together with type and defaults. For example, `rdl2_print PerspectiveCamera`.

- `rdl2_print <rdl_file>` prints out the objects in the given file.

- `rdl2_print --help` lists some additional options.

### MoonRay Run Command

The command line program to run MoonRay is `moonray`, in the **bin** directory.
Basic use is as follows:

```bash
moonray -in scene.rdla -out render.exr
```

The input scene can be be RDLA (text : `.rdla`) or RDLB (binary : `.rdlb`) format. You can use `-in` multiple times to provide multiple scene files : they are merged into a single scene and can be any mix of RDLA and RDLB. Each input file can both add new objects and modify objects defined in the earlier files. It can be useful to create an RDLA file holding smaller objects that you can edit manually, and an RDLB containing large geometry objects that would be difficult to handle in a text editor.

Multiple image formats are supported for the rendered image, including EXR, TIFF and JPEG.

To show the full set of command line options, run:

```bash
moonray --help
```

[`moonray_gui`]({{ "/user-reference/moonray-gui" | absolute_url }}) is a Qt application that displays the framebuffer while rendering. The command line options are very similar to those for `moonray`. `moonray_gui` has hotkeys to alter the display mode, move the camera around, and various other useful things. You can display a menu of the hotkeys by pressing 'H'.

`moonray_gui` monitors the input scene files while it is running : if a file changes, it automatically reloads the data and restarts the render.

