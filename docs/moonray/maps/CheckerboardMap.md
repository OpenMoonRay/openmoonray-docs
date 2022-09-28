---
title: CheckerboardMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# CheckerboardMap
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>color_A</h3>
    <b>Rgb</b>
    
      
        default: [ 0, 0, 0 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>color_B</h3>
    <b>Rgb</b>
    
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    
    <h3>input_texture_coordinates</h3>
    <b>Vec3f</b>
    <i>bindable</i>
      
        default: [ 0, 0, 0 ]
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">bind a shader that outputs UV coordinates (such as a projection shader) here</p>
      
    
    <h3>num_u_tiles</h3>
    <b>Int</b>
    
      
        default: 8
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">number of checkerboard squares in the U direction</p>
      
    
    <h3>num_v_tiles</h3>
    <b>Int</b>
    
      
        default: 8
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">number of checkerboard squares in the V direction</p>
      
    
    <h3>texture_coordinates</h3>
    <b>Int</b>
    <i>enum</i>
      
          | texture = 0 (default)
        
          | input texture coordinates = 1
        
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">switches between the model's uv coordinates or the input texture coordinates</p>
      
    
  </p>
</details>

