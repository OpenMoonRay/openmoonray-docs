---
title: BoxGeometry

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# BoxGeometry
{%-include overview.html data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.BoxGeometry.gallery data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.geometry.BoxGeometry.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Quadric attributes</summary>
  <p>
    <h3>size</h3>
    <p class="scene-class-type">
      <b>Vec3f</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.size.images data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.size.videos data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.size.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>contains_camera</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Specifies whether the geometry contains the camera and should be used for ior tracking. this should not be changed by the user -- they should instead attach the relevant geometry to the camera, which will then flag this geometry.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.contains_camera.images data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.contains_camera.videos data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.contains_camera.links heading=4-%}
    </p>
    <h3>dicing_camera</h3>
    <p class="scene-class-type">
      <b>SceneObject</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.dicing_camera.images data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.dicing_camera.videos data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.dicing_camera.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Label used in material aov expresssions</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.label.images data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.label.videos data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.label.links heading=4-%}
    </p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      <br>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">The 4x4 matrix describing the transformation from local space to world space.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.node_xform.images data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.node_xform.videos data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.node_xform.links heading=4-%}
    </p>
    <h3>ray_epsilon</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">When a secondary ray is fired, anything within this distance of the intersection point will be ignored.  instead, it is considered part of the current intersection's geometry.  if zero, an automatically calculated epsilon will be used.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.ray_epsilon.images data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.ray_epsilon.videos data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.ray_epsilon.links heading=4-%}
    </p>
    <h3>references</h3>
    <p class="scene-class-type">
      <b>Geometry Vector</b>
      <br>
      default: {}
      <p class="scene-class-comments">List of geometries that geometry procedural can reference during procedural generate/update stages. for example, an instancer geometry procedural can instance primitives generated by the reference geometry procedural.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.references.images data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.references.videos data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.references.links heading=4-%}
    </p>
    <h3>reverse_normals</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enable to reverse the normals in the geometry</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.reverse_normals.images data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.reverse_normals.videos data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.reverse_normals.links heading=4-%}
    </p>
    <h3>shadow_exclusion_mappings</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">List of mappings of the form a:b where:<br>a is a list of names of parts to be mapped, or asterisk to map the whole geometry<br>b is a list of labels corresponding to the sets corresponding to distinct values of ["shadow_receiver_label"], or asterisk to map to all such sets.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.shadow_exclusion_mappings.images data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.shadow_exclusion_mappings.videos data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.shadow_exclusion_mappings.links heading=4-%}
    </p>
    <h3>shadow_ray_epsilon</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">When a shadow ray is fired, anything within this distance of the intersection point will be ignored.  if this value is less than "ray_epsilon", then it has no additional effect.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.shadow_ray_epsilon.images data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.shadow_ray_epsilon.videos data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.shadow_ray_epsilon.links heading=4-%}
    </p>
    <h3>shadow_receiver_label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Label used to associate geometry objects into sets. then, using the ["shadow_exclusion_mappings"] attribute, shadows from specified geometry parts can be suppressed from casting onto specified sets.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.shadow_receiver_label.images data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.shadow_receiver_label.videos data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.shadow_receiver_label.links heading=4-%}
    </p>
    <h3>side_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;force two-sided&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;force single-sided&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;use mesh sidedness&rdquo;<br>
      <p class="scene-class-comments">Set single sidedness of the mesh, will affect the visibility of the mesh based on normal direction</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.side_type.images data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.side_type.videos data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.side_type.links heading=4-%}
    </p>
    <h3>static</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Disable if the geometry will be updated between frames</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.static.images data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.static.videos data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.static.links heading=4-%}
    </p>
    <h3>visible_diffuse_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Whether the geometry is visible in diffuse reflection</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_diffuse_reflection.images data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_diffuse_reflection.videos data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_diffuse_reflection.links heading=4-%}
    </p>
    <h3>visible_diffuse_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Whether the geometry is visible in diffuse transmission</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_diffuse_transmission.images data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_diffuse_transmission.videos data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_diffuse_transmission.links heading=4-%}
    </p>
    <h3>visible_glossy_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Whether the geometry is visible in glossy reflection.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_glossy_reflection.images data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_glossy_reflection.videos data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_glossy_reflection.links heading=4-%}
    </p>
    <h3>visible_glossy_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Whether the geometry is visible in glossy transmission (refraction).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_glossy_transmission.images data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_glossy_transmission.videos data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_glossy_transmission.links heading=4-%}
    </p>
    <h3>visible_in_camera</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Whether the geometry is visible to camera rays</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_in_camera.images data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_in_camera.videos data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_in_camera.links heading=4-%}
    </p>
    <h3>visible_mirror_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Whether the geometry is visible in miror reflection.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_mirror_reflection.images data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_mirror_reflection.videos data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_mirror_reflection.links heading=4-%}
    </p>
    <h3>visible_mirror_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Whether the geometry is visible in miror transmission (refraction).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_mirror_transmission.images data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_mirror_transmission.videos data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_mirror_transmission.links heading=4-%}
    </p>
    <h3>visible_shadow</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Whether the geometry casts shadows</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_shadow.images data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_shadow.videos data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_shadow.links heading=4-%}
    </p>
    <h3>visible_volume</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Whether the geometry is visible in indirect volume rays</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_volume.images data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_volume.videos data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.BoxGeometry.attributes.visible_volume.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.geometry.BoxGeometry-%}