---
title: NoiseMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# NoiseMap
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">4D attributes</summary>
  <p>
  
  <h3>time</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  <p>If use 4D noise is on, this is the value for the 4th dimension<\p>
  
  
  <h3>use_4D_noise</h3>
  <b>Bool</b>  
  
  default: False
  
  <p>If on, 4-dimensional noise is used instead of 3-dimensional<\p>
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Adjustment attributes</summary>
  <p>
  
  <h3>bias</h3>
  <b>Float</b>  *bindable*
  
  default: 0.5
  
  <p>Bias the noise towards 0 or 1<\p>
  
  
  <h3>gain</h3>
  <b>Float</b>  *bindable*
  
  default: 0.5
  
  <p>Apply gain to the noise<\p>
  
  
  <h3>invert</h3>
  <b>Bool</b>  
  
  default: False
  
  <p>Invert the final pattern<\p>
  
  
  <h3>smoothstep</h3>
  <b>Vec2f</b>  *bindable*
  
  default: [ 0, 1 ]
  
  <p>min/max values between which the smoothstep will interpolate<\p>
  
  
  <h3>use_smoothstep</h3>
  <b>Bool</b>  
  
  default: False
  
  <p>Put the noise value through a smoothstep function defined by min/max<\p>
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Flow Noise attributes</summary>
  <p>
  
  <h3>flow_advection_rate</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  <p>Rate of advection for flow noise<\p>
  
  
  <h3>flow_angle</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  <p>Angle of rotation for flow noise<\p>
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Space attributes</summary>
  <p>
  
  <h3>camera</h3>
  <b>Camera</b>  
  
  default: None
  
  <p>camera used to define camera and screen space<\p>
  
  
  <h3>input_texture_coordinates</h3>
  <b>Vec3f</b>  *bindable*
  
  default: [ 0, 0, 0 ]
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>object_space</h3>
  <b>Geometry</b>  
  
  default: None
  
  <p>Directly connect object to use that object's space.<\p>
  
  
  <h3>space</h3>
  <b>Int</b>  *enum*
  
  - render = 0 (default)
  
  - camera = 1
  
  - world = 2
  
  - screen = 3
  
  - object = 4
  
  - reference = 5
  
  - texture = 6
  
  - input texture coordinates = 7
  
  - hair_surface_uv = 8
  
  - hair_closest_surface_uv = 9
  
  
  <p>The space to calculate the noise in<\p>
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Transform attributes</summary>
  <p>
  
  <h3>rotation</h3>
  <b>Vec3f</b>  *bindable*
  
  default: [ 0, 0, 0 ]
  
  <p>Rotates the noise in space based on the specified rotation order<\p>
  
  
  <h3>rotation_order</h3>
  <b>Int</b>  *enum*
  
  - xyz = 0 (default)
  
  - xzy = 1
  
  - yxz = 2
  
  - yzx = 3
  
  - zxy = 4
  
  - zyx = 5
  
  
  <p>Order in which to apply the euler rotations<\p>
  
  
  <h3>scale</h3>
  <b>Vec3f</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  <p>Vector to scale the noise non-proportionally<\p>
  
  
  <h3>transformation_order</h3>
  <b>Int</b>  *enum*
  
  - srt = 0
  
  - str = 1
  
  - rst = 2
  
  - rts = 3
  
  - tsr = 4 (default)
  
  - trs = 5
  
  
  <p>Order in which to apply the translation, rotation, and frequency<\p>
  
  
  <h3>translation</h3>
  <b>Vec3f</b>  *bindable*
  
  default: [ 0, 0, 0 ]
  
  <p>Translation of the noise in space<\p>
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
  
  <h3>amplitude</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>Intensity of the noise<\p>
  
  
  <h3>color</h3>
  <b>Bool</b>  
  
  default: False
  
  <p>Outputs RGB noise<\p>
  
  
  <h3>color_A</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 0, 0, 0 ]
  
  <p>The color value at 0 noise<\p>
  
  
  <h3>color_B</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  <p>The color value at 1 noise<\p>
  
  
  <h3>distortion</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  <p>Warp input coordinate space with single noise level before looking up noise<\p>
  
  
  <h3>distortion_noise_type</h3>
  <b>Int</b>  *enum*
  
  - perlin classic = 0 (default)
  
  - perlin simplex = 1
  
  
  <p>Type of noise to use for distortion.<\p>
  
  
  <h3>frequency_multiplier</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>Scalar multiplier for the frequency vector<\p>
  
  
  <h3>lacunarity</h3>
  <b>Float</b>  *bindable*
  
  default: 2.0
  
  <p>Multiplier on the noise frequency per level<\p>
  
  
  <h3>max_level</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>Number of octaves of noise to add together for the final result<\p>
  
  
  <h3>noise_type</h3>
  <b>Int</b>  *enum*
  
  - perlin classic = 0 (default)
  
  - perlin simplex = 1
  
  
  <p>Type of noise to use. Simplex grid activates Flow Noise Angle and Advection<\p>
  
  
  <h3>persistence</h3>
  <b>Float</b>  *bindable*
  
  default: 0.5
  
  <p>Multiplier on the noise amplitude per level<\p>
  
  
  <h3>seed</h3>
  <b>Int</b>  
  
  default: 0
  
  <p>The seed for the random number generator<\p>
  
  
  </p>
</details>

