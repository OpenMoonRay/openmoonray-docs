---
title: LayerMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# LayerMap
{%assign image_path=site.data.scene-classes.maps.LayerMap.images.path%}
{%if site.data.scene-classes.maps.LayerMap.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.LayerMap.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.LayerMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.LayerMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>input_A</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.LayerMap.images.attributes.input_A
          path=image_path
      %}
    </p>
    <h3>input_B</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.LayerMap.images.attributes.input_B
          path=image_path
      %}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.LayerMap.images.attributes.mask
          path=image_path
      %}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | off = 0
          | over = 1 (default)
          | add = 2
          | subtract = 3
          | multiply = 4
          | screen = 5
          | overlay = 6
          | overlay contrast = 7
          | darken = 8
          | lighten = 9
          | color dodge = 10
          | color burn = 11
          | hard light = 12
          | soft light = 13
          | difference = 14
          | exclusion = 15
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.LayerMap.images.attributes.mode
          path=image_path
      %}
    </p>
  </p>
</details>
</div>