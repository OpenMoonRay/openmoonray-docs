---
title: ProjectPlanarMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ProjectPlanarMap
{%-include overview.html data=site.data.scene-classes.maps.ProjectPlanarMap-%}
{%-include image-gallery.html images=site.data.scene-classes.maps.ProjectPlanarMap.gallery data=site.data.scene-classes.maps.ProjectPlanarMap-%}
{%-include see-also.html links=site.data.scene-classes.maps.ProjectPlanarMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>TRS_order</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | Scale Rot Trans = 0 (default)
          | Scale Trans Rot = 1
          | Rot Scale Trans = 2
          | Rot Trans Scale = 3
          | Trans Scale Rot = 4
          | Trans Rot Scale = 5
      <p class="scene-class-comments">Order in which to apply transformations</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ProjectPlanarMap.attributes.TRS_order.images data=site.data.scene-classes.maps.ProjectPlanarMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ProjectPlanarMap.attributes.TRS_order.links heading=4-%}
    </p>
    <h3>black_outside_projection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Toggles whether projections appear outside the 0-1 uv range of the projector</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ProjectPlanarMap.attributes.black_outside_projection.images data=site.data.scene-classes.maps.ProjectPlanarMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ProjectPlanarMap.attributes.black_outside_projection.links heading=4-%}
    </p>
    <h3>project_on_back_faces</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Toggles whether projections appear on back faces relative to projector</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ProjectPlanarMap.attributes.project_on_back_faces.images data=site.data.scene-classes.maps.ProjectPlanarMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ProjectPlanarMap.attributes.project_on_back_faces.links heading=4-%}
    </p>
    <h3>projection_matrix</h3>
    <p class="scene-class-type">
      <b>Mat4d</b>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">the transform to use for projection</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ProjectPlanarMap.attributes.projection_matrix.images data=site.data.scene-classes.maps.ProjectPlanarMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ProjectPlanarMap.attributes.projection_matrix.links heading=4-%}
    </p>
    <h3>projection_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | projector = 0 (default)
          | projection_matrix = 1
          | TRS = 2
      <p class="scene-class-comments">Source parameters to use for projection transform</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ProjectPlanarMap.attributes.projection_mode.images data=site.data.scene-classes.maps.ProjectPlanarMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ProjectPlanarMap.attributes.projection_mode.links heading=4-%}
    </p>
    <h3>projector</h3>
    <p class="scene-class-type">
      <b>Node</b>
      default: None
      <p class="scene-class-comments">the object whose transform to use for projection</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ProjectPlanarMap.attributes.projector.images data=site.data.scene-classes.maps.ProjectPlanarMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ProjectPlanarMap.attributes.projector.links heading=4-%}
    </p>
    <h3>rotate</h3>
    <p class="scene-class-type">
      <b>Vec3d</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Rotation of the projection transform</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ProjectPlanarMap.attributes.rotate.images data=site.data.scene-classes.maps.ProjectPlanarMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ProjectPlanarMap.attributes.rotate.links heading=4-%}
    </p>
    <h3>rotation_order</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | xyz = 0 (default)
          | xzy = 1
          | yxz = 2
          | yzx = 3
          | zxy = 4
          | zyx = 5
      <p class="scene-class-comments">Order in which to apply rotation transformations</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ProjectPlanarMap.attributes.rotation_order.images data=site.data.scene-classes.maps.ProjectPlanarMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ProjectPlanarMap.attributes.rotation_order.links heading=4-%}
    </p>
    <h3>scale</h3>
    <p class="scene-class-type">
      <b>Vec3d</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Scale of the projection transform</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ProjectPlanarMap.attributes.scale.images data=site.data.scene-classes.maps.ProjectPlanarMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ProjectPlanarMap.attributes.scale.links heading=4-%}
    </p>
    <h3>translate</h3>
    <p class="scene-class-type">
      <b>Vec3d</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Tranlation of the projection transform</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ProjectPlanarMap.attributes.translate.images data=site.data.scene-classes.maps.ProjectPlanarMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ProjectPlanarMap.attributes.translate.links heading=4-%}
    </p>
    <h3>use_reference_space</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">use reference space</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ProjectPlanarMap.attributes.use_reference_space.images data=site.data.scene-classes.maps.ProjectPlanarMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ProjectPlanarMap.attributes.use_reference_space.links heading=4-%}
    </p>
  </p>
</details>
</div>