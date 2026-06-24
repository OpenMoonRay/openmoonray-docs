---
title: RdlPointGeometry

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RdlPointGeometry
{%-include overview.html data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.gallery data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.links-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.reverse_normals.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.reverse_normals.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.reverse_normals.links heading=4-%}
    </p>
    <h3>side_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;force two-sided&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;force single-sided&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;use mesh sidedness&rdquo;<br>
      <p class="scene-class-comments">set single sidedness of the mesh, will affect the visibility of the mesh based on normal direction</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.side_type.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.side_type.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.side_type.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.label.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.label.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.label.links heading=4-%}
    </p>
    <h3>shadow_receiver_label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Label used to associate Geometry objects into ShadowReceiverSets. Using this in combination with the ["shadow_exclusion_mappings"] attribute, shadows from specified geometries or their parts can be suppressed from casting shadows onto one or more specified sets.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.shadow_receiver_label.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.shadow_receiver_label.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.shadow_receiver_label.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Motion Blur attributes</summary>
  <p>
    <h3>accleration_list</h3>
    <p class="scene-class-type">
      <b>Vec3fVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">Optionally declared vertex accelerations for quadratic motion interpolation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.accleration_list.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.accleration_list.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.accleration_list.links heading=4-%}
    </p>
    <h3>curved_motion_blur_sample_count</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 10
      <p class="scene-class-comments">Number of time samples generated along each curve when using curved motion blur</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.curved_motion_blur_sample_count.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.curved_motion_blur_sample_count.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.curved_motion_blur_sample_count.links heading=4-%}
    </p>
    <h3>local_motion_blur_inner_radius_list</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">Per-point inner radius for each local motion blur region (full-strength core). If empty, defaults to 1.0. Must match the length of local_motion_blur_position_list.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.local_motion_blur_inner_radius_list.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.local_motion_blur_inner_radius_list.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.local_motion_blur_inner_radius_list.links heading=4-%}
    </p>
    <h3>local_motion_blur_multiplier_list</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">Per-point motion blur strength multiplier for each local motion blur region. If empty, defaults to 1.0. Must match the length of local_motion_blur_position_list.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.local_motion_blur_multiplier_list.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.local_motion_blur_multiplier_list.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.local_motion_blur_multiplier_list.links heading=4-%}
    </p>
    <h3>local_motion_blur_orient_list</h3>
    <p class="scene-class-type">
      <b>Vec4fVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">Per-point orientation quaternion (x=i, y=j, z=k, w=r) for each local motion blur region. Combined with the scale list, this orients and shapes the blur falloff region. If empty, identity orientation is used. Must match the length of local_motion_blur_position_list.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.local_motion_blur_orient_list.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.local_motion_blur_orient_list.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.local_motion_blur_orient_list.links heading=4-%}
    </p>
    <h3>local_motion_blur_position_list</h3>
    <p class="scene-class-type">
      <b>Vec3fVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">World-space center position for each local motion blur region.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.local_motion_blur_position_list.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.local_motion_blur_position_list.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.local_motion_blur_position_list.links heading=4-%}
    </p>
    <h3>local_motion_blur_radius_list</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">Per-point outer radius for each local motion blur region. If empty, defaults to 1.0. Must match the length of local_motion_blur_position_list.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.local_motion_blur_radius_list.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.local_motion_blur_radius_list.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.local_motion_blur_radius_list.links heading=4-%}
    </p>
    <h3>local_motion_blur_radius_multiplier</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Global radius multiplier applied to per-region radius values, whether supplied via the "radius"/"inner_radius" point attributes or the "local_motion_blur_radius_list"/"local_motion_blur_inner_radius_list" explicit list attributes</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.local_motion_blur_radius_multiplier.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.local_motion_blur_radius_multiplier.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.local_motion_blur_radius_multiplier.links heading=4-%}
    </p>
    <h3>local_motion_blur_scale_list</h3>
    <p class="scene-class-type">
      <b>Vec3fVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">Per-point non-uniform scale (x,y,z) for each local motion blur region. Non-uniform scale makes the falloff region ellipsoidal rather than spherical. If empty, uniform scale (1,1,1) is used. Must match the length of local_motion_blur_position_list.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.local_motion_blur_scale_list.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.local_motion_blur_scale_list.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.local_motion_blur_scale_list.links heading=4-%}
    </p>
    <h3>local_motion_blur_strength_multiplier</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Global strength multiplier for local motion blur application</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.local_motion_blur_strength_multiplier.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.local_motion_blur_strength_multiplier.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.local_motion_blur_strength_multiplier.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.motion_blur_type.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.motion_blur_type.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.motion_blur_type.links heading=4-%}
    </p>
    <h3>primitive_attribute_frame</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;first motion step&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;second motion step&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;both motion steps&rdquo; (default)<br>
      <p class="scene-class-comments">Which frame(s) do we take the primitive attributes from?<br>&emsp;O : first motion step<br>&emsp;1 : second motion step<br>&emsp;2 : both motion steps</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.primitive_attribute_frame.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.primitive_attribute_frame.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.primitive_attribute_frame.links heading=4-%}
    </p>
    <h3>use_rotation_motion_blur</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">If "xform" is time varying and motion blur is enabled, enabling this feature can produce a curved rotation trail.  Enabling this feature will disable adaptive tessellation for this mesh</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.use_rotation_motion_blur.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.use_rotation_motion_blur.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.use_rotation_motion_blur.links heading=4-%}
    </p>
    <h3>velocity_list_0</h3>
    <p class="scene-class-type">
      <b>Vec3fVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">Optionally declared explicit vertex velocities to use instead of vertex positions from a second motion step'</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.velocity_list_0.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.velocity_list_0.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.velocity_list_0.links heading=4-%}
    </p>
    <h3>velocity_list_1</h3>
    <p class="scene-class-type">
      <b>Vec3fVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">Optionally declared second set of vertex velocities together with vertex positions from the second motion step for cubic motion interpolation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.velocity_list_1.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.velocity_list_1.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.velocity_list_1.links heading=4-%}
    </p>
    <h3>velocity_scale</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Adjusts magnitude of velocity-based motion blur</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.velocity_scale.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.velocity_scale.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.velocity_scale.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Points attributes</summary>
  <p>
    <h3>part_indices</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">List of part indices.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.part_indices.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.part_indices.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.part_indices.links heading=4-%}
    </p>
    <h3>part_list</h3>
    <p class="scene-class-type">
      <b>StringVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">List of part names, used in conjunction with 'part_indices' to assign per-part materials</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.part_list.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.part_list.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.part_list.links heading=4-%}
    </p>
    <h3>radius_list</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">List of per point radius values</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.radius_list.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.radius_list.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.radius_list.links heading=4-%}
    </p>
    <h3>use_screen_space_radius</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Radius is applied in screen space</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.use_screen_space_radius.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.use_screen_space_radius.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.use_screen_space_radius.links heading=4-%}
    </p>
    <h3>vertex_list_0</h3>
    <p class="scene-class-type">
      <b>Vec3fVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">List of vertex positions used by the points at motion step 0</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.vertex_list_0.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.vertex_list_0.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.vertex_list_0.links heading=4-%}
    </p>
    <h3>vertex_list_1</h3>
    <p class="scene-class-type">
      <b>Vec3fVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">If the points are in motion, the vertex positions for the second motion step are stored in this attribute</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.vertex_list_1.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.vertex_list_1.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.vertex_list_1.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.ray_epsilon.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.ray_epsilon.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.ray_epsilon.links heading=4-%}
    </p>
    <h3>shadow_ray_epsilon</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">When a shadow ray is fired, anything within this distance of the intersection point will be ignored.  If this value is less than "ray_epsilon", then it has no additional effect.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.shadow_ray_epsilon.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.shadow_ray_epsilon.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.shadow_ray_epsilon.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>User Data attributes</summary>
  <p>
    <h3>primitive_attributes</h3>
    <p class="scene-class-type">
      <b>SceneObject Vector</b>
      <br>
      default: {}
      <p class="scene-class-comments">Vector of UserData.  Each key/value pair will be added as a primitive attribute of the points.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.primitive_attributes.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.primitive_attributes.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.primitive_attributes.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_diffuse_reflection.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_diffuse_reflection.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_diffuse_reflection.links heading=4-%}
    </p>
    <h3>visible_diffuse_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in diffuse transmission</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_diffuse_transmission.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_diffuse_transmission.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_diffuse_transmission.links heading=4-%}
    </p>
    <h3>visible_glossy_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in glossy reflection.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_glossy_reflection.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_glossy_reflection.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_glossy_reflection.links heading=4-%}
    </p>
    <h3>visible_glossy_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in glossy transmission (refraction).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_glossy_transmission.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_glossy_transmission.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_glossy_transmission.links heading=4-%}
    </p>
    <h3>visible_in_camera</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">whether the geometry is visible to camera rays</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_in_camera.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_in_camera.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_in_camera.links heading=4-%}
    </p>
    <h3>visible_mirror_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in miror reflection.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_mirror_reflection.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_mirror_reflection.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_mirror_reflection.links heading=4-%}
    </p>
    <h3>visible_mirror_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in miror transmission (refraction).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_mirror_transmission.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_mirror_transmission.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_mirror_transmission.links heading=4-%}
    </p>
    <h3>visible_shadow</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">whether the geometry casts shadows</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_shadow.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_shadow.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_shadow.links heading=4-%}
    </p>
    <h3>visible_volume</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in indirect volume rays</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_volume.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_volume.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.visible_volume.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.contains_camera.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.contains_camera.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.contains_camera.links heading=4-%}
    </p>
    <h3>dicing_camera</h3>
    <p class="scene-class-type">
      <b>SceneObject</b>
      <br>
      default: None
      <p class="scene-class-comments">Alternate camera that is used for adaptive tessellation.  This is useful if you want adaptive tessellation to behave consistently in a sequence, regardless of what the main camera is doing</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.dicing_camera.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.dicing_camera.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.dicing_camera.links heading=4-%}
    </p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      <br>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">The 4x4 matrix describing the transformation from local space to world space.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.node_xform.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.node_xform.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.node_xform.links heading=4-%}
    </p>
    <h3>references</h3>
    <p class="scene-class-type">
      <b>Geometry Vector</b>
      <br>
      default: {}
      <p class="scene-class-comments">list of geometries that geometry procedural can reference during procedural generate/update stages. For example, an instancer geometry procedural can instance primitives generated by the reference geometry procedural.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.references.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.references.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.references.links heading=4-%}
    </p>
    <h3>shadow_exclusion_mappings</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">A space-separated list of mappings of the form A:B where:<br>A is a comma-separated list of names of parts of this Geometry, or an asterisk to specify the whole geometry;<br>B is a comma-separated list of shadow receiver set labels established using the ["shadow_receiver_label"] attribute, or an asterisk to specify to all such sets in the scene.<br>For each of the listed mappings, shadows from the parts specified in A will be suppressed from casting onto any geometries in the ShadowReceiverSets specified in B.<br>**Note: no part name should appear more than once in the string, otherwise the behavior is undefined.**</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.shadow_exclusion_mappings.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.shadow_exclusion_mappings.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.shadow_exclusion_mappings.links heading=4-%}
    </p>
    <h3>static</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">disable if the geometry will be updated between frames</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.static.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.static.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.static.links heading=4-%}
    </p>
    <h3>use_explicit_shading_attributes</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enable the use of explicit shading attributes (N, dPds, dPdt) if they are present</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.use_explicit_shading_attributes.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.use_explicit_shading_attributes.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.use_explicit_shading_attributes.links heading=4-%}
    </p>
    <h3>use_local_camera_motion_blur</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables experimental feature that also attempts to remove the camera blur in the local regions</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.use_local_camera_motion_blur.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.use_local_camera_motion_blur.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.use_local_camera_motion_blur.links heading=4-%}
    </p>
    <h3>use_local_motion_blur</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables the local motion blur feature, which makes the geometry procedural responsible for handling all of the geometry's motion and allows for custom effects</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.use_local_motion_blur.images data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.use_local_motion_blur.videos data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.geometry.RdlPointGeometry.attributes.use_local_motion_blur.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.geometry.RdlPointGeometry-%}