---
title: ColorCorrectGammaMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ColorCorrectGammaMap

**MAP SHADER**

Documentation for class ColorCorrectGammaMap



---

## <p class="scene-class-attr-group">General attributes</p>

## gamma

**Float** *bindable*


Default value : 1.0




raises the input to the specified exponents




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




## use_per_channel_gamma

**Bool** 


Default value : False




enables separate RGB controls for gamma





