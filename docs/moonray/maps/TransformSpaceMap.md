---
title: TransformSpaceMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# TransformSpaceMap
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>camera</h3>
    <p>
      <b>Camera</b>
      
        
          default: None
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">an alternate camera to use when transforming to/from 'camera' space</p>
        
      </p>
    
    <h3>concatenate_instance_level_transforms</h3>
    <p>
      <b>Bool</b>
      
        
          default: True
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">When true, instance level transforms below the specified one are concatenated otherwise only the selected level's transform is used</p>
        
      </p>
    
    <h3>from_space</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
        
            | render = 0 (default)
          
            | camera = 1
          
            | world = 2
          
            | screen = 3
          
            | object = 4
          
            | local tangent = 5
          
            | instance object transform = 6
          
            | instance level 0 = 7
          
            | instance level 1 = 8
          
            | instance level 2 = 9
          
            | instance level 3 = 10
          
            | instance level 4 = 11
          
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">the space to transform from</p>
        
      </p>
    
    <h3>input</h3>
    <p>
      <b>Vec3f</b>
      <i>bindable</i>
        
          default: [ 1, 1, 1 ]
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">the input value to transform</p>
        
      </p>
    
    <h3>input_type</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
        
            | point = 0
          
            | vector = 1 (default)
          
            | normal = 2
          
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">the type of input value provided</p>
        
      </p>
    
    <h3>object</h3>
    <p>
      <b>Geometry</b>
      
        
          default: None
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">an alternate object to use when transforming to/from 'object' space</p>
        
      </p>
    
    <h3>to_space</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
        
            | render = 0
          
            | camera = 1
          
            | world = 2 (default)
          
            | screen = 3
          
            | object = 4
          
            | local reference tangent = 5
          
            | instance level 0 = 6
          
            | instance level 1 = 7
          
            | instance level 2 = 8
          
            | instance level 3 = 9
          
            | instance level 4 = 10
          
            | instance object transform = 11
          
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">the space to transform to</p>
        
      </p>
    
    <h3>use_custom_window_coordinates</h3>
    <p>
      <b>Bool</b>
      
        
          default: False
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">used to apply non-uniform scaling to projection</p>
        
      </p>
    
    <h3>window_x_max</h3>
    <p>
      <b>Float</b>
      
        
          default: 1.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">maximum projected x coordinate</p>
        
      </p>
    
    <h3>window_x_min</h3>
    <p>
      <b>Float</b>
      
        
          default: -1.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">minimum projected x coordinate</p>
        
      </p>
    
    <h3>window_y_max</h3>
    <p>
      <b>Float</b>
      
        
          default: 1.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">maximum projected y coordinate</p>
        
      </p>
    
    <h3>window_y_min</h3>
    <p>
      <b>Float</b>
      
        
          default: -1.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">minimum projected y coordinate</p>
        
      </p>
    
  </p>
</details>

