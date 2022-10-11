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
  <summary class="scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>hue_shift</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.0
      
        <p class="scene-class-attr-comment">shifts the hue of the input (spectrum range is 0-1)</p>
      
    </p>
    
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
    
  </p>
</details>

