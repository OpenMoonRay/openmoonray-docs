---
title: DwaBaseMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# DwaBaseMaterial
**ROOTSHADER MATERIAL SHADER DWABASELAYERABLE**

---

<details open>
<summary class="scene-class-attr-group">Advanced attributes</summary>
<br>

<h3>specular</h3>
<b>Float</b>  *bindable*

default: 1.0

enables/disables specular reflections (binary 0|1 for plausibility)


<h3>sss_trace_set</h3>
<b>Traceset</b>  

default: None

Set of geometries that contribute neighboring subsurface points. By default, only the geometry associated with this material contributes to subsurface. If you want adjacent geometry with different material to contribute as well, specify all those parts here.


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
<summary class="scene-class-attr-group">Diffuse attributes</summary>
<br>

<h3>albedo</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

the overall surface color as seen from a distance (ie. diffuse color)


<h3>bssrdf</h3>
<b>Int</b>  *enum*

- normalized diffusion = 0 (default)

- dipole = 1

- random walk = 2


0 for NormalizedDiffuse, 1 for Dipole, 2 for random walk


<h3>diffuse_roughness</h3>
<b>Float</b>  *bindable*

default: 0.0

Roughness of the diffuse shading.  If the value is zero a Lambertian model is used.  If it's above zero the Oren Nayar model is used.   Not compatible with subsurface scattering.


<h3>diffuse_transmission</h3>
<b>Float</b>  *bindable*

default: 1.0

multiplier on the amount of light that is transmitted through the surface.


<h3>diffuse_transmission_blending_behavior</h3>
<b>Int</b>  *enum*

- RGB = 0

- Monochromatic = 1 (default)


Controls how diffuse transmission color attenuates diffuse reflection


<h3>diffuse_transmission_color</h3>
<b>Rgb</b>  *bindable*

default: [ 0, 0, 0 ]

the color/amount of light that is transmitted through the surface.


<h3>enable_sss_input_normal</h3>
<b>Bool</b>  

default: False

enables sampling the normal map for sss samples. More accurate but potentially expensive


<h3>resolve_self_intersections</h3>
<b>Bool</b>  

default: True

tries to resolve self-intersecting geometry automatically by only evaluating 'exiting' intersections for subsurface evaluations


<h3>scattering_color</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

the subsurface scattering 'falloff' color


<h3>scattering_radius</h3>
<b>Float</b>  *bindable*

default: 0.0

the distance the light scatters beneath the surface. When 0 surface diffuse (lambertian or toon) is used


<h3>show_diffuse</h3>
<b>Bool</b>  

default: True

enables/disables diffuse reflectance


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
<summary class="scene-class-attr-group">Glitter attributes</summary>
<br>

<h3>glitter</h3>
<b>Float</b>  *bindable*

default: 1.0

enables/disables glitter model (binary 0|1 for plausibility)


<h3>glitter_LOD_quality</h3>
<b>Float</b>  

default: 0.5

controls quality of glitter at distances where individual flakes cannot be perceived; at lower values, approximation kicks in earlier


<h3>glitter_approximate_for_secondary_rays</h3>
<b>Bool</b>  

default: True

use an approximation to shade glitter for non-mirror secondary rays


<h3>glitter_color_A</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

base flake color (use physical metallic color values)


<h3>glitter_color_B</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

base flake color (use physical metallic color values)


<h3>glitter_color_hue_variation</h3>
<b>Float</b>  *bindable*

default: 0.0

introduce hue variation in flake color centered at the base flake color's hue on the hue wheel


<h3>glitter_color_saturation_variation</h3>
<b>Float</b>  *bindable*

default: 0.0

introduce saturation variation in flake color centered at the base flake color's saturation


<h3>glitter_color_value_variation</h3>
<b>Float</b>  *bindable*

default: 0.0

introduce value variation in flake color centered at the base flake color's value


<h3>glitter_compensate_reference_space_deformation</h3>
<b>Bool</b>  

default: True

(In ReferenceSpace) Compensates for stretch/compression/shear in glitter shapes resulting from animation etc


<h3>glitter_debug_mode</h3>
<b>Int</b>  *enum*

- off = 0 (default)

- blend = 1

- color = 2

- averageColor = 3

- footprintArea = 4

- radius = 5


developer debug visualization modes


<h3>glitter_density</h3>
<b>Float</b>  *bindable*

default: 1.0

controls the number of flakes per unit length; larger density packs more flakes into same space


<h3>glitter_jitter</h3>
<b>Float</b>  *bindable*

default: 1.0

Controls how much the flakes are randomly offset from a regular grid


<h3>glitter_layering_mode</h3>
<b>Int</b>  *enum*

- physical = 0 (default)

- additive = 1


layering mode for glitter on top of the under material. physical: conserves energy and glitter attenuates under material, additive: breaks energy conservation but glitter is never darker than the under material (eg. use case: snow)


<h3>glitter_randomness</h3>
<b>Float</b>  

default: 0.5

randomness of flake orientation


<h3>glitter_roughness_A</h3>
<b>Float</b>  

default: 0.140000000596

specular roughness of individual flakes (0 makes flakes mirror-like)


<h3>glitter_roughness_B</h3>
<b>Float</b>  

default: 0.140000000596

specular roughness of individual flakes (0 makes flakes mirror-like)


<h3>glitter_seed</h3>
<b>Int</b>  

default: 0

The seed for the glitter random number generator


<h3>glitter_size_A</h3>
<b>Float</b>  *bindable*

default: 1.0

size of the flakes.  Apparent flake size may vary based on how much the flake spheres intersect the surface


<h3>glitter_size_B</h3>
<b>Float</b>  *bindable*

default: 1.0

size of the flakes.  Apparent flake size may vary based on how much the flake spheres intersect the surface


<h3>glitter_space</h3>
<b>Int</b>  *enum*

- object = 4

- reference = 5 (default)


The space to calculate the worley noise in, defaults to reference space


<h3>glitter_style_A_frequency</h3>
<b>Float</b>  *bindable*

default: 1.0

0 implies none of this style, 1 implies all the flakes will get this style


<h3>glitter_style_B_frequency</h3>
<b>Float</b>  *bindable*

default: 0.0

0 implies none of this style, 1 implies all the flakes will get this style


<h3>glitter_texture_A</h3>
<b>String</b>  *filename*

default: 

filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).


<h3>glitter_texture_B</h3>
<b>String</b>  *filename*

default: 

filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).


<h3>glitter_texture_orientation_randomness</h3>
<b>Float</b>  

default: 0.15000000596

randomly orient each texture


<h3>show_glitter</h3>
<b>Bool</b>  

default: False

Enables/disables glitter lobes


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


<h3>metallic</h3>
<b>Float</b>  *bindable*

default: 0.0

enables/disables metallic model (binary 0|1 for plausibility)


<h3>metallic_color</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

the overall reflection color, defines Fresnel behavior


<h3>metallic_edge_color</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

the reflection color at grazing angles, defines Fresnel behavior


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


<h3>transmission</h3>
<b>Float</b>  *bindable*

default: 0.0

enables/disables refractive solid model (binary 0|1 for plausibility)


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

