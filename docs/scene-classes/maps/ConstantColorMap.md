---
title: ConstantColorMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ConstantColorMap
{%assign image_path=site.data.scene-classes.maps.ConstantColorMap.images.path%}
{%if site.data.scene-classes.maps.ConstantColorMap.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.ConstantColorMap.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.ConstantColorMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.ConstantColorMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>color_value</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">constant color value</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ConstantColorMap.images.attributes.color_value
          path=image_path
      %}
    </p>
  </p>
</details>
</div>