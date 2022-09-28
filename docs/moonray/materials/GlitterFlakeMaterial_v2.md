---
title: GlitterFlakeMaterial_v2

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# GlitterFlakeMaterial_v2
**ROOTSHADER MATERIAL SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Advanced attributes</summary>
  <p>
  
  <h3>approximate_glitter_for_secondary_rays</h3>
  <b>Bool</b>  
  
  default: True
  
  use an approximation to shade glitter for non-mirror secondary rays
  
  
  <h3>debug_mode</h3>
  <b>Int</b>  *enum*
  
  - off = 0 (default)
  
  - blend = 1
  
  - color = 2
  
  - averageColor = 3
  
  - footprintArea = 4
  
  - radius = 5
  
  
  developer debug visualization modes
  
  
  <h3>dense_glitter_LOD_quality</h3>
  <b>Float</b>  
  
  default: 0.5
  
  controls quality of glitter at distances where individual flakes cannot be perceived; at lower values, approximation kicks in earlier
  
  
  <h3>glitter_mask</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  use this to control where glitter appears
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Appearance attributes</summary>
  <p>
  
  <h3>decouple_flake_size</h3>
  <b>Bool</b>  
  
  default: False
  
  makes flake size independent of flake density
  
  
  <h3>flake_color_hue_variation</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  introduce hue variation in flake color centered at the base flake color's hue on the hue wheel
  
  
  <h3>flake_color_saturation_variation</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  introduce saturation variation in flake color centered at the base flake color's saturation
  
  
  <h3>flake_color_value_variation</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  introduce value variation in flake color centered at the base flake color's value
  
  
  <h3>flake_density</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  controls the number of flakes per unit length; larger density packs more flakes into same space
  
  
  <h3>flake_jitter</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  Controls how much the flakes are randomly offset from a regular grid
  
  
  <h3>flake_orientation_randomness</h3>
  <b>Float</b>  
  
  default: 0.15000000596
  
  randomly orient each texture
  
  
  <h3>flake_randomness</h3>
  <b>Float</b>  
  
  default: 0.5
  
  randomness of flake orientation
  
  
  <h3>flake_texture_1</h3>
  <b>String</b>  *filename*
  
  default: 
  
  filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).
  
  
  <h3>flake_texture_1_frequency</h3>
  <b>Float</b>  
  
  default: 0.5
  
  0 implies none of this texture, 1 implies all the flakes will get this texture
  
  
  <h3>flake_texture_2</h3>
  <b>String</b>  *filename*
  
  default: 
  
  filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).
  
  
  <h3>flake_texture_2_frequency</h3>
  <b>Float</b>  
  
  default: 0.5
  
  0 implies none of this texture, 1 implies all the flakes will get this texture
  
  
  <h3>use_flake_textures</h3>
  <b>Bool</b>  
  
  default: False
  
  use textured glitter flakes
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Common attributes</summary>
  <p>
  
  <h3>presence</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Flake Generation attributes</summary>
  <p>
  
  <h3>compensate_reference_space_deformation</h3>
  <b>Bool</b>  
  
  default: True
  
  (In ReferenceSpace) Compensates for stretch/compression/shear in glitter shapes resulting from animation etc
  
  
  <h3>seed</h3>
  <b>Int</b>  
  
  default: 0
  
  The seed for the random number generator
  
  
  <h3>space</h3>
  <b>Int</b>  *enum*
  
  - object = 4
  
  - reference = 5 (default)
  
  
  The space to calculate the noise in, defaults to reference space
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Glitter A Appearance attributes</summary>
  <p>
  
  <h3>flake_color_A</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  base flake color (use physical metallic color values)
  
  
  <h3>flake_roughness_A</h3>
  <b>Float</b>  
  
  default: 0.140000000596
  
  specular roughness of individual flakes (0 makes flakes mirror-like)
  
  
  <h3>flake_size_A</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  size of the flakes.   Apparent flake size may vary based on how much the flake spheres intersect the surface
  
  
  <h3>flake_style_A_frequency</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  0 implies none of this style, 1 implies all the flakes will get this style
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Glitter B Appearance attributes</summary>
  <p>
  
  <h3>flake_color_B</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  base flake color (use physical metallic color values)
  
  
  <h3>flake_roughness_B</h3>
  <b>Float</b>  
  
  default: 0.140000000596
  
  specular roughness of individual flakes (0 makes flakes mirror-like)
  
  
  <h3>flake_size_B</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  size of the flakes.   Apparent flake size may vary based on how much the flake spheres intersect the surface
  
  
  <h3>flake_style_B_frequency</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  0 implies none of this style, 1 implies all the flakes will get this style
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Layering attributes</summary>
  <p>
  
  <h3>layering_mode</h3>
  <b>Int</b>  *enum*
  
  - physical = 0 (default)
  
  - additive = 1
  
  
  layering mode for glitter on top of the under material. physical: conserves energy and glitter attenuates under material, additive: breaks energy conservation but glitter is never darker than the under material (eg. use case: snow)
  
  
  <h3>under_material</h3>
  <b>Material</b>  
  
  default: None
  
  material that fills the gaps between glitter flakes
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
  
  <h3>extra_aovs</h3>
  <b>Map</b>  
  
  default: None
  
  Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result
  
  
  <h3>label</h3>
  <b>String</b>  
  
  default: 
  
  label used in material and light aovs
  
  
  <h3>priority</h3>
  <b>Int</b>  
  
  default: 0
  
  The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.
  
  
  </p>
</details>

