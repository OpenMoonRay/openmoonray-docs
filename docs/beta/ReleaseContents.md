# Release Contents

## Moonray

The command line program to run Moonray is `moonray`, in the **bin** directory.
Basic use is as follows:

```bash
moonray -in scene.rdla -out render.exr
```

The input scene can be be RDLA (text : `.rdla`) or RDLB (binary : `.rdlb`) format.
Multiple image formats are supported for the rendered image, including EXR, TIFF and JPEG.

To show the full set of command line options, run:

```bash
moonray --help
```

`moonray_gui` is a Qt application that displays the framebuffer while rendering. The command line options are very similar to those for `moonray`. `moonray_gui` has hotkeys to alter the display mode, move the camera around, and various other useful things. You can display a menu of the hotkeys by pressing 'H'.

## Moonray Scene Object Plugins

Apart from a few built-in classes, Moonray scene objects are implemented as ".so" shared libraries that Moonray loads at runtime. These libraries are kept under the **rdl2dso** directory in the release. Make sure the environment variable `RDL2_DSO_PATH` is set to the path of this directory in the release before running Moonray. **rdl2dso.proxy** contains special versions of the plugins that can read and write scene objects from RDLA and RDLB formats, but cannot actually render them. These proxy ".so" files are used when you want to manipulate scene files without linking to the Moonray renderer itself.

## Moonray Hydra Plugin

`HdMoonray` is the Moonray plugin to Hydra. It actually consists of several separate plugins:
 
 - `hdMoonray.so` is the Hydra Render Delegate for Moonray
 - `hdMoonrayAdapters.so` contains several "adapters" for the Hydra USD Scene Delegate, needed to support Geometry Lights and Light Filters
 - `moonrayShaderDiscovery.so` and `moonrayShaderParser.so` are plugins to the "Shader Definition Registry" (SDR), required to use Moonray shaders from Hydra.

 **Readme.md** in the **hydra** directory of the source tree has some information on how to set up HdMoonray.

 The **houdini** directory contains some configuration files for running HdMoonray inside Houdini.

`hd_render` is a simple command that renders USD scenes using Hydra.

## RDL2 Utilities

`RDL2` is the scene format used by Moonray : scene files are either in RDLA (text : `.rdla`) or RDLB (binary : `.rdlb`) format. There are several utilities in the release **bin** directory. Generally these require the environment variable `RDL2_DSO_PATH` to be set to point to the scene object `.so`s : at least the proxy versions are required to read and write RDL2 files.

`rdl2_convert` converts between RDLA and RDLB format: `rdl2_convert <inputfile> <outputfile>`. The format of each file is determined by the extension (`.rdla` or `.rdlb`). Converting from one RDLA file to another will produce an output in "canonical" form : i.e. without any procedural scripting elements. Converting one RDLB file to another is unlikely to have any useful effect.

`rdl2_print` has two functions :

- `rdl2_print <classname>` lists the attribute of the given scene object class, together with type and defaults. For example, `rdl2_print PerspectiveCamera`.

- `rdl2_print <rdl_file>` prints out the objects in the given file.

- `rdl2_print --help` lists some additional options.


## Arras

Arras clients link against the core Arras libraries in *lib64*. When running in "local" mode (one Moonray render process running on the same machine), the Arras runtime (`execComp`) and Moonray/Arras library (`libmcrt_computation_progmcrt.so`) are used automatically.

Using Arras in distributed mode requires an Arras node process (`arras4_node`) to be started on every render node, and the Arras service (`minicoord`) to be running on a single machine.

`arras_render` is a Qt application similar to `moonray_gui` that uses Arras to perform the render.



