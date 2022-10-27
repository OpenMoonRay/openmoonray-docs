---
title: RgbToNormalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RgbToNormalMap
{%assign image_path=site.data.scene-classes.normal-maps.RgbToNormalMap.image_path%}
{%if site.data.scene-classes.normal-maps.RgbToNormalMap.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.normal-maps.RgbToNormalMap.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.normal-maps.RgbToNormalMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.normal-maps.RgbToNormalMap.links-%}
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
      <p class="scene-class-comments">Input color to convert to a normal map</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.RgbToNormalMap.attributes.input.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>