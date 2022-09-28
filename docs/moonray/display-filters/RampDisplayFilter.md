---
title: RampDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RampDisplayFilter
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
  <summary class="jekyll-theme-minimal scene-class-attr-group">Ramp Knot attributes</summary>
  <p>
    
    <h3>colors</h3>
    <p>
      <b>RgbVector</b>
      
        
          default: [[ 0, 0, 0 ], [ 0.25, 0.25, 0.25 ], [ 0.75, 0.75, 0.75 ], [ 1, 1, 1 ]]
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">List of colors on the ramp</p>
        
      </p>
    
    <h3>interpolations</h3>
    <p>
      <b>IntVector</b>
      
        
          default: <scene_rdl2.__scene_rdl2__.IntVector object at >
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">None: 0, Linear: 1, Exponential Up: 2, Exponential Down: 3, Smooth: 4, Catmull-Rom: 5</p>
        
      </p>
    
    <h3>positions</h3>
    <p>
      <b>FloatVector</b>
      
        
          default: <scene_rdl2.__scene_rdl2__.FloatVector object at >
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Color ramp</p>
        
      </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Ramp properties attributes</summary>
  <p>
    
    <h3>input</h3>
    <p>
      <b>67141632</b>
      
        
          default: None
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">input to the input ramp</p>
        
      </p>
    
    <h3>ramp_type</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
        
            | v_ramp = 0 (default)
          
            | u_ramp = 1
          
            | diagonal_ramp = 2
          
            | radial_ramp = 3
          
            | circular_ramp = 4
          
            | box_ramp = 5
          
            | uxv_ramp = 6
          
            | four_corner_ramp = 7
          
            | input_ramp = 8
          
        
          <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
        
      </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>mask</h3>
    <p>
      <b>67141632</b>
      
        
          default: None
        
          <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
        
      </p>
    
  </p>
</details>

