---
xxxxx
---

# RenderOutput

## Introduction

The RenderOutput object is used to specify any output the renderer
produces.  It has a lot of options.  For the most up to date set of
options type

rdl2_print RenderOutput

 

In your command shell.  What follows on this page are some simple
examples and links to other, more specific docs.

### Examples

#### RGBAZ

-- build a reasonably standard default RGBAZ result  
RenderOutput("/output/result0/rgb") {  
\["file name"\] = "result0.exr",  
}

RenderOutput("/output/result0/alpha") {  
\["file name"\] = "result0.exr",  
\["result"\] = 1 -- alpha  
}

RenderOutput("/output/result0/depth") {  
\["file name"\] = "result0.exr",  
\["result"\] = 2, -- depth  
\["channel format"\] = 0, -- 32 bit float  
\["math filter"\] = "min"

}

#### World Position

-- output position in world space  
RenderOutput("/output/result/worldPos") {  
\["file name"\] = "result0.exr",  
\["result"\] = 3, -- state variable  
\["state variable"\] = 10, -- "WP"  
\["channel format"\] = 0  
}

#### Ref_P

-- output the "ref_P" primitive attribute  
RenderOutput("/output/result/ref_P") {  
\["file name"\] = "result0.exr",  
\["result"\] = 4, -- primitive attribute  
\["primitive attribute"\] = "ref_P",  
\["primitive attribute type"\] = 2 -- Vec3f  
}

 

#### Glossy Lobe Material Color

-- output the color of all glossy lobes hit by primary rays  
RenderOutput("/output/glossy_color") {  
\["file name"\] = "result0.exr",  
\["result"\] = 7, -- material aov  
\["material aov"\] = "G.color",  
}

#### Matte of the Geometry Objects with the "curly" and "gizmo1' Labels 

-- output a matte for the geometry objects with the  
-- gizmo1 and curly labels  
RenderOutput("/output/gizmo1AndCurlyMatte") {  
\["file name"\] = "result0.exr",  
\["result"\] = 7, -- material aov  
\["material aov"\] = "'gizmo1''curly'...matte",  
\["channel name"\] = "A"  
}

 

#### Direct Lighting on Glossy Lobes

-- output the direct lighting on diffuse lobes  
RenderOutput("/output/glossy_direct") {  
\["file name"\] = "result0.exr",  
\["result"\] = 8, -- light aov  
\["light aov"\] = "CGL",  
\["channel format"\] = 0,  
}

#### Diffuse Key Lighting (assumes light has label 'key')

-- output diffuse lighting from lights with the key label  
RenderOutput("/output/diffuse_key") {  
\["file name"\] = "result0.exr",  
\["result"\] = 8, -- light aov  
\["light aov"\] = "CD'key'",  
}

#### Motion Vectors

For more details see: [Motion
Vectors](file:///G:\display\RENDER\Motion+Vectors)

-- Create 2D screen space motion vectors  
RenderOutput("/output/motion_vectors") {  
\["result"\] = "material aov",  
\["material_aov"\] = "motionvec",  
\["channel_suffix_mode"\] = "rgb"  
}

### Additional Info

[Material Aov
Presentation](https://docs.google.com/presentation/d/1lgmk63fqH7PWYoT5CGCeTADHTmARFPxhQ0O6lZGM7_U/edit?usp=sharing)

[General Light Path
Expressions](https://github.com/imageworks/OpenShadingLanguage/wiki/OSL-Light-Path-Expressions)

[Extra Aovs](file:///G:\display\RENDER\Extra+Aovs)

[Motion Vectors](file:///G:\display\RENDER\Motion+Vectors)
