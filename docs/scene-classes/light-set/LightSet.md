---
title: LightSet

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# LightSet
{%assign image_path=site.data.scene-classes.light-set.LightSet.image_path%}
{%if site.data.scene-classes.light-set.LightSet.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.light-set.LightSet.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.light-set.LightSet.links-%}
---
## See Also
{%for link in site.data.scene-classes.light-set.LightSet.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>lights</h3>
    <p class="scene-class-type">
      <b>Light Vector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-set.LightSetattributes.lights.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>