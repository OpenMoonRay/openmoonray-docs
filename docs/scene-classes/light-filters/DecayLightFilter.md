---
title: DecayLightFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DecayLightFilter
{%assign image_path=site.data.scene-classes.light-filters.DecayLightFilter.image_path%}
{%if site.data.scene-classes.light-filters.DecayLightFilter.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.light-filters.DecayLightFilter.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.light-filters.DecayLightFilter.links-%}
---
## See Also
{%for link in site.data.scene-classes.light-filters.DecayLightFilter.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Properties attributes</summary>
  <p>
    <h3>falloff_far</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.DecayLightFilterattributes.falloff_far.images.
          path=image_path
      %}
    </p>
    <h3>falloff_near</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.DecayLightFilterattributes.falloff_near.images.
          path=image_path
      %}
    </p>
    <h3>far_end</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.DecayLightFilterattributes.far_end.images.
          path=image_path
      %}
    </p>
    <h3>far_start</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.DecayLightFilterattributes.far_start.images.
          path=image_path
      %}
    </p>
    <h3>near_end</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.DecayLightFilterattributes.near_end.images.
          path=image_path
      %}
    </p>
    <h3>near_start</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.DecayLightFilterattributes.near_start.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.DecayLightFilterattributes.on.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>