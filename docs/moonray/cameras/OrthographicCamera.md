---
title: OrthographicCamera

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# OrthographicCamera
**NODE CAMERA**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Depth of Field attributes</summary>
  <p>
  
  <h3>bokeh</h3>
  <b>Bool</b>  
  
  default: False
  
  Enable Bokeh. Requires DOF to be enabled.
  
  
  <h3>bokeh_angle</h3>
  <b>Float</b>  
  
  default: 0.0
  
  Angle of iris rotation
  
  
  <h3>bokeh_image</h3>
  <b>String</b>  
  
  default: 
  
  Path to image file to be used for the iris
  
  
  <h3>bokeh_sides</h3>
  <b>Int</b>  
  
  default: 0
  
  Number of sides of the iris. Specifying less than 3 sides will default to a disk.
  
  
  <h3>bokeh_weight_location</h3>
  <b>Float</b>  
  
  default: 0.0
  
  Distance from the origin of Bokeh shape
  
  
  <h3>bokeh_weight_strength</h3>
  <b>Float</b>  
  
  default: 0.0
  
  Controls the strength of weights as samples approach the weight location
  
  
  <h3>dof</h3>
  <b>Bool</b>  
  
  default: False
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>dof_aperture</h3>
  <b>Float</b>  
  
  default: 8.0
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>dof_focus_distance</h3>
  <b>Float</b>  
  
  default: 0.0
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Frustum attributes</summary>
  <p>
  
  <h3>far</h3>
  <b>Float</b>  
  
  default: 10000.0
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>film_width_aperture</h3>
  <b>Float</b>  
  
  default: 24.0
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>horizontal_film_offset</h3>
  <b>Float</b>  
  
  default: 0.0
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>near</h3>
  <b>Float</b>  
  
  default: 1.0
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>pixel_aspect_ratio</h3>
  <b>Float</b>  
  
  default: 1.0
  
  ratio of pixel size y / x
  
  
  <h3>vertical_film_offset</h3>
  <b>Float</b>  
  
  default: 0.0
  
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
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
  
  <h3>node_xform</h3>
  <b>Mat4d</b>  *blurrable*
  
  default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  </p>
</details>

