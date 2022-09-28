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
<p>

<h3>time</h3>
<b>Float</b>  *bindable*

default: 0.0

If use 4D noise is on, this is the value for the 4th dimension


<h3>use_4D_noise</h3>
<b>Bool</b>  

default: False

If on, 4-dimensional noise is used instead of 3-dimensional


</p>
</details>


<details open>
<summary class="scene-class-attr-group">Adjustment attributes</summary>
<p>

<h3>bias</h3>
<b>Float</b>  *bindable*

default: 0.5

Bias the noise towards 0 or 1


<h3>gain</h3>
<b>Float</b>  *bindable*

default: 0.5

Apply gain to the noise


<h3>invert</h3>
<b>Bool</b>  

default: False

Invert the final pattern


<h3>smoothstep</h3>
<b>Vec2f</b>  *bindable*

default: [ 0, 1 ]

min/max values between which the smoothstep will interpolate


<h3>use_smoothstep</h3>
<b>Bool</b>  

default: False

Put the noise value through a smoothstep function defined by min/max


</p>
</details>


<details open>
<summary class="scene-class-attr-group">Flow Noise attributes</summary>
<p>

<h3>flow_advection_rate</h3>
<b>Float</b>  *bindable*

default: 0.0

Rate of advection for flow noise


<h3>flow_angle</h3>
<b>Float</b>  *bindable*

default: 0.0

Angle of rotation for flow noise


</p>
</details>


<details open>
<summary class="scene-class-attr-group">Space attributes</summary>
<p>

<h3>camera</h3>
<b>Camera</b>  

default: None

camera used to define camera and screen space


<h3>input_texture_coordinates</h3>
<b>Vec3f</b>  *bindable*

default: [ 0, 0, 0 ]

<p class="scene-class-attr-missing">Documentation for the attribute <b>input_texture_coordinates</b> needs to be written</p>


<h3>object_space</h3>
<b>Geometry</b>  

default: None

Directly connect object to use that object's space.


<h3>space</h3>
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


</p>
</details>


<details open>
<summary class="scene-class-attr-group">Transform attributes</summary>
<p>

<h3>rotation</h3>
<b>Vec3f</b>  *bindable*

default: [ 0, 0, 0 ]

Rotates the noise in space based on the specified rotation order


<h3>rotation_order</h3>
<b>Int</b>  *enum*

- xyz = 0 (default)

- xzy = 1

- yxz = 2

- yzx = 3

- zxy = 4

- zyx = 5


Order in which to apply the euler rotations


<h3>scale</h3>
<b>Vec3f</b>  *bindable*

default: [ 1, 1, 1 ]

Vector to scale the noise non-proportionally


<h3>transformation_order</h3>
<b>Int</b>  *enum*

- srt = 0

- str = 1

- rst = 2

- rts = 3

- tsr = 4 (default)

- trs = 5


Order in which to apply the translation, rotation, and frequency


<h3>translation</h3>
<b>Vec3f</b>  *bindable*

default: [ 0, 0, 0 ]

Translation of the noise in space


</p>
</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>
<p>

<h3>amplitude</h3>
<b>Float</b>  *bindable*

default: 1.0

Intensity of the noise


<h3>color</h3>
<b>Bool</b>  

default: False

Outputs RGB noise


<h3>color_A</h3>
<b>Rgb</b>  *bindable*

default: [ 0, 0, 0 ]

The color value at 0 noise


<h3>color_B</h3>
<b>Rgb</b>  *bindable*

default: [ 1, 1, 1 ]

The color value at 1 noise


<h3>distortion</h3>
<b>Float</b>  *bindable*

default: 0.0

Warp input coordinate space with single noise level before looking up noise


<h3>distortion_noise_type</h3>
<b>Int</b>  *enum*

- perlin classic = 0 (default)

- perlin simplex = 1


Type of noise to use for distortion.


<h3>frequency_multiplier</h3>
<b>Float</b>  *bindable*

default: 1.0

Scalar multiplier for the frequency vector


<h3>lacunarity</h3>
<b>Float</b>  *bindable*

default: 2.0

Multiplier on the noise frequency per level


<h3>max_level</h3>
<b>Float</b>  *bindable*

default: 1.0

Number of octaves of noise to add together for the final result


<h3>noise_type</h3>
<b>Int</b>  *enum*

- perlin classic = 0 (default)

- perlin simplex = 1


Type of noise to use. Simplex grid activates Flow Noise Angle and Advection


<h3>persistence</h3>
<b>Float</b>  *bindable*

default: 0.5

Multiplier on the noise amplitude per level


<h3>seed</h3>
<b>Int</b>  

default: 0

The seed for the random number generator


</p>
</details>

