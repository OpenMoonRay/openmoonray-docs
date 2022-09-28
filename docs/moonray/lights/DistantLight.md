---
title: DistantLight

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DistantLight
**NODE LIGHT**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Map attributes</summary>
  <p>
    
    <h3>contrast</h3>
    <b>Rgb</b>
    
    
    default: [ 1, 1, 1 ]
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>gain</h3>
    <b>Rgb</b>
    
    
    default: [ 1, 1, 1 ]
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>gamma</h3>
    <b>Rgb</b>
    
    
    default: [ 1, 1, 1 ]
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>offset</h3>
    <b>Rgb</b>
    
    
    default: [ 0, 0, 0 ]
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>saturation</h3>
    <b>Rgb</b>
    
    
    default: [ 1, 1, 1 ]
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>temperature</h3>
    <b>Vec3f</b>
    
    
    default: [ 0, 0, 0 ]
    
    <p>color temperature using Nuke-like T/M/E settings</p>
    
    
    <h3>texture</h3>
    <b>String</b>
    <i>filename</i>
    
    default: 
    
    <p>filename that points to a texture (formats: .exr, .tif, .jpg, etc.)</p>
    
    
    <h3>texture_border_color</h3>
    <b>Rgb</b>
    
    
    default: [ 1, 1, 1 ]
    
    <p>RGB value used when a texture lookup occurs outside the texture</p>
    
    
    <h3>texture_coverage</h3>
    <b>Vec2f</b>
    
    
    default: [ 1, 1 ]
    
    <p>Scales in (u,v)</p>
    
    
    <h3>texture_mirror_u</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>true => mirror in u, false => repeat in u</p>
    
    
    <h3>texture_mirror_v</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>true => mirror in v, false => repeat in v</p>
    
    
    <h3>texture_reps_u</h3>
    <b>Float</b>
    
    
    default: 1.0
    
    <p>Number of times texture repeats in u over the scaled texture space</p>
    
    
    <h3>texture_reps_v</h3>
    <b>Float</b>
    
    
    default: 1.0
    
    <p>Number of times texture repeats in v over the scaled texture space</p>
    
    
    <h3>texture_rotation</h3>
    <b>Float</b>
    
    
    default: 0.0
    
    <p>Clockwise rotation angle in degrees</p>
    
    
    <h3>texture_translation</h3>
    <b>Vec2f</b>
    
    
    default: [ 0, 0 ]
    
    <p>Translations in (u,v) expressed as fractions of the unscaled texture space</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Properties attributes</summary>
  <p>
    
    <h3>angular_extent</h3>
    <b>Float</b>
    
    
    default: 0.52999997139
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>color</h3>
    <b>Rgb</b>
    
    
    default: [ 1, 1, 1 ]
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>exposure</h3>
    <b>Float</b>
    
    
    default: 0.0
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>intensity</h3>
    <b>Float</b>
    
    
    default: 1.0
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>label</h3>
    <b>String</b>
    
    
    default: 
    
    <p>label used in light aov expressions</p>
    
    
    <h3>max_shadow_distance</h3>
    <b>Float</b>
    
    
    default: 0.0
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>mb</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>Does light motion affect motion-blur?</p>
    
    
    <h3>normalized</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>on</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>presence_shadows</h3>
    <b>Int</b>
    <i>enum</i>
    
    |  force off = 0 
    
    |  force on = 1 
    
    |  use default = 2 (default) 
    
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>ray_termination</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>Is light used for ray termination color? Ray termination color is used for filling in falsely dark areas where ray paths have been terminated too early by the depth controls. Such a ray path immediately exits to any ray termination light(s) present in the light set being applied to the lobe, ignoring occlusion by scene geometry. Any light can either be a regular light or a ray termination light (but not both). Thus they can be freely assigned to light sets, which provides a mechanism for applying specific ray termination lights to specific materials, parts or objects. Ray termination color is only applied to non-hair transmission lobes.</p>
    
    
    <h3>texture_filter</h3>
    <b>Int</b>
    <i>enum</i>
    
    |  nearest neighbor = 0 (default) 
    
    |  bilinear = 1 
    
    |  nearest neighbor with nearest mip = 2 
    
    |  bilinear with nearest mip = 3 
    
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>visible_in_camera</h3>
    <b>Int</b>
    <i>enum</i>
    
    |  force off = 0 
    
    |  force on = 1 
    
    |  use default = 2 (default) 
    
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Visibility Flags attributes</summary>
  <p>
    
    <h3>visible_diffuse_reflection</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>whether the light is visible in diffuse reflection</p>
    
    
    <h3>visible_diffuse_transmission</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>whether the light is visible in diffuse transmission</p>
    
    
    <h3>visible_glossy_reflection</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>whether the light is visible in glossy reflection.</p>
    
    
    <h3>visible_glossy_transmission</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>whether the light is visible in glossy transmission (refraction).</p>
    
    
    <h3>visible_mirror_reflection</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>whether the light is visible in miror reflection.</p>
    
    
    <h3>visible_mirror_transmission</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>whether the light is visible in miror transmission (refraction).</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>light_filters</h3>
    <b>Object Vector</b>
    
    
    default: []
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>node_xform</h3>
    <b>Mat4d</b>
    <i>blurrable</i>
    
    default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
  </p>
</details>

