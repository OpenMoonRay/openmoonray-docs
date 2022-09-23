---
title: BlendMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# BlendMap

**MAP SHADER**

Documentation for class BlendMap



---

## <p style="color:blue;">General attributes</p>

## blend_amount

**Float** *bindable*


Default value : 0.5




The amount to blend between color A (0) and color B (1)




## blend_type

**Int** *enum*



- linear = 0 (default)

- cubic = 1





The type of blending algorithm




## color_A

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




The color you get if blend amount is 0




## color_B

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




The color you get if blend amount is 1




## threshold_max

**Float** *bindable*


Default value : 1.0




If the blend amount is greater than this amount, it will choose color B (1)




## threshold_min

**Float** *bindable*


Default value : 0.0




If the blend amount is less than or equal to this amount, it will choose color A (0)





