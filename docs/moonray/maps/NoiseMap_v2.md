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

## time
**Float** *bindable*

Default value : 0.0

If use 4D noise is on, this is the value for the 4th dimension


## use_4D_noise
**Bool** 

Default value : False

If on, 4-dimensional noise is used instead of 3-dimensional


</details>

---

<details open>
<summary class="scene-class-attr-group">Adjustment attributes</summary>

## bias
**Float** *bindable*

Default value : 0.5

Bias the noise towards 0 or 1


## gain
**Float** *bindable*

Default value : 0.5

Apply gain to the noise


## invert
**Bool** 

Default value : False

Invert the final pattern


## smoothstep
**Vec2f** *bindable*

Default value : [ 0, 1 ]

min/max values between which the smoothstep will interpolate


## use_smoothstep
**Bool** 

Default value : False

Put the noise value through a smoothstep function defined by min/max


</details>

---

<details open>
<summary class="scene-class-attr-group">Flow Noise attributes</summary>

## flow_advection_rate
**Float** *bindable*

Default value : 0.0

Rate of advection for flow noise


## flow_angle
**Float** *bindable*

Default value : 0.0

Angle of rotation for flow noise


</details>

---

<details open>
<summary class="scene-class-attr-group">Space attributes</summary>

## camera
**Camera** 

Default value : None

camera used to define camera and screen space


## input_texture_coordinates
**Vec3f** *bindable*

Default value : [ 0, 0, 0 ]

<p class="scene-class-attr-missing">Documentation for the attribute <b>input_texture_coordinates</b> needs to be written</p>


## object_space
**Geometry** 

Default value : None

Directly connect object to use that object's space.


## space
**Int** *enum*

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

---

<details open>
<summary class="scene-class-attr-group">Transform attributes</summary>

## rotation
**Vec3f** *bindable*

Default value : [ 0, 0, 0 ]

Rotates the noise in space based on the specified rotation order


## rotation_order
**Int** *enum*

- xyz = 0 (default)

- xzy = 1

- yxz = 2

- yzx = 3

- zxy = 4

- zyx = 5


Order in which to apply the euler rotations


## scale
**Vec3f** *bindable*

Default value : [ 1, 1, 1 ]

Vector to scale the noise non-proportionally


## transformation_order
**Int** *enum*

- srt = 0

- str = 1

- rst = 2

- rts = 3

- tsr = 4 (default)

- trs = 5


Order in which to apply the translation, rotation, and frequency


## translation
**Vec3f** *bindable*

Default value : [ 0, 0, 0 ]

Translation of the noise in space


</details>

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

## amplitude
**Float** *bindable*

Default value : 1.0

Intensity of the noise


## color
**Bool** 

Default value : False

Outputs RGB noise


## color_A
**Rgb** *bindable*

Default value : [ 0, 0, 0 ]

The color value at 0 noise


## color_B
**Rgb** *bindable*

Default value : [ 1, 1, 1 ]

The color value at 1 noise


## distortion
**Float** *bindable*

Default value : 0.0

Warp input coordinate space with single noise level before looking up noise


## distortion_noise_type
**Int** *enum*

- perlin classic = 0 (default)

- perlin simplex = 1


Type of noise to use for distortion.


## frequency_multiplier
**Float** *bindable*

Default value : 1.0

Scalar multiplier for the frequency vector


## lacunarity
**Float** *bindable*

Default value : 2.0

Multiplier on the noise frequency per level


## max_level
**Float** *bindable*

Default value : 1.0

Number of octaves of noise to add together for the final result


## noise_type
**Int** *enum*

- perlin classic = 0 (default)

- perlin simplex = 1


Type of noise to use. Simplex grid activates Flow Noise Angle and Advection


## persistence
**Float** *bindable*

Default value : 0.5

Multiplier on the noise amplitude per level


## seed
**Int** 

Default value : 0

The seed for the random number generator


</details>

