---
title: DwaLayerMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# DwaLayerMaterial
**ROOTSHADER MATERIAL SHADER DWABASELAYERABLE**

---

<details open>
<summary class="scene-class-attr-group">Advanced attributes</summary>

## blend_color_space  
**Int**  *enum*

- RGB = 0 (default)

- HSV = 1

- HSL = 2


Color space used when blending the two material's color parameters


## fallback_bssrdf  
**Int**  *enum*

- normalized diffusion = 0 (default)

- dipole = 1

- random walk = 2


If child materials disagree on the type of bssrdf, this type will be used instead.


## fallback_clearcoat_use_bending  
**Bool**  

Default value : True  

If child materials disagree on the type of clearcoat use bending, this type will be used instead.


## fallback_outer_specular_model  
**Int**  *enum*

- Beckmann = 0

- GGX = 1 (default)


If child materials disagree on the type of outer specular model, this type will be used instead.


## fallback_specular_model  
**Int**  *enum*

- Beckmann = 0

- GGX = 1 (default)


If child materials disagree on the type of specular model, this type will be used instead.


## fallback_thin_geometry  
**Bool**  

Default value : True  

If child materials disagree on the type of thin geometry, this type will be used instead.


## fallback_toon_specular_model  
**Int**  *enum*

- Beckmann = 0

- GGX = 1 (default)

- Toon = 2


If child materials disagree on the type of toon specular model, this type will be used instead.


## sss_trace_set  
**Traceset**  

Default value : None  

By default, only the geometry associated with this material contributes to subsurface. The DwaLayerMaterial ignores the sss trace sets of the submaterials. If you want adjacent geometry with different material to contribute as well, specify all those parts here.


</details>


<details open>
<summary class="scene-class-attr-group">Glitter Fallback attributes</summary>

## fallback_glitter_LOD_quality  
**Float**  

Default value : 0.5  

controls quality of glitter at distances where individual flakes cannot be perceived; at lower values, approximation kicks in earlier.  This parameter will only be used when layering two distinct glitter materials.


## fallback_glitter_debug_mode  
**Int**  *enum*

- off = 0 (default)

- blend = 1

- color = 2

- averageColor = 3

- footprintArea = 4

- radius = 5


developer debug visualization modes.  This parameter will only be used when layering two distinct glitter materials.


## fallback_glitter_layering_mode  
**Int**  *enum*

- physical = 0 (default)

- additive = 1


layering mode for glitter on top of the under material. physical: conserves energy and glitter attenuates under material, additive: breaks energy conservation but glitter is never darker than the under material (eg. use case: snow).  This parameter will only be used when layering two distinct glitter materials.


## fallback_glitter_randomness  
**Float**  

Default value : 0.5  

randomness of flake orientation.  This parameter will only be used when layering two distinct glitter materials.


## fallback_glitter_seed  
**Int**  

Default value : 0  

The seed for the glitter random number generator.  This parameter will only be used when layering two distinct glitter materials.


## fallback_glitter_space  
**Int**  *enum*

- object = 4

- reference = 5 (default)


The space to calculate the worley noise in, defaults to reference space.  This parameter will only be used when layering two distinct glitter materials.


## fallback_glitter_style_A_frequency  
**Float**  

Default value : 1.0  

0 implies none of this style, 1 implies all the flakes will get this style.  This parameter will only be used when layering two distinct glitter materials.


## fallback_glitter_style_B_frequency  
**Float**  *bindable*

Default value : 1.0  

0 implies none of this style, 1 implies all the flakes will get this style.  This parameter will only be used when layering two distinct glitter materials.


## fallback_glitter_texture_A  
**String**  *filename*

Default value :   

filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).  This parameter will only be used when layering two distinct glitter materials.


## fallback_glitter_texture_B  
**String**  

Default value :   

filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).  This parameter will only be used when layering two distinct glitter materials.


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

## extra_aovs  
**Map**  

Default value : None  

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


## label  
**String**  

Default value :   

label used in material and light aovs


## mask  
**Float**  *bindable*

Default value : 1.0  

foreground material weight


## material_A  
**Dwabaselayerable**  

Default value : None  

foreground material


## material_B  
**Dwabaselayerable**  

Default value : None  

background material


## priority  
**Int**  

Default value : 0  

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


</details>

