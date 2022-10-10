---
title: RemapMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RemapMap
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Channel attributes</summary>
  <p>
    
    <h3>clamp_max_RGB</h3>
    <p>
      <b>Rgb</b>
      
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the maximum value output by this map when 'clamp' is enabled</p>
      
    </p>
    
    <h3>clamp_min_RGB</h3>
    <p>
      <b>Rgb</b>
      
      
        default: [ 0, 0, 0 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the minimum value output by this map when 'clamp' is enabled</p>
      
    </p>
    
    <h3>input_max_RGB</h3>
    <p>
      <b>Rgb</b>
      
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the input value that will be remapped to the 'output max' value</p>
      
    </p>
    
    <h3>input_min_RGB</h3>
    <p>
      <b>Rgb</b>
      
      
        default: [ 0, 0, 0 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the input value that will be remapped to the 'output min' value</p>
      
    </p>
    
    <h3>midpoint_bias_RGB</h3>
    <p>
      <b>Rgb</b>
      
      
        default: [ 0.5, 0.5, 0.5 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">biases the in-between values toward 'output min' or 'output max'. Default = 0.5</p>
      
    </p>
    
    <h3>output_max_RGB</h3>
    <p>
      <b>Rgb</b>
      
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the value that 'input max' is remapped to</p>
      
    </p>
    
    <h3>output_min_RGB</h3>
    <p>
      <b>Rgb</b>
      
      
        default: [ 0, 0, 0 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the value that 'input min' is remapped to</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>clamp</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">enables/disables clamping of the output values.  This useful prevent out-of-range values when expanding the input values.</p>
      
    </p>
    
    <h3>clamp_RGB</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">enables/disables clamping of the output values.  This useful prevent out-of-range values when expanding the input values.</p>
      
    </p>
    
    <h3>clamp_max</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the maximum value output by this map when 'clamp' is enabled</p>
      
    </p>
    
    <h3>clamp_min</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the minimum value output by this map when 'clamp' is enabled</p>
      
    </p>
    
    <h3>input</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the input values to be remapped</p>
      
    </p>
    
    <h3>input_max</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the input value that will be remapped to the 'output max' value</p>
      
    </p>
    
    <h3>input_min</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the input value that will be remapped to the 'output min' value</p>
      
    </p>
    
    <h3>midpoint_bias</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.5
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">biases the in-between values toward 'output min' or 'output max'. Default = 0.5</p>
      
    </p>
    
    <h3>output_max</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the value that 'input max' is remapped to</p>
      
    </p>
    
    <h3>output_min</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the value that 'input min' is remapped to</p>
      
    </p>
    
    <h3>remap_method</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | uniform = 0 (default)
        
          | RGB = 1
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Choose whether you are remapping using single values (uniform) or with separate RGB channels</p>
      
    </p>
    
  </p>
</details>

