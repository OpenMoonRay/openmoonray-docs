---
title: UsdPreviewSurface

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# UsdPreviewSurface
**ROOTSHADER MATERIAL SHADER**

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>clearcoat</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

Second specular lobe amount. The color is white.


<h2>clearcoatRoughness</h2>
<b>Float</b>  *bindable*

Default value : 0.00999999977648  

Roughness for the second specular lobe.


<h2>diffuseColor</h2>
<b>Rgb</b>  *bindable*

Default value : [ 0.18, 0.18, 0.18 ]  

When using metallic workflow this is interpreted as albedo.


<h2>displacement</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

Displacement in the direction of the normal.


<h2>emissiveColor</h2>
<b>Rgb</b>  *bindable*

Default value : [ 0, 0, 0 ]  

Emissive component.


<h2>extra_aovs</h2>
<b>Map</b>  

Default value : None  

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


<h2>ior</h2>
<b>Float</b>  *bindable*

Default value : 1.5  

Index of Refraction to be used for translucent objects and objects with specular components, including the clearcoat if clearcoat > 0.


<h2>label</h2>
<b>String</b>  

Default value :   

label used in material and light aovs


<h2>metallic</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

Use 1 for metallic surfaces and 0 for non-metallic.  If metallic is 1, then both F0 (reflectivity at 0 degree incidence) and edge F90 reflectivity will simply be the Albedo.  If metallic is 0, then Albedo is ignored in the calculation of F0 and F90; F0 is derived from ior via ( (1-ior)/(1+ior) )^2 and F90 is white. In between, we interpolate.


<h2>normal</h2>
<b>Vec3f</b>  *bindable*

Default value : [ 0, 0, 1 ]  

Expects normal in tangent space [(-1,-1,-1), (1,1,1)]


<h2>occlusion</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

Ignored by Moonray


<h2>opacity</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

When opacity is 1.0 then the geometry is fully opaque, if it is smaller than 1.0 then the geometry is translucent, when it is 0 the geometry is transparent. Note that even a fully transparent object still receives lighting as, for example, perfectly clear glass still has a specular response.


<h2>opacityThreshold</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

The opacityThreshold input is useful for creating geometric cut-outs based on the opacity input. A value of 0.0 indicates that no masking is applied to the opacity input, while a value greater than 0.0 indicates that rendering of the surface is limited to the areas where the opacity is greater or equal to that value.


<h2>priority</h2>
<b>Int</b>  

Default value : 0  

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


<h2>roughness</h2>
<b>Float</b>  *bindable*

Default value : 0.5  

Roughness for the specular lobe. The value ranges from 0 to 1, which goes from a perfectly specular surface at 0.0 to maximum roughness of the specular lobe.


<h2>specularColor</h2>
<b>Rgb</b>  *bindable*

Default value : [ 0, 0, 0 ]  

Specular color to be used. This is the color at 0 incidence. Edge color is assumed white. Transition between the two colors according to Schlick fresnel approximation.


<h2>useSpecularWorkflow</h2>
<b>Int</b>  *enum*

- Metalness workflow = 0 (default)

- Specular workflow = 1


This node can fundamentally operate in two modes : Specular workflow where you provide a texture/value to the 'specularColor' input. Or, Metallic workflow where you provide a texture/value to the 'metallic' input.


</details>

