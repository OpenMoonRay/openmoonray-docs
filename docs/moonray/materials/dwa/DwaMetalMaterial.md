---
title: DwaMetalMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DwaMetalMaterial
**ROOTSHADER MATERIAL SHADER DWABASELAYERABLE**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Advanced attributes</summary>
  <p>
    
    <h3>specular</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">enables/disables specular reflections (binary 0|1 for plausibility)</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Clearcoat attributes</summary>
  <p>
    
    <h3>clearcoat</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">enables/disables clearcoat (binary 0|1 for plausibility)</p>
      
    </p>
    
    <h3>clearcoat_attenuation_color</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
      
        default: [ 0.5, 0.5, 0.5 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the attenuation color of the clearcoat when 'cleacoat thickness' &gt; 0</p>
      
    </p>
    
    <h3>clearcoat_bending</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">(advanced, recommended ON) bends rays based on the clearcoat-refractive-index before evaluating the lobes under clearcoat</p>
      
    </p>
    
    <h3>clearcoat_model</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | Beckmann = 0
        
          | GGX = 1 (default)
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">sets the normalized distribution function for clearcoat.  GGX is currently isotropic only</p>
      
    </p>
    
    <h3>clearcoat_normal_dial</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">controls the amount of infuence of the alternate clearcoat normal</p>
      
    </p>
    
    <h3>clearcoat_refractive_index</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.5
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">defines the Fresnel behavior</p>
      
    </p>
    
    <h3>clearcoat_roughness</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.10000000149
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the roughness of the clearcoat lobe</p>
      
    </p>
    
    <h3>clearcoat_thickness</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the thickness of the virtual clearcoat layer. Values &gt; 0 enable absorption</p>
      
    </p>
    
    <h3>independent_clearcoat_normal</h3>
    <p>
      <b>33554432</b>
      
      
        default: None
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">specifies an independent shading normal (normal map) for the clearcoat lobe</p>
      
    </p>
    
    <h3>show_clearcoat</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">enables/disables clearcoat</p>
      
    </p>
    
    <h3>use_independent_clearcoat_normal</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">specifies whether the clearcoat lobe should use an independent normal</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Common attributes</summary>
  <p>
    
    <h3>casts_caustics</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">allows continuation of caustic light paths.</p>
      
    </p>
    
    <h3>presence</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).</p>
      
    </p>
    
    <h3>thin_geometry</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">enables proper shading of infinitely thin geometry such as paper or leaves.</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Emission attributes</summary>
  <p>
    
    <h3>emission</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the energy emitted from this material</p>
      
    </p>
    
    <h3>show_emission</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">enables/disable emission</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Fuzz attributes</summary>
  <p>
    
    <h3>fuzz</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">fuzz mask</p>
      
    </p>
    
    <h3>fuzz_albedo</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Color of the fuzz highlights.</p>
      
    </p>
    
    <h3>fuzz_normal</h3>
    <p>
      <b>33554432</b>
      
      
        default: None
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">specifies an independent shading normal (normal map) for the fuzz lobe</p>
      
    </p>
    
    <h3>fuzz_normal_dial</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">controls the amount of infuence of the alternate fuzz normal</p>
      
    </p>
    
    <h3>fuzz_roughness</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.25
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Lower values result in glancing angle highlights while higher values result in a broad, uniform coverage</p>
      
    </p>
    
    <h3>show_fuzz</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Enables/disables fuzz lobe</p>
      
    </p>
    
    <h3>use_absorbing_fuzz_fibers</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Specify whether dark fuzz fibers absorb energy or transmit it to the layers below.</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Glitter attributes</summary>
  <p>
    
    <h3>glitter</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">enables/disables glitter model (binary 0|1 for plausibility)</p>
      
    </p>
    
    <h3>glitter_LOD_quality</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.5
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">controls quality of glitter at distances where individual flakes cannot be perceived; at lower values, approximation kicks in earlier</p>
      
    </p>
    
    <h3>glitter_approximate_for_secondary_rays</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">use an approximation to shade glitter for non-mirror secondary rays</p>
      
    </p>
    
    <h3>glitter_color_A</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">base flake color (use physical metallic color values)</p>
      
    </p>
    
    <h3>glitter_color_B</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">base flake color (use physical metallic color values)</p>
      
    </p>
    
    <h3>glitter_color_hue_variation</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">introduce hue variation in flake color centered at the base flake color's hue on the hue wheel</p>
      
    </p>
    
    <h3>glitter_color_saturation_variation</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">introduce saturation variation in flake color centered at the base flake color's saturation</p>
      
    </p>
    
    <h3>glitter_color_value_variation</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">introduce value variation in flake color centered at the base flake color's value</p>
      
    </p>
    
    <h3>glitter_compensate_reference_space_deformation</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">(In ReferenceSpace) Compensates for stretch/compression/shear in glitter shapes resulting from animation etc</p>
      
    </p>
    
    <h3>glitter_debug_mode</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | off = 0 (default)
        
          | blend = 1
        
          | color = 2
        
          | averageColor = 3
        
          | footprintArea = 4
        
          | radius = 5
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">developer debug visualization modes</p>
      
    </p>
    
    <h3>glitter_density</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">controls the number of flakes per unit length; larger density packs more flakes into same space</p>
      
    </p>
    
    <h3>glitter_jitter</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Controls how much the flakes are randomly offset from a regular grid</p>
      
    </p>
    
    <h3>glitter_layering_mode</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | physical = 0 (default)
        
          | additive = 1
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">layering mode for glitter on top of the under material. physical: conserves energy and glitter attenuates under material, additive: breaks energy conservation but glitter is never darker than the under material (eg. use case: snow)</p>
      
    </p>
    
    <h3>glitter_randomness</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.5
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">randomness of flake orientation</p>
      
    </p>
    
    <h3>glitter_roughness_A</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.140000000596
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">specular roughness of individual flakes (0 makes flakes mirror-like)</p>
      
    </p>
    
    <h3>glitter_roughness_B</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.140000000596
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">specular roughness of individual flakes (0 makes flakes mirror-like)</p>
      
    </p>
    
    <h3>glitter_seed</h3>
    <p>
      <b>Int</b>
      
      
        default: 0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">The seed for the glitter random number generator</p>
      
    </p>
    
    <h3>glitter_size_A</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">size of the flakes.  Apparent flake size may vary based on how much the flake spheres intersect the surface</p>
      
    </p>
    
    <h3>glitter_size_B</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">size of the flakes.  Apparent flake size may vary based on how much the flake spheres intersect the surface</p>
      
    </p>
    
    <h3>glitter_space</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | object = 4
        
          | reference = 5 (default)
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">The space to calculate the worley noise in, defaults to reference space</p>
      
    </p>
    
    <h3>glitter_style_A_frequency</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">0 implies none of this style, 1 implies all the flakes will get this style</p>
      
    </p>
    
    <h3>glitter_style_B_frequency</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">0 implies none of this style, 1 implies all the flakes will get this style</p>
      
    </p>
    
    <h3>glitter_texture_A</h3>
    <p>
      <b>String</b>
      <i>filename</i>
      
        default: 
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
      
    </p>
    
    <h3>glitter_texture_B</h3>
    <p>
      <b>String</b>
      <i>filename</i>
      
        default: 
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
      
    </p>
    
    <h3>glitter_texture_orientation_randomness</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.15000000596
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">randomly orient each texture</p>
      
    </p>
    
    <h3>show_glitter</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Enables/disables glitter lobes</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Iridescence attributes</summary>
  <p>
    
    <h3>iridescence</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">controls the strength of the iridescence effect</p>
      
    </p>
    
    <h3>iridescence_apply_to</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | primary specular = 0 (default)
        
          | clearcoat/moisture specular = 1
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Apply iridescence to primary specular lobe or clearcoat/moisture lobe</p>
      
    </p>
    
    <h3>iridescence_at_0_incidence</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Iridescence effect at 0 degree viewing angle</p>
      
    </p>
    
    <h3>iridescence_at_90_incidence</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Iridescence effect at 90 degree viewing angle</p>
      
    </p>
    
    <h3>iridescence_color_control</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | use hue interpolation = 0 (default)
        
          | use ramp = 1
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">use hue interpolation: automatically cycles through hue wheel, use ramp: user specified color ramp</p>
      
    </p>
    
    <h3>iridescence_colors</h3>
    <p>
      <b>RgbVector</b>
      
      
        default: [[ 1, 0, 0 ], [ 1, 1, 0 ], [ 0, 1, 0 ], [ 0, 1, 1 ], [ 0, 0, 1 ], [ 1, 0, 1 ], [ 1, 0, 0 ]]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">List of colors on the ramp</p>
      
    </p>
    
    <h3>iridescence_exponent</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Tightens or broadens the distribution of colors</p>
      
    </p>
    
    <h3>iridescence_flip_hue_direction</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">flip interpolation around the hue wheel to counter-clockwise direction</p>
      
    </p>
    
    <h3>iridescence_interpolations</h3>
    <p>
      <b>IntVector</b>
      
      
        default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |

			Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6</p>
      
    </p>
    
    <h3>iridescence_positions</h3>
    <p>
      <b>FloatVector</b>
      
      
        default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">ramp positions</p>
      
    </p>
    
    <h3>iridescence_primary_color</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
      
        default: [ 1, 0, 0 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">First color to interpolate from around the hue wheel</p>
      
    </p>
    
    <h3>iridescence_ramp_interpolation_mode</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | RGB = 0 (default)
        
          | HSV = 1
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">RGB: lerp in RGB space which matches UI preview but can lose saturation, HSV: lerp in HSV space which preserves saturation</p>
      
    </p>
    
    <h3>iridescence_secondary_color</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
      
        default: [ 1, 0, 0 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Second color to interpolate to around the hue wheel</p>
      
    </p>
    
    <h3>iridescence_thickness</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Controls how much the color spectrum is repeated</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Normal attributes</summary>
  <p>
    
    <h3>input_normal</h3>
    <p>
      <b>33554432</b>
      
      
        default: None
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">specifies an alternate shading normal in the tangent frame (normal map)</p>
      
    </p>
    
    <h3>input_normal_dial</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">controls the amount of influence of the alternate normal</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Normal Anti-aliasing attributes</summary>
  <p>
    
    <h3>normal_AA_dial</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Controls the amount roughness compensation from the normal map AA strategy.</p>
      
    </p>
    
    <h3>normal_AA_strategy</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | none = 0 (default)
        
          | toksvig = 1
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Normal map anti-aliasing strategy to use - 'none' uses regular mip-mapping, 'toksvig' increases specular roughness corresponding to the geometric details filtered out because of mip-mapping.</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Specular attributes</summary>
  <p>
    
    <h3>anisotropy</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">controls the shape of the primary reflection</p>
      
    </p>
    
    <h3>metallic_color</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the overall reflection color, defines Fresnel behavior</p>
      
    </p>
    
    <h3>metallic_edge_color</h3>
    <p>
      <b>Rgb</b>
      <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the reflection color at grazing angles, defines Fresnel behavior</p>
      
    </p>
    
    <h3>roughness</h3>
    <p>
      <b>Float</b>
      <i>bindable</i>
      
        default: 0.5
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">the roughness of the surface (currently only affects reflection)</p>
      
    </p>
    
    <h3>shading_tangent</h3>
    <p>
      <b>Vec2f</b>
      <i>bindable</i>
      
        default: [ 1, 0 ]
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">controls the orientation of anistropy</p>
      
    </p>
    
    <h3>show_specular</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">enables/disables specular reflections</p>
      
    </p>
    
    <h3>specular_model</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | Beckmann = 0
        
          | GGX = 1 (default)
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">sets the normalized distribution function for specular.  GGX is currently isotropic only</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>extra_aovs</h3>
    <p>
      <b>Map</b>
      
      
        default: None
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
      
    </p>
    
    <h3>label</h3>
    <p>
      <b>String</b>
      
      
        default: 
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">label used in material and light aovs</p>
      
    </p>
    
    <h3>priority</h3>
    <p>
      <b>Int</b>
      
      
        default: 0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      
    </p>
    
  </p>
</details>

