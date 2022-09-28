---
title: DwaFabricMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DwaFabricMaterial
**ROOTSHADER MATERIAL SHADER DWABASELAYERABLE**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Common attributes</summary>
  <p>
    
    <h3>casts_caustics</h3>
    <b>Bool</b>
    
      
        default: False
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">allows continuation of caustic light paths.</p>
      
    
    <h3>presence</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).</p>
      
    
    <h3>thin_geometry</h3>
    <b>Bool</b>
    
      
        default: False
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">enables proper shading of infinitely thin geometry such as paper or leaves.</p>
      
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Diffuse attributes</summary>
  <p>
    
    <h3>albedo</h3>
    <b>Rgb</b>
    <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">the overall surface color as seen from a distance (ie. diffuse color)</p>
      
    
    <h3>diffuse_roughness</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 0.0
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">Roughness of the diffuse shading.  If the value is zero a Lambertian model is used.  If it's above zero the Oren Nayar model is used.   Not compatible with subsurface scattering.</p>
      
    
    <h3>diffuse_transmission</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">multiplier on the amount of light that is transmitted through the surface.</p>
      
    
    <h3>diffuse_transmission_blending_behavior</h3>
    <b>Int</b>
    <i>enum</i>
      
          | RGB = 0
        
          | Monochromatic = 1 (default)
        
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">Controls how diffuse transmission color attenuates diffuse reflection</p>
      
    
    <h3>diffuse_transmission_color</h3>
    <b>Rgb</b>
    <i>bindable</i>
      
        default: [ 0, 0, 0 ]
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">the color/amount of light that is transmitted through the surface.</p>
      
    
    <h3>fabric_diffuse_scattering</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 0.20000000298
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">Amount of diffuse to mix in fabric. A value of 1 means fully diffuse fabric.</p>
      
    
    <h3>show_diffuse</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">enables/disables diffuse reflectance</p>
      
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Emission attributes</summary>
  <p>
    
    <h3>emission</h3>
    <b>Rgb</b>
    <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">the energy emitted from this material</p>
      
    
    <h3>show_emission</h3>
    <b>Bool</b>
    
      
        default: False
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">enables/disable emission</p>
      
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Fabric attributes</summary>
  <p>
    
    <h3>show_specular</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">Enables/disables specular fabric lobes</p>
      
    
    <h3>use_UVs_for_thread_direction</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">Use UV texture coordinates to compute thread direction (along dPds). Switch OFF for seamless camera aligned thread direction.  The warp_thread_direction parameter rotates this direction in tangent space.</p>
      
    
    <h3>use_independent_weft_attributes</h3>
    <b>Bool</b>
    
      
        default: False
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">Use a separate set of attributes for the 'weft' thread specular response.</p>
      
    
    <h3>warp_color</h3>
    <b>Rgb</b>
    <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">Color of the fabric specular highlights. Or if 'use independent weft attributes' is 'true,' just the color of the fabric specular highlights of the warp threads.</p>
      
    
    <h3>warp_roughness</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 0.75
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">Roughness of the fabric specular highlights. Or if 'use independent weft attributes' is 'true,' just the roughness of the fabric specular highlights of the warp threads.</p>
      
    
    <h3>weft_color</h3>
    <b>Rgb</b>
    <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">Color of the fabric specular highlights from the weft threads.</p>
      
    
    <h3>weft_roughness</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 0.75
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">Roughness of the fabric specular highlights from the weft threads.</p>
      
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Fuzz attributes</summary>
  <p>
    
    <h3>fuzz</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">fuzz mask</p>
      
    
    <h3>fuzz_albedo</h3>
    <b>Rgb</b>
    <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">Color of the fuzz highlights.</p>
      
    
    <h3>fuzz_normal</h3>
    <b>33554432</b>
    
      
        default: None
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">specifies an independent shading normal (normal map) for the fuzz lobe</p>
      
    
    <h3>fuzz_normal_dial</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">controls the amount of infuence of the alternate fuzz normal</p>
      
    
    <h3>fuzz_roughness</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 0.25
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">Lower values result in glancing angle highlights while higher values result in a broad, uniform coverage</p>
      
    
    <h3>show_fuzz</h3>
    <b>Bool</b>
    
      
        default: False
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">Enables/disables fuzz lobe</p>
      
    
    <h3>use_absorbing_fuzz_fibers</h3>
    <b>Bool</b>
    
      
        default: False
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">Specify whether dark fuzz fibers absorb energy or transmit it to the layers below.</p>
      
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Glitter attributes</summary>
  <p>
    
    <h3>glitter</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">enables/disables glitter model (binary 0|1 for plausibility)</p>
      
    
    <h3>glitter_LOD_quality</h3>
    <b>Float</b>
    
      
        default: 0.5
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">controls quality of glitter at distances where individual flakes cannot be perceived; at lower values, approximation kicks in earlier</p>
      
    
    <h3>glitter_approximate_for_secondary_rays</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">use an approximation to shade glitter for non-mirror secondary rays</p>
      
    
    <h3>glitter_color_A</h3>
    <b>Rgb</b>
    <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">base flake color (use physical metallic color values)</p>
      
    
    <h3>glitter_color_B</h3>
    <b>Rgb</b>
    <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">base flake color (use physical metallic color values)</p>
      
    
    <h3>glitter_color_hue_variation</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 0.0
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">introduce hue variation in flake color centered at the base flake color's hue on the hue wheel</p>
      
    
    <h3>glitter_color_saturation_variation</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 0.0
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">introduce saturation variation in flake color centered at the base flake color's saturation</p>
      
    
    <h3>glitter_color_value_variation</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 0.0
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">introduce value variation in flake color centered at the base flake color's value</p>
      
    
    <h3>glitter_compensate_reference_space_deformation</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">(In ReferenceSpace) Compensates for stretch/compression/shear in glitter shapes resulting from animation etc</p>
      
    
    <h3>glitter_debug_mode</h3>
    <b>Int</b>
    <i>enum</i>
      
          | off = 0 (default)
        
          | blend = 1
        
          | color = 2
        
          | averageColor = 3
        
          | footprintArea = 4
        
          | radius = 5
        
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">developer debug visualization modes</p>
      
    
    <h3>glitter_density</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">controls the number of flakes per unit length; larger density packs more flakes into same space</p>
      
    
    <h3>glitter_jitter</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">Controls how much the flakes are randomly offset from a regular grid</p>
      
    
    <h3>glitter_layering_mode</h3>
    <b>Int</b>
    <i>enum</i>
      
          | physical = 0 (default)
        
          | additive = 1
        
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">layering mode for glitter on top of the under material. physical: conserves energy and glitter attenuates under material, additive: breaks energy conservation but glitter is never darker than the under material (eg. use case: snow)</p>
      
    
    <h3>glitter_randomness</h3>
    <b>Float</b>
    
      
        default: 0.5
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">randomness of flake orientation</p>
      
    
    <h3>glitter_roughness_A</h3>
    <b>Float</b>
    
      
        default: 0.140000000596
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">specular roughness of individual flakes (0 makes flakes mirror-like)</p>
      
    
    <h3>glitter_roughness_B</h3>
    <b>Float</b>
    
      
        default: 0.140000000596
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">specular roughness of individual flakes (0 makes flakes mirror-like)</p>
      
    
    <h3>glitter_seed</h3>
    <b>Int</b>
    
      
        default: 0
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">The seed for the glitter random number generator</p>
      
    
    <h3>glitter_size_A</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">size of the flakes.  Apparent flake size may vary based on how much the flake spheres intersect the surface</p>
      
    
    <h3>glitter_size_B</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">size of the flakes.  Apparent flake size may vary based on how much the flake spheres intersect the surface</p>
      
    
    <h3>glitter_space</h3>
    <b>Int</b>
    <i>enum</i>
      
          | object = 4
        
          | reference = 5 (default)
        
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">The space to calculate the worley noise in, defaults to reference space</p>
      
    
    <h3>glitter_style_A_frequency</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">0 implies none of this style, 1 implies all the flakes will get this style</p>
      
    
    <h3>glitter_style_B_frequency</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 0.0
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">0 implies none of this style, 1 implies all the flakes will get this style</p>
      
    
    <h3>glitter_texture_A</h3>
    <b>String</b>
    <i>filename</i>
      
        default: 
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
      
    
    <h3>glitter_texture_B</h3>
    <b>String</b>
    <i>filename</i>
      
        default: 
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
      
    
    <h3>glitter_texture_orientation_randomness</h3>
    <b>Float</b>
    
      
        default: 0.15000000596
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">randomly orient each texture</p>
      
    
    <h3>show_glitter</h3>
    <b>Bool</b>
    
      
        default: False
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">Enables/disables glitter lobes</p>
      
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Normal attributes</summary>
  <p>
    
    <h3>input_normal</h3>
    <b>33554432</b>
    
      
        default: None
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">specifies an alternate shading normal in the tangent frame (normal map)</p>
      
    
    <h3>input_normal_dial</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">controls the amount of influence of the alternate normal</p>
      
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Threads attributes</summary>
  <p>
    
    <h3>warp_thread_coverage</h3>
    <b>Float</b>
    
      
        default: 0.75
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">When set to 1, creates specular highlights only relative to the warp thread direction. When less than one, starts acting like a 'woven' fabric with specular contributions added in by a corresponding 'weft' thread direction, perpendicular to the 'warp' thread direction.</p>
      
    
    <h3>warp_thread_direction</h3>
    <b>Vec3f</b>
    <i>bindable</i>
      
        default: [ 1, 1, 0 ]
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">Direction of the major/warp thread for the fabric. The fabric highlights will be relative to this direction.</p>
      
    
    <h3>warp_thread_elevation</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 0.0
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">This attribute can be used to 'elevate/rotate' the threads from their default direction. When laying flat on the surface (thread_direction.z=0), a value around 45 works well for 'silky' looks. Range - -90, +90. When threads are upright (thread_direction.z=1), this attribute can be used to 'dishevel' the threads and create a 'velvety' look (see wiki).</p>
      
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>extra_aovs</h3>
    <b>Map</b>
    
      
        default: None
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
      
    
    <h3>label</h3>
    <b>String</b>
    
      
        default: 
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">label used in material and light aovs</p>
      
    
    <h3>priority</h3>
    <b>Int</b>
    
      
        default: 0
      
        <p class=jekyll-theme-minimal scene-class-attr-comment">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      
    
  </p>
</details>

