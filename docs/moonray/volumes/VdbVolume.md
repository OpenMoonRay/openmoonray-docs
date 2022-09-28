---
title: VdbVolume

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# VdbVolume
**ROOTSHADER SHADER VOLUMESHADER**

---

<details open>
  <summary class="scene-class-attr-group">Optical Properties attributes</summary>
  <p>
  
  <h3>anisotropy</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  Value in the interval [-1,1] that defines how foward (1) or backward (-1) scattering the volume is. 0.0 is isotropic.
  
  
  <h3>color_mult</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  A multiplier further applied to the color.
  
  
  <h3>incandescence_gain_mult</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  A multiplier further applied to the incandescence gain.
  
  
  <h3>opacity_gain_mult</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  A multiplier further applied to the opacity gain.
  
  
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">General attributes</summary>
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

