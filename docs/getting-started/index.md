---
title: Getting Started
---
# Getting Started

You can read more about the components making up MoonRay in the About section [here]( {{ "/getting-started/about" | absolute_url}}).

MoonRay can be obtained in source form from our [Github site](https://github.com/OpenMoonRay/openmoonray).

We do not currently provide MoonRay as a pre-built package.

## Installation

For information on how to install MoonRay, please see our instructions on [Building MoonRay]({{ "/getting-started/installation/building-moonray/" | absolute_url }}). 

## Running MoonRay

The main command-line program to render images with MoonRay is [**moonray**]({{ "/user-reference/tools/moonray/" | absolute_url }}), in the *bin* directory of a completed installation.
[**moonray_gui**]({{ "/user-reference/tools/moonray-gui/" | absolute_url }}) is a GUI version of MoonRay that displays the output images as they are rendering. 

Both **moonray** and **moonray_gui** require input scene descriptions in the native [RDL2 format]({{ "/getting-started/about/rdl-scene-format" | absolute_url }}).
You can find some example scenes in RDLA/RDLB format on our [Test Scenes]({{ "/getting-started/test-scenes" | absolute_url }}) page.

You can render scenes in Pixar's USD format using the MoonRay Hydra plugin [HdMoonRay]({{ "/user-reference/tools/hydra" | absolute_url }}).

