---
title: ConstantScalarMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ConstantScalarMap
{%assign image_path=site.data.scene-classes.maps.ConstantScalarMap.images.path%}
{%if site.data.scene-classes.maps.ConstantScalarMap.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.ConstantScalarMap.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.ConstantScalarMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.ConstantScalarMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>scalar_value</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">constant scalar value</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ConstantScalarMap.images.attributes.scalar_value
          path=image_path
      %}
    </p>
  </p>
</details>
</div>