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

## ambient  
**Rgb**  

Default value : [ 0, 0, 0 ]  

Adds an ambient light to the cel shading


## edge_detector  
**Int**  *enum*

- None = 0 (default)

- Sobel = 1

- Laplacian = 2

- Laplacian of Gaussian = 3


<p class="scene-class-attr-missing">Documentation for the attribute <b>edge_detector</b> needs to be written</p>


## ink_depth_threshold  
**Float**  

Default value : 0.00999999977648  

The threshold for the depth-based ink outline


## ink_normal_scale  
**Float**  

Default value : 0.00999999977648  

Increase for a more pronounced normal-based ink outline


## ink_normal_threshold  
**Float**  

Default value : 0.00999999977648  

The threshold for the normal-based ink outline


## input_albedo  
**67141632**  

Default value : None  

RenderOutput that represents diffuse albedo material aov


## input_depth  
**67141632**  

Default value : None  

RenderOutput with 'depth' result


## input_diffuse  
**67141632**  

Default value : None  

RenderOutput that represents diffuse reflection LPE


## input_glossy  
**67141632**  

Default value : None  

RenderOutput that represents glossy reflection LPE


## input_normal  
**67141632**  

Default value : None  

RenderOutput with 'normal' result


## num_cels  
**Int**  

Default value : 2  

Sets number of toon cels in diffuse shading


</details>

