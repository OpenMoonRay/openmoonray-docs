---
title: BaseMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# BaseMaterial
**ROOTSHADER MATERIAL SHADER**

---

<details open>
<summary class="scene-class-attr-group">Diffuse attributes</summary>

<h2>diffuse</h2>
<b>Bool</b>  

Default value : True  

<p class="scene-class-attr-missing">Documentation for the attribute <b>diffuse</b> needs to be written</p>


<h2>diffuse_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>diffuse_color</b> needs to be written</p>


<h2>diffuse_factor</h2>
<b>Float</b>  

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>diffuse_factor</b> needs to be written</p>


</details>


<details open>
<summary class="scene-class-attr-group">Directional Diffuse attributes</summary>

<h2>directional_diffuse</h2>
<b>Bool</b>  

Default value : True  

<p class="scene-class-attr-missing">Documentation for the attribute <b>directional_diffuse</b> needs to be written</p>


<h2>directional_diffuse_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>directional_diffuse_color</b> needs to be written</p>


<h2>directional_diffuse_factor</h2>
<b>Float</b>  

Default value : 0.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>directional_diffuse_factor</b> needs to be written</p>


<h2>directional_diffuse_roughness</h2>
<b>Float</b>  *bindable*

Default value : 0.5  

<p class="scene-class-attr-missing">Documentation for the attribute <b>directional_diffuse_roughness</b> needs to be written</p>


</details>


<details open>
<summary class="scene-class-attr-group">Emission attributes</summary>

<h2>emission</h2>
<b>Bool</b>  

Default value : True  

<p class="scene-class-attr-missing">Documentation for the attribute <b>emission</b> needs to be written</p>


<h2>emission_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>emission_color</b> needs to be written</p>


<h2>emission_factor</h2>
<b>Float</b>  

Default value : 0.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>emission_factor</b> needs to be written</p>


</details>


<details open>
<summary class="scene-class-attr-group">Iridescence attributes</summary>

<h2>iridescence</h2>
<b>Bool</b>  

Default value : False  

<p class="scene-class-attr-missing">Documentation for the attribute <b>iridescence</b> needs to be written</p>


<h2>iridescence_at_0_incidence</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

Iridescence effect at 0 degree viewing angle


<h2>iridescence_exponent</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

Tightens or broadens the distribution of colors


<h2>iridescence_factor</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

overall multiplier on effect of iridescence


<h2>iridescence_flip_hue_direction</h2>
<b>Bool</b>  

Default value : False  

<p class="scene-class-attr-missing">Documentation for the attribute <b>iridescence_flip_hue_direction</b> needs to be written</p>


<h2>iridescence_primary_color</h2>
<b>Rgb</b>  

Default value : [ 1, 0, 0 ]  

First color to interpolate from around the hue wheel


<h2>iridescence_secondary_color</h2>
<b>Rgb</b>  

Default value : [ 1, 0, 0 ]  

Second color to interpolate to around the hue wheel


<h2>iridescence_thickness</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

Controls how much the color spectrum is repeated


</details>


<details open>
<summary class="scene-class-attr-group">Normal attributes</summary>

<h2>input_normal_space</h2>
<b>Int</b>  *enum*

- tangent = 0 (default)

- render = 1


Specifies what space the input normal is in.  Usually this is tangent space for texture maps and render space for projections


</details>


<details open>
<summary class="scene-class-attr-group">Opacity attributes</summary>

<h2>opacity</h2>
<b>Bool</b>  

Default value : True  

<p class="scene-class-attr-missing">Documentation for the attribute <b>opacity</b> needs to be written</p>


<h2>opacity_factor</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>opacity_factor</b> needs to be written</p>


</details>


<details open>
<summary class="scene-class-attr-group">Specular attributes</summary>

<h2>retroreflectivity</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>retroreflectivity</b> needs to be written</p>


<h2>specular</h2>
<b>Bool</b>  

Default value : True  

<p class="scene-class-attr-missing">Documentation for the attribute <b>specular</b> needs to be written</p>


<h2>specular_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>specular_color</b> needs to be written</p>


<h2>specular_factor</h2>
<b>Float</b>  

Default value : 0.10000000149  

<p class="scene-class-attr-missing">Documentation for the attribute <b>specular_factor</b> needs to be written</p>


<h2>specular_roughness</h2>
<b>Float</b>  *bindable*

Default value : 0.300000011921  

<p class="scene-class-attr-missing">Documentation for the attribute <b>specular_roughness</b> needs to be written</p>


</details>


<details open>
<summary class="scene-class-attr-group">Translucency attributes</summary>

<h2>translucency</h2>
<b>Bool</b>  

Default value : True  

<p class="scene-class-attr-missing">Documentation for the attribute <b>translucency</b> needs to be written</p>


<h2>translucency_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>translucency_color</b> needs to be written</p>


<h2>translucency_factor</h2>
<b>Float</b>  

Default value : 0.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>translucency_factor</b> needs to be written</p>


<h2>translucency_falloff</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>translucency_falloff</b> needs to be written</p>


<h2>translucency_radius</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>translucency_radius</b> needs to be written</p>


</details>


<details open>
<summary class="scene-class-attr-group">Translucent Diffuse attributes</summary>

<h2>translucent_diffuse</h2>
<b>Bool</b>  

Default value : False  

<p class="scene-class-attr-missing">Documentation for the attribute <b>translucent_diffuse</b> needs to be written</p>


<h2>translucent_diffuse_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>translucent_diffuse_color</b> needs to be written</p>


<h2>translucent_diffuse_factor</h2>
<b>Float</b>  

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>translucent_diffuse_factor</b> needs to be written</p>


</details>


<details open>
<summary class="scene-class-attr-group">Transmission attributes</summary>

<h2>transmission</h2>
<b>Bool</b>  

Default value : True  

<p class="scene-class-attr-missing">Documentation for the attribute <b>transmission</b> needs to be written</p>


<h2>transmission_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>transmission_color</b> needs to be written</p>


<h2>transmission_factor</h2>
<b>Float</b>  

Default value : 0.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>transmission_factor</b> needs to be written</p>


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>anisotropic_direction</h2>
<b>Vec2f</b>  *bindable*

Default value : [ 1, 0 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>anisotropic_direction</b> needs to be written</p>


<h2>anisotropy</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>anisotropy</b> needs to be written</p>


<h2>casts_caustics</h2>
<b>Bool</b>  

Default value : False  

<p class="scene-class-attr-missing">Documentation for the attribute <b>casts_caustics</b> needs to be written</p>


<h2>extra_aovs</h2>
<b>Map</b>  

Default value : None  

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


<h2>fresnel_factor</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>fresnel_factor</b> needs to be written</p>


<h2>index_of_refraction</h2>
<b>Float</b>  

Default value : 1.0  

affects transmission and translucency


<h2>input_normal</h2>
<b>Vec3f</b>  *bindable*

Default value : [ 0, 0, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>input_normal</b> needs to be written</p>


<h2>input_normal_dial</h2>
<b>Float</b>  

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>input_normal_dial</b> needs to be written</p>


<h2>label</h2>
<b>String</b>  

Default value :   

label used in material and light aovs


<h2>priority</h2>
<b>Int</b>  

Default value : 0  

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


<h2>use_fresnel</h2>
<b>Bool</b>  

Default value : True  

<p class="scene-class-attr-missing">Documentation for the attribute <b>use_fresnel</b> needs to be written</p>


</details>

