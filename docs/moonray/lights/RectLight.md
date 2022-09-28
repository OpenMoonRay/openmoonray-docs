---
title: RectLight

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# RectLight
**NODE LIGHT**

---

<details open>
<summary class="scene-class-attr-group">Map attributes</summary>

<h3>contrast</h3>
<b>Rgb</b>  

default: [ 1, 1, 1 ]

<p class="scene-class-attr-missing">Documentation for the attribute <b>contrast</b> needs to be written</p>


<h3>gain</h3>
<b>Rgb</b>  

default: [ 1, 1, 1 ]

<p class="scene-class-attr-missing">Documentation for the attribute <b>gain</b> needs to be written</p>


<h3>gamma</h3>
<b>Rgb</b>  

default: [ 1, 1, 1 ]

<p class="scene-class-attr-missing">Documentation for the attribute <b>gamma</b> needs to be written</p>


<h3>offset</h3>
<b>Rgb</b>  

default: [ 0, 0, 0 ]

<p class="scene-class-attr-missing">Documentation for the attribute <b>offset</b> needs to be written</p>


<h3>saturation</h3>
<b>Rgb</b>  

default: [ 1, 1, 1 ]

<p class="scene-class-attr-missing">Documentation for the attribute <b>saturation</b> needs to be written</p>


<h3>temperature</h3>
<b>Vec3f</b>  

default: [ 0, 0, 0 ]

color temperature using Nuke-like T/M/E settings


<h3>texture</h3>
<b>String</b>  *filename*

default: 

filename that points to a texture (formats: .exr, .tif, .jpg, etc.)


<h3>texture_border_color</h3>
<b>Rgb</b>  

default: [ 1, 1, 1 ]

RGB value used when a texture lookup occurs outside the texture


<h3>texture_coverage</h3>
<b>Vec2f</b>  

default: [ 1, 1 ]

Scales in (u,v)


<h3>texture_mirror_u</h3>
<b>Bool</b>  

default: False

true => mirror in u, false => repeat in u


<h3>texture_mirror_v</h3>
<b>Bool</b>  

default: False

true => mirror in v, false => repeat in v


<h3>texture_reps_u</h3>
<b>Float</b>  

default: 1.0

Number of times texture repeats in u over the scaled texture space


<h3>texture_reps_v</h3>
<b>Float</b>  

default: 1.0

Number of times texture repeats in v over the scaled texture space


<h3>texture_rotation</h3>
<b>Float</b>  

default: 0.0

Clockwise rotation angle in degrees


<h3>texture_translation</h3>
<b>Vec2f</b>  

default: [ 0, 0 ]

Translations in (u,v) expressed as fractions of the unscaled texture space


</details>


<details open>
<summary class="scene-class-attr-group">Properties attributes</summary>

<h3>apply_scene_scale</h3>
<b>Bool</b>  

default: True

apply scene scale variable when normalized


<h3>clear_radius</h3>
<b>Float</b>  

default: 0.0

clear radius: shadows less than this distance from the light are ignored (disabled if <= 0.0)


<h3>clear_radius_falloff_distance</h3>
<b>Float</b>  

default: 0.0

clear radius falloff distance: distance over which the shadows fall off, where shadows start to falloff at clear radius + falloff distance and disappear entirely at clear radius


<h3>clear_radius_interpolation_type</h3>
<b>Int</b>  *enum*

- linear = 0 (default)

- exponential_up = 1

- exponential_down = 2

- smoothstep = 3


clear radius interpolation: interpolation type to use for the clear radius shadow falloff


<h3>color</h3>
<b>Rgb</b>  

default: [ 1, 1, 1 ]

<p class="scene-class-attr-missing">Documentation for the attribute <b>color</b> needs to be written</p>


<h3>exposure</h3>
<b>Float</b>  

default: 0.0

<p class="scene-class-attr-missing">Documentation for the attribute <b>exposure</b> needs to be written</p>


<h3>height</h3>
<b>Float</b>  

default: 1.0

<p class="scene-class-attr-missing">Documentation for the attribute <b>height</b> needs to be written</p>


<h3>intensity</h3>
<b>Float</b>  

default: 1.0

<p class="scene-class-attr-missing">Documentation for the attribute <b>intensity</b> needs to be written</p>


<h3>label</h3>
<b>String</b>  

default: 

label used in light aov expressions


<h3>max_shadow_distance</h3>
<b>Float</b>  

default: 0.0

<p class="scene-class-attr-missing">Documentation for the attribute <b>max_shadow_distance</b> needs to be written</p>


<h3>mb</h3>
<b>Bool</b>  

default: False

Does light motion affect motion-blur?


<h3>normalized</h3>
<b>Bool</b>  

default: True

<p class="scene-class-attr-missing">Documentation for the attribute <b>normalized</b> needs to be written</p>


<h3>on</h3>
<b>Bool</b>  

default: True

<p class="scene-class-attr-missing">Documentation for the attribute <b>on</b> needs to be written</p>


<h3>presence_shadows</h3>
<b>Int</b>  *enum*

- force off = 0

- force on = 1

- use default = 2 (default)


<p class="scene-class-attr-missing">Documentation for the attribute <b>presence_shadows</b> needs to be written</p>


<h3>ray_termination</h3>
<b>Bool</b>  

default: False

Is light used for ray termination color? Ray termination color is used for filling in falsely dark areas where ray paths have been terminated too early by the depth controls. Such a ray path immediately exits to any ray termination light(s) present in the light set being applied to the lobe, ignoring occlusion by scene geometry. Any light can either be a regular light or a ray termination light (but not both). Thus they can be freely assigned to light sets, which provides a mechanism for applying specific ray termination lights to specific materials, parts or objects. Ray termination color is only applied to non-hair transmission lobes.


<h3>spread</h3>
<b>Float</b>  

default: 1.0

directionality of light emission. 1 is completely diffuse hemisphere. 0 is parallel to normal of light.


<h3>texture_filter</h3>
<b>Int</b>  *enum*

- nearest neighbor = 0 (default)

- bilinear = 1

- nearest neighbor with nearest mip = 2

- bilinear with nearest mip = 3


<p class="scene-class-attr-missing">Documentation for the attribute <b>texture_filter</b> needs to be written</p>


<h3>visible_in_camera</h3>
<b>Int</b>  *enum*

- force off = 0

- force on = 1

- use default = 2 (default)


<p class="scene-class-attr-missing">Documentation for the attribute <b>visible_in_camera</b> needs to be written</p>


<h3>width</h3>
<b>Float</b>  

default: 1.0

<p class="scene-class-attr-missing">Documentation for the attribute <b>width</b> needs to be written</p>


</details>


<details open>
<summary class="scene-class-attr-group">Visibility Flags attributes</summary>

<h3>visible_diffuse_reflection</h3>
<b>Bool</b>  

default: True

whether the light is visible in diffuse reflection


<h3>visible_diffuse_transmission</h3>
<b>Bool</b>  

default: True

whether the light is visible in diffuse transmission


<h3>visible_glossy_reflection</h3>
<b>Bool</b>  

default: True

whether the light is visible in glossy reflection.


<h3>visible_glossy_transmission</h3>
<b>Bool</b>  

default: True

whether the light is visible in glossy transmission (refraction).


<h3>visible_mirror_reflection</h3>
<b>Bool</b>  

default: True

whether the light is visible in miror reflection.


<h3>visible_mirror_transmission</h3>
<b>Bool</b>  

default: True

whether the light is visible in miror transmission (refraction).


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h3>light_filters</h3>
<b>Object Vector</b>  

default: []

<p class="scene-class-attr-missing">Documentation for the attribute <b>light_filters</b> needs to be written</p>


<h3>node_xform</h3>
<b>Mat4d</b>  *blurrable*

default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]

<p class="scene-class-attr-missing">Documentation for the attribute <b>node_xform</b> needs to be written</p>


<h3>sidedness</h3>
<b>Int</b>  *enum*

- regular = 0 (default)

- reverse = 1

- 2-sided = 2


<p class="scene-class-attr-missing">Documentation for the attribute <b>sidedness</b> needs to be written</p>


</details>

