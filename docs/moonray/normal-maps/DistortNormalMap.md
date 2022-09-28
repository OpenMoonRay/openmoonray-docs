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
<p>

<h3>input_texture_coordinates</h3>
<b>Vec3f</b>  *bindable*

default: [ 0, 0, 0 ]

<p class="scene-class-attr-missing">No documentation available</p>


<h3>noise_space</h3>
<b>Int</b>  *enum*

- world = 2

- object = 4 (default)

- reference = 5

- texture = 6

- input texture coordinates = 7

- hair_surface_uv = 8

- hair_closest_surface_uv = 9


The space to calculate the noise in


</p>
</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>
<p>

<h3>amplitude_U</h3>
<b>Float</b>  

default: 1.0

controls amplitude of U distortion


<h3>amplitude_V</h3>
<b>Float</b>  

default: 1.0

controls amplitude of V distortion


<h3>frequency_U</h3>
<b>Vec3f</b>  

default: [ 1, 1, 1 ]

controls noise frequency for U distortion


<h3>frequency_V</h3>
<b>Vec3f</b>  

default: [ 1, 1, 1 ]

controls noise frequency for V distortion


<h3>input_U</h3>
<b>Rgb</b>  *bindable*

default: [ 0, 0, 0 ]

input U / tangent for distortion


<h3>input_V</h3>
<b>Rgb</b>  *bindable*

default: [ 0, 0, 0 ]

input V / bitangent for distortion


<h3>input_normals</h3>
<b>33554432</b>  

default: None

optional input to distort. if not connected, use geom normals


<h3>seed</h3>
<b>Int</b>  

default: 0

the seed for the noise generation


<h3>use_input_vectors</h3>
<b>Bool</b>  

default: False

when checked, use input_U and V. otherwise use geometry dPds/t


</p>
</details>

