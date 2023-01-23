---
title: Render Outputs

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# Render Outputs Guide

See also: [RenderOutput Attribute Reference](../../../scene-classes/render-output)
## Introduction

The RenderOutput object is used to specify any output the renderer produces.

## Setup
Generally, when setting up a RenderOutput object, you want to specify at least two attributes: the *`result`*, or type of RenderOutput, and *`file_name`*, which is where you want the result saved. Certain AOVs will require other attributes to be set, like `primitive_attribute` to specify the attribute to visualize, or `material_aov`, which specifies the material expression. You can refer to the [RenderOutput Scene Class](../../../scene-classes/render-output/) which contains a full attribute reference. There are also guides on specific RenderOutput types linked under the Types section below.

*Example: World Position*
```lua
-- output position in world space  
RenderOutput("/output/result/worldPos") {  
    ["file name"] = "result0.exr",  
    ["result"] = 3, -- state variable  
    ["state variable"] = 10, -- "WP"  
    ["channel format"] = 0  
}
```

## Types

### General

| Type | Description |
| ---- | ----------- |
| Beauty | Full render (RGB) |
| Alpha | Full render alpha channel (A) |
| Depth | z-distance away from camera (Z) |
| [DisplayFilter](../../../scene-classes/display-filters) | Outputs the results from a DisplayFilter |

### AOVs

| Type | Description |
| ---- | ----------- |
| State Variable | Visualize a built-in state variable (pos, nor, texture coords, etc) | 
| Primitive Attribute | Visualize procedural-provided attributes |
| [Material AOV](material-aovs) | AOV generated using a material expression |
| Light AOV | AOV generated using a light path expression |
| [Visibility AOV](visibility-aovs) | Fraction of light samples that hit the light source |
| [Variance AOV](variance-aovs) | Pixel variance of a specified AOV | 
| Weight | Pixel sample count, normalized between 0 and 1 |
| [Cryptomatte](cryptomatte) | Generate .exr layers containing pixel coverages by specified geometry(ies) | 
| Alpha Aux | Alpha auxiliary sample data for adaptive sampling |
| Beauty Aux | Beauty auxiliary sample data for adaptive sampling |

### Diagnostic Results

| Type | Description |
| ---- | ----------- |
| Time Per Pixel | Time per pixel heat map metric |
| Wireframe | Render as wireframe |

## Examples

#### RGBAZ
```lua
-- build a reasonably standard default RGBAZ result  
RenderOutput("/output/result0/rgb") {  
    ["file name"] = "result0.exr",  
}

RenderOutput("/output/result0/alpha") {  
    ["file name"] = "result0.exr",  
    ["result"] = 1 -- alpha  
}

RenderOutput("/output/result0/depth") {  
    ["file name"] = "result0.exr",  
    ["result"] = 2, -- depth  
    ["channel format"] = 0, -- 32 bit float  
    ["math filter"] = "min"
}
```

#### Ref_P

```lua
-- output the "ref_P" primitive attribute  
RenderOutput("/output/result/ref_P") {  
    ["file name"] = "result0.exr",  
    ["result"] = 4, -- primitive attribute  
    ["primitive attribute"] = "ref_P",  
    ["primitive attribute type"] = 2 -- Vec3f  
}
```
 
#### Glossy Lobe Material Color

```lua
-- output the color of all glossy lobes hit by primary rays  
RenderOutput("/output/glossy_color") {  
    ["file name"] = "result0.exr",  
    ["result"] = 7, -- material aov  
    ["material aov"] = "G.color",  
}
```

#### Matte of the Geometry Objects with the "curly" and "gizmo1' Labels 

```lua
-- output a matte for the geometry objects with the  
-- gizmo1 and curly labels  
RenderOutput("/output/gizmo1AndCurlyMatte") {  
    ["file name"] = "result0.exr",  
    ["result"] = 7, -- material aov  
    ["material aov"] = "'gizmo1''curly'...matte",  
    ["channel name"] = "A"  
}
```

#### Direct Lighting on Glossy Lobes

```lua
-- output the direct lighting on diffuse lobes  
    RenderOutput("/output/glossy_direct") {  
    ["file name"] = "result0.exr",  
    ["result"] = 8, -- light aov  
    ["light aov"] = "CGL",  
    ["channel format"] = 0,  
}
```

#### Diffuse Key Lighting (assumes light has label 'key')

```lua
-- output diffuse lighting from lights with the key label  
RenderOutput("/output/diffuse_key") {  
    ["file name"] = "result0.exr",  
    ["result"] = 8, -- light aov  
    ["light aov"] = "CD'key'",  
}
```

#### Motion Vectors

See also: [Motion Vectors](motion-vectors)

```lua
-- Create 2D screen space motion vectors  
RenderOutput("/output/motion_vectors") {  
    ["result"] = "material aov",  
    ["material_aov"] = "motionvec",  
    ["channel_suffix_mode"] = "rgb"  
}
```

