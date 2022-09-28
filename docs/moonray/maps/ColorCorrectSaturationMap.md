---
title: ColorCorrectSaturationMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ColorCorrectSaturationMap

**MAP SHADER**

Documentation for class ColorCorrectSaturationMap



---

## <p class="scene-class-attr-group">General attributes</p>

## input

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




bind the input here




## mix

**Float** *bindable*


Default value : 1.0




how much of the overall color correct to mix in




## on

**Bool** 


Default value : True




enables/disables all color correct operations




## saturation

**Float** *bindable*


Default value : 1.0




desaturates the input below 1.0 and adds saturation above 1.0




## saturation_b

**Float** *bindable*


Default value : 1.0




desaturates the blue channel input below 1.0 and adds saturation above 1.0




## saturation_g

**Float** *bindable*


Default value : 1.0




desaturates the green channel input below 1.0 and adds saturation above 1.0




## saturation_r

**Float** *bindable*


Default value : 1.0




desaturates the red channel input below 1.0 and adds saturation above 1.0




## use_per_channel_saturation

**Bool** 


Default value : False




enables separate RGB controls for saturation





