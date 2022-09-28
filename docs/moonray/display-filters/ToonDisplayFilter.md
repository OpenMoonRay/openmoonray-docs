---
title: ToonDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ToonDisplayFilter
****

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>ambient</h2>
<b>Rgb</b>  

Default value : [ 0, 0, 0 ]  

Adds an ambient light to the cel shading


<h2>edge_detector</h2>
<b>Int</b>  *enum*

- None = 0 (default)

- Sobel = 1

- Laplacian = 2

- Laplacian of Gaussian = 3


<p class="scene-class-attr-missing">Documentation for the attribute <b>edge_detector</b> needs to be written</p>


<h2>ink_depth_threshold</h2>
<b>Float</b>  

Default value : 0.00999999977648  

The threshold for the depth-based ink outline


<h2>ink_normal_scale</h2>
<b>Float</b>  

Default value : 0.00999999977648  

Increase for a more pronounced normal-based ink outline


<h2>ink_normal_threshold</h2>
<b>Float</b>  

Default value : 0.00999999977648  

The threshold for the normal-based ink outline


<h2>input_albedo</h2>
<b>67141632</b>  

Default value : None  

RenderOutput that represents diffuse albedo material aov


<h2>input_depth</h2>
<b>67141632</b>  

Default value : None  

RenderOutput with 'depth' result


<h2>input_diffuse</h2>
<b>67141632</b>  

Default value : None  

RenderOutput that represents diffuse reflection LPE


<h2>input_glossy</h2>
<b>67141632</b>  

Default value : None  

RenderOutput that represents glossy reflection LPE


<h2>input_normal</h2>
<b>67141632</b>  

Default value : None  

RenderOutput with 'normal' result


<h2>num_cels</h2>
<b>Int</b>  

Default value : 2  

Sets number of toon cels in diffuse shading


</details>

