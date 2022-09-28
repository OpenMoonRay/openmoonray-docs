---
title: ColorCorrectContrastMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectContrastMap
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>contrast</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance</p>
      
    </p>
    
    <h3>contrast_b</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the blue channel</p>
      
    </p>
    
    <h3>contrast_g</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the green channel</p>
      
    </p>
    
    <h3>contrast_r</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the red channel</p>
      
    </p>
    
    <h3>input</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">bind the input here</p>
      
    </p>
    
    <h3>mix</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">how much of the overall color correct to mix in</p>
      
    </p>
    
    <h3>on</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">enables/disables all color correct operations</p>
      
    </p>
    
    <h3>use_per_channel_contrast</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">enables separate RGB controls for contrast</p>
      
    </p>
    
  </p>
</details>

