---
title: ImageNormalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ImageNormalMap
**SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">UVs attributes</summary>
  <p>
    
    <h3>offset</h3>
    <p>
      <b>Vec2f</b>
      
      
        default: [ 0, 0 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>rotation_angle</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Rotation in degrees</p>
      
    </p>
    
    <h3>rotation_center</h3>
    <p>
      <b>Vec2f</b>
      
      
        default: [ 0.5, 0.5 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">UV coordinate around which to rotate</p>
      
    </p>
    
    <h3>scale</h3>
    <p>
      <b>Vec2f</b>
      
      
        default: [ 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>udim_files</h3>
    <p>
      <b>StringVector</b>
      
      
        default: []
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>udim_max_v</h3>
    <p>
      <b>Int</b>
      
      
        default: 10
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">udim maximum v value</p>
      
    </p>
    
    <h3>udim_values</h3>
    <p>
      <b>IntVector</b>
      
      
        default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>default_value</h3>
    <p>
      <b>Vec3f</b>
      
      
        default: [ 0, 0, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">default value to be used for missing udims when 'use_default_value_when_missing' is enabled</p>
      
    </p>
    
    <h3>input_texture_coordinates</h3>
    <p>
      <b>Vec3f</b>
      <i>bindable</i>
      
        default: [ 0, 0, 0 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>normal_encoding</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | [0,1] = 0 (default)
        
          | [-1,1] = 1
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Most normal maps are encoded [0,1]. Only certain rare floating point normal maps are encoded [-1,1]</p>
      
    </p>
    
    <h3>tangent_space_normal_texture</h3>
    <p>
      <b>String</b>
      <i>filename</i>
      
        default: 
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">filename that points to a tangent space normal texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
      
    </p>
    
    <h3>texture_coordinates</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | texture = 0 (default)
        
          | input texture coordinates = 1
        
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>use_default_value_when_missing</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Uses the 'default_value' for missing udims and does not report error</p>
      
    </p>
    
    <h3>wrap_around</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Controls whether to repeat (true) or clamp (false) the texture</p>
      
    </p>
    
  </p>
</details>

