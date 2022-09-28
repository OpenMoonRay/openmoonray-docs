---
title: ColorCorrectHueShiftMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectHueShiftMap
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
  
  <h3>hue_shift</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  <p>shifts the hue of the input (spectrum range is 0-1)</p>
  
  
  <h3>input</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  <p>bind the input here</p>
  
  
  <h3>mix</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>how much of the overall color correct to mix in</p>
  
  
  <h3>on</h3>
  <b>Bool</b>  
  
  default: True
  
  <p>enables/disables all color correct operations</p>
  
  
  </p>
</details>

