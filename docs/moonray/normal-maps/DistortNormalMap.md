---
title: DistortNormalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# DistortNormalMap
**SHADER**

---

<details open>
<summary class="scene-class-attr-group">Space attributes</summary>

<h2>input_texture_coordinates</h2>
<b>Vec3f</b>  *bindable*

Default value : [ 0, 0, 0 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>input_texture_coordinates</b> needs to be written</p>


<h2>noise_space</h2>
<b>Int</b>  *enum*

- world = 2

- object = 4 (default)

- reference = 5

- texture = 6

- input texture coordinates = 7

- hair_surface_uv = 8

- hair_closest_surface_uv = 9


The space to calculate the noise in


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>amplitude_U</h2>
<b>Float</b>  

Default value : 1.0  

controls amplitude of U distortion


<h2>amplitude_V</h2>
<b>Float</b>  

Default value : 1.0  

controls amplitude of V distortion


<h2>frequency_U</h2>
<b>Vec3f</b>  

Default value : [ 1, 1, 1 ]  

controls noise frequency for U distortion


<h2>frequency_V</h2>
<b>Vec3f</b>  

Default value : [ 1, 1, 1 ]  

controls noise frequency for V distortion


<h2>input_U</h2>
<b>Rgb</b>  *bindable*

Default value : [ 0, 0, 0 ]  

input U / tangent for distortion


<h2>input_V</h2>
<b>Rgb</b>  *bindable*

Default value : [ 0, 0, 0 ]  

input V / bitangent for distortion


<h2>input_normals</h2>
<b>33554432</b>  

Default value : None  

optional input to distort. if not connected, use geom normals


<h2>seed</h2>
<b>Int</b>  

Default value : 0  

the seed for the noise generation


<h2>use_input_vectors</h2>
<b>Bool</b>  

Default value : False  

when checked, use input_U and V. otherwise use geometry dPds/t


</details>

