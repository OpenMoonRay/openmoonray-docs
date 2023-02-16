---
title: Getting Started
---
# Getting Started

You can read more about the components making up MoonRay in the About section [here]( {{ "/getting-started/about" | absolute_url}}).

MoonRay can be obtained in source form from our [Github site](https://github.com/dreamworksanimation).

We do not currently provide MoonRay as a pre-built package.

## Installation

For information on how to install MoonRay, please see our instructions on [Building MoonRay]({{ "/getting-started/installation/building-moonray/" | absolute_url }}). 

## Running MoonRay

The main command-line program to render images with MoonRay is `moonray`, in the *bin* directory of a completed installation. `moonray_gui` is a GUI version of MoonRay that displays the output images as they are rendering. 

Both `moonray` and `moonray_gui` require input scene descriptions in the native [RDL2 format]({{ "/getting-started/about/rdl-scene-format" | absolute_url }}).

You can render scenes in Pixar's USD format using the MoonRay Hydra plugin [HdMoonRay]({{ "/user-reference/tools/hydra" | absolute_url }}).

## moonray command

Basic use to render a scene is as follows:

```bash
moonray -in scene.rdla -out render.exr
```

The input scene can be in RDLA (text : **.rdla**) or RDLB (binary : **.rdlb**) format. You can use `-in` multiple times to provide multiple scene files : they are merged into a single scene and can be any mix of RDLA and RDLB. Each input file can both add new objects and modify objects defined in the earlier files. It can be useful to create an RDLA file holding smaller objects that you can edit manually, and an RDLB containing large geometry objects that would be difficult to handle in a text editor.

Multiple image formats are supported for the rendered image, including EXR, TIFF and JPEG.

To show the full set of command line options, run:

```bash
moonray --help
```

## moonray_gui command

[`moonray_gui`]({{ "/user-reference/moonray-gui" | absolute_url }}) is a Qt application that displays the framebuffer while rendering. The command line options are very similar to those for `moonray`. `moonray_gui` has hotkeys to alter the display mode, move the camera around, and various other useful things. You can display a menu of the hotkeys by pressing 'H'.

`moonray_gui` monitors the input scene files while it is running : if a file changes, it automatically reloads the data and restarts the render.

