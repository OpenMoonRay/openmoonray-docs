---
title: CombineDisplacement

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# CombineDisplacement
**ROOTSHADER SHADER DISPLACEMENT**

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>bound_padding</h2>
<b>Float</b>  

Default value : 0.0  

bound padding defines how much to extend the bounding box of the object. Keep this value as low as possible unless the geometry skips tessellation because control cage bounding box is out of camera frustum but the displacement stretch out of the original object bounding box (pre-displacement). Setting the bound padding too large will consume more memory and tessellation time.


<h2>input_1</h2>
<b>Displacement</b>  

Default value : None  

Displacement object 1


<h2>input_2</h2>
<b>Displacement</b>  

Default value : None  

Displacement object 2


<h2>operation</h2>
<b>Int</b>  *enum*

- add = 0 (default)

- max magnitude = 1

- min magnitude = 2


<p class="scene-class-attr-missing">Documentation for the attribute <b>operation</b> needs to be written</p>


<h2>scale_1</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

Scale of input 1


<h2>scale_2</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

Scale of input 2


</details>

