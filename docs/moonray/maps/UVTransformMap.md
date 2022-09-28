---
title: UVTransformMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# UVTransformMap
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>offset</h3>
    <p>
      <b>Vec2f</b>
      
      
        default: [ 0, 0 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>rotation_angle</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Rotation in degrees</p>
      
    </p>
    
    <h3>rotation_axis</h3>
    <p>
      <b>Vec3f</b>
      
      
        default: [ 0, 0, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Axis in which to rotate (only for 3D spaces)</p>
      
    </p>
    
    <h3>rotation_center</h3>
    <p>
      <b>Vec2f</b>
      
      
        default: [ 0.5, 0.5 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">UV coordinate around which to rotate</p>
      
    </p>
    
    <h3>scale</h3>
    <p>
      <b>Vec2f</b>
      
      
        default: [ 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>space</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | render = 0
        
          | camera = 1
        
          | world = 2
        
          | screen = 3
        
          | object = 4
        
          | reference = 5
        
          | texture = 6 (default)
        
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    </p>
    
  </p>
</details>

