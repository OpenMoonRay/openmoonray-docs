---
title: ColorCorrectLegacyMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectLegacyMap
{%assign image_path=site.data.scene-classes.maps.ColorCorrectLegacyMap.image_path%}
{%if site.data.scene-classes.maps.ColorCorrectLegacyMap.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.ColorCorrectLegacyMap.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.ColorCorrectLegacyMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.ColorCorrectLegacyMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>brightness</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectLegacyMapattributes.brightness.images.
          path=image_path
      %}
    </p>
    <h3>clamp</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectLegacyMapattributes.clamp.images.
          path=image_path
      %}
    </p>
    <h3>contrast</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectLegacyMapattributes.contrast.images.
          path=image_path
      %}
    </p>
    <h3>hue</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectLegacyMapattributes.hue.images.
          path=image_path
      %}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectLegacyMapattributes.input.images.
          path=image_path
      %}
    </p>
    <h3>invert</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectLegacyMapattributes.invert.images.
          path=image_path
      %}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectLegacyMapattributes.mask.images.
          path=image_path
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
          images=site.data.scene-classes.maps.ColorCorrectLegacyMapattributes.monochrome.images.
          path=image_path
      %}
    </p>
    <h3>multiplier</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectLegacyMapattributes.multiplier.images.
          path=image_path
      %}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectLegacyMapattributes.on.images.
          path=image_path
      %}
    </p>
    <h3>saturation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectLegacyMapattributes.saturation.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>