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
  <summary class="jekyll-theme-minimal scene-class-attr-group">Advanced attributes</summary>
  <p>
    
    <h3>invert_mask</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>invert value of mask</p>
    
    
    <h3>mix</h3>
    <b>Float</b>
    
    
    default: 1.0
    
    <p>blend between output and input</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>N</h3>
    <b>67141632</b>
    
    
    default: None
    
    <p>Connect a RenderOutput with State N AOV here. Used to construct tangent space.</p>
    
    
    <h3>dPds</h3>
    <b>67141632</b>
    
    
    default: None
    
    <p>Connect a RenderOutput with State dPds AOV here. Used to construct tangent space.</p>
    
    
    <h3>input</h3>
    <b>67141632</b>
    
    
    default: None
    
    <p>data to transform into tangent space</p>
    
    
    <h3>mask</h3>
    <b>67141632</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>normal_map_output</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>when on, encodes the output to clamped [0, 1] in the same manner as a normal map</p>
    
    
  </p>
</details>

