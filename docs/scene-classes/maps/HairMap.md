---
title: HairMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# HairMap
{%assign image_path=site.data.scene-classes.maps.HairMap.image_path%}
{%if site.data.scene-classes.maps.HairMap.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.HairMap.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.HairMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.HairMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.url}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>base_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.HairMap.attributes.base_color.images.
          path=image_path
      %}
    </p>
    <h3>bias</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.5
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.HairMap.attributes.bias.images.
          path=image_path
      %}
    </p>
    <h3>column_uv_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bound image map must have a HairColumnUvMap bound to its input texture coordinates.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.HairMap.attributes.column_uv_color.images.
          path=image_path
      %}
    </p>
    <h3>gain</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.5
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.HairMap.attributes.gain.images.
          path=image_path
      %}
    </p>
    <h3>tip_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.HairMap.attributes.tip_color.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>