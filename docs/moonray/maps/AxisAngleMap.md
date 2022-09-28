---
title: AxisAngleMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# AxisAngleMap
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>angle</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 0.0
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">the angle of rotation in degrees</p>
      
    
    <h3>axis_space</h3>
    <b>Int</b>
    <i>enum</i>
      
          | world = 2 (default)
        
          | object = 4
        
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">the space of the axis to rotate about</p>
      
    
    <h3>input_space</h3>
    <b>Int</b>
    <i>enum</i>
      
          | render = 0 (default)
        
          | camera = 1
        
          | world = 2
        
          | screen = 3
        
          | object = 4
        
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">the space to transform from</p>
      
    
    <h3>input_vector</h3>
    <b>Vec3f</b>
    <i>bindable</i>
      
        default: [ 0, 0, 1 ]
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">input vector to be rotated</p>
      
    
    <h3>output_space</h3>
    <b>Int</b>
    <i>enum</i>
      
          | render = 0 (default)
        
          | camera = 1
        
          | world = 2
        
          | screen = 3
        
          | object = 4
        
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">the space to transform the resulting vector to</p>
      
    
    <h3>rotation_axis</h3>
    <b>Vec3f</b>
    <i>bindable</i>
      
        default: [ 0, 1, 0 ]
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">axis to be rotated around</p>
      
    
  </p>
</details>

