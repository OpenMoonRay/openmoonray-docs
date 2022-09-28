---
title: RemapDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RemapDisplayFilter
****

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Advanced attributes</summary>
  <p>
    
    <h3>invert_mask</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>invert value of mask</p>
    
    
    <h3>mix</h3>
    <b>Float</b>
    
    
    default: 1.0
    
    <p>blend between output and input</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Channel attributes</summary>
  <p>
    
    <h3>clamp_max_RGB</h3>
    <b>Rgb</b>
    
    
    default: [ 1, 1, 1 ]
    
    <p>the maximum value output by this map when 'clamp' is enabled</p>
    
    
    <h3>clamp_min_RGB</h3>
    <b>Rgb</b>
    
    
    default: [ 0, 0, 0 ]
    
    <p>the minimum value output by this map when 'clamp' is enabled</p>
    
    
    <h3>input_max_RGB</h3>
    <b>Rgb</b>
    
    
    default: [ 1, 1, 1 ]
    
    <p>the input value that will be remapped to the 'output max' value</p>
    
    
    <h3>input_min_RGB</h3>
    <b>Rgb</b>
    
    
    default: [ 0, 0, 0 ]
    
    <p>the input value that will be remapped to the 'output min' value</p>
    
    
    <h3>midpoint_bias_RGB</h3>
    <b>Rgb</b>
    
    
    default: [ 0.5, 0.5, 0.5 ]
    
    <p>biases the in-between values toward 'output min' or 'output max'. Default = 0.5</p>
    
    
    <h3>output_max_RGB</h3>
    <b>Rgb</b>
    
    
    default: [ 1, 1, 1 ]
    
    <p>the value that 'input max' is remapped to</p>
    
    
    <h3>output_min_RGB</h3>
    <b>Rgb</b>
    
    
    default: [ 0, 0, 0 ]
    
    <p>the value that 'input min' is remapped to</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>clamp</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>enables/disables clamping of the output values.  This useful prevent out-of-range values when expanding the input values.</p>
    
    
    <h3>clamp_RGB</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>enables/disables clamping of the output values.  This useful prevent out-of-range values when expanding the input values.</p>
    
    
    <h3>clamp_max</h3>
    <b>Float</b>
    
    
    default: 1.0
    
    <p>the maximum value output by this map when 'clamp' is enabled</p>
    
    
    <h3>clamp_min</h3>
    <b>Float</b>
    
    
    default: 0.0
    
    <p>the minimum value output by this map when 'clamp' is enabled</p>
    
    
    <h3>input</h3>
    <b>67141632</b>
    
    
    default: None
    
    <p>Input buffer</p>
    
    
    <h3>input_max</h3>
    <b>Float</b>
    
    
    default: 1.0
    
    <p>the input value that will be remapped to the 'output max' value</p>
    
    
    <h3>input_min</h3>
    <b>Float</b>
    
    
    default: 0.0
    
    <p>the input value that will be remapped to the 'output min' value</p>
    
    
    <h3>mask</h3>
    <b>67141632</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>midpoint_bias</h3>
    <b>Float</b>
    
    
    default: 0.5
    
    <p>biases the in-between values toward 'output min' or 'output max'. Default = 0.5</p>
    
    
    <h3>output_max</h3>
    <b>Float</b>
    
    
    default: 1.0
    
    <p>the value that 'input max' is remapped to</p>
    
    
    <h3>output_min</h3>
    <b>Float</b>
    
    
    default: 0.0
    
    <p>the value that 'input min' is remapped to</p>
    
    
    <h3>remap_method</h3>
    <b>Int</b>
    <i>enum</i>
    
    - uniform = 0 (default)
    
    - RGB = 1
    
    
    <p>Choose whether you are remapping using single values (uniform) or with separate RGB channels</p>
    
    
  </p>
</details>

