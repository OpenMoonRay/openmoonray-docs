---
title: DebugMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# DebugMap
**MAP SHADER**

---

<details open>
<summary class="scene-class-attr-group">Normal attributes</summary>
<br>

<h3>input_normal_space</h3>
<b>Int</b>  *enum*

- tangent = 0 (default)

- render = 1


Specifies what space the input normal is in.  Usually this is tangent space for texture maps and render space for projections


</details>


<details open>
<summary class="scene-class-attr-group">Primitive Attribute attributes</summary>
<br>

<h3>primitive_attribute_name</h3>
<b>String</b>  

default: surface_st

the name of primitive attribute to displayed when attribute 'map type' is set to 'primitive attribute'


<h3>primitive_attribute_type</h3>
<b>Int</b>  *enum*

- float = 0

- vec2f = 1 (default)

- vec3f = 2

- rgb = 3


the type of primitive attribute to displayed when attribute 'map type' is set to 'primitive attribute'


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>
<br>

<h3>checkerboard</h3>
<b>Bool</b>  

default: True

<p class="scene-class-attr-missing">Documentation for the attribute <b>checkerboard</b> needs to be written</p>


<h3>input_normal</h3>
<b>Vec3f</b>  *bindable*

default: [ 0, 0, 1 ]

<p class="scene-class-attr-missing">Documentation for the attribute <b>input_normal</b> needs to be written</p>


<h3>input_normal_dial</h3>
<b>Float</b>  

default: 1.0

<p class="scene-class-attr-missing">Documentation for the attribute <b>input_normal_dial</b> needs to be written</p>


<h3>map_type</h3>
<b>Int</b>  *enum*

- position = 0 (default)

- texture st = 1

- shading normal = 2

- geometric normal = 3

- dpds = 4

- dpdt = 5

- primitive attribute = 6


<p class="scene-class-attr-missing">Documentation for the attribute <b>map_type</b> needs to be written</p>


</details>

