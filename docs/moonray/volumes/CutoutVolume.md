---
title: CutoutVolume

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# CutoutVolume
**ROOTSHADER SHADER VOLUMESHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
  
  <h3>bake_divisions</h3>
  <b>Int</b>  
  
  default: 100
  
  Divide widest axis by this many divisions
  
  
  <h3>bake_resolution_mode</h3>
  <b>Int</b>  *enum*
  
  - default = 0 (default)
  
  - divisions = 1
  
  - voxel size = 2
  
  
  Toggle method to specify grid resolution of baked density grid.

		default: for shaders that are bound to vdb volumes, use vdb resolution. For shaders that are bounds to mesh geometriesuse 100 divisions

		divisions: specify number of divisions.

		voxel size: specify voxel size.
  
  
  <h3>bake_voxel_size</h3>
  <b>Float</b>  
  
  default: 10.0
  
  Size of voxel in world space
  
  
  <h3>indirect_volume</h3>
  <b>Volumeshader</b>  
  
  default: None
  
  <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
  
  
  <h3>label</h3>
  <b>String</b>  
  
  default: 
  
  label used in light aovs
  
  
  <h3>surface_opacity_threshold</h3>
  <b>Float</b>  
  
  default: 0.5
  
  Accumulated opacity that's considered the 'surface' for computing surface position and Z
  
  
  </p>
</details>

