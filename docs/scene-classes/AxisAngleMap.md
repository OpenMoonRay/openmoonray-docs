# AxisAngleMap

**MAP SHADER**

Documentation for class AxisAngleMap



---

## <p style="color:blue;">General attributes</p>

## angle

**Float** *bindable*


Default value : 0.0




the angle of rotation in degrees




## axis_space

**Int** *enum*



- world = 2 (default)

- object = 4





the space of the axis to rotate about




## input_space

**Int** *enum*



- render = 0 (default)

- camera = 1

- world = 2

- screen = 3

- object = 4





the space to transform from




## input_vector

**Vec3f** *bindable*


Default value : [ 0, 0, 1 ]




input vector to be rotated




## output_space

**Int** *enum*



- render = 0 (default)

- camera = 1

- world = 2

- screen = 3

- object = 4





the space to transform the resulting vector to




## rotation_axis

**Vec3f** *bindable*


Default value : [ 0, 1, 0 ]




axis to be rotated around





