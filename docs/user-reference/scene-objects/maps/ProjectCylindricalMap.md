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
          &nbsp;&nbsp;0 = &ldquo;Scale Rot Trans&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;Scale Trans Rot&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;Rot Scale Trans&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;Rot Trans Scale&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;Trans Scale Rot&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;Trans Rot Scale&rdquo;<br>
      <p class="scene-class-comments">Order in which to apply transformations when 'projection_mode' is set to 'TRS'</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.TRS_order.images data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.TRS_order.videos data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.TRS_order.links heading=4-%}
    </p>
    <h3>black_outside_projection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Toggles whether projections appear outside the 0-1 uv range of the projector</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.black_outside_projection.images data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.black_outside_projection.videos data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.black_outside_projection.links heading=4-%}
    </p>
    <h3>project_on_inward_surfaces</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Enables projection on surfaces with inward facing normals</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.project_on_inward_surfaces.images data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.project_on_inward_surfaces.videos data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.project_on_inward_surfaces.links heading=4-%}
    </p>
    <h3>project_on_outward_surfaces</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Enables projection on surfaces with outward facing normals</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.project_on_outward_surfaces.images data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.project_on_outward_surfaces.videos data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.project_on_outward_surfaces.links heading=4-%}
    </p>
    <h3>projection_matrix</h3>
    <p class="scene-class-type">
      <b>Mat4d</b>
      <br>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">The transform to use for projection when 'projection_mode' is set to 'projection_matrix'</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.projection_matrix.images data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.projection_matrix.videos data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.projection_matrix.links heading=4-%}
    </p>
    <h3>projection_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;projector&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;projection_matrix&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;TRS&rdquo;<br>
      <p class="scene-class-comments">Source parameters to use for projection transform</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.projection_mode.images data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.projection_mode.videos data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.projection_mode.links heading=4-%}
    </p>
    <h3>projector</h3>
    <p class="scene-class-type">
      <b>Node</b>
      <br>
      default: None
      <p class="scene-class-comments">The object whose transform to use for projection when 'projection_mode' is set to 'projector'</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.projector.images data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.projector.videos data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.projector.links heading=4-%}
    </p>
    <h3>rotate</h3>
    <p class="scene-class-type">
      <b>Vec3d</b>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Rotation of the projection transform when 'projection_mode' is set to 'TRS'</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.rotate.images data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.rotate.videos data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.rotate.links heading=4-%}
    </p>
    <h3>rotation_order</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;xyz&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;xzy&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;yxz&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;yzx&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;zxy&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;zyx&rdquo;<br>
      <p class="scene-class-comments">Order in which to apply rotation transformations when 'projection_mode' is set to 'TRS'</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.rotation_order.images data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.rotation_order.videos data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.rotation_order.links heading=4-%}
    </p>
    <h3>scale</h3>
    <p class="scene-class-type">
      <b>Vec3d</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Scale of the projection transform when 'projection_mode' is set to 'TRS'</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.scale.images data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.scale.videos data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.scale.links heading=4-%}
    </p>
    <h3>translate</h3>
    <p class="scene-class-type">
      <b>Vec3d</b>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Translation of the projection transform when 'projection_mode' is set to 'TRS'</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.translate.images data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.translate.videos data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.translate.links heading=4-%}
    </p>
    <h3>use_reference_space</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Use reference space</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.use_reference_space.images data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.use_reference_space.videos data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap.attributes.use_reference_space.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.ProjectCylindricalMap-%}