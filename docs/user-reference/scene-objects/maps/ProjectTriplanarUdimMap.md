---
title: ProjectTriplanarUdimMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ProjectTriplanarUdimMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.gallery data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.links-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.TRS_order.images data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.TRS_order.videos data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.TRS_order.links heading=4-%}
    </p>
    <h3>projection_matrix</h3>
    <p class="scene-class-type">
      <b>Mat4d</b>
      <br>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">The transform to use for projection when 'projection_mode' is set to 'projection_matrix'</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.projection_matrix.images data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.projection_matrix.videos data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.projection_matrix.links heading=4-%}
    </p>
    <h3>projection_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;projector&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;projection_matrix&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;TRS&rdquo;<br>
      <p class="scene-class-comments">Source parameters to use for projection transform</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.projection_mode.images data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.projection_mode.videos data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.projection_mode.links heading=4-%}
    </p>
    <h3>projector</h3>
    <p class="scene-class-type">
      <b>Node</b>
      <br>
      default: None
      <p class="scene-class-comments">The object whose transform to use for projection when 'projection_mode' is set to 'projector'</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.projector.images data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.projector.videos data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.projector.links heading=4-%}
    </p>
    <h3>rotate</h3>
    <p class="scene-class-type">
      <b>Vec3d</b>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Rotation of the projection transform when 'projection_mode' is set to 'TRS'</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.rotate.images data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.rotate.videos data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.rotate.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.rotation_order.images data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.rotation_order.videos data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.rotation_order.links heading=4-%}
    </p>
    <h3>scale</h3>
    <p class="scene-class-type">
      <b>Vec3d</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Scale of the projection transform when 'projection_mode' is set to 'TRS'</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.scale.images data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.scale.videos data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.scale.links heading=4-%}
    </p>
    <h3>translate</h3>
    <p class="scene-class-type">
      <b>Vec3d</b>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Tranlation of the projection transform when 'projection_mode' is set to 'TRS'</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.translate.images data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.translate.videos data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.translate.links heading=4-%}
    </p>
    <h3>use_correct_uv</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">use correct uv orientation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.use_correct_uv.images data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.use_correct_uv.videos data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.use_correct_uv.links heading=4-%}
    </p>
    <h3>use_reference_space</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">use reference space</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.use_reference_space.images data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.use_reference_space.videos data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.use_reference_space.links heading=4-%}
    </p>
    <h3>x_offset</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      <br>
      default: [ 0, 0 ]
      <p class="scene-class-comments">2D offset for x projected map</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.x_offset.images data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.x_offset.videos data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.x_offset.links heading=4-%}
    </p>
    <h3>x_rotation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">2D rotation for x projected map</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.x_rotation.images data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.x_rotation.videos data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.x_rotation.links heading=4-%}
    </p>
    <h3>x_rotation_center</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      <br>
      default: [ 0.5, 0.5 ]
      <p class="scene-class-comments">2D rotation center for x projected map</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.x_rotation_center.images data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.x_rotation_center.videos data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.x_rotation_center.links heading=4-%}
    </p>
    <h3>x_scale</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      <br>
      default: [ 1, 1 ]
      <p class="scene-class-comments">2D scale for x projected map</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.x_scale.images data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.x_scale.videos data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.x_scale.links heading=4-%}
    </p>
    <h3>y_offset</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      <br>
      default: [ 0, 0 ]
      <p class="scene-class-comments">2D offset for y projected map</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.y_offset.images data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.y_offset.videos data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.y_offset.links heading=4-%}
    </p>
    <h3>y_rotation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">2D rotation for y projected map</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.y_rotation.images data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.y_rotation.videos data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.y_rotation.links heading=4-%}
    </p>
    <h3>y_rotation_center</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      <br>
      default: [ 0.5, 0.5 ]
      <p class="scene-class-comments">2D rotation center for y projected map</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.y_rotation_center.images data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.y_rotation_center.videos data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.y_rotation_center.links heading=4-%}
    </p>
    <h3>y_scale</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      <br>
      default: [ 1, 1 ]
      <p class="scene-class-comments">2D scale for y projected map</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.y_scale.images data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.y_scale.videos data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.y_scale.links heading=4-%}
    </p>
    <h3>z_offset</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      <br>
      default: [ 0, 0 ]
      <p class="scene-class-comments">2D offset for z projected map</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.z_offset.images data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.z_offset.videos data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.z_offset.links heading=4-%}
    </p>
    <h3>z_rotation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">2D rotation for z projected map</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.z_rotation.images data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.z_rotation.videos data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.z_rotation.links heading=4-%}
    </p>
    <h3>z_rotation_center</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      <br>
      default: [ 0.5, 0.5 ]
      <p class="scene-class-comments">2D rotation center for z projected map</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.z_rotation_center.images data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.z_rotation_center.videos data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.z_rotation_center.links heading=4-%}
    </p>
    <h3>z_scale</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      <br>
      default: [ 1, 1 ]
      <p class="scene-class-comments">2D scale for z projected map</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.z_scale.images data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.z_scale.videos data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap.attributes.z_scale.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.ProjectTriplanarUdimMap-%}