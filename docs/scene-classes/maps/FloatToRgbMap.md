---
title: FloatToRgbMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# FloatToRgbMap
{%assign image_path=site.data.scene-classes.maps.FloatToRgbMap.image_path%}
{%if site.data.scene-classes.maps.FloatToRgbMap.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.FloatToRgbMap.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.FloatToRgbMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.FloatToRgbMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.url}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>B</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.FloatToRgbMap.attributes.B.images.
          path=image_path
      %}
    </p>
    <h3>G</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.FloatToRgbMap.attributes.G.images.
          path=image_path
      %}
    </p>
    <h3>R</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.FloatToRgbMap.attributes.R.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>