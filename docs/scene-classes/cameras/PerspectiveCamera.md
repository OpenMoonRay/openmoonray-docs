---
title: PerspectiveCamera

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# PerspectiveCamera
**NODE CAMERA**

---

<details open>
  <summary class="scene-class-attr-group">Depth of Field attributes</summary>
  <p>
    
    <h3>bokeh</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="scene-class-attr-comment">Enable Bokeh. Requires DOF to be enabled.</p>
      
    </p>
    
    <h3>bokeh_angle</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-comment">Angle of iris rotation</p>
      
    </p>
    
    <h3>bokeh_image</h3>
    <p>
      <b>String</b>
      
      
        default: 
      
        <p class="scene-class-attr-comment">Path to image file to be used for the iris</p>
      
    </p>
    
    <h3>bokeh_sides</h3>
    <p>
      <b>Int</b>
      
      
        default: 0
      
        <p class="scene-class-attr-comment">Number of sides of the iris. Specifying less than 3 sides will default to a disk.</p>
      
    </p>
    
    <h3>bokeh_weight_location</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-comment">Distance from the origin of Bokeh shape</p>
      
    </p>
    
    <h3>bokeh_weight_strength</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-comment">Controls the strength of weights as samples approach the weight location</p>
      
    </p>
    
    <h3>dof</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>dof_aperture</h3>
    <p>
      <b>Float</b>
      
      
        default: 8.0
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>dof_focus_distance</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">Frustum attributes</summary>
  <p>
    
    <h3>far</h3>
    <p>
      <b>Float</b>
      
      
        default: 10000.0
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>film_width_aperture</h3>
    <p>
      <b>Float</b>
      
      
        default: 24.0
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>focal</h3>
    <p>
      <b>Float</b>
      <i>blurrable</i>
      
        default: 30.0
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>horizontal_film_offset</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>near</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.0
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>pixel_aspect_ratio</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.0
      
        <p class="scene-class-attr-comment">ratio of pixel size y / x</p>
      
    </p>
    
    <h3>vertical_film_offset</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">Motion Blur attributes</summary>
  <p>
    
    <h3>mb_shutter_bias</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>mb_shutter_close</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.25
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>mb_shutter_open</h3>
    <p>
      <b>Float</b>
      
      
        default: -0.25
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">Render Masks attributes</summary>
  <p>
    
    <h3>pixel_sample_map</h3>
    <p>
      <b>String</b>
      
      
        default: 
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">Stereo attributes</summary>
  <p>
    
    <h3>stereo_convergence_distance</h3>
    <p>
      <b>Float</b>
      
      
        default: 100.0
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>stereo_interocular_distance</h3>
    <p>
      <b>Float</b>
      
      
        default: 6.30000019073
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>stereo_view</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | center view = 0 (default)
        
          | left view = 1
        
          | right view = 2
        
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>node_xform</h3>
    <p>
      <b>Mat4d</b>
      <i>blurrable</i>
      
        default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
  </p>
</details>

