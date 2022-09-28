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
  <p>
  
  <h3>contrast_b</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the blue channel
  
  
  <h3>contrast_g</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the green channel
  
  
  <h3>contrast_r</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the red channel
  
  
  <h3>gain_b</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  multiplies the blue channel by the specified values
  
  
  <h3>gain_g</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  multiplies the green channel by the specified values
  
  
  <h3>gain_r</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  multiplies the red channel by the specified values
  
  
  <h3>gamma_b</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  raises the blue channel to the specified exponents
  
  
  <h3>gamma_g</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  raises the green channel to the specified exponents
  
  
  <h3>gamma_r</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  raises the red channel to the specified exponents
  
  
  <h3>offset_b</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  adds the specified values to the blue channel
  
  
  <h3>offset_g</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  adds the specified values to the green channel
  
  
  <h3>offset_r</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  adds the specified values to the red channel
  
  
  <h3>saturation_b</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  desaturates the blue channel input below 1.0 and adds saturation above 1.0
  
  
  <h3>saturation_g</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  desaturates the green channel input below 1.0 and adds saturation above 1.0
  
  
  <h3>saturation_r</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  desaturates the red channel input below 1.0 and adds saturation above 1.0
  
  
  <h3>use_per_channel_contrast</h3>
  <b>Bool</b>  
  
  default: False
  
  enables separate RGB controls for contrast
  
  
  <h3>use_per_channel_gain_offset</h3>
  <b>Bool</b>  
  
  default: False
  
  enables separate RGB controls for gain and offset
  
  
  <h3>use_per_channel_gamma</h3>
  <b>Bool</b>  
  
  default: False
  
  enables separate RGB controls for gamma
  
  
  <h3>use_per_channel_saturation</h3>
  <b>Bool</b>  
  
  default: False
  
  enables separate RGB controls for saturation
  
  
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">General attributes</summary>
  <p>
  
  <h3>TMI</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 0, 0, 0 ]
  
  T = Temperature where positive values push towards blue and negative towards red.   M = Magenta where positive values push towards magenta and negative towards green.  I = Intensity where negative values remove and positive values add energy 
  
  
  <h3>TMI_enabled</h3>
  <b>Bool</b>  
  
  default: True
  
  enables the TMI parameters
  
  
  <h3>clamp</h3>
  <b>Bool</b>  
  
  default: True
  
  enables/disables clamping of the output values.
  
  
  <h3>clamp_max</h3>
  <b>Float</b>  
  
  default: 1.0
  
  the maximum value output by this map when 'clamp' is enabled
  
  
  <h3>clamp_min</h3>
  <b>Float</b>  
  
  default: 0.0
  
  the minimum value output by this map when 'clamp' is enabled
  
  
  <h3>contrast</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance
  
  
  <h3>contrast_enabled</h3>
  <b>Bool</b>  
  
  default: True
  
  enables the contrast parameter
  
  
  <h3>gain</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  multiplies the input channels by the specified values
  
  
  <h3>gain_offset_enabled</h3>
  <b>Bool</b>  
  
  default: True
  
  enables the gain and offset parameters
  
  
  <h3>gamma</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  raises the input to the specified exponents
  
  
  <h3>gamma_enabled</h3>
  <b>Bool</b>  
  
  default: True
  
  enables the gamma parameter
  
  
  <h3>hue_shift</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  shifts the hue of the input (spectrum range is 0-1)
  
  
  <h3>hue_shift_enabled</h3>
  <b>Bool</b>  
  
  default: True
  
  enables the hue_shift parameter
  
  
  <h3>input</h3>
  <b>Rgb</b>  *bindable*
  
  default: [ 1, 1, 1 ]
  
  bind the input here
  
  
  <h3>mix</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  how much of the overall color correct to mix in
  
  
  <h3>offset</h3>
  <b>Float</b>  *bindable*
  
  default: 0.0
  
  adds the specified values to the input
  
  
  <h3>on</h3>
  <b>Bool</b>  
  
  default: True
  
  enables/disables all color correct operations
  
  
  <h3>saturation</h3>
  <b>Float</b>  *bindable*
  
  default: 1.0
  
  desaturates the input below 1.0 and adds saturation above 1.0
  
  
  <h3>saturation_enabled</h3>
  <b>Bool</b>  
  
  default: True
  
  enables the saturation parameter
  
  
  </p>
</details>

