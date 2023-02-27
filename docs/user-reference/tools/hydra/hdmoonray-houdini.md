---
title: HdMoonRay Houdini Integration
---

# HdMoonRay Houdini Integration

## Setup

Include the folders inside of the houdini folder into your *HOUDINI_PATH* by copying
them into a folder already sourced or adding them to the *HOUDINI_PATH* environment
variable.

See: https://www.sidefx.com/docs/houdini/basics/config.html

Add to Variable: add the openmoonray/plugin/houdini/ folder to your *HOUDINI_PATH*
```bash
export HOUDINI_PATH=$HOUDINI_PATH:<openmoonray_install_dir>/plugin/houdini
```

Copy the folders inside into your local houdini:
```bash
    cp -r <openmoonray_install_dir>/plugin/houdini/* ~/houdini19.5/
```
## Houdini Components

### Materials:
You will find all Moonray related Materials and Maps available in the Mat context.

![]({{ "/assets/images/user-reference/tools/hydra/houdini/shader_list.png" | absolute_url }})

Connect Materials to the Collect.  Connect Maps to materials.

![]({{ "/assets/images/user-reference/tools/hydra/houdini/binding.png" | absolute_url }})

### Lights:
Lights have a “Moonray” tab with Moonrays specific attributes.

![]({{ "/assets/images/user-reference/tools/hydra/houdini/lights.png" | absolute_url }})

### Light Filters:
* Not yet available


### Render Settings:
You will find a “Moonray” tab with render settings specific to Moonray.

![]({{ "/assets/images/user-reference/tools/hydra/houdini/render_settings.png" | absolute_url }})

### RenderVars:
* Not yet avalable

