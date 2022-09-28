---
title: ColorRampLightFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ColorRampLightFilter
**LIGHTFILTER**

---

<details open>
<summary class="scene-class-attr-group">Properties attributes</summary>
<br>

<h3>begin_distance</h3>
<b>Float</b>  

default: 0.0

<p class="scene-class-attr-missing">Documentation for the attribute <b>begin_distance</b> needs to be written</p>


<h3>colors</h3>
<b>RgbVector</b>  

default: [[ 1, 1, 1 ], [ 0, 0, 0 ]]

<p class="scene-class-attr-missing">Documentation for the attribute <b>colors</b> needs to be written</p>


<h3>density</h3>
<b>Float</b>  

default: 1.0

<p class="scene-class-attr-missing">Documentation for the attribute <b>density</b> needs to be written</p>


<h3>distances</h3>
<b>FloatVector</b>  

default: <scene_rdl2.__scene_rdl2__.FloatVector object at >

<p class="scene-class-attr-missing">Documentation for the attribute <b>distances</b> needs to be written</p>


<h3>end_distance</h3>
<b>Float</b>  

default: 1.0

<p class="scene-class-attr-missing">Documentation for the attribute <b>end_distance</b> needs to be written</p>


<h3>intensity</h3>
<b>Float</b>  

default: 1.0

<p class="scene-class-attr-missing">Documentation for the attribute <b>intensity</b> needs to be written</p>


<h3>interpolation_types</h3>
<b>IntVector</b>  

default: <scene_rdl2.__scene_rdl2__.IntVector object at >

<p class="scene-class-attr-missing">Documentation for the attribute <b>interpolation_types</b> needs to be written</p>


<h3>mode</h3>
<b>Int</b>  *enum*

- radial = 0 (default)

- directional = 1


<p class="scene-class-attr-missing">Documentation for the attribute <b>mode</b> needs to be written</p>


<h3>node_xform</h3>
<b>Mat4d</b>  *blurrable*

default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]

<p class="scene-class-attr-missing">Documentation for the attribute <b>node_xform</b> needs to be written</p>


<h3>wrap_mode</h3>
<b>Int</b>  *enum*

- extend = 0 (default)

- mirror = 1


For directional filter mode where filter uses distance along -Z axis.  Extend: f(z) = f(0) for z > 0.  Mirror: f(z) = f(-z).


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>
<br>

<h3>on</h3>
<b>Bool</b>  

default: True

<p class="scene-class-attr-missing">Documentation for the attribute <b>on</b> needs to be written</p>


<h3>use_xform</h3>
<b>Bool</b>  

default: False

<p class="scene-class-attr-missing">Documentation for the attribute <b>use_xform</b> needs to be written</p>


</details>

