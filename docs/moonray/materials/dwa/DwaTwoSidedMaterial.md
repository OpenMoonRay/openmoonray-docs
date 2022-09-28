---
title: DwaTwoSidedMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# DwaTwoSidedMaterial
**ROOTSHADER MATERIAL SHADER DWABASELAYERABLE**

---

<details open>
<summary class="scene-class-attr-group">Advanced attributes</summary>
<p>

<h3>fallback_bssrdf</h3>
<b>Int</b>  *enum*

- normalized diffusion = 0 (default)

- dipole = 1

- random walk = 2


If the two materials disagree on the type of bssrdf, this type will be used instead.


<h3>fallback_clearcoat_use_bending</h3>
<b>Bool</b>  

default: True

If child materials disagree on the type of clearcoat use bending, this type will be used instead.


<h3>fallback_outer_specular_model</h3>
<b>Int</b>  *enum*

- Beckmann = 0

- GGX = 1 (default)


If child materials disagree on the type of outer specular model, this type will be used instead.


<h3>fallback_specular_model</h3>
<b>Int</b>  *enum*

- Beckmann = 0

- GGX = 1 (default)


If child materials disagree on the type of specular model, this type will be used instead.


<h3>fallback_toon_specular_model</h3>
<b>Int</b>  *enum*

- Beckmann = 0

- GGX = 1 (default)

- Toon = 2


If child materials disagree on the type of toon specular model, this type will be used instead.


<h3>sss_trace_set</h3>
<b>Traceset</b>  

default: None

By default, only the geometry associated with this material contributes to subsurface. The DwaTwoSidedMaterial ignores the sss trace sets of the submaterials. If you want adjacent geometry with different material to contribute as well, specify all those parts here.


</p>
</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>
<p>

<h3>back_material</h3>
<b>Dwabaselayerable</b>  

default: None

material to use on back-facing surfaces


<h3>extra_aovs</h3>
<b>Map</b>  

default: None

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


<h3>front_material</h3>
<b>Dwabaselayerable</b>  

default: None

material to use on front-facing surfaces


<h3>label</h3>
<b>String</b>  

default: 

label used in material and light aovs


<h3>priority</h3>
<b>Int</b>  

default: 0

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


</p>
</details>

