---
title: RampDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# RampDisplayFilter
****

---

<details open>
<summary class="scene-class-attr-group">Advanced attributes</summary>

<h3>invert_mask</h3>
<b>Bool</b>  

default: False

invert value of mask


<h3>mix</h3>
<b>Float</b>  

default: 1.0

blend between output and input


</details>


<details open>
<summary class="scene-class-attr-group">Ramp Knot attributes</summary>

<h3>colors</h3>
<b>RgbVector</b>  

default: [[ 0, 0, 0 ], [ 0.25, 0.25, 0.25 ], [ 0.75, 0.75, 0.75 ], [ 1, 1, 1 ]]

List of colors on the ramp


<h3>interpolations</h3>
<b>IntVector</b>  

default: <scene_rdl2.__scene_rdl2__.IntVector object at >

None: 0, Linear: 1, Exponential Up: 2, Exponential Down: 3, Smooth: 4, Catmull-Rom: 5


<h3>positions</h3>
<b>FloatVector</b>  

default: <scene_rdl2.__scene_rdl2__.FloatVector object at >

Color ramp


</details>


<details open>
<summary class="scene-class-attr-group">Ramp properties attributes</summary>

<h3>input</h3>
<b>67141632</b>  

default: None

input to the input ramp


<h3>ramp_type</h3>
<b>Int</b>  *enum*

- v_ramp = 0 (default)

- u_ramp = 1

- diagonal_ramp = 2

- radial_ramp = 3

- circular_ramp = 4

- box_ramp = 5

- uxv_ramp = 6

- four_corner_ramp = 7

- input_ramp = 8


<p class="scene-class-attr-missing">Documentation for the attribute <b>ramp_type</b> needs to be written</p>


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h3>mask</h3>
<b>67141632</b>  

default: None

<p class="scene-class-attr-missing">Documentation for the attribute <b>mask</b> needs to be written</p>


</details>

