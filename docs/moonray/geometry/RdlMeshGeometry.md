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
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>accleration_list</h3>
    <b>Vec3fVector</b>
    
    
    default: []
    
    <p>Optionally declare vertex accelerations for quadratic motion interpolation</p>
    
    
    <h3>adaptive_error</h3>
    <b>Float</b>
    
    
    default: 0.0
    
    <p>the maximum allowable difference in pixels for subdivison mesh adaptive tessellation (each final tessellated edge won't be longer than n pixels if adaptive error is set to n).A value of 0 disables adaptive tessellation, reverting to uniform tessellation, which sometimes is more stable in animation.Adaptive tessellation is not supported for instances.</p>
    
    
    <h3>curved_motion_blur_sample_count</h3>
    <b>Int</b>
    
    
    default: 10
    
    <p>Number of time samples generated along each curve when using curved motion blur</p>
    
    
    <h3>face_vertex_count</h3>
    <b>IntVector</b>
    
    
    default: <scene_rdl2.__scene_rdl2__.IntVector object at >
    
    <p>Ordered list of vertices per face, used in conjection with vertices by index to construct the mesh</p>
    
    
    <h3>is_subd</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>If true, a SubdivisionMesh primitive will be created - PolygonMesh otherwise</p>
    
    
    <h3>label</h3>
    <b>String</b>
    
    
    default: 
    
    <p>label used in material aov expresssions</p>
    
    
    <h3>mesh_resolution</h3>
    <b>Float</b>
    
    
    default: 2.0
    
    <p>The maximum resolution to tessellate a mesh. An edge on input face will be tessellated to at most n segments when "mesh resolution" is set to n. If "adaptive error" is set to 0, every edge on input face will be uniformly tessellated to "mesh resolution". Otherwise renderer will adaptively tessellate mesh based on camera information</p>
    
    
    <h3>motion_blur_type</h3>
    <b>Int</b>
    <span class="emphasized">enum</span>
    
    - best = -1 (default)
    
    - static = 0
    
    - velocity = 1
    
    - frame delta = 2
    
    - acceleration = 3
    
    - hermite = 4
    
    
    <p>Motion blur type for PolygonMesh/Points/Curves in alembic file.

"static" will treat the mesh as static.

"velocity" will blur using the supplied vertex positions and velocities.

"frame delta" will interpolate between the two supplied vertex positions.

"acceleration" will blur using the supplied vertex positions, velocities and accelerations.

"hermite" will use supplied pair of positions and pair of velocities to interpolate along a cubic Hermite curve.

"best" will use choose the method which provides the highest quality given the available data.

</p>
    
    
    <h3>node_xform</h3>
    <b>Mat4d</b>
    <span class="emphasized">blurrable</span>
    
    default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
    
    <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
    
    
    <h3>normal_list</h3>
    <b>Vec3fVector</b>
    
    
    default: []
    
    <p> If the mesh is using normals, store them per-face-vertex in this list</p>
    
    
    <h3>orientation</h3>
    <b>Int</b>
    <span class="emphasized">enum</span>
    
    - right-handed = 0 (default)
    
    - left-handed = 1
    
    
    <p>When set to "left-handed", normals are generated using the left-handed rule. This reverses the direction of generated normals, and which side of surfaces is considered the front, without affecting supplied normals.</p>
    
    
    <h3>part_face_count_list</h3>
    <b>IntVector</b>
    
    
    default: <scene_rdl2.__scene_rdl2__.IntVector object at >
    
    <p>The number of faces belonging to the part with corresponding index in 'part list'.</p>
    
    
    <h3>part_face_indices</h3>
    <b>IntVector</b>
    
    
    default: <scene_rdl2.__scene_rdl2__.IntVector object at >
    
    <p>Ordered list of face indices. No index should have a value greater than the size of 'face vertex count'</p>
    
    
    <h3>part_list</h3>
    <b>StringVector</b>
    
    
    default: []
    
    <p>Ordered list of part names, used in conjunction with 'part face count list' and 'part faces indicies' to assign per-part materials</p>
    
    
    <h3>primitive_attribute_frame</h3>
    <b>Int</b>
    <span class="emphasized">enum</span>
    
    - first motion step = 0
    
    - second motion step = 1
    
    - both motion steps = 2 (default)
    
    
    <p>Which frame(s) do we take the primitive attributes from?

	O : first motion step

	1 : second motion step

	2 : both motion steps</p>
    
    
    <h3>primitive_attributes</h3>
    <b>Object Vector</b>
    
    
    default: []
    
    <p>Vector of UserData.Each key/value pair will be added as a primitive attribute of the mesh.</p>
    
    
    <h3>ray_epsilon</h3>
    <b>Float</b>
    
    
    default: 0.0
    
    <p>When a secondary ray is fired, anything within this distance of the intersection point will be ignored.  Instead, it is considered part of the current intersection's geometry.  If zero, an automatically calculated epsilon will be used.</p>
    
    
    <h3>references</h3>
    <b>Geometry Vector</b>
    
    
    default: []
    
    <p>list of geometries that geometry procedural can reference during procedural generate/update stages. For example, an instancer geometry procedural can instance primitives generated by the reference geometry procedural.</p>
    
    
    <h3>reverse_normals</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>enable to reverse the normals in the geometry</p>
    
    
    <h3>shadow_exclusion_mappings</h3>
    <b>String</b>
    
    
    default: 
    
    <p>List of mappings of the form A:B where:

A is a list of names of parts to be mapped, or asterisk to map the whole geometry

B is a list of labels corresponding to the sets corresponding to distinct values of ["shadow_receiver_label"], or asterisk to map to all such sets.</p>
    
    
    <h3>shadow_ray_epsilon</h3>
    <b>Float</b>
    
    
    default: 0.0
    
    <p>When a shadow ray is fired, anything within this distance of the intersection point will be ignored.  If this value is less than "ray_epsilon", then it has no additional effect.</p>
    
    
    <h3>shadow_receiver_label</h3>
    <b>String</b>
    
    
    default: 
    
    <p>Label used to associate Geometry objects into sets. Then, using the ["shadow_exclusion_mappings"] attribute, shadows from specified geometry parts can be suppressed from casting onto specified sets.</p>
    
    
    <h3>side_type</h3>
    <b>Int</b>
    <span class="emphasized">enum</span>
    
    - force two-sided = 0 (default)
    
    - force single-sided = 1
    
    - use mesh sidedness = 2
    
    
    <p>set single sidedness of the mesh, will affect the visibility of the mesh based on normal direction</p>
    
    
    <h3>smooth_normal</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>generate smooth shading normal when rendering PolygonMesh and the mesh doesn't provide shading normal itself</p>
    
    
    <h3>static</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>disable if the geometry will be updated between frames</p>
    
    
    <h3>subd_boundary</h3>
    <b>Int</b>
    <span class="emphasized">enum</span>
    
    - none = 0
    
    - edge only = 1
    
    - edge and corner = 2 (default)
    
    
    <p>Boundary interpolation: Corners, Edges or None</p>
    
    
    <h3>subd_corner_indices</h3>
    <b>IntVector</b>
    
    
    default: <scene_rdl2.__scene_rdl2__.IntVector object at >
    
    <p>List of indices for each corner vertex with an assigned sharpness.</p>
    
    
    <h3>subd_corner_sharpnesses</h3>
    <b>FloatVector</b>
    
    
    default: <scene_rdl2.__scene_rdl2__.FloatVector object at >
    
    <p>Sharpness value for each corner vertex.</p>
    
    
    <h3>subd_crease_indices</h3>
    <b>IntVector</b>
    
    
    default: <scene_rdl2.__scene_rdl2__.IntVector object at >
    
    <p>List of vertex index pairs for each crease edge with an assigned sharpness.</p>
    
    
    <h3>subd_crease_sharpnesses</h3>
    <b>FloatVector</b>
    
    
    default: <scene_rdl2.__scene_rdl2__.FloatVector object at >
    
    <p>Sharpness value for each crease edge.</p>
    
    
    <h3>subd_fvar_linear</h3>
    <b>Int</b>
    <span class="emphasized">enum</span>
    
    - none = 0
    
    - corners only = 1 (default)
    
    - corners plus1 = 2
    
    - corners plus2 = 3
    
    - boundaries = 4
    
    - all = 5
    
    
    <p>Face-varying linear interpolation: None, Corners Only, Corners Plus 1 or Plus 2 (RenderMan), Boundaries, or All</p>
    
    
    <h3>subd_scheme</h3>
    <b>Int</b>
    <span class="emphasized">enum</span>
    
    - bilinear = 0
    
    - catclark = 1 (default)
    
    
    <p>CatClark or Bilinear</p>
    
    
    <h3>use_rotation_motion_blur</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>if "xform" is time varying and motion blur is turned on, Turning on this toggle can generate better rotation trail. Known limitation: turning on this toggle will disable adaptive tessellation</p>
    
    
    <h3>uv_list</h3>
    <b>Vec2fVector</b>
    
    
    default: []
    
    <p>If the mesh is using UVs, store them per-face-vertex in this list</p>
    
    
    <h3>velocity_list_0</h3>
    <b>Vec3fVector</b>
    
    
    default: []
    
    <p>Optionally declare vertex velocities instead of a second motion step'</p>
    
    
    <h3>velocity_list_1</h3>
    <b>Vec3fVector</b>
    
    
    default: []
    
    <p>Optionally declare second set ofvertex velocities together with second motion step for cubic motion interpolation</p>
    
    
    <h3>velocity_scale</h3>
    <b>Float</b>
    
    
    default: 1.0
    
    <p>Adjust magnitude of velocity-based motion blur</p>
    
    
    <h3>vertex_list_0</h3>
    <b>Vec3fVector</b>
    
    
    default: []
    
    <p>Stores all vertices used by the mesh at motion step 0</p>
    
    
    <h3>vertex_list_1</h3>
    <b>Vec3fVector</b>
    
    
    default: []
    
    <p>If the mesh is in motion, the second motion step is stored in this attribute</p>
    
    
    <h3>vertices_by_index</h3>
    <b>IntVector</b>
    
    
    default: <scene_rdl2.__scene_rdl2__.IntVector object at >
    
    <p>Ordered list of vertex indices used to construct the mesh using the vertex list</p>
    
    
    <h3>visible_diffuse_reflection</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>whether the geometry is visible in diffuse reflection</p>
    
    
    <h3>visible_diffuse_transmission</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>whether the geometry is visible in diffuse transmission</p>
    
    
    <h3>visible_glossy_reflection</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>whether the geometry is visible in glossy reflection.</p>
    
    
    <h3>visible_glossy_transmission</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>whether the geometry is visible in glossy transmission (refraction).</p>
    
    
    <h3>visible_in_camera</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>whether the geometry is visible to camera rays</p>
    
    
    <h3>visible_mirror_reflection</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>whether the geometry is visible in miror reflection.</p>
    
    
    <h3>visible_mirror_transmission</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>whether the geometry is visible in miror transmission (refraction).</p>
    
    
    <h3>visible_shadow</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>whether the geometry casts shadows</p>
    
    
    <h3>visible_volume</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>whether the geometry is visible in indirect volume rays</p>
    
    
  </p>
</details>

