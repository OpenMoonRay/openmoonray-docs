---
title: NormalDisplacement

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# NormalDisplacement
**ROOTSHADER SHADER DISPLACEMENT**

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

## bound_padding  
**Float**  

Default value : 0.0  

bound padding defines how much to extend the bounding box of the object. Keep this value as low as possible unless the geometry skips tessellation because control cage bounding box is out of camera frustum but the displacement stretch out of the original object bounding box (pre-displacement). Setting the bound padding too large will consume more memory and tessellation time.


## height  
**Float**  *bindable*

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>height</b> needs to be written</p>


## height_multiplier  
**Float**  *bindable*

Default value : 1.0  

Multiply the computed (post zero-value) height with this factor.


## zero_value  
**Float**  

Default value : 0.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>zero_value</b> needs to be written</p>


</details>

