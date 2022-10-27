---
title: ProjectCameraMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ProjectCameraMap
{%assign image_path=site.data.scene-classes.maps.ProjectCameraMap.image_path%}
{%if site.data.scene-classes.maps.ProjectCameraMap.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.ProjectCameraMap.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.ProjectCameraMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.ProjectCameraMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.url}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>black_outside_projection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Toggles whether projections appear outside the 0-1 uv range of the projector</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCameraMap.attributes.black_outside_projection.images.
          path=image_path
      %}
    </p>
    <h3>project_on_back_faces</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Toggles whether camera projections appear on back faces.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCameraMap.attributes.project_on_back_faces.images.
          path=image_path
      %}
    </p>
    <h3>projector</h3>
    <p class="scene-class-type">
      <b>Camera</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCameraMap.attributes.projector.images.
          path=image_path
      %}
    </p>
    <h3>use_custom_window_coordinates</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">used to apply non-uniform scaling to projection</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCameraMap.attributes.use_custom_window_coordinates.images.
          path=image_path
      %}
    </p>
    <h3>use_reference_space</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">use reference space</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCameraMap.attributes.use_reference_space.images.
          path=image_path
      %}
    </p>
    <h3>window_x_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">maximum projected x coordinate</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCameraMap.attributes.window_x_max.images.
          path=image_path
      %}
    </p>
    <h3>window_x_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: -1.0
      <p class="scene-class-comments">minimum projected x coordinate</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCameraMap.attributes.window_x_min.images.
          path=image_path
      %}
    </p>
    <h3>window_y_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">maximum projected y coordinate</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCameraMap.attributes.window_y_max.images.
          path=image_path
      %}
    </p>
    <h3>window_y_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: -1.0
      <p class="scene-class-comments">minimum projected y coordinate</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCameraMap.attributes.window_y_min.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>