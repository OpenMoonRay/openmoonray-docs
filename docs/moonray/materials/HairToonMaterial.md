---
title: HairToonMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# HairToonMaterial

**ROOTSHADER MATERIAL SHADER**

Documentation for class HairToonMaterial



---

## <p style="color:blue;">Advanced attributes</p>

## back_hair_color

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




(advanced only) hair color used for back-lit hair (transmission/forward reflectance)




## front_hair_color

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




(advanced only) hair color used for front-lit hair (backward reflectance)




## sss_trace_set

**Traceset** 


Default value : None




Set of geometries that contribute neighboring subsurface points. By default, only the geometry associated with this material contributes to subsurface. If you want adjacent geometry with different material to contribute as well, specify all those parts here.




## use_independent_front_and_back_hair_color

**Bool** 


Default value : False




(advanced) use a separate hair color for front and back






---

## <p style="color:blue;">Common attributes</p>

## presence

**Float** *bindable*


Default value : 1.0




controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).






---

## <p style="color:blue;">Diffuse attributes</p>

## hair_color

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




<p style="color:red;">Documentation for the attribute <b>hair_color</b> needs to be written</p>




## hair_diffuse

**Float** *bindable*


Default value : 1.0




Amount of hair diffuse




## show_hair_diffuse

**Bool** 


Default value : True




Show the hair diffuse lobe






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

## <p style="color:blue;">Specular 1 attributes</p>

## specular_1_enable_indirect_reflections

**Bool** 


Default value : False




enables indirect GGX reflections for toon specular model




## specular_1_enable_input_normal

**Bool** 


Default value : False




enables sampling the normal map for toon specular 1




## specular_1_indirect_reflections_intensity

**Float** *bindable*


Default value : 1.0




the intensity for the indirect reflections of the toon specular model




## specular_1_indirect_reflections_roughness

**Float** *bindable*


Default value : 0.5




the roughness for the indirect reflections of the toon specular model




## specular_1_input_U

**Vec3f** *bindable*


Default value : [ 0, 0, 0 ]




input U / tangent for specular stretch




## specular_1_input_V

**Vec3f** *bindable*


Default value : [ 0, 0, 0 ]




input V / bitangent for specular stretch




## specular_1_input_normal

**33554432** 


Default value : None




specifies an alternate shading normal for toon specular 1




## specular_1_input_normal_dial

**Float** *bindable*


Default value : 1.0




controls influence of input normal versus hair normal for toon specular 1




## specular_1_intensity

**Float** *bindable*


Default value : 1.0




The overall intensity of the specular response




## specular_1_interpolations

**IntVector** 


Default value : <scene_rdl2.__scene_rdl2__.IntVector object at 0x7f9e66635c80>




None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |

			Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6




## specular_1_model

**Int** *enum*



- Toon_Surface = 2 (default)

- Toon_Hair = 3





sets the normalized distribution function for specular




## specular_1_positions

**FloatVector** 


Default value : <scene_rdl2.__scene_rdl2__.FloatVector object at 0x7f9e66635b90>




ramp positions, maximum 10 allowed




## specular_1_roughness

**Float** *bindable*


Default value : 0.899999976158




The roughness of the toon specular.   Smaller values produce tighter highlights




## specular_1_show

**Bool** 


Default value : True




Show first toon specular lobe




## specular_1_stretch_u

**Float** *bindable*


Default value : 0.0




Amount to stretch or compress the specular in the u direction 




## specular_1_stretch_v

**Float** *bindable*


Default value : 0.0




Amount to stretch or compress the specular in the v direction 




## specular_1_tint

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




<p style="color:red;">Documentation for the attribute <b>specular_1_tint</b> needs to be written</p>




## specular_1_use_input_vectors_for_stretch

**Bool** 


Default value : False




when checked, use input_U and V. otherwise use geometry dPds/t




## specular_1_values

**FloatVector** 


Default value : <scene_rdl2.__scene_rdl2__.FloatVector object at 0x7f9e66635aa0>




List of colors on the ramp






---

## <p style="color:blue;">Specular 2 attributes</p>

## specular_2_enable_indirect_reflections

**Bool** 


Default value : False




enables indirect GGX reflections for toon specular model




## specular_2_enable_input_normal

**Bool** 


Default value : False




enables sampling the normal map for toon specular 2




## specular_2_indirect_reflections_intensity

**Float** *bindable*


Default value : 1.0




the intensity for the indirect reflections of the toon specular model




## specular_2_indirect_reflections_roughness

**Float** *bindable*


Default value : 0.5




the roughness for the indirect reflections of the toon specular model




## specular_2_input_U

**Vec3f** *bindable*


Default value : [ 0, 0, 0 ]




input U / tangent for specular stretch




## specular_2_input_V

**Vec3f** *bindable*


Default value : [ 0, 0, 0 ]




input V / bitangent for specular stretch




## specular_2_input_normal

**33554432** 


Default value : None




specifies an alternate shading normal for toon specular 2




## specular_2_input_normal_dial

**Float** *bindable*


Default value : 1.0




controls influence of input normal versus hair normal for toon specular 2




## specular_2_intensity

**Float** *bindable*


Default value : 1.0




The overall intensity of the specular response




## specular_2_interpolations

**IntVector** 


Default value : <scene_rdl2.__scene_rdl2__.IntVector object at 0x7f9e66635d70>




None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |

			Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6




## specular_2_model

**Int** *enum*



- Toon_Surface = 2 (default)

- Toon_Hair = 3





sets the normalized distribution function for specular




## specular_2_positions

**FloatVector** 


Default value : <scene_rdl2.__scene_rdl2__.FloatVector object at 0x7f9e66635cf8>




ramp positions, maximum 10 allowed




## specular_2_roughness

**Float** *bindable*


Default value : 0.899999976158




The roughness of the toon specular.   Smaller values produce tighter highlights




## specular_2_show

**Bool** 


Default value : False




Show second toon specular lobe




## specular_2_stretch_u

**Float** *bindable*


Default value : 0.0




Amount to stretch or compress the specular in the u direction 




## specular_2_stretch_v

**Float** *bindable*


Default value : 0.0




Amount to stretch or compress the specular in the v direction 




## specular_2_tint

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




<p style="color:red;">Documentation for the attribute <b>specular_2_tint</b> needs to be written</p>




## specular_2_use_input_vectors_for_stretch

**Bool** 


Default value : False




when checked, use input_U and V. otherwise use geometry dPds/t




## specular_2_values

**FloatVector** 


Default value : <scene_rdl2.__scene_rdl2__.FloatVector object at 0x7f9e6664c230>




List of colors on the ramp






---

## <p style="color:blue;">Specular 3 attributes</p>

## specular_3_enable_indirect_reflections

**Bool** 


Default value : False




enables indirect GGX reflections for toon specular model




## specular_3_enable_input_normal

**Bool** 


Default value : False




enables sampling the normal map for toon specular 3




## specular_3_indirect_reflections_intensity

**Float** *bindable*


Default value : 1.0




the intensity for the indirect reflections of the toon specular model




## specular_3_indirect_reflections_roughness

**Float** *bindable*


Default value : 0.5




the roughness for the indirect reflections of the toon specular model




## specular_3_input_U

**Vec3f** *bindable*


Default value : [ 0, 0, 0 ]




input U / tangent for specular stretch




## specular_3_input_V

**Vec3f** *bindable*


Default value : [ 0, 0, 0 ]




input V / bitangent for specular stretch




## specular_3_input_normal

**33554432** 


Default value : None




specifies an alternate shading normal for toon specular 3




## specular_3_input_normal_dial

**Float** *bindable*


Default value : 1.0




controls influence of input normal versus hair normal for toon specular 3




## specular_3_intensity

**Float** *bindable*


Default value : 1.0




The overall intensity of the specular response




## specular_3_interpolations

**IntVector** 


Default value : <scene_rdl2.__scene_rdl2__.IntVector object at 0x7f9e6664c2a8>




None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |

			Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6




## specular_3_model

**Int** *enum*



- Toon_Surface = 2 (default)

- Toon_Hair = 3





sets the normalized distribution function for specular




## specular_3_positions

**FloatVector** 


Default value : <scene_rdl2.__scene_rdl2__.FloatVector object at 0x7f9e6664c320>




ramp positions, maximum 10 allowed




## specular_3_roughness

**Float** *bindable*


Default value : 0.899999976158




The roughness of the toon specular.   Smaller values produce tighter highlights




## specular_3_show

**Bool** 


Default value : False




Show third toon specular lobe




## specular_3_stretch_u

**Float** *bindable*


Default value : 0.0




Amount to stretch or compress the specular in the u direction 




## specular_3_stretch_v

**Float** *bindable*


Default value : 0.0




Amount to stretch or compress the specular in the v direction 




## specular_3_tint

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




<p style="color:red;">Documentation for the attribute <b>specular_3_tint</b> needs to be written</p>




## specular_3_use_input_vectors_for_stretch

**Bool** 


Default value : False




when checked, use input_U and V. otherwise use geometry dPds/t




## specular_3_values

**FloatVector** 


Default value : <scene_rdl2.__scene_rdl2__.FloatVector object at 0x7f9e6664c398>




List of colors on the ramp






---

## <p style="color:blue;">Subsurface attributes</p>

## bssrdf

**Int** *enum*



- normalized diffusion = 0 (default)

- dipole = 1





0 for NormalizedDiffuse, 1 for Dipole. Random walk unsupported for hair.




## enable_sss_input_normal

**Bool** 


Default value : False




enables sampling the normal map for sss samples. More accurate but potentially expensive




## input_normal

**33554432** 


Default value : None




specifies an alternate shading normal (only for SSS lobe)




## input_normal_dial

**Float** *bindable*


Default value : 1.0




controls influence of input normal versus hair normal for SSS




## scattering_color

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




the subsurface scattering 'falloff' color




## scattering_radius

**Float** *bindable*


Default value : 0.0




the distance the light scatters beneath the surface.  When 0 surface diffuse is used




## subsurface_blend

**Float** *bindable*


Default value : 1.0




0 is fully hair diffuse, 1 is fully SSS. No effect if scattering radius is 0.






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





