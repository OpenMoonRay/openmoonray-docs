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
<br>

<h3>angle</h3>
<b>Float</b>  *bindable*

default: 0.0

the angle of rotation in degrees


<h3>axis_space</h3>
<b>Int</b>  *enum*

- world = 2 (default)

- object = 4


the space of the axis to rotate about


<h3>input_space</h3>
<b>Int</b>  *enum*

- render = 0 (default)

- camera = 1

- world = 2

- screen = 3

- object = 4


the space to transform from


<h3>input_vector</h3>
<b>Vec3f</b>  *bindable*

default: [ 0, 0, 1 ]

input vector to be rotated


<h3>output_space</h3>
<b>Int</b>  *enum*

- render = 0 (default)

- camera = 1

- world = 2

- screen = 3

- object = 4


the space to transform the resulting vector to


<h3>rotation_axis</h3>
<b>Vec3f</b>  *bindable*

default: [ 0, 1, 0 ]

axis to be rotated around


</details>

