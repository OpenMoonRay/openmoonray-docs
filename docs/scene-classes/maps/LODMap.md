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
  <summary class="scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>far_value</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="scene-class-attr-comment">value output when feature_width/camera_distance is more than or equal to stop</p>
      
    </p>
    
    <h3>mode</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | feature width = 0 (default)
        
          | camera distance = 1
        
      
        <p class="scene-class-attr-comment">Use feature_width for LOD based on average, world-space feature-width visible in a pixel, correctly changing with resolution. Use camera_distance for LOD based on distance from render cam.</p>
      
    </p>
    
    <h3>near_value</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
      
        default: [ 0, 0, 0 ]
      
        <p class="scene-class-attr-comment">value output when feature_width/camera_distance is less than or equal to start</p>
      
    </p>
    
    <h3>start</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.00999999977648
      
        <p class="scene-class-attr-comment">feature_width/camera_distance at which to start blending near_value-&gt;far_value</p>
      
    </p>
    
    <h3>stop</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.10000000149
      
        <p class="scene-class-attr-comment">feature_width/camera_distance at which to stop blending near_value-&gt;far_value</p>
      
    </p>
    
  </p>
</details>

