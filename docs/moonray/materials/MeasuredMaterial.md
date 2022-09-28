---
title: MeasuredMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# MeasuredMaterial
**ROOTSHADER MATERIAL SHADER**

---

<details open>
<summary class="scene-class-attr-group">Diffuse attributes</summary>

<h2>diffuse</h2>
<b>Bool</b>  

Default value : True  

<p class="scene-class-attr-missing">Documentation for the attribute <b>diffuse</b> needs to be written</p>


<h2>diffuse_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>diffuse_color</b> needs to be written</p>


<h2>diffuse_factor</h2>
<b>Float</b>  

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>diffuse_factor</b> needs to be written</p>


<h2>diffuse_filename</h2>
<b>String</b>  *filename*

Default value :   

<p class="scene-class-attr-missing">Documentation for the attribute <b>diffuse_filename</b> needs to be written</p>


<h2>diffuse_hue_shift</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>diffuse_hue_shift</b> needs to be written</p>


<h2>diffuse_saturation</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>diffuse_saturation</b> needs to be written</p>


</details>


<details open>
<summary class="scene-class-attr-group">Specular attributes</summary>

<h2>specular</h2>
<b>Bool</b>  

Default value : True  

<p class="scene-class-attr-missing">Documentation for the attribute <b>specular</b> needs to be written</p>


<h2>specular_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>specular_color</b> needs to be written</p>


<h2>specular_factor</h2>
<b>Float</b>  

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>specular_factor</b> needs to be written</p>


<h2>specular_filename</h2>
<b>String</b>  *filename*

Default value :   

<p class="scene-class-attr-missing">Documentation for the attribute <b>specular_filename</b> needs to be written</p>


<h2>specular_hue_shift</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>specular_hue_shift</b> needs to be written</p>


<h2>specular_saturation</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>specular_saturation</b> needs to be written</p>


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>anisotropic_direction</h2>
<b>Vec2f</b>  

Default value : [ 1, 0 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>anisotropic_direction</b> needs to be written</p>


<h2>casts_caustics</h2>
<b>Bool</b>  

Default value : False  

<p class="scene-class-attr-missing">Documentation for the attribute <b>casts_caustics</b> needs to be written</p>


<h2>extra_aovs</h2>
<b>Map</b>  

Default value : None  

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


<h2>input_normal</h2>
<b>Vec3f</b>  *bindable*

Default value : [ 0, 0, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>input_normal</b> needs to be written</p>


<h2>input_normal_dial</h2>
<b>Float</b>  

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>input_normal_dial</b> needs to be written</p>


<h2>input_normal_space</h2>
<b>Int</b>  

Default value : 0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>input_normal_space</b> needs to be written</p>


<h2>label</h2>
<b>String</b>  

Default value :   

label used in material and light aovs


<h2>priority</h2>
<b>Int</b>  

Default value : 0  

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


</details>

