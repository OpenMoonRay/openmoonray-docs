---
title: LODMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# LODMap
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>far_value</h3>
    <b>Rgb</b>
    <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p>value output when feature_width/camera_distance is more than or equal to stop</p>
      
    
    <h3>mode</h3>
    <b>Int</b>
    <i>enum</i>
      
          | feature width = 0 (default)
        
          | camera distance = 1
        
      
        <p>Use feature_width for LOD based on average, world-space feature-width visible in a pixel, correctly changing with resolution. Use camera_distance for LOD based on distance from render cam.</p>
      
    
    <h3>near_value</h3>
    <b>Rgb</b>
    <i>bindable</i>
      
        default: [ 0, 0, 0 ]
      
        <p>value output when feature_width/camera_distance is less than or equal to start</p>
      
    
    <h3>start</h3>
    <b>Float</b>
    
      
        default: 0.00999999977648
      
        <p>feature_width/camera_distance at which to start blending near_value->far_value</p>
      
    
    <h3>stop</h3>
    <b>Float</b>
    
      
        default: 0.10000000149
      
        <p>feature_width/camera_distance at which to stop blending near_value->far_value</p>
      
    
  </p>
</details>

