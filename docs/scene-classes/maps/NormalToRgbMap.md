---
title: NormalToRgbMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# NormalToRgbMap
{%assign image_path=site.data.scene-classes.maps.NormalToRgbMap.images.path%}
{%if site.data.scene-classes.maps.NormalToRgbMap.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.NormalToRgbMap.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.NormalToRgbMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.NormalToRgbMap.links-%}
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
      <b>33554432</b>
      default: None
      <p class="scene-class-comments">Input normal map to convert to a color</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.NormalToRgbMap.images.attributes.input
          path=image_path
      %}
    </p>
  </p>
</details>
</div>