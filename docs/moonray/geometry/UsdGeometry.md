---
title: UsdGeometry

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# UsdGeometry
**GEOMETRY NODE**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">Curve attributes</summary>
  <p>
    
    <h3>tessellation_rate</h3>
    <p>
      <b>Int</b>
      
        
          default: 4
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Number of segments to split curve spans into</p>
        
      </p>
    
  </p>
</details>


<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>adaptive_error</h3>
    <p>
      <b>Float</b>
      
        
          default: 0.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">the maximum allowable difference in pixels for subdivison mesh adaptive tessellation (each final tessellated edge won't be longer than n pixels if adaptive error is set to n).A value of 0 disables adaptive tessellation, reverting to uniform tessellation, which sometimes is more stable in animation.Adaptive tessellation is not supported for instances.</p>
        
      </p>
    
    <h3>base_width_factor</h3>
    <p>
      <b>Float</b>
      
        
          default: 1.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Multiplier for the radius of the base of curves</p>
        
      </p>
    
    <h3>curved_motion_blur_sample_count</h3>
    <p>
      <b>Int</b>
      
        
          default: 10
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Number of time samples generated along each curve when using curved motion blur</p>
        
      </p>
    
    <h3>curves_subtype</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
        
            | ray_facing = 0 (default)
          
            | round = 1
          
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Curves subtype is ray facing or round</p>
        
      </p>
    
    <h3>evaluation_frame</h3>
    <p>
      <b>Float</b>
      
        
          default: 1.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">evaluate geometry at specified frame instead of SceneVariables frame

</p>
        
      </p>
    
    <h3>label</h3>
    <p>
      <b>String</b>
      
        
          default: 
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">label used in material aov expresssions</p>
        
      </p>
    
    <h3>mesh_resolution</h3>
    <p>
      <b>Float</b>
      
        
          default: 2.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">The maximum resolution to tessellate a mesh. An edge on input face will be tessellated to at most n segments when "mesh resolution" is set to n. If "adaptive error" is set to 0, every edge on input face will be uniformly tessellated to "mesh resolution". Otherwise renderer will adaptively tessellate mesh based on camera information</p>
        
      </p>
    
    <h3>motion_blur_type</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
        
            | best = -1 (default)
          
            | static = 0
          
            | velocity = 1
          
            | frame delta = 2
          
            | acceleration = 3
          
            | hermite = 4
          
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Motion blur type for PolygonMesh/Points/Curves in alembic file.

"static" will treat the mesh as static.

"velocity" will blur using the supplied vertex positions and velocities.

"frame delta" will interpolate between the two supplied vertex positions.

"acceleration" will blur using the supplied vertex positions, velocities and accelerations.

"hermite" will use supplied pair of positions and pair of velocities to interpolate along a cubic Hermite curve.

"best" will use choose the method which provides the highest quality given the available data.

</p>
        
      </p>
    
    <h3>node_xform</h3>
    <p>
      <b>Mat4d</b>
      <i>blurrable</i>
        
          default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
        
          <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
        
      </p>
    
    <h3>part_list</h3>
    <p>
      <b>StringVector</b>
      
        
          default: []
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Ordered list of part names</p>
        
      </p>
    
    <h3>prim_path</h3>
    <p>
      <b>String</b>
      
        
          default: 
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">The geometry Prim to load from the USD Stage

</p>
        
      </p>
    
    <h3>primitive_attribute_frame</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
        
            | first motion step = 0
          
            | second motion step = 1
          
            | both motion steps = 2 (default)
          
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Which frame(s) do we take the primitive attributes from?

	O : first motion step

	1 : second motion step

	2 : both motion steps</p>
        
      </p>
    
    <h3>primitive_attributes</h3>
    <p>
      <b>Userdata Vector</b>
      
        
          default: []
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">A list of UserData to specify arbitrary primitive attributes</p>
        
      </p>
    
    <h3>radius_mult</h3>
    <p>
      <b>Float</b>
      
        
          default: 1.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">radius multiplier for points and curves</p>
        
      </p>
    
    <h3>ray_epsilon</h3>
    <p>
      <b>Float</b>
      
        
          default: 0.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">When a secondary ray is fired, anything within this distance of the intersection point will be ignored.  Instead, it is considered part of the current intersection's geometry.  If zero, an automatically calculated epsilon will be used.</p>
        
      </p>
    
    <h3>references</h3>
    <p>
      <b>Geometry Vector</b>
      
        
          default: []
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">list of geometries that geometry procedural can reference during procedural generate/update stages. For example, an instancer geometry procedural can instance primitives generated by the reference geometry procedural.</p>
        
      </p>
    
    <h3>reverse_normals</h3>
    <p>
      <b>Bool</b>
      
        
          default: False
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">enable to reverse the normals in the geometry</p>
        
      </p>
    
    <h3>shadow_exclusion_mappings</h3>
    <p>
      <b>String</b>
      
        
          default: 
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">List of mappings of the form A:B where:

A is a list of names of parts to be mapped, or asterisk to map the whole geometry

B is a list of labels corresponding to the sets corresponding to distinct values of ["shadow_receiver_label"], or asterisk to map to all such sets.</p>
        
      </p>
    
    <h3>shadow_ray_epsilon</h3>
    <p>
      <b>Float</b>
      
        
          default: 0.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">When a shadow ray is fired, anything within this distance of the intersection point will be ignored.  If this value is less than "ray_epsilon", then it has no additional effect.</p>
        
      </p>
    
    <h3>shadow_receiver_label</h3>
    <p>
      <b>String</b>
      
        
          default: 
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Label used to associate Geometry objects into sets. Then, using the ["shadow_exclusion_mappings"] attribute, shadows from specified geometry parts can be suppressed from casting onto specified sets.</p>
        
      </p>
    
    <h3>side_type</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
        
            | force two-sided = 0 (default)
          
            | force single-sided = 1
          
            | use mesh sidedness = 2
          
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">set single sidedness of the mesh, will affect the visibility of the mesh based on normal direction</p>
        
      </p>
    
    <h3>smooth_normal</h3>
    <p>
      <b>Bool</b>
      
        
          default: True
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">generate smooth shading normal when rendering PolygonMesh and the mesh doesn't provide shading normal itself</p>
        
      </p>
    
    <h3>stage</h3>
    <p>
      <b>String</b>
      <i>filename</i>
        
          default: 
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">USD Stage to load

</p>
        
      </p>
    
    <h3>static</h3>
    <p>
      <b>Bool</b>
      
        
          default: True
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">disable if the geometry will be updated between frames</p>
        
      </p>
    
    <h3>subd_type</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
        
            | use mesh type = 0 (default)
          
            | force polygon mesh = 1
          
            | force subdivision mesh = 2
          
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">PolygonMesh/SubdivisionMesh prim type to create.

"use mesh type" will use the type the Mesh prim specifies.

"force polygon mesh" will always resolve to PolygonMesh.

"force subdivision mesh" will always resolve to SubdivisionMesh.

</p>
        
      </p>
    
    <h3>tip_width_factor</h3>
    <p>
      <b>Float</b>
      
        
          default: 1.0
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Multiplier for the radius of the tip of curves</p>
        
      </p>
    
    <h3>use_evaluation_frame</h3>
    <p>
      <b>Bool</b>
      
        
          default: False
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">uses "evaluation frame" instead of SceneVariables frame

</p>
        
      </p>
    
    <h3>use_master_xform</h3>
    <p>
      <b>Bool</b>
      
        
          default: False
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">If the prim is an instance proxy, use the xform from the master Prim during geometry creation

</p>
        
      </p>
    
    <h3>use_prim_xform</h3>
    <p>
      <b>Bool</b>
      
        
          default: True
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Include the xform from the Prim during geometry creation

</p>
        
      </p>
    
    <h3>use_rotation_motion_blur</h3>
    <p>
      <b>Bool</b>
      
        
          default: False
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">if "xform" is time varying and motion blur is turned on, Turning on this toggle can generate better rotation trail. Known limitation: turning on this toggle will disable adaptive tessellation</p>
        
      </p>
    
    <h3>use_stage_cache</h3>
    <p>
      <b>Bool</b>
      
        
          default: False
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">Load the entire stage and use StageCache to share it among all UsdGeometry objects.

If this is false, load a stage masked to the prim path just for this UsdGeometry.

For large stages with thousands of unique assets, it is faster to enable the stage cache

</p>
        
      </p>
    
    <h3>visible_diffuse_reflection</h3>
    <p>
      <b>Bool</b>
      
        
          default: True
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">whether the geometry is visible in diffuse reflection</p>
        
      </p>
    
    <h3>visible_diffuse_transmission</h3>
    <p>
      <b>Bool</b>
      
        
          default: True
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">whether the geometry is visible in diffuse transmission</p>
        
      </p>
    
    <h3>visible_glossy_reflection</h3>
    <p>
      <b>Bool</b>
      
        
          default: True
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">whether the geometry is visible in glossy reflection.</p>
        
      </p>
    
    <h3>visible_glossy_transmission</h3>
    <p>
      <b>Bool</b>
      
        
          default: True
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">whether the geometry is visible in glossy transmission (refraction).</p>
        
      </p>
    
    <h3>visible_in_camera</h3>
    <p>
      <b>Bool</b>
      
        
          default: True
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">whether the geometry is visible to camera rays</p>
        
      </p>
    
    <h3>visible_mirror_reflection</h3>
    <p>
      <b>Bool</b>
      
        
          default: True
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">whether the geometry is visible in miror reflection.</p>
        
      </p>
    
    <h3>visible_mirror_transmission</h3>
    <p>
      <b>Bool</b>
      
        
          default: True
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">whether the geometry is visible in miror transmission (refraction).</p>
        
      </p>
    
    <h3>visible_shadow</h3>
    <p>
      <b>Bool</b>
      
        
          default: True
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">whether the geometry casts shadows</p>
        
      </p>
    
    <h3>visible_volume</h3>
    <p>
      <b>Bool</b>
      
        
          default: True
        
          <p class="jekyll-theme-minimal scene-class-attr-comment">whether the geometry is visible in indirect volume rays</p>
        
      </p>
    
  </p>
</details>

