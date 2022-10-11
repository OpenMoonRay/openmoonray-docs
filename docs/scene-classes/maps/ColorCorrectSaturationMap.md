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
  <summary class="scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>input</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="scene-class-attr-comment">bind the input here</p>
      
    </p>
    
    <h3>mix</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="scene-class-attr-comment">how much of the overall color correct to mix in</p>
      
    </p>
    
    <h3>on</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="scene-class-attr-comment">enables/disables all color correct operations</p>
      
    </p>
    
    <h3>saturation</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="scene-class-attr-comment">desaturates the input below 1.0 and adds saturation above 1.0</p>
      
    </p>
    
    <h3>saturation_b</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="scene-class-attr-comment">desaturates the blue channel input below 1.0 and adds saturation above 1.0</p>
      
    </p>
    
    <h3>saturation_g</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="scene-class-attr-comment">desaturates the green channel input below 1.0 and adds saturation above 1.0</p>
      
    </p>
    
    <h3>saturation_r</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="scene-class-attr-comment">desaturates the red channel input below 1.0 and adds saturation above 1.0</p>
      
    </p>
    
    <h3>use_per_channel_saturation</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="scene-class-attr-comment">enables separate RGB controls for saturation</p>
      
    </p>
    
  </p>
</details>

