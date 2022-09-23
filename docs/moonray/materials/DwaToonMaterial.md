---
title: DwaToonMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# DwaToonMaterial

**ROOTSHADER MATERIAL SHADER DWABASELAYERABLE**

Documentation for class DwaToonMaterial



---

## <p style="color:blue;">Advanced attributes</p>

## prevent_light_culling

**Bool** 


Default value : False




WARNING: Experimental and must be used with max_depth: 0 and only for non-photoreal looks. Prevents culling of lights so surfaces can be lit purely with respect to the shading normal irrespective of geometry




## specular

**Float** *bindable*


Default value : 1.0




enables/disables specular reflections (binary 0|1 for plausibility)




## sss_trace_set

**Traceset** 


Default value : None




Set of geometries that contribute neighboring subsurface points. By default, only the geometry associated with this material contributes to subsurface. If you want adjacent geometry with different material to contribute as well, specify all those parts here.






---

## <p style="color:blue;">Clearcoat attributes</p>

## clearcoat

**Float** *bindable*


Default value : 1.0




enables/disables clearcoat (binary 0|1 for plausibility)




## clearcoat_attenuation_color

**Rgb** *bindable*


Default value : [ 0.5, 0.5, 0.5 ]




the attenuation color of the clearcoat when 'cleacoat thickness' > 0




## clearcoat_bending

**Bool** 


Default value : True




(advanced, recommended ON) bends rays based on the clearcoat-refractive-index before evaluating the lobes under clearcoat




## clearcoat_model

**Int** *enum*



- Beckmann = 0

- GGX = 1 (default)





sets the normalized distribution function for clearcoat.  GGX is currently isotropic only




## clearcoat_normal_dial

**Float** *bindable*


Default value : 1.0




controls the amount of infuence of the alternate clearcoat normal




## clearcoat_refractive_index

**Float** 


Default value : 1.5




defines the Fresnel behavior




## clearcoat_roughness

**Float** *bindable*


Default value : 0.10000000149




the roughness of the clearcoat lobe




## clearcoat_thickness

**Float** *bindable*


Default value : 0.0




the thickness of the virtual clearcoat layer. Values > 0 enable absorption




## independent_clearcoat_normal

**33554432** 


Default value : None




specifies an independent shading normal (normal map) for the clearcoat lobe




## show_clearcoat

**Bool** 


Default value : False




enables/disables clearcoat




## use_independent_clearcoat_normal

**Bool** 


Default value : False




specifies whether the clearcoat lobe should use an independent normal






---

## <p style="color:blue;">Common attributes</p>

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






---

## <p style="color:blue;">Diffuse attributes</p>

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




## colors

**RgbVector** 


Default value : [[ 1, 1, 1 ], [ 0.75, 0.75, 0.75 ], [ 0.25, 0.25, 0.25 ], [ 0, 0, 0 ]]




List of colors on the ramp




## diffuse_flatness

**Float** *bindable*


Default value : 0.0




Flattens out the diffuse response by bending the normal towards the light direction




## diffuse_flatness_falloff

**Float** *bindable*


Default value : 0.0




Fades out flatness with respect to light direction




## diffuse_model

**Int** *enum*



- oren-nayar = 0 (default)

- ramp = 1





The method used to render the diffuse response.




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




## extend_ramp

**Bool** 


Default value : False




Extends the last ramp color to unlit portions. IMPORTANT: Only works in conjuction with prevent_light_culling ON and visible_shadows OFF




## interpolations

**IntVector** 


Default value : <scene_rdl2.__scene_rdl2__.IntVector object at 0x7fe3b957fcf8>




None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |

			Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6




## positions

**FloatVector** 


Default value : <scene_rdl2.__scene_rdl2__.FloatVector object at 0x7fe3b9546488>




ramp positions, maximum 10 allowed




## ramp_color_multiplier0

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




Bindable multiplier on the ramp color




## ramp_color_multiplier1

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




Bindable multiplier on the ramp color




## ramp_color_multiplier2

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




Bindable multiplier on the ramp color




## ramp_color_multiplier3

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




Bindable multiplier on the ramp color




## ramp_color_multiplier4

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




Bindable multiplier on the ramp color




## ramp_color_multiplier5

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




Bindable multiplier on the ramp color




## ramp_color_multiplier6

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




Bindable multiplier on the ramp color




## ramp_color_multiplier7

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




Bindable multiplier on the ramp color




## ramp_color_multiplier8

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




Bindable multiplier on the ramp color




## ramp_color_multiplier9

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




Bindable multiplier on the ramp color




## ramp_position_offset0

**Float** *bindable*


Default value : 0.0




Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds




## ramp_position_offset1

**Float** *bindable*


Default value : 0.0




Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds




## ramp_position_offset2

**Float** *bindable*


Default value : 0.0




Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds




## ramp_position_offset3

**Float** *bindable*


Default value : 0.0




Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds




## ramp_position_offset4

**Float** *bindable*


Default value : 0.0




Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds




## ramp_position_offset5

**Float** *bindable*


Default value : 0.0




Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds




## ramp_position_offset6

**Float** *bindable*


Default value : 0.0




Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds




## ramp_position_offset7

**Float** *bindable*


Default value : 0.0




Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds




## ramp_position_offset8

**Float** *bindable*


Default value : 0.0




Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds




## ramp_position_offset9

**Float** *bindable*


Default value : 0.0




Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds




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




## terminator_shift

**Float** *bindable*


Default value : 0.0500000007451




Controls how the diffuse ligthing falls off.  Values greater than 0.0 shift the falloff point closer to the light source and values less than 0.0 shift the falloff point further away






---

## <p style="color:blue;">Emission attributes</p>

## emission

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




the energy emitted from this material




## show_emission

**Bool** 


Default value : False




enables/disable emission






---

## <p style="color:blue;">Fuzz attributes</p>

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






---

## <p style="color:blue;">Glitter attributes</p>

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






---

## <p style="color:blue;">Iridescence attributes</p>

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


Default value : <scene_rdl2.__scene_rdl2__.IntVector object at 0x7fe3b9546398>




None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |

			Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6




## iridescence_positions

**FloatVector** 


Default value : <scene_rdl2.__scene_rdl2__.FloatVector object at 0x7fe3b9546410>




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






---

## <p style="color:blue;">Normal attributes</p>

## input_normal

**33554432** 


Default value : None




specifies an alternate shading normal in the tangent frame (normal map)




## input_normal_dial

**Float** *bindable*


Default value : 1.0




controls the amount of influence of the alternate normal






---

## <p style="color:blue;">Normal Anti-aliasing attributes</p>

## normal_AA_dial

**Float** 


Default value : 1.0




Controls the amount roughness compensation from the normal map AA strategy.




## normal_AA_strategy

**Int** *enum*



- none = 0 (default)

- toksvig = 1





Normal map anti-aliasing strategy to use - 'none' uses regular mip-mapping, 'toksvig' increases specular roughness corresponding to the geometric details filtered out because of mip-mapping.






---

## <p style="color:blue;">Specular attributes</p>

## anisotropy

**Float** *bindable*


Default value : 0.0




controls the shape of the primary reflection




## metallic

**Float** *bindable*


Default value : 0.0




enables/disables metallic model (binary 0|1 for plausibility)




## metallic_color

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




the overall reflection color, defines Fresnel behavior




## metallic_edge_color

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




the reflection color at grazing angles, defines Fresnel behavior




## refractive_index

**Float** 


Default value : 1.5




defines the Fresnel behavior (affects only refraction when model is Toon)




## roughness

**Float** *bindable*


Default value : 0.5




the roughness of the surface




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

- Toon = 2





sets the normalized distribution function for specular.  GGX is currently isotropic only




## toon_specular_enable_indirect_reflections

**Bool** 


Default value : False




enables indirect GGX reflections for toon specular model




## toon_specular_enable_input_normal

**Bool** 


Default value : False




enables sampling the normal map for toon toon specular




## toon_specular_indirect_reflections_intensity

**Float** *bindable*


Default value : 1.0




the intensity for the indirect reflections of the toon specular model




## toon_specular_indirect_reflections_roughness

**Float** *bindable*


Default value : 0.5




the roughness for the indirect reflections of the toon specular model




## toon_specular_input_U

**Vec3f** *bindable*


Default value : [ 0, 0, 0 ]




input U / tangent for specular stretch




## toon_specular_input_V

**Vec3f** *bindable*


Default value : [ 0, 0, 0 ]




input V / bitangent for specular stretch




## toon_specular_input_normal

**33554432** 


Default value : None




specifies an alternate shading normal for toon toon specular




## toon_specular_input_normal_dial

**Float** *bindable*


Default value : 1.0




controls influence of input normal versus hair normal for toon toon specular




## toon_specular_intensity

**Float** *bindable*


Default value : 1.0




The overall intensity of the toon specular response




## toon_specular_interpolations

**IntVector** 


Default value : <scene_rdl2.__scene_rdl2__.IntVector object at 0x7fe3b9546500>




None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |

			Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6




## toon_specular_positions

**FloatVector** 


Default value : <scene_rdl2.__scene_rdl2__.FloatVector object at 0x7fe3b9546578>




ramp positions, maximum 10 allowed




## toon_specular_stretch_u

**Float** *bindable*


Default value : 0.0




Amount to stretch or compress the specular in the u direction 




## toon_specular_stretch_v

**Float** *bindable*


Default value : 0.0




Amount to stretch or compress the specular in the v direction 




## toon_specular_tint

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




<p style="color:red;">Documentation for the attribute <b>toon_specular_tint</b> needs to be written</p>




## toon_specular_use_input_vectors_for_stretch

**Bool** 


Default value : False




when checked, use input_U and V. otherwise use geometry dPds/t




## toon_specular_values

**FloatVector** 


Default value : <scene_rdl2.__scene_rdl2__.FloatVector object at 0x7fe3b95465f0>




List of colors on the ramp






---

## <p style="color:blue;">Transmission attributes</p>

## dispersion_abbe_number

**Float** 


Default value : 34.0




The amount of dispersion/chromatic-aberration via refractions. Lower this number to increase the effect. A value of 0 turns off dispersion. Around [25-80] makes sense for realistic glass. Lower values may look better on gemstones.




## independent_transmission_refractive_index

**Float** 


Default value : 1.5




defines a separate IOR for the bending of light with transmission




## independent_transmission_roughness

**Float** *bindable*


Default value : 0.5




separate roughness for transmission




## show_transmission

**Bool** 


Default value : True




enables/disables refractive solid model




## transmission

**Float** *bindable*


Default value : 0.0




enables/disables refractive solid model (binary 0|1 for plausibility)




## transmission_color

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




the desired color of transmitted light




## use_dispersion

**Bool** 


Default value : False




use dispersion effects in transmission




## use_independent_transmission_refractive_index

**Bool** 


Default value : False




use a separate IOR for transmission




## use_independent_transmission_roughness

**Bool** 


Default value : False




use a separate roughness for transmission






---

## <p style="color:blue;">General attributes</p>

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





