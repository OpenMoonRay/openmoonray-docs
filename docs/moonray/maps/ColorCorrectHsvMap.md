---
title: ColorCorrectHsvMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectHsvMap
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
  
  <h3>clamp</h3>
  <b>Bool</b>  
  
  default: False
  
  <p>clamps output to [0,1] range<\p>
  
  
  <h3>hue_shift</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  <p>shifts the hue of the input (360 rolls over back to 0)<\p>
  
  
  <h3>input</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  <p>input color<\p>
  
  
  <h3>on</h3>
  <b>Bool</b>  
  
  default: True
  
  <p>all attributes on/off<\p>
  
  
  <h3>saturation_contrast</h3>
  <b>Float</b>  
  
  default: 0.0
  
  <p>modifies the contrast of the input's saturation (-1, 1)<\p>
  
  
  <h3>saturation_factor</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>multiplies the saturation of the input<\p>
  
  
  <h3>saturation_shift</h3>
  <b>Float</b>  
  
  default: 0.0
  
  <p>shifts the saturation of the input (-1, 1)<\p>
  
  
  <h3>value_contrast</h3>
  <b>Float</b>  
  
  default: 0.0
  
  <p>modifies the contrast of the input's value (-1, 1)<\p>
  
  
  <h3>value_factor</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>multiplies the value of the input<\p>
  
  
  <h3>value_shift</h3>
  <b>Float</b>  
  
  default: 0.0
  
  <p>shifts the value of the input (-1, 1)<\p>
  
  
  </p>
</details>

