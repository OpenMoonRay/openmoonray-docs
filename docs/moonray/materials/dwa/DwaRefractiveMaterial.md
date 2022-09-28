---
title: DwaRefractiveMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# DwaRefractiveMaterial
**ROOTSHADER MATERIAL SHADER DWABASELAYERABLE**

---

<details open>
<summary class="scene-class-attr-group">Advanced attributes</summary>

<h2>specular</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

enables/disables specular reflections (binary 0|1 for plausibility)


</details>


<details open>
<summary class="scene-class-attr-group">Clearcoat attributes</summary>

<h2>clearcoat</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

enables/disables clearcoat (binary 0|1 for plausibility)


<h2>clearcoat_attenuation_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 0.5, 0.5, 0.5 ]  

the attenuation color of the clearcoat when 'cleacoat thickness' > 0


<h2>clearcoat_bending</h2>
<b>Bool</b>  

Default value : True  

(advanced, recommended ON) bends rays based on the clearcoat-refractive-index before evaluating the lobes under clearcoat


<h2>clearcoat_model</h2>
<b>Int</b>  *enum*

- Beckmann = 0

- GGX = 1 (default)


sets the normalized distribution function for clearcoat.  GGX is currently isotropic only


<h2>clearcoat_normal_dial</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

controls the amount of infuence of the alternate clearcoat normal


<h2>clearcoat_refractive_index</h2>
<b>Float</b>  

Default value : 1.5  

defines the Fresnel behavior


<h2>clearcoat_roughness</h2>
<b>Float</b>  *bindable*

Default value : 0.10000000149  

the roughness of the clearcoat lobe


<h2>clearcoat_thickness</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

the thickness of the virtual clearcoat layer. Values > 0 enable absorption


<h2>independent_clearcoat_normal</h2>
<b>33554432</b>  

Default value : None  

specifies an independent shading normal (normal map) for the clearcoat lobe


<h2>show_clearcoat</h2>
<b>Bool</b>  

Default value : False  

enables/disables clearcoat


<h2>use_independent_clearcoat_normal</h2>
<b>Bool</b>  

Default value : False  

specifies whether the clearcoat lobe should use an independent normal


</details>


<details open>
<summary class="scene-class-attr-group">Common attributes</summary>

<h2>casts_caustics</h2>
<b>Bool</b>  

Default value : False  

allows continuation of caustic light paths.


<h2>presence</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).


<h2>thin_geometry</h2>
<b>Bool</b>  

Default value : False  

enables proper shading of infinitely thin geometry such as paper or leaves.


</details>


<details open>
<summary class="scene-class-attr-group">Emission attributes</summary>

<h2>emission</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

the energy emitted from this material


<h2>show_emission</h2>
<b>Bool</b>  

Default value : False  

enables/disable emission


</details>


<details open>
<summary class="scene-class-attr-group">Fuzz attributes</summary>

<h2>fuzz</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

fuzz mask


<h2>fuzz_albedo</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

Color of the fuzz highlights.


<h2>fuzz_normal</h2>
<b>33554432</b>  

Default value : None  

specifies an independent shading normal (normal map) for the fuzz lobe


<h2>fuzz_normal_dial</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

controls the amount of infuence of the alternate fuzz normal


<h2>fuzz_roughness</h2>
<b>Float</b>  *bindable*

Default value : 0.25  

Lower values result in glancing angle highlights while higher values result in a broad, uniform coverage


<h2>show_fuzz</h2>
<b>Bool</b>  

Default value : False  

Enables/disables fuzz lobe


<h2>use_absorbing_fuzz_fibers</h2>
<b>Bool</b>  

Default value : False  

Specify whether dark fuzz fibers absorb energy or transmit it to the layers below.


</details>


<details open>
<summary class="scene-class-attr-group">Iridescence attributes</summary>

<h2>iridescence</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

controls the strength of the iridescence effect


<h2>iridescence_apply_to</h2>
<b>Int</b>  *enum*

- primary specular = 0 (default)

- clearcoat/moisture specular = 1


Apply iridescence to primary specular lobe or clearcoat/moisture lobe


<h2>iridescence_at_0_incidence</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

Iridescence effect at 0 degree viewing angle


<h2>iridescence_at_90_incidence</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

Iridescence effect at 90 degree viewing angle


<h2>iridescence_color_control</h2>
<b>Int</b>  *enum*

- use hue interpolation = 0 (default)

- use ramp = 1


use hue interpolation: automatically cycles through hue wheel, use ramp: user specified color ramp


<h2>iridescence_colors</h2>
<b>RgbVector</b>  

Default value : [[ 1, 0, 0 ], [ 1, 1, 0 ], [ 0, 1, 0 ], [ 0, 1, 1 ], [ 0, 0, 1 ], [ 1, 0, 1 ], [ 1, 0, 0 ]]  

List of colors on the ramp


<h2>iridescence_exponent</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

Tightens or broadens the distribution of colors


<h2>iridescence_flip_hue_direction</h2>
<b>Bool</b>  

Default value : False  

flip interpolation around the hue wheel to counter-clockwise direction


<h2>iridescence_interpolations</h2>
<b>IntVector</b>  

Default value : <scene_rdl2.__scene_rdl2__.IntVector object at >  

None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |

			Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6


<h2>iridescence_positions</h2>
<b>FloatVector</b>  

Default value : <scene_rdl2.__scene_rdl2__.FloatVector object at >  

ramp positions


<h2>iridescence_primary_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 0, 0 ]  

First color to interpolate from around the hue wheel


<h2>iridescence_ramp_interpolation_mode</h2>
<b>Int</b>  *enum*

- RGB = 0 (default)

- HSV = 1


RGB: lerp in RGB space which matches UI preview but can lose saturation, HSV: lerp in HSV space which preserves saturation


<h2>iridescence_secondary_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 0, 0 ]  

Second color to interpolate to around the hue wheel


<h2>iridescence_thickness</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

Controls how much the color spectrum is repeated


</details>


<details open>
<summary class="scene-class-attr-group">Normal attributes</summary>

<h2>input_normal</h2>
<b>33554432</b>  

Default value : None  

specifies an alternate shading normal in the tangent frame (normal map)


<h2>input_normal_dial</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

controls the amount of influence of the alternate normal


</details>


<details open>
<summary class="scene-class-attr-group">Normal Anti-aliasing attributes</summary>

<h2>normal_AA_dial</h2>
<b>Float</b>  

Default value : 1.0  

Controls the amount roughness compensation from the normal map AA strategy.


<h2>normal_AA_strategy</h2>
<b>Int</b>  *enum*

- none = 0 (default)

- toksvig = 1


Normal map anti-aliasing strategy to use - 'none' uses regular mip-mapping, 'toksvig' increases specular roughness corresponding to the geometric details filtered out because of mip-mapping.


</details>


<details open>
<summary class="scene-class-attr-group">Specular attributes</summary>

<h2>anisotropy</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

controls the shape of the primary reflection


<h2>refractive_index</h2>
<b>Float</b>  

Default value : 1.5  

defines the Fresnel behavior, (affects reflection and refraction)


<h2>roughness</h2>
<b>Float</b>  *bindable*

Default value : 0.5  

the roughness of the surface (currently only affects reflection)


<h2>shading_tangent</h2>
<b>Vec2f</b>  *bindable*

Default value : [ 1, 0 ]  

controls the orientation of anistropy


<h2>show_specular</h2>
<b>Bool</b>  

Default value : True  

enables/disables specular reflections


<h2>specular_model</h2>
<b>Int</b>  *enum*

- Beckmann = 0

- GGX = 1 (default)


sets the normalized distribution function for specular.  GGX is currently isotropic only


</details>


<details open>
<summary class="scene-class-attr-group">Transmission attributes</summary>

<h2>dispersion_abbe_number</h2>
<b>Float</b>  

Default value : 34.0  

The amount of dispersion/chromatic-aberration via refractions. Lower this number to increase the effect. A value of 0 turns off dispersion. Around [25-80] makes sense for realistic glass. Lower values may look better on gemstones.


<h2>independent_transmission_refractive_index</h2>
<b>Float</b>  

Default value : 1.5  

defines a separate IOR for the bending of light with transmission


<h2>independent_transmission_roughness</h2>
<b>Float</b>  *bindable*

Default value : 0.5  

separate roughness for transmission


<h2>show_transmission</h2>
<b>Bool</b>  

Default value : True  

enables/disables refractive solid model


<h2>transmission_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

the desired color of transmitted light


<h2>use_dispersion</h2>
<b>Bool</b>  

Default value : False  

use dispersion effects in transmission


<h2>use_independent_transmission_refractive_index</h2>
<b>Bool</b>  

Default value : False  

use a separate IOR for transmission


<h2>use_independent_transmission_roughness</h2>
<b>Bool</b>  

Default value : False  

use a separate roughness for transmission


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>extra_aovs</h2>
<b>Map</b>  

Default value : None  

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


<h2>label</h2>
<b>String</b>  

Default value :   

label used in material and light aovs


<h2>priority</h2>
<b>Int</b>  

Default value : 0  

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


</details>

