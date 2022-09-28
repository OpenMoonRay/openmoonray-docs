---
title: ColorCorrectSaturationMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ColorCorrectSaturationMap
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
  
  <h3>input</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  bind the input here
  
  
  <h3>mix</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  how much of the overall color correct to mix in
  
  
  <h3>on</h3>
  <b>Bool</b>  
  
  default: True
  
  enables/disables all color correct operations
  
  
  <h3>saturation</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  desaturates the input below 1.0 and adds saturation above 1.0
  
  
  <h3>saturation_b</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  desaturates the blue channel input below 1.0 and adds saturation above 1.0
  
  
  <h3>saturation_g</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  desaturates the green channel input below 1.0 and adds saturation above 1.0
  
  
  <h3>saturation_r</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  desaturates the red channel input below 1.0 and adds saturation above 1.0
  
  
  <h3>use_per_channel_saturation</h3>
  <b>Bool</b>  
  
  default: False
  
  enables separate RGB controls for saturation
  
  
  </p>
</details>

