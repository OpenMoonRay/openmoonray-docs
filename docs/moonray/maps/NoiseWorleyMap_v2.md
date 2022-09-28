---
title: NoiseWorleyMap_v2

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# NoiseWorleyMap_v2
**MAP SHADER**

---

<details open>
<summary class="scene-class-attr-group">Adjustment attributes</summary>

<h2>bias</h2>
<b>Float</b>  *bindable*

Default value : 0.5  

Bias of interpolation from color A to color B


<h2>gain</h2>
<b>Float</b>  *bindable*

Default value : 0.5  

Gain of interpolation from color A to color B


<h2>invert</h2>
<b>Bool</b>  

Default value : False  

Invert the final pattern


<h2>point_size</h2>
<b>Float</b>  

Default value : 1.0  

For points output mode, relative radius of points


<h2>remap</h2>
<b>Vec2f</b>  *bindable*

Default value : [ 0, 1 ]  

Allows mapping the distances from the specified min/max range into the 0..1 range


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
<summary class="scene-class-attr-group">Advanced attributes</summary>

<h2>F1</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

Influence of F1 (the closest feature point)


<h2>F2</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

Influence of F2 (the second closest feature point)


<h2>F3</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

Influence of F3 (the third closest feature point)


<h2>F4</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

Influence of F4 (the fourth closest feature point)


<h2>cell_id</h2>
<b>Int</b>  *enum*

- f1 = 0 (default)

- f2 = 1

- f3 = 2

- f4 = 3


Which of the distances determines the cell id


</details>


<details open>
<summary class="scene-class-attr-group">Output attributes</summary>

<h2>distance_method</h2>
<b>Int</b>  *enum*

- linear = 0 (default)

- linear squared = 1

- manhattan = 2

- chebyshev = 3

- quadratic = 4

- minkowski = 5


Metric for calculating distance to feature points which controls the shape of the falloff when output mode is distance


<h2>minkowski_number</h2>
<b>Float</b>  *bindable*

Default value : 3.0  

Exponent on distances when distance method is set to Minkowski


<h2>output_mode</h2>
<b>Int</b>  *enum*

- distance = 0 (default)

- gradient = 1

- cell id = 2

- cell edges = 3

- points = 4


Method by which the shader outputs a color.  Distance uses F1..F4 interpolated between color A and color B, gradient outputs the gradient of the noise, and cell ID outputs a random color for each cell


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

- world = 2 (default)

- screen = 3

- object = 4

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

<h2>color_A</h2>
<b>Rgb</b>  *bindable*

Default value : [ 0, 0, 0 ]  

The interpolated color value at distance equals zero


<h2>color_B</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

The interpolated color value at distance equals one


<h2>frequency</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

Scalar multiplier for the frequency vector


<h2>jitter</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

Controls the distortion of the cells


<h2>max_level</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

Number of octaves of noise to add together for the final result


<h2>seed</h2>
<b>Int</b>  

Default value : 0  

The seed for the random number generator


</details>

