---
title: ImageNormalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ImageNormalMap
**SHADER**

---

<details open>
<summary class="scene-class-attr-group">UVs attributes</summary>

<h2>offset</h2>
<b>Vec2f</b>  

Default value : [ 0, 0 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>offset</b> needs to be written</p>


<h2>rotation_angle</h2>
<b>Float</b>  

Default value : 0.0  

Rotation in degrees


<h2>rotation_center</h2>
<b>Vec2f</b>  

Default value : [ 0.5, 0.5 ]  

UV coordinate around which to rotate


<h2>scale</h2>
<b>Vec2f</b>  

Default value : [ 1, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>scale</b> needs to be written</p>


<h2>udim_files</h2>
<b>StringVector</b>  

Default value : []  

<p class="scene-class-attr-missing">Documentation for the attribute <b>udim_files</b> needs to be written</p>


<h2>udim_max_v</h2>
<b>Int</b>  

Default value : 10  

udim maximum v value


<h2>udim_values</h2>
<b>IntVector</b>  

Default value : <scene_rdl2.__scene_rdl2__.IntVector object at >  

<p class="scene-class-attr-missing">Documentation for the attribute <b>udim_values</b> needs to be written</p>


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>default_value</h2>
<b>Vec3f</b>  

Default value : [ 0, 0, 1 ]  

default value to be used for missing udims when 'use_default_value_when_missing' is enabled


<h2>input_texture_coordinates</h2>
<b>Vec3f</b>  *bindable*

Default value : [ 0, 0, 0 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>input_texture_coordinates</b> needs to be written</p>


<h2>normal_encoding</h2>
<b>Int</b>  *enum*

- [0,1] = 0 (default)

- [-1,1] = 1


Most normal maps are encoded [0,1]. Only certain rare floating point normal maps are encoded [-1,1]


<h2>tangent_space_normal_texture</h2>
<b>String</b>  *filename*

Default value :   

filename that points to a tangent space normal texture .exr or .tx file (must be mip-mapped and tiled with maketx).


<h2>texture_coordinates</h2>
<b>Int</b>  *enum*

- texture = 0 (default)

- input texture coordinates = 1


<p class="scene-class-attr-missing">Documentation for the attribute <b>texture_coordinates</b> needs to be written</p>


<h2>use_default_value_when_missing</h2>
<b>Bool</b>  

Default value : False  

Uses the 'default_value' for missing udims and does not report error


<h2>wrap_around</h2>
<b>Bool</b>  

Default value : True  

Controls whether to repeat (true) or clamp (false) the texture


</details>

