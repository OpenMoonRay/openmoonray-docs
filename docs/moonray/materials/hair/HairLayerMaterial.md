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
<br>

<h3>blend_color_space</h3>
<b>Int</b>  *enum*

- RGB = 0 (default)

- HSV = 1

- HSL = 2


Color space used when blending the two material's color parameters


<h3>fallback_bssrdf</h3>
<b>Int</b>  *enum*

- normalized diffusion = 0 (default)

- dipole = 1


If child materials disagree on the type of bssrdf, this type will be used instead.


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>
<br>

<h3>extra_aovs</h3>
<b>Map</b>  

default: None

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


<h3>hair_material_A</h3>
<b>262144</b>  

default: None

foreground hair material


<h3>hair_material_B</h3>
<b>262144</b>  

default: None

background hair material


<h3>label</h3>
<b>String</b>  

default: 

label used in material and light aovs


<h3>mask</h3>
<b>Float</b>  *bindable*

default: 1.0

foreground hair material weight


<h3>priority</h3>
<b>Int</b>  

default: 0

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


</details>

