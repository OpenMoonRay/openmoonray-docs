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

## anisotropy  
**Float**  *bindable*

Default value : 0.0  

Value in the interval [-1,1] that defines how foward (1) or backward (-1) scattering the volume is. 0.0 is isotropic.


## color_mult  
**Rgb**  *bindable*

Default value : [ 1, 1, 1 ]  

A multiplier further applied to the color.


## incandescence_gain_mult  
**Rgb**  *bindable*

Default value : [ 1, 1, 1 ]  

A multiplier further applied to the incandescence gain.


## opacity_gain_mult  
**Rgb**  *bindable*

Default value : [ 1, 1, 1 ]  

A multiplier further applied to the opacity gain.


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

## bake_divisions  
**Int**  

Default value : 100  

Divide widest axis by this many divisions


## bake_resolution_mode  
**Int**  *enum*

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


## label  
**String**  

Default value :   

label used in light aovs


## surface_opacity_threshold  
**Float**  

Default value : 0.5  

Accumulated opacity that's considered the 'surface' for computing surface position and Z


</details>

