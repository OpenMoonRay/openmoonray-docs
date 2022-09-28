---
title: NoiseMap_v2

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# NoiseMap_v2
**MAP SHADER**

---

<details open>
<summary class="scene-class-attr-group">4D attributes</summary>

<h2>time</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

If use 4D noise is on, this is the value for the 4th dimension


<h2>use_4D_noise</h2>
<b>Bool</b>  

Default value : False  

If on, 4-dimensional noise is used instead of 3-dimensional


</details>


<details open>
<summary class="scene-class-attr-group">Adjustment attributes</summary>

<h2>bias</h2>
<b>Float</b>  *bindable*

Default value : 0.5  

Bias the noise towards 0 or 1


<h2>gain</h2>
<b>Float</b>  *bindable*

Default value : 0.5  

Apply gain to the noise


<h2>invert</h2>
<b>Bool</b>  

Default value : False  

Invert the final pattern


<h2>smoothstep</h2>
<b>Vec2f</b>  *bindable*

Default value : [ 0, 1 ]  

min/max values between which the smoothstep will interpolate


<h2>use_smoothstep</h2>
<b>Bool</b>  

Default value : False  

Put the noise value through a smoothstep function defined by min/max


</details>


<details open>
<summary class="scene-class-attr-group">Flow Noise attributes</summary>

<h2>flow_advection_rate</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

Rate of advection for flow noise


<h2>flow_angle</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

Angle of rotation for flow noise


</details>


<details open>
<summary class="scene-class-attr-group">Space attributes</summary>

<h2>camera</h2>
<b>Camera</b>  

Default value : None  

camera used to define camera and screen space


<h2>input_texture_coordinates</h2>
<b>Vec3f</b>  *bindable*

Default value : [ 0, 0, 0 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>input_texture_coordinates</b> needs to be written</p>


<h2>object_space</h2>
<b>Geometry</b>  

Default value : None  

Directly connect object to use that object's space.


<h2>space</h2>
<b>Int</b>  *enum*

- render = 0

- camera = 1

- world = 2

- screen = 3

- object = 4 (default)

- reference = 5

- texture = 6

- input texture coordinates = 7

- hair_surface_uv = 8

- hair_closest_surface_uv = 9


The space to calculate the noise in


</details>


<details open>
<summary class="scene-class-attr-group">Transform attributes</summary>

<h2>rotation</h2>
<b>Vec3f</b>  *bindable*

Default value : [ 0, 0, 0 ]  

Rotates the noise in space based on the specified rotation order


<h2>rotation_order</h2>
<b>Int</b>  *enum*

- xyz = 0 (default)

- xzy = 1

- yxz = 2

- yzx = 3

- zxy = 4

- zyx = 5


Order in which to apply the euler rotations


<h2>scale</h2>
<b>Vec3f</b>  *bindable*

Default value : [ 1, 1, 1 ]  

Vector to scale the noise non-proportionally


<h2>transformation_order</h2>
<b>Int</b>  *enum*

- srt = 0

- str = 1

- rst = 2

- rts = 3

- tsr = 4 (default)

- trs = 5


Order in which to apply the translation, rotation, and frequency


<h2>translation</h2>
<b>Vec3f</b>  *bindable*

Default value : [ 0, 0, 0 ]  

Translation of the noise in space


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>amplitude</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

Intensity of the noise


<h2>color</h2>
<b>Bool</b>  

Default value : False  

Outputs RGB noise


<h2>color_A</h2>
<b>Rgb</b>  *bindable*

Default value : [ 0, 0, 0 ]  

The color value at 0 noise


<h2>color_B</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

The color value at 1 noise


<h2>distortion</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

Warp input coordinate space with single noise level before looking up noise


<h2>distortion_noise_type</h2>
<b>Int</b>  *enum*

- perlin classic = 0 (default)

- perlin simplex = 1


Type of noise to use for distortion.


<h2>frequency_multiplier</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

Scalar multiplier for the frequency vector


<h2>lacunarity</h2>
<b>Float</b>  *bindable*

Default value : 2.0  

Multiplier on the noise frequency per level


<h2>max_level</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

Number of octaves of noise to add together for the final result


<h2>noise_type</h2>
<b>Int</b>  *enum*

- perlin classic = 0 (default)

- perlin simplex = 1


Type of noise to use. Simplex grid activates Flow Noise Angle and Advection


<h2>persistence</h2>
<b>Float</b>  *bindable*

Default value : 0.5  

Multiplier on the noise amplitude per level


<h2>seed</h2>
<b>Int</b>  

Default value : 0  

The seed for the random number generator


</details>

