---
title: ColorCorrectMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectMap
---
{%assign image_dir=site.data.scene-classes.maps.ColorCorrectMap.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.maps.ColorCorrectMap.gallery
    image_dir=image_dir
%}
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>contrast_b</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the blue channel</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.contrast_b
          image_dir=image_dir
      %}
    </p>
    <h3>contrast_g</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the green channel</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.contrast_g
          image_dir=image_dir
      %}
    </p>
    <h3>contrast_r</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the red channel</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.contrast_r
          image_dir=image_dir
      %}
    </p>
    <h3>gain_b</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">multiplies the blue channel by the specified values</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.gain_b
          image_dir=image_dir
      %}
    </p>
    <h3>gain_g</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">multiplies the green channel by the specified values</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.gain_g
          image_dir=image_dir
      %}
    </p>
    <h3>gain_r</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">multiplies the red channel by the specified values</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.gain_r
          image_dir=image_dir
      %}
    </p>
    <h3>gamma_b</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">raises the blue channel to the specified exponents</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.gamma_b
          image_dir=image_dir
      %}
    </p>
    <h3>gamma_g</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">raises the green channel to the specified exponents</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.gamma_g
          image_dir=image_dir
      %}
    </p>
    <h3>gamma_r</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">raises the red channel to the specified exponents</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.gamma_r
          image_dir=image_dir
      %}
    </p>
    <h3>offset_b</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">adds the specified values to the blue channel</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.offset_b
          image_dir=image_dir
      %}
    </p>
    <h3>offset_g</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">adds the specified values to the green channel</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.offset_g
          image_dir=image_dir
      %}
    </p>
    <h3>offset_r</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">adds the specified values to the red channel</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.offset_r
          image_dir=image_dir
      %}
    </p>
    <h3>saturation_b</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">desaturates the blue channel input below 1.0 and adds saturation above 1.0</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.saturation_b
          image_dir=image_dir
      %}
    </p>
    <h3>saturation_g</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">desaturates the green channel input below 1.0 and adds saturation above 1.0</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.saturation_g
          image_dir=image_dir
      %}
    </p>
    <h3>saturation_r</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">desaturates the red channel input below 1.0 and adds saturation above 1.0</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.saturation_r
          image_dir=image_dir
      %}
    </p>
    <h3>use_per_channel_contrast</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables separate RGB controls for contrast</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.use_per_channel_contrast
          image_dir=image_dir
      %}
    </p>
    <h3>use_per_channel_gain_offset</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables separate RGB controls for gain and offset</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.use_per_channel_gain_offset
          image_dir=image_dir
      %}
    </p>
    <h3>use_per_channel_gamma</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables separate RGB controls for gamma</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.use_per_channel_gamma
          image_dir=image_dir
      %}
    </p>
    <h3>use_per_channel_saturation</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables separate RGB controls for saturation</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.use_per_channel_saturation
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>TMI</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">T = Temperature where positive values push towards blue and negative towards red.   M = Magenta where positive values push towards magenta and negative towards green.  I = Intensity where negative values remove and positive values add energy </p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.TMI
          image_dir=image_dir
      %}
    </p>
    <h3>TMI_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables the TMI parameters</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.TMI_enabled
          image_dir=image_dir
      %}
    </p>
    <h3>clamp</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables/disables clamping of the output values.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.clamp
          image_dir=image_dir
      %}
    </p>
    <h3>clamp_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">the maximum value output by this map when 'clamp' is enabled</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.clamp_max
          image_dir=image_dir
      %}
    </p>
    <h3>clamp_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">the minimum value output by this map when 'clamp' is enabled</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.clamp_min
          image_dir=image_dir
      %}
    </p>
    <h3>contrast</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.contrast
          image_dir=image_dir
      %}
    </p>
    <h3>contrast_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables the contrast parameter</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.contrast_enabled
          image_dir=image_dir
      %}
    </p>
    <h3>gain</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">multiplies the input channels by the specified values</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.gain
          image_dir=image_dir
      %}
    </p>
    <h3>gain_offset_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables the gain and offset parameters</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.gain_offset_enabled
          image_dir=image_dir
      %}
    </p>
    <h3>gamma</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">raises the input to the specified exponents</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.gamma
          image_dir=image_dir
      %}
    </p>
    <h3>gamma_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables the gamma parameter</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.gamma_enabled
          image_dir=image_dir
      %}
    </p>
    <h3>hue_shift</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">shifts the hue of the input (spectrum range is 0-1)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.hue_shift
          image_dir=image_dir
      %}
    </p>
    <h3>hue_shift_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables the hue_shift parameter</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.hue_shift_enabled
          image_dir=image_dir
      %}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">bind the input here</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.input
          image_dir=image_dir
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">how much of the overall color correct to mix in</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.mix
          image_dir=image_dir
      %}
    </p>
    <h3>offset</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">adds the specified values to the input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.offset
          image_dir=image_dir
      %}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables/disables all color correct operations</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.on
          image_dir=image_dir
      %}
    </p>
    <h3>saturation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">desaturates the input below 1.0 and adds saturation above 1.0</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.saturation
          image_dir=image_dir
      %}
    </p>
    <h3>saturation_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables the saturation parameter</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.saturation_enabled
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>