---
title: VectorDisplacement

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# VectorDisplacement
**ROOTSHADER SHADER DISPLACEMENT**

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>bound_padding</h2>
<b>Float</b>  

Default value : 0.0  

bound padding defines how much to extend the bounding box of the object. Keep this value as low as possible unless the geometry skips tessellation because control cage bounding box is out of camera frustum but the displacement stretch out of the original object bounding box (pre-displacement). Setting the bound padding too large will consume more memory and tessellation time.


<h2>factor</h2>
<b>Float</b>  

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>factor</b> needs to be written</p>


<h2>source_space</h2>
<b>Int</b>  *enum*

- tangent = 0 (default)

- object = 1


The space that the map bound to the vector parameter is in


<h2>tangent_space_style</h2>
<b>Int</b>  *enum*

- tnb = 0 (default)

- tbn = 1


Controls how RGB maps to Tangent, Normal, and Bi-Normal


<h2>vector</h2>
<b>Vec3f</b>  *bindable*

Default value : [ 0, 0, 0 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>vector</b> needs to be written</p>


</details>

