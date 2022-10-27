---
title: LcToRgbMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# LcToRgbMap
{%assign image_path=site.data.scene-classes.maps.LcToRgbMap.images.path%}
{%if site.data.scene-classes.maps.LcToRgbMap.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.LcToRgbMap.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.LcToRgbMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.LcToRgbMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>input_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.LcToRgbMap.images.attributes.input_color
          path=image_path
      %}
    </p>
    <h3>target_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 100, 0, 0 ]
      <p class="scene-class-comments">Target color for remapping, in LAB colorspace</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.LcToRgbMap.images.attributes.target_color
          path=image_path
      %}
    </p>
  </p>
</details>
</div>