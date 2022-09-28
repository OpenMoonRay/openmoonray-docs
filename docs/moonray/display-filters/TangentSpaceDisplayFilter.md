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
<summary class="scene-class-attr-group">General attributes</summary>

<h2>N</h2>
<b>67141632</b>  

Default value : None  

Connect a RenderOutput with State N AOV here. Used to construct tangent space.


<h2>dPds</h2>
<b>67141632</b>  

Default value : None  

Connect a RenderOutput with State dPds AOV here. Used to construct tangent space.


<h2>input</h2>
<b>67141632</b>  

Default value : None  

data to transform into tangent space


<h2>mask</h2>
<b>67141632</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>mask</b> needs to be written</p>


<h2>normal_map_output</h2>
<b>Bool</b>  

Default value : True  

when on, encodes the output to clamped [0, 1] in the same manner as a normal map


</details>

