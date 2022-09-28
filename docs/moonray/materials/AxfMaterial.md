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

<h2>input_normal_dial</h2>
<b>Float</b>  

Default value : 1.0  

controls the amount of influence of the alternate normal


<h2>normal</h2>
<b>Vec3f</b>  *bindable*

Default value : [ 0, 0, 0 ]  

bind the 'Normal' texture here, the multiplier is ignored. The state's normal is used when no texture is bound.


<h2>normal_space</h2>
<b>Int</b>  *enum*

- tangent = 0 (default)

- render = 1


Specifies what space the normal is given in.  Usually this is tangent space for texture maps and render space for projections


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>alpha</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

bind the 'Alpha' texture here


<h2>aniso_rotation</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

bind the 'AnisoRotation' texture here


<h2>casts_caustics</h2>
<b>Bool</b>  

Default value : False  

allows continuation of caustic light paths


<h2>diffuse_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

bind the 'DiffuseColor' texture here


<h2>extra_aovs</h2>
<b>Map</b>  

Default value : None  

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


<h2>fresnel</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

bind the 'Fresnel' texture here


<h2>label</h2>
<b>String</b>  

Default value :   

label used in material and light aovs


<h2>priority</h2>
<b>Int</b>  

Default value : 0  

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


<h2>specular_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

bind the 'SpecularColor' texture here


<h2>specular_lobe</h2>
<b>Vec2f</b>  *bindable*

Default value : [ 1, 1 ]  

bind the 'SpecularLobe' texture here


</details>

