---
title: ProjectTriplanarUdimMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ProjectTriplanarUdimMap
{%include image-gallery.html images=site.data.scene-classes.maps.ProjectTriplanarUdimMap.gallery data=site.data.scene-classes.maps.ProjectTriplanarUdimMap-%}
{%include see-also.html links=site.data.scene-classes.maps.ProjectTriplanarUdimMap.links-%}
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
      {%include image-gallery.html images=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.TRS_order.images data=site.data.scene-classes.maps.ProjectTriplanarUdimMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.TRS_order.links-%}
    </p>
    <h3>projection_matrix</h3>
    <p class="scene-class-type">
      <b>Mat4d</b>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">the transform to use for projection</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.projection_matrix.images data=site.data.scene-classes.maps.ProjectTriplanarUdimMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.projection_matrix.links-%}
    </p>
    <h3>projection_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | projector = 0 (default)
          | projection_matrix = 1
          | TRS = 2
      <p class="scene-class-comments">Source parameters to use for projection transform</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.projection_mode.images data=site.data.scene-classes.maps.ProjectTriplanarUdimMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.projection_mode.links-%}
    </p>
    <h3>projector</h3>
    <p class="scene-class-type">
      <b>Node</b>
      default: None
      <p class="scene-class-comments">the object whose transform to use for projection</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.projector.images data=site.data.scene-classes.maps.ProjectTriplanarUdimMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.projector.links-%}
    </p>
    <h3>rotate</h3>
    <p class="scene-class-type">
      <b>Vec3d</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Rotation of the projection transform</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.rotate.images data=site.data.scene-classes.maps.ProjectTriplanarUdimMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.rotate.links-%}
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
      {%include image-gallery.html images=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.rotation_order.images data=site.data.scene-classes.maps.ProjectTriplanarUdimMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.rotation_order.links-%}
    </p>
    <h3>scale</h3>
    <p class="scene-class-type">
      <b>Vec3d</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Scale of the projection transform</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.scale.images data=site.data.scene-classes.maps.ProjectTriplanarUdimMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.scale.links-%}
    </p>
    <h3>translate</h3>
    <p class="scene-class-type">
      <b>Vec3d</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Tranlation of the projection transform</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.translate.images data=site.data.scene-classes.maps.ProjectTriplanarUdimMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.translate.links-%}
    </p>
    <h3>use_correct_uv</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">use correct uv orientation</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.use_correct_uv.images data=site.data.scene-classes.maps.ProjectTriplanarUdimMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.use_correct_uv.links-%}
    </p>
    <h3>use_reference_space</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">use reference space</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.use_reference_space.images data=site.data.scene-classes.maps.ProjectTriplanarUdimMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.use_reference_space.links-%}
    </p>
    <h3>x_offset</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0, 0 ]
      <p class="scene-class-comments">2D offset for x projected map</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.x_offset.images data=site.data.scene-classes.maps.ProjectTriplanarUdimMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.x_offset.links-%}
    </p>
    <h3>x_rotation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">2D rotation for x projected map</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.x_rotation.images data=site.data.scene-classes.maps.ProjectTriplanarUdimMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.x_rotation.links-%}
    </p>
    <h3>x_rotation_center</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0.5, 0.5 ]
      <p class="scene-class-comments">2D rotation center for x projected map</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.x_rotation_center.images data=site.data.scene-classes.maps.ProjectTriplanarUdimMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.x_rotation_center.links-%}
    </p>
    <h3>x_scale</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 1, 1 ]
      <p class="scene-class-comments">2D scale for x projected map</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.x_scale.images data=site.data.scene-classes.maps.ProjectTriplanarUdimMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.x_scale.links-%}
    </p>
    <h3>y_offset</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0, 0 ]
      <p class="scene-class-comments">2D offset for y projected map</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.y_offset.images data=site.data.scene-classes.maps.ProjectTriplanarUdimMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.y_offset.links-%}
    </p>
    <h3>y_rotation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">2D rotation for y projected map</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.y_rotation.images data=site.data.scene-classes.maps.ProjectTriplanarUdimMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.y_rotation.links-%}
    </p>
    <h3>y_rotation_center</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0.5, 0.5 ]
      <p class="scene-class-comments">2D rotation center for y projected map</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.y_rotation_center.images data=site.data.scene-classes.maps.ProjectTriplanarUdimMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.y_rotation_center.links-%}
    </p>
    <h3>y_scale</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 1, 1 ]
      <p class="scene-class-comments">2D scale for y projected map</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.y_scale.images data=site.data.scene-classes.maps.ProjectTriplanarUdimMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.y_scale.links-%}
    </p>
    <h3>z_offset</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0, 0 ]
      <p class="scene-class-comments">2D offset for z projected map</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.z_offset.images data=site.data.scene-classes.maps.ProjectTriplanarUdimMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.z_offset.links-%}
    </p>
    <h3>z_rotation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">2D rotation for z projected map</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.z_rotation.images data=site.data.scene-classes.maps.ProjectTriplanarUdimMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.z_rotation.links-%}
    </p>
    <h3>z_rotation_center</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0.5, 0.5 ]
      <p class="scene-class-comments">2D rotation center for z projected map</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.z_rotation_center.images data=site.data.scene-classes.maps.ProjectTriplanarUdimMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.z_rotation_center.links-%}
    </p>
    <h3>z_scale</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 1, 1 ]
      <p class="scene-class-comments">2D scale for z projected map</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.z_scale.images data=site.data.scene-classes.maps.ProjectTriplanarUdimMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ProjectTriplanarUdimMap.attributes.z_scale.links-%}
    </p>
  </p>
</details>
</div>