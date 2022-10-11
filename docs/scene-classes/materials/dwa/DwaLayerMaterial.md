---
title: DwaLayerMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DwaLayerMaterial
**ROOTSHADER MATERIAL SHADER DWABASELAYERABLE**

---

<details open>
  <summary class="scene-class-attr-group">Advanced attributes</summary>
  <p>
    
    <h3>blend_color_space</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | RGB = 0 (default)
        
          | HSV = 1
        
          | HSL = 2
        
      
        <p class="scene-class-attr-comment">Color space used when blending the two material's color parameters</p>
      
    </p>
    
    <h3>fallback_bssrdf</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | normalized diffusion = 0 (default)
        
          | dipole = 1
        
          | random walk = 2
        
      
        <p class="scene-class-attr-comment">If child materials disagree on the type of bssrdf, this type will be used instead.</p>
      
    </p>
    
    <h3>fallback_clearcoat_use_bending</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="scene-class-attr-comment">If child materials disagree on the type of clearcoat use bending, this type will be used instead.</p>
      
    </p>
    
    <h3>fallback_outer_specular_model</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | Beckmann = 0
        
          | GGX = 1 (default)
        
      
        <p class="scene-class-attr-comment">If child materials disagree on the type of outer specular model, this type will be used instead.</p>
      
    </p>
    
    <h3>fallback_specular_model</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | Beckmann = 0
        
          | GGX = 1 (default)
        
      
        <p class="scene-class-attr-comment">If child materials disagree on the type of specular model, this type will be used instead.</p>
      
    </p>
    
    <h3>fallback_thin_geometry</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="scene-class-attr-comment">If child materials disagree on the type of thin geometry, this type will be used instead.</p>
      
    </p>
    
    <h3>fallback_toon_specular_model</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | Beckmann = 0
        
          | GGX = 1 (default)
        
          | Toon = 2
        
      
        <p class="scene-class-attr-comment">If child materials disagree on the type of toon specular model, this type will be used instead.</p>
      
    </p>
    
    <h3>sss_trace_set</h3>
    <p>
      <b>Traceset</b>
      
      
        default: None
      
        <p class="scene-class-attr-comment">By default, only the geometry associated with this material contributes to subsurface. The DwaLayerMaterial ignores the sss trace sets of the submaterials. If you want adjacent geometry with different material to contribute as well, specify all those parts here.</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">Glitter Fallback attributes</summary>
  <p>
    
    <h3>fallback_glitter_LOD_quality</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.5
      
        <p class="scene-class-attr-comment">controls quality of glitter at distances where individual flakes cannot be perceived; at lower values, approximation kicks in earlier.  This parameter will only be used when layering two distinct glitter materials.</p>
      
    </p>
    
    <h3>fallback_glitter_debug_mode</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | off = 0 (default)
        
          | blend = 1
        
          | color = 2
        
          | averageColor = 3
        
          | footprintArea = 4
        
          | radius = 5
        
      
        <p class="scene-class-attr-comment">developer debug visualization modes.  This parameter will only be used when layering two distinct glitter materials.</p>
      
    </p>
    
    <h3>fallback_glitter_layering_mode</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | physical = 0 (default)
        
          | additive = 1
        
      
        <p class="scene-class-attr-comment">layering mode for glitter on top of the under material. physical: conserves energy and glitter attenuates under material, additive: breaks energy conservation but glitter is never darker than the under material (eg. use case: snow).  This parameter will only be used when layering two distinct glitter materials.</p>
      
    </p>
    
    <h3>fallback_glitter_randomness</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.5
      
        <p class="scene-class-attr-comment">randomness of flake orientation.  This parameter will only be used when layering two distinct glitter materials.</p>
      
    </p>
    
    <h3>fallback_glitter_seed</h3>
    <p>
      <b>Int</b>
      
      
        default: 0
      
        <p class="scene-class-attr-comment">The seed for the glitter random number generator.  This parameter will only be used when layering two distinct glitter materials.</p>
      
    </p>
    
    <h3>fallback_glitter_space</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | object = 4
        
          | reference = 5 (default)
        
      
        <p class="scene-class-attr-comment">The space to calculate the worley noise in, defaults to reference space.  This parameter will only be used when layering two distinct glitter materials.</p>
      
    </p>
    
    <h3>fallback_glitter_style_A_frequency</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.0
      
        <p class="scene-class-attr-comment">0 implies none of this style, 1 implies all the flakes will get this style.  This parameter will only be used when layering two distinct glitter materials.</p>
      
    </p>
    
    <h3>fallback_glitter_style_B_frequency</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="scene-class-attr-comment">0 implies none of this style, 1 implies all the flakes will get this style.  This parameter will only be used when layering two distinct glitter materials.</p>
      
    </p>
    
    <h3>fallback_glitter_texture_A</h3>
    <p>
      <b>String</b>
      <i>filename</i>
      
        default: 
      
        <p class="scene-class-attr-comment">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).  This parameter will only be used when layering two distinct glitter materials.</p>
      
    </p>
    
    <h3>fallback_glitter_texture_B</h3>
    <p>
      <b>String</b>
      
      
        default: 
      
        <p class="scene-class-attr-comment">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).  This parameter will only be used when layering two distinct glitter materials.</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>extra_aovs</h3>
    <p>
      <b>Map</b>
      
      
        default: None
      
        <p class="scene-class-attr-comment">Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
      
    </p>
    
    <h3>label</h3>
    <p>
      <b>String</b>
      
      
        default: 
      
        <p class="scene-class-attr-comment">label used in material and light aovs</p>
      
    </p>
    
    <h3>mask</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="scene-class-attr-comment">foreground material weight</p>
      
    </p>
    
    <h3>material_A</h3>
    <p>
      <b>Dwabaselayerable</b>
      
      
        default: None
      
        <p class="scene-class-attr-comment">foreground material</p>
      
    </p>
    
    <h3>material_B</h3>
    <p>
      <b>Dwabaselayerable</b>
      
      
        default: None
      
        <p class="scene-class-attr-comment">background material</p>
      
    </p>
    
    <h3>priority</h3>
    <p>
      <b>Int</b>
      
      
        default: 0
      
        <p class="scene-class-attr-comment">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      
    </p>
    
  </p>
</details>

