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

<h2>adjust_color</h2>
<b>Bool</b>  

Default value : True  

use color adjustment attrs: color_hue_shift, color_saturation, color_gain


<h2>adjust_presence</h2>
<b>Bool</b>  

Default value : True  

use presence adjustment attrs: presence_set, presence_set_blend, presence_mult


<h2>adjust_roughness</h2>
<b>Bool</b>  

Default value : True  

use roughness adjustment attrs: roughness_set, roughness_set_blend, roughness_mult, roughness_remap_{in/out}_{min/max}


<h2>adjust_specular</h2>
<b>Bool</b>  

Default value : True  

use specular adjustment attrs: specular_set, specular_set_blend, specular_mult


</details>


<details open>
<summary class="scene-class-attr-group">Override attributes</summary>

<h2>casts_caustics</h2>
<b>Int</b>  *enum*

- unmodified = 0 (default)

- force on = 1

- force off = 2


allows you to keep or set casts caustics attribute


<h2>disable_clearcoat</h2>
<b>Bool</b>  

Default value : False  

when checked, turn off clearcoat from input


<h2>disable_diffuse</h2>
<b>Bool</b>  

Default value : False  

when checked, turn off all diffuse from input


<h2>disable_specular</h2>
<b>Bool</b>  

Default value : False  

when checked, turn off all specular from input


<h2>thin_geometry</h2>
<b>Int</b>  *enum*

- unmodified = 0 (default)

- force on = 1

- force off = 2


allows you to keep or set thin geometry attribute


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>emission</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

emissive map to add to material's emission


<h2>emission_mode</h2>
<b>Int</b>  *enum*

- off = 0 (default)

- masked = 1

- unmasked = 2


how to handle emission input. masked uses mix input, unmasked is mix = 1


<h2>extra_aovs</h2>
<b>Map</b>  

Default value : None  

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


<h2>input_material</h2>
<b>Dwabaselayerable</b>  

Default value : None  

<p class="scene-class-attr-missing">Documentation for the attribute <b>input_material</b> needs to be written</p>


<h2>label</h2>
<b>String</b>  

Default value :   

label used in material and light aovs


<h2>mix</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

weight of adjustments applied to the material


<h2>on</h2>
<b>Bool</b>  

Default value : True  

Enable/disable all adjustments


<h2>priority</h2>
<b>Int</b>  

Default value : 0  

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


</details>

