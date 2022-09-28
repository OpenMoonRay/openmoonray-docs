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

<h2>contrast</h2>
<b>Rgb</b>  

Default value : [ 1, 1, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>contrast</b> needs to be written</p>


<h2>gain</h2>
<b>Rgb</b>  

Default value : [ 1, 1, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>gain</b> needs to be written</p>


<h2>gamma</h2>
<b>Rgb</b>  

Default value : [ 1, 1, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>gamma</b> needs to be written</p>


<h2>offset</h2>
<b>Rgb</b>  

Default value : [ 0, 0, 0 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>offset</b> needs to be written</p>


<h2>saturation</h2>
<b>Rgb</b>  

Default value : [ 1, 1, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>saturation</b> needs to be written</p>


<h2>temperature</h2>
<b>Vec3f</b>  

Default value : [ 0, 0, 0 ]  

color temperature using Nuke-like T/M/E settings


<h2>texture</h2>
<b>String</b>  *filename*

Default value :   

filename that points to a texture (formats: .exr, .tif, .jpg, etc.)


<h2>texture_border_color</h2>
<b>Rgb</b>  

Default value : [ 1, 1, 1 ]  

RGB value used when a texture lookup occurs outside the texture


<h2>texture_coverage</h2>
<b>Vec2f</b>  

Default value : [ 1, 1 ]  

Scales in (u,v)


<h2>texture_mirror_u</h2>
<b>Bool</b>  

Default value : False  

true => mirror in u, false => repeat in u


<h2>texture_mirror_v</h2>
<b>Bool</b>  

Default value : False  

true => mirror in v, false => repeat in v


<h2>texture_reps_u</h2>
<b>Float</b>  

Default value : 1.0  

Number of times texture repeats in u over the scaled texture space


<h2>texture_reps_v</h2>
<b>Float</b>  

Default value : 1.0  

Number of times texture repeats in v over the scaled texture space


<h2>texture_rotation</h2>
<b>Float</b>  

Default value : 0.0  

Clockwise rotation angle in degrees


<h2>texture_translation</h2>
<b>Vec2f</b>  

Default value : [ 0, 0 ]  

Translations in (u,v) expressed as fractions of the unscaled texture space


</details>


<details open>
<summary class="scene-class-attr-group">Properties attributes</summary>

<h2>apply_scene_scale</h2>
<b>Bool</b>  

Default value : True  

apply scene scale variable when normalized


<h2>clear_radius</h2>
<b>Float</b>  

Default value : 0.0  

clear radius: shadows less than this distance from the light are ignored (disabled if <= 0.0)


<h2>clear_radius_falloff_distance</h2>
<b>Float</b>  

Default value : 0.0  

clear radius falloff distance: distance over which the shadows fall off, where shadows start to falloff at clear radius + falloff distance and disappear entirely at clear radius


<h2>clear_radius_interpolation_type</h2>
<b>Int</b>  *enum*

- linear = 0 (default)

- exponential_up = 1

- exponential_down = 2

- smoothstep = 3


clear radius interpolation: interpolation type to use for the clear radius shadow falloff


<h2>color</h2>
<b>Rgb</b>  

Default value : [ 1, 1, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>color</b> needs to be written</p>


<h2>exposure</h2>
<b>Float</b>  

Default value : 0.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>exposure</b> needs to be written</p>


<h2>intensity</h2>
<b>Float</b>  

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>intensity</b> needs to be written</p>


<h2>label</h2>
<b>String</b>  

Default value :   

label used in light aov expressions


<h2>max_shadow_distance</h2>
<b>Float</b>  

Default value : 0.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>max_shadow_distance</b> needs to be written</p>


<h2>mb</h2>
<b>Bool</b>  

Default value : False  

Does light motion affect motion-blur?


<h2>normalized</h2>
<b>Bool</b>  

Default value : True  

<p class="scene-class-attr-missing">Documentation for the attribute <b>normalized</b> needs to be written</p>


<h2>on</h2>
<b>Bool</b>  

Default value : True  

<p class="scene-class-attr-missing">Documentation for the attribute <b>on</b> needs to be written</p>


<h2>presence_shadows</h2>
<b>Int</b>  *enum*

- force off = 0

- force on = 1

- use default = 2 (default)


<p class="scene-class-attr-missing">Documentation for the attribute <b>presence_shadows</b> needs to be written</p>


<h2>radius</h2>
<b>Float</b>  

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>radius</b> needs to be written</p>


<h2>ray_termination</h2>
<b>Bool</b>  

Default value : False  

Is light used for ray termination color? Ray termination color is used for filling in falsely dark areas where ray paths have been terminated too early by the depth controls. Such a ray path immediately exits to any ray termination light(s) present in the light set being applied to the lobe, ignoring occlusion by scene geometry. Any light can either be a regular light or a ray termination light (but not both). Thus they can be freely assigned to light sets, which provides a mechanism for applying specific ray termination lights to specific materials, parts or objects. Ray termination color is only applied to non-hair transmission lobes.


<h2>texture_filter</h2>
<b>Int</b>  *enum*

- nearest neighbor = 0 (default)

- bilinear = 1

- nearest neighbor with nearest mip = 2

- bilinear with nearest mip = 3


<p class="scene-class-attr-missing">Documentation for the attribute <b>texture_filter</b> needs to be written</p>


<h2>visible_in_camera</h2>
<b>Int</b>  *enum*

- force off = 0

- force on = 1

- use default = 2 (default)


<p class="scene-class-attr-missing">Documentation for the attribute <b>visible_in_camera</b> needs to be written</p>


</details>


<details open>
<summary class="scene-class-attr-group">Visibility Flags attributes</summary>

<h2>visible_diffuse_reflection</h2>
<b>Bool</b>  

Default value : True  

whether the light is visible in diffuse reflection


<h2>visible_diffuse_transmission</h2>
<b>Bool</b>  

Default value : True  

whether the light is visible in diffuse transmission


<h2>visible_glossy_reflection</h2>
<b>Bool</b>  

Default value : True  

whether the light is visible in glossy reflection.


<h2>visible_glossy_transmission</h2>
<b>Bool</b>  

Default value : True  

whether the light is visible in glossy transmission (refraction).


<h2>visible_mirror_reflection</h2>
<b>Bool</b>  

Default value : True  

whether the light is visible in miror reflection.


<h2>visible_mirror_transmission</h2>
<b>Bool</b>  

Default value : True  

whether the light is visible in miror transmission (refraction).


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>light_filters</h2>
<b>Object Vector</b>  

Default value : []  

<p class="scene-class-attr-missing">Documentation for the attribute <b>light_filters</b> needs to be written</p>


<h2>node_xform</h2>
<b>Mat4d</b>  *blurrable*

Default value : [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>node_xform</b> needs to be written</p>


<h2>sidedness</h2>
<b>Int</b>  *enum*

- regular = 0 (default)

- reverse = 1


<p class="scene-class-attr-missing">Documentation for the attribute <b>sidedness</b> needs to be written</p>


</details>

