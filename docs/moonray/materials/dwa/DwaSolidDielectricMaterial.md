---
title: DwaSolidDielectricMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DwaSolidDielectricMaterial
**ROOTSHADER MATERIAL SHADER DWABASELAYERABLE**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Advanced attributes</summary>
  <p>
  
  <h3>specular</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>enables/disables specular reflections (binary 0|1 for plausibility)</p>
  
  
  <h3>sss_trace_set</h3>
  <b>Traceset</b>  
  
  default: None
  
  <p>Set of geometries that contribute neighboring subsurface points. By default, only the geometry associated with this material contributes to subsurface. If you want adjacent geometry with different material to contribute as well, specify all those parts here.</p>
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Clearcoat attributes</summary>
  <p>
  
  <h3>clearcoat</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>enables/disables clearcoat (binary 0|1 for plausibility)</p>
  
  
  <h3>clearcoat_attenuation_color</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 0.5, 0.5, 0.5 ]
  
  <p>the attenuation color of the clearcoat when 'cleacoat thickness' > 0</p>
  
  
  <h3>clearcoat_bending</h3>
  <b>Bool</b>  
  
  default: True
  
  <p>(advanced, recommended ON) bends rays based on the clearcoat-refractive-index before evaluating the lobes under clearcoat</p>
  
  
  <h3>clearcoat_model</h3>
  <b>Int</b>  *enum*
  
  - Beckmann = 0
  
  - GGX = 1 (default)
  
  
  <p>sets the normalized distribution function for clearcoat.  GGX is currently isotropic only</p>
  
  
  <h3>clearcoat_normal_dial</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>controls the amount of infuence of the alternate clearcoat normal</p>
  
  
  <h3>clearcoat_refractive_index</h3>
  <b>Float</b>  
  
  default: 1.5
  
  <p>defines the Fresnel behavior</p>
  
  
  <h3>clearcoat_roughness</h3>
  <b>Float</b>  *bindable*
  
  default: 0.10000000149
  
  <p>the roughness of the clearcoat lobe</p>
  
  
  <h3>clearcoat_thickness</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  <p>the thickness of the virtual clearcoat layer. Values > 0 enable absorption</p>
  
  
  <h3>independent_clearcoat_normal</h3>
  <b>33554432</b>  
  
  default: None
  
  <p>specifies an independent shading normal (normal map) for the clearcoat lobe</p>
  
  
  <h3>show_clearcoat</h3>
  <b>Bool</b>  
  
  default: False
  
  <p>enables/disables clearcoat</p>
  
  
  <h3>use_independent_clearcoat_normal</h3>
  <b>Bool</b>  
  
  default: False
  
  <p>specifies whether the clearcoat lobe should use an independent normal</p>
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Common attributes</summary>
  <p>
  
  <h3>casts_caustics</h3>
  <b>Bool</b>  
  
  default: False
  
  <p>allows continuation of caustic light paths.</p>
  
  
  <h3>presence</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).</p>
  
  
  <h3>thin_geometry</h3>
  <b>Bool</b>  
  
  default: False
  
  <p>enables proper shading of infinitely thin geometry such as paper or leaves.</p>
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Diffuse attributes</summary>
  <p>
  
  <h3>albedo</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  <p>the overall surface color as seen from a distance (ie. diffuse color)</p>
  
  
  <h3>bssrdf</h3>
  <b>Int</b>  *enum*
  
  - normalized diffusion = 0 (default)
  
  - dipole = 1
  
  - random walk = 2
  
  
  <p>0 for NormalizedDiffuse, 1 for Dipole, 2 for random walk</p>
  
  
  <h3>diffuse_roughness</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  <p>Roughness of the diffuse shading.  If the value is zero a Lambertian model is used.  If it's above zero the Oren Nayar model is used.   Not compatible with subsurface scattering.</p>
  
  
  <h3>diffuse_transmission</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>multiplier on the amount of light that is transmitted through the surface.</p>
  
  
  <h3>diffuse_transmission_blending_behavior</h3>
  <b>Int</b>  *enum*
  
  - RGB = 0
  
  - Monochromatic = 1 (default)
  
  
  <p>Controls how diffuse transmission color attenuates diffuse reflection</p>
  
  
  <h3>diffuse_transmission_color</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 0, 0, 0 ]
  
  <p>the color/amount of light that is transmitted through the surface.</p>
  
  
  <h3>enable_sss_input_normal</h3>
  <b>Bool</b>  
  
  default: False
  
  <p>enables sampling the normal map for sss samples. More accurate but potentially expensive</p>
  
  
  <h3>resolve_self_intersections</h3>
  <b>Bool</b>  
  
  default: True
  
  <p>tries to resolve self-intersecting geometry automatically by only evaluating 'exiting' intersections for subsurface evaluations</p>
  
  
  <h3>scattering_color</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  <p>the subsurface scattering 'falloff' color</p>
  
  
  <h3>scattering_radius</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  <p>the distance the light scatters beneath the surface. When 0 surface diffuse (lambertian or toon) is used</p>
  
  
  <h3>show_diffuse</h3>
  <b>Bool</b>  
  
  default: True
  
  <p>enables/disables diffuse reflectance</p>
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Emission attributes</summary>
  <p>
  
  <h3>emission</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  <p>the energy emitted from this material</p>
  
  
  <h3>show_emission</h3>
  <b>Bool</b>  
  
  default: False
  
  <p>enables/disable emission</p>
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Fuzz attributes</summary>
  <p>
  
  <h3>fuzz</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>fuzz mask</p>
  
  
  <h3>fuzz_albedo</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  <p>Color of the fuzz highlights.</p>
  
  
  <h3>fuzz_normal</h3>
  <b>33554432</b>  
  
  default: None
  
  <p>specifies an independent shading normal (normal map) for the fuzz lobe</p>
  
  
  <h3>fuzz_normal_dial</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>controls the amount of infuence of the alternate fuzz normal</p>
  
  
  <h3>fuzz_roughness</h3>
  <b>Float</b>  *bindable*
  
  default: 0.25
  
  <p>Lower values result in glancing angle highlights while higher values result in a broad, uniform coverage</p>
  
  
  <h3>show_fuzz</h3>
  <b>Bool</b>  
  
  default: False
  
  <p>Enables/disables fuzz lobe</p>
  
  
  <h3>use_absorbing_fuzz_fibers</h3>
  <b>Bool</b>  
  
  default: False
  
  <p>Specify whether dark fuzz fibers absorb energy or transmit it to the layers below.</p>
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Glitter attributes</summary>
  <p>
  
  <h3>glitter</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>enables/disables glitter model (binary 0|1 for plausibility)</p>
  
  
  <h3>glitter_LOD_quality</h3>
  <b>Float</b>  
  
  default: 0.5
  
  <p>controls quality of glitter at distances where individual flakes cannot be perceived; at lower values, approximation kicks in earlier</p>
  
  
  <h3>glitter_approximate_for_secondary_rays</h3>
  <b>Bool</b>  
  
  default: True
  
  <p>use an approximation to shade glitter for non-mirror secondary rays</p>
  
  
  <h3>glitter_color_A</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  <p>base flake color (use physical metallic color values)</p>
  
  
  <h3>glitter_color_B</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  <p>base flake color (use physical metallic color values)</p>
  
  
  <h3>glitter_color_hue_variation</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  <p>introduce hue variation in flake color centered at the base flake color's hue on the hue wheel</p>
  
  
  <h3>glitter_color_saturation_variation</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  <p>introduce saturation variation in flake color centered at the base flake color's saturation</p>
  
  
  <h3>glitter_color_value_variation</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  <p>introduce value variation in flake color centered at the base flake color's value</p>
  
  
  <h3>glitter_compensate_reference_space_deformation</h3>
  <b>Bool</b>  
  
  default: True
  
  <p>(In ReferenceSpace) Compensates for stretch/compression/shear in glitter shapes resulting from animation etc</p>
  
  
  <h3>glitter_debug_mode</h3>
  <b>Int</b>  *enum*
  
  - off = 0 (default)
  
  - blend = 1
  
  - color = 2
  
  - averageColor = 3
  
  - footprintArea = 4
  
  - radius = 5
  
  
  <p>developer debug visualization modes</p>
  
  
  <h3>glitter_density</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>controls the number of flakes per unit length; larger density packs more flakes into same space</p>
  
  
  <h3>glitter_jitter</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>Controls how much the flakes are randomly offset from a regular grid</p>
  
  
  <h3>glitter_layering_mode</h3>
  <b>Int</b>  *enum*
  
  - physical = 0 (default)
  
  - additive = 1
  
  
  <p>layering mode for glitter on top of the under material. physical: conserves energy and glitter attenuates under material, additive: breaks energy conservation but glitter is never darker than the under material (eg. use case: snow)</p>
  
  
  <h3>glitter_randomness</h3>
  <b>Float</b>  
  
  default: 0.5
  
  <p>randomness of flake orientation</p>
  
  
  <h3>glitter_roughness_A</h3>
  <b>Float</b>  
  
  default: 0.140000000596
  
  <p>specular roughness of individual flakes (0 makes flakes mirror-like)</p>
  
  
  <h3>glitter_roughness_B</h3>
  <b>Float</b>  
  
  default: 0.140000000596
  
  <p>specular roughness of individual flakes (0 makes flakes mirror-like)</p>
  
  
  <h3>glitter_seed</h3>
  <b>Int</b>  
  
  default: 0
  
  <p>The seed for the glitter random number generator</p>
  
  
  <h3>glitter_size_A</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>size of the flakes.  Apparent flake size may vary based on how much the flake spheres intersect the surface</p>
  
  
  <h3>glitter_size_B</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>size of the flakes.  Apparent flake size may vary based on how much the flake spheres intersect the surface</p>
  
  
  <h3>glitter_space</h3>
  <b>Int</b>  *enum*
  
  - object = 4
  
  - reference = 5 (default)
  
  
  <p>The space to calculate the worley noise in, defaults to reference space</p>
  
  
  <h3>glitter_style_A_frequency</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>0 implies none of this style, 1 implies all the flakes will get this style</p>
  
  
  <h3>glitter_style_B_frequency</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  <p>0 implies none of this style, 1 implies all the flakes will get this style</p>
  
  
  <h3>glitter_texture_A</h3>
  <b>String</b>  *filename*
  
  default: 
  
  <p>filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
  
  
  <h3>glitter_texture_B</h3>
  <b>String</b>  *filename*
  
  default: 
  
  <p>filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
  
  
  <h3>glitter_texture_orientation_randomness</h3>
  <b>Float</b>  
  
  default: 0.15000000596
  
  <p>randomly orient each texture</p>
  
  
  <h3>show_glitter</h3>
  <b>Bool</b>  
  
  default: False
  
  <p>Enables/disables glitter lobes</p>
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Iridescence attributes</summary>
  <p>
  
  <h3>iridescence</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  <p>controls the strength of the iridescence effect</p>
  
  
  <h3>iridescence_apply_to</h3>
  <b>Int</b>  *enum*
  
  - primary specular = 0 (default)
  
  - clearcoat/moisture specular = 1
  
  
  <p>Apply iridescence to primary specular lobe or clearcoat/moisture lobe</p>
  
  
  <h3>iridescence_at_0_incidence</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>Iridescence effect at 0 degree viewing angle</p>
  
  
  <h3>iridescence_at_90_incidence</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>Iridescence effect at 90 degree viewing angle</p>
  
  
  <h3>iridescence_color_control</h3>
  <b>Int</b>  *enum*
  
  - use hue interpolation = 0 (default)
  
  - use ramp = 1
  
  
  <p>use hue interpolation: automatically cycles through hue wheel, use ramp: user specified color ramp</p>
  
  
  <h3>iridescence_colors</h3>
  <b>RgbVector</b>  
  
  default: [[ 1, 0, 0 ], [ 1, 1, 0 ], [ 0, 1, 0 ], [ 0, 1, 1 ], [ 0, 0, 1 ], [ 1, 0, 1 ], [ 1, 0, 0 ]]
  
  <p>List of colors on the ramp</p>
  
  
  <h3>iridescence_exponent</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>Tightens or broadens the distribution of colors</p>
  
  
  <h3>iridescence_flip_hue_direction</h3>
  <b>Bool</b>  
  
  default: False
  
  <p>flip interpolation around the hue wheel to counter-clockwise direction</p>
  
  
  <h3>iridescence_interpolations</h3>
  <b>IntVector</b>  
  
  default: <scene_rdl2.__scene_rdl2__.IntVector object at >
  
  <p>None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |

			Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6</p>
  
  
  <h3>iridescence_positions</h3>
  <b>FloatVector</b>  
  
  default: <scene_rdl2.__scene_rdl2__.FloatVector object at >
  
  <p>ramp positions</p>
  
  
  <h3>iridescence_primary_color</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 0, 0 ]
  
  <p>First color to interpolate from around the hue wheel</p>
  
  
  <h3>iridescence_ramp_interpolation_mode</h3>
  <b>Int</b>  *enum*
  
  - RGB = 0 (default)
  
  - HSV = 1
  
  
  <p>RGB: lerp in RGB space which matches UI preview but can lose saturation, HSV: lerp in HSV space which preserves saturation</p>
  
  
  <h3>iridescence_secondary_color</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 0, 0 ]
  
  <p>Second color to interpolate to around the hue wheel</p>
  
  
  <h3>iridescence_thickness</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>Controls how much the color spectrum is repeated</p>
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Normal attributes</summary>
  <p>
  
  <h3>input_normal</h3>
  <b>33554432</b>  
  
  default: None
  
  <p>specifies an alternate shading normal in the tangent frame (normal map)</p>
  
  
  <h3>input_normal_dial</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>controls the amount of influence of the alternate normal</p>
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Normal Anti-aliasing attributes</summary>
  <p>
  
  <h3>normal_AA_dial</h3>
  <b>Float</b>  
  
  default: 1.0
  
  <p>Controls the amount roughness compensation from the normal map AA strategy.</p>
  
  
  <h3>normal_AA_strategy</h3>
  <b>Int</b>  *enum*
  
  - none = 0 (default)
  
  - toksvig = 1
  
  
  <p>Normal map anti-aliasing strategy to use - 'none' uses regular mip-mapping, 'toksvig' increases specular roughness corresponding to the geometric details filtered out because of mip-mapping.</p>
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Specular attributes</summary>
  <p>
  
  <h3>anisotropy</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  <p>controls the shape of the primary reflection</p>
  
  
  <h3>refractive_index</h3>
  <b>Float</b>  
  
  default: 1.5
  
  <p>defines the Fresnel behavior, (affects reflection and refraction)</p>
  
  
  <h3>roughness</h3>
  <b>Float</b>  *bindable*
  
  default: 0.5
  
  <p>the roughness of the surface (currently only affects reflection)</p>
  
  
  <h3>shading_tangent</h3>
  <b>Vec2f</b>  *bindable*
  
  default: [ 1, 0 ]
  
  <p>controls the orientation of anistropy</p>
  
  
  <h3>show_specular</h3>
  <b>Bool</b>  
  
  default: True
  
  <p>enables/disables specular reflections</p>
  
  
  <h3>specular_model</h3>
  <b>Int</b>  *enum*
  
  - Beckmann = 0
  
  - GGX = 1 (default)
  
  
  <p>sets the normalized distribution function for specular.  GGX is currently isotropic only</p>
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
  
  <h3>extra_aovs</h3>
  <b>Map</b>  
  
  default: None
  
  <p>Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
  
  
  <h3>label</h3>
  <b>String</b>  
  
  default: 
  
  <p>label used in material and light aovs</p>
  
  
  <h3>priority</h3>
  <b>Int</b>  
  
  default: 0
  
  <p>The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
  
  
  </p>
</details>

