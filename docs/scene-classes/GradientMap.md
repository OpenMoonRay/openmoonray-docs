# GradientMap

**MAP SHADER**

Documentation for class GradientMap



---

## <p style="color:blue;">Additional properties attributes</p>

## symmetric

**Bool** 


Default value : False




Color A blends into Color B and then back into Color A from the start to the end point




## symmetric_center

**Float** 


Default value : 0.5




Shifts the center of the symmetric falloff






---

## <p style="color:blue;">Falloff properties attributes</p>

## falloff_bias

**Float** 


Default value : 0.5




Compresses the blending towards the start or end color




## falloff_end

**Float** 


Default value : 1.0




Shifts where the falloff ends




## falloff_end_intensity

**Float** 


Default value : 1.0




Adjust the intensity of the end color




## falloff_exponent

**Float** 


Default value : 1.0




Adjusts rate of blending




## falloff_start

**Float** 


Default value : 0.0




Shifts where the falloff starts




## falloff_type

**Int** *enum*



- none = 0

- natural = 1 (default)

- linear = 2

- squared = 3

- gaussian = 4

- ease out = 5





Falloff blend mode






---

## <p style="color:blue;">Gradient properties attributes</p>

## color_A

**Rgb** *bindable*


Default value : [ 0, 0, 0 ]




Start color




## color_B

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




End color




## end

**Vec3f** 


Default value : [ 0, 1, 0 ]




End position in the chosen space




## object

**Geometry** 


Default value : None




Use the provided object's transformation space (only used if object space is also specified)




## space

**Int** *enum*



- render = 0 (default)

- camera = 1

- world = 2

- screen = 3

- object = 4

- reference = 5

- texture = 6





The transformation space in which to perform the blending




## start

**Vec3f** 


Default value : [ 0, 0, 0 ]




Start position in the chosen space





