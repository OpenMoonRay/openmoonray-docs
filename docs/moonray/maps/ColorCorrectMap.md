---
title: ColorCorrectMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ColorCorrectMap

**MAP SHADER**

Documentation for class ColorCorrectMap



---

## <p style="color:blue;">Advanced attributes</p>

## contrast_b

**Float** *bindable*


Default value : 0.0




negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the blue channel




## contrast_g

**Float** *bindable*


Default value : 0.0




negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the green channel




## contrast_r

**Float** *bindable*


Default value : 0.0




negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the red channel




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




## gamma_b

**Float** *bindable*


Default value : 1.0




raises the blue channel to the specified exponents




## gamma_g

**Float** *bindable*


Default value : 1.0




raises the green channel to the specified exponents




## gamma_r

**Float** *bindable*


Default value : 1.0




raises the red channel to the specified exponents




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




## use_per_channel_contrast

**Bool** 


Default value : False




enables separate RGB controls for contrast




## use_per_channel_gain_offset

**Bool** 


Default value : False




enables separate RGB controls for gain and offset




## use_per_channel_gamma

**Bool** 


Default value : False




enables separate RGB controls for gamma




## use_per_channel_saturation

**Bool** 


Default value : False




enables separate RGB controls for saturation






---

## <p style="color:blue;">General attributes</p>

## TMI

**Rgb** *bindable*


Default value : [ 0, 0, 0 ]




T = Temperature where positive values push towards blue and negative towards red.   M = Magenta where positive values push towards magenta and negative towards green.  I = Intensity where negative values remove and positive values add energy 




## TMI_enabled

**Bool** 


Default value : True




enables the TMI parameters




## clamp

**Bool** 


Default value : True




enables/disables clamping of the output values.




## clamp_max

**Float** 


Default value : 1.0




the maximum value output by this map when 'clamp' is enabled




## clamp_min

**Float** 


Default value : 0.0




the minimum value output by this map when 'clamp' is enabled




## contrast

**Float** *bindable*


Default value : 0.0




negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance




## contrast_enabled

**Bool** 


Default value : True




enables the contrast parameter




## gain

**Float** *bindable*


Default value : 1.0




multiplies the input channels by the specified values




## gain_offset_enabled

**Bool** 


Default value : True




enables the gain and offset parameters




## gamma

**Float** *bindable*


Default value : 1.0




raises the input to the specified exponents




## gamma_enabled

**Bool** 


Default value : True




enables the gamma parameter




## hue_shift

**Float** *bindable*


Default value : 0.0




shifts the hue of the input (spectrum range is 0-1)




## hue_shift_enabled

**Bool** 


Default value : True




enables the hue_shift parameter




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




## on

**Bool** 


Default value : True




enables/disables all color correct operations




## saturation

**Float** *bindable*


Default value : 1.0




desaturates the input below 1.0 and adds saturation above 1.0




## saturation_enabled

**Bool** 


Default value : True




enables the saturation parameter





