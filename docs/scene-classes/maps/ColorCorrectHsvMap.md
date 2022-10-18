---
title: ColorCorrectHsvMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectHsvMap
---
{%assign image_dir=site.data.scene-classes.maps.ColorCorrectHsvMap.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.maps.ColorCorrectHsvMap.gallery
    image_dir=image_dir
%}
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>clamp</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">clamps output to [0,1] range</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectHsvMap.clamp
          image_dir=image_dir
      %}
    </p>
    <h3>hue_shift</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">shifts the hue of the input (360 rolls over back to 0)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectHsvMap.hue_shift
          image_dir=image_dir
      %}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">input color</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectHsvMap.input
          image_dir=image_dir
      %}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">all attributes on/off</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectHsvMap.on
          image_dir=image_dir
      %}
    </p>
    <h3>saturation_contrast</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">modifies the contrast of the input's saturation (-1, 1)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectHsvMap.saturation_contrast
          image_dir=image_dir
      %}
    </p>
    <h3>saturation_factor</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">multiplies the saturation of the input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectHsvMap.saturation_factor
          image_dir=image_dir
      %}
    </p>
    <h3>saturation_shift</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">shifts the saturation of the input (-1, 1)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectHsvMap.saturation_shift
          image_dir=image_dir
      %}
    </p>
    <h3>value_contrast</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">modifies the contrast of the input's value (-1, 1)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectHsvMap.value_contrast
          image_dir=image_dir
      %}
    </p>
    <h3>value_factor</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">multiplies the value of the input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectHsvMap.value_factor
          image_dir=image_dir
      %}
    </p>
    <h3>value_shift</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">shifts the value of the input (-1, 1)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectHsvMap.value_shift
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>