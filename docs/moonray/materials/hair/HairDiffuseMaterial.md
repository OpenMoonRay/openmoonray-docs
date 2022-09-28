---
title: HairDiffuseMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# HairDiffuseMaterial
**ROOTSHADER MATERIAL SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Advanced attributes</summary>
  <p>
  
  <h3>back_hair_color</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  (advanced only) hair color used for back-lit hair (transmission/forward reflectance)
  
  
  <h3>front_hair_color</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  (advanced only) hair color used for front-lit hair (backward reflectance)
  
  
  <h3>sss_trace_set</h3>
  <b>Traceset</b>  
  
  default: None
  
  Set of geometries that contribute neighboring subsurface points. By default, only the geometry associated with this material contributes to subsurface. If you want adjacent geometry with different material to contribute as well, specify all those parts here.
  
  
  <h3>use_independent_front_and_back_hair_color</h3>
  <b>Bool</b>  
  
  default: False
  
  (advanced) use a separate hair color for front and back
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Common attributes</summary>
  <p>
  
  <h3>casts_caustics</h3>
  <b>Bool</b>  
  
  default: False
  
  allows continuation of caustic light paths.
  
  
  <h3>presence</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Emission attributes</summary>
  <p>
  
  <h3>emission</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  the energy emitted from this material
  
  
  <h3>show_emission</h3>
  <b>Bool</b>  
  
  default: False
  
  enables/disable emission
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Subsurface attributes</summary>
  <p>
  
  <h3>bssrdf</h3>
  <b>Int</b>  *enum*
  
  - normalized diffusion = 0 (default)
  
  - dipole = 1
  
  
  0 for NormalizedDiffuse, 1 for Dipole. Random walk unsupported for hair.
  
  
  <h3>enable_sss_input_normal</h3>
  <b>Bool</b>  
  
  default: False
  
  enables sampling the normal map for sss samples. More accurate but potentially expensive
  
  
  <h3>input_normal</h3>
  <b>33554432</b>  
  
  default: None
  
  specifies an alternate shading normal (only for SSS lobe)
  
  
  <h3>input_normal_dial</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  controls influence of input normal versus hair normal for SSS
  
  
  <h3>scattering_color</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  the subsurface scattering 'falloff' color
  
  
  <h3>scattering_radius</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  the distance the light scatters beneath the surface.  When 0 surface diffuse is used
  
  
  <h3>subsurface_blend</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  0 is fully hair diffuse, 1 is fully SSS. No effect if scattering radius is 0.
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
  
  <h3>extra_aovs</h3>
  <b>Map</b>  
  
  default: None
  
  Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result
  
  
  <h3>hair_color</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
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

