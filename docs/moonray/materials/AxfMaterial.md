---
title: AxfMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# AxfMaterial
**ROOTSHADER MATERIAL SHADER**
---

<details open>
<summary class="scene-class-attr-group">Normal attributes</summary>

## input_normal_dial
**Float** 

Default value : 1.0

controls the amount of influence of the alternate normal


## normal
**Vec3f** *bindable*

Default value : [ 0, 0, 0 ]

bind the 'Normal' texture here, the multiplier is ignored. The state's normal is used when no texture is bound.


## normal_space
**Int** *enum*

- tangent = 0 (default)

- render = 1


Specifies what space the normal is given in.  Usually this is tangent space for texture maps and render space for projections


</details>

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

## alpha
**Float** *bindable*

Default value : 1.0

bind the 'Alpha' texture here


## aniso_rotation
**Float** *bindable*

Default value : 0.0

bind the 'AnisoRotation' texture here


## casts_caustics
**Bool** 

Default value : False

allows continuation of caustic light paths


## diffuse_color
**Rgb** *bindable*

Default value : [ 1, 1, 1 ]

bind the 'DiffuseColor' texture here


## extra_aovs
**Map** 

Default value : None

Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result


## fresnel
**Float** *bindable*

Default value : 1.0

bind the 'Fresnel' texture here


## label
**String** 

Default value : 

label used in material and light aovs


## priority
**Int** 

Default value : 0

The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.


## specular_color
**Rgb** *bindable*

Default value : [ 1, 1, 1 ]

bind the 'SpecularColor' texture here


## specular_lobe
**Vec2f** *bindable*

Default value : [ 1, 1 ]

bind the 'SpecularLobe' texture here


</details>

