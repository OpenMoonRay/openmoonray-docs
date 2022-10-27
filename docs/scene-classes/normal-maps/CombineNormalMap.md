---
title: CombineNormalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# CombineNormalMap
{%assign image_path=site.data.scene-classes.normal-maps.CombineNormalMap.image_path%}
{%if site.data.scene-classes.normal-maps.CombineNormalMap.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.normal-maps.CombineNormalMap.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.normal-maps.CombineNormalMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.normal-maps.CombineNormalMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Normal attributes</summary>
  <p>
    <h3>input_1</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-comments">First normal map to combine; usually a base map</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.CombineNormalMapattributes.input_1.images.
          path=image_path
      %}
    </p>
    <h3>input_2</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-comments">Second normal map to combine; usually a base map</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.CombineNormalMapattributes.input_2.images.
          path=image_path
      %}
    </p>
    <h3>normal_map_1_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Amount of normal map 1 to blend in</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.CombineNormalMapattributes.normal_map_1_dial.images.
          path=image_path
      %}
    </p>
    <h3>normal_map_2_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Amount of normal map 2 to blend in</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.CombineNormalMapattributes.normal_map_2_dial.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>