---
title: RampMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# RampMap

**MAP SHADER**

Documentation for class RampMap



---

## <p class="scene-class-attr-group">Additional properties attributes</p>

## input_texture_coordinates

**Vec3f** *bindable*


Default value : [ 0, 0, 0 ]




Bind custom UV coordinates




## uv_repeat

**Vec2f** 


Default value : [ 1, 1 ]




Number of times to repeat the ramp pattern




## uv_wave

**Vec2f** 


Default value : [ 0, 0 ]




Creates waves which perturb the ramp pattern




## wrap_type

**Int** *enum*



- wrap = 0 (default)

- clamp = 1





<p class="scene-class-attr-missing">Documentation for the attribute <b>wrap_type</b> needs to be written</p>






---

## <p class="scene-class-attr-group">Ramp Knot attributes</p>

## colors

**RgbVector** 


Default value : [[ 0, 0, 0 ], [ 0.25, 0.25, 0.25 ], [ 0.75, 0.75, 0.75 ], [ 1, 1, 1 ]]




List of colors on the ramp




## interpolations

**IntVector** 


Default value : <scene_rdl2.__scene_rdl2__.IntVector object at >




None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |

			Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6




## positions

**FloatVector** 


Default value : <scene_rdl2.__scene_rdl2__.FloatVector object at >




Color ramp






---

## <p class="scene-class-attr-group">Ramp properties attributes</p>

## camera

**Camera** 


Default value : None




Camera used to define camera and screen space




## color_space

**Int** *enum*



- rgb = 0 (default)

- hsv = 1

- hsl = 2





Color space to perform interpolation in




## input

**Float** *bindable*


Default value : 1.0




Input signal for ramp, used when ramp type is set to input




## object

**Geometry** 


Default value : None




<p class="scene-class-attr-missing">Documentation for the attribute <b>object</b> needs to be written</p>




## ramp_type

**Int** *enum*



- v = 0 (default)

- u = 1

- diagonal = 2

- radial = 3

- circular = 4

- box = 5

- uxv = 6

- four corner = 7

- input = 8





<p class="scene-class-attr-missing">Documentation for the attribute <b>ramp_type</b> needs to be written</p>




## space

**Int** *enum*



- render = 0 (default)

- camera = 1

- world = 2

- screen = 3

- object = 4

- reference = 5

- texture = 6





Only applies when 'texture coordinates' is set to 'default state coordinates'






---

## <p class="scene-class-attr-group">General attributes</p>

## texture_coordinates

**Int** *enum*



- default state coordinates = 0 (default)

- input texture coordinates = 1





<p class="scene-class-attr-missing">Documentation for the attribute <b>texture_coordinates</b> needs to be written</p>





