---
title: CylinderLight

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# CylinderLight
**NODE LIGHT**

---

<details open>
  <summary class="scene-class-attr-group">Map attributes</summary>
  <p>
    
    <h3>contrast</h3>
    <p>
      <b>Rgb</b>
      
      
        default: [ 1, 1, 1 ]
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>gain</h3>
    <p>
      <b>Rgb</b>
      
      
        default: [ 1, 1, 1 ]
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>gamma</h3>
    <p>
      <b>Rgb</b>
      
      
        default: [ 1, 1, 1 ]
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>offset</h3>
    <p>
      <b>Rgb</b>
      
      
        default: [ 0, 0, 0 ]
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>saturation</h3>
    <p>
      <b>Rgb</b>
      
      
        default: [ 1, 1, 1 ]
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>temperature</h3>
    <p>
      <b>Vec3f</b>
      
      
        default: [ 0, 0, 0 ]
      
        <p class="scene-class-attr-comment">color temperature using Nuke-like T/M/E settings</p>
      
    </p>
    
    <h3>texture</h3>
    <p>
      <b>String</b>
      <i>filename</i>
      
        default: 
      
        <p class="scene-class-attr-comment">filename that points to a texture (formats: .exr, .tif, .jpg, etc.)</p>
      
    </p>
    
    <h3>texture_border_color</h3>
    <p>
      <b>Rgb</b>
      
      
        default: [ 1, 1, 1 ]
      
        <p class="scene-class-attr-comment">RGB value used when a texture lookup occurs outside the texture</p>
      
    </p>
    
    <h3>texture_coverage</h3>
    <p>
      <b>Vec2f</b>
      
      
        default: [ 1, 1 ]
      
        <p class="scene-class-attr-comment">Scales in (u,v)</p>
      
    </p>
    
    <h3>texture_mirror_u</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="scene-class-attr-comment">true =&gt; mirror in u, false =&gt; repeat in u</p>
      
    </p>
    
    <h3>texture_mirror_v</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="scene-class-attr-comment">true =&gt; mirror in v, false =&gt; repeat in v</p>
      
    </p>
    
    <h3>texture_reps_u</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.0
      
        <p class="scene-class-attr-comment">Number of times texture repeats in u over the scaled texture space</p>
      
    </p>
    
    <h3>texture_reps_v</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.0
      
        <p class="scene-class-attr-comment">Number of times texture repeats in v over the scaled texture space</p>
      
    </p>
    
    <h3>texture_rotation</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-comment">Clockwise rotation angle in degrees</p>
      
    </p>
    
    <h3>texture_translation</h3>
    <p>
      <b>Vec2f</b>
      
      
        default: [ 0, 0 ]
      
        <p class="scene-class-attr-comment">Translations in (u,v) expressed as fractions of the unscaled texture space</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">Properties attributes</summary>
  <p>
    
    <h3>apply_scene_scale</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="scene-class-attr-comment">apply scene scale variable when normalized</p>
      
    </p>
    
    <h3>clear_radius</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-comment">clear radius: shadows less than this distance from the light are ignored (disabled if &lt;= 0.0)</p>
      
    </p>
    
    <h3>clear_radius_falloff_distance</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-comment">clear radius falloff distance: distance over which the shadows fall off, where shadows start to falloff at clear radius + falloff distance and disappear entirely at clear radius</p>
      
    </p>
    
    <h3>clear_radius_interpolation_type</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | linear = 0 (default)
        
          | exponential_up = 1
        
          | exponential_down = 2
        
          | smoothstep = 3
        
      
        <p class="scene-class-attr-comment">clear radius interpolation: interpolation type to use for the clear radius shadow falloff</p>
      
    </p>
    
    <h3>color</h3>
    <p>
      <b>Rgb</b>
      
      
        default: [ 1, 1, 1 ]
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>exposure</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>height</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.0
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>intensity</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.0
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>label</h3>
    <p>
      <b>String</b>
      
      
        default: 
      
        <p class="scene-class-attr-comment">label used in light aov expressions</p>
      
    </p>
    
    <h3>max_shadow_distance</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>mb</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="scene-class-attr-comment">Does light motion affect motion-blur?</p>
      
    </p>
    
    <h3>normalized</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>on</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>presence_shadows</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | force off = 0
        
          | force on = 1
        
          | use default = 2 (default)
        
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>radius</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.0
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>ray_termination</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="scene-class-attr-comment">Is light used for ray termination color? Ray termination color is used for filling in falsely dark areas where ray paths have been terminated too early by the depth controls. Such a ray path immediately exits to any ray termination light(s) present in the light set being applied to the lobe, ignoring occlusion by scene geometry. Any light can either be a regular light or a ray termination light (but not both). Thus they can be freely assigned to light sets, which provides a mechanism for applying specific ray termination lights to specific materials, parts or objects. Ray termination color is only applied to non-hair transmission lobes.</p>
      
    </p>
    
    <h3>sidedness</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | regular = 0 (default)
        
          | reverse = 1
        
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>texture_filter</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | nearest neighbor = 0 (default)
        
          | bilinear = 1
        
          | nearest neighbor with nearest mip = 2
        
          | bilinear with nearest mip = 3
        
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>visible_in_camera</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | force off = 0
        
          | force on = 1
        
          | use default = 2 (default)
        
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">Visibility Flags attributes</summary>
  <p>
    
    <h3>visible_diffuse_reflection</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="scene-class-attr-comment">whether the light is visible in diffuse reflection</p>
      
    </p>
    
    <h3>visible_diffuse_transmission</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="scene-class-attr-comment">whether the light is visible in diffuse transmission</p>
      
    </p>
    
    <h3>visible_glossy_reflection</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="scene-class-attr-comment">whether the light is visible in glossy reflection.</p>
      
    </p>
    
    <h3>visible_glossy_transmission</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="scene-class-attr-comment">whether the light is visible in glossy transmission (refraction).</p>
      
    </p>
    
    <h3>visible_mirror_reflection</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="scene-class-attr-comment">whether the light is visible in miror reflection.</p>
      
    </p>
    
    <h3>visible_mirror_transmission</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="scene-class-attr-comment">whether the light is visible in miror transmission (refraction).</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>light_filters</h3>
    <p>
      <b>Object Vector</b>
      
      
        default: []
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>node_xform</h3>
    <p>
      <b>Mat4d</b>
      <i>blurrable</i>
      
        default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
  </p>
</details>

