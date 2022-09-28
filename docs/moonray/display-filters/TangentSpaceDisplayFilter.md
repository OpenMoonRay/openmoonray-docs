---
title: TangentSpaceDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# TangentSpaceDisplayFilter
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
<summary class="scene-class-attr-group">General attributes</summary>

<h3>N</h3>
<b>67141632</b>  

default: None

Connect a RenderOutput with State N AOV here. Used to construct tangent space.


<h3>dPds</h3>
<b>67141632</b>  

default: None

Connect a RenderOutput with State dPds AOV here. Used to construct tangent space.


<h3>input</h3>
<b>67141632</b>  

default: None

data to transform into tangent space


<h3>mask</h3>
<b>67141632</b>  

default: None

<p class="scene-class-attr-missing">Documentation for the attribute <b>mask</b> needs to be written</p>


<h3>normal_map_output</h3>
<b>Bool</b>  

default: True

when on, encodes the output to clamped [0, 1] in the same manner as a normal map


</details>

