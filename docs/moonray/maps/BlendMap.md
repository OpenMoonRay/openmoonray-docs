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
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
  
  <h3>blend_amount</h3>
  <b>Float</b>  *bindable*
  
  default: 0.5
  
  <p>The amount to blend between color A (0) and color B (1)</p>
  
  
  <h3>blend_type</h3>
  <b>Int</b>  *enum*
  
  - linear = 0 (default)
  
  - cubic = 1
  
  
  <p>The type of blending algorithm</p>
  
  
  <h3>color_A</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  <p>The color you get if blend amount is 0</p>
  
  
  <h3>color_B</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  <p>The color you get if blend amount is 1</p>
  
  
  <h3>threshold_max</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>If the blend amount is greater than this amount, it will choose color B (1)</p>
  
  
  <h3>threshold_min</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  <p>If the blend amount is less than or equal to this amount, it will choose color A (0)</p>
  
  
  </p>
</details>

