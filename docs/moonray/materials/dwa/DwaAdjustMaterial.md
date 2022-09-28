---
title: DwaAdjustMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# DwaAdjustMaterial
**ROOTSHADER MATERIAL SHADER DWABASELAYERABLE**
---

<details open>
<summary class="scene-class-attr-group">Enable attributes</summary>

## adjust_color
**Bool** 

Default value : True

use color adjustment attrs: color_hue_shift, color_saturation, color_gain


## adjust_presence
**Bool** 

Default value : True

use presence adjustment attrs: presence_set, presence_set_blend, presence_mult


## adjust_roughness
**Bool** 

Default value : True

use roughness adjustment attrs: roughness_set, roughness_set_blend, roughness_mult, roughness_remap_{in/out}_{min/max}


## adjust_specular
**Bool** 

Default value : True

use specular adjustment attrs: specular_set, specular_set_blend, specular_mult


</details>

---

<details open>
<summary class="scene-class-attr-group">Override attributes</summary>

## casts_caustics
**Int** *enum*

- unmodified = 0 (default)

- force on = 1

- force off = 2


allows you to keep or set casts caustics attribute


## disable_clearcoat
**Bool** 

Default value : False

when checked, turn off clearcoat from input


## disable_diffuse
**Bool** 

Default value : False

when checked, turn off all diffuse from input


## disable_specular
**Bool** 

Default value : False

when checked, turn off all specular from input


## thin_geometry
**Int** *enum*

- unmodified = 0 (default)

- force on = 1

- force off = 2


allows you to keep or set thin geometry attribute


</details>

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

## emission
**Rgb** *bindable*

Default value : [ 1, 1, 1 ]

emissive map to add to material's emission


## emission_mode
**Int** *enum*

- off = 0 (default)

- masked = 1

- unmasked = 2


how to handle emission input. masked uses mix input, unmasked is mix = 1


## extra_aovs
**Map** 

Default value : None

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


## input_material
**Dwabaselayerable** 

Default value : None

<p class="scene-class-attr-missing">Documentation for the attribute <b>input_material</b> needs to be written</p>


## label
**String** 

Default value : 

label used in material and light aovs


## mix
**Float** *bindable*

Default value : 1.0

weight of adjustments applied to the material


## on
**Bool** 

Default value : True

Enable/disable all adjustments


## priority
**Int** 

Default value : 0

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


</details>

