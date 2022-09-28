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
<summary class="scene-class-attr-group">General attributes</summary>

## bake_divisions
**Int** 

Default value : 100

Divide widest axis by this many divisions


## bake_resolution_mode
**Int** *enum*

- default = 0 (default)

- divisions = 1

- voxel size = 2


Toggle method to specify grid resolution of baked density grid.

		default: for shaders that are bound to vdb volumes, use vdb resolution. For shaders that are bounds to mesh geometriesuse 100 divisions

		divisions: specify number of divisions.

		voxel size: specify voxel size.


## bake_voxel_size
**Float** 

Default value : 10.0

Size of voxel in world space


## indirect_volume
**Volumeshader** 

Default value : None

<p class="scene-class-attr-missing">Documentation for the attribute <b>indirect_volume</b> needs to be written</p>


## label
**String** 

Default value : 

label used in light aovs


## surface_opacity_threshold
**Float** 

Default value : 0.5

Accumulated opacity that's considered the 'surface' for computing surface position and Z


</details>

