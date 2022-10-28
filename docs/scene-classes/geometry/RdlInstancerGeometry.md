---
title: RdlInstancerGeometry

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RdlInstancerGeometry
{%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.gallery data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
{%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>disable_indices</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-comments">A list of index values to hide / disable. For example, with 4 instances you can supply a list of 0, 2 to disable those instances. If an index in this list is out of range, it is ignored.</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.disable_indices.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.disable_indices.links-%}
    </p>
    <h3>evaluation_frame</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Evaluate geometry at specified frame (relative) instead of SceneVariables frame.</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.evaluation_frame.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.evaluation_frame.links-%}
    </p>
    <h3>instance_level</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | instance level 0 = 0 (default)
          | instance level 1 = 1
          | instance level 2 = 2
          | instance level 3 = 3
          | instance level 4 = 4
      <p class="scene-class-comments">Level of this instance.  This level can be referenced in TransformSpaceMap to allow for transforming data to/from the local space of each instance this instancer produces.</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.instance_level.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.instance_level.links-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material aov expresssions</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.label.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.label.links-%}
    </p>
    <h3>method</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | xform attributes = 0 (default)
          | xform list = 2
      <p class="scene-class-comments">Specify the source of xforms/refIndices for instancing. If set to "xform attributes", taking data from attributes "positions", "orientations", "scales", "velocities" and "refIndices". If set to "xform list", taking data from "xform list", "velocities" and "refIndices". </p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.method.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.method.links-%}
    </p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.node_xform.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.node_xform.links-%}
    </p>
    <h3>orientations</h3>
    <p class="scene-class-type">
      <b>Vec4fVector</b>
      default: []
      <p class="scene-class-comments">A list of quaternions that represent the per-instance orientation. The length should be either 0 or consistent with "positions".</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.orientations.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.orientations.links-%}
    </p>
    <h3>positions</h3>
    <p class="scene-class-type">
      <b>Vec3fVector</b>
      default: []
      <p class="scene-class-comments">A list of vec3 that represent the per-instance position.</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.positions.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.positions.links-%}
    </p>
    <h3>primitive_attributes</h3>
    <p class="scene-class-type">
      <b>Userdata Vector</b>
      default: []
      <p class="scene-class-comments">A list of UserData to specify arbitrary primitive attributes(For example, color or roughness multiplier) per -instance</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.primitive_attributes.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.primitive_attributes.links-%}
    </p>
    <h3>ray_epsilon</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">When a secondary ray is fired, anything within this distance of the intersection point will be ignored.  Instead, it is considered part of the current intersection's geometry.  If zero, an automatically calculated epsilon will be used.</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.ray_epsilon.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.ray_epsilon.links-%}
    </p>
    <h3>ref_indices</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-comments">A list of index values to specify entry of "reference" per instance. The length should be either 0 or consistent with "positions"|"xform_list". The index entry falls back to 0 when this attribute is empty or the value of entry is out of index range</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.ref_indices.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.ref_indices.links-%}
    </p>
    <h3>references</h3>
    <p class="scene-class-type">
      <b>Geometry Vector</b>
      default: []
      <p class="scene-class-comments">list of geometries that geometry procedural can reference during procedural generate/update stages. For example, an instancer geometry procedural can instance primitives generated by the reference geometry procedural.</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.references.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.references.links-%}
    </p>
    <h3>reverse_normals</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enable to reverse the normals in the geometry</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.reverse_normals.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.reverse_normals.links-%}
    </p>
    <h3>scales</h3>
    <p class="scene-class-type">
      <b>Vec3fVector</b>
      default: []
      <p class="scene-class-comments">A list of vec3 that represet the per-instance velocity(motion blur). The length should be either 0 or consistent with "positions".</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.scales.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.scales.links-%}
    </p>
    <h3>shadow_exclusion_mappings</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">List of mappings of the form A:B where:<br>A is a list of names of parts to be mapped, or asterisk to map the whole geometry<br>B is a list of labels corresponding to the sets corresponding to distinct values of ["shadow_receiver_label"], or asterisk to map to all such sets.</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.shadow_exclusion_mappings.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.shadow_exclusion_mappings.links-%}
    </p>
    <h3>shadow_ray_epsilon</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">When a shadow ray is fired, anything within this distance of the intersection point will be ignored.  If this value is less than "ray_epsilon", then it has no additional effect.</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.shadow_ray_epsilon.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.shadow_ray_epsilon.links-%}
    </p>
    <h3>shadow_receiver_label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">Label used to associate Geometry objects into sets. Then, using the ["shadow_exclusion_mappings"] attribute, shadows from specified geometry parts can be suppressed from casting onto specified sets.</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.shadow_receiver_label.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.shadow_receiver_label.links-%}
    </p>
    <h3>side_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | force two-sided = 0 (default)
          | force single-sided = 1
          | use mesh sidedness = 2
      <p class="scene-class-comments">set single sidedness of the mesh, will affect the visibility of the mesh based on normal direction</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.side_type.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.side_type.links-%}
    </p>
    <h3>static</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">disable if the geometry will be updated between frames</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.static.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.static.links-%}
    </p>
    <h3>use_reference_attributes</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Use the geometry attributes of the reference (prototype) instead of the ones on the InstanceGeometry.   Currently only works for shadow_ray_epsilon</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.use_reference_attributes.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.use_reference_attributes.links-%}
    </p>
    <h3>use_reference_xforms</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Transform the reference (prototype) geometry by it's node_xform parameter before applying the instance transform</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.use_reference_xforms.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.use_reference_xforms.links-%}
    </p>
    <h3>velocities</h3>
    <p class="scene-class-type">
      <b>Vec3fVector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.velocities.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.velocities.links-%}
    </p>
    <h3>visible_diffuse_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in diffuse reflection</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.visible_diffuse_reflection.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.visible_diffuse_reflection.links-%}
    </p>
    <h3>visible_diffuse_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in diffuse transmission</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.visible_diffuse_transmission.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.visible_diffuse_transmission.links-%}
    </p>
    <h3>visible_glossy_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in glossy reflection.</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.visible_glossy_reflection.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.visible_glossy_reflection.links-%}
    </p>
    <h3>visible_glossy_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in glossy transmission (refraction).</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.visible_glossy_transmission.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.visible_glossy_transmission.links-%}
    </p>
    <h3>visible_in_camera</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible to camera rays</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.visible_in_camera.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.visible_in_camera.links-%}
    </p>
    <h3>visible_mirror_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in miror reflection.</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.visible_mirror_reflection.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.visible_mirror_reflection.links-%}
    </p>
    <h3>visible_mirror_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in miror transmission (refraction).</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.visible_mirror_transmission.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.visible_mirror_transmission.links-%}
    </p>
    <h3>visible_shadow</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry casts shadows</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.visible_shadow.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.visible_shadow.links-%}
    </p>
    <h3>visible_volume</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in indirect volume rays</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.visible_volume.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.visible_volume.links-%}
    </p>
    <h3>xform_list</h3>
    <p class="scene-class-type">
      <b>Mat4dVector</b>
      default: []
      <p class="scene-class-comments">A list of xforms that represent the per-instance xform.</p>
      {%include image-gallery.html images=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.xform_list.images data=site.data.scene-classes.geometry.RdlInstancerGeometry-%}
      {%include see-also.html links=site.data.scene-classes.geometry.RdlInstancerGeometry.attributes.xform_list.links-%}
    </p>
  </p>
</details>
</div>