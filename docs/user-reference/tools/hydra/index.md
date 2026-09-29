---
title: MoonRay Hydra Delegate
---

# MoonRay Hydra Delegate

***Hydra*** is Pixar's open source interface for live or batch rendering. A Hydra-enabled application should be able to render scenes using any renderer that has a Hydra plugin.


***HdMoonRay*** is a Hydra plugin (*render delegate*) for MoonRay. You should be able to use it to provide MoonRay rendering in any Hydra-supporting application.

HdMoonRay is a shared-library plugin (hdMoonray.so) that doesn't directly provide an interface to end users : the features of HdMoonRay (and other Hydra plugins) will be made available through the interface of the hosting application. 

The general setup steps needed to use HdMoonRay are described here: 

[HdMoonRay Setup](hdmoonray-setup). 

There may be additional steps described in a particular application's documentation.

Hydra render plugins provide a list of *render settings*, which you should be able to access through the user interface of the particular application you are using. The settings applicable to HdMoonRay are described here:

[HdMoonRay Render Settings](render-settings)

HdMoonRay supports almost all of the Hydra features that are applicable to MoonRay. This document gives an overview of what is supported:

[HdMoonRay Features](hdmoonray-features)

Use OpenUSD's **usdrecord** to render a USD scene through HdMoonRay. The older
**hd_render** utility is retired and is not built or shipped by the current
HdMoonRay source.

[Command-line workflows](commands)
