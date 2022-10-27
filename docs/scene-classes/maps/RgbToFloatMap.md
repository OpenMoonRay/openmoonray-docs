---
title: RgbToFloatMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RgbToFloatMap
{%assign image_path=site.data.scene-classes.maps.RgbToFloatMap.image_path%}
{%if site.data.scene-classes.maps.RgbToFloatMap.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.RgbToFloatMap.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.RgbToFloatMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.RgbToFloatMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RgbToFloatMap.attributes.input.images.
          path=image_path
      %}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | r = 0
          | g = 1
          | b = 2
          | min = 3
          | max = 4
          | average = 5 (default)
          | sum = 6
          | luminance = 7
      <p class="scene-class-comments">specify the method to convert RGB Color to float</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RgbToFloatMap.attributes.mode.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>