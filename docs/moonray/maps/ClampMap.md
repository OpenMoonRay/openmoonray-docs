---
title: ClampMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ClampMap
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>clamp</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">enables/disables clamping of the output values.  This useful prevent out-of-range values when expanding the input values.</p>
      
    
    <h3>clamp_max</h3>
    <b>Float</b>
    
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the maximum value output by this map when 'clamp' is enabled</p>
      
    
    <h3>clamp_min</h3>
    <b>Float</b>
    
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the minimum value output by this map when 'clamp' is enabled</p>
      
    
    <h3>input</h3>
    <b>Rgb</b>
    <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the input values to be remapped</p>
      
    
  </p>
</details>

