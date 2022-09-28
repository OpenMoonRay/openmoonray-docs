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
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
  
  <h3>bound_padding</h3>
  <b>Float</b>  
  
  default: 0.0
  
  bound padding defines how much to extend the bounding box of the object. Keep this value as low as possible unless the geometry skips tessellation because control cage bounding box is out of camera frustum but the displacement stretch out of the original object bounding box (pre-displacement). Setting the bound padding too large will consume more memory and tessellation time.
  
  
  <h3>input_1</h3>
  <b>Displacement</b>  
  
  default: None
  
  Displacement object 1
  
  
  <h3>input_2</h3>
  <b>Displacement</b>  
  
  default: None
  
  Displacement object 2
  
  
  <h3>operation</h3>
  <b>Int</b>  *enum*
  
  - add = 0 (default)
  
  - max magnitude = 1
  
  - min magnitude = 2
  
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>scale_1</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  Scale of input 1
  
  
  <h3>scale_2</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  Scale of input 2
  
  
  </p>
</details>

