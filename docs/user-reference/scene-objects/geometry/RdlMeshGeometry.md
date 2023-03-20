---
title: RdlMeshGeometry

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RdlMeshGeometry
{%-include overview.html data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.gallery data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Mesh attributes</summary>
  <p>
    <h3>adaptive_error</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">The maximum allowable difference in pixels for subdivison mesh adaptive tessellation (each final tessellated edge won't be longer than n pixels if adaptive error is set to n).A value of 0 disables adaptive tessellation, reverting to uniform tessellation, which sometimes is more stable in animation.Adaptive tessellation is not supported for instances.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.adaptive_error.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.adaptive_error.links heading=4-%}
    </p>
    <h3>mesh_resolution</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 2.0
      <p class="scene-class-comments">The maximum resolution to tessellate a mesh. An edge on input face will be tessellated to at most n segments when "mesh resolution" is set to n. If "adaptive error" is set to 0, every edge on input face will be uniformly tessellated to "mesh resolution". Otherwise renderer will adaptively tessellate mesh based on camera information</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.mesh_resolution.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.mesh_resolution.links heading=4-%}
    </p>
    <h3>smooth_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Generates smooth shading normals when rendering a PolygonMesh and the mesh doesn't provide shading normal itself</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.smooth_normal.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.smooth_normal.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Motion Blur attributes</summary>
  <p>
    <h3>curved_motion_blur_sample_count</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 10
      <p class="scene-class-comments">Number of time samples generated along each curve when using curved motion blur</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.curved_motion_blur_sample_count.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.curved_motion_blur_sample_count.links heading=4-%}
    </p>
    <h3>motion_blur_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | best = -1 (default)
          | static = 0
          | velocity = 1
          | frame delta = 2
          | acceleration = 3
          | hermite = 4
      <p class="scene-class-comments">Motion blur type for PolygonMesh/Points/Curves in alembic file.<br>"static" will treat the mesh as static.<br>"velocity" will blur using the supplied vertex positions and velocities.<br>"frame delta" will interpolate between the two supplied vertex positions.<br>"acceleration" will blur using the supplied vertex positions, velocities and accelerations.<br>"hermite" will use supplied pair of positions and pair of velocities to interpolate along a cubic Hermite curve.<br>"best" will use choose the method which provides the highest quality given the available data.<br></p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.motion_blur_type.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.motion_blur_type.links heading=4-%}
    </p>
    <h3>primitive_attribute_frame</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | first motion step = 0
          | second motion step = 1
          | both motion steps = 2 (default)
      <p class="scene-class-comments">Which frame(s) do we take the primitive attributes from?<br>&emsp;O : first motion step<br>&emsp;1 : second motion step<br>&emsp;2 : both motion steps</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.primitive_attribute_frame.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.primitive_attribute_frame.links heading=4-%}
    </p>
    <h3>use_rotation_motion_blur</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">If "xform" is time varying and motion blur is turned on, this toggle can generate better rotation trail.  Turning on this will disable adaptive tessellation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.use_rotation_motion_blur.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.use_rotation_motion_blur.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>User Data attributes</summary>
  <p>
    <h3>primitive_attributes</h3>
    <p class="scene-class-type">
      <b>SceneObject Vector</b>
      default: []
      <p class="scene-class-comments">Vector of UserData.  Each key/value pair will be added as a primitive attribute of the mesh.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.primitive_attributes.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.primitive_attributes.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Visibility attributes</summary>
  <p>
    <h3>visible_diffuse_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in diffuse reflection</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.visible_diffuse_reflection.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.visible_diffuse_reflection.links heading=4-%}
    </p>
    <h3>visible_diffuse_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in diffuse transmission</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.visible_diffuse_transmission.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.visible_diffuse_transmission.links heading=4-%}
    </p>
    <h3>visible_glossy_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in glossy reflection.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.visible_glossy_reflection.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.visible_glossy_reflection.links heading=4-%}
    </p>
    <h3>visible_glossy_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in glossy transmission (refraction).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.visible_glossy_transmission.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.visible_glossy_transmission.links heading=4-%}
    </p>
    <h3>visible_in_camera</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible to camera rays</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.visible_in_camera.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.visible_in_camera.links heading=4-%}
    </p>
    <h3>visible_mirror_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in miror reflection.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.visible_mirror_reflection.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.visible_mirror_reflection.links heading=4-%}
    </p>
    <h3>visible_mirror_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in miror transmission (refraction).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.visible_mirror_transmission.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.visible_mirror_transmission.links heading=4-%}
    </p>
    <h3>visible_shadow</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry casts shadows</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.visible_shadow.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.visible_shadow.links heading=4-%}
    </p>
    <h3>visible_volume</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in indirect volume rays</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.visible_volume.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.visible_volume.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>accleration_list</h3>
    <p class="scene-class-type">
      <b>Vec3fVector</b>
      default: []
      <p class="scene-class-comments">Optionally declared vertex accelerations for quadratic motion interpolation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.accleration_list.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.accleration_list.links heading=4-%}
    </p>
    <h3>contains_camera</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Specifies whether the geometry contains the camera and should be used for IOR tracking. This should not be changed by the user -- they should instead attach the relevant geometry to the camera, which will then flag this geometry.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.contains_camera.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.contains_camera.links heading=4-%}
    </p>
    <h3>dicing_camera</h3>
    <p class="scene-class-type">
      <b>SceneObject</b>
      default: None
      <p class="scene-class-comments">Alternate camera that is used for adaptive tessellation.  This is useful if you want adaptive tessellation to behave consistently in a sequence, regardless of what the main camera is doing</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.dicing_camera.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.dicing_camera.links heading=4-%}
    </p>
    <h3>face_vertex_count</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-comments">List of vertices per face, used in conjunction with vertices_by_index to construct the mesh</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.face_vertex_count.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.face_vertex_count.links heading=4-%}
    </p>
    <h3>is_subd</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">If true, a SubdivisionMesh primitive will be created - PolygonMesh otherwise</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.is_subd.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.is_subd.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material aov expresssions</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.label.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.label.links heading=4-%}
    </p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">The 4x4 matrix describing the transformation from local space to world space.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.node_xform.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.node_xform.links heading=4-%}
    </p>
    <h3>normal_list</h3>
    <p class="scene-class-type">
      <b>Vec3fVector</b>
      default: []
      <p class="scene-class-comments"> If the mesh is using normals, store them per face-vertex in this list</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.normal_list.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.normal_list.links heading=4-%}
    </p>
    <h3>orientation</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | right-handed = 0 (default)
          | left-handed = 1
      <p class="scene-class-comments">When set to "left-handed", normals are generated using the left-handed rule. This reverses the direction of generated normals, and which side of surfaces is considered the front, without affecting supplied normals.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.orientation.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.orientation.links heading=4-%}
    </p>
    <h3>part_face_count_list</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-comments">List of the number of faces belonging to the part with corresponding index in 'part list'.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.part_face_count_list.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.part_face_count_list.links heading=4-%}
    </p>
    <h3>part_face_indices</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-comments">List of face indices. No index should have a value greater than the size of 'face_vertex_count'</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.part_face_indices.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.part_face_indices.links heading=4-%}
    </p>
    <h3>part_list</h3>
    <p class="scene-class-type">
      <b>StringVector</b>
      default: []
      <p class="scene-class-comments">List of part names, used in conjunction with 'part face count list' and 'part faces indicies' to assign per-part materials</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.part_list.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.part_list.links heading=4-%}
    </p>
    <h3>ray_epsilon</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">When a secondary ray is fired, anything within this distance of the intersection point will be ignored.  Instead, it is considered part of the current intersection's geometry.  If zero, an automatically calculated epsilon will be used.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.ray_epsilon.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.ray_epsilon.links heading=4-%}
    </p>
    <h3>references</h3>
    <p class="scene-class-type">
      <b>Geometry Vector</b>
      default: []
      <p class="scene-class-comments">list of geometries that geometry procedural can reference during procedural generate/update stages. For example, an instancer geometry procedural can instance primitives generated by the reference geometry procedural.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.references.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.references.links heading=4-%}
    </p>
    <h3>reverse_normals</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enable to reverse the normals in the geometry</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.reverse_normals.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.reverse_normals.links heading=4-%}
    </p>
    <h3>shadow_exclusion_mappings</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">List of mappings of the form A:B where:<br>A is a list of names of parts to be mapped, or asterisk to map the whole geometry<br>B is a list of labels corresponding to the sets corresponding to distinct values of ["shadow_receiver_label"], or asterisk to map to all such sets.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.shadow_exclusion_mappings.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.shadow_exclusion_mappings.links heading=4-%}
    </p>
    <h3>shadow_ray_epsilon</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">When a shadow ray is fired, anything within this distance of the intersection point will be ignored.  If this value is less than "ray_epsilon", then it has no additional effect.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.shadow_ray_epsilon.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.shadow_ray_epsilon.links heading=4-%}
    </p>
    <h3>shadow_receiver_label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">Label used to associate Geometry objects into sets. Then, using the ["shadow_exclusion_mappings"] attribute, shadows from specified geometry parts can be suppressed from casting onto specified sets.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.shadow_receiver_label.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.shadow_receiver_label.links heading=4-%}
    </p>
    <h3>side_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | force two-sided = 0 (default)
          | force single-sided = 1
          | use mesh sidedness = 2
      <p class="scene-class-comments">set single sidedness of the mesh, will affect the visibility of the mesh based on normal direction</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.side_type.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.side_type.links heading=4-%}
    </p>
    <h3>static</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">disable if the geometry will be updated between frames</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.static.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.static.links heading=4-%}
    </p>
    <h3>subd_boundary</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | none = 0
          | edge only = 1
          | edge and corner = 2 (default)
      <p class="scene-class-comments">Boundary interpolation: Corners, Edges or None</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.subd_boundary.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.subd_boundary.links heading=4-%}
    </p>
    <h3>subd_corner_indices</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-comments">List of indices for each corner vertex with an assigned sharpness.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.subd_corner_indices.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.subd_corner_indices.links heading=4-%}
    </p>
    <h3>subd_corner_sharpnesses</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">Sharpness value for each corner vertex.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.subd_corner_sharpnesses.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.subd_corner_sharpnesses.links heading=4-%}
    </p>
    <h3>subd_crease_indices</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-comments">List of vertex index pairs for each crease edge with an assigned sharpness.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.subd_crease_indices.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.subd_crease_indices.links heading=4-%}
    </p>
    <h3>subd_crease_sharpnesses</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">Sharpness value for each crease edge.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.subd_crease_sharpnesses.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.subd_crease_sharpnesses.links heading=4-%}
    </p>
    <h3>subd_fvar_linear</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | none = 0
          | corners only = 1 (default)
          | corners plus1 = 2
          | corners plus2 = 3
          | boundaries = 4
          | all = 5
      <p class="scene-class-comments">Face-varying linear interpolation: None, Corners Only, Corners Plus 1 or Plus 2 (RenderMan), Boundaries, or All</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.subd_fvar_linear.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.subd_fvar_linear.links heading=4-%}
    </p>
    <h3>subd_scheme</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | bilinear = 0
          | catclark = 1 (default)
      <p class="scene-class-comments">CatClark or Bilinear</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.subd_scheme.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.subd_scheme.links heading=4-%}
    </p>
    <h3>uv_list</h3>
    <p class="scene-class-type">
      <b>Vec2fVector</b>
      default: []
      <p class="scene-class-comments">If the mesh is using UVs, store them per face-vertex in this list</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.uv_list.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.uv_list.links heading=4-%}
    </p>
    <h3>velocity_list_0</h3>
    <p class="scene-class-type">
      <b>Vec3fVector</b>
      default: []
      <p class="scene-class-comments">Optionally declared explicit vertex velocities to use instead of vertex positions from a second motion step'</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.velocity_list_0.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.velocity_list_0.links heading=4-%}
    </p>
    <h3>velocity_list_1</h3>
    <p class="scene-class-type">
      <b>Vec3fVector</b>
      default: []
      <p class="scene-class-comments">Optionally declared second set of vertex velocities together with vertex positions from the second motion step for cubic motion interpolation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.velocity_list_1.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.velocity_list_1.links heading=4-%}
    </p>
    <h3>velocity_scale</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Adjusts magnitude of velocity-based motion blur</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.velocity_scale.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.velocity_scale.links heading=4-%}
    </p>
    <h3>vertex_list_0</h3>
    <p class="scene-class-type">
      <b>Vec3fVector</b>
      default: []
      <p class="scene-class-comments">List of vertex positions used by the mesh at motion step 0</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.vertex_list_0.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.vertex_list_0.links heading=4-%}
    </p>
    <h3>vertex_list_1</h3>
    <p class="scene-class-type">
      <b>Vec3fVector</b>
      default: []
      <p class="scene-class-comments">If the mesh is in motion, the vertex positions for the second motion step are stored in this attribute</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.vertex_list_1.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.vertex_list_1.links heading=4-%}
    </p>
    <h3>vertices_by_index</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-comments">List of vertex indices used to construct the mesh using the vertex list</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.vertices_by_index.images data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry.attributes.vertices_by_index.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.geometry.RdlMeshGeometry-%}