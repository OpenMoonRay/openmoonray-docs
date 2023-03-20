---
title: ProjectCameraMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ProjectCameraMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.ProjectCameraMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCameraMap.gallery data=site.data.user-reference.scene-objects.maps.ProjectCameraMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCameraMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>black_outside_projection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Toggles whether projections appear outside the 0-1 uv range of the projector</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCameraMap.attributes.black_outside_projection.images data=site.data.user-reference.scene-objects.maps.ProjectCameraMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCameraMap.attributes.black_outside_projection.links heading=4-%}
    </p>
    <h3>project_on_back_faces</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Toggles whether camera projections appear on back faces.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCameraMap.attributes.project_on_back_faces.images data=site.data.user-reference.scene-objects.maps.ProjectCameraMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCameraMap.attributes.project_on_back_faces.links heading=4-%}
    </p>
    <h3>projector</h3>
    <p class="scene-class-type">
      <b>Camera</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCameraMap.attributes.projector.images data=site.data.user-reference.scene-objects.maps.ProjectCameraMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCameraMap.attributes.projector.links heading=4-%}
    </p>
    <h3>use_custom_window_coordinates</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Used to apply non-uniform scaling to projection</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCameraMap.attributes.use_custom_window_coordinates.images data=site.data.user-reference.scene-objects.maps.ProjectCameraMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCameraMap.attributes.use_custom_window_coordinates.links heading=4-%}
    </p>
    <h3>use_reference_space</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Use reference space</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCameraMap.attributes.use_reference_space.images data=site.data.user-reference.scene-objects.maps.ProjectCameraMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCameraMap.attributes.use_reference_space.links heading=4-%}
    </p>
    <h3>window_x_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Maximum projected x coordinate</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCameraMap.attributes.window_x_max.images data=site.data.user-reference.scene-objects.maps.ProjectCameraMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCameraMap.attributes.window_x_max.links heading=4-%}
    </p>
    <h3>window_x_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: -1.0
      <p class="scene-class-comments">Minimum projected x coordinate</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCameraMap.attributes.window_x_min.images data=site.data.user-reference.scene-objects.maps.ProjectCameraMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCameraMap.attributes.window_x_min.links heading=4-%}
    </p>
    <h3>window_y_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Maximum projected y coordinate</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCameraMap.attributes.window_y_max.images data=site.data.user-reference.scene-objects.maps.ProjectCameraMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCameraMap.attributes.window_y_max.links heading=4-%}
    </p>
    <h3>window_y_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: -1.0
      <p class="scene-class-comments">Minimum projected y coordinate</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCameraMap.attributes.window_y_min.images data=site.data.user-reference.scene-objects.maps.ProjectCameraMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCameraMap.attributes.window_y_min.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.ProjectCameraMap-%}