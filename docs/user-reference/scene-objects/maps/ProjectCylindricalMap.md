---
title: ProjectCylindricalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ProjectCylindricalMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.gallery data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>TRS_order</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;&nbsp;&nbsp;0 = Scale Rot Trans(default)<br>
          &nbsp;&nbsp;&nbsp;&nbsp;1 = Scale Trans Rot<br>
          &nbsp;&nbsp;&nbsp;&nbsp;2 = Rot Scale Trans<br>
          &nbsp;&nbsp;&nbsp;&nbsp;3 = Rot Trans Scale<br>
          &nbsp;&nbsp;&nbsp;&nbsp;4 = Trans Scale Rot<br>
          &nbsp;&nbsp;&nbsp;&nbsp;5 = Trans Rot Scale<br>
      <p class="scene-class-comments">Order in which to apply transformations</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.TRS_order.images data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.TRS_order.links heading=4-%}
    </p>
    <h3>black_outside_projection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Toggles whether projections appear outside the 0-1 uv range of the projector</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.black_outside_projection.images data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.black_outside_projection.links heading=4-%}
    </p>
    <h3>project_on_inward_surfaces</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Enables projection on surfaces with inward facing normals</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.project_on_inward_surfaces.images data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.project_on_inward_surfaces.links heading=4-%}
    </p>
    <h3>project_on_outward_surfaces</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Enables projection on surfaces with outward facing normals</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.project_on_outward_surfaces.images data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.project_on_outward_surfaces.links heading=4-%}
    </p>
    <h3>projection_matrix</h3>
    <p class="scene-class-type">
      <b>Mat4d</b>
      <br>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">the transform to use for projection</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.projection_matrix.images data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.projection_matrix.links heading=4-%}
    </p>
    <h3>projection_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;&nbsp;&nbsp;0 = projector(default)<br>
          &nbsp;&nbsp;&nbsp;&nbsp;1 = projection_matrix<br>
          &nbsp;&nbsp;&nbsp;&nbsp;2 = TRS<br>
      <p class="scene-class-comments">Source parameters to use for projection transform</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.projection_mode.images data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.projection_mode.links heading=4-%}
    </p>
    <h3>projector</h3>
    <p class="scene-class-type">
      <b>Node</b>
      <br>
      default: None
      <p class="scene-class-comments">the object whose transform to use for projection</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.projector.images data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.projector.links heading=4-%}
    </p>
    <h3>rotate</h3>
    <p class="scene-class-type">
      <b>Vec3d</b>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Rotation of the projection transform</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.rotate.images data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.rotate.links heading=4-%}
    </p>
    <h3>rotation_order</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;&nbsp;&nbsp;0 = xyz(default)<br>
          &nbsp;&nbsp;&nbsp;&nbsp;1 = xzy<br>
          &nbsp;&nbsp;&nbsp;&nbsp;2 = yxz<br>
          &nbsp;&nbsp;&nbsp;&nbsp;3 = yzx<br>
          &nbsp;&nbsp;&nbsp;&nbsp;4 = zxy<br>
          &nbsp;&nbsp;&nbsp;&nbsp;5 = zyx<br>
      <p class="scene-class-comments">Order in which to apply rotation transformations</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.rotation_order.images data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.rotation_order.links heading=4-%}
    </p>
    <h3>scale</h3>
    <p class="scene-class-type">
      <b>Vec3d</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Scale of the projection transform</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.scale.images data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.scale.links heading=4-%}
    </p>
    <h3>translate</h3>
    <p class="scene-class-type">
      <b>Vec3d</b>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Tranlation of the projection transform</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.translate.images data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.translate.links heading=4-%}
    </p>
    <h3>use_reference_space</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Use reference space</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.use_reference_space.images data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.use_reference_space.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}