---
title: ProjectCameraMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ProjectCameraMap
---
{%assign image_dir=site.data.scene-classes.maps.ProjectCameraMap.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.maps.ProjectCameraMap.gallery
    image_dir=image_dir
%}
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>black_outside_projection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Toggles whether projections appear outside the 0-1 uv range of the projector</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCameraMap.black_outside_projection
          image_dir=image_dir
      %}
    </p>
    <h3>project_on_back_faces</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Toggles whether camera projections appear on back faces.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCameraMap.project_on_back_faces
          image_dir=image_dir
      %}
    </p>
    <h3>projector</h3>
    <p class="scene-class-type">
      <b>Camera</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCameraMap.projector
          image_dir=image_dir
      %}
    </p>
    <h3>use_custom_window_coordinates</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">used to apply non-uniform scaling to projection</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCameraMap.use_custom_window_coordinates
          image_dir=image_dir
      %}
    </p>
    <h3>use_reference_space</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">use reference space</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCameraMap.use_reference_space
          image_dir=image_dir
      %}
    </p>
    <h3>window_x_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">maximum projected x coordinate</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCameraMap.window_x_max
          image_dir=image_dir
      %}
    </p>
    <h3>window_x_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: -1.0
      <p class="scene-class-comments">minimum projected x coordinate</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCameraMap.window_x_min
          image_dir=image_dir
      %}
    </p>
    <h3>window_y_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">maximum projected y coordinate</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCameraMap.window_y_max
          image_dir=image_dir
      %}
    </p>
    <h3>window_y_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: -1.0
      <p class="scene-class-comments">minimum projected y coordinate</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectCameraMap.window_y_min
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>