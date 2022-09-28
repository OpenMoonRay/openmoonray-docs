---
title: AxisAngleMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# AxisAngleMap
**MAP SHADER**

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>angle</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

the angle of rotation in degrees


<h2>axis_space</h2>
<b>Int</b>  *enum*

- world = 2 (default)

- object = 4


the space of the axis to rotate about


<h2>input_space</h2>
<b>Int</b>  *enum*

- render = 0 (default)

- camera = 1

- world = 2

- screen = 3

- object = 4


the space to transform from


<h2>input_vector</h2>
<b>Vec3f</b>  *bindable*

Default value : [ 0, 0, 1 ]  

input vector to be rotated


<h2>output_space</h2>
<b>Int</b>  *enum*

- render = 0 (default)

- camera = 1

- world = 2

- screen = 3

- object = 4


the space to transform the resulting vector to


<h2>rotation_axis</h2>
<b>Vec3f</b>  *bindable*

Default value : [ 0, 1, 0 ]  

axis to be rotated around


</details>

