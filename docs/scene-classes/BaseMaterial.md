---
title: BaseMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# BaseMaterial

**ROOTSHADER MATERIAL SHADER**

Documentation for class BaseMaterial



---

## <p style="color:blue;">Diffuse attributes</p>

## diffuse

**Bool** 


Default value : True




<p style="color:red;">Documentation for the attribute <b>diffuse</b> needs to be written</p>




## diffuse_color

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




<p style="color:red;">Documentation for the attribute <b>diffuse_color</b> needs to be written</p>




## diffuse_factor

**Float** 


Default value : 1.0




<p style="color:red;">Documentation for the attribute <b>diffuse_factor</b> needs to be written</p>






---

## <p style="color:blue;">Directional Diffuse attributes</p>

## directional_diffuse

**Bool** 


Default value : True




<p style="color:red;">Documentation for the attribute <b>directional_diffuse</b> needs to be written</p>




## directional_diffuse_color

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




<p style="color:red;">Documentation for the attribute <b>directional_diffuse_color</b> needs to be written</p>




## directional_diffuse_factor

**Float** 


Default value : 0.0




<p style="color:red;">Documentation for the attribute <b>directional_diffuse_factor</b> needs to be written</p>




## directional_diffuse_roughness

**Float** *bindable*


Default value : 0.5




<p style="color:red;">Documentation for the attribute <b>directional_diffuse_roughness</b> needs to be written</p>






---

## <p style="color:blue;">Emission attributes</p>

## emission

**Bool** 


Default value : True




<p style="color:red;">Documentation for the attribute <b>emission</b> needs to be written</p>




## emission_color

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




<p style="color:red;">Documentation for the attribute <b>emission_color</b> needs to be written</p>




## emission_factor

**Float** 


Default value : 0.0




<p style="color:red;">Documentation for the attribute <b>emission_factor</b> needs to be written</p>






---

## <p style="color:blue;">Iridescence attributes</p>

## iridescence

**Bool** 


Default value : False




<p style="color:red;">Documentation for the attribute <b>iridescence</b> needs to be written</p>




## iridescence_at_0_incidence

**Float** *bindable*


Default value : 1.0




Iridescence effect at 0 degree viewing angle




## iridescence_exponent

**Float** *bindable*


Default value : 1.0




Tightens or broadens the distribution of colors




## iridescence_factor

**Float** *bindable*


Default value : 1.0




overall multiplier on effect of iridescence




## iridescence_flip_hue_direction

**Bool** 


Default value : False




<p style="color:red;">Documentation for the attribute <b>iridescence_flip_hue_direction</b> needs to be written</p>




## iridescence_primary_color

**Rgb** 


Default value : [ 1, 0, 0 ]




First color to interpolate from around the hue wheel




## iridescence_secondary_color

**Rgb** 


Default value : [ 1, 0, 0 ]




Second color to interpolate to around the hue wheel




## iridescence_thickness

**Float** *bindable*


Default value : 1.0




Controls how much the color spectrum is repeated






---

## <p style="color:blue;">Normal attributes</p>

## input_normal_space

**Int** *enum*



- tangent = 0 (default)

- render = 1





Specifies what space the input normal is in.  Usually this is tangent space for texture maps and render space for projections






---

## <p style="color:blue;">Opacity attributes</p>

## opacity

**Bool** 


Default value : True




<p style="color:red;">Documentation for the attribute <b>opacity</b> needs to be written</p>




## opacity_factor

**Float** *bindable*


Default value : 1.0




<p style="color:red;">Documentation for the attribute <b>opacity_factor</b> needs to be written</p>






---

## <p style="color:blue;">Specular attributes</p>

## retroreflectivity

**Float** *bindable*


Default value : 0.0




<p style="color:red;">Documentation for the attribute <b>retroreflectivity</b> needs to be written</p>




## specular

**Bool** 


Default value : True




<p style="color:red;">Documentation for the attribute <b>specular</b> needs to be written</p>




## specular_color

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




<p style="color:red;">Documentation for the attribute <b>specular_color</b> needs to be written</p>




## specular_factor

**Float** 


Default value : 0.10000000149




<p style="color:red;">Documentation for the attribute <b>specular_factor</b> needs to be written</p>




## specular_roughness

**Float** *bindable*


Default value : 0.300000011921




<p style="color:red;">Documentation for the attribute <b>specular_roughness</b> needs to be written</p>






---

## <p style="color:blue;">Translucency attributes</p>

## translucency

**Bool** 


Default value : True




<p style="color:red;">Documentation for the attribute <b>translucency</b> needs to be written</p>




## translucency_color

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




<p style="color:red;">Documentation for the attribute <b>translucency_color</b> needs to be written</p>




## translucency_factor

**Float** 


Default value : 0.0




<p style="color:red;">Documentation for the attribute <b>translucency_factor</b> needs to be written</p>




## translucency_falloff

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




<p style="color:red;">Documentation for the attribute <b>translucency_falloff</b> needs to be written</p>




## translucency_radius

**Float** *bindable*


Default value : 1.0




<p style="color:red;">Documentation for the attribute <b>translucency_radius</b> needs to be written</p>






---

## <p style="color:blue;">Translucent Diffuse attributes</p>

## translucent_diffuse

**Bool** 


Default value : False




<p style="color:red;">Documentation for the attribute <b>translucent_diffuse</b> needs to be written</p>




## translucent_diffuse_color

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




<p style="color:red;">Documentation for the attribute <b>translucent_diffuse_color</b> needs to be written</p>




## translucent_diffuse_factor

**Float** 


Default value : 1.0




<p style="color:red;">Documentation for the attribute <b>translucent_diffuse_factor</b> needs to be written</p>






---

## <p style="color:blue;">Transmission attributes</p>

## transmission

**Bool** 


Default value : True




<p style="color:red;">Documentation for the attribute <b>transmission</b> needs to be written</p>




## transmission_color

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




<p style="color:red;">Documentation for the attribute <b>transmission_color</b> needs to be written</p>




## transmission_factor

**Float** 


Default value : 0.0




<p style="color:red;">Documentation for the attribute <b>transmission_factor</b> needs to be written</p>






---

## <p style="color:blue;">General attributes</p>

## anisotropic_direction

**Vec2f** *bindable*


Default value : [ 1, 0 ]




<p style="color:red;">Documentation for the attribute <b>anisotropic_direction</b> needs to be written</p>




## anisotropy

**Float** *bindable*


Default value : 0.0




<p style="color:red;">Documentation for the attribute <b>anisotropy</b> needs to be written</p>




## casts_caustics

**Bool** 


Default value : False




<p style="color:red;">Documentation for the attribute <b>casts_caustics</b> needs to be written</p>




## extra_aovs

**Map** 


Default value : None




Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result




## fresnel_factor

**Float** *bindable*


Default value : 1.0




<p style="color:red;">Documentation for the attribute <b>fresnel_factor</b> needs to be written</p>




## index_of_refraction

**Float** 


Default value : 1.0




affects transmission and translucency




## input_normal

**Vec3f** *bindable*


Default value : [ 0, 0, 1 ]




<p style="color:red;">Documentation for the attribute <b>input_normal</b> needs to be written</p>




## input_normal_dial

**Float** 


Default value : 1.0




<p style="color:red;">Documentation for the attribute <b>input_normal_dial</b> needs to be written</p>




## label

**String** 


Default value : 




label used in material and light aovs




## priority

**Int** 


Default value : 0




The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.




## use_fresnel

**Bool** 


Default value : True




<p style="color:red;">Documentation for the attribute <b>use_fresnel</b> needs to be written</p>





