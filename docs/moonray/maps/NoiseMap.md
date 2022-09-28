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
    <p>
      <b>Float</b>
      <i>bindable</i>
        
          default: 0.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">If use 4D noise is on, this is the value for the 4th dimension</p>
        
      </p>
    
    <h3>use_4D_noise</h3>
    <p>
      <b>Bool</b>
      
        
          default: False
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">If on, 4-dimensional noise is used instead of 3-dimensional</p>
        
      </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Adjustment attributes</summary>
  <p>
    
    <h3>bias</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
        
          default: 0.5
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Bias the noise towards 0 or 1</p>
        
      </p>
    
    <h3>gain</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
        
          default: 0.5
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Apply gain to the noise</p>
        
      </p>
    
    <h3>invert</h3>
    <p>
      <b>Bool</b>
      
        
          default: False
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Invert the final pattern</p>
        
      </p>
    
    <h3>smoothstep</h3>
    <p>
      <b>Vec2f</b>
      <i>bindable</i>
        
          default: [ 0, 1 ]
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">min/max values between which the smoothstep will interpolate</p>
        
      </p>
    
    <h3>use_smoothstep</h3>
    <p>
      <b>Bool</b>
      
        
          default: False
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Put the noise value through a smoothstep function defined by min/max</p>
        
      </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Flow Noise attributes</summary>
  <p>
    
    <h3>flow_advection_rate</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
        
          default: 0.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Rate of advection for flow noise</p>
        
      </p>
    
    <h3>flow_angle</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
        
          default: 0.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Angle of rotation for flow noise</p>
        
      </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Space attributes</summary>
  <p>
    
    <h3>camera</h3>
    <p>
      <b>Camera</b>
      
        
          default: None
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">camera used to define camera and screen space</p>
        
      </p>
    
    <h3>input_texture_coordinates</h3>
    <p>
      <b>Vec3f</b>
      <i>bindable</i>
        
          default: [ 0, 0, 0 ]
        
          <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
        
      </p>
    
    <h3>object_space</h3>
    <p>
      <b>Geometry</b>
      
        
          default: None
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Directly connect object to use that object's space.</p>
        
      </p>
    
    <h3>space</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
        
            | render = 0 (default)
          
            | camera = 1
          
            | world = 2
          
            | screen = 3
          
            | object = 4
          
            | reference = 5
          
            | texture = 6
          
            | input texture coordinates = 7
          
            | hair_surface_uv = 8
          
            | hair_closest_surface_uv = 9
          
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">The space to calculate the noise in</p>
        
      </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Transform attributes</summary>
  <p>
    
    <h3>rotation</h3>
    <p>
      <b>Vec3f</b>
      <i>bindable</i>
        
          default: [ 0, 0, 0 ]
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Rotates the noise in space based on the specified rotation order</p>
        
      </p>
    
    <h3>rotation_order</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
        
            | xyz = 0 (default)
          
            | xzy = 1
          
            | yxz = 2
          
            | yzx = 3
          
            | zxy = 4
          
            | zyx = 5
          
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Order in which to apply the euler rotations</p>
        
      </p>
    
    <h3>scale</h3>
    <p>
      <b>Vec3f</b>
      <i>bindable</i>
        
          default: [ 1, 1, 1 ]
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Vector to scale the noise non-proportionally</p>
        
      </p>
    
    <h3>transformation_order</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
        
            | srt = 0
          
            | str = 1
          
            | rst = 2
          
            | rts = 3
          
            | tsr = 4 (default)
          
            | trs = 5
          
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Order in which to apply the translation, rotation, and frequency</p>
        
      </p>
    
    <h3>translation</h3>
    <p>
      <b>Vec3f</b>
      <i>bindable</i>
        
          default: [ 0, 0, 0 ]
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Translation of the noise in space</p>
        
      </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>amplitude</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
        
          default: 1.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Intensity of the noise</p>
        
      </p>
    
    <h3>color</h3>
    <p>
      <b>Bool</b>
      
        
          default: False
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Outputs RGB noise</p>
        
      </p>
    
    <h3>color_A</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
        
          default: [ 0, 0, 0 ]
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">The color value at 0 noise</p>
        
      </p>
    
    <h3>color_B</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
        
          default: [ 1, 1, 1 ]
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">The color value at 1 noise</p>
        
      </p>
    
    <h3>distortion</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
        
          default: 0.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Warp input coordinate space with single noise level before looking up noise</p>
        
      </p>
    
    <h3>distortion_noise_type</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
        
            | perlin classic = 0 (default)
          
            | perlin simplex = 1
          
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Type of noise to use for distortion.</p>
        
      </p>
    
    <h3>frequency_multiplier</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
        
          default: 1.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Scalar multiplier for the frequency vector</p>
        
      </p>
    
    <h3>lacunarity</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
        
          default: 2.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Multiplier on the noise frequency per level</p>
        
      </p>
    
    <h3>max_level</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
        
          default: 1.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Number of octaves of noise to add together for the final result</p>
        
      </p>
    
    <h3>noise_type</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
        
            | perlin classic = 0 (default)
          
            | perlin simplex = 1
          
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Type of noise to use. Simplex grid activates Flow Noise Angle and Advection</p>
        
      </p>
    
    <h3>persistence</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
        
          default: 0.5
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Multiplier on the noise amplitude per level</p>
        
      </p>
    
    <h3>seed</h3>
    <p>
      <b>Int</b>
      
        
          default: 0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">The seed for the random number generator</p>
        
      </p>
    
  </p>
</details>

