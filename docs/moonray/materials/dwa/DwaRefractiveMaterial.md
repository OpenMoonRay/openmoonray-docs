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
<br>

<h3>specular</h3>
<b>Float</b>  *bindable*

default: 1.0

enables/disables specular reflections (binary 0|1 for plausibility)


</details>


<details open>
<summary class="scene-class-attr-group">Clearcoat attributes</summary>
<br>

<h3>clearcoat</h3>
<b>Float</b>  *bindable*

default: 1.0

enables/disables clearcoat (binary 0|1 for plausibility)


<h3>clearcoat_attenuation_color</h3>
<b>Rgb</b>  *bindable*

default: [ 0.5, 0.5, 0.5 ]

the attenuation color of the clearcoat when 'cleacoat thickness' > 0


<h3>clearcoat_bending</h3>
<b>Bool</b>  

default: True

(advanced, recommended ON) bends rays based on the clearcoat-refractive-index before evaluating the lobes under clearcoat


<h3>clearcoat_model</h3>
<b>Int</b>  *enum*

- Beckmann = 0

- GGX = 1 (default)


sets the normalized distribution function for clearcoat.  GGX is currently isotropic only


<h3>clearcoat_normal_dial</h3>
<b>Float</b>  *bindable*

default: 1.0

controls the amount of infuence of the alternate clearcoat normal


<h3>clearcoat_refractive_index</h3>
<b>Float</b>  

default: 1.5

defines the Fresnel behavior


<h3>clearcoat_roughness</h3>
<b>Float</b>  *bindable*

default: 0.10000000149

the roughness of the clearcoat lobe


<h3>clearcoat_thickness</h3>
<b>Float</b>  *bindable*

default: 0.0

the thickness of the virtual clearcoat layer. Values > 0 enable absorption


<h3>independent_clearcoat_normal</h3>
<b>33554432</b>  

default: None

specifies an independent shading normal (normal map) for the clearcoat lobe


<h3>show_clearcoat</h3>
<b>Bool</b>  

default: False

enables/disables clearcoat


<h3>use_independent_clearcoat_normal</h3>
<b>Bool</b>  

default: False

specifies whether the clearcoat lobe should use an independent normal


</details>


<details open>
<summary class="scene-class-attr-group">Common attributes</summary>
<br>

<h3>casts_caustics</h3>
<b>Bool</b>  

default: False

allows continuation of caustic light paths.


<h3>presence</h3>
<b>Float</b>  *bindable*

default: 1.0

controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).


<h3>thin_geometry</h3>
<b>Bool</b>  

default: False

enables proper shading of infinitely thin geometry such as paper or leaves.


</details>


<details open>
<summary class="scene-class-attr-group">Emission attributes</summary>
<br>

<h3>emission</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

the energy emitted from this material


<h3>show_emission</h3>
<b>Bool</b>  

default: False

enables/disable emission


</details>


<details open>
<summary class="scene-class-attr-group">Fuzz attributes</summary>
<br>

<h3>fuzz</h3>
<b>Float</b>  *bindable*

default: 1.0

fuzz mask


<h3>fuzz_albedo</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

Color of the fuzz highlights.


<h3>fuzz_normal</h3>
<b>33554432</b>  

default: None

specifies an independent shading normal (normal map) for the fuzz lobe


<h3>fuzz_normal_dial</h3>
<b>Float</b>  *bindable*

default: 1.0

controls the amount of infuence of the alternate fuzz normal


<h3>fuzz_roughness</h3>
<b>Float</b>  *bindable*

default: 0.25

Lower values result in glancing angle highlights while higher values result in a broad, uniform coverage


<h3>show_fuzz</h3>
<b>Bool</b>  

default: False

Enables/disables fuzz lobe


<h3>use_absorbing_fuzz_fibers</h3>
<b>Bool</b>  

default: False

Specify whether dark fuzz fibers absorb energy or transmit it to the layers below.


</details>


<details open>
<summary class="scene-class-attr-group">Iridescence attributes</summary>
<br>

<h3>iridescence</h3>
<b>Float</b>  *bindable*

default: 0.0

controls the strength of the iridescence effect


<h3>iridescence_apply_to</h3>
<b>Int</b>  *enum*

- primary specular = 0 (default)

- clearcoat/moisture specular = 1


Apply iridescence to primary specular lobe or clearcoat/moisture lobe


<h3>iridescence_at_0_incidence</h3>
<b>Float</b>  *bindable*

default: 1.0

Iridescence effect at 0 degree viewing angle


<h3>iridescence_at_90_incidence</h3>
<b>Float</b>  *bindable*

default: 1.0

Iridescence effect at 90 degree viewing angle


<h3>iridescence_color_control</h3>
<b>Int</b>  *enum*

- use hue interpolation = 0 (default)

- use ramp = 1


use hue interpolation: automatically cycles through hue wheel, use ramp: user specified color ramp


<h3>iridescence_colors</h3>
<b>RgbVector</b>  

default: [[ 1, 0, 0 ], [ 1, 1, 0 ], [ 0, 1, 0 ], [ 0, 1, 1 ], [ 0, 0, 1 ], [ 1, 0, 1 ], [ 1, 0, 0 ]]

List of colors on the ramp


<h3>iridescence_exponent</h3>
<b>Float</b>  *bindable*

default: 1.0

Tightens or broadens the distribution of colors


<h3>iridescence_flip_hue_direction</h3>
<b>Bool</b>  

default: False

flip interpolation around the hue wheel to counter-clockwise direction


<h3>iridescence_interpolations</h3>
<b>IntVector</b>  

default: <scene_rdl2.__scene_rdl2__.IntVector object at >

None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |

			Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6


<h3>iridescence_positions</h3>
<b>FloatVector</b>  

default: <scene_rdl2.__scene_rdl2__.FloatVector object at >

ramp positions


<h3>iridescence_primary_color</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 0, 0 ]

First color to interpolate from around the hue wheel


<h3>iridescence_ramp_interpolation_mode</h3>
<b>Int</b>  *enum*

- RGB = 0 (default)

- HSV = 1


RGB: lerp in RGB space which matches UI preview but can lose saturation, HSV: lerp in HSV space which preserves saturation


<h3>iridescence_secondary_color</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 0, 0 ]

Second color to interpolate to around the hue wheel


<h3>iridescence_thickness</h3>
<b>Float</b>  *bindable*

default: 1.0

Controls how much the color spectrum is repeated


</details>


<details open>
<summary class="scene-class-attr-group">Normal attributes</summary>
<br>

<h3>input_normal</h3>
<b>33554432</b>  

default: None

specifies an alternate shading normal in the tangent frame (normal map)


<h3>input_normal_dial</h3>
<b>Float</b>  *bindable*

default: 1.0

controls the amount of influence of the alternate normal


</details>


<details open>
<summary class="scene-class-attr-group">Normal Anti-aliasing attributes</summary>
<br>

<h3>normal_AA_dial</h3>
<b>Float</b>  

default: 1.0

Controls the amount roughness compensation from the normal map AA strategy.


<h3>normal_AA_strategy</h3>
<b>Int</b>  *enum*

- none = 0 (default)

- toksvig = 1


Normal map anti-aliasing strategy to use - 'none' uses regular mip-mapping, 'toksvig' increases specular roughness corresponding to the geometric details filtered out because of mip-mapping.


</details>


<details open>
<summary class="scene-class-attr-group">Specular attributes</summary>
<br>

<h3>anisotropy</h3>
<b>Float</b>  *bindable*

default: 0.0

controls the shape of the primary reflection


<h3>refractive_index</h3>
<b>Float</b>  

default: 1.5

defines the Fresnel behavior, (affects reflection and refraction)


<h3>roughness</h3>
<b>Float</b>  *bindable*

default: 0.5

the roughness of the surface (currently only affects reflection)


<h3>shading_tangent</h3>
<b>Vec2f</b>  *bindable*

default: [ 1, 0 ]

controls the orientation of anistropy


<h3>show_specular</h3>
<b>Bool</b>  

default: True

enables/disables specular reflections


<h3>specular_model</h3>
<b>Int</b>  *enum*

- Beckmann = 0

- GGX = 1 (default)


sets the normalized distribution function for specular.  GGX is currently isotropic only


</details>


<details open>
<summary class="scene-class-attr-group">Transmission attributes</summary>
<br>

<h3>dispersion_abbe_number</h3>
<b>Float</b>  

default: 34.0

The amount of dispersion/chromatic-aberration via refractions. Lower this number to increase the effect. A value of 0 turns off dispersion. Around [25-80] makes sense for realistic glass. Lower values may look better on gemstones.


<h3>independent_transmission_refractive_index</h3>
<b>Float</b>  

default: 1.5

defines a separate IOR for the bending of light with transmission


<h3>independent_transmission_roughness</h3>
<b>Float</b>  *bindable*

default: 0.5

separate roughness for transmission


<h3>show_transmission</h3>
<b>Bool</b>  

default: True

enables/disables refractive solid model


<h3>transmission_color</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

the desired color of transmitted light


<h3>use_dispersion</h3>
<b>Bool</b>  

default: False

use dispersion effects in transmission


<h3>use_independent_transmission_refractive_index</h3>
<b>Bool</b>  

default: False

use a separate IOR for transmission


<h3>use_independent_transmission_roughness</h3>
<b>Bool</b>  

default: False

use a separate roughness for transmission


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>
<br>

<h3>extra_aovs</h3>
<b>Map</b>  

default: None

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


<h3>label</h3>
<b>String</b>  

default: 

label used in material and light aovs


<h3>priority</h3>
<b>Int</b>  

default: 0

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


</details>

