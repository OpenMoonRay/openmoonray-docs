---
title: BlendMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# BlendMap
**MAP SHADER**

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>blend_amount</h2>
<b>Float</b>  *bindable*

Default value : 0.5  

The amount to blend between color A (0) and color B (1)


<h2>blend_type</h2>
<b>Int</b>  *enum*

- linear = 0 (default)

- cubic = 1


The type of blending algorithm


<h2>color_A</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

The color you get if blend amount is 0


<h2>color_B</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

The color you get if blend amount is 1


<h2>threshold_max</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

If the blend amount is greater than this amount, it will choose color B (1)


<h2>threshold_min</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

If the blend amount is less than or equal to this amount, it will choose color A (0)


</details>

