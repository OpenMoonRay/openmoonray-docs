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
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>bound_padding</h3>
    <b>Float</b>
    
    
    default: 0.0
    
    <p>bound padding defines how much to extend the bounding box of the object. Keep this value as low as possible unless the geometry skips tessellation because control cage bounding box is out of camera frustum but the displacement stretch out of the original object bounding box (pre-displacement). Setting the bound padding too large will consume more memory and tessellation time.</p>
    
    
    <h3>factor</h3>
    <b>Float</b>
    
    
    default: 1.0
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>source_space</h3>
    <b>Int</b>
    <i>enum</i>
    
    |  tangent = 0 (default) 
    
    |  object = 1 
    
    
    <p>The space that the map bound to the vector parameter is in</p>
    
    
    <h3>tangent_space_style</h3>
    <b>Int</b>
    <i>enum</i>
    
    |  tnb = 0 (default) 
    
    |  tbn = 1 
    
    
    <p>Controls how RGB maps to Tangent, Normal, and Bi-Normal</p>
    
    
    <h3>vector</h3>
    <b>Vec3f</b>
    <i>bindable</i>
    
    default: [ 0, 0, 0 ]
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
  </p>
</details>

