---
title: DwaVelvetMaterial_v2

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# DwaVelvetMaterial_v2
**ROOTSHADER MATERIAL SHADER DWABASELAYERABLE**

---

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


<h2>thin_geometry</h2>
<b>Bool</b>  

Default value : False  

enables proper shading of infinitely thin geometry such as paper or leaves.


</details>


<details open>
<summary class="scene-class-attr-group">Diffuse attributes</summary>

<h2>albedo</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

the overall surface color as seen from a distance (ie. diffuse color)


<h2>diffuse_roughness</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

Roughness of the diffuse shading.  If the value is zero a Lambertian model is used.  If it's above zero the Oren Nayar model is used.   Not compatible with subsurface scattering.


<h2>diffuse_transmission</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

multiplier on the amount of light that is transmitted through the surface.


<h2>diffuse_transmission_blending_behavior</h2>
<b>Int</b>  *enum*

- RGB = 0

- Monochromatic = 1 (default)


Controls how diffuse transmission color attenuates diffuse reflection


<h2>diffuse_transmission_color</h2>
<b>Rgb</b>  *bindable*

Default value : [ 0, 0, 0 ]  

the color/amount of light that is transmitted through the surface.


<h2>show_diffuse</h2>
<b>Bool</b>  

Default value : True  

enables/disables diffuse reflectance


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
<summary class="scene-class-attr-group">Fuzz attributes</summary>

<h2>fuzz</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

fuzz mask


<h2>fuzz_albedo</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

Color of the fuzz highlights.


<h2>fuzz_coverage</h2>
<b>Float</b>  *bindable*

Default value : 0.25  

Lower values result in glancing angle highlights while higher values result in a broad, uniform coverage


<h2>fuzz_normal</h2>
<b>33554432</b>  

Default value : None  

specifies an independent shading normal (normal map) for the fuzz lobe


<h2>fuzz_normal_dial</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

controls the amount of infuence of the alternate fuzz normal


<h2>show_fuzz</h2>
<b>Bool</b>  

Default value : True  

Enables/disables fuzz lobe


<h2>use_absorbing_fuzz_fibers</h2>
<b>Bool</b>  

Default value : False  

Specify whether dark fuzz fibers absorb energy or transmit it to the layers below.


</details>


<details open>
<summary class="scene-class-attr-group">Glitter attributes</summary>

<h2>glitter</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

enables/disables glitter model (binary 0|1 for plausibility)


<h2>glitter_LOD_quality</h2>
<b>Float</b>  

Default value : 0.5  

controls quality of glitter at distances where individual flakes cannot be perceived; at lower values, approximation kicks in earlier


<h2>glitter_approximate_for_secondary_rays</h2>
<b>Bool</b>  

Default value : True  

use an approximation to shade glitter for non-mirror secondary rays


<h2>glitter_color_A</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

base flake color (use physical metallic color values)


<h2>glitter_color_B</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

base flake color (use physical metallic color values)


<h2>glitter_color_hue_variation</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

introduce hue variation in flake color centered at the base flake color's hue on the hue wheel


<h2>glitter_color_saturation_variation</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

introduce saturation variation in flake color centered at the base flake color's saturation


<h2>glitter_color_value_variation</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

introduce value variation in flake color centered at the base flake color's value


<h2>glitter_compensate_reference_space_deformation</h2>
<b>Bool</b>  

Default value : True  

(In ReferenceSpace) Compensates for stretch/compression/shear in glitter shapes resulting from animation etc


<h2>glitter_debug_mode</h2>
<b>Int</b>  *enum*

- off = 0 (default)

- blend = 1

- color = 2

- averageColor = 3

- footprintArea = 4

- radius = 5


developer debug visualization modes


<h2>glitter_density</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

controls the number of flakes per unit length; larger density packs more flakes into same space


<h2>glitter_jitter</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

Controls how much the flakes are randomly offset from a regular grid


<h2>glitter_layering_mode</h2>
<b>Int</b>  *enum*

- physical = 0 (default)

- additive = 1


layering mode for glitter on top of the under material. physical: conserves energy and glitter attenuates under material, additive: breaks energy conservation but glitter is never darker than the under material (eg. use case: snow)


<h2>glitter_randomness</h2>
<b>Float</b>  

Default value : 0.5  

randomness of flake orientation


<h2>glitter_roughness_A</h2>
<b>Float</b>  

Default value : 0.140000000596  

specular roughness of individual flakes (0 makes flakes mirror-like)


<h2>glitter_roughness_B</h2>
<b>Float</b>  

Default value : 0.140000000596  

specular roughness of individual flakes (0 makes flakes mirror-like)


<h2>glitter_seed</h2>
<b>Int</b>  

Default value : 0  

The seed for the glitter random number generator


<h2>glitter_size_A</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

size of the flakes.  Apparent flake size may vary based on how much the flake spheres intersect the surface


<h2>glitter_size_B</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

size of the flakes.  Apparent flake size may vary based on how much the flake spheres intersect the surface


<h2>glitter_space</h2>
<b>Int</b>  *enum*

- object = 4

- reference = 5 (default)


The space to calculate the worley noise in, defaults to reference space


<h2>glitter_style_A_frequency</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

0 implies none of this style, 1 implies all the flakes will get this style


<h2>glitter_style_B_frequency</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

0 implies none of this style, 1 implies all the flakes will get this style


<h2>glitter_texture_A</h2>
<b>String</b>  *filename*

Default value :   

filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).


<h2>glitter_texture_B</h2>
<b>String</b>  *filename*

Default value :   

filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).


<h2>glitter_texture_orientation_randomness</h2>
<b>Float</b>  

Default value : 0.15000000596  

randomly orient each texture


<h2>show_glitter</h2>
<b>Bool</b>  

Default value : False  

Enables/disables glitter lobes


</details>


<details open>
<summary class="scene-class-attr-group">Normal attributes</summary>

<h2>input_normal</h2>
<b>33554432</b>  

Default value : None  

specifies an alternate shading normal in the tangent frame (normal map)


<h2>input_normal_dial</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

controls the amount of influence of the alternate normal


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>extra_aovs</h2>
<b>Map</b>  

Default value : None  

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


<h2>label</h2>
<b>String</b>  

Default value :   

label used in material and light aovs


<h2>priority</h2>
<b>Int</b>  

Default value : 0  

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


</details>

