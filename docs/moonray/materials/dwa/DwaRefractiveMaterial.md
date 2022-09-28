---
title: DwaRefractiveMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DwaRefractiveMaterial
**ROOTSHADER MATERIAL SHADER DWABASELAYERABLE**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Advanced attributes</summary>
  <p>
    
    <h3>specular</h3>
    <b>Float</b>
    <span class="emphasized">bindable</span>
    
    default: 1.0
    
    <p>enables/disables specular reflections (binary 0|1 for plausibility)</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Clearcoat attributes</summary>
  <p>
    
    <h3>clearcoat</h3>
    <b>Float</b>
    <span class="emphasized">bindable</span>
    
    default: 1.0
    
    <p>enables/disables clearcoat (binary 0|1 for plausibility)</p>
    
    
    <h3>clearcoat_attenuation_color</h3>
    <b>Rgb</b>
    <span class="emphasized">bindable</span>
    
    default: [ 0.5, 0.5, 0.5 ]
    
    <p>the attenuation color of the clearcoat when 'cleacoat thickness' > 0</p>
    
    
    <h3>clearcoat_bending</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>(advanced, recommended ON) bends rays based on the clearcoat-refractive-index before evaluating the lobes under clearcoat</p>
    
    
    <h3>clearcoat_model</h3>
    <b>Int</b>
    <span class="emphasized">enum</span>
    
    - Beckmann = 0
    
    - GGX = 1 (default)
    
    
    <p>sets the normalized distribution function for clearcoat.  GGX is currently isotropic only</p>
    
    
    <h3>clearcoat_normal_dial</h3>
    <b>Float</b>
    <span class="emphasized">bindable</span>
    
    default: 1.0
    
    <p>controls the amount of infuence of the alternate clearcoat normal</p>
    
    
    <h3>clearcoat_refractive_index</h3>
    <b>Float</b>
    
    
    default: 1.5
    
    <p>defines the Fresnel behavior</p>
    
    
    <h3>clearcoat_roughness</h3>
    <b>Float</b>
    <span class="emphasized">bindable</span>
    
    default: 0.10000000149
    
    <p>the roughness of the clearcoat lobe</p>
    
    
    <h3>clearcoat_thickness</h3>
    <b>Float</b>
    <span class="emphasized">bindable</span>
    
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
    <b>Float</b>
    <span class="emphasized">bindable</span>
    
    default: 1.0
    
    <p>controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).</p>
    
    
    <h3>thin_geometry</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>enables proper shading of infinitely thin geometry such as paper or leaves.</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Emission attributes</summary>
  <p>
    
    <h3>emission</h3>
    <b>Rgb</b>
    <span class="emphasized">bindable</span>
    
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
    <b>Float</b>
    <span class="emphasized">bindable</span>
    
    default: 1.0
    
    <p>fuzz mask</p>
    
    
    <h3>fuzz_albedo</h3>
    <b>Rgb</b>
    <span class="emphasized">bindable</span>
    
    default: [ 1, 1, 1 ]
    
    <p>Color of the fuzz highlights.</p>
    
    
    <h3>fuzz_normal</h3>
    <b>33554432</b>
    
    
    default: None
    
    <p>specifies an independent shading normal (normal map) for the fuzz lobe</p>
    
    
    <h3>fuzz_normal_dial</h3>
    <b>Float</b>
    <span class="emphasized">bindable</span>
    
    default: 1.0
    
    <p>controls the amount of infuence of the alternate fuzz normal</p>
    
    
    <h3>fuzz_roughness</h3>
    <b>Float</b>
    <span class="emphasized">bindable</span>
    
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
  <summary class="jekyll-theme-minimal scene-class-attr-group">Iridescence attributes</summary>
  <p>
    
    <h3>iridescence</h3>
    <b>Float</b>
    <span class="emphasized">bindable</span>
    
    default: 0.0
    
    <p>controls the strength of the iridescence effect</p>
    
    
    <h3>iridescence_apply_to</h3>
    <b>Int</b>
    <span class="emphasized">enum</span>
    
    - primary specular = 0 (default)
    
    - clearcoat/moisture specular = 1
    
    
    <p>Apply iridescence to primary specular lobe or clearcoat/moisture lobe</p>
    
    
    <h3>iridescence_at_0_incidence</h3>
    <b>Float</b>
    <span class="emphasized">bindable</span>
    
    default: 1.0
    
    <p>Iridescence effect at 0 degree viewing angle</p>
    
    
    <h3>iridescence_at_90_incidence</h3>
    <b>Float</b>
    <span class="emphasized">bindable</span>
    
    default: 1.0
    
    <p>Iridescence effect at 90 degree viewing angle</p>
    
    
    <h3>iridescence_color_control</h3>
    <b>Int</b>
    <span class="emphasized">enum</span>
    
    - use hue interpolation = 0 (default)
    
    - use ramp = 1
    
    
    <p>use hue interpolation: automatically cycles through hue wheel, use ramp: user specified color ramp</p>
    
    
    <h3>iridescence_colors</h3>
    <b>RgbVector</b>
    
    
    default: [[ 1, 0, 0 ], [ 1, 1, 0 ], [ 0, 1, 0 ], [ 0, 1, 1 ], [ 0, 0, 1 ], [ 1, 0, 1 ], [ 1, 0, 0 ]]
    
    <p>List of colors on the ramp</p>
    
    
    <h3>iridescence_exponent</h3>
    <b>Float</b>
    <span class="emphasized">bindable</span>
    
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
    <b>Rgb</b>
    <span class="emphasized">bindable</span>
    
    default: [ 1, 0, 0 ]
    
    <p>First color to interpolate from around the hue wheel</p>
    
    
    <h3>iridescence_ramp_interpolation_mode</h3>
    <b>Int</b>
    <span class="emphasized">enum</span>
    
    - RGB = 0 (default)
    
    - HSV = 1
    
    
    <p>RGB: lerp in RGB space which matches UI preview but can lose saturation, HSV: lerp in HSV space which preserves saturation</p>
    
    
    <h3>iridescence_secondary_color</h3>
    <b>Rgb</b>
    <span class="emphasized">bindable</span>
    
    default: [ 1, 0, 0 ]
    
    <p>Second color to interpolate to around the hue wheel</p>
    
    
    <h3>iridescence_thickness</h3>
    <b>Float</b>
    <span class="emphasized">bindable</span>
    
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
    <b>Float</b>
    <span class="emphasized">bindable</span>
    
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
    <b>Int</b>
    <span class="emphasized">enum</span>
    
    - none = 0 (default)
    
    - toksvig = 1
    
    
    <p>Normal map anti-aliasing strategy to use - 'none' uses regular mip-mapping, 'toksvig' increases specular roughness corresponding to the geometric details filtered out because of mip-mapping.</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Specular attributes</summary>
  <p>
    
    <h3>anisotropy</h3>
    <b>Float</b>
    <span class="emphasized">bindable</span>
    
    default: 0.0
    
    <p>controls the shape of the primary reflection</p>
    
    
    <h3>refractive_index</h3>
    <b>Float</b>
    
    
    default: 1.5
    
    <p>defines the Fresnel behavior, (affects reflection and refraction)</p>
    
    
    <h3>roughness</h3>
    <b>Float</b>
    <span class="emphasized">bindable</span>
    
    default: 0.5
    
    <p>the roughness of the surface (currently only affects reflection)</p>
    
    
    <h3>shading_tangent</h3>
    <b>Vec2f</b>
    <span class="emphasized">bindable</span>
    
    default: [ 1, 0 ]
    
    <p>controls the orientation of anistropy</p>
    
    
    <h3>show_specular</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>enables/disables specular reflections</p>
    
    
    <h3>specular_model</h3>
    <b>Int</b>
    <span class="emphasized">enum</span>
    
    - Beckmann = 0
    
    - GGX = 1 (default)
    
    
    <p>sets the normalized distribution function for specular.  GGX is currently isotropic only</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Transmission attributes</summary>
  <p>
    
    <h3>dispersion_abbe_number</h3>
    <b>Float</b>
    
    
    default: 34.0
    
    <p>The amount of dispersion/chromatic-aberration via refractions. Lower this number to increase the effect. A value of 0 turns off dispersion. Around [25-80] makes sense for realistic glass. Lower values may look better on gemstones.</p>
    
    
    <h3>independent_transmission_refractive_index</h3>
    <b>Float</b>
    
    
    default: 1.5
    
    <p>defines a separate IOR for the bending of light with transmission</p>
    
    
    <h3>independent_transmission_roughness</h3>
    <b>Float</b>
    <span class="emphasized">bindable</span>
    
    default: 0.5
    
    <p>separate roughness for transmission</p>
    
    
    <h3>show_transmission</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>enables/disables refractive solid model</p>
    
    
    <h3>transmission_color</h3>
    <b>Rgb</b>
    <span class="emphasized">bindable</span>
    
    default: [ 1, 1, 1 ]
    
    <p>the desired color of transmitted light</p>
    
    
    <h3>use_dispersion</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>use dispersion effects in transmission</p>
    
    
    <h3>use_independent_transmission_refractive_index</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>use a separate IOR for transmission</p>
    
    
    <h3>use_independent_transmission_roughness</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>use a separate roughness for transmission</p>
    
    
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

