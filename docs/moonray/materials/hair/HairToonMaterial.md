---
title: HairToonMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# HairToonMaterial
**ROOTSHADER MATERIAL SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Advanced attributes</summary>
  <p>
    
    <h3>back_hair_color</h3>
    <b>Rgb</b>
    <i>bindable</i>
    
    default: [ 1, 1, 1 ]
    
    <p>(advanced only) hair color used for back-lit hair (transmission/forward reflectance)</p>
    
    
    <h3>front_hair_color</h3>
    <b>Rgb</b>
    <i>bindable</i>
    
    default: [ 1, 1, 1 ]
    
    <p>(advanced only) hair color used for front-lit hair (backward reflectance)</p>
    
    
    <h3>sss_trace_set</h3>
    <b>Traceset</b>
    
    
    default: None
    
    <p>Set of geometries that contribute neighboring subsurface points. By default, only the geometry associated with this material contributes to subsurface. If you want adjacent geometry with different material to contribute as well, specify all those parts here.</p>
    
    
    <h3>use_independent_front_and_back_hair_color</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>(advanced) use a separate hair color for front and back</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Common attributes</summary>
  <p>
    
    <h3>presence</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 1.0
    
    <p>controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Diffuse attributes</summary>
  <p>
    
    <h3>hair_color</h3>
    <b>Rgb</b>
    <i>bindable</i>
    
    default: [ 1, 1, 1 ]
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>hair_diffuse</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 1.0
    
    <p>Amount of hair diffuse</p>
    
    
    <h3>show_hair_diffuse</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>Show the hair diffuse lobe</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Emission attributes</summary>
  <p>
    
    <h3>emission</h3>
    <b>Rgb</b>
    <i>bindable</i>
    
    default: [ 1, 1, 1 ]
    
    <p>the energy emitted from this material</p>
    
    
    <h3>show_emission</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>enables/disable emission</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Specular 1 attributes</summary>
  <p>
    
    <h3>specular_1_enable_indirect_reflections</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>enables indirect GGX reflections for toon specular model</p>
    
    
    <h3>specular_1_enable_input_normal</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>enables sampling the normal map for toon specular 1</p>
    
    
    <h3>specular_1_indirect_reflections_intensity</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 1.0
    
    <p>the intensity for the indirect reflections of the toon specular model</p>
    
    
    <h3>specular_1_indirect_reflections_roughness</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 0.5
    
    <p>the roughness for the indirect reflections of the toon specular model</p>
    
    
    <h3>specular_1_input_U</h3>
    <b>Vec3f</b>
    <i>bindable</i>
    
    default: [ 0, 0, 0 ]
    
    <p>input U / tangent for specular stretch</p>
    
    
    <h3>specular_1_input_V</h3>
    <b>Vec3f</b>
    <i>bindable</i>
    
    default: [ 0, 0, 0 ]
    
    <p>input V / bitangent for specular stretch</p>
    
    
    <h3>specular_1_input_normal</h3>
    <b>33554432</b>
    
    
    default: None
    
    <p>specifies an alternate shading normal for toon specular 1</p>
    
    
    <h3>specular_1_input_normal_dial</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 1.0
    
    <p>controls influence of input normal versus hair normal for toon specular 1</p>
    
    
    <h3>specular_1_intensity</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 1.0
    
    <p>The overall intensity of the specular response</p>
    
    
    <h3>specular_1_interpolations</h3>
    <b>IntVector</b>
    
    
    default: <scene_rdl2.__scene_rdl2__.IntVector object at >
    
    <p>None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |

			Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6</p>
    
    
    <h3>specular_1_model</h3>
    <b>Int</b>
    <i>enum</i>
    
    - Toon_Surface = 2 (default)
    
    - Toon_Hair = 3
    
    
    <p>sets the normalized distribution function for specular</p>
    
    
    <h3>specular_1_positions</h3>
    <b>FloatVector</b>
    
    
    default: <scene_rdl2.__scene_rdl2__.FloatVector object at >
    
    <p>ramp positions, maximum 10 allowed</p>
    
    
    <h3>specular_1_roughness</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 0.899999976158
    
    <p>The roughness of the toon specular.   Smaller values produce tighter highlights</p>
    
    
    <h3>specular_1_show</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>Show first toon specular lobe</p>
    
    
    <h3>specular_1_stretch_u</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 0.0
    
    <p>Amount to stretch or compress the specular in the u direction </p>
    
    
    <h3>specular_1_stretch_v</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 0.0
    
    <p>Amount to stretch or compress the specular in the v direction </p>
    
    
    <h3>specular_1_tint</h3>
    <b>Rgb</b>
    <i>bindable</i>
    
    default: [ 1, 1, 1 ]
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>specular_1_use_input_vectors_for_stretch</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>when checked, use input_U and V. otherwise use geometry dPds/t</p>
    
    
    <h3>specular_1_values</h3>
    <b>FloatVector</b>
    
    
    default: <scene_rdl2.__scene_rdl2__.FloatVector object at >
    
    <p>List of colors on the ramp</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Specular 2 attributes</summary>
  <p>
    
    <h3>specular_2_enable_indirect_reflections</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>enables indirect GGX reflections for toon specular model</p>
    
    
    <h3>specular_2_enable_input_normal</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>enables sampling the normal map for toon specular 2</p>
    
    
    <h3>specular_2_indirect_reflections_intensity</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 1.0
    
    <p>the intensity for the indirect reflections of the toon specular model</p>
    
    
    <h3>specular_2_indirect_reflections_roughness</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 0.5
    
    <p>the roughness for the indirect reflections of the toon specular model</p>
    
    
    <h3>specular_2_input_U</h3>
    <b>Vec3f</b>
    <i>bindable</i>
    
    default: [ 0, 0, 0 ]
    
    <p>input U / tangent for specular stretch</p>
    
    
    <h3>specular_2_input_V</h3>
    <b>Vec3f</b>
    <i>bindable</i>
    
    default: [ 0, 0, 0 ]
    
    <p>input V / bitangent for specular stretch</p>
    
    
    <h3>specular_2_input_normal</h3>
    <b>33554432</b>
    
    
    default: None
    
    <p>specifies an alternate shading normal for toon specular 2</p>
    
    
    <h3>specular_2_input_normal_dial</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 1.0
    
    <p>controls influence of input normal versus hair normal for toon specular 2</p>
    
    
    <h3>specular_2_intensity</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 1.0
    
    <p>The overall intensity of the specular response</p>
    
    
    <h3>specular_2_interpolations</h3>
    <b>IntVector</b>
    
    
    default: <scene_rdl2.__scene_rdl2__.IntVector object at >
    
    <p>None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |

			Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6</p>
    
    
    <h3>specular_2_model</h3>
    <b>Int</b>
    <i>enum</i>
    
    - Toon_Surface = 2 (default)
    
    - Toon_Hair = 3
    
    
    <p>sets the normalized distribution function for specular</p>
    
    
    <h3>specular_2_positions</h3>
    <b>FloatVector</b>
    
    
    default: <scene_rdl2.__scene_rdl2__.FloatVector object at >
    
    <p>ramp positions, maximum 10 allowed</p>
    
    
    <h3>specular_2_roughness</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 0.899999976158
    
    <p>The roughness of the toon specular.   Smaller values produce tighter highlights</p>
    
    
    <h3>specular_2_show</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>Show second toon specular lobe</p>
    
    
    <h3>specular_2_stretch_u</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 0.0
    
    <p>Amount to stretch or compress the specular in the u direction </p>
    
    
    <h3>specular_2_stretch_v</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 0.0
    
    <p>Amount to stretch or compress the specular in the v direction </p>
    
    
    <h3>specular_2_tint</h3>
    <b>Rgb</b>
    <i>bindable</i>
    
    default: [ 1, 1, 1 ]
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>specular_2_use_input_vectors_for_stretch</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>when checked, use input_U and V. otherwise use geometry dPds/t</p>
    
    
    <h3>specular_2_values</h3>
    <b>FloatVector</b>
    
    
    default: <scene_rdl2.__scene_rdl2__.FloatVector object at >
    
    <p>List of colors on the ramp</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Specular 3 attributes</summary>
  <p>
    
    <h3>specular_3_enable_indirect_reflections</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>enables indirect GGX reflections for toon specular model</p>
    
    
    <h3>specular_3_enable_input_normal</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>enables sampling the normal map for toon specular 3</p>
    
    
    <h3>specular_3_indirect_reflections_intensity</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 1.0
    
    <p>the intensity for the indirect reflections of the toon specular model</p>
    
    
    <h3>specular_3_indirect_reflections_roughness</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 0.5
    
    <p>the roughness for the indirect reflections of the toon specular model</p>
    
    
    <h3>specular_3_input_U</h3>
    <b>Vec3f</b>
    <i>bindable</i>
    
    default: [ 0, 0, 0 ]
    
    <p>input U / tangent for specular stretch</p>
    
    
    <h3>specular_3_input_V</h3>
    <b>Vec3f</b>
    <i>bindable</i>
    
    default: [ 0, 0, 0 ]
    
    <p>input V / bitangent for specular stretch</p>
    
    
    <h3>specular_3_input_normal</h3>
    <b>33554432</b>
    
    
    default: None
    
    <p>specifies an alternate shading normal for toon specular 3</p>
    
    
    <h3>specular_3_input_normal_dial</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 1.0
    
    <p>controls influence of input normal versus hair normal for toon specular 3</p>
    
    
    <h3>specular_3_intensity</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 1.0
    
    <p>The overall intensity of the specular response</p>
    
    
    <h3>specular_3_interpolations</h3>
    <b>IntVector</b>
    
    
    default: <scene_rdl2.__scene_rdl2__.IntVector object at >
    
    <p>None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |

			Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6</p>
    
    
    <h3>specular_3_model</h3>
    <b>Int</b>
    <i>enum</i>
    
    - Toon_Surface = 2 (default)
    
    - Toon_Hair = 3
    
    
    <p>sets the normalized distribution function for specular</p>
    
    
    <h3>specular_3_positions</h3>
    <b>FloatVector</b>
    
    
    default: <scene_rdl2.__scene_rdl2__.FloatVector object at >
    
    <p>ramp positions, maximum 10 allowed</p>
    
    
    <h3>specular_3_roughness</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 0.899999976158
    
    <p>The roughness of the toon specular.   Smaller values produce tighter highlights</p>
    
    
    <h3>specular_3_show</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>Show third toon specular lobe</p>
    
    
    <h3>specular_3_stretch_u</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 0.0
    
    <p>Amount to stretch or compress the specular in the u direction </p>
    
    
    <h3>specular_3_stretch_v</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 0.0
    
    <p>Amount to stretch or compress the specular in the v direction </p>
    
    
    <h3>specular_3_tint</h3>
    <b>Rgb</b>
    <i>bindable</i>
    
    default: [ 1, 1, 1 ]
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>specular_3_use_input_vectors_for_stretch</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>when checked, use input_U and V. otherwise use geometry dPds/t</p>
    
    
    <h3>specular_3_values</h3>
    <b>FloatVector</b>
    
    
    default: <scene_rdl2.__scene_rdl2__.FloatVector object at >
    
    <p>List of colors on the ramp</p>
    
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Subsurface attributes</summary>
  <p>
    
    <h3>bssrdf</h3>
    <b>Int</b>
    <i>enum</i>
    
    - normalized diffusion = 0 (default)
    
    - dipole = 1
    
    
    <p>0 for NormalizedDiffuse, 1 for Dipole. Random walk unsupported for hair.</p>
    
    
    <h3>enable_sss_input_normal</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>enables sampling the normal map for sss samples. More accurate but potentially expensive</p>
    
    
    <h3>input_normal</h3>
    <b>33554432</b>
    
    
    default: None
    
    <p>specifies an alternate shading normal (only for SSS lobe)</p>
    
    
    <h3>input_normal_dial</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 1.0
    
    <p>controls influence of input normal versus hair normal for SSS</p>
    
    
    <h3>scattering_color</h3>
    <b>Rgb</b>
    <i>bindable</i>
    
    default: [ 1, 1, 1 ]
    
    <p>the subsurface scattering 'falloff' color</p>
    
    
    <h3>scattering_radius</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 0.0
    
    <p>the distance the light scatters beneath the surface.  When 0 surface diffuse is used</p>
    
    
    <h3>subsurface_blend</h3>
    <b>Float</b>
    <i>bindable</i>
    
    default: 1.0
    
    <p>0 is fully hair diffuse, 1 is fully SSS. No effect if scattering radius is 0.</p>
    
    
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

