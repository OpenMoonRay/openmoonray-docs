---
title: HairLayerMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# HairLayerMaterial
**ROOTSHADER MATERIAL SHADER**
---

<details open>
<summary class="scene-class-attr-group">Advanced attributes</summary>

## blend_color_space
**Int** *enum*

- RGB = 0 (default)

- HSV = 1

- HSL = 2


Color space used when blending the two material's color parameters


## fallback_bssrdf
**Int** *enum*

- normalized diffusion = 0 (default)

- dipole = 1


If child materials disagree on the type of bssrdf, this type will be used instead.


</details>

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

## extra_aovs
**Map** 

Default value : None

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


## hair_material_A
**262144** 

Default value : None

foreground hair material


## hair_material_B
**262144** 

Default value : None

background hair material


## label
**String** 

Default value : 

label used in material and light aovs


## mask
**Float** *bindable*

Default value : 1.0

foreground hair material weight


## priority
**Int** 

Default value : 0

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


</details>

