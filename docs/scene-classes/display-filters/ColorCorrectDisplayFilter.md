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
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">invert value of mask</p>
      
    </p>
    
    <h3>mix</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">blend between output and input</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>contrast</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Decrease contrast below 0.0 and increase contrast above 0.0</p>
      
    </p>
    
    <h3>exposure</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Adjusts the exposure, in fstops</p>
      
    </p>
    
    <h3>gamma</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Adjusts gamma of input</p>
      
    </p>
    
    <h3>input</h3>
    <p>
      <b>67141632</b>
      
      
        default: None
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">RenderOutput to color correct</p>
      
    </p>
    
    <h3>mask</h3>
    <p>
      <b>67141632</b>
      
      
        default: None
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>multiply</h3>
    <p>
      <b>Rgb</b>
      
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Multiplies input using specified color</p>
      
    </p>
    
    <h3>offset</h3>
    <p>
      <b>Rgb</b>
      
      
        default: [ 0, 0, 0 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Add offset color to input</p>
      
    </p>
    
    <h3>saturation</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Desaturates input below 1.0 and adds saturation above 1.0</p>
      
    </p>
    
  </p>
</details>

