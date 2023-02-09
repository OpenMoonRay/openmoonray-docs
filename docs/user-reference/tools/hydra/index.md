---
title: MoonRay Hydra Delegate
---

<!-- To set variables and metadata, such as a title and layout, for a page or post on your site, you can add YAML front matter to the top of any Markdown or HTML file. For more information, see "Front Matter" in the Jekyll documentation.  -->

# MoonRay Hydra Delegate

***Hydra*** is Pixar's open source interface for live or batch rendering. A Hydra-enabled application should be able to render scenes using any renderer that has a Hydra plugin.


***HdMoonRay*** is a Hydra plugin (*render delegate*) for MoonRay. You should be able to use it to provide MoonRay rendering in any Hydra-supporting application.

HdMoonRay is a shared-library plugin (hdMoonray.so) that doesn't directly provide an interface to end users : the features of HdMoonRay (and other Hydra plugins) will be made available through the interface of the hosting application. 

The general setup steps needed to use HdMoonRay are described here: 

[HdMoonRay Setup](hdmoonray-setup). 

There many be additional steps described in a particular application's documentation.

Hydra render plugins provide a list of *render settings*, which you should be able to access through the user interface of the particular application you are using. The settings applicable to HdMoonRay are described here:

[HdMoonRay Render Settings](render-settings)

HdMoonRay supports almost all of the Hydra features that are applicable to MoonRay. This document gives an overview of what is supported:

[HdMoonRay Features](hdmoonray-features)

Included with HdMoonRay are two command-line applications that apply HdMoonRay to USD data : **hd_render** renders an image from a USD scene, and **hd_usd2rdl** translates a USD scene into MoonRay's native RDL2 format.

[hd_render and hd_usd2rdl](hd_render)
