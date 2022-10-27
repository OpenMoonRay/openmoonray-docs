---
title: WireframeMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# WireframeMap
{%assign image_path=site.data.scene-classes.maps.WireframeMap.image_path%}
{%if site.data.scene-classes.maps.WireframeMap.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.WireframeMap.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.WireframeMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.WireframeMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.url}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>fill_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.WireframeMap.attributes.fill_color.images.
          path=image_path
      %}
    </p>
    <h3>line_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.WireframeMap.attributes.line_color.images.
          path=image_path
      %}
    </p>
    <h3>line_width</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.WireframeMap.attributes.line_width.images.
          path=image_path
      %}
    </p>
    <h3>raster</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.WireframeMap.attributes.raster.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>