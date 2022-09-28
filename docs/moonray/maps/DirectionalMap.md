---
title: DirectionalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DirectionalMap
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Adjustment attributes</summary>
  <p>
    
    <h3>bias</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 0.5
    
    <p>controls the rate at which the effect increases as the shading normal approaches the prime direction</p>
    
    
    <h3>clamping_behavior</h3>
    <b>Int</b>
    <i>enum</i>
    
    - clamp = 0 (default)
    
    - absolute = 1
    
    
    <p>determines how surfaces facing opposite the prime direction are handled</p>
    
    
    <h3>falloff_type</h3>
    <b>Int</b>
    <i>enum</i>
    
    - cosine = 0 (default)
    
    - linear = 1
    
    
    <p>determines how the effect falls off as the difference angle increases</p>
    
    
    <h3>smoothstep_end</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 0.550000011921
    
    <p>the value at which the effect is considered 100% on</p>
    
    
    <h3>smoothstep_start</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 0.449999988079
    
    <p>the value at which the effect is considered 100% off</p>
    
    
    <h3>use_smoothstep</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>apply smoothstep function to result</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Normal attributes</summary>
  <p>
    
    <h3>input_normal</h3>
    <b>33554432</b>
    
    
    default: None
    
    <p>specifies an alternate shading normal when bound. The binding multiplier is ignored</p>
    
    
    <h3>input_normal_dial</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 1.0
    
    <p>controls the amount of influence of the alternate normal</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>color_a</h3>
    <b>Rgb</b>
    <i>bindable</i>
    
    default: [ 0, 0, 0 ]
    
    <p>the color of the effect when the difference angle is greatest</p>
    
    
    <h3>color_b</h3>
    <b>Rgb</b>
    <i>bindable</i>
    
    default: [ 1, 1, 1 ]
    
    <p>the color of the effect when the difference angle is smallest</p>
    
    
    <h3>custom_direction</h3>
    <b>Vec3f</b>
    <i>bindable</i>
    
    default: [ 0, 1, 0 ]
    
    <p>specifies a custom direction in world space as the prime direction</p>
    
    
    <h3>object</h3>
    <b>Node</b>
    
    
    default: None
    
    <p>the object to use when 'prime direction' is set to 'axis of object' or 'look-at object'</p>
    
    
    <h3>object_axis</h3>
    <b>Int</b>
    <i>enum</i>
    
    - +X axis = 0
    
    - -X axis = 1 (default)
    
    - +Y axis = 2
    
    - -Y axis = 3
    
    - +Z axis = 4
    
    - -Z axis = 5
    
    
    <p>which axis to use when 'prime direction' is set to 'axis of object'</p>
    
    
    <h3>polarity</h3>
    <b>Int</b>
    <i>enum</i>
    
    - perpendicular = 0 (default)
    
    - parallel = 1
    
    
    <p>determines which directions are given color A and which are given color B. Switching this effectively swaps the colors</p>
    
    
    <h3>prime_direction</h3>
    <b>Int</b>
    <i>enum</i>
    
    - observer direction = 0 (default)
    
    - custom direction = 1
    
    - axis of object = 2
    
    - look-at object = 3
    
    
    <p>which source is used for the prime direction</p>
    
    
    <h3>use_reference_space</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>use reference space position and normals</p>
    
    
  </p>
</details>

