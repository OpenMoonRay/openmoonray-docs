---
title: RampMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RampMap
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Additional properties attributes</summary>
  <p>
    
    <h3>input_texture_coordinates</h3>
    <b>Vec3f</b>
    <i>bindable</i>
    
    default: [ 0, 0, 0 ]
    
    <p>Bind custom UV coordinates</p>
    
    
    <h3>uv_repeat</h3>
    <b>Vec2f</b>
    
    
    default: [ 1, 1 ]
    
    <p>Number of times to repeat the ramp pattern</p>
    
    
    <h3>uv_wave</h3>
    <b>Vec2f</b>
    
    
    default: [ 0, 0 ]
    
    <p>Creates waves which perturb the ramp pattern</p>
    
    
    <h3>wrap_type</h3>
    <b>Int</b>
    <i>enum</i>
    
    |  wrap = 0 (default) 
    
    |  clamp = 1 
    
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Ramp Knot attributes</summary>
  <p>
    
    <h3>colors</h3>
    <b>RgbVector</b>
    
    
    default: [[ 0, 0, 0 ], [ 0.25, 0.25, 0.25 ], [ 0.75, 0.75, 0.75 ], [ 1, 1, 1 ]]
    
    <p>List of colors on the ramp</p>
    
    
    <h3>interpolations</h3>
    <b>IntVector</b>
    
    
    default: <scene_rdl2.__scene_rdl2__.IntVector object at >
    
    <p>None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |

			Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6</p>
    
    
    <h3>positions</h3>
    <b>FloatVector</b>
    
    
    default: <scene_rdl2.__scene_rdl2__.FloatVector object at >
    
    <p>Color ramp</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Ramp properties attributes</summary>
  <p>
    
    <h3>camera</h3>
    <b>Camera</b>
    
    
    default: None
    
    <p>Camera used to define camera and screen space</p>
    
    
    <h3>color_space</h3>
    <b>Int</b>
    <i>enum</i>
    
    |  rgb = 0 (default) 
    
    |  hsv = 1 
    
    |  hsl = 2 
    
    
    <p>Color space to perform interpolation in</p>
    
    
    <h3>input</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 1.0
    
    <p>Input signal for ramp, used when ramp type is set to input</p>
    
    
    <h3>object</h3>
    <b>Geometry</b>
    
    
    default: None
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>ramp_type</h3>
    <b>Int</b>
    <i>enum</i>
    
    |  v = 0 (default) 
    
    |  u = 1 
    
    |  diagonal = 2 
    
    |  radial = 3 
    
    |  circular = 4 
    
    |  box = 5 
    
    |  uxv = 6 
    
    |  four corner = 7 
    
    |  input = 8 
    
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>space</h3>
    <b>Int</b>
    <i>enum</i>
    
    |  render = 0 (default) 
    
    |  camera = 1 
    
    |  world = 2 
    
    |  screen = 3 
    
    |  object = 4 
    
    |  reference = 5 
    
    |  texture = 6 
    
    
    <p>Only applies when 'texture coordinates' is set to 'default state coordinates'</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>texture_coordinates</h3>
    <b>Int</b>
    <i>enum</i>
    
    |  default state coordinates = 0 (default) 
    
    |  input texture coordinates = 1 
    
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
  </p>
</details>

