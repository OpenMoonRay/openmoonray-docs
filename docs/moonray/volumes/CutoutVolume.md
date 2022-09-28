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

<h2>bake_divisions</h2>
<b>Int</b>  

Default value : 100  

Divide widest axis by this many divisions


<h2>bake_resolution_mode</h2>
<b>Int</b>  *enum*

- default = 0 (default)

- divisions = 1

- voxel size = 2


Toggle method to specify grid resolution of baked density grid.

		default: for shaders that are bound to vdb volumes, use vdb resolution. For shaders that are bounds to mesh geometriesuse 100 divisions

		divisions: specify number of divisions.

		voxel size: specify voxel size.


<h2>bake_voxel_size</h2>
<b>Float</b>  

Default value : 10.0  

Size of voxel in world space


<h2>indirect_volume</h2>
<b>Volumeshader</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>indirect_volume</b> needs to be written</p>


<h2>label</h2>
<b>String</b>  

Default value :   

label used in light aovs


<h2>surface_opacity_threshold</h2>
<b>Float</b>  

Default value : 0.5  

Accumulated opacity that's considered the 'surface' for computing surface position and Z


</details>

