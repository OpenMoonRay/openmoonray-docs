---
title: DwaFabricMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# DwaFabricMaterial

**ROOTSHADER MATERIAL SHADER DWABASELAYERABLE**

Documentation for class DwaFabricMaterial



---

## <p class="scene-class-attr-group">Common attributes</p>

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

## <p class="scene-class-attr-group">Diffuse attributes</p>

## albedo

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




the overall surface color as seen from a distance (ie. diffuse color)




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




## fabric_diffuse_scattering

**Float** *bindable*


Default value : 0.20000000298




Amount of diffuse to mix in fabric. A value of 1 means fully diffuse fabric.




## show_diffuse

**Bool** 


Default value : True




enables/disables diffuse reflectance






---

## <p class="scene-class-attr-group">Emission attributes</p>

## emission

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




the energy emitted from this material




## show_emission

**Bool** 


Default value : False




enables/disable emission






---

## <p class="scene-class-attr-group">Fabric attributes</p>

## show_specular

**Bool** 


Default value : True




Enables/disables specular fabric lobes




## use_UVs_for_thread_direction

**Bool** 


Default value : True




Use UV texture coordinates to compute thread direction (along dPds). Switch OFF for seamless camera aligned thread direction.  The warp_thread_direction parameter rotates this direction in tangent space.




## use_independent_weft_attributes

**Bool** 


Default value : False




Use a separate set of attributes for the 'weft' thread specular response.




## warp_color

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




Color of the fabric specular highlights. Or if 'use independent weft attributes' is 'true,' just the color of the fabric specular highlights of the warp threads.




## warp_roughness

**Float** *bindable*


Default value : 0.75




Roughness of the fabric specular highlights. Or if 'use independent weft attributes' is 'true,' just the roughness of the fabric specular highlights of the warp threads.




## weft_color

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




Color of the fabric specular highlights from the weft threads.




## weft_roughness

**Float** *bindable*


Default value : 0.75




Roughness of the fabric specular highlights from the weft threads.






---

## <p class="scene-class-attr-group">Fuzz attributes</p>

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

## <p class="scene-class-attr-group">Glitter attributes</p>

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

## <p class="scene-class-attr-group">Normal attributes</p>

## input_normal

**33554432** 


Default value : None




specifies an alternate shading normal in the tangent frame (normal map)




## input_normal_dial

**Float** *bindable*


Default value : 1.0




controls the amount of influence of the alternate normal






---

## <p class="scene-class-attr-group">Threads attributes</p>

## warp_thread_coverage

**Float** 


Default value : 0.75




When set to 1, creates specular highlights only relative to the warp thread direction. When less than one, starts acting like a 'woven' fabric with specular contributions added in by a corresponding 'weft' thread direction, perpendicular to the 'warp' thread direction.




## warp_thread_direction

**Vec3f** *bindable*


Default value : [ 1, 1, 0 ]




Direction of the major/warp thread for the fabric. The fabric highlights will be relative to this direction.




## warp_thread_elevation

**Float** *bindable*


Default value : 0.0




This attribute can be used to 'elevate/rotate' the threads from their default direction. When laying flat on the surface (thread_direction.z=0), a value around 45 works well for 'silky' looks. Range - -90, +90. When threads are upright (thread_direction.z=1), this attribute can be used to 'dishevel' the threads and create a 'velvety' look (see wiki).






---

## <p class="scene-class-attr-group">General attributes</p>

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





