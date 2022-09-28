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

<h2>blend_color_space</h2>
<b>Int</b>  *enum*

- RGB = 0 (default)

- HSV = 1

- HSL = 2


Color space used when blending the two material's color parameters


<h2>fallback_bssrdf</h2>
<b>Int</b>  *enum*

- normalized diffusion = 0 (default)

- dipole = 1

- random walk = 2


If child materials disagree on the type of bssrdf, this type will be used instead.


<h2>fallback_clearcoat_use_bending</h2>
<b>Bool</b>  

Default value : True  

If child materials disagree on the type of clearcoat use bending, this type will be used instead.


<h2>fallback_outer_specular_model</h2>
<b>Int</b>  *enum*

- Beckmann = 0

- GGX = 1 (default)


If child materials disagree on the type of outer specular model, this type will be used instead.


<h2>fallback_specular_model</h2>
<b>Int</b>  *enum*

- Beckmann = 0

- GGX = 1 (default)


If child materials disagree on the type of specular model, this type will be used instead.


<h2>fallback_thin_geometry</h2>
<b>Bool</b>  

Default value : True  

If child materials disagree on the type of thin geometry, this type will be used instead.


<h2>fallback_toon_specular_model</h2>
<b>Int</b>  *enum*

- Beckmann = 0

- GGX = 1 (default)

- Toon = 2


If child materials disagree on the type of toon specular model, this type will be used instead.


<h2>sss_trace_set</h2>
<b>Traceset</b>  

Default value : None  

By default, only the geometry associated with this material contributes to subsurface. The DwaLayerMaterial ignores the sss trace sets of the submaterials. If you want adjacent geometry with different material to contribute as well, specify all those parts here.


</details>


<details open>
<summary class="scene-class-attr-group">Glitter Fallback attributes</summary>

<h2>fallback_glitter_LOD_quality</h2>
<b>Float</b>  

Default value : 0.5  

controls quality of glitter at distances where individual flakes cannot be perceived; at lower values, approximation kicks in earlier.  This parameter will only be used when layering two distinct glitter materials.


<h2>fallback_glitter_debug_mode</h2>
<b>Int</b>  *enum*

- off = 0 (default)

- blend = 1

- color = 2

- averageColor = 3

- footprintArea = 4

- radius = 5


developer debug visualization modes.  This parameter will only be used when layering two distinct glitter materials.


<h2>fallback_glitter_layering_mode</h2>
<b>Int</b>  *enum*

- physical = 0 (default)

- additive = 1


layering mode for glitter on top of the under material. physical: conserves energy and glitter attenuates under material, additive: breaks energy conservation but glitter is never darker than the under material (eg. use case: snow).  This parameter will only be used when layering two distinct glitter materials.


<h2>fallback_glitter_randomness</h2>
<b>Float</b>  

Default value : 0.5  

randomness of flake orientation.  This parameter will only be used when layering two distinct glitter materials.


<h2>fallback_glitter_seed</h2>
<b>Int</b>  

Default value : 0  

The seed for the glitter random number generator.  This parameter will only be used when layering two distinct glitter materials.


<h2>fallback_glitter_space</h2>
<b>Int</b>  *enum*

- object = 4

- reference = 5 (default)


The space to calculate the worley noise in, defaults to reference space.  This parameter will only be used when layering two distinct glitter materials.


<h2>fallback_glitter_style_A_frequency</h2>
<b>Float</b>  

Default value : 1.0  

0 implies none of this style, 1 implies all the flakes will get this style.  This parameter will only be used when layering two distinct glitter materials.


<h2>fallback_glitter_style_B_frequency</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

0 implies none of this style, 1 implies all the flakes will get this style.  This parameter will only be used when layering two distinct glitter materials.


<h2>fallback_glitter_texture_A</h2>
<b>String</b>  *filename*

Default value :   

filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).  This parameter will only be used when layering two distinct glitter materials.


<h2>fallback_glitter_texture_B</h2>
<b>String</b>  

Default value :   

filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).  This parameter will only be used when layering two distinct glitter materials.


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>extra_aovs</h2>
<b>Map</b>  

Default value : None  

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


<h2>label</h2>
<b>String</b>  

Default value :   

label used in material and light aovs


<h2>mask</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

foreground material weight


<h2>material_A</h2>
<b>Dwabaselayerable</b>  

Default value : None  

foreground material


<h2>material_B</h2>
<b>Dwabaselayerable</b>  

Default value : None  

background material


<h2>priority</h2>
<b>Int</b>  

Default value : 0  

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


</details>

