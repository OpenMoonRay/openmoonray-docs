---
title: NoiseWorleyMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# NoiseWorleyMap
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>F1</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Influence of F1 (the closest feature point)</p>
      
    </p>
    
    <h3>F2</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Influence of F2 (the second closest feature point)</p>
      
    </p>
    
    <h3>F3</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Influence of F3 (the third closest feature point)</p>
      
    </p>
    
    <h3>F4</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Influence of F4 (the fourth closest feature point)</p>
      
    </p>
    
    <h3>bias</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.5
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Bias of interpolation from color A to color B</p>
      
    </p>
    
    <h3>camera</h3>
    <p>
      <b>Camera</b>
      
      
        default: None
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">camera used to define camera and screen space</p>
      
    </p>
    
    <h3>cell_id</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | f1 = 0 (default)
        
          | f2 = 1
        
          | f3 = 2
        
          | f4 = 3
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Which of the distances determines the cell id</p>
      
    </p>
    
    <h3>color_A</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
      
        default: [ 0, 0, 0 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">The interpolated color value at distance equals zero</p>
      
    </p>
    
    <h3>color_B</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">The interpolated color value at distance equals one</p>
      
    </p>
    
    <h3>distance_method</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | linear = 0 (default)
        
          | linear squared = 1
        
          | manhattan = 2
        
          | chebyshev = 3
        
          | quadratic = 4
        
          | minkowski = 5
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Metric for calculating distance to feature points which controls the shape of the falloff when output mode is distance</p>
      
    </p>
    
    <h3>frequency_multiplier</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Scalar multiplier for the frequency vector</p>
      
    </p>
    
    <h3>gain</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.5
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Gain of interpolation from color A to color B</p>
      
    </p>
    
    <h3>input_texture_coordinates</h3>
    <p>
      <b>Vec3f</b>
      <i>bindable</i>
      
        default: [ 0, 0, 0 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>invert</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Invert the final pattern</p>
      
    </p>
    
    <h3>jitter</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Controls the distortion of the cells</p>
      
    </p>
    
    <h3>max_level</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Number of octaves of noise to add together for the final result</p>
      
    </p>
    
    <h3>minkowski_number</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 3.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Exponent on distances when distance method is set to Minkowski</p>
      
    </p>
    
    <h3>object_space</h3>
    <p>
      <b>Geometry</b>
      
      
        default: None
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Directly connect object to use that object's space.</p>
      
    </p>
    
    <h3>output_mode</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | distance = 0 (default)
        
          | gradient = 1
        
          | cell id = 2
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Method by which the shader outputs a color.  Distance uses F1..F4 interpolated between color A and color B, gradient outputs the gradient of the noise, and cell ID outputs a random color for each cell</p>
      
    </p>
    
    <h3>remap</h3>
    <p>
      <b>Vec2f</b>
      <i>bindable</i>
      
        default: [ 0, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Allows mapping the distances from the specified min/max range into the 0..1 range</p>
      
    </p>
    
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
    
    <h3>seed</h3>
    <p>
      <b>Int</b>
      
      
        default: 0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">The seed for the random number generator</p>
      
    </p>
    
    <h3>smoothstep</h3>
    <p>
      <b>Vec2f</b>
      <i>bindable</i>
      
        default: [ 0, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">min/max values between which the smoothstep will interpolate</p>
      
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
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">The space to calculate the noise in</p>
      
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
    
    <h3>use_smoothstep</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Put the noise value through a smoothstep function defined by min/max</p>
      
    </p>
    
  </p>
</details>

