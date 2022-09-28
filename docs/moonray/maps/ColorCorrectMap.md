---
title: ColorCorrectMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ColorCorrectMap
**MAP SHADER**

---

<details open>
<summary class="scene-class-attr-group">Advanced attributes</summary>

<h2>contrast_b</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the blue channel


<h2>contrast_g</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the green channel


<h2>contrast_r</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the red channel


<h2>gain_b</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

multiplies the blue channel by the specified values


<h2>gain_g</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

multiplies the green channel by the specified values


<h2>gain_r</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

multiplies the red channel by the specified values


<h2>gamma_b</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

raises the blue channel to the specified exponents


<h2>gamma_g</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

raises the green channel to the specified exponents


<h2>gamma_r</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

raises the red channel to the specified exponents


<h2>offset_b</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

adds the specified values to the blue channel


<h2>offset_g</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

adds the specified values to the green channel


<h2>offset_r</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

adds the specified values to the red channel


<h2>saturation_b</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

desaturates the blue channel input below 1.0 and adds saturation above 1.0


<h2>saturation_g</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

desaturates the green channel input below 1.0 and adds saturation above 1.0


<h2>saturation_r</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

desaturates the red channel input below 1.0 and adds saturation above 1.0


<h2>use_per_channel_contrast</h2>
<b>Bool</b>  

Default value : False  

enables separate RGB controls for contrast


<h2>use_per_channel_gain_offset</h2>
<b>Bool</b>  

Default value : False  

enables separate RGB controls for gain and offset


<h2>use_per_channel_gamma</h2>
<b>Bool</b>  

Default value : False  

enables separate RGB controls for gamma


<h2>use_per_channel_saturation</h2>
<b>Bool</b>  

Default value : False  

enables separate RGB controls for saturation


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>TMI</h2>
<b>Rgb</b>  *bindable*

Default value : [ 0, 0, 0 ]  

T = Temperature where positive values push towards blue and negative towards red.   M = Magenta where positive values push towards magenta and negative towards green.  I = Intensity where negative values remove and positive values add energy 


<h2>TMI_enabled</h2>
<b>Bool</b>  

Default value : True  

enables the TMI parameters


<h2>clamp</h2>
<b>Bool</b>  

Default value : True  

enables/disables clamping of the output values.


<h2>clamp_max</h2>
<b>Float</b>  

Default value : 1.0  

the maximum value output by this map when 'clamp' is enabled


<h2>clamp_min</h2>
<b>Float</b>  

Default value : 0.0  

the minimum value output by this map when 'clamp' is enabled


<h2>contrast</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance


<h2>contrast_enabled</h2>
<b>Bool</b>  

Default value : True  

enables the contrast parameter


<h2>gain</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

multiplies the input channels by the specified values


<h2>gain_offset_enabled</h2>
<b>Bool</b>  

Default value : True  

enables the gain and offset parameters


<h2>gamma</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

raises the input to the specified exponents


<h2>gamma_enabled</h2>
<b>Bool</b>  

Default value : True  

enables the gamma parameter


<h2>hue_shift</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

shifts the hue of the input (spectrum range is 0-1)


<h2>hue_shift_enabled</h2>
<b>Bool</b>  

Default value : True  

enables the hue_shift parameter


<h2>input</h2>
<b>Rgb</b>  *bindable*

Default value : [ 1, 1, 1 ]  

bind the input here


<h2>mix</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

how much of the overall color correct to mix in


<h2>offset</h2>
<b>Float</b>  *bindable*

Default value : 0.0  

adds the specified values to the input


<h2>on</h2>
<b>Bool</b>  

Default value : True  

enables/disables all color correct operations


<h2>saturation</h2>
<b>Float</b>  *bindable*

Default value : 1.0  

desaturates the input below 1.0 and adds saturation above 1.0


<h2>saturation_enabled</h2>
<b>Bool</b>  

Default value : True  

enables the saturation parameter


</details>

