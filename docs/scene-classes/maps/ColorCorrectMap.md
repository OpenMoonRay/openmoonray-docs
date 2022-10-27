---
title: ColorCorrectMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectMap
{%assign image_path=site.data.scene-classes.maps.ColorCorrectMap.images.path%}
{%if site.data.scene-classes.maps.ColorCorrectMap.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.ColorCorrectMap.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.ColorCorrectMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.ColorCorrectMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>contrast_b</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the blue channel</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.contrast_b
          path=image_path
      %}
    </p>
    <h3>contrast_g</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the green channel</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.contrast_g
          path=image_path
      %}
    </p>
    <h3>contrast_r</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the red channel</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.contrast_r
          path=image_path
      %}
    </p>
    <h3>gain_b</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">multiplies the blue channel by the specified values</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.gain_b
          path=image_path
      %}
    </p>
    <h3>gain_g</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">multiplies the green channel by the specified values</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.gain_g
          path=image_path
      %}
    </p>
    <h3>gain_r</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">multiplies the red channel by the specified values</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.gain_r
          path=image_path
      %}
    </p>
    <h3>gamma_b</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">raises the blue channel to the specified exponents</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.gamma_b
          path=image_path
      %}
    </p>
    <h3>gamma_g</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">raises the green channel to the specified exponents</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.gamma_g
          path=image_path
      %}
    </p>
    <h3>gamma_r</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">raises the red channel to the specified exponents</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.gamma_r
          path=image_path
      %}
    </p>
    <h3>offset_b</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">adds the specified values to the blue channel</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.offset_b
          path=image_path
      %}
    </p>
    <h3>offset_g</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">adds the specified values to the green channel</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.offset_g
          path=image_path
      %}
    </p>
    <h3>offset_r</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">adds the specified values to the red channel</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.offset_r
          path=image_path
      %}
    </p>
    <h3>saturation_b</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">desaturates the blue channel input below 1.0 and adds saturation above 1.0</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.saturation_b
          path=image_path
      %}
    </p>
    <h3>saturation_g</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">desaturates the green channel input below 1.0 and adds saturation above 1.0</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.saturation_g
          path=image_path
      %}
    </p>
    <h3>saturation_r</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">desaturates the red channel input below 1.0 and adds saturation above 1.0</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.saturation_r
          path=image_path
      %}
    </p>
    <h3>use_per_channel_contrast</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables separate RGB controls for contrast</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.use_per_channel_contrast
          path=image_path
      %}
    </p>
    <h3>use_per_channel_gain_offset</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables separate RGB controls for gain and offset</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.use_per_channel_gain_offset
          path=image_path
      %}
    </p>
    <h3>use_per_channel_gamma</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables separate RGB controls for gamma</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.use_per_channel_gamma
          path=image_path
      %}
    </p>
    <h3>use_per_channel_saturation</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables separate RGB controls for saturation</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.use_per_channel_saturation
          path=image_path
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
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.TMI
          path=image_path
      %}
    </p>
    <h3>TMI_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables the TMI parameters</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.TMI_enabled
          path=image_path
      %}
    </p>
    <h3>clamp</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables/disables clamping of the output values.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.clamp
          path=image_path
      %}
    </p>
    <h3>clamp_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">the maximum value output by this map when 'clamp' is enabled</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.clamp_max
          path=image_path
      %}
    </p>
    <h3>clamp_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">the minimum value output by this map when 'clamp' is enabled</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.clamp_min
          path=image_path
      %}
    </p>
    <h3>contrast</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.contrast
          path=image_path
      %}
    </p>
    <h3>contrast_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables the contrast parameter</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.contrast_enabled
          path=image_path
      %}
    </p>
    <h3>gain</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">multiplies the input channels by the specified values</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.gain
          path=image_path
      %}
    </p>
    <h3>gain_offset_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables the gain and offset parameters</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.gain_offset_enabled
          path=image_path
      %}
    </p>
    <h3>gamma</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">raises the input to the specified exponents</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.gamma
          path=image_path
      %}
    </p>
    <h3>gamma_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables the gamma parameter</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.gamma_enabled
          path=image_path
      %}
    </p>
    <h3>hue_shift</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">shifts the hue of the input (spectrum range is 0-1)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.hue_shift
          path=image_path
      %}
    </p>
    <h3>hue_shift_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables the hue_shift parameter</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.hue_shift_enabled
          path=image_path
      %}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">bind the input here</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.input
          path=image_path
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">how much of the overall color correct to mix in</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.mix
          path=image_path
      %}
    </p>
    <h3>offset</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">adds the specified values to the input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.offset
          path=image_path
      %}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables/disables all color correct operations</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.on
          path=image_path
      %}
    </p>
    <h3>saturation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">desaturates the input below 1.0 and adds saturation above 1.0</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.saturation
          path=image_path
      %}
    </p>
    <h3>saturation_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables the saturation parameter</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMap.images.attributes.saturation_enabled
          path=image_path
      %}
    </p>
  </p>
</details>
</div>