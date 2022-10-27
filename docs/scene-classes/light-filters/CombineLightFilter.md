---
title: CombineLightFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# CombineLightFilter
{%assign image_path=site.data.scene-classes.light-filters.CombineLightFilter.image_path%}
{%if site.data.scene-classes.light-filters.CombineLightFilter.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.light-filters.CombineLightFilter.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.light-filters.CombineLightFilter.links-%}
---
## See Also
{%for link in site.data.scene-classes.light-filters.CombineLightFilter.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>light_filters</h3>
    <p class="scene-class-type">
      <b>Object Vector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.CombineLightFilterattributes.light_filters.images.
          path=image_path
      %}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | multiply = 0 (default)
          | min = 1
          | max = 2
          | add = 3
          | subtract = 4
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.CombineLightFilterattributes.mode.images.
          path=image_path
      %}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.CombineLightFilterattributes.on.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>