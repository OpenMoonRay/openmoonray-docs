---
title: CookieLightFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# CookieLightFilter
{%assign image_path=site.data.scene-classes.light-filters.CookieLightFilter.images.path%}
{%if site.data.scene-classes.light-filters.CookieLightFilter.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.light-filters.CookieLightFilter.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.light-filters.CookieLightFilter.links-%}
---
## See Also
{%for link in site.data.scene-classes.light-filters.CookieLightFilter.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Properties attributes</summary>
  <p>
    <h3>blur_far_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.CookieLightFilter.images.attributes.blur_far_distance
          path=image_path
      %}
    </p>
    <h3>blur_far_value</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.CookieLightFilter.images.attributes.blur_far_value
          path=image_path
      %}
    </p>
    <h3>blur_mid_value</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.CookieLightFilter.images.attributes.blur_mid_value
          path=image_path
      %}
    </p>
    <h3>blur_midpoint</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.CookieLightFilter.images.attributes.blur_midpoint
          path=image_path
      %}
    </p>
    <h3>blur_near_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.CookieLightFilter.images.attributes.blur_near_distance
          path=image_path
      %}
    </p>
    <h3>blur_near_value</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.CookieLightFilter.images.attributes.blur_near_value
          path=image_path
      %}
    </p>
    <h3>blur_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | gaussian = 0 (default)
          | circular = 1
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.CookieLightFilter.images.attributes.blur_type
          path=image_path
      %}
    </p>
    <h3>density</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.CookieLightFilter.images.attributes.density
          path=image_path
      %}
    </p>
    <h3>invert</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.CookieLightFilter.images.attributes.invert
          path=image_path
      %}
    </p>
    <h3>outside_projection</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | black = 0 (default)
          | white = 1
          | default = 2
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.CookieLightFilter.images.attributes.outside_projection
          path=image_path
      %}
    </p>
    <h3>projector</h3>
    <p class="scene-class-type">
      <b>Camera</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.CookieLightFilter.images.attributes.projector
          path=image_path
      %}
    </p>
    <h3>texture_map</h3>
    <p class="scene-class-type">
      <b>Map</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.CookieLightFilter.images.attributes.texture_map
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.CookieLightFilter.images.attributes.node_xform
          path=image_path
      %}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.CookieLightFilter.images.attributes.on
          path=image_path
      %}
    </p>
    <h3>projector_film_width_aperture</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 24.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.CookieLightFilter.images.attributes.projector_film_width_aperture
          path=image_path
      %}
    </p>
    <h3>projector_focal</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 30.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.CookieLightFilter.images.attributes.projector_focal
          path=image_path
      %}
    </p>
    <h3>projector_pixel_aspect_ratio</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.CookieLightFilter.images.attributes.projector_pixel_aspect_ratio
          path=image_path
      %}
    </p>
    <h3>projector_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | perspective = 0 (default)
          | orthographic = 1
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.CookieLightFilter.images.attributes.projector_type
          path=image_path
      %}
    </p>
  </p>
</details>
</div>