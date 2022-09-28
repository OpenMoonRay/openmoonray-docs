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
    <p>
      <b>Bool</b>
      
        
          default: False
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">clamps output to [0,1] range</p>
        
      </p>
    
    <h3>hue_shift</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
        
          default: 0.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">shifts the hue of the input (360 rolls over back to 0)</p>
        
      </p>
    
    <h3>input</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
        
          default: [ 1, 1, 1 ]
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">input color</p>
        
      </p>
    
    <h3>on</h3>
    <p>
      <b>Bool</b>
      
        
          default: True
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">all attributes on/off</p>
        
      </p>
    
    <h3>saturation_contrast</h3>
    <p>
      <b>Float</b>
      
        
          default: 0.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">modifies the contrast of the input's saturation (-1, 1)</p>
        
      </p>
    
    <h3>saturation_factor</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
        
          default: 1.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">multiplies the saturation of the input</p>
        
      </p>
    
    <h3>saturation_shift</h3>
    <p>
      <b>Float</b>
      
        
          default: 0.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">shifts the saturation of the input (-1, 1)</p>
        
      </p>
    
    <h3>value_contrast</h3>
    <p>
      <b>Float</b>
      
        
          default: 0.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">modifies the contrast of the input's value (-1, 1)</p>
        
      </p>
    
    <h3>value_factor</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
        
          default: 1.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">multiplies the value of the input</p>
        
      </p>
    
    <h3>value_shift</h3>
    <p>
      <b>Float</b>
      
        
          default: 0.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">shifts the value of the input (-1, 1)</p>
        
      </p>
    
  </p>
</details>

