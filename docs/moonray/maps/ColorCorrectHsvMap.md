---
title: ColorCorrectHsvMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ColorCorrectHsvMap

**MAP SHADER**

Documentation for class ColorCorrectHsvMap



---

## <p class="scene-class-attr-group">General attributes</p>

## clamp

**Bool** 


Default value : False




clamps output to [0,1] range




## hue_shift

**Float** *bindable*


Default value : 0.0




shifts the hue of the input (360 rolls over back to 0)




## input

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




input color




## on

**Bool** 


Default value : True




all attributes on/off




## saturation_contrast

**Float** 


Default value : 0.0




modifies the contrast of the input's saturation (-1, 1)




## saturation_factor

**Float** *bindable*


Default value : 1.0




multiplies the saturation of the input




## saturation_shift

**Float** 


Default value : 0.0




shifts the saturation of the input (-1, 1)




## value_contrast

**Float** 


Default value : 0.0




modifies the contrast of the input's value (-1, 1)




## value_factor

**Float** *bindable*


Default value : 1.0




multiplies the value of the input




## value_shift

**Float** 


Default value : 0.0




shifts the value of the input (-1, 1)





