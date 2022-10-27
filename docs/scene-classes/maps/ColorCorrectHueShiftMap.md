---
title: ColorCorrectHueShiftMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectHueShiftMap
{%assign image_path=site.data.scene-classes.maps.ColorCorrectHueShiftMap.image_path%}
{%if site.data.scene-classes.maps.ColorCorrectHueShiftMap.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.ColorCorrectHueShiftMap.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.ColorCorrectHueShiftMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.ColorCorrectHueShiftMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>hue_shift</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">shifts the hue of the input (spectrum range is 0-1)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectHueShiftMap.attributes.hue_shift.images.
          path=image_path
      %}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">bind the input here</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectHueShiftMap.attributes.input.images.
          path=image_path
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">how much of the overall color correct to mix in</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectHueShiftMap.attributes.mix.images.
          path=image_path
      %}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables/disables all color correct operations</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ColorCorrectHueShiftMap.attributes.on.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>