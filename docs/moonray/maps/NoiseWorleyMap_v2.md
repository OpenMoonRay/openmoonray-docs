---
title: NoiseWorleyMap_v2

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# NoiseWorleyMap_v2
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Adjustment attributes</summary>
  <p>
  
  <h3>bias</h3>
  <b>Float</b>  *bindable*
  
  default: 0.5
  
  Bias of interpolation from color A to color B
  
  
  <h3>gain</h3>
  <b>Float</b>  *bindable*
  
  default: 0.5
  
  Gain of interpolation from color A to color B
  
  
  <h3>invert</h3>
  <b>Bool</b>  
  
  default: False
  
  Invert the final pattern
  
  
  <h3>point_size</h3>
  <b>Float</b>  
  
  default: 1.0
  
  For points output mode, relative radius of points
  
  
  <h3>remap</h3>
  <b>Vec2f</b>  *bindable*
  
  default: [ 0, 1 ]
  
  Allows mapping the distances from the specified min/max range into the 0..1 range
  
  
  <h3>smoothstep</h3>
  <b>Vec2f</b>  *bindable*
  
  default: [ 0, 1 ]
  
  min/max values between which the smoothstep will interpolate
  
  
  <h3>use_smoothstep</h3>
  <b>Bool</b>  
  
  default: False
  
  Put the noise value through a smoothstep function defined by min/max
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Advanced attributes</summary>
  <p>
  
  <h3>F1</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  Influence of F1 (the closest feature point)
  
  
  <h3>F2</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  Influence of F2 (the second closest feature point)
  
  
  <h3>F3</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  Influence of F3 (the third closest feature point)
  
  
  <h3>F4</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  Influence of F4 (the fourth closest feature point)
  
  
  <h3>cell_id</h3>
  <b>Int</b>  *enum*
  
  - f1 = 0 (default)
  
  - f2 = 1
  
  - f3 = 2
  
  - f4 = 3
  
  
  Which of the distances determines the cell id
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Output attributes</summary>
  <p>
  
  <h3>distance_method</h3>
  <b>Int</b>  *enum*
  
  - linear = 0 (default)
  
  - linear squared = 1
  
  - manhattan = 2
  
  - chebyshev = 3
  
  - quadratic = 4
  
  - minkowski = 5
  
  
  Metric for calculating distance to feature points which controls the shape of the falloff when output mode is distance
  
  
  <h3>minkowski_number</h3>
  <b>Float</b>  *bindable*
  
  default: 3.0
  
  Exponent on distances when distance method is set to Minkowski
  
  
  <h3>output_mode</h3>
  <b>Int</b>  *enum*
  
  - distance = 0 (default)
  
  - gradient = 1
  
  - cell id = 2
  
  - cell edges = 3
  
  - points = 4
  
  
  Method by which the shader outputs a color.  Distance uses F1..F4 interpolated between color A and color B, gradient outputs the gradient of the noise, and cell ID outputs a random color for each cell
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Space attributes</summary>
  <p>
  
  <h3>camera</h3>
  <b>Camera</b>  
  
  default: None
  
  camera used to define camera and screen space
  
  
  <h3>input_texture_coordinates</h3>
  <b>Vec3f</b>  *bindable*
  
  default: [ 0, 0, 0 ]
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>object_space</h3>
  <b>Geometry</b>  
  
  default: None
  
  Directly connect object to use that object's space.
  
  
  <h3>space</h3>
  <b>Int</b>  *enum*
  
  - render = 0
  
  - camera = 1
  
  - world = 2 (default)
  
  - screen = 3
  
  - object = 4
  
  - reference = 5
  
  - texture = 6
  
  - input texture coordinates = 7
  
  - hair_surface_uv = 8
  
  - hair_closest_surface_uv = 9
  
  
  The space to calculate the noise in
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Transform attributes</summary>
  <p>
  
  <h3>rotation</h3>
  <b>Vec3f</b>  *bindable*
  
  default: [ 0, 0, 0 ]
  
  Rotates the noise in space based on the specified rotation order
  
  
  <h3>rotation_order</h3>
  <b>Int</b>  *enum*
  
  - xyz = 0 (default)
  
  - xzy = 1
  
  - yxz = 2
  
  - yzx = 3
  
  - zxy = 4
  
  - zyx = 5
  
  
  Order in which to apply the euler rotations
  
  
  <h3>scale</h3>
  <b>Vec3f</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  Vector to scale the noise non-proportionally
  
  
  <h3>transformation_order</h3>
  <b>Int</b>  *enum*
  
  - srt = 0
  
  - str = 1
  
  - rst = 2
  
  - rts = 3
  
  - tsr = 4 (default)
  
  - trs = 5
  
  
  Order in which to apply the translation, rotation, and frequency
  
  
  <h3>translation</h3>
  <b>Vec3f</b>  *bindable*
  
  default: [ 0, 0, 0 ]
  
  Translation of the noise in space
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
  
  <h3>color_A</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 0, 0, 0 ]
  
  The interpolated color value at distance equals zero
  
  
  <h3>color_B</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  The interpolated color value at distance equals one
  
  
  <h3>frequency</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  Scalar multiplier for the frequency vector
  
  
  <h3>jitter</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  Controls the distortion of the cells
  
  
  <h3>max_level</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  Number of octaves of noise to add together for the final result
  
  
  <h3>seed</h3>
  <b>Int</b>  
  
  default: 0
  
  The seed for the random number generator
  
  
  </p>
</details>

