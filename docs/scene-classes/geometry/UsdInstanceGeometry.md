---
title: UsdInstanceGeometry

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# UsdInstanceGeometry
**GEOMETRY NODE**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>curved_motion_blur_sample_count</h3>
    <p>
      <b>Int</b>
      
      
        default: 10
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Number of time samples generated along each curve when using curved motion blur</p>
      
    </p>
    
    <h3>disable_indices</h3>
    <p>
      <b>IntVector</b>
      
      
        default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">A list of index values to hide / disable. For example, with 4 instances you can supply a list of 0, 2 to disable those instances. If an index in this list is out of range, it is ignored.</p>
      
    </p>
    
    <h3>evaluation_frame</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.0
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">evaluate geometry at specified frame instead of SceneVariables frame<br></p>
      
    </p>
    
    <h3>instance_level</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | instance level 0 = 0 (default)
        
          | instance level 1 = 1
        
          | instance level 2 = 2
        
          | instance level 3 = 3
        
          | instance level 4 = 4
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Level of this instance.  This level can be referenced in TransformSpaceMap to allow for transforming data to/from the local space of each instance this instancer produces.</p>
      
    </p>
    
    <h3>label</h3>
    <p>
      <b>String</b>
      
      
        default: 
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">label used in material aov expresssions</p>
      
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
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Motion blur type for PolygonMesh/Points/Curves in alembic file.<br>"static" will treat the mesh as static.<br>"velocity" will blur using the supplied vertex positions and velocities.<br>"frame delta" will interpolate between the two supplied vertex positions.<br>"acceleration" will blur using the supplied vertex positions, velocities and accelerations.<br>"hermite" will use supplied pair of positions and pair of velocities to interpolate along a cubic Hermite curve.<br>"best" will use choose the method which provides the highest quality given the available data.<br></p>
      
    </p>
    
    <h3>node_xform</h3>
    <p>
      <b>Mat4d</b>
      <i>blurrable</i>
      
        default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      
        <p class="jekyll-theme-minimal scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>point_instancer_path</h3>
    <p>
      <b>String</b>
      
      
        default: 
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">The point instancer to load from the USD Stage<br></p>
      
    </p>
    
    <h3>primitive_attribute_frame</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | first motion step = 0
        
          | second motion step = 1
        
          | both motion steps = 2 (default)
        
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Which frame(s) do we take the primitive attributes from?<br>&emsp;O : first motion step<br>&emsp;1 : second motion step<br>&emsp;2 : both motion steps</p>
      
    </p>
    
    <h3>primitive_attributes</h3>
    <p>
      <b>Userdata Vector</b>
      
      
        default: []
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">A list of UserData to specify arbitrary primitive attributes(For example, color or roughness multiplier) per -instance</p>
      
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
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">List of mappings of the form A:B where:<br>A is a list of names of parts to be mapped, or asterisk to map the whole geometry<br>B is a list of labels corresponding to the sets corresponding to distinct values of ["shadow_receiver_label"], or asterisk to map to all such sets.</p>
      
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
    
    <h3>stage</h3>
    <p>
      <b>String</b>
      <i>filename</i>
      
        default: 
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">USD Stage to load<br></p>
      
    </p>
    
    <h3>static</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">disable if the geometry will be updated between frames</p>
      
    </p>
    
    <h3>use_evaluation_frame</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">uses "evaluation frame" instead of SceneVariables frame<br></p>
      
    </p>
    
    <h3>use_reference_attributes</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Use the geometry attributes of the reference (prototype) instead of the ones on the InstanceGeometry.   Currently only works for shadow_ray_epsilon</p>
      
    </p>
    
    <h3>use_reference_xforms</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Transform the reference (prototype) geometry by it's node_xform parameter before applying the instance transform</p>
      
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
      
        <p class="jekyll-theme-minimal scene-class-attr-comment">Load the entire stage and use StageCache to share it among all UsdInstanceGeometry objects.<br>If this is false, load a stage masked to the prim path just for this UsdInstanceGeometry.<br>For large stages with thousands of unique assets, it is faster to enable the stage cache<br></p>
      
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

