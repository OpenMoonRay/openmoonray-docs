---
title: ImageMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ImageMap
**MAP SHADER**

---

<details open>
<summary class="scene-class-attr-group">Blur attributes</summary>

<h2>blur</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

This parameter is deprecated, do not use!   Number of pixels to blur the image


<h2>mip_bias</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

Amount to scale derivatives which controls mipmap selection


<h2>num_blur_samples</h2>
<b>Int</b>  

Default value : 3  

This parameter is deprecated, do not use!  Number of internal samples for blur.   Higher values increase quality


</details>


<details open>
<summary class="scene-class-attr-group">Color Correction attributes</summary>

<h2>TMI</h2>
<b>Vec3f</b>  

Default value : [ 0, 0, 0 ]  

T = Temperature where positive values push towards blue and negative towards red.   M = Magenta where positive values push towards magenta and negative towards green.  I = Intensity where negative values remove and positive values add energy 


<h2>TMI_control_enabled</h2>
<b>Bool</b>  

Default value : False  

<p class="scene-class-attr-missing">Documentation for the attribute <b>TMI_control_enabled</b> needs to be written</p>


<h2>contrast</h2>
<b>Rgb</b>  

Default value : [ 1, 1, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>contrast</b> needs to be written</p>


<h2>contrast_enabled</h2>
<b>Bool</b>  

Default value : False  

<p class="scene-class-attr-missing">Documentation for the attribute <b>contrast_enabled</b> needs to be written</p>


<h2>gain</h2>
<b>Rgb</b>  

Default value : [ 1, 1, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>gain</b> needs to be written</p>


<h2>gain_offset_enabled</h2>
<b>Bool</b>  

Default value : False  

<p class="scene-class-attr-missing">Documentation for the attribute <b>gain_offset_enabled</b> needs to be written</p>


<h2>gamma_adjust</h2>
<b>Rgb</b>  

Default value : [ 1, 1, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>gamma_adjust</b> needs to be written</p>


<h2>gamma_enabled</h2>
<b>Bool</b>  

Default value : False  

<p class="scene-class-attr-missing">Documentation for the attribute <b>gamma_enabled</b> needs to be written</p>


<h2>offset_adjust</h2>
<b>Rgb</b>  

Default value : [ 0, 0, 0 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>offset_adjust</b> needs to be written</p>


<h2>saturation</h2>
<b>Rgb</b>  

Default value : [ 1, 1, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>saturation</b> needs to be written</p>


<h2>saturation_enabled</h2>
<b>Bool</b>  

Default value : False  

<p class="scene-class-attr-missing">Documentation for the attribute <b>saturation_enabled</b> needs to be written</p>


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>alpha_only</h2>
<b>Bool</b>  

Default value : False  

If true, the alpha channel of the texture will be placed in the rgb channels.  If the texture has no alpha channel, 1.0 is used, and the resulting texture lookup is then always white.


<h2>default_color</h2>
<b>Rgb</b>  

Default value : [ 0, 1, 0 ]  

default color to be used for missing udims when 'use default color when missing' is enabled


<h2>gamma</h2>
<b>Int</b>  *enum*

- off = 0

- on = 1

- auto = 2 (default)


<p class="scene-class-attr-missing">Documentation for the attribute <b>gamma</b> needs to be written</p>


<h2>input_texture_coordinates</h2>
<b>Vec3f</b>  *bindable*

Default value : [ 0, 0, 0 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>input_texture_coordinates</b> needs to be written</p>


<h2>offset</h2>
<b>Vec2f</b>  

Default value : [ 0, 0 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>offset</b> needs to be written</p>


<h2>rotation_angle</h2>
<b>Float</b>  

Default value : 0.0  

Rotation in degrees


<h2>rotation_center</h2>
<b>Vec2f</b>  

Default value : [ 0.5, 0.5 ]  

UV coordinate around which to rotate


<h2>scale</h2>
<b>Vec2f</b>  

Default value : [ 1, 1 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>scale</b> needs to be written</p>


<h2>texture</h2>
<b>String</b>  *filename*

Default value :   

filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx). If filename contains '<UDIM>', udim index substitution is performed on filename.  In the UDIM case, 'scale', 'offset', and 'wrap around' are ignored.


<h2>texture_coordinates</h2>
<b>Int</b>  *enum*

- texture = 0 (default)

- hair surface = 1

- input texture coordinates = 2

- hair closest surface = 3


<p class="scene-class-attr-missing">Documentation for the attribute <b>texture_coordinates</b> needs to be written</p>


<h2>udim_files</h2>
<b>StringVector</b>  

Default value : []  

<p class="scene-class-attr-missing">Documentation for the attribute <b>udim_files</b> needs to be written</p>


<h2>udim_max_v</h2>
<b>Int</b>  

Default value : 10  

udim maximum v value


<h2>udim_values</h2>
<b>IntVector</b>  

Default value : <scene_rdl2.__scene_rdl2__.IntVector object at >  

<p class="scene-class-attr-missing">Documentation for the attribute <b>udim_values</b> needs to be written</p>


<h2>use_default_color_when_missing</h2>
<b>Bool</b>  

Default value : False  

Uses the 'default color' for missing udims and does not report error


<h2>wrap_around</h2>
<b>Bool</b>  

Default value : True  

<p class="scene-class-attr-missing">Documentation for the attribute <b>wrap_around</b> needs to be written</p>


</details>

