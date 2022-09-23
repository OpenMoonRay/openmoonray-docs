# DirectionalMap

**MAP SHADER**

Documentation for class DirectionalMap



---

## <p style="color:blue;">Adjustment attributes</p>

## bias

**Float** *bindable*


Default value : 0.5




controls the rate at which the effect increases as the shading normal approaches the prime direction




## clamping_behavior

**Int** *enum*



- clamp = 0 (default)

- absolute = 1





determines how surfaces facing opposite the prime direction are handled




## falloff_type

**Int** *enum*



- cosine = 0 (default)

- linear = 1





determines how the effect falls off as the difference angle increases




## smoothstep_end

**Float** *bindable*


Default value : 0.550000011921




the value at which the effect is considered 100% on




## smoothstep_start

**Float** *bindable*


Default value : 0.449999988079




the value at which the effect is considered 100% off




## use_smoothstep

**Bool** 


Default value : False




apply smoothstep function to result






---

## <p style="color:blue;">Normal attributes</p>

## input_normal

**33554432** 


Default value : None




specifies an alternate shading normal when bound. The binding multiplier is ignored




## input_normal_dial

**Float** *bindable*


Default value : 1.0




controls the amount of influence of the alternate normal






---

## <p style="color:blue;">General attributes</p>

## color_a

**Rgb** *bindable*


Default value : [ 0, 0, 0 ]




the color of the effect when the difference angle is greatest




## color_b

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




the color of the effect when the difference angle is smallest




## custom_direction

**Vec3f** *bindable*


Default value : [ 0, 1, 0 ]




specifies a custom direction in world space as the prime direction




## object

**Node** 


Default value : None




the object to use when 'prime direction' is set to 'axis of object' or 'look-at object'




## object_axis

**Int** *enum*



- +X axis = 0

- -X axis = 1 (default)

- +Y axis = 2

- -Y axis = 3

- +Z axis = 4

- -Z axis = 5





which axis to use when 'prime direction' is set to 'axis of object'




## polarity

**Int** *enum*



- perpendicular = 0 (default)

- parallel = 1





determines which directions are given color A and which are given color B. Switching this effectively swaps the colors




## prime_direction

**Int** *enum*



- observer direction = 0 (default)

- custom direction = 1

- axis of object = 2

- look-at object = 3





which source is used for the prime direction




## use_reference_space

**Bool** 


Default value : False




use reference space position and normals





