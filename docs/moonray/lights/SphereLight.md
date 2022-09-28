---
title: SphereLight

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# SphereLight
**NODE LIGHT**
---

<details open>
<summary class="scene-class-attr-group">Map attributes</summary>

## contrast
**Rgb** 

Default value : [ 1, 1, 1 ]

<p class="scene-class-attr-missing">Documentation for the attribute <b>contrast</b> needs to be written</p>


## gain
**Rgb** 

Default value : [ 1, 1, 1 ]

<p class="scene-class-attr-missing">Documentation for the attribute <b>gain</b> needs to be written</p>


## gamma
**Rgb** 

Default value : [ 1, 1, 1 ]

<p class="scene-class-attr-missing">Documentation for the attribute <b>gamma</b> needs to be written</p>


## offset
**Rgb** 

Default value : [ 0, 0, 0 ]

<p class="scene-class-attr-missing">Documentation for the attribute <b>offset</b> needs to be written</p>


## saturation
**Rgb** 

Default value : [ 1, 1, 1 ]

<p class="scene-class-attr-missing">Documentation for the attribute <b>saturation</b> needs to be written</p>


## temperature
**Vec3f** 

Default value : [ 0, 0, 0 ]

color temperature using Nuke-like T/M/E settings


## texture
**String** *filename*

Default value : 

filename that points to a texture (formats: .exr, .tif, .jpg, etc.)


## texture_border_color
**Rgb** 

Default value : [ 1, 1, 1 ]

RGB value used when a texture lookup occurs outside the texture


## texture_coverage
**Vec2f** 

Default value : [ 1, 1 ]

Scales in (u,v)


## texture_mirror_u
**Bool** 

Default value : False

true => mirror in u, false => repeat in u


## texture_mirror_v
**Bool** 

Default value : False

true => mirror in v, false => repeat in v


## texture_reps_u
**Float** 

Default value : 1.0

Number of times texture repeats in u over the scaled texture space


## texture_reps_v
**Float** 

Default value : 1.0

Number of times texture repeats in v over the scaled texture space


## texture_rotation
**Float** 

Default value : 0.0

Clockwise rotation angle in degrees


## texture_translation
**Vec2f** 

Default value : [ 0, 0 ]

Translations in (u,v) expressed as fractions of the unscaled texture space


</details>

---

<details open>
<summary class="scene-class-attr-group">Properties attributes</summary>

## apply_scene_scale
**Bool** 

Default value : True

apply scene scale variable when normalized


## clear_radius
**Float** 

Default value : 0.0

clear radius: shadows less than this distance from the light are ignored (disabled if <= 0.0)


## clear_radius_falloff_distance
**Float** 

Default value : 0.0

clear radius falloff distance: distance over which the shadows fall off, where shadows start to falloff at clear radius + falloff distance and disappear entirely at clear radius


## clear_radius_interpolation_type
**Int** *enum*

- linear = 0 (default)

- exponential_up = 1

- exponential_down = 2

- smoothstep = 3


clear radius interpolation: interpolation type to use for the clear radius shadow falloff


## color
**Rgb** 

Default value : [ 1, 1, 1 ]

<p class="scene-class-attr-missing">Documentation for the attribute <b>color</b> needs to be written</p>


## exposure
**Float** 

Default value : 0.0

<p class="scene-class-attr-missing">Documentation for the attribute <b>exposure</b> needs to be written</p>


## intensity
**Float** 

Default value : 1.0

<p class="scene-class-attr-missing">Documentation for the attribute <b>intensity</b> needs to be written</p>


## label
**String** 

Default value : 

label used in light aov expressions


## max_shadow_distance
**Float** 

Default value : 0.0

<p class="scene-class-attr-missing">Documentation for the attribute <b>max_shadow_distance</b> needs to be written</p>


## mb
**Bool** 

Default value : False

Does light motion affect motion-blur?


## normalized
**Bool** 

Default value : True

<p class="scene-class-attr-missing">Documentation for the attribute <b>normalized</b> needs to be written</p>


## on
**Bool** 

Default value : True

<p class="scene-class-attr-missing">Documentation for the attribute <b>on</b> needs to be written</p>


## presence_shadows
**Int** *enum*

- force off = 0

- force on = 1

- use default = 2 (default)


<p class="scene-class-attr-missing">Documentation for the attribute <b>presence_shadows</b> needs to be written</p>


## radius
**Float** 

Default value : 1.0

<p class="scene-class-attr-missing">Documentation for the attribute <b>radius</b> needs to be written</p>


## ray_termination
**Bool** 

Default value : False

Is light used for ray termination color? Ray termination color is used for filling in falsely dark areas where ray paths have been terminated too early by the depth controls. Such a ray path immediately exits to any ray termination light(s) present in the light set being applied to the lobe, ignoring occlusion by scene geometry. Any light can either be a regular light or a ray termination light (but not both). Thus they can be freely assigned to light sets, which provides a mechanism for applying specific ray termination lights to specific materials, parts or objects. Ray termination color is only applied to non-hair transmission lobes.


## texture_filter
**Int** *enum*

- nearest neighbor = 0 (default)

- bilinear = 1

- nearest neighbor with nearest mip = 2

- bilinear with nearest mip = 3


<p class="scene-class-attr-missing">Documentation for the attribute <b>texture_filter</b> needs to be written</p>


## visible_in_camera
**Int** *enum*

- force off = 0

- force on = 1

- use default = 2 (default)


<p class="scene-class-attr-missing">Documentation for the attribute <b>visible_in_camera</b> needs to be written</p>


</details>

---

<details open>
<summary class="scene-class-attr-group">Visibility Flags attributes</summary>

## visible_diffuse_reflection
**Bool** 

Default value : True

whether the light is visible in diffuse reflection


## visible_diffuse_transmission
**Bool** 

Default value : True

whether the light is visible in diffuse transmission


## visible_glossy_reflection
**Bool** 

Default value : True

whether the light is visible in glossy reflection.


## visible_glossy_transmission
**Bool** 

Default value : True

whether the light is visible in glossy transmission (refraction).


## visible_mirror_reflection
**Bool** 

Default value : True

whether the light is visible in miror reflection.


## visible_mirror_transmission
**Bool** 

Default value : True

whether the light is visible in miror transmission (refraction).


</details>

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

## light_filters
**Object Vector** 

Default value : []

<p class="scene-class-attr-missing">Documentation for the attribute <b>light_filters</b> needs to be written</p>


## node_xform
**Mat4d** *blurrable*

Default value : [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]

<p class="scene-class-attr-missing">Documentation for the attribute <b>node_xform</b> needs to be written</p>


## sidedness
**Int** *enum*

- regular = 0 (default)

- reverse = 1


<p class="scene-class-attr-missing">Documentation for the attribute <b>sidedness</b> needs to be written</p>


</details>

