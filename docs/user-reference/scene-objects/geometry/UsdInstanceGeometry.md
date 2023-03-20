---
title: UsdInstanceGeometry

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# UsdInstanceGeometry
{%-include overview.html data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.gallery data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Motion Blur attributes</summary>
  <p>
    <h3>curved_motion_blur_sample_count</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 10
      <p class="scene-class-comments">Number of time samples generated along each curve when using curved motion blur</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.curved_motion_blur_sample_count.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.curved_motion_blur_sample_count.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.motion_blur_type.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.motion_blur_type.links heading=4-%}
    </p>
    <h3>primitive_attribute_frame</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | first motion step = 0
          | second motion step = 1
          | both motion steps = 2 (default)
      <p class="scene-class-comments">Which frame(s) do we take the primitive attributes from?<br>&emsp;O : first motion step<br>&emsp;1 : second motion step<br>&emsp;2 : both motion steps</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.primitive_attribute_frame.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.primitive_attribute_frame.links heading=4-%}
    </p>
    <h3>use_rotation_motion_blur</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">If "xform" is time varying and motion blur is turned on, this toggle can generate better rotation trail.  Turning on this will disable adaptive tessellation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.use_rotation_motion_blur.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.use_rotation_motion_blur.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.visible_diffuse_reflection.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.visible_diffuse_reflection.links heading=4-%}
    </p>
    <h3>visible_diffuse_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in diffuse transmission</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.visible_diffuse_transmission.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.visible_diffuse_transmission.links heading=4-%}
    </p>
    <h3>visible_glossy_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in glossy reflection.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.visible_glossy_reflection.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.visible_glossy_reflection.links heading=4-%}
    </p>
    <h3>visible_glossy_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in glossy transmission (refraction).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.visible_glossy_transmission.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.visible_glossy_transmission.links heading=4-%}
    </p>
    <h3>visible_in_camera</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible to camera rays</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.visible_in_camera.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.visible_in_camera.links heading=4-%}
    </p>
    <h3>visible_mirror_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in miror reflection.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.visible_mirror_reflection.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.visible_mirror_reflection.links heading=4-%}
    </p>
    <h3>visible_mirror_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in miror transmission (refraction).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.visible_mirror_transmission.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.visible_mirror_transmission.links heading=4-%}
    </p>
    <h3>visible_shadow</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry casts shadows</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.visible_shadow.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.visible_shadow.links heading=4-%}
    </p>
    <h3>visible_volume</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in indirect volume rays</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.visible_volume.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.visible_volume.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>contains_camera</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Specifies whether the geometry contains the camera and should be used for IOR tracking. This should not be changed by the user -- they should instead attach the relevant geometry to the camera, which will then flag this geometry.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.contains_camera.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.contains_camera.links heading=4-%}
    </p>
    <h3>dicing_camera</h3>
    <p class="scene-class-type">
      <b>SceneObject</b>
      default: None
      <p class="scene-class-comments">Alternate camera that is used for adaptive tessellation.  This is useful if you want adaptive tessellation to behave consistently in a sequence, regardless of what the main camera is doing</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.dicing_camera.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.dicing_camera.links heading=4-%}
    </p>
    <h3>disable_indices</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-comments">A list of index values to hide / disable. For example, with 4 instances you can supply a list of 0, 2 to disable those instances. If an index in this list is out of range, it is ignored.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.disable_indices.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.disable_indices.links heading=4-%}
    </p>
    <h3>evaluation_frame</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Evaluate geometry at specified frame instead of SceneVariables frame<br></p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.evaluation_frame.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.evaluation_frame.links heading=4-%}
    </p>
    <h3>instance_level</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | instance level 0 = 0 (default)
          | instance level 1 = 1
          | instance level 2 = 2
          | instance level 3 = 3
          | instance level 4 = 4
      <p class="scene-class-comments">Sets the level/depth of this instance.  This adds a Mat4f primitive attribute to the geometry which can be referenced during shading to use the local space of each instance.  The name of the primitive attribute corresponds the the instance level  that is set (i.e. "instance_level_0", "instance_level_1", etc)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.instance_level.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.instance_level.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material aov expresssions</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.label.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.label.links heading=4-%}
    </p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">The 4x4 matrix describing the transformation from local space to world space.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.node_xform.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.node_xform.links heading=4-%}
    </p>
    <h3>point_instancer_path</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">The point instancer to load from the USD Stage</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.point_instancer_path.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.point_instancer_path.links heading=4-%}
    </p>
    <h3>primitive_attributes</h3>
    <p class="scene-class-type">
      <b>UserData Vector</b>
      default: []
      <p class="scene-class-comments">A list of UserData to specify arbitrary primitive attributes(For example, color or roughness multiplier) per-instance</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.primitive_attributes.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.primitive_attributes.links heading=4-%}
    </p>
    <h3>ray_epsilon</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">When a secondary ray is fired, anything within this distance of the intersection point will be ignored.  Instead, it is considered part of the current intersection's geometry.  If zero, an automatically calculated epsilon will be used.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.ray_epsilon.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.ray_epsilon.links heading=4-%}
    </p>
    <h3>references</h3>
    <p class="scene-class-type">
      <b>Geometry Vector</b>
      default: []
      <p class="scene-class-comments">list of geometries that geometry procedural can reference during procedural generate/update stages. For example, an instancer geometry procedural can instance primitives generated by the reference geometry procedural.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.references.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.references.links heading=4-%}
    </p>
    <h3>reverse_normals</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enable to reverse the normals in the geometry</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.reverse_normals.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.reverse_normals.links heading=4-%}
    </p>
    <h3>shadow_exclusion_mappings</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">List of mappings of the form A:B where:<br>A is a list of names of parts to be mapped, or asterisk to map the whole geometry<br>B is a list of labels corresponding to the sets corresponding to distinct values of ["shadow_receiver_label"], or asterisk to map to all such sets.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.shadow_exclusion_mappings.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.shadow_exclusion_mappings.links heading=4-%}
    </p>
    <h3>shadow_ray_epsilon</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">When a shadow ray is fired, anything within this distance of the intersection point will be ignored.  If this value is less than "ray_epsilon", then it has no additional effect.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.shadow_ray_epsilon.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.shadow_ray_epsilon.links heading=4-%}
    </p>
    <h3>shadow_receiver_label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">Label used to associate Geometry objects into sets. Then, using the ["shadow_exclusion_mappings"] attribute, shadows from specified geometry parts can be suppressed from casting onto specified sets.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.shadow_receiver_label.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.shadow_receiver_label.links heading=4-%}
    </p>
    <h3>side_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | force two-sided = 0 (default)
          | force single-sided = 1
          | use mesh sidedness = 2
      <p class="scene-class-comments">set single sidedness of the mesh, will affect the visibility of the mesh based on normal direction</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.side_type.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.side_type.links heading=4-%}
    </p>
    <h3>stage</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">USD Stage to load containing the point instancer</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.stage.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.stage.links heading=4-%}
    </p>
    <h3>static</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">disable if the geometry will be updated between frames</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.static.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.static.links heading=4-%}
    </p>
    <h3>use_evaluation_frame</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Uses "evaluation frame" instead of SceneVariables frame</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.use_evaluation_frame.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.use_evaluation_frame.links heading=4-%}
    </p>
    <h3>use_reference_attributes</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Use the geometry attributes of the reference (prototype) instead of the ones on the InstanceGeometry.   Currently only works for shadow_ray_epsilon</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.use_reference_attributes.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.use_reference_attributes.links heading=4-%}
    </p>
    <h3>use_reference_xforms</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Transform the reference (prototype) geometry by it's node_xform parameter before applying the instance transform</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.use_reference_xforms.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.use_reference_xforms.links heading=4-%}
    </p>
    <h3>use_stage_cache</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Load the entire stage and use StageCache to share it among all UsdInstanceGeometry objects.<br>If this is false, load a stage masked to the prim path just for this UsdInstanceGeometry.<br>For large stages with thousands of unique assets, it is faster to enable the stage cache.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.use_stage_cache.images data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry.attributes.use_stage_cache.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.geometry.UsdInstanceGeometry-%}