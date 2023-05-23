---
title: HdMoonRay Houdini Integration
---

# HdMoonRay Houdini Integration

## Setup

After [setting]({{ "/user-reference/tools/hydra/hdmoonray-setup/" | absolute_url }}) up
the hydra delegate the 
[UsdPreviewSurface](https://graphics.pixar.com/usd/release/spec_usdpreviewsurface.html)
and associated nodes will be renderable.  To use the more advanced Moonray materials and
maps, first clone the
[moonray_dcc_plugins](https://github.com/dreamworksanimation/moonray_dcc_plugins)
repo.  Include the folders inside of the repo's *houdini* folder into your *HOUDINI_PATH*
either by copying them into a folder already sourced or adding them to the
*HOUDINI_PATH* environment variable.

See: [https://www.sidefx.com/docs/houdini/basics/config.html](https://www.sidefx.com/docs/houdini/basics/config.html)

Add the folder to your *HOUDINI_PATH*:
```bash
export HOUDINI_PATH=$HOUDINI_PATH:$REL/houdini:$REL/plugin/houdini
```
or copy the folders to your local houdini install:
```bash
cp -r $REL/plugin/houdini/* ~/houdini19.5/
```

## Houdini Components

### Materials:
You will find all Moonray related Materials and Maps available in the *Mat* context.

![]({{ "/assets/images/user-reference/tools/hydra/houdini/shader_list.png" | absolute_url }})

Connect Materials to the Collect node.  Connect Maps to materials.

![]({{ "/assets/images/user-reference/tools/hydra/houdini/binding.png" | absolute_url }})

### Lights:
Lights have a *Moonray* tab with Moonray specific attributes.

![]({{ "/assets/images/user-reference/tools/hydra/houdini/lights.png" | absolute_url }})

### Render Settings:
You will find a *Moonray* tab with render settings specific to Moonray.

![]({{ "/assets/images/user-reference/tools/hydra/houdini/render_settings.png" | absolute_url }})

### Geometry Settings
Geometry setting such as *mesh_resolution* can be set using a LOP wrangle node.

For example:
```
usd_addprimvar(0, @primpath, "moonray:mesh_resolution", "float");
usd_setprimvar(0, @primpath, "moonray:mesh_resolution", 10);
```


### Light Filters:
* Not yet available

### RenderVars:
* Not yet avalable

