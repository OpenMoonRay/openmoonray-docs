---
title: HairDiffuseMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# HairDiffuseMaterial
**ROOTSHADER MATERIAL SHADER**

---

<details open>
<summary class="scene-class-attr-group">Advanced attributes</summary>

<h2>back_hair_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

(advanced only) hair color used for back-lit hair (transmission/forward reflectance)


<h2>front_hair_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

(advanced only) hair color used for front-lit hair (backward reflectance)


<h2>sss_trace_set</h2>
<b>Traceset</b>  

Default value : None  

Set of geometries that contribute neighboring subsurface points. By default, only the geometry associated with this material contributes to subsurface. If you want adjacent geometry with different material to contribute as well, specify all those parts here.


<h2>use_independent_front_and_back_hair_color</h2>
<b>Bool</b>  

Default value : False  

(advanced) use a separate hair color for front and back


</details>


<details open>
<summary class="scene-class-attr-group">Common attributes</summary>

<h2>casts_caustics</h2>
<b>Bool</b>  

Default value : False  

allows continuation of caustic light paths.


<h2>presence</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).


</details>


<details open>
<summary class="scene-class-attr-group">Emission attributes</summary>

<h2>emission</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

the energy emitted from this material


<h2>show_emission</h2>
<b>Bool</b>  

Default value : False  

enables/disable emission


</details>


<details open>
<summary class="scene-class-attr-group">Subsurface attributes</summary>

<h2>bssrdf</h2>
<b>Int</b>  *enum*

- normalized diffusion = 0 (default)

- dipole = 1


0 for NormalizedDiffuse, 1 for Dipole. Random walk unsupported for hair.


<h2>enable_sss_input_normal</h2>
<b>Bool</b>  

Default value : False  

enables sampling the normal map for sss samples. More accurate but potentially expensive


<h2>input_normal</h2>
<b>33554432</b>  

Default value : None  

specifies an alternate shading normal (only for SSS lobe)


<h2>input_normal_dial</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

controls influence of input normal versus hair normal for SSS


<h2>scattering_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

the subsurface scattering 'falloff' color


<h2>scattering_radius</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

the distance the light scatters beneath the surface.  When 0 surface diffuse is used


<h2>subsurface_blend</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

0 is fully hair diffuse, 1 is fully SSS. No effect if scattering radius is 0.


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>extra_aovs</h2>
<b>Map</b>  

Default value : None  

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


<h2>hair_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>hair_color</b> needs to be written</p>


<h2>label</h2>
<b>String</b>  

Default value :   

label used in material and light aovs


<h2>priority</h2>
<b>Int</b>  

Default value : 0  

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


</details>

