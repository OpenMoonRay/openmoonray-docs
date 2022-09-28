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
  <summary class="jekyll-theme-minimal scene-class-attr-group">Attenuation Properties attributes</summary>
  <p>
  
  <h3>attenuation_color</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  a color to tint (multiply to) the attenuation. Technically the product of attenuation color and intensity is the attenuation(extinction) coefficient.(Note the inverse behavior of color with this parameter.)
  
  
  <h3>attenuation_intensity</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  the rate at which the intensity of a ray traversing a volume is lost. Technically the product of attenuation color and intensity is the attenuation(extinction) coefficient.
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Emission Properties attributes</summary>
  <p>
  
  <h3>emission_color</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 0, 0, 0 ]
  
  a color to tint (multiply to) the emission Technically the product of emision color and intensity is the emission coefficient
  
  
  <h3>emission_intensity</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  the rate at which a volume emits light at a given point. Technically the product of emission color and intensity is the emission coefficient.
  
  
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Scattering Properties attributes</summary>
  <p>
  
  <h3>anisotropy</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  Value in the interval [-1,1] that defines how foward (1) or backward (-1) scattering the volume is. 0.0 is isotropic.
  
  
  <h3>diffuse_color</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  reflectance color of the volume. Technically this is called scattering albedo, which is the scattering coefficient divided by the extinction coefficient.
  
  
  </p>
</details>


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

