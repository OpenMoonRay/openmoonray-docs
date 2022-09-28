---
title: MacroFlakeMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# MacroFlakeMaterial
**ROOTSHADER MATERIAL SHADER**

---

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
  <summary class="jekyll-theme-minimal scene-class-attr-group">Specular attributes</summary>
  <p>
  
  <h3>metallic_color</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  <p>the overall reflection color, defines Fresnel behavior</p>
  
  
  <h3>metallic_edge_color</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  <p>the reflection color at grazing angles, defines Fresnel behavior</p>
  
  
  <h3>roughness</h3>
  <b>Float</b>  *bindable*
  
  default: 0.5
  
  <p>the roughness of the surface (currently only affects reflection)</p>
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
  
  <h3>background_material</h3>
  <b>Material</b>  
  
  default: None
  
  <p>background material</p>
  
  
  <h3>diffuse_mode</h3>
  <b>Int</b>  *enum*
  
  - block = 0
  
  - add = 1 (default)
  
  
  <p>Whether to block the diffuse lobe where the mask is applied</p>
  
  
  <h3>extra_aovs</h3>
  <b>Map</b>  
  
  default: None
  
  <p>Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
  
  
  <h3>fuzz_mode</h3>
  <b>Int</b>  *enum*
  
  - block = 0 (default)
  
  - add = 1
  
  
  <p>Whether to block the fuzz lobe where the mask is applied</p>
  
  
  <h3>is_additive</h3>
  <b>Bool</b>  
  
  default: False
  
  <p>When true, lobe does not block background material</p>
  
  
  <h3>label</h3>
  <b>String</b>  
  
  default: 
  
  <p>label used in material and light aovs</p>
  
  
  <h3>mask</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  <p>foreground (metal) material weight</p>
  
  
  <h3>priority</h3>
  <b>Int</b>  
  
  default: 0
  
  <p>The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
  
  
  <h3>specular_background_mode</h3>
  <b>Int</b>  *enum*
  
  - block = 0
  
  - add = 1 (default)
  
  
  <p>Whether to block the underlying specular lobe where the mask is applied</p>
  
  
  </p>
</details>

