---
title: Release Contents

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# Release Contents

## Moonray

The command line program to run Moonray is `moonray`, in the **bin** directory.
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

`moonray_gui` is a Qt application that displays the framebuffer while rendering. The command line options are very similar to those for `moonray`. `moonray_gui` has hotkeys to alter the display mode, move the camera around, and various other useful things. You can display a menu of the hotkeys by pressing 'H'.

`moonray_gui` monitors the input scene files while it is running : if a file changes, it automatically reloads the data and restarts the render.

## Moonray Scene Object Plugins

Apart from a few built-in classes, Moonray scene objects are implemented as shared libraries (***filename*.so**) that Moonray loads at runtime. These libraries are kept under the **rdl2dso** directory in the release. Make sure the environment variable `RDL2_DSO_PATH` is set to the path of this directory in the release before running Moonray. **rdl2dso.proxy** contains special versions of the plugins that can read and write scene objects from RDLA and RDLB formats, but cannot actually render them. These proxy SO files are used when you want to manipulate scene files without linking to the Moonray renderer itself.

## Moonray Hydra Plugin

`HdMoonray` is the Moonray plugin to Hydra. It actually consists of several separate plugins:
 
 - `hdMoonray.so` is the Hydra Render Delegate for Moonray
 - `hdMoonrayAdapters.so` contains several *adapter* classes that extend the Hydra USD Scene Delegate with support for Geometry Lights and Light Filters
 - `moonrayShaderDiscovery.so` and `moonrayShaderParser.so` are plugins to the *Shader Definition Registry* (SDR). They enable Hydra to correctly process Moonray shader networks in USD data.

 **Readme.md** in the **hydra** directory of the source tree has some information on how to set up HdMoonray.

 The **houdini** directory contains some configuration files for running HdMoonray inside Houdini.

`hd_render` is a simple command that renders USD scenes using Hydra.

## RDL2 Utilities

`RDL2` is the scene format used by Moonray : scene files are either in RDLA (text : `.rdla`) or RDLB (binary : `.rdlb`) format. There are several utilities in the release **bin** directory. Generally these require the environment variable `RDL2_DSO_PATH` to be set to point to the scene object SO files -- at least the proxy versions are needed to read and write RDL2 files.

`rdl2_convert` converts between RDLA and RDLB format :

```bash
rdl2_convert <inputfile> <outputfile>
```

 The format of each file is determined by the extension (`.rdla` or `.rdlb`). Converting from one RDLA file to another will produce an output in a *canonical* form  (removing any non-trivial Lua scripting). 

`rdl2_print` has two functions :

- `rdl2_print <classname>` lists the attribute of the given scene object class, together with type and defaults. For example, `rdl2_print PerspectiveCamera`.

- `rdl2_print <rdl_file>` prints out the objects in the given file.

- `rdl2_print --help` lists some additional options.


## Arras

Arras clients link with the core Arras libraries in **lib64**. When running in *local mode* (just one Moonray render process running on the same machine as the client), the Arras runtime (`execComp`) and Moonray/Arras library (`libmcrt_computation_progmcrt.so`) are used automatically.

In distributed mode (multiple render processes running on multiple machines), Arras requires a *node* process (`arras4_node`) to be started on each machine. The Arras *coordinator* service (`minicoord`) runs on a single machine somewhere on the network, managing the individual nodes and sessions.

`arras_render` is a Qt application similar to `moonray_gui` that uses Arras to perform the render.
