---
title: UsdGeometry

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# UsdGeometry
{%-include overview.html data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.gallery data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Curve attributes</summary>
  <p>
    <h3>base_width_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Multiplier for the radius of the base of curves</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.base_width_factor.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.base_width_factor.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.base_width_factor.links heading=4-%}
    </p>
    <h3>radius_mult</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Multiplier for the radius of points and curves</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.radius_mult.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.radius_mult.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.radius_mult.links heading=4-%}
    </p>
    <h3>tessellation_rate</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 4
      <p class="scene-class-comments">Number of segments to split curve spans into</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.tessellation_rate.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.tessellation_rate.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.tessellation_rate.links heading=4-%}
    </p>
    <h3>tip_width_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Multiplier for the radius of the tip of curves</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.tip_width_factor.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.tip_width_factor.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.tip_width_factor.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Geometry attributes</summary>
  <p>
    <h3>reverse_normals</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">enable to reverse the normals in the geometry</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.reverse_normals.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.reverse_normals.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.reverse_normals.links heading=4-%}
    </p>
    <h3>side_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;force two-sided&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;force single-sided&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;use mesh sidedness&rdquo;<br>
      <p class="scene-class-comments">set single sidedness of the mesh, will affect the visibility of the mesh based on normal direction</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.side_type.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.side_type.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.side_type.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.label.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.label.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.label.links heading=4-%}
    </p>
    <h3>shadow_receiver_label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Label used to associate Geometry objects into ShadowReceiverSets. Using this in combination with the ["shadow_exclusion_mappings"] attribute, shadows from specified geometries or their parts can be suppressed from casting shadows onto one or more specified sets.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.shadow_receiver_label.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.shadow_receiver_label.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.shadow_receiver_label.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Mesh attributes</summary>
  <p>
    <h3>adaptive_error</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">The maximum allowable difference in pixels for subdivison mesh adaptive tessellation (each final tessellated edge won't be longer than n pixels if adaptive error is set to n).A value of 0 disables adaptive tessellation, reverting to uniform tessellation, which sometimes is more stable in animation.Adaptive tessellation is not supported for instances.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.adaptive_error.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.adaptive_error.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.adaptive_error.links heading=4-%}
    </p>
    <h3>mesh_resolution</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 2.0
      <p class="scene-class-comments">The maximum resolution to tessellate a mesh. An edge on input face will be tessellated to at most n segments when "mesh resolution" is set to n. If "adaptive error" is set to 0, every edge on input face will be uniformly tessellated to "mesh resolution". Otherwise renderer will adaptively tessellate mesh based on camera information</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.mesh_resolution.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.mesh_resolution.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.mesh_resolution.links heading=4-%}
    </p>
    <h3>smooth_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Generates smooth shading normals on a PolygonMesh when the mesh doesn't provide shading normals</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.smooth_normal.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.smooth_normal.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.smooth_normal.links heading=4-%}
    </p>
    <h3>subd_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;use mesh type&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;force polygon mesh&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;force subdivision mesh&rdquo;<br>
      <p class="scene-class-comments">PolygonMesh/SubdivisionMesh prim type to create.<br>"use mesh type" will use the type the Mesh prim specifies.<br>"force polygon mesh" will always resolve to PolygonMesh.<br>"force subdivision mesh" will always resolve to SubdivisionMesh.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.subd_type.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.subd_type.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.subd_type.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Motion Blur attributes</summary>
  <p>
    <h3>curved_motion_blur_sample_count</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 10
      <p class="scene-class-comments">Number of time samples generated along each curve when using curved motion blur</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.curved_motion_blur_sample_count.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.curved_motion_blur_sample_count.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.curved_motion_blur_sample_count.links heading=4-%}
    </p>
    <h3>motion_blur_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;-1 = &ldquo;best&rdquo; (default)<br>
          &nbsp;&nbsp;0 = &ldquo;static&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;velocity&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;frame delta&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;acceleration&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;hermite&rdquo;<br>
      <p class="scene-class-comments">Motion blur type for PolygonMesh/Points/Curves.<br>"static" will treat the mesh as static.<br>"velocity" will blur using the supplied vertex positions and velocities.<br>"frame delta" will interpolate between the two supplied vertex positions.<br>"acceleration" will blur using the supplied vertex positions, velocities and accelerations.<br>"hermite" will use supplied pair of positions and pair of velocities to interpolate along a cubic Hermite curve.<br>"best" will use choose the method which provides the highest quality given the available data.<br></p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.motion_blur_type.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.motion_blur_type.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.motion_blur_type.links heading=4-%}
    </p>
    <h3>primitive_attribute_frame</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;first motion step&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;second motion step&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;both motion steps&rdquo; (default)<br>
      <p class="scene-class-comments">Which frame(s) do we take the primitive attributes from?<br>&emsp;O : first motion step<br>&emsp;1 : second motion step<br>&emsp;2 : both motion steps</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.primitive_attribute_frame.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.primitive_attribute_frame.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.primitive_attribute_frame.links heading=4-%}
    </p>
    <h3>use_rotation_motion_blur</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">If "xform" is time varying and motion blur is enabled, enabling this feature can produce a curved rotation trail.  Enabling this feature will disable adaptive tessellation for this mesh</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.use_rotation_motion_blur.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.use_rotation_motion_blur.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.use_rotation_motion_blur.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.ray_epsilon.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.ray_epsilon.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.ray_epsilon.links heading=4-%}
    </p>
    <h3>shadow_ray_epsilon</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">When a shadow ray is fired, anything within this distance of the intersection point will be ignored.  If this value is less than "ray_epsilon", then it has no additional effect.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.shadow_ray_epsilon.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.shadow_ray_epsilon.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.shadow_ray_epsilon.links heading=4-%}
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
      default: 1.0
      <p class="scene-class-comments">Evaluates geometry at the specified frame instead of SceneVariables frame</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.evaluation_frame.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.evaluation_frame.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.evaluation_frame.links heading=4-%}
    </p>
    <h3>use_evaluation_frame</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Uses "evaluation frame" instead of SceneVariables frame</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.use_evaluation_frame.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.use_evaluation_frame.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.use_evaluation_frame.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>USD attributes</summary>
  <p>
    <h3>prim_path</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">The geometry Prim to load from the USD Stage</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.prim_path.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.prim_path.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.prim_path.links heading=4-%}
    </p>
    <h3>stage</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      <br>
      default: 
      <p class="scene-class-comments">USD Stage to load</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.stage.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.stage.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.stage.links heading=4-%}
    </p>
    <h3>use_master_xform</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">If the prim is an instance proxy, use the xform from the master Prim during geometry creation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.use_master_xform.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.use_master_xform.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.use_master_xform.links heading=4-%}
    </p>
    <h3>use_prim_xform</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Include the xform from the Prim during geometry creation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.use_prim_xform.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.use_prim_xform.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.use_prim_xform.links heading=4-%}
    </p>
    <h3>use_stage_cache</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Load the entire stage and use StageCache to share it among all UsdGeometry objects.<br>If this is false, load a stage masked to the prim path just for this UsdGeometry.<br>For large stages with thousands of unique assets, it is faster to enable the stage cache</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.use_stage_cache.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.use_stage_cache.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.use_stage_cache.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>User Data attributes</summary>
  <p>
    <h3>part_list</h3>
    <p class="scene-class-type">
      <b>StringVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">List of part names.   The length of the<br>list should match the length of any "part" rate primitive attribute</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.part_list.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.part_list.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.part_list.links heading=4-%}
    </p>
    <h3>primitive_attributes</h3>
    <p class="scene-class-type">
      <b>UserData Vector</b>
      <br>
      default: {}
      <p class="scene-class-comments">A list of UserData scene objects specifying arbitrary primitive attributes</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.primitive_attributes.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.primitive_attributes.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.primitive_attributes.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_diffuse_reflection.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_diffuse_reflection.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_diffuse_reflection.links heading=4-%}
    </p>
    <h3>visible_diffuse_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in diffuse transmission</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_diffuse_transmission.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_diffuse_transmission.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_diffuse_transmission.links heading=4-%}
    </p>
    <h3>visible_glossy_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in glossy reflection.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_glossy_reflection.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_glossy_reflection.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_glossy_reflection.links heading=4-%}
    </p>
    <h3>visible_glossy_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in glossy transmission (refraction).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_glossy_transmission.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_glossy_transmission.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_glossy_transmission.links heading=4-%}
    </p>
    <h3>visible_in_camera</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">whether the geometry is visible to camera rays</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_in_camera.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_in_camera.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_in_camera.links heading=4-%}
    </p>
    <h3>visible_mirror_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in miror reflection.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_mirror_reflection.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_mirror_reflection.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_mirror_reflection.links heading=4-%}
    </p>
    <h3>visible_mirror_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in miror transmission (refraction).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_mirror_transmission.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_mirror_transmission.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_mirror_transmission.links heading=4-%}
    </p>
    <h3>visible_shadow</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">whether the geometry casts shadows</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_shadow.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_shadow.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_shadow.links heading=4-%}
    </p>
    <h3>visible_volume</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in indirect volume rays</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_volume.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_volume.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.visible_volume.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.contains_camera.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.contains_camera.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.contains_camera.links heading=4-%}
    </p>
    <h3>curves_subtype</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;ray_facing&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;round&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;normal_oriented&rdquo;<br>
      <p class="scene-class-comments">Selects the style the curves are rendered</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.curves_subtype.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.curves_subtype.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.curves_subtype.links heading=4-%}
    </p>
    <h3>dicing_camera</h3>
    <p class="scene-class-type">
      <b>SceneObject</b>
      <br>
      default: None
      <p class="scene-class-comments">Alternate camera that is used for adaptive tessellation.  This is useful if you want adaptive tessellation to behave consistently in a sequence, regardless of what the main camera is doing</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.dicing_camera.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.dicing_camera.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.dicing_camera.links heading=4-%}
    </p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      <br>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">The 4x4 matrix describing the transformation from local space to world space.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.node_xform.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.node_xform.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.node_xform.links heading=4-%}
    </p>
    <h3>references</h3>
    <p class="scene-class-type">
      <b>Geometry Vector</b>
      <br>
      default: {}
      <p class="scene-class-comments">list of geometries that geometry procedural can reference during procedural generate/update stages. For example, an instancer geometry procedural can instance primitives generated by the reference geometry procedural.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.references.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.references.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.references.links heading=4-%}
    </p>
    <h3>shadow_exclusion_mappings</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">A space-separated list of mappings of the form A:B where:<br>A is a comma-separated list of names of parts of this Geometry, or an asterisk to specify the whole geometry;<br>B is a comma-separated list of shadow receiver set labels established using the ["shadow_receiver_label"] attribute, or an asterisk to specify to all such sets in the scene.<br>For each of the listed mappings, shadows from the parts specified in A will be suppressed from casting onto any geometries in the ShadowReceiverSets specified in B.<br>**Note: no part name should appear more than once in the string, otherwise the behavior is undefined.**</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.shadow_exclusion_mappings.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.shadow_exclusion_mappings.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.shadow_exclusion_mappings.links heading=4-%}
    </p>
    <h3>static</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">disable if the geometry will be updated between frames</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.static.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.static.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.static.links heading=4-%}
    </p>
    <h3>use_explicit_shading_attributes</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enable the use of explicit shading attributes (N, dPds, dPdt) if they are present</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.use_explicit_shading_attributes.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.use_explicit_shading_attributes.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.use_explicit_shading_attributes.links heading=4-%}
    </p>
    <h3>use_local_camera_motion_blur</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables experimental feature that also attempts to remove the camera blur in the local regions</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.use_local_camera_motion_blur.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.use_local_camera_motion_blur.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.use_local_camera_motion_blur.links heading=4-%}
    </p>
    <h3>use_local_motion_blur</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables the local motion blur feature, which makes the geometry procedural responsible for handling all of the geometry's motion and allows for custom effects</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.use_local_motion_blur.images data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.use_local_motion_blur.videos data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.UsdGeometry.attributes.use_local_motion_blur.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.geometry.UsdGeometry-%}