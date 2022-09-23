---
title: DwaRefractiveMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# DwaRefractiveMaterial

**ROOTSHADER MATERIAL SHADER DWABASELAYERABLE**

Documentation for class DwaRefractiveMaterial



---

## <p style="color:blue;">Advanced attributes</p>

## specular

**Float** *bindable*


Default value : 1.0




enables/disables specular reflections (binary 0|1 for plausibility)






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


Default value : <scene_rdl2.__scene_rdl2__.IntVector object at 0x7fe3b95390c8>




None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |

			Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6




## iridescence_positions

**FloatVector** 


Default value : <scene_rdl2.__scene_rdl2__.FloatVector object at 0x7fe3b9539140>




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





