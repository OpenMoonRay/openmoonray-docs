---
title: ColorCorrectMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectMap
{%assign image_path=site.data.scene-classes.maps.ColorCorrectMap.image_path%}
{%if site.data.scene-classes.maps.ColorCorrectMap.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.ColorCorrectMap.gallery
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
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.contrast_b.images.
          path=image_path
      %}
    </p>
    <h3>contrast_g</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the green channel</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.contrast_g.images.
          path=image_path
      %}
    </p>
    <h3>contrast_r</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the red channel</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.contrast_r.images.
          path=image_path
      %}
    </p>
    <h3>gain_b</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">multiplies the blue channel by the specified values</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.gain_b.images.
          path=image_path
      %}
    </p>
    <h3>gain_g</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">multiplies the green channel by the specified values</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.gain_g.images.
          path=image_path
      %}
    </p>
    <h3>gain_r</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">multiplies the red channel by the specified values</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.gain_r.images.
          path=image_path
      %}
    </p>
    <h3>gamma_b</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">raises the blue channel to the specified exponents</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.gamma_b.images.
          path=image_path
      %}
    </p>
    <h3>gamma_g</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">raises the green channel to the specified exponents</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.gamma_g.images.
          path=image_path
      %}
    </p>
    <h3>gamma_r</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">raises the red channel to the specified exponents</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.gamma_r.images.
          path=image_path
      %}
    </p>
    <h3>offset_b</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">adds the specified values to the blue channel</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.offset_b.images.
          path=image_path
      %}
    </p>
    <h3>offset_g</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">adds the specified values to the green channel</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.offset_g.images.
          path=image_path
      %}
    </p>
    <h3>offset_r</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">adds the specified values to the red channel</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.offset_r.images.
          path=image_path
      %}
    </p>
    <h3>saturation_b</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">desaturates the blue channel input below 1.0 and adds saturation above 1.0</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.saturation_b.images.
          path=image_path
      %}
    </p>
    <h3>saturation_g</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">desaturates the green channel input below 1.0 and adds saturation above 1.0</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.saturation_g.images.
          path=image_path
      %}
    </p>
    <h3>saturation_r</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">desaturates the red channel input below 1.0 and adds saturation above 1.0</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.saturation_r.images.
          path=image_path
      %}
    </p>
    <h3>use_per_channel_contrast</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables separate RGB controls for contrast</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.use_per_channel_contrast.images.
          path=image_path
      %}
    </p>
    <h3>use_per_channel_gain_offset</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables separate RGB controls for gain and offset</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.use_per_channel_gain_offset.images.
          path=image_path
      %}
    </p>
    <h3>use_per_channel_gamma</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables separate RGB controls for gamma</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.use_per_channel_gamma.images.
          path=image_path
      %}
    </p>
    <h3>use_per_channel_saturation</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables separate RGB controls for saturation</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.use_per_channel_saturation.images.
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
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.TMI.images.
          path=image_path
      %}
    </p>
    <h3>TMI_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables the TMI parameters</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.TMI_enabled.images.
          path=image_path
      %}
    </p>
    <h3>clamp</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables/disables clamping of the output values.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.clamp.images.
          path=image_path
      %}
    </p>
    <h3>clamp_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">the maximum value output by this map when 'clamp' is enabled</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.clamp_max.images.
          path=image_path
      %}
    </p>
    <h3>clamp_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">the minimum value output by this map when 'clamp' is enabled</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.clamp_min.images.
          path=image_path
      %}
    </p>
    <h3>contrast</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.contrast.images.
          path=image_path
      %}
    </p>
    <h3>contrast_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables the contrast parameter</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.contrast_enabled.images.
          path=image_path
      %}
    </p>
    <h3>gain</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">multiplies the input channels by the specified values</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.gain.images.
          path=image_path
      %}
    </p>
    <h3>gain_offset_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables the gain and offset parameters</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.gain_offset_enabled.images.
          path=image_path
      %}
    </p>
    <h3>gamma</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">raises the input to the specified exponents</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.gamma.images.
          path=image_path
      %}
    </p>
    <h3>gamma_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables the gamma parameter</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.gamma_enabled.images.
          path=image_path
      %}
    </p>
    <h3>hue_shift</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">shifts the hue of the input (spectrum range is 0-1)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.hue_shift.images.
          path=image_path
      %}
    </p>
    <h3>hue_shift_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables the hue_shift parameter</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.hue_shift_enabled.images.
          path=image_path
      %}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">bind the input here</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.input.images.
          path=image_path
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">how much of the overall color correct to mix in</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.mix.images.
          path=image_path
      %}
    </p>
    <h3>offset</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">adds the specified values to the input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.offset.images.
          path=image_path
      %}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables/disables all color correct operations</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.on.images.
          path=image_path
      %}
    </p>
    <h3>saturation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">desaturates the input below 1.0 and adds saturation above 1.0</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.saturation.images.
          path=image_path
      %}
    </p>
    <h3>saturation_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables the saturation parameter</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectMapattributes.saturation_enabled.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>