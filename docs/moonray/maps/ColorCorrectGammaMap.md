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
    <b>Float</b>
    <span class="emphasized">bindable</span>
    
    default: 1.0
    
    <p>raises the input to the specified exponents</p>
    
    
    <h3>gamma_b</h3>
    <b>Float</b>
    <span class="emphasized">bindable</span>
    
    default: 1.0
    
    <p>raises the blue channel to the specified exponents</p>
    
    
    <h3>gamma_g</h3>
    <b>Float</b>
    <span class="emphasized">bindable</span>
    
    default: 1.0
    
    <p>raises the green channel to the specified exponents</p>
    
    
    <h3>gamma_r</h3>
    <b>Float</b>
    <span class="emphasized">bindable</span>
    
    default: 1.0
    
    <p>raises the red channel to the specified exponents</p>
    
    
    <h3>input</h3>
    <b>Rgb</b>
    <span class="emphasized">bindable</span>
    
    default: [ 1, 1, 1 ]
    
    <p>bind the input here</p>
    
    
    <h3>mix</h3>
    <b>Float</b>
    <span class="emphasized">bindable</span>
    
    default: 1.0
    
    <p>how much of the overall color correct to mix in</p>
    
    
    <h3>on</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>enables/disables all color correct operations</p>
    
    
    <h3>use_per_channel_gamma</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>enables separate RGB controls for gamma</p>
    
    
  </p>
</details>

