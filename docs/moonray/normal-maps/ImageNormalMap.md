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
<br>

<h3>offset</h3>
<b>Vec2f</b>  

default: [ 0, 0 ]

<p class="scene-class-attr-missing">Documentation for the attribute <b>offset</b> needs to be written</p>


<h3>rotation_angle</h3>
<b>Float</b>  

default: 0.0

Rotation in degrees


<h3>rotation_center</h3>
<b>Vec2f</b>  

default: [ 0.5, 0.5 ]

UV coordinate around which to rotate


<h3>scale</h3>
<b>Vec2f</b>  

default: [ 1, 1 ]

<p class="scene-class-attr-missing">Documentation for the attribute <b>scale</b> needs to be written</p>


<h3>udim_files</h3>
<b>StringVector</b>  

default: []

<p class="scene-class-attr-missing">Documentation for the attribute <b>udim_files</b> needs to be written</p>


<h3>udim_max_v</h3>
<b>Int</b>  

default: 10

udim maximum v value


<h3>udim_values</h3>
<b>IntVector</b>  

default: <scene_rdl2.__scene_rdl2__.IntVector object at >

<p class="scene-class-attr-missing">Documentation for the attribute <b>udim_values</b> needs to be written</p>


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>
<br>

<h3>default_value</h3>
<b>Vec3f</b>  

default: [ 0, 0, 1 ]

default value to be used for missing udims when 'use_default_value_when_missing' is enabled


<h3>input_texture_coordinates</h3>
<b>Vec3f</b>  *bindable*

default: [ 0, 0, 0 ]

<p class="scene-class-attr-missing">Documentation for the attribute <b>input_texture_coordinates</b> needs to be written</p>


<h3>normal_encoding</h3>
<b>Int</b>  *enum*

- [0,1] = 0 (default)

- [-1,1] = 1


Most normal maps are encoded [0,1]. Only certain rare floating point normal maps are encoded [-1,1]


<h3>tangent_space_normal_texture</h3>
<b>String</b>  *filename*

default: 

filename that points to a tangent space normal texture .exr or .tx file (must be mip-mapped and tiled with maketx).


<h3>texture_coordinates</h3>
<b>Int</b>  *enum*

- texture = 0 (default)

- input texture coordinates = 1


<p class="scene-class-attr-missing">Documentation for the attribute <b>texture_coordinates</b> needs to be written</p>


<h3>use_default_value_when_missing</h3>
<b>Bool</b>  

default: False

Uses the 'default_value' for missing udims and does not report error


<h3>wrap_around</h3>
<b>Bool</b>  

default: True

Controls whether to repeat (true) or clamp (false) the texture


</details>

