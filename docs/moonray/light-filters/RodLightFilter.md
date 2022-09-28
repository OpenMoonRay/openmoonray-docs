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

<h2>color</h2>
<b>Rgb</b>  

Default value : [ 0, 0, 0 ]  

filter color. Scales the light within the volume. For each color channel, 0=full shadow, 1=no shadow


<h2>density</h2>
<b>Float</b>  

Default value : 1.0  

fades the filter effect. 0=no effect (like having no filter), 1=full effect


<h2>depth</h2>
<b>Float</b>  

Default value : 1.0  

depth of the base box (before radius and edge)


<h2>edge</h2>
<b>Float</b>  

Default value : 0.0  

size of transition zone from the rounded box to the outside


<h2>height</h2>
<b>Float</b>  

Default value : 1.0  

height of the base box (before radius and edge)


<h2>intensity</h2>
<b>Float</b>  

Default value : 1.0  

scalar for multiplying the color. 0=black 1=color


<h2>invert</h2>
<b>Bool</b>  

Default value : False  

swap application of filter from inside the volume to outside


<h2>node_xform</h2>
<b>Mat4d</b>  *blurrable*

Default value : [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]  

transform of the filter


<h2>radius</h2>
<b>Float</b>  

Default value : 0.0  

radius by which to expand the base box into a rounded box


<h2>ramp_in_distances</h2>
<b>FloatVector</b>  

Default value : <scene_rdl2.__scene_rdl2__.FloatVector object at >  

input distance for ramp control


<h2>ramp_interpolation_types</h2>
<b>IntVector</b>  

Default value : <scene_rdl2.__scene_rdl2__.IntVector object at >  

interpolation types for ramp control


<h2>ramp_out_distances</h2>
<b>FloatVector</b>  

Default value : <scene_rdl2.__scene_rdl2__.FloatVector object at >  

remapped distances for ramp control


<h2>width</h2>
<b>Float</b>  

Default value : 1.0  

width of the base box (before radius and edge)


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>on</h2>
<b>Bool</b>  

Default value : True  

<p class="scene-class-attr-missing">Documentation for the attribute <b>on</b> needs to be written</p>


</details>

