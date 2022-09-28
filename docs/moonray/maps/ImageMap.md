---
title: ImageMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ImageMap
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Blur attributes</summary>
  <p>
    
    <h3>blur</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
        
          default: 0.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">This parameter is deprecated, do not use!   Number of pixels to blur the image</p>
        
      </p>
    
    <h3>mip_bias</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
        
          default: 0.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Amount to scale derivatives which controls mipmap selection</p>
        
      </p>
    
    <h3>num_blur_samples</h3>
    <p>
      <b>Int</b>
      
        
          default: 3
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">This parameter is deprecated, do not use!  Number of internal samples for blur.   Higher values increase quality</p>
        
      </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Color Correction attributes</summary>
  <p>
    
    <h3>TMI</h3>
    <p>
      <b>Vec3f</b>
      
        
          default: [ 0, 0, 0 ]
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">T = Temperature where positive values push towards blue and negative towards red.   M = Magenta where positive values push towards magenta and negative towards green.  I = Intensity where negative values remove and positive values add energy </p>
        
      </p>
    
    <h3>TMI_control_enabled</h3>
    <p>
      <b>Bool</b>
      
        
          default: False
        
          <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
        
      </p>
    
    <h3>contrast</h3>
    <p>
      <b>Rgb</b>
      
        
          default: [ 1, 1, 1 ]
        
          <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
        
      </p>
    
    <h3>contrast_enabled</h3>
    <p>
      <b>Bool</b>
      
        
          default: False
        
          <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
        
      </p>
    
    <h3>gain</h3>
    <p>
      <b>Rgb</b>
      
        
          default: [ 1, 1, 1 ]
        
          <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
        
      </p>
    
    <h3>gain_offset_enabled</h3>
    <p>
      <b>Bool</b>
      
        
          default: False
        
          <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
        
      </p>
    
    <h3>gamma_adjust</h3>
    <p>
      <b>Rgb</b>
      
        
          default: [ 1, 1, 1 ]
        
          <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
        
      </p>
    
    <h3>gamma_enabled</h3>
    <p>
      <b>Bool</b>
      
        
          default: False
        
          <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
        
      </p>
    
    <h3>offset_adjust</h3>
    <p>
      <b>Rgb</b>
      
        
          default: [ 0, 0, 0 ]
        
          <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
        
      </p>
    
    <h3>saturation</h3>
    <p>
      <b>Rgb</b>
      
        
          default: [ 1, 1, 1 ]
        
          <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
        
      </p>
    
    <h3>saturation_enabled</h3>
    <p>
      <b>Bool</b>
      
        
          default: False
        
          <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
        
      </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>alpha_only</h3>
    <p>
      <b>Bool</b>
      
        
          default: False
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">If true, the alpha channel of the texture will be placed in the rgb channels.  If the texture has no alpha channel, 1.0 is used, and the resulting texture lookup is then always white.</p>
        
      </p>
    
    <h3>default_color</h3>
    <p>
      <b>Rgb</b>
      
        
          default: [ 0, 1, 0 ]
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">default color to be used for missing udims when 'use default color when missing' is enabled</p>
        
      </p>
    
    <h3>gamma</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
        
            | off = 0
          
            | on = 1
          
            | auto = 2 (default)
          
        
          <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
        
      </p>
    
    <h3>input_texture_coordinates</h3>
    <p>
      <b>Vec3f</b>
      <i>bindable</i>
        
          default: [ 0, 0, 0 ]
        
          <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
        
      </p>
    
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
    
    <h3>texture</h3>
    <p>
      <b>String</b>
      <i>filename</i>
        
          default: 
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx). If filename contains '<UDIM>', udim index substitution is performed on filename.  In the UDIM case, 'scale', 'offset', and 'wrap around' are ignored.</p>
        
      </p>
    
    <h3>texture_coordinates</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
        
            | texture = 0 (default)
          
            | hair surface = 1
          
            | input texture coordinates = 2
          
            | hair closest surface = 3
          
        
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
      
        
          default: <scene_rdl2.__scene_rdl2__.IntVector object at >
        
          <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
        
      </p>
    
    <h3>use_default_color_when_missing</h3>
    <p>
      <b>Bool</b>
      
        
          default: False
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Uses the 'default color' for missing udims and does not report error</p>
        
      </p>
    
    <h3>wrap_around</h3>
    <p>
      <b>Bool</b>
      
        
          default: True
        
          <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
        
      </p>
    
  </p>
</details>

