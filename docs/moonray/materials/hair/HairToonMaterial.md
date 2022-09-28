---
title: HairToonMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# HairToonMaterial
**ROOTSHADER MATERIAL SHADER**

---

<details open>
<summary class="scene-class-attr-group">Advanced attributes</summary>
<p>

<h3>back_hair_color</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

(advanced only) hair color used for back-lit hair (transmission/forward reflectance)


<h3>front_hair_color</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

(advanced only) hair color used for front-lit hair (backward reflectance)


<h3>sss_trace_set</h3>
<b>Traceset</b>  

default: None

Set of geometries that contribute neighboring subsurface points. By default, only the geometry associated with this material contributes to subsurface. If you want adjacent geometry with different material to contribute as well, specify all those parts here.


<h3>use_independent_front_and_back_hair_color</h3>
<b>Bool</b>  

default: False

(advanced) use a separate hair color for front and back


</p>
</details>


<details open>
<summary class="scene-class-attr-group">Common attributes</summary>
<p>

<h3>presence</h3>
<b>Float</b>  *bindable*

default: 1.0

controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).


</p>
</details>


<details open>
<summary class="scene-class-attr-group">Diffuse attributes</summary>
<p>

<h3>hair_color</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

<p class="scene-class-attr-missing">No documentation available</p>


<h3>hair_diffuse</h3>
<b>Float</b>  *bindable*

default: 1.0

Amount of hair diffuse


<h3>show_hair_diffuse</h3>
<b>Bool</b>  

default: True

Show the hair diffuse lobe


</p>
</details>


<details open>
<summary class="scene-class-attr-group">Emission attributes</summary>
<p>

<h3>emission</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

the energy emitted from this material


<h3>show_emission</h3>
<b>Bool</b>  

default: False

enables/disable emission


</p>
</details>


<details open>
<summary class="scene-class-attr-group">Specular 1 attributes</summary>
<p>

<h3>specular_1_enable_indirect_reflections</h3>
<b>Bool</b>  

default: False

enables indirect GGX reflections for toon specular model


<h3>specular_1_enable_input_normal</h3>
<b>Bool</b>  

default: False

enables sampling the normal map for toon specular 1


<h3>specular_1_indirect_reflections_intensity</h3>
<b>Float</b>  *bindable*

default: 1.0

the intensity for the indirect reflections of the toon specular model


<h3>specular_1_indirect_reflections_roughness</h3>
<b>Float</b>  *bindable*

default: 0.5

the roughness for the indirect reflections of the toon specular model


<h3>specular_1_input_U</h3>
<b>Vec3f</b>  *bindable*

default: [ 0, 0, 0 ]

input U / tangent for specular stretch


<h3>specular_1_input_V</h3>
<b>Vec3f</b>  *bindable*

default: [ 0, 0, 0 ]

input V / bitangent for specular stretch


<h3>specular_1_input_normal</h3>
<b>33554432</b>  

default: None

specifies an alternate shading normal for toon specular 1


<h3>specular_1_input_normal_dial</h3>
<b>Float</b>  *bindable*

default: 1.0

controls influence of input normal versus hair normal for toon specular 1


<h3>specular_1_intensity</h3>
<b>Float</b>  *bindable*

default: 1.0

The overall intensity of the specular response


<h3>specular_1_interpolations</h3>
<b>IntVector</b>  

default: <scene_rdl2.__scene_rdl2__.IntVector object at >

None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |

			Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6


<h3>specular_1_model</h3>
<b>Int</b>  *enum*

- Toon_Surface = 2 (default)

- Toon_Hair = 3


sets the normalized distribution function for specular


<h3>specular_1_positions</h3>
<b>FloatVector</b>  

default: <scene_rdl2.__scene_rdl2__.FloatVector object at >

ramp positions, maximum 10 allowed


<h3>specular_1_roughness</h3>
<b>Float</b>  *bindable*

default: 0.899999976158

The roughness of the toon specular.   Smaller values produce tighter highlights


<h3>specular_1_show</h3>
<b>Bool</b>  

default: True

Show first toon specular lobe


<h3>specular_1_stretch_u</h3>
<b>Float</b>  *bindable*

default: 0.0

Amount to stretch or compress the specular in the u direction 


<h3>specular_1_stretch_v</h3>
<b>Float</b>  *bindable*

default: 0.0

Amount to stretch or compress the specular in the v direction 


<h3>specular_1_tint</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

<p class="scene-class-attr-missing">No documentation available</p>


<h3>specular_1_use_input_vectors_for_stretch</h3>
<b>Bool</b>  

default: False

when checked, use input_U and V. otherwise use geometry dPds/t


<h3>specular_1_values</h3>
<b>FloatVector</b>  

default: <scene_rdl2.__scene_rdl2__.FloatVector object at >

List of colors on the ramp


</p>
</details>


<details open>
<summary class="scene-class-attr-group">Specular 2 attributes</summary>
<p>

<h3>specular_2_enable_indirect_reflections</h3>
<b>Bool</b>  

default: False

enables indirect GGX reflections for toon specular model


<h3>specular_2_enable_input_normal</h3>
<b>Bool</b>  

default: False

enables sampling the normal map for toon specular 2


<h3>specular_2_indirect_reflections_intensity</h3>
<b>Float</b>  *bindable*

default: 1.0

the intensity for the indirect reflections of the toon specular model


<h3>specular_2_indirect_reflections_roughness</h3>
<b>Float</b>  *bindable*

default: 0.5

the roughness for the indirect reflections of the toon specular model


<h3>specular_2_input_U</h3>
<b>Vec3f</b>  *bindable*

default: [ 0, 0, 0 ]

input U / tangent for specular stretch


<h3>specular_2_input_V</h3>
<b>Vec3f</b>  *bindable*

default: [ 0, 0, 0 ]

input V / bitangent for specular stretch


<h3>specular_2_input_normal</h3>
<b>33554432</b>  

default: None

specifies an alternate shading normal for toon specular 2


<h3>specular_2_input_normal_dial</h3>
<b>Float</b>  *bindable*

default: 1.0

controls influence of input normal versus hair normal for toon specular 2


<h3>specular_2_intensity</h3>
<b>Float</b>  *bindable*

default: 1.0

The overall intensity of the specular response


<h3>specular_2_interpolations</h3>
<b>IntVector</b>  

default: <scene_rdl2.__scene_rdl2__.IntVector object at >

None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |

			Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6


<h3>specular_2_model</h3>
<b>Int</b>  *enum*

- Toon_Surface = 2 (default)

- Toon_Hair = 3


sets the normalized distribution function for specular


<h3>specular_2_positions</h3>
<b>FloatVector</b>  

default: <scene_rdl2.__scene_rdl2__.FloatVector object at >

ramp positions, maximum 10 allowed


<h3>specular_2_roughness</h3>
<b>Float</b>  *bindable*

default: 0.899999976158

The roughness of the toon specular.   Smaller values produce tighter highlights


<h3>specular_2_show</h3>
<b>Bool</b>  

default: False

Show second toon specular lobe


<h3>specular_2_stretch_u</h3>
<b>Float</b>  *bindable*

default: 0.0

Amount to stretch or compress the specular in the u direction 


<h3>specular_2_stretch_v</h3>
<b>Float</b>  *bindable*

default: 0.0

Amount to stretch or compress the specular in the v direction 


<h3>specular_2_tint</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

<p class="scene-class-attr-missing">No documentation available</p>


<h3>specular_2_use_input_vectors_for_stretch</h3>
<b>Bool</b>  

default: False

when checked, use input_U and V. otherwise use geometry dPds/t


<h3>specular_2_values</h3>
<b>FloatVector</b>  

default: <scene_rdl2.__scene_rdl2__.FloatVector object at >

List of colors on the ramp


</p>
</details>


<details open>
<summary class="scene-class-attr-group">Specular 3 attributes</summary>
<p>

<h3>specular_3_enable_indirect_reflections</h3>
<b>Bool</b>  

default: False

enables indirect GGX reflections for toon specular model


<h3>specular_3_enable_input_normal</h3>
<b>Bool</b>  

default: False

enables sampling the normal map for toon specular 3


<h3>specular_3_indirect_reflections_intensity</h3>
<b>Float</b>  *bindable*

default: 1.0

the intensity for the indirect reflections of the toon specular model


<h3>specular_3_indirect_reflections_roughness</h3>
<b>Float</b>  *bindable*

default: 0.5

the roughness for the indirect reflections of the toon specular model


<h3>specular_3_input_U</h3>
<b>Vec3f</b>  *bindable*

default: [ 0, 0, 0 ]

input U / tangent for specular stretch


<h3>specular_3_input_V</h3>
<b>Vec3f</b>  *bindable*

default: [ 0, 0, 0 ]

input V / bitangent for specular stretch


<h3>specular_3_input_normal</h3>
<b>33554432</b>  

default: None

specifies an alternate shading normal for toon specular 3


<h3>specular_3_input_normal_dial</h3>
<b>Float</b>  *bindable*

default: 1.0

controls influence of input normal versus hair normal for toon specular 3


<h3>specular_3_intensity</h3>
<b>Float</b>  *bindable*

default: 1.0

The overall intensity of the specular response


<h3>specular_3_interpolations</h3>
<b>IntVector</b>  

default: <scene_rdl2.__scene_rdl2__.IntVector object at >

None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |

			Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6


<h3>specular_3_model</h3>
<b>Int</b>  *enum*

- Toon_Surface = 2 (default)

- Toon_Hair = 3


sets the normalized distribution function for specular


<h3>specular_3_positions</h3>
<b>FloatVector</b>  

default: <scene_rdl2.__scene_rdl2__.FloatVector object at >

ramp positions, maximum 10 allowed


<h3>specular_3_roughness</h3>
<b>Float</b>  *bindable*

default: 0.899999976158

The roughness of the toon specular.   Smaller values produce tighter highlights


<h3>specular_3_show</h3>
<b>Bool</b>  

default: False

Show third toon specular lobe


<h3>specular_3_stretch_u</h3>
<b>Float</b>  *bindable*

default: 0.0

Amount to stretch or compress the specular in the u direction 


<h3>specular_3_stretch_v</h3>
<b>Float</b>  *bindable*

default: 0.0

Amount to stretch or compress the specular in the v direction 


<h3>specular_3_tint</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

<p class="scene-class-attr-missing">No documentation available</p>


<h3>specular_3_use_input_vectors_for_stretch</h3>
<b>Bool</b>  

default: False

when checked, use input_U and V. otherwise use geometry dPds/t


<h3>specular_3_values</h3>
<b>FloatVector</b>  

default: <scene_rdl2.__scene_rdl2__.FloatVector object at >

List of colors on the ramp


</p>
</details>


<details open>
<summary class="scene-class-attr-group">Subsurface attributes</summary>
<p>

<h3>bssrdf</h3>
<b>Int</b>  *enum*

- normalized diffusion = 0 (default)

- dipole = 1


0 for NormalizedDiffuse, 1 for Dipole. Random walk unsupported for hair.


<h3>enable_sss_input_normal</h3>
<b>Bool</b>  

default: False

enables sampling the normal map for sss samples. More accurate but potentially expensive


<h3>input_normal</h3>
<b>33554432</b>  

default: None

specifies an alternate shading normal (only for SSS lobe)


<h3>input_normal_dial</h3>
<b>Float</b>  *bindable*

default: 1.0

controls influence of input normal versus hair normal for SSS


<h3>scattering_color</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

the subsurface scattering 'falloff' color


<h3>scattering_radius</h3>
<b>Float</b>  *bindable*

default: 0.0

the distance the light scatters beneath the surface.  When 0 surface diffuse is used


<h3>subsurface_blend</h3>
<b>Float</b>  *bindable*

default: 1.0

0 is fully hair diffuse, 1 is fully SSS. No effect if scattering radius is 0.


</p>
</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>
<p>

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


</p>
</details>

