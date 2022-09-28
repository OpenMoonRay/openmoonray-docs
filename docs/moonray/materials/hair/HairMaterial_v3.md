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
<p>

<h3>show_multiple_scattering</h3>
<b>Bool</b>  

default: True

show the amount of light scattered after TRT bounce, good for blonde/white hair


<h3>use_optimized_sampling</h3>
<b>Bool</b>  

default: True

optimized sampling of all the hair lobes, results in 2x-4x speedup on average (disables individual hair lobe AOVs). When false, the look may slightly change if using biased techniques like roughness/sample clamping. 


</p>
</details>


<details open>
<summary class="scene-class-attr-group">Common attributes</summary>
<p>

<h3>casts_caustics</h3>
<b>Bool</b>  

default: False

allows continuation of caustic light paths.


<h3>presence</h3>
<b>Float</b>  *bindable*

default: 1.0

controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).


</p>
</details>


<details open>
<summary class="scene-class-attr-group">Emission attributes</summary>
<p>

<h3>emission</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

the energy emitted from this material


<h3>show_emission</h3>
<b>Bool</b>  

default: False

enables/disable emission


</p>
</details>


<details open>
<summary class="scene-class-attr-group">Fresnel attributes</summary>
<p>

<h3>cuticle_layer_thickness</h3>
<b>Float</b>  *bindable*

default: 0.10000000149

<p class="scene-class-attr-missing">No documentation available</p>


<h3>fresnel_type</h3>
<b>Int</b>  *enum*

- simple longitudinal = 0

- dielectric cylinder = 1 (default)

- layered cuticles = 2


<p class="scene-class-attr-missing">No documentation available</p>


<h3>refractive_index</h3>
<b>Float</b>  

default: 1.45000004768

keep this value between [1.3,2.0] for realistic behavior (human hair is around 1.55)


</p>
</details>


<details open>
<summary class="scene-class-attr-group">Primary Specular attributes</summary>
<p>

<h3>primary_specular_offset</h3>
<b>Float</b>  *bindable*

default: -3.0

offset specular highlight along hair direction (in degrees) [-10,+10], around -3 for human hair


<h3>primary_specular_roughness</h3>
<b>Float</b>  *bindable*

default: 0.5

roughness of the primary specular highlight, also sets the transmission roughness to 0.5x and secondary specular roughness to 2x by default unless independent roughnesses are being used for both


<h3>primary_specular_tint</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

tint the primary specular highlight with this color (leave white for physical behavior)


<h3>show_primary_specular</h3>
<b>Bool</b>  

default: True

show primary specular


</p>
</details>


<details open>
<summary class="scene-class-attr-group">Secondary Specular attributes</summary>
<p>

<h3>glint_eccentricity</h3>
<b>Float</b>  *bindable*

default: 0.850000023842

secondary specular glint eccentricity [0.85, 1], values that deviate from 1 make the hair fiber more elliptical and more glinty


<h3>glint_max_twists</h3>
<b>Float</b>  *bindable*

default: 2.5

the maximum number of twists along the hair's length. More twists means more glints. Each hair strand will be randomly assigned a twist amount between [min twists, max twists]


<h3>glint_min_twists</h3>
<b>Float</b>  *bindable*

default: 1.5

the minimum number of twists along the hair's length. More twists means more glints. Each hair strand will be randomly assigned a twist amount between [min twists, max twists]


<h3>glint_roughness</h3>
<b>Float</b>  *bindable*

default: 0.5

secondary specular glint roughness


<h3>glint_saturation</h3>
<b>Float</b>  *bindable*

default: 0.5

secondary specular glint saturation


<h3>independent_secondary_specular_roughness</h3>
<b>Float</b>  *bindable*

default: 0.40000000596

secondary specular roughness


<h3>secondary_specular_offset</h3>
<b>Float</b>  *bindable*

default: -4.5

offset secondary specular highlight along hair direction (in degrees) [-10,+10], around -4.5 for human hair


<h3>secondary_specular_tint</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

tint secondary specular with this color (leave white for physical behavior)


<h3>show_hair_glint</h3>
<b>Bool</b>  

default: False

show hair glint


<h3>show_secondary_specular</h3>
<b>Bool</b>  

default: True

show secondary specular


<h3>use_independent_secondary_specular_roughness</h3>
<b>Bool</b>  

default: False

when disabled, uses a physically correct value for secondary specular roughness which is linked to the primary specular roughness


</p>
</details>


<details open>
<summary class="scene-class-attr-group">Transmission attributes</summary>
<p>

<h3>direct_transmission_saturation</h3>
<b>Float</b>  *bindable*

default: 1.0

(Non-Physical, Advanced) saturate/desaturate direct transmission highlights.


<h3>independent_transmission_roughness</h3>
<b>Float</b>  *bindable*

default: 0.10000000149

transmission roughness


<h3>show_transmission</h3>
<b>Bool</b>  

default: True

show tranmission specular


<h3>transmission_azimuthal_roughness</h3>
<b>Float</b>  *bindable*

default: 1.0

higher values create a softer look


<h3>transmission_offset</h3>
<b>Float</b>  *bindable*

default: -1.5

offset transmission highlight along hair direction (in degrees) [-10,+10], around -1.5 for human hair


<h3>transmission_tint</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

tint transmission with this color (leave white for physical behavior)


<h3>use_independent_transmission_roughness</h3>
<b>Bool</b>  

default: False

when disabled, uses a physically correct value for Transmission roughness which is linked to the primary specular roughness


</p>
</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>
<p>

<h3>extra_aovs</h3>
<b>Map</b>  

default: None

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


<h3>hair_color</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

<p class="scene-class-attr-missing">No documentation available</p>


<h3>label</h3>
<b>String</b>  

default: 

label used in material and light aovs


<h3>priority</h3>
<b>Int</b>  

default: 0

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


</p>
</details>

