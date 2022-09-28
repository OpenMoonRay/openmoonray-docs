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

<h2>invert_mask</h2>
<b>Bool</b>  

Default value : False  

invert value of mask


<h2>mix</h2>
<b>Float</b>  

Default value : 1.0  

blend between output and input


</details>


<details open>
<summary class="scene-class-attr-group">Ramp Knot attributes</summary>

<h2>colors</h2>
<b>RgbVector</b>  

Default value : [[ 0, 0, 0 ], [ 0.25, 0.25, 0.25 ], [ 0.75, 0.75, 0.75 ], [ 1, 1, 1 ]]  

List of colors on the ramp


<h2>interpolations</h2>
<b>IntVector</b>  

Default value : <scene_rdl2.__scene_rdl2__.IntVector object at >  

None: 0, Linear: 1, Exponential Up: 2, Exponential Down: 3, Smooth: 4, Catmull-Rom: 5


<h2>positions</h2>
<b>FloatVector</b>  

Default value : <scene_rdl2.__scene_rdl2__.FloatVector object at >  

Color ramp


</details>


<details open>
<summary class="scene-class-attr-group">Ramp properties attributes</summary>

<h2>input</h2>
<b>67141632</b>  

Default value : None  

input to the input ramp


<h2>ramp_type</h2>
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

<h2>mask</h2>
<b>67141632</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>mask</b> needs to be written</p>


</details>

