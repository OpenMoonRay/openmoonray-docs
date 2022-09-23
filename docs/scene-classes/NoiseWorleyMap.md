---
title: NoiseWorleyMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# NoiseWorleyMap

**MAP SHADER**

Documentation for class NoiseWorleyMap



---

## <p style="color:blue;">General attributes</p>

## F1

**Float** *bindable*


Default value : 1.0




Influence of F1 (the closest feature point)




## F2

**Float** *bindable*


Default value : 0.0




Influence of F2 (the second closest feature point)




## F3

**Float** *bindable*


Default value : 0.0




Influence of F3 (the third closest feature point)




## F4

**Float** *bindable*


Default value : 0.0




Influence of F4 (the fourth closest feature point)




## bias

**Float** *bindable*


Default value : 0.5




Bias of interpolation from color A to color B




## camera

**Camera** 


Default value : None




camera used to define camera and screen space




## cell_id

**Int** *enum*



- f1 = 0 (default)

- f2 = 1

- f3 = 2

- f4 = 3





Which of the distances determines the cell id




## color_A

**Rgb** *bindable*


Default value : [ 0, 0, 0 ]




The interpolated color value at distance equals zero




## color_B

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




The interpolated color value at distance equals one




## distance_method

**Int** *enum*



- linear = 0 (default)

- linear squared = 1

- manhattan = 2

- chebyshev = 3

- quadratic = 4

- minkowski = 5





Metric for calculating distance to feature points which controls the shape of the falloff when output mode is distance




## frequency_multiplier

**Float** *bindable*


Default value : 1.0




Scalar multiplier for the frequency vector




## gain

**Float** *bindable*


Default value : 0.5




Gain of interpolation from color A to color B




## input_texture_coordinates

**Vec3f** *bindable*


Default value : [ 0, 0, 0 ]




<p style="color:red;">Documentation for the attribute <b>input_texture_coordinates</b> needs to be written</p>




## invert

**Bool** 


Default value : False




Invert the final pattern




## jitter

**Float** *bindable*


Default value : 1.0




Controls the distortion of the cells




## max_level

**Float** *bindable*


Default value : 1.0




Number of octaves of noise to add together for the final result




## minkowski_number

**Float** *bindable*


Default value : 3.0




Exponent on distances when distance method is set to Minkowski




## object_space

**Geometry** 


Default value : None




Directly connect object to use that object's space.




## output_mode

**Int** *enum*



- distance = 0 (default)

- gradient = 1

- cell id = 2





Method by which the shader outputs a color.  Distance uses F1..F4 interpolated between color A and color B, gradient outputs the gradient of the noise, and cell ID outputs a random color for each cell




## remap

**Vec2f** *bindable*


Default value : [ 0, 1 ]




Allows mapping the distances from the specified min/max range into the 0..1 range




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




## seed

**Int** 


Default value : 0




The seed for the random number generator




## smoothstep

**Vec2f** *bindable*


Default value : [ 0, 1 ]




min/max values between which the smoothstep will interpolate




## space

**Int** *enum*



- render = 0 (default)

- camera = 1

- world = 2

- screen = 3

- object = 4

- reference = 5

- texture = 6

- input texture coordinates = 7





The space to calculate the noise in




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




## use_smoothstep

**Bool** 


Default value : False




Put the noise value through a smoothstep function defined by min/max





