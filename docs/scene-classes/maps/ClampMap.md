---
title: ClampMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ClampMap
{%assign image_path=site.data.scene-classes.maps.ClampMap.image_path%}
{%if site.data.scene-classes.maps.ClampMap.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.ClampMap.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.ClampMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.ClampMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.url}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>clamp</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables/disables clamping of the output values.  This useful prevent out-of-range values when expanding the input values.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ClampMap.attributes.clamp.images.
          path=image_path
      %}
    </p>
    <h3>clamp_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">the maximum value output by this map when 'clamp' is enabled</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ClampMap.attributes.clamp_max.images.
          path=image_path
      %}
    </p>
    <h3>clamp_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">the minimum value output by this map when 'clamp' is enabled</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ClampMap.attributes.clamp_min.images.
          path=image_path
      %}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the input values to be remapped</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ClampMap.attributes.input.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>