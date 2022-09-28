---
title: DomeMaster3DCamera

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DomeMaster3DCamera
**NODE CAMERA**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Frustum attributes</summary>
  <p>
    
    <h3>far</h3>
    <b>Float</b>
    
    
    default: 10000.0
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>near</h3>
    <b>Float</b>
    
    
    default: 1.0
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Motion Blur attributes</summary>
  <p>
    
    <h3>mb_shutter_bias</h3>
    <b>Float</b>
    
    
    default: 0.0
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>mb_shutter_close</h3>
    <b>Float</b>
    
    
    default: 0.25
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>mb_shutter_open</h3>
    <b>Float</b>
    
    
    default: -0.25
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Render Masks attributes</summary>
  <p>
    
    <h3>pixel_sample_map</h3>
    <b>String</b>
    
    
    default: 
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Stereo attributes</summary>
  <p>
    
    <h3>head_tilt_map</h3>
    <b>Float</b>
    
    
    default: 1.0
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>interocular_distance_map_file_name</h3>
    <b>String</b>
    <i>filename</i>
    
    default: 
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>stereo_convergence_distance</h3>
    <b>Float</b>
    
    
    default: 360.0
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>stereo_interocular_distance</h3>
    <b>Float</b>
    
    
    default: 6.5
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>stereo_view</h3>
    <b>Int</b>
    <i>enum</i>
    
    - center view = 0 (default)
    
    - left view = 1
    
    - right view = 2
    
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>zenith_mode</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>FOV_horizontal_angle</h3>
    <b>Float</b>
    
    
    default: 60.0
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>FOV_vertical_angle</h3>
    <b>Float</b>
    
    
    default: 30.0
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>flip_ray_x</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>flip_ray_y</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>node_xform</h3>
    <b>Mat4d</b>
    <i>blurrable</i>
    
    default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
  </p>
</details>

