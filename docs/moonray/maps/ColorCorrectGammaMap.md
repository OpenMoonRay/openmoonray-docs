---
title: ColorCorrectGammaMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ColorCorrectGammaMap
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
  
  <h3>gamma</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  raises the input to the specified exponents
  
  
  <h3>gamma_b</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  raises the blue channel to the specified exponents
  
  
  <h3>gamma_g</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  raises the green channel to the specified exponents
  
  
  <h3>gamma_r</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  raises the red channel to the specified exponents
  
  
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
  
  
  <h3>use_per_channel_gamma</h3>
  <b>Bool</b>  
  
  default: False
  
  enables separate RGB controls for gamma
  
  
  </p>
</details>

