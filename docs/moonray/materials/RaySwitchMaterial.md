---
title: RaySwitchMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# RaySwitchMaterial
**ROOTSHADER MATERIAL SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
  
  <h3>camera_ray_material</h3>
  <b>Material</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>cutout_camera_rays</h3>
  <b>Bool</b>  
  
  default: False
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>default_material</h3>
  <b>Material</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>extra_aovs</h3>
  <b>Map</b>  
  
  default: None
  
  Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result
  
  
  <h3>indirect_diffuse_ray_material</h3>
  <b>Material</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>indirect_glossy_ray_material</h3>
  <b>Material</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>indirect_mirror_ray_material</h3>
  <b>Material</b>  
  
  default: None
  
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

