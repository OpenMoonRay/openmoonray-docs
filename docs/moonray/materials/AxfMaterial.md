---
title: AxfMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# AxfMaterial
**ROOTSHADER MATERIAL SHADER**

---

<details open>
<summary class="scene-class-attr-group">Normal attributes</summary>

<h3>input_normal_dial</h3>
<b>Float</b>  

default: 1.0

controls the amount of influence of the alternate normal


<h3>normal</h3>
<b>Vec3f</b>  *bindable*

default: [ 0, 0, 0 ]

bind the 'Normal' texture here, the multiplier is ignored. The state's normal is used when no texture is bound.


<h3>normal_space</h3>
<b>Int</b>  *enum*

- tangent = 0 (default)

- render = 1


Specifies what space the normal is given in.  Usually this is tangent space for texture maps and render space for projections


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h3>alpha</h3>
<b>Float</b>  *bindable*

default: 1.0

bind the 'Alpha' texture here


<h3>aniso_rotation</h3>
<b>Float</b>  *bindable*

default: 0.0

bind the 'AnisoRotation' texture here


<h3>casts_caustics</h3>
<b>Bool</b>  

default: False

allows continuation of caustic light paths


<h3>diffuse_color</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

bind the 'DiffuseColor' texture here


<h3>extra_aovs</h3>
<b>Map</b>  

default: None

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


<h3>fresnel</h3>
<b>Float</b>  *bindable*

default: 1.0

bind the 'Fresnel' texture here


<h3>label</h3>
<b>String</b>  

default: 

label used in material and light aovs


<h3>priority</h3>
<b>Int</b>  

default: 0

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


<h3>specular_color</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

bind the 'SpecularColor' texture here


<h3>specular_lobe</h3>
<b>Vec2f</b>  *bindable*

default: [ 1, 1 ]

bind the 'SpecularLobe' texture here


</details>

