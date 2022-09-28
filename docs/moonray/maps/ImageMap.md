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
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  This parameter is deprecated, do not use!   Number of pixels to blur the image
  
  
  <h3>mip_bias</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  Amount to scale derivatives which controls mipmap selection
  
  
  <h3>num_blur_samples</h3>
  <b>Int</b>  
  
  default: 3
  
  This parameter is deprecated, do not use!  Number of internal samples for blur.   Higher values increase quality
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Color Correction attributes</summary>
  <p>
  
  <h3>TMI</h3>
  <b>Vec3f</b>  
  
  default: [ 0, 0, 0 ]
  
  T = Temperature where positive values push towards blue and negative towards red.   M = Magenta where positive values push towards magenta and negative towards green.  I = Intensity where negative values remove and positive values add energy 
  
  
  <h3>TMI_control_enabled</h3>
  <b>Bool</b>  
  
  default: False
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>contrast</h3>
  <b>Rgb</b>  
  
  default: [ 1, 1, 1 ]
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>contrast_enabled</h3>
  <b>Bool</b>  
  
  default: False
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>gain</h3>
  <b>Rgb</b>  
  
  default: [ 1, 1, 1 ]
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>gain_offset_enabled</h3>
  <b>Bool</b>  
  
  default: False
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>gamma_adjust</h3>
  <b>Rgb</b>  
  
  default: [ 1, 1, 1 ]
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>gamma_enabled</h3>
  <b>Bool</b>  
  
  default: False
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>offset_adjust</h3>
  <b>Rgb</b>  
  
  default: [ 0, 0, 0 ]
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>saturation</h3>
  <b>Rgb</b>  
  
  default: [ 1, 1, 1 ]
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>saturation_enabled</h3>
  <b>Bool</b>  
  
  default: False
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
  
  <h3>alpha_only</h3>
  <b>Bool</b>  
  
  default: False
  
  If true, the alpha channel of the texture will be placed in the rgb channels.  If the texture has no alpha channel, 1.0 is used, and the resulting texture lookup is then always white.
  
  
  <h3>default_color</h3>
  <b>Rgb</b>  
  
  default: [ 0, 1, 0 ]
  
  default color to be used for missing udims when 'use default color when missing' is enabled
  
  
  <h3>gamma</h3>
  <b>Int</b>  *enum*
  
  - off = 0
  
  - on = 1
  
  - auto = 2 (default)
  
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>input_texture_coordinates</h3>
  <b>Vec3f</b>  *bindable*
  
  default: [ 0, 0, 0 ]
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>offset</h3>
  <b>Vec2f</b>  
  
  default: [ 0, 0 ]
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>rotation_angle</h3>
  <b>Float</b>  
  
  default: 0.0
  
  Rotation in degrees
  
  
  <h3>rotation_center</h3>
  <b>Vec2f</b>  
  
  default: [ 0.5, 0.5 ]
  
  UV coordinate around which to rotate
  
  
  <h3>scale</h3>
  <b>Vec2f</b>  
  
  default: [ 1, 1 ]
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>texture</h3>
  <b>String</b>  *filename*
  
  default: 
  
  filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx). If filename contains '<UDIM>', udim index substitution is performed on filename.  In the UDIM case, 'scale', 'offset', and 'wrap around' are ignored.
  
  
  <h3>texture_coordinates</h3>
  <b>Int</b>  *enum*
  
  - texture = 0 (default)
  
  - hair surface = 1
  
  - input texture coordinates = 2
  
  - hair closest surface = 3
  
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>udim_files</h3>
  <b>StringVector</b>  
  
  default: []
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>udim_max_v</h3>
  <b>Int</b>  
  
  default: 10
  
  udim maximum v value
  
  
  <h3>udim_values</h3>
  <b>IntVector</b>  
  
  default: <scene_rdl2.__scene_rdl2__.IntVector object at >
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>use_default_color_when_missing</h3>
  <b>Bool</b>  
  
  default: False
  
  Uses the 'default color' for missing udims and does not report error
  
  
  <h3>wrap_around</h3>
  <b>Bool</b>  
  
  default: True
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  </p>
</details>

