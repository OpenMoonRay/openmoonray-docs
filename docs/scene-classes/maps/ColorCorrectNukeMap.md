---
title: ColorCorrectNukeMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectNukeMap
---
{%assign image_dir=site.data.scene-classes.maps.ColorCorrectNukeMap.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.maps.ColorCorrectNukeMap.gallery
    image_dir=image_dir
%}
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>TMI</h3>
    <p class="scene-class-type">
      <b>Vec3f</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">T = Temperature where positive values push towards blue and negative towards red.   M = Magenta where positive values push towards magenta and negative towards green.  I = Intensity where negative values remove and positive values add energy </p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectNukeMap.TMI
          image_dir=image_dir
      %}
    </p>
    <h3>TMI_control_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectNukeMap.TMI_control_enabled
          image_dir=image_dir
      %}
    </p>
    <h3>contrast</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectNukeMap.contrast
          image_dir=image_dir
      %}
    </p>
    <h3>contrast_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectNukeMap.contrast_enabled
          image_dir=image_dir
      %}
    </p>
    <h3>gain</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectNukeMap.gain
          image_dir=image_dir
      %}
    </p>
    <h3>gain_offset_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectNukeMap.gain_offset_enabled
          image_dir=image_dir
      %}
    </p>
    <h3>gamma</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectNukeMap.gamma
          image_dir=image_dir
      %}
    </p>
    <h3>gamma_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectNukeMap.gamma_enabled
          image_dir=image_dir
      %}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectNukeMap.input
          image_dir=image_dir
      %}
    </p>
    <h3>offset</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectNukeMap.offset
          image_dir=image_dir
      %}
    </p>
    <h3>saturation</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectNukeMap.saturation
          image_dir=image_dir
      %}
    </p>
    <h3>saturation_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectNukeMap.saturation_enabled
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>