---
title: DwaSkinMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# DwaSkinMaterial
**ROOTSHADER MATERIAL SHADER DWABASELAYERABLE**
---

<details open>
<summary class="scene-class-attr-group">Advanced attributes</summary>

## specular
**Float** *bindable*

Default value : 1.0

enables/disables specular reflections (binary 0|1 for plausibility)


## sss_trace_set
**Traceset** 

Default value : None

Set of geometries that contribute neighboring subsurface points. By default, only the geometry associated with this material contributes to subsurface. If you want adjacent geometry with different material to contribute as well, specify all those parts here.


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


## thin_geometry
**Bool** 

Default value : False

enables proper shading of infinitely thin geometry such as paper or leaves.


</details>

---

<details open>
<summary class="scene-class-attr-group">Diffuse attributes</summary>

## albedo
**Rgb** *bindable*

Default value : [ 1, 1, 1 ]

the overall surface color as seen from a distance (ie. diffuse color)


## bssrdf
**Int** *enum*

- normalized diffusion = 0 (default)

- dipole = 1

- random walk = 2


0 for NormalizedDiffuse, 1 for Dipole, 2 for random walk


## diffuse_roughness
**Float** *bindable*

Default value : 0.0

Roughness of the diffuse shading.  If the value is zero a Lambertian model is used.  If it's above zero the Oren Nayar model is used.   Not compatible with subsurface scattering.


## diffuse_transmission
**Float** *bindable*

Default value : 1.0

multiplier on the amount of light that is transmitted through the surface.


## diffuse_transmission_blending_behavior
**Int** *enum*

- RGB = 0

- Monochromatic = 1 (default)


Controls how diffuse transmission color attenuates diffuse reflection


## diffuse_transmission_color
**Rgb** *bindable*

Default value : [ 0, 0, 0 ]

the color/amount of light that is transmitted through the surface.


## enable_sss_input_normal
**Bool** 

Default value : False

enables sampling the normal map for sss samples. More accurate but potentially expensive


## resolve_self_intersections
**Bool** 

Default value : True

tries to resolve self-intersecting geometry automatically by only evaluating 'exiting' intersections for subsurface evaluations


## scattering_color
**Rgb** *bindable*

Default value : [ 1, 1, 1 ]

the subsurface scattering 'falloff' color


## scattering_radius
**Float** *bindable*

Default value : 0.0

the distance the light scatters beneath the surface. When 0 surface diffuse (lambertian or toon) is used


## show_diffuse
**Bool** 

Default value : True

enables/disables diffuse reflectance


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
<summary class="scene-class-attr-group">Fuzz attributes</summary>

## fuzz
**Float** *bindable*

Default value : 1.0

fuzz mask


## fuzz_albedo
**Rgb** *bindable*

Default value : [ 1, 1, 1 ]

Color of the fuzz highlights.


## fuzz_normal
**33554432** 

Default value : None

specifies an independent shading normal (normal map) for the fuzz lobe


## fuzz_normal_dial
**Float** *bindable*

Default value : 1.0

controls the amount of infuence of the alternate fuzz normal


## fuzz_roughness
**Float** *bindable*

Default value : 0.25

Lower values result in glancing angle highlights while higher values result in a broad, uniform coverage


## show_fuzz
**Bool** 

Default value : False

Enables/disables fuzz lobe


## use_absorbing_fuzz_fibers
**Bool** 

Default value : False

Specify whether dark fuzz fibers absorb energy or transmit it to the layers below.


</details>

---

<details open>
<summary class="scene-class-attr-group">Glitter attributes</summary>

## glitter
**Float** *bindable*

Default value : 1.0

enables/disables glitter model (binary 0|1 for plausibility)


## glitter_LOD_quality
**Float** 

Default value : 0.5

controls quality of glitter at distances where individual flakes cannot be perceived; at lower values, approximation kicks in earlier


## glitter_approximate_for_secondary_rays
**Bool** 

Default value : True

use an approximation to shade glitter for non-mirror secondary rays


## glitter_color_A
**Rgb** *bindable*

Default value : [ 1, 1, 1 ]

base flake color (use physical metallic color values)


## glitter_color_B
**Rgb** *bindable*

Default value : [ 1, 1, 1 ]

base flake color (use physical metallic color values)


## glitter_color_hue_variation
**Float** *bindable*

Default value : 0.0

introduce hue variation in flake color centered at the base flake color's hue on the hue wheel


## glitter_color_saturation_variation
**Float** *bindable*

Default value : 0.0

introduce saturation variation in flake color centered at the base flake color's saturation


## glitter_color_value_variation
**Float** *bindable*

Default value : 0.0

introduce value variation in flake color centered at the base flake color's value


## glitter_compensate_reference_space_deformation
**Bool** 

Default value : True

(In ReferenceSpace) Compensates for stretch/compression/shear in glitter shapes resulting from animation etc


## glitter_debug_mode
**Int** *enum*

- off = 0 (default)

- blend = 1

- color = 2

- averageColor = 3

- footprintArea = 4

- radius = 5


developer debug visualization modes


## glitter_density
**Float** *bindable*

Default value : 1.0

controls the number of flakes per unit length; larger density packs more flakes into same space


## glitter_jitter
**Float** *bindable*

Default value : 1.0

Controls how much the flakes are randomly offset from a regular grid


## glitter_layering_mode
**Int** *enum*

- physical = 0 (default)

- additive = 1


layering mode for glitter on top of the under material. physical: conserves energy and glitter attenuates under material, additive: breaks energy conservation but glitter is never darker than the under material (eg. use case: snow)


## glitter_randomness
**Float** 

Default value : 0.5

randomness of flake orientation


## glitter_roughness_A
**Float** 

Default value : 0.140000000596

specular roughness of individual flakes (0 makes flakes mirror-like)


## glitter_roughness_B
**Float** 

Default value : 0.140000000596

specular roughness of individual flakes (0 makes flakes mirror-like)


## glitter_seed
**Int** 

Default value : 0

The seed for the glitter random number generator


## glitter_size_A
**Float** *bindable*

Default value : 1.0

size of the flakes.  Apparent flake size may vary based on how much the flake spheres intersect the surface


## glitter_size_B
**Float** *bindable*

Default value : 1.0

size of the flakes.  Apparent flake size may vary based on how much the flake spheres intersect the surface


## glitter_space
**Int** *enum*

- object = 4

- reference = 5 (default)


The space to calculate the worley noise in, defaults to reference space


## glitter_style_A_frequency
**Float** *bindable*

Default value : 1.0

0 implies none of this style, 1 implies all the flakes will get this style


## glitter_style_B_frequency
**Float** *bindable*

Default value : 0.0

0 implies none of this style, 1 implies all the flakes will get this style


## glitter_texture_A
**String** *filename*

Default value : 

filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).


## glitter_texture_B
**String** *filename*

Default value : 

filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).


## glitter_texture_orientation_randomness
**Float** 

Default value : 0.15000000596

randomly orient each texture


## show_glitter
**Bool** 

Default value : False

Enables/disables glitter lobes


</details>

---

<details open>
<summary class="scene-class-attr-group">Iridescence attributes</summary>

## iridescence
**Float** *bindable*

Default value : 0.0

controls the strength of the iridescence effect


## iridescence_apply_to
**Int** *enum*

- primary specular = 0 (default)

- clearcoat/moisture specular = 1


Apply iridescence to primary specular lobe or clearcoat/moisture lobe


## iridescence_at_0_incidence
**Float** *bindable*

Default value : 1.0

Iridescence effect at 0 degree viewing angle


## iridescence_at_90_incidence
**Float** *bindable*

Default value : 1.0

Iridescence effect at 90 degree viewing angle


## iridescence_color_control
**Int** *enum*

- use hue interpolation = 0 (default)

- use ramp = 1


use hue interpolation: automatically cycles through hue wheel, use ramp: user specified color ramp


## iridescence_colors
**RgbVector** 

Default value : [[ 1, 0, 0 ], [ 1, 1, 0 ], [ 0, 1, 0 ], [ 0, 1, 1 ], [ 0, 0, 1 ], [ 1, 0, 1 ], [ 1, 0, 0 ]]

List of colors on the ramp


## iridescence_exponent
**Float** *bindable*

Default value : 1.0

Tightens or broadens the distribution of colors


## iridescence_flip_hue_direction
**Bool** 

Default value : False

flip interpolation around the hue wheel to counter-clockwise direction


## iridescence_interpolations
**IntVector** 

Default value : <scene_rdl2.__scene_rdl2__.IntVector object at >

None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |

			Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6


## iridescence_positions
**FloatVector** 

Default value : <scene_rdl2.__scene_rdl2__.FloatVector object at >

ramp positions


## iridescence_primary_color
**Rgb** *bindable*

Default value : [ 1, 0, 0 ]

First color to interpolate from around the hue wheel


## iridescence_ramp_interpolation_mode
**Int** *enum*

- RGB = 0 (default)

- HSV = 1


RGB: lerp in RGB space which matches UI preview but can lose saturation, HSV: lerp in HSV space which preserves saturation


## iridescence_secondary_color
**Rgb** *bindable*

Default value : [ 1, 0, 0 ]

Second color to interpolate to around the hue wheel


## iridescence_thickness
**Float** *bindable*

Default value : 1.0

Controls how much the color spectrum is repeated


</details>

---

<details open>
<summary class="scene-class-attr-group">Moisture attributes</summary>

## independent_moisture_normal
**33554432** 

Default value : None

specifies an independent shading normal (normal map) for the Moisture lobe


## moisture_mask
**Float** *bindable*

Default value : 1.0

bind map here, higher values for oily zones


## moisture_model
**Int** *enum*

- Beckmann = 0

- GGX = 1 (default)


sets the normalized distribution function for the moisture specular.  GGX is currently isotropic only


## moisture_normal_dial
**Float** *bindable*

Default value : 1.0

controls the amount of influence of the alternate Moisture normal


## moisture_refractive_index
**Float** 

Default value : 1.5

defines the Fresnel behavior of moisture, and all underlying skin layers


## moisture_roughness
**Float** *bindable*

Default value : 0.25

roughness of moisture; binding a map here should rarely be necessary


## show_moisture
**Bool** 

Default value : False

enables/disables moisture reflections


## use_independent_moisture_normal
**Bool** 

Default value : False

specifies whether the moisture lobe should use an independent normal


</details>

---

<details open>
<summary class="scene-class-attr-group">Normal attributes</summary>

## input_normal
**33554432** 

Default value : None

specifies an alternate shading normal in the tangent frame (normal map)


## input_normal_dial
**Float** *bindable*

Default value : 1.0

controls the amount of influence of the alternate normal


</details>

---

<details open>
<summary class="scene-class-attr-group">Normal Anti-aliasing attributes</summary>

## normal_AA_dial
**Float** 

Default value : 1.0

Controls the amount roughness compensation from the normal map AA strategy.


## normal_AA_strategy
**Int** *enum*

- none = 0 (default)

- toksvig = 1


Normal map anti-aliasing strategy to use - 'none' uses regular mip-mapping, 'toksvig' increases specular roughness corresponding to the geometric details filtered out because of mip-mapping.


</details>

---

<details open>
<summary class="scene-class-attr-group">Specular attributes</summary>

## anisotropy
**Float** *bindable*

Default value : 0.0

controls the shape of the primary reflection


## refractive_index
**Float** 

Default value : 1.5

defines the Fresnel behavior, (affects reflection and refraction)


## roughness
**Float** *bindable*

Default value : 0.5

the roughness of the surface (currently only affects reflection)


## shading_tangent
**Vec2f** *bindable*

Default value : [ 1, 0 ]

controls the orientation of anistropy


## show_specular
**Bool** 

Default value : True

enables/disables specular reflections


## specular_model
**Int** *enum*

- Beckmann = 0

- GGX = 1 (default)


sets the normalized distribution function for specular.  GGX is currently isotropic only


</details>

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

## extra_aovs
**Map** 

Default value : None

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


## label
**String** 

Default value : 

label used in material and light aovs


## priority
**Int** 

Default value : 0

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


</details>

