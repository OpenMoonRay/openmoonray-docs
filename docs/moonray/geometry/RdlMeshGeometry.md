---
title: RdlMeshGeometry

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# RdlMeshGeometry
**GEOMETRY NODE**

---

<details open>
  <summary class="scene-class-attr-group">General attributes</summary>
  <p>
  
  <h3>accleration_list</h3>
  <b>Vec3fVector</b>  
  
  default: []
  
  Optionally declare vertex accelerations for quadratic motion interpolation
  
  
  <h3>adaptive_error</h3>
  <b>Float</b>  
  
  default: 0.0
  
  the maximum allowable difference in pixels for subdivison mesh adaptive tessellation (each final tessellated edge won't be longer than n pixels if adaptive error is set to n).A value of 0 disables adaptive tessellation, reverting to uniform tessellation, which sometimes is more stable in animation.Adaptive tessellation is not supported for instances.
  
  
  <h3>curved_motion_blur_sample_count</h3>
  <b>Int</b>  
  
  default: 10
  
  Number of time samples generated along each curve when using curved motion blur
  
  
  <h3>face_vertex_count</h3>
  <b>IntVector</b>  
  
  default: <scene_rdl2.__scene_rdl2__.IntVector object at >
  
  Ordered list of vertices per face, used in conjection with vertices by index to construct the mesh
  
  
  <h3>is_subd</h3>
  <b>Bool</b>  
  
  default: True
  
  If true, a SubdivisionMesh primitive will be created - PolygonMesh otherwise
  
  
  <h3>label</h3>
  <b>String</b>  
  
  default: 
  
  label used in material aov expresssions
  
  
  <h3>mesh_resolution</h3>
  <b>Float</b>  
  
  default: 2.0
  
  The maximum resolution to tessellate a mesh. An edge on input face will be tessellated to at most n segments when "mesh resolution" is set to n. If "adaptive error" is set to 0, every edge on input face will be uniformly tessellated to "mesh resolution". Otherwise renderer will adaptively tessellate mesh based on camera information
  
  
  <h3>motion_blur_type</h3>
  <b>Int</b>  *enum*
  
  - best = -1 (default)
  
  - static = 0
  
  - velocity = 1
  
  - frame delta = 2
  
  - acceleration = 3
  
  - hermite = 4
  
  
  Motion blur type for PolygonMesh/Points/Curves in alembic file.

"static" will treat the mesh as static.

"velocity" will blur using the supplied vertex positions and velocities.

"frame delta" will interpolate between the two supplied vertex positions.

"acceleration" will blur using the supplied vertex positions, velocities and accelerations.

"hermite" will use supplied pair of positions and pair of velocities to interpolate along a cubic Hermite curve.

"best" will use choose the method which provides the highest quality given the available data.


  
  
  <h3>node_xform</h3>
  <b>Mat4d</b>  *blurrable*
  
  default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
  
  <p class="scene-class-attr-missing">No documentation available</p>
  
  
  <h3>normal_list</h3>
  <b>Vec3fVector</b>  
  
  default: []
  
   If the mesh is using normals, store them per-face-vertex in this list
  
  
  <h3>orientation</h3>
  <b>Int</b>  *enum*
  
  - right-handed = 0 (default)
  
  - left-handed = 1
  
  
  When set to "left-handed", normals are generated using the left-handed rule. This reverses the direction of generated normals, and which side of surfaces is considered the front, without affecting supplied normals.
  
  
  <h3>part_face_count_list</h3>
  <b>IntVector</b>  
  
  default: <scene_rdl2.__scene_rdl2__.IntVector object at >
  
  The number of faces belonging to the part with corresponding index in 'part list'.
  
  
  <h3>part_face_indices</h3>
  <b>IntVector</b>  
  
  default: <scene_rdl2.__scene_rdl2__.IntVector object at >
  
  Ordered list of face indices. No index should have a value greater than the size of 'face vertex count'
  
  
  <h3>part_list</h3>
  <b>StringVector</b>  
  
  default: []
  
  Ordered list of part names, used in conjunction with 'part face count list' and 'part faces indicies' to assign per-part materials
  
  
  <h3>primitive_attribute_frame</h3>
  <b>Int</b>  *enum*
  
  - first motion step = 0
  
  - second motion step = 1
  
  - both motion steps = 2 (default)
  
  
  Which frame(s) do we take the primitive attributes from?

	O : first motion step

	1 : second motion step

	2 : both motion steps
  
  
  <h3>primitive_attributes</h3>
  <b>Object Vector</b>  
  
  default: []
  
  Vector of UserData.Each key/value pair will be added as a primitive attribute of the mesh.
  
  
  <h3>ray_epsilon</h3>
  <b>Float</b>  
  
  default: 0.0
  
  When a secondary ray is fired, anything within this distance of the intersection point will be ignored.  Instead, it is considered part of the current intersection's geometry.  If zero, an automatically calculated epsilon will be used.
  
  
  <h3>references</h3>
  <b>Geometry Vector</b>  
  
  default: []
  
  list of geometries that geometry procedural can reference during procedural generate/update stages. For example, an instancer geometry procedural can instance primitives generated by the reference geometry procedural.
  
  
  <h3>reverse_normals</h3>
  <b>Bool</b>  
  
  default: False
  
  enable to reverse the normals in the geometry
  
  
  <h3>shadow_exclusion_mappings</h3>
  <b>String</b>  
  
  default: 
  
  List of mappings of the form A:B where:

A is a list of names of parts to be mapped, or asterisk to map the whole geometry

B is a list of labels corresponding to the sets corresponding to distinct values of ["shadow_receiver_label"], or asterisk to map to all such sets.
  
  
  <h3>shadow_ray_epsilon</h3>
  <b>Float</b>  
  
  default: 0.0
  
  When a shadow ray is fired, anything within this distance of the intersection point will be ignored.  If this value is less than "ray_epsilon", then it has no additional effect.
  
  
  <h3>shadow_receiver_label</h3>
  <b>String</b>  
  
  default: 
  
  Label used to associate Geometry objects into sets. Then, using the ["shadow_exclusion_mappings"] attribute, shadows from specified geometry parts can be suppressed from casting onto specified sets.
  
  
  <h3>side_type</h3>
  <b>Int</b>  *enum*
  
  - force two-sided = 0 (default)
  
  - force single-sided = 1
  
  - use mesh sidedness = 2
  
  
  set single sidedness of the mesh, will affect the visibility of the mesh based on normal direction
  
  
  <h3>smooth_normal</h3>
  <b>Bool</b>  
  
  default: True
  
  generate smooth shading normal when rendering PolygonMesh and the mesh doesn't provide shading normal itself
  
  
  <h3>static</h3>
  <b>Bool</b>  
  
  default: True
  
  disable if the geometry will be updated between frames
  
  
  <h3>subd_boundary</h3>
  <b>Int</b>  *enum*
  
  - none = 0
  
  - edge only = 1
  
  - edge and corner = 2 (default)
  
  
  Boundary interpolation: Corners, Edges or None
  
  
  <h3>subd_corner_indices</h3>
  <b>IntVector</b>  
  
  default: <scene_rdl2.__scene_rdl2__.IntVector object at >
  
  List of indices for each corner vertex with an assigned sharpness.
  
  
  <h3>subd_corner_sharpnesses</h3>
  <b>FloatVector</b>  
  
  default: <scene_rdl2.__scene_rdl2__.FloatVector object at >
  
  Sharpness value for each corner vertex.
  
  
  <h3>subd_crease_indices</h3>
  <b>IntVector</b>  
  
  default: <scene_rdl2.__scene_rdl2__.IntVector object at >
  
  List of vertex index pairs for each crease edge with an assigned sharpness.
  
  
  <h3>subd_crease_sharpnesses</h3>
  <b>FloatVector</b>  
  
  default: <scene_rdl2.__scene_rdl2__.FloatVector object at >
  
  Sharpness value for each crease edge.
  
  
  <h3>subd_fvar_linear</h3>
  <b>Int</b>  *enum*
  
  - none = 0
  
  - corners only = 1 (default)
  
  - corners plus1 = 2
  
  - corners plus2 = 3
  
  - boundaries = 4
  
  - all = 5
  
  
  Face-varying linear interpolation: None, Corners Only, Corners Plus 1 or Plus 2 (RenderMan), Boundaries, or All
  
  
  <h3>subd_scheme</h3>
  <b>Int</b>  *enum*
  
  - bilinear = 0
  
  - catclark = 1 (default)
  
  
  CatClark or Bilinear
  
  
  <h3>use_rotation_motion_blur</h3>
  <b>Bool</b>  
  
  default: False
  
  if "xform" is time varying and motion blur is turned on, Turning on this toggle can generate better rotation trail. Known limitation: turning on this toggle will disable adaptive tessellation
  
  
  <h3>uv_list</h3>
  <b>Vec2fVector</b>  
  
  default: []
  
  If the mesh is using UVs, store them per-face-vertex in this list
  
  
  <h3>velocity_list_0</h3>
  <b>Vec3fVector</b>  
  
  default: []
  
  Optionally declare vertex velocities instead of a second motion step'
  
  
  <h3>velocity_list_1</h3>
  <b>Vec3fVector</b>  
  
  default: []
  
  Optionally declare second set ofvertex velocities together with second motion step for cubic motion interpolation
  
  
  <h3>velocity_scale</h3>
  <b>Float</b>  
  
  default: 1.0
  
  Adjust magnitude of velocity-based motion blur
  
  
  <h3>vertex_list_0</h3>
  <b>Vec3fVector</b>  
  
  default: []
  
  Stores all vertices used by the mesh at motion step 0
  
  
  <h3>vertex_list_1</h3>
  <b>Vec3fVector</b>  
  
  default: []
  
  If the mesh is in motion, the second motion step is stored in this attribute
  
  
  <h3>vertices_by_index</h3>
  <b>IntVector</b>  
  
  default: <scene_rdl2.__scene_rdl2__.IntVector object at >
  
  Ordered list of vertex indices used to construct the mesh using the vertex list
  
  
  <h3>visible_diffuse_reflection</h3>
  <b>Bool</b>  
  
  default: True
  
  whether the geometry is visible in diffuse reflection
  
  
  <h3>visible_diffuse_transmission</h3>
  <b>Bool</b>  
  
  default: True
  
  whether the geometry is visible in diffuse transmission
  
  
  <h3>visible_glossy_reflection</h3>
  <b>Bool</b>  
  
  default: True
  
  whether the geometry is visible in glossy reflection.
  
  
  <h3>visible_glossy_transmission</h3>
  <b>Bool</b>  
  
  default: True
  
  whether the geometry is visible in glossy transmission (refraction).
  
  
  <h3>visible_in_camera</h3>
  <b>Bool</b>  
  
  default: True
  
  whether the geometry is visible to camera rays
  
  
  <h3>visible_mirror_reflection</h3>
  <b>Bool</b>  
  
  default: True
  
  whether the geometry is visible in miror reflection.
  
  
  <h3>visible_mirror_transmission</h3>
  <b>Bool</b>  
  
  default: True
  
  whether the geometry is visible in miror transmission (refraction).
  
  
  <h3>visible_shadow</h3>
  <b>Bool</b>  
  
  default: True
  
  whether the geometry casts shadows
  
  
  <h3>visible_volume</h3>
  <b>Bool</b>  
  
  default: True
  
  whether the geometry is visible in indirect volume rays
  
  
  </p>
</details>

