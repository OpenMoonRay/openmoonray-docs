---
title: BaseVolume

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# BaseVolume
**ROOTSHADER SHADER VOLUMESHADER**
---

<details open>
<summary class="scene-class-attr-group">Attenuation Properties attributes</summary>

## attenuation_color
**Rgb** *bindable*

Default value : [ 1, 1, 1 ]

a color to tint (multiply to) the attenuation. Technically the product of attenuation color and intensity is the attenuation(extinction) coefficient.(Note the inverse behavior of color with this parameter.)


## attenuation_intensity
**Float** *bindable*

Default value : 1.0

the rate at which the intensity of a ray traversing a volume is lost. Technically the product of attenuation color and intensity is the attenuation(extinction) coefficient.


</details>

---

<details open>
<summary class="scene-class-attr-group">Emission Properties attributes</summary>

## emission_color
**Rgb** *bindable*

Default value : [ 0, 0, 0 ]

a color to tint (multiply to) the emission Technically the product of emision color and intensity is the emission coefficient


## emission_intensity
**Float** *bindable*

Default value : 1.0

the rate at which a volume emits light at a given point. Technically the product of emission color and intensity is the emission coefficient.


</details>

---

<details open>
<summary class="scene-class-attr-group">Scattering Properties attributes</summary>

## anisotropy
**Float** *bindable*

Default value : 0.0

Value in the interval [-1,1] that defines how foward (1) or backward (-1) scattering the volume is. 0.0 is isotropic.


## diffuse_color
**Rgb** *bindable*

Default value : [ 1, 1, 1 ]

reflectance color of the volume. Technically this is called scattering albedo, which is the scattering coefficient divided by the extinction coefficient.


</details>

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


## label
**String** 

Default value : 

label used in light aovs


## surface_opacity_threshold
**Float** 

Default value : 0.5

Accumulated opacity that's considered the 'surface' for computing surface position and Z


</details>

