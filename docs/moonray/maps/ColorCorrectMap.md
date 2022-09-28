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
  <summary class="jekyll-theme-minimal scene-class-attr-group">Advanced attributes</summary>
  <p>
    
    <h3>contrast_b</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 0.0
      
        <p>negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the blue channel</p>
      
    
    <h3>contrast_g</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 0.0
      
        <p>negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the green channel</p>
      
    
    <h3>contrast_r</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 0.0
      
        <p>negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the red channel</p>
      
    
    <h3>gain_b</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p>multiplies the blue channel by the specified values</p>
      
    
    <h3>gain_g</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p>multiplies the green channel by the specified values</p>
      
    
    <h3>gain_r</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p>multiplies the red channel by the specified values</p>
      
    
    <h3>gamma_b</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p>raises the blue channel to the specified exponents</p>
      
    
    <h3>gamma_g</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p>raises the green channel to the specified exponents</p>
      
    
    <h3>gamma_r</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p>raises the red channel to the specified exponents</p>
      
    
    <h3>offset_b</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p>adds the specified values to the blue channel</p>
      
    
    <h3>offset_g</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p>adds the specified values to the green channel</p>
      
    
    <h3>offset_r</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p>adds the specified values to the red channel</p>
      
    
    <h3>saturation_b</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p>desaturates the blue channel input below 1.0 and adds saturation above 1.0</p>
      
    
    <h3>saturation_g</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p>desaturates the green channel input below 1.0 and adds saturation above 1.0</p>
      
    
    <h3>saturation_r</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p>desaturates the red channel input below 1.0 and adds saturation above 1.0</p>
      
    
    <h3>use_per_channel_contrast</h3>
    <b>Bool</b>
    
      
        default: False
      
        <p>enables separate RGB controls for contrast</p>
      
    
    <h3>use_per_channel_gain_offset</h3>
    <b>Bool</b>
    
      
        default: False
      
        <p>enables separate RGB controls for gain and offset</p>
      
    
    <h3>use_per_channel_gamma</h3>
    <b>Bool</b>
    
      
        default: False
      
        <p>enables separate RGB controls for gamma</p>
      
    
    <h3>use_per_channel_saturation</h3>
    <b>Bool</b>
    
      
        default: False
      
        <p>enables separate RGB controls for saturation</p>
      
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>TMI</h3>
    <b>Rgb</b>
    <i>bindable</i>
      
        default: [ 0, 0, 0 ]
      
        <p>T = Temperature where positive values push towards blue and negative towards red.   M = Magenta where positive values push towards magenta and negative towards green.  I = Intensity where negative values remove and positive values add energy </p>
      
    
    <h3>TMI_enabled</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p>enables the TMI parameters</p>
      
    
    <h3>clamp</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p>enables/disables clamping of the output values.</p>
      
    
    <h3>clamp_max</h3>
    <b>Float</b>
    
      
        default: 1.0
      
        <p>the maximum value output by this map when 'clamp' is enabled</p>
      
    
    <h3>clamp_min</h3>
    <b>Float</b>
    
      
        default: 0.0
      
        <p>the minimum value output by this map when 'clamp' is enabled</p>
      
    
    <h3>contrast</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 0.0
      
        <p>negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance</p>
      
    
    <h3>contrast_enabled</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p>enables the contrast parameter</p>
      
    
    <h3>gain</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p>multiplies the input channels by the specified values</p>
      
    
    <h3>gain_offset_enabled</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p>enables the gain and offset parameters</p>
      
    
    <h3>gamma</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p>raises the input to the specified exponents</p>
      
    
    <h3>gamma_enabled</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p>enables the gamma parameter</p>
      
    
    <h3>hue_shift</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 0.0
      
        <p>shifts the hue of the input (spectrum range is 0-1)</p>
      
    
    <h3>hue_shift_enabled</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p>enables the hue_shift parameter</p>
      
    
    <h3>input</h3>
    <b>Rgb</b>
    <i>bindable</i>
      
        default: [ 1, 1, 1 ]
      
        <p>bind the input here</p>
      
    
    <h3>mix</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p>how much of the overall color correct to mix in</p>
      
    
    <h3>offset</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 0.0
      
        <p>adds the specified values to the input</p>
      
    
    <h3>on</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p>enables/disables all color correct operations</p>
      
    
    <h3>saturation</h3>
    <b>Float</b>
    <i>bindable</i>
      
        default: 1.0
      
        <p>desaturates the input below 1.0 and adds saturation above 1.0</p>
      
    
    <h3>saturation_enabled</h3>
    <b>Bool</b>
    
      
        default: True
      
        <p>enables the saturation parameter</p>
      
    
  </p>
</details>

