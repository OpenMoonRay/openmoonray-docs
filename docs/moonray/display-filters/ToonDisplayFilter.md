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
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>ambient</h3>
    <b>Rgb</b>
    
    
    default: [ 0, 0, 0 ]
    
    <p>Adds an ambient light to the cel shading</p>
    
    
    <h3>edge_detector</h3>
    <b>Int</b>
    <i>enum</i>
    
    |  None = 0 (default) 
    
    |  Sobel = 1 
    
    |  Laplacian = 2 
    
    |  Laplacian of Gaussian = 3 
    
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>ink_depth_threshold</h3>
    <b>Float</b>
    
    
    default: 0.00999999977648
    
    <p>The threshold for the depth-based ink outline</p>
    
    
    <h3>ink_normal_scale</h3>
    <b>Float</b>
    
    
    default: 0.00999999977648
    
    <p>Increase for a more pronounced normal-based ink outline</p>
    
    
    <h3>ink_normal_threshold</h3>
    <b>Float</b>
    
    
    default: 0.00999999977648
    
    <p>The threshold for the normal-based ink outline</p>
    
    
    <h3>input_albedo</h3>
    <b>67141632</b>
    
    
    default: None
    
    <p>RenderOutput that represents diffuse albedo material aov</p>
    
    
    <h3>input_depth</h3>
    <b>67141632</b>
    
    
    default: None
    
    <p>RenderOutput with 'depth' result</p>
    
    
    <h3>input_diffuse</h3>
    <b>67141632</b>
    
    
    default: None
    
    <p>RenderOutput that represents diffuse reflection LPE</p>
    
    
    <h3>input_glossy</h3>
    <b>67141632</b>
    
    
    default: None
    
    <p>RenderOutput that represents glossy reflection LPE</p>
    
    
    <h3>input_normal</h3>
    <b>67141632</b>
    
    
    default: None
    
    <p>RenderOutput with 'normal' result</p>
    
    
    <h3>num_cels</h3>
    <b>Int</b>
    
    
    default: 2
    
    <p>Sets number of toon cels in diffuse shading</p>
    
    
  </p>
</details>

