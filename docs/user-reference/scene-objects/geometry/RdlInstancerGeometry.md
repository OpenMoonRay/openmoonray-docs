---
title: RdlInstancerGeometry

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RdlInstancerGeometry
{%-include overview.html data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.gallery data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Geometry attributes</summary>
  <p>
    <h3>reverse_normals</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">enable to reverse the normals in the geometry</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.reverse_normals.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.reverse_normals.links heading=4-%}
    </p>
    <h3>side_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;&nbsp;&nbsp;0 = force two-sided(default)<br>
          &nbsp;&nbsp;&nbsp;&nbsp;1 = force single-sided<br>
          &nbsp;&nbsp;&nbsp;&nbsp;2 = use mesh sidedness<br>
      <p class="scene-class-comments">set single sidedness of the mesh, will affect the visibility of the mesh based on normal direction</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.side_type.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.side_type.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Instancing attributes</summary>
  <p>
    <h3>disable_indices</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: <scene_rdl2.__scene_rdl2__.IntVector object at 0x7f6c15a32ed8>
      <p class="scene-class-comments">A list of index values to hide / disable.  For example, with 4 instances you can supply a list of 0, 2 to disable those instances.  If an index in this list is out of range, it is ignored.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.disable_indices.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.disable_indices.links heading=4-%}
    </p>
    <h3>instance_level</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;&nbsp;&nbsp;0 = instance level 0(default)<br>
          &nbsp;&nbsp;&nbsp;&nbsp;1 = instance level 1<br>
          &nbsp;&nbsp;&nbsp;&nbsp;2 = instance level 2<br>
          &nbsp;&nbsp;&nbsp;&nbsp;3 = instance level 3<br>
          &nbsp;&nbsp;&nbsp;&nbsp;4 = instance level 4<br>
      <p class="scene-class-comments">Sets the level/depth of this instance.  This adds a Mat4f primitive attribute to the geometry which can be referenced during shading to use the local space of each instance.  The name of the primitive attribute corresponds the the instance level  that is set (i.e. "instance_level_0", "instance_level_1", etc)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.instance_level.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.instance_level.links heading=4-%}
    </p>
    <h3>method</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;&nbsp;&nbsp;0 = xform attributes(default)<br>
          &nbsp;&nbsp;&nbsp;&nbsp;2 = xform list<br>
      <p class="scene-class-comments">Specifies the source of the transform data for instancing. If set to "xform attributes", data is used from the "positions", "orientations", "scales" attributes.If set to "xform list", data is used from the "xform list"attribute.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.method.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.method.links heading=4-%}
    </p>
    <h3>orientations</h3>
    <p class="scene-class-type">
      <b>Vec4fVector</b>
      <br>
      default: []
      <p class="scene-class-comments">A list of Vec4 quaternions that represent the per-instance orientation. The length of the list should be either 0 or consistent with "positions".</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.orientations.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.orientations.links heading=4-%}
    </p>
    <h3>positions</h3>
    <p class="scene-class-type">
      <b>Vec3fVector</b>
      <br>
      default: []
      <p class="scene-class-comments">A list of Vec3 values that represent the per-instance position.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.positions.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.positions.links heading=4-%}
    </p>
    <h3>ref_indices</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: <scene_rdl2.__scene_rdl2__.IntVector object at 0x7f6c15a32c08>
      <p class="scene-class-comments">A list of index values to specify which reference geometry to instance at each   position.   The list corresponds to entries in the "references" attribute.  The length of the list should be either 0 or consistent with "positions"|"xform_list".  The index entry falls back to 0 when this attribute is empty or the value of entry is out of index range</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.ref_indices.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.ref_indices.links heading=4-%}
    </p>
    <h3>scales</h3>
    <p class="scene-class-type">
      <b>Vec3fVector</b>
      <br>
      default: []
      <p class="scene-class-comments">A list of Vec3 values that represet the per-instance velocity(motion blur).  The length of the list should be either 0 or consistent with "positions".</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.scales.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.scales.links heading=4-%}
    </p>
    <h3>use_reference_attributes</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Use the geometry attributes of the reference (prototype) instead of the ones on the InstanceGeometry.   Currently only works for shadow_ray_epsilon</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.use_reference_attributes.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.use_reference_attributes.links heading=4-%}
    </p>
    <h3>use_reference_xforms</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Transform the reference (prototype) geometry by it's node_xform parameter before applying the instance transform</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.use_reference_xforms.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.use_reference_xforms.links heading=4-%}
    </p>
    <h3>xform_list</h3>
    <p class="scene-class-type">
      <b>Mat4dVector</b>
      <br>
      default: []
      <p class="scene-class-comments">A list of Mat4 transforms that represent the per-instance xform.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.xform_list.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.xform_list.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Labels attributes</summary>
  <p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">label used in material aov expresssions</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.label.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.label.links heading=4-%}
    </p>
    <h3>shadow_receiver_label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Label used to associate Geometry objects into sets. Then, using the ["shadow_exclusion_mappings"] attribute, shadows from specified geometry parts can be suppressed from casting onto specified sets.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.shadow_receiver_label.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.shadow_receiver_label.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Motion Blur attributes</summary>
  <p>
    <h3>velocities</h3>
    <p class="scene-class-type">
      <b>Vec3fVector</b>
      <br>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.velocities.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.velocities.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Ray Tracing attributes</summary>
  <p>
    <h3>ray_epsilon</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">When a secondary ray is fired, anything within this distance of the intersection point will be ignored.  Instead, it is considered part of the current intersection's geometry.  If zero, an automatically calculated epsilon will be used.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.ray_epsilon.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.ray_epsilon.links heading=4-%}
    </p>
    <h3>shadow_ray_epsilon</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">When a shadow ray is fired, anything within this distance of the intersection point will be ignored.  If this value is less than "ray_epsilon", then it has no additional effect.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.shadow_ray_epsilon.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.shadow_ray_epsilon.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Time attributes</summary>
  <p>
    <h3>evaluation_frame</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Evaluate geometry at specified frame (relative) instead of SceneVariables frame.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.evaluation_frame.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.evaluation_frame.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>User Data attributes</summary>
  <p>
    <h3>primitive_attributes</h3>
    <p class="scene-class-type">
      <b>UserData Vector</b>
      <br>
      default: []
      <p class="scene-class-comments">A list of UserData to specify arbitrary primitive attributes(For example, color or roughness multiplier) per-instance</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.primitive_attributes.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.primitive_attributes.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Visibility attributes</summary>
  <p>
    <h3>visible_diffuse_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in diffuse reflection</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.visible_diffuse_reflection.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.visible_diffuse_reflection.links heading=4-%}
    </p>
    <h3>visible_diffuse_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in diffuse transmission</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.visible_diffuse_transmission.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.visible_diffuse_transmission.links heading=4-%}
    </p>
    <h3>visible_glossy_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in glossy reflection.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.visible_glossy_reflection.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.visible_glossy_reflection.links heading=4-%}
    </p>
    <h3>visible_glossy_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in glossy transmission (refraction).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.visible_glossy_transmission.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.visible_glossy_transmission.links heading=4-%}
    </p>
    <h3>visible_in_camera</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">whether the geometry is visible to camera rays</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.visible_in_camera.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.visible_in_camera.links heading=4-%}
    </p>
    <h3>visible_mirror_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in miror reflection.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.visible_mirror_reflection.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.visible_mirror_reflection.links heading=4-%}
    </p>
    <h3>visible_mirror_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in miror transmission (refraction).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.visible_mirror_transmission.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.visible_mirror_transmission.links heading=4-%}
    </p>
    <h3>visible_shadow</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">whether the geometry casts shadows</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.visible_shadow.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.visible_shadow.links heading=4-%}
    </p>
    <h3>visible_volume</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in indirect volume rays</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.visible_volume.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.visible_volume.links heading=4-%}
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
      <p class="scene-class-comments">Specifies whether the geometry contains the camera and should be used for IOR tracking. This should not be changed by the user -- they should instead attach the relevant geometry to the camera, which will then flag this geometry.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.contains_camera.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.contains_camera.links heading=4-%}
    </p>
    <h3>dicing_camera</h3>
    <p class="scene-class-type">
      <b>SceneObject</b>
      <br>
      default: None
      <p class="scene-class-comments">Alternate camera that is used for adaptive tessellation.  This is useful if you want adaptive tessellation to behave consistently in a sequence, regardless of what the main camera is doing</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.dicing_camera.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.dicing_camera.links heading=4-%}
    </p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      <br>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">The 4x4 matrix describing the transformation from local space to world space.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.node_xform.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.node_xform.links heading=4-%}
    </p>
    <h3>references</h3>
    <p class="scene-class-type">
      <b>Geometry Vector</b>
      <br>
      default: []
      <p class="scene-class-comments">list of geometries that geometry procedural can reference during procedural generate/update stages. For example, an instancer geometry procedural can instance primitives generated by the reference geometry procedural.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.references.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.references.links heading=4-%}
    </p>
    <h3>shadow_exclusion_mappings</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">List of mappings of the form A:B where:<br>A is a list of names of parts to be mapped, or asterisk to map the whole geometry<br>B is a list of labels corresponding to the sets corresponding to distinct values of ["shadow_receiver_label"], or asterisk to map to all such sets.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.shadow_exclusion_mappings.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.shadow_exclusion_mappings.links heading=4-%}
    </p>
    <h3>static</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">disable if the geometry will be updated between frames</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.static.images data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry.attributes.static.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.geometry.RdlInstancerGeometry-%}