---
title: RodLightFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# RodLightFilter
**LIGHTFILTER**

---

<details open>
<summary class="scene-class-attr-group">Properties attributes</summary>

<h3>color</h3>
<b>Rgb</b>  

default: [ 0, 0, 0 ]

filter color. Scales the light within the volume. For each color channel, 0=full shadow, 1=no shadow


<h3>density</h3>
<b>Float</b>  

default: 1.0

fades the filter effect. 0=no effect (like having no filter), 1=full effect


<h3>depth</h3>
<b>Float</b>  

default: 1.0

depth of the base box (before radius and edge)


<h3>edge</h3>
<b>Float</b>  

default: 0.0

size of transition zone from the rounded box to the outside


<h3>height</h3>
<b>Float</b>  

default: 1.0

height of the base box (before radius and edge)


<h3>intensity</h3>
<b>Float</b>  

default: 1.0

scalar for multiplying the color. 0=black 1=color


<h3>invert</h3>
<b>Bool</b>  

default: False

swap application of filter from inside the volume to outside


<h3>node_xform</h3>
<b>Mat4d</b>  *blurrable*

default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]

transform of the filter


<h3>radius</h3>
<b>Float</b>  

default: 0.0

radius by which to expand the base box into a rounded box


<h3>ramp_in_distances</h3>
<b>FloatVector</b>  

default: <scene_rdl2.__scene_rdl2__.FloatVector object at >

input distance for ramp control


<h3>ramp_interpolation_types</h3>
<b>IntVector</b>  

default: <scene_rdl2.__scene_rdl2__.IntVector object at >

interpolation types for ramp control


<h3>ramp_out_distances</h3>
<b>FloatVector</b>  

default: <scene_rdl2.__scene_rdl2__.FloatVector object at >

remapped distances for ramp control


<h3>width</h3>
<b>Float</b>  

default: 1.0

width of the base box (before radius and edge)


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h3>on</h3>
<b>Bool</b>  

default: True

<p class="scene-class-attr-missing">Documentation for the attribute <b>on</b> needs to be written</p>


</details>

