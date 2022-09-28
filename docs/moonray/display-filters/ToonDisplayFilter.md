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
<br>

<h3>ambient</h3>
<b>Rgb</b>  

default: [ 0, 0, 0 ]

Adds an ambient light to the cel shading


<h3>edge_detector</h3>
<b>Int</b>  *enum*

- None = 0 (default)

- Sobel = 1

- Laplacian = 2

- Laplacian of Gaussian = 3


<p class="scene-class-attr-missing">Documentation for the attribute <b>edge_detector</b> needs to be written</p>


<h3>ink_depth_threshold</h3>
<b>Float</b>  

default: 0.00999999977648

The threshold for the depth-based ink outline


<h3>ink_normal_scale</h3>
<b>Float</b>  

default: 0.00999999977648

Increase for a more pronounced normal-based ink outline


<h3>ink_normal_threshold</h3>
<b>Float</b>  

default: 0.00999999977648

The threshold for the normal-based ink outline


<h3>input_albedo</h3>
<b>67141632</b>  

default: None

RenderOutput that represents diffuse albedo material aov


<h3>input_depth</h3>
<b>67141632</b>  

default: None

RenderOutput with 'depth' result


<h3>input_diffuse</h3>
<b>67141632</b>  

default: None

RenderOutput that represents diffuse reflection LPE


<h3>input_glossy</h3>
<b>67141632</b>  

default: None

RenderOutput that represents glossy reflection LPE


<h3>input_normal</h3>
<b>67141632</b>  

default: None

RenderOutput with 'normal' result


<h3>num_cels</h3>
<b>Int</b>  

default: 2

Sets number of toon cels in diffuse shading


</details>

