---
title: UsdGeometry

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# UsdGeometry
{%assign image_path=site.data.scene-classes.geometry.UsdGeometry.image_path%}
{%if site.data.scene-classes.geometry.UsdGeometry.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.geometry.UsdGeometry.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.geometry.UsdGeometry.links-%}
---
## See Also
{%for link in site.data.scene-classes.geometry.UsdGeometry.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Curve attributes</summary>
  <p>
    <h3>tessellation_rate</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 4
      <p class="scene-class-comments">Number of segments to split curve spans into</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.tessellation_rate.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>adaptive_error</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">the maximum allowable difference in pixels for subdivison mesh adaptive tessellation (each final tessellated edge won't be longer than n pixels if adaptive error is set to n).A value of 0 disables adaptive tessellation, reverting to uniform tessellation, which sometimes is more stable in animation.Adaptive tessellation is not supported for instances.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.adaptive_error.images.
          path=image_path
      %}
    </p>
    <h3>base_width_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Multiplier for the radius of the base of curves</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.base_width_factor.images.
          path=image_path
      %}
    </p>
    <h3>curved_motion_blur_sample_count</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 10
      <p class="scene-class-comments">Number of time samples generated along each curve when using curved motion blur</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.curved_motion_blur_sample_count.images.
          path=image_path
      %}
    </p>
    <h3>curves_subtype</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | ray_facing = 0 (default)
          | round = 1
      <p class="scene-class-comments">Curves subtype is ray facing or round</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.curves_subtype.images.
          path=image_path
      %}
    </p>
    <h3>evaluation_frame</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">evaluate geometry at specified frame instead of SceneVariables frame<br></p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.evaluation_frame.images.
          path=image_path
      %}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material aov expresssions</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.label.images.
          path=image_path
      %}
    </p>
    <h3>mesh_resolution</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 2.0
      <p class="scene-class-comments">The maximum resolution to tessellate a mesh. An edge on input face will be tessellated to at most n segments when "mesh resolution" is set to n. If "adaptive error" is set to 0, every edge on input face will be uniformly tessellated to "mesh resolution". Otherwise renderer will adaptively tessellate mesh based on camera information</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.mesh_resolution.images.
          path=image_path
      %}
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
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.motion_blur_type.images.
          path=image_path
      %}
    </p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.node_xform.images.
          path=image_path
      %}
    </p>
    <h3>part_list</h3>
    <p class="scene-class-type">
      <b>StringVector</b>
      default: []
      <p class="scene-class-comments">Ordered list of part names</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.part_list.images.
          path=image_path
      %}
    </p>
    <h3>prim_path</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">The geometry Prim to load from the USD Stage<br></p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.prim_path.images.
          path=image_path
      %}
    </p>
    <h3>primitive_attribute_frame</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | first motion step = 0
          | second motion step = 1
          | both motion steps = 2 (default)
      <p class="scene-class-comments">Which frame(s) do we take the primitive attributes from?<br>&emsp;O : first motion step<br>&emsp;1 : second motion step<br>&emsp;2 : both motion steps</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.primitive_attribute_frame.images.
          path=image_path
      %}
    </p>
    <h3>primitive_attributes</h3>
    <p class="scene-class-type">
      <b>Userdata Vector</b>
      default: []
      <p class="scene-class-comments">A list of UserData to specify arbitrary primitive attributes</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.primitive_attributes.images.
          path=image_path
      %}
    </p>
    <h3>radius_mult</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">radius multiplier for points and curves</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.radius_mult.images.
          path=image_path
      %}
    </p>
    <h3>ray_epsilon</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">When a secondary ray is fired, anything within this distance of the intersection point will be ignored.  Instead, it is considered part of the current intersection's geometry.  If zero, an automatically calculated epsilon will be used.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.ray_epsilon.images.
          path=image_path
      %}
    </p>
    <h3>references</h3>
    <p class="scene-class-type">
      <b>Geometry Vector</b>
      default: []
      <p class="scene-class-comments">list of geometries that geometry procedural can reference during procedural generate/update stages. For example, an instancer geometry procedural can instance primitives generated by the reference geometry procedural.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.references.images.
          path=image_path
      %}
    </p>
    <h3>reverse_normals</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enable to reverse the normals in the geometry</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.reverse_normals.images.
          path=image_path
      %}
    </p>
    <h3>shadow_exclusion_mappings</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">List of mappings of the form A:B where:<br>A is a list of names of parts to be mapped, or asterisk to map the whole geometry<br>B is a list of labels corresponding to the sets corresponding to distinct values of ["shadow_receiver_label"], or asterisk to map to all such sets.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.shadow_exclusion_mappings.images.
          path=image_path
      %}
    </p>
    <h3>shadow_ray_epsilon</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">When a shadow ray is fired, anything within this distance of the intersection point will be ignored.  If this value is less than "ray_epsilon", then it has no additional effect.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.shadow_ray_epsilon.images.
          path=image_path
      %}
    </p>
    <h3>shadow_receiver_label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">Label used to associate Geometry objects into sets. Then, using the ["shadow_exclusion_mappings"] attribute, shadows from specified geometry parts can be suppressed from casting onto specified sets.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.shadow_receiver_label.images.
          path=image_path
      %}
    </p>
    <h3>side_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | force two-sided = 0 (default)
          | force single-sided = 1
          | use mesh sidedness = 2
      <p class="scene-class-comments">set single sidedness of the mesh, will affect the visibility of the mesh based on normal direction</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.side_type.images.
          path=image_path
      %}
    </p>
    <h3>smooth_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">generate smooth shading normal when rendering PolygonMesh and the mesh doesn't provide shading normal itself</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.smooth_normal.images.
          path=image_path
      %}
    </p>
    <h3>stage</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">USD Stage to load<br></p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.stage.images.
          path=image_path
      %}
    </p>
    <h3>static</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">disable if the geometry will be updated between frames</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.static.images.
          path=image_path
      %}
    </p>
    <h3>subd_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | use mesh type = 0 (default)
          | force polygon mesh = 1
          | force subdivision mesh = 2
      <p class="scene-class-comments">PolygonMesh/SubdivisionMesh prim type to create.<br>"use mesh type" will use the type the Mesh prim specifies.<br>"force polygon mesh" will always resolve to PolygonMesh.<br>"force subdivision mesh" will always resolve to SubdivisionMesh.<br></p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.subd_type.images.
          path=image_path
      %}
    </p>
    <h3>tip_width_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Multiplier for the radius of the tip of curves</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.tip_width_factor.images.
          path=image_path
      %}
    </p>
    <h3>use_evaluation_frame</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">uses "evaluation frame" instead of SceneVariables frame<br></p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.use_evaluation_frame.images.
          path=image_path
      %}
    </p>
    <h3>use_master_xform</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">If the prim is an instance proxy, use the xform from the master Prim during geometry creation<br></p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.use_master_xform.images.
          path=image_path
      %}
    </p>
    <h3>use_prim_xform</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Include the xform from the Prim during geometry creation<br></p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.use_prim_xform.images.
          path=image_path
      %}
    </p>
    <h3>use_rotation_motion_blur</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">if "xform" is time varying and motion blur is turned on, Turning on this toggle can generate better rotation trail. Known limitation: turning on this toggle will disable adaptive tessellation</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.use_rotation_motion_blur.images.
          path=image_path
      %}
    </p>
    <h3>use_stage_cache</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Load the entire stage and use StageCache to share it among all UsdGeometry objects.<br>If this is false, load a stage masked to the prim path just for this UsdGeometry.<br>For large stages with thousands of unique assets, it is faster to enable the stage cache<br></p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.use_stage_cache.images.
          path=image_path
      %}
    </p>
    <h3>visible_diffuse_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in diffuse reflection</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.visible_diffuse_reflection.images.
          path=image_path
      %}
    </p>
    <h3>visible_diffuse_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in diffuse transmission</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.visible_diffuse_transmission.images.
          path=image_path
      %}
    </p>
    <h3>visible_glossy_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in glossy reflection.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.visible_glossy_reflection.images.
          path=image_path
      %}
    </p>
    <h3>visible_glossy_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in glossy transmission (refraction).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.visible_glossy_transmission.images.
          path=image_path
      %}
    </p>
    <h3>visible_in_camera</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible to camera rays</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.visible_in_camera.images.
          path=image_path
      %}
    </p>
    <h3>visible_mirror_reflection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in miror reflection.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.visible_mirror_reflection.images.
          path=image_path
      %}
    </p>
    <h3>visible_mirror_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in miror transmission (refraction).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.visible_mirror_transmission.images.
          path=image_path
      %}
    </p>
    <h3>visible_shadow</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry casts shadows</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.visible_shadow.images.
          path=image_path
      %}
    </p>
    <h3>visible_volume</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">whether the geometry is visible in indirect volume rays</p>
      {% include image-gallery.html
          images=site.data.scene-classes.geometry.UsdGeometryattributes.visible_volume.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>