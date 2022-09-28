---
title: HairDiffuseMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# HairDiffuseMaterial

**ROOTSHADER MATERIAL SHADER**

Documentation for class HairDiffuseMaterial



---

## <p class="scene-class-attr-group">Advanced attributes</p>

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

## <p class="scene-class-attr-group">Common attributes</p>

## casts_caustics

**Bool** 


Default value : False




allows continuation of caustic light paths.




## presence

**Float** *bindable*


Default value : 1.0




controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).






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

## <p class="scene-class-attr-group">Subsurface attributes</p>

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

## <p class="scene-class-attr-group">General attributes</p>

## extra_aovs

**Map** 


Default value : None




Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result




## hair_color

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




<p class="scene-class-attr-missing">Documentation for the attribute <b>hair_color</b> needs to be written</p>




## label

**String** 


Default value : 




label used in material and light aovs




## priority

**Int** 


Default value : 0




The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.





