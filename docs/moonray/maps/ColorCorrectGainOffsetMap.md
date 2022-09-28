---
title: ColorCorrectGainOffsetMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ColorCorrectGainOffsetMap

**MAP SHADER**

Documentation for class ColorCorrectGainOffsetMap



---

## <p class="scene-class-attr-group">General attributes</p>

## gain

**Float** *bindable*


Default value : 1.0




multiplies the input channels by the specified values




## gain_b

**Float** *bindable*


Default value : 1.0




multiplies the blue channel by the specified values




## gain_g

**Float** *bindable*


Default value : 1.0




multiplies the green channel by the specified values




## gain_r

**Float** *bindable*


Default value : 1.0




multiplies the red channel by the specified values




## input

**Rgb** *bindable*


Default value : [ 1, 1, 1 ]




bind the input here




## mix

**Float** *bindable*


Default value : 1.0




how much of the overall color correct to mix in




## offset

**Float** *bindable*


Default value : 0.0




adds the specified values to the input




## offset_b

**Float** *bindable*


Default value : 1.0




adds the specified values to the blue channel




## offset_g

**Float** *bindable*


Default value : 1.0




adds the specified values to the green channel




## offset_r

**Float** *bindable*


Default value : 1.0




adds the specified values to the red channel




## on

**Bool** 


Default value : True




enables/disables all color correct operations




## use_per_channel_gain_offset

**Bool** 


Default value : False




enables separate RGB controls for gain and offset





