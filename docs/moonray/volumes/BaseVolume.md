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

<h2>attenuation_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

a color to tint (multiply to) the attenuation. Technically the product of attenuation color and intensity is the attenuation(extinction) coefficient.(Note the inverse behavior of color with this parameter.)


<h2>attenuation_intensity</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

the rate at which the intensity of a ray traversing a volume is lost. Technically the product of attenuation color and intensity is the attenuation(extinction) coefficient.


</details>


<details open>
<summary class="scene-class-attr-group">Emission Properties attributes</summary>

<h2>emission_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 0, 0, 0 ]  

a color to tint (multiply to) the emission Technically the product of emision color and intensity is the emission coefficient


<h2>emission_intensity</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

the rate at which a volume emits light at a given point. Technically the product of emission color and intensity is the emission coefficient.


</details>


<details open>
<summary class="scene-class-attr-group">Scattering Properties attributes</summary>

<h2>anisotropy</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

Value in the interval [-1,1] that defines how foward (1) or backward (-1) scattering the volume is. 0.0 is isotropic.


<h2>diffuse_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

reflectance color of the volume. Technically this is called scattering albedo, which is the scattering coefficient divided by the extinction coefficient.


</details>


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


<h2>label</h2>
<b>String</b>  

Default value :   

label used in light aovs


<h2>surface_opacity_threshold</h2>
<b>Float</b>  

Default value : 0.5  

Accumulated opacity that's considered the 'surface' for computing surface position and Z


</details>

