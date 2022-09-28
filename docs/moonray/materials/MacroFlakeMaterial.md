---
title: MacroFlakeMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# MacroFlakeMaterial
**ROOTSHADER MATERIAL SHADER**

---

<details open>
<summary class="scene-class-attr-group">Normal attributes</summary>

<h2>input_normal</h2>
<b>33554432</b>  

Default value : None  

specifies an alternate shading normal in the tangent frame (normal map)


<h2>input_normal_dial</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

controls the amount of influence of the alternate normal


</details>


<details open>
<summary class="scene-class-attr-group">Specular attributes</summary>

<h2>metallic_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

the overall reflection color, defines Fresnel behavior


<h2>metallic_edge_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

the reflection color at grazing angles, defines Fresnel behavior


<h2>roughness</h2>
<b>Float</b>  *bindable*

Default value : 0.5  

the roughness of the surface (currently only affects reflection)


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>background_material</h2>
<b>Material</b>  

Default value : None  

background material


<h2>diffuse_mode</h2>
<b>Int</b>  *enum*

- block = 0

- add = 1 (default)


Whether to block the diffuse lobe where the mask is applied


<h2>extra_aovs</h2>
<b>Map</b>  

Default value : None  

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


<h2>fuzz_mode</h2>
<b>Int</b>  *enum*

- block = 0 (default)

- add = 1


Whether to block the fuzz lobe where the mask is applied


<h2>is_additive</h2>
<b>Bool</b>  

Default value : False  

When true, lobe does not block background material


<h2>label</h2>
<b>String</b>  

Default value :   

label used in material and light aovs


<h2>mask</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

foreground (metal) material weight


<h2>priority</h2>
<b>Int</b>  

Default value : 0  

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


<h2>specular_background_mode</h2>
<b>Int</b>  *enum*

- block = 0

- add = 1 (default)


Whether to block the underlying specular lobe where the mask is applied


</details>

