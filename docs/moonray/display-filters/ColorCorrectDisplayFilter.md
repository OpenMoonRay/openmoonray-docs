---
title: ColorCorrectDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectDisplayFilter
****

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Advanced attributes</summary>
  <p>
    
    <h3>invert_mask</h3>
    <b>Bool</b>
    
      
        default: False
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">invert value of mask</p>
      
    
    <h3>mix</h3>
    <b>Float</b>
    
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">blend between output and input</p>
      
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>contrast</h3>
    <b>Float</b>
    
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Decrease contrast below 0.0 and increase contrast above 0.0</p>
      
    
    <h3>exposure</h3>
    <b>Float</b>
    
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Adjusts the exposure, in fstops</p>
      
    
    <h3>gamma</h3>
    <b>Float</b>
    
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Adjusts gamma of input</p>
      
    
    <h3>input</h3>
    <b>67141632</b>
    
      
        default: None
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">RenderOutput to color correct</p>
      
    
    <h3>mask</h3>
    <b>67141632</b>
    
      
        default: None
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>multiply</h3>
    <b>Rgb</b>
    
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Multiplies input using specified color</p>
      
    
    <h3>offset</h3>
    <b>Rgb</b>
    
      
        default: [ 0, 0, 0 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Add offset color to input</p>
      
    
    <h3>saturation</h3>
    <b>Float</b>
    
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Desaturates input below 1.0 and adds saturation above 1.0</p>
      
    
  </p>
</details>

