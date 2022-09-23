---
title: RemapMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# RemapMap

**MAP SHADER**

Documentation for class RemapMap



---

## <p style="color:blue;">Channel attributes</p>

## clamp_max_RGB

**Rgb** 


Default value : [ 1, 1, 1 ]




the maximum value output by this map when 'clamp' is enabled




## clamp_min_RGB

**Rgb** 


Default value : [ 0, 0, 0 ]




the minimum value output by this map when 'clamp' is enabled




## input_max_RGB

**Rgb** 


Default value : [ 1, 1, 1 ]




the input value that will be remapped to the 'output max' value




## input_min_RGB

**Rgb** 


Default value : [ 0, 0, 0 ]




the input value that will be remapped to the 'output min' value




## midpoint_bias_RGB

**Rgb** 


Default value : [ 0.5, 0.5, 0.5 ]




biases the in-between values toward 'output min' or 'output max'. Default = 0.5




## output_max_RGB

**Rgb** 


Default value : [ 1, 1, 1 ]




the value that 'input max' is remapped to




## output_min_RGB

**Rgb** 


Default value : [ 0, 0, 0 ]




the value that 'input min' is remapped to






---

## <p style="color:blue;">General attributes</p>

## clamp

**Bool** 


Default value : True




enables/disables clamping of the output values.  This useful prevent out-of-range values when expanding the input values.




## clamp_RGB

**Bool** 


Default value : True




enables/disables clamping of the output values.  This useful prevent out-of-range values when expanding the input values.




## clamp_max

**Float** 


Default value : 1.0




the maximum value output by this map when 'clamp' is enabled




## clamp_min

**Float** 


Default value : 0.0




the minimum value output by this map when 'clamp' is enabled




## input

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




the input values to be remapped




## input_max

**Float** 


Default value : 1.0




the input value that will be remapped to the 'output max' value




## input_min

**Float** 


Default value : 0.0




the input value that will be remapped to the 'output min' value




## midpoint_bias

**Float** 


Default value : 0.5




biases the in-between values toward 'output min' or 'output max'. Default = 0.5




## output_max

**Float** 


Default value : 1.0




the value that 'input max' is remapped to




## output_min

**Float** 


Default value : 0.0




the value that 'input min' is remapped to




## remap_method

**Int** *enum*



- uniform = 0 (default)

- RGB = 1





Choose whether you are remapping using single values (uniform) or with separate RGB channels





