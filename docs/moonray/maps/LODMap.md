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
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  value output when feature_width/camera_distance is more than or equal to stop
  
  
  <h3>mode</h3>
  <b>Int</b>  *enum*
  
  - feature width = 0 (default)
  
  - camera distance = 1
  
  
  Use feature_width for LOD based on average, world-space feature-width visible in a pixel, correctly changing with resolution. Use camera_distance for LOD based on distance from render cam.
  
  
  <h3>near_value</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 0, 0, 0 ]
  
  value output when feature_width/camera_distance is less than or equal to start
  
  
  <h3>start</h3>
  <b>Float</b>  
  
  default: 0.00999999977648
  
  feature_width/camera_distance at which to start blending near_value->far_value
  
  
  <h3>stop</h3>
  <b>Float</b>  
  
  default: 0.10000000149
  
  feature_width/camera_distance at which to stop blending near_value->far_value
  
  
  </p>
</details>

