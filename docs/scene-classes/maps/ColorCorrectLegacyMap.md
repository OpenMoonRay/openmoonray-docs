---
title: ColorCorrectLegacyMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectLegacyMap
---
{%assign image_dir=site.data.scene-classes.maps.ColorCorrectLegacyMap.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.maps.ColorCorrectLegacyMap.gallery
    image_dir=image_dir
%}
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>brightness</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectLegacyMap.brightness
          image_dir=image_dir
      %}
    </p>
    <h3>clamp</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectLegacyMap.clamp
          image_dir=image_dir
      %}
    </p>
    <h3>contrast</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectLegacyMap.contrast
          image_dir=image_dir
      %}
    </p>
    <h3>hue</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectLegacyMap.hue
          image_dir=image_dir
      %}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectLegacyMap.input
          image_dir=image_dir
      %}
    </p>
    <h3>invert</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectLegacyMap.invert
          image_dir=image_dir
      %}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectLegacyMap.mask
          image_dir=image_dir
      %}
    </p>
    <h3>monochrome</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | off = 0 (default)
          | luminance = 1
          | average = 2
          | minimum = 3
          | maximum = 4
          | red channel = 5
          | green channel = 6
          | blue channel = 7
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectLegacyMap.monochrome
          image_dir=image_dir
      %}
    </p>
    <h3>multiplier</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectLegacyMap.multiplier
          image_dir=image_dir
      %}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectLegacyMap.on
          image_dir=image_dir
      %}
    </p>
    <h3>saturation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectLegacyMap.saturation
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>