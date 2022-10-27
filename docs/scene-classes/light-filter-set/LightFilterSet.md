---
title: LightFilterSet

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# LightFilterSet
{%assign image_path=site.data.scene-classes.light-filter-set.LightFilterSet.image_path%}
{%if site.data.scene-classes.light-filter-set.LightFilterSet.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.light-filter-set.LightFilterSet.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.light-filter-set.LightFilterSet.links-%}
---
## See Also
{%for link in site.data.scene-classes.light-filter-set.LightFilterSet.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.url}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>lightfilters</h3>
    <p class="scene-class-type">
      <b>Lightfilter Vector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filter-set.LightFilterSet.attributes.lightfilters.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>