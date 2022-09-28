---
title: HairMaterial_v3

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# HairMaterial_v3
**ROOTSHADER MATERIAL SHADER**
---

<details open>
<summary class="scene-class-attr-group">Advanced attributes</summary>

## show_multiple_scattering
**Bool** 

Default value : True

show the amount of light scattered after TRT bounce, good for blonde/white hair


## use_optimized_sampling
**Bool** 

Default value : True

optimized sampling of all the hair lobes, results in 2x-4x speedup on average (disables individual hair lobe AOVs). When false, the look may slightly change if using biased techniques like roughness/sample clamping. 


</details>

---

<details open>
<summary class="scene-class-attr-group">Common attributes</summary>

## casts_caustics
**Bool** 

Default value : False

allows continuation of caustic light paths.


## presence
**Float** *bindable*

Default value : 1.0

controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).


</details>

---

<details open>
<summary class="scene-class-attr-group">Emission attributes</summary>

## emission
**Rgb** *bindable*

Default value : [ 1, 1, 1 ]

the energy emitted from this material


## show_emission
**Bool** 

Default value : False

enables/disable emission


</details>

---

<details open>
<summary class="scene-class-attr-group">Fresnel attributes</summary>

## cuticle_layer_thickness
**Float** *bindable*

Default value : 0.10000000149

<p class="scene-class-attr-missing">Documentation for the attribute <b>cuticle_layer_thickness</b> needs to be written</p>


## fresnel_type
**Int** *enum*

- simple longitudinal = 0

- dielectric cylinder = 1 (default)

- layered cuticles = 2


<p class="scene-class-attr-missing">Documentation for the attribute <b>fresnel_type</b> needs to be written</p>


## refractive_index
**Float** 

Default value : 1.45000004768

keep this value between [1.3,2.0] for realistic behavior (human hair is around 1.55)


</details>

---

<details open>
<summary class="scene-class-attr-group">Primary Specular attributes</summary>

## primary_specular_offset
**Float** *bindable*

Default value : -3.0

offset specular highlight along hair direction (in degrees) [-10,+10], around -3 for human hair


## primary_specular_roughness
**Float** *bindable*

Default value : 0.5

roughness of the primary specular highlight, also sets the transmission roughness to 0.5x and secondary specular roughness to 2x by default unless independent roughnesses are being used for both


## primary_specular_tint
**Rgb** *bindable*

Default value : [ 1, 1, 1 ]

tint the primary specular highlight with this color (leave white for physical behavior)


## show_primary_specular
**Bool** 

Default value : True

show primary specular


</details>

---

<details open>
<summary class="scene-class-attr-group">Secondary Specular attributes</summary>

## glint_eccentricity
**Float** *bindable*

Default value : 0.850000023842

secondary specular glint eccentricity [0.85, 1], values that deviate from 1 make the hair fiber more elliptical and more glinty


## glint_max_twists
**Float** *bindable*

Default value : 2.5

the maximum number of twists along the hair's length. More twists means more glints. Each hair strand will be randomly assigned a twist amount between [min twists, max twists]


## glint_min_twists
**Float** *bindable*

Default value : 1.5

the minimum number of twists along the hair's length. More twists means more glints. Each hair strand will be randomly assigned a twist amount between [min twists, max twists]


## glint_roughness
**Float** *bindable*

Default value : 0.5

secondary specular glint roughness


## glint_saturation
**Float** *bindable*

Default value : 0.5

secondary specular glint saturation


## independent_secondary_specular_roughness
**Float** *bindable*

Default value : 0.40000000596

secondary specular roughness


## secondary_specular_offset
**Float** *bindable*

Default value : -4.5

offset secondary specular highlight along hair direction (in degrees) [-10,+10], around -4.5 for human hair


## secondary_specular_tint
**Rgb** *bindable*

Default value : [ 1, 1, 1 ]

tint secondary specular with this color (leave white for physical behavior)


## show_hair_glint
**Bool** 

Default value : False

show hair glint


## show_secondary_specular
**Bool** 

Default value : True

show secondary specular


## use_independent_secondary_specular_roughness
**Bool** 

Default value : False

when disabled, uses a physically correct value for secondary specular roughness which is linked to the primary specular roughness


</details>

---

<details open>
<summary class="scene-class-attr-group">Transmission attributes</summary>

## direct_transmission_saturation
**Float** *bindable*

Default value : 1.0

(Non-Physical, Advanced) saturate/desaturate direct transmission highlights.


## independent_transmission_roughness
**Float** *bindable*

Default value : 0.10000000149

transmission roughness


## show_transmission
**Bool** 

Default value : True

show tranmission specular


## transmission_azimuthal_roughness
**Float** *bindable*

Default value : 1.0

higher values create a softer look


## transmission_offset
**Float** *bindable*

Default value : -1.5

offset transmission highlight along hair direction (in degrees) [-10,+10], around -1.5 for human hair


## transmission_tint
**Rgb** *bindable*

Default value : [ 1, 1, 1 ]

tint transmission with this color (leave white for physical behavior)


## use_independent_transmission_roughness
**Bool** 

Default value : False

when disabled, uses a physically correct value for Transmission roughness which is linked to the primary specular roughness


</details>

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

## extra_aovs
**Map** 

Default value : None

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


## hair_color
**Rgb** *bindable*

Default value : [ 1, 1, 1 ]

<p class="scene-class-attr-missing">Documentation for the attribute <b>hair_color</b> needs to be written</p>


## label
**String** 

Default value : 

label used in material and light aovs


## priority
**Int** 

Default value : 0

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


</details>

