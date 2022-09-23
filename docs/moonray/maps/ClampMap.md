---
title: ClampMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ClampMap

**MAP SHADER**

Documentation for class ClampMap



---

## <p style="color:blue;">General attributes</p>

## clamp

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





