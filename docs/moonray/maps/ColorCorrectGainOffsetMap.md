---
title: ColorCorrectGainOffsetMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectGainOffsetMap
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>gain</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">multiplies the input channels by the specified values</p>
      
    
    <h3>gain_b</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">multiplies the blue channel by the specified values</p>
      
    
    <h3>gain_g</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">multiplies the green channel by the specified values</p>
      
    
    <h3>gain_r</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">multiplies the red channel by the specified values</p>
      
    
    <h3>input</h3>
    <b>Rgb</b>
    <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">bind the input here</p>
      
    
    <h3>mix</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">how much of the overall color correct to mix in</p>
      
    
    <h3>offset</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">adds the specified values to the input</p>
      
    
    <h3>offset_b</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">adds the specified values to the blue channel</p>
      
    
    <h3>offset_g</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">adds the specified values to the green channel</p>
      
    
    <h3>offset_r</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">adds the specified values to the red channel</p>
      
    
    <h3>on</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">enables/disables all color correct operations</p>
      
    
    <h3>use_per_channel_gain_offset</h3>
    <b>Bool</b>
    
      
        default: False
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">enables separate RGB controls for gain and offset</p>
      
    
  </p>
</details>

