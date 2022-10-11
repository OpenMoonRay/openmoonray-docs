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
  <p>
    
    <h3>bound_padding</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-comment">bound padding defines how much to extend the bounding box of the object. Keep this value as low as possible unless the geometry skips tessellation because control cage bounding box is out of camera frustum but the displacement stretch out of the original object bounding box (pre-displacement). Setting the bound padding too large will consume more memory and tessellation time.</p>
      
    </p>
    
    <h3>height</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>height_multiplier</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="scene-class-attr-comment">Multiply the computed (post zero-value) height with this factor.</p>
      
    </p>
    
    <h3>zero_value</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
  </p>
</details>

