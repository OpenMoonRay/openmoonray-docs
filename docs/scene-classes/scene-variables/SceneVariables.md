---
title: SceneVariables

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# SceneVariables
****

---

<details open>
  <summary class="scene-class-attr-group">Caching attributes</summary>
  <p>
    
    <h3>fast_geometry_update</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>texture_cache_size</h3>
    <p>
      <b>Int</b>
      
      
        default: 4000
      
        <p class="scene-class-attr-comment">size is in Mb and this is the maximum cache size</p>
      
    </p>
    
    <h3>texture_file_handles</h3>
    <p>
      <b>Int</b>
      
      
        default: 24000
      
        <p class="scene-class-attr-comment">maximum number of simultaneous open file handles</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">Camera and Layer attributes</summary>
  <p>
    
    <h3>camera</h3>
    <p>
      <b>Camera</b>
      
      
        default: None
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>layer</h3>
    <p>
      <b>Layer</b>
      
      
        default: None
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">Checkpoint attributes</summary>
  <p>
    
    <h3>checkpoint_active</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>checkpoint_bg_write</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="scene-class-attr-comment">Define checkpoint file write operation execution mode.Checkpoint file write is executed as background thread and run parallel with MCRT threads (= true:default). Or stop all MCRT threads and checkpoint file write is exclusively executed (= false).</p>
      
    </p>
    
    <h3>checkpoint_interval</h3>
    <p>
      <b>Float</b>
      
      
        default: 15.0
      
        <p class="scene-class-attr-comment">Length of time, in minutes, between checkpoint file writes. Time should be equal or bigger than 0.1</p>
      
    </p>
    
    <h3>checkpoint_max_bgcache</h3>
    <p>
      <b>Int</b>
      
      
        default: 2
      
        <p class="scene-class-attr-comment">Specify max number of internal ImageWriteCache total which defines total number of write backlog under background thread write mode. You have to specify 1 or bigger number. Background thread write mode is suspended and processed serially when internal ImageWriteCache reaches this checkpoint_max_bgcache number. Bigger max value can support background write more robustly even if checkpoint write interval is pretty short. However it requires more runtime memory. 2 is best for most of the cases.</p>
      
    </p>
    
    <h3>checkpoint_max_snapshot_overhead</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-comment">Specify max fraction of snapshot overhead threshold for extra snapshot action regarding unexpected interruption by SIGINT. This value is fraction. If this value is ZERO or negative, no extra snapshot action is executed and no checkpoint file is generated when SIGINT is received.</p>
      
    </p>
    
    <h3>checkpoint_mode</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | time = 0 (default)
        
          | quality = 1
        
      
        <p class="scene-class-attr-comment">Select checkpoint computation internal logic based on the time interval or quality steps</p>
      
    </p>
    
    <h3>checkpoint_overwrite</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="scene-class-attr-comment">Checkpoint file overwrite/non-overwirte control options, If checkpoint_overwrite=true, all latest checkpoint file is overwritten to previous checkpoint file output and we only have latest checkpoint file on disk. if checkpoint_overwrite=false, checkpoint files name is modified and extend with tile based sampling total number and all checkpoint files are write out by different name. As result we can keep all checkpoint files.</p>
      
    </p>
    
    <h3>checkpoint_post_script</h3>
    <p>
      <b>String</b>
      
      
        default: 
      
        <p class="scene-class-attr-comment">Define post checkpoint lua script name. This script is loaded into renderer just after every checkpoint file write completion then executed simultaneously with MCRT threads. Renderer sets some lua global variables and lua script can access them. See details in rendering-wiki checkpoint/resume page. If empty, post checkpoint script execution is disabled.</p>
      
    </p>
    
    <h3>checkpoint_quality_steps</h3>
    <p>
      <b>Int</b>
      
      
        default: 2
      
        <p class="scene-class-attr-comment">Steps of quality, internal sampling iteration count, between checkpoint file writes. Value should be equal or bigger than 1. Uniform sampling case, this steps number is equivalent as each pixel's pixel sampling steps. If you set quality steps=2, checkpoint file is created at every timing of each pixel's sample count exceeds at 2, 4, 6, 8, 10, ... Adaptive sampling case, this steps number is equivalent as internal adaptive sampling iteration steps. Recommended number is 1~3 range. You can use more than 4 but bigger number always require longer rendering time. If you set 2, checkpoint file is created after finish every 2 adaptive sampling iteration execution.</p>
      
    </p>
    
    <h3>checkpoint_sample_cap</h3>
    <p>
      <b>Int</b>
      
      
        default: 0
      
        <p class="scene-class-attr-comment">When total pixel sample count exceeds this value at every pixel (If you set 1024, each pixel exceeds 1024, then try to finish), the render will finish after the next checkpoint write. Disabled sample cap feature when set to 0.</p>
      
    </p>
    
    <h3>checkpoint_snapshot_interval</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-comment">Interval of time in minutes, about snapshot refreshment regarding interruption by SIGINT. Unit is minute. If this value is ZERO or negative, checkpoint_max_snapshot_overhead parameter is used instead.</p>
      
    </p>
    
    <h3>checkpoint_start_sample</h3>
    <p>
      <b>Int</b>
      
      
        default: 1
      
        <p class="scene-class-attr-comment">Specify samples per pixel (SPP) number. Checkpoint file is created when all pixel's SPP are same or bigger than this number. Until then, checkpoint file is not created.</p>
      
    </p>
    
    <h3>checkpoint_time_cap</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-comment">When total render process time exceeds this value, in minutes, the render will finish after the next checkpoint write. Disabled time cap feature when set to 0.</p>
      
    </p>
    
    <h3>checkpoint_total_files</h3>
    <p>
      <b>Int</b>
      
      
        default: 0
      
        <p class="scene-class-attr-comment">Specify total number of checkpoint files for quality based checkpoint mode.This variable is a substitute parameter of checkpoint_quality_steps.If this value is 0 (= default), the checkpoint generation interval is controlled by checkpoint_quality_steps variable.If this value is 1 or bigger, checkpoint generation interval is calculated based on this value and the renderer tries to generate a user defined number of checkpoint files automatically.This option respects the checkpoint_start_sample variable.In some cases, the renderer might not create the requested checkpoint_total_files due to current limitation of internal implementation or user specified bigger than 1 for checkpoint_start_sample variable. However even in that case, the renderer tries to create the closest number of total checkpoint files which user defined number as checkpoint_total_files.</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">Debug attributes</summary>
  <p>
    
    <h3>debug_console</h3>
    <p>
      <b>Int</b>
      
      
        default: -1
      
        <p class="scene-class-attr-comment">Specify port number for debug console. If you set -1 (=default), all debug console functionalities are disabled. If you set 0 or positive port number, debug console functionalities are enabled. If enabled, we can send commands via telnet connection and control rendering behavior for debugging purposes. If you set 0, the kernel finds the available port for you and displays the port number to the cerr. Otherwise you have to set the available port number yourself.</p>
      
    </p>
    
    <h3>debug_pixel</h3>
    <p>
      <b>IntVector</b>
      
      
        default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>debug_rays_depth_range</h3>
    <p>
      <b>IntVector</b>
      
      
        default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>debug_rays_file</h3>
    <p>
      <b>String</b>
      
      
        default: 
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>debug_rays_primary_range</h3>
    <p>
      <b>IntVector</b>
      
      
        default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>validate_geometry</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="scene-class-attr-comment">Checks geometry for bad data</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">Deep Images attributes</summary>
  <p>
    
    <h3>deep_curvature_tolerance</h3>
    <p>
      <b>Float</b>
      
      
        default: 45.0
      
        <p class="scene-class-attr-comment">Maximum curvature (in degrees) of the deep surface within a pixel before it is split</p>
      
    </p>
    
    <h3>deep_format</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | openexr2.0 = 0
        
          | opendcx2.0 = 1 (default)
        
      
        <p class="scene-class-attr-comment">Deep image format: openexr2.0: vanilla OpenEXR deep, opendcx2.0: DCX abuffer mask encoding</p>
      
    </p>
    
    <h3>deep_id_attribute_names</h3>
    <p>
      <b>StringVector</b>
      
      
        default: []
      
        <p class="scene-class-attr-comment">Names of primitive attributes containing deep IDs</p>
      
    </p>
    
    <h3>deep_layer_bias</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.10000000149
      
        <p class="scene-class-attr-comment">Minimum distance between deep layers</p>
      
    </p>
    
    <h3>deep_max_layers</h3>
    <p>
      <b>Int</b>
      
      
        default: 1
      
        <p class="scene-class-attr-comment">Maximum number of depth layers to output</p>
      
    </p>
    
    <h3>deep_vol_compression_res</h3>
    <p>
      <b>Int</b>
      
      
        default: 10
      
        <p class="scene-class-attr-comment">Volume opacity compression resolution.  Lower values gives higher compression.</p>
      
    </p>
    
    <h3>deep_z_tolerance</h3>
    <p>
      <b>Float</b>
      
      
        default: 2.0
      
        <p class="scene-class-attr-comment">Maximum range of the deep surface's Z values within a pixel before it is split</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">Driver attributes</summary>
  <p>
    
    <h3>interactive_mode</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>machine_id</h3>
    <p>
      <b>Int</b>
      
      
        default: -1
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>num_machines</h3>
    <p>
      <b>Int</b>
      
      
        default: -1
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>output_file</h3>
    <p>
      <b>String</b>
      
      
        default: scene.exr
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>progressive_shading</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>task_distribution_type</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | non-overlapped tile = 0
        
          | multiplex pixel = 1 (default)
        
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>threads</h3>
    <p>
      <b>Int</b>
      
      
        default: 0
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>tmp_dir</h3>
    <p>
      <b>String</b>
      
      
        default: 
      
        <p class="scene-class-attr-comment">Define temporary directory name for temporary file generation. Use $TMPDIR environment variable value if this variable is empty.If $TMPDIR is also empty, use /tmp</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">Filtering attributes</summary>
  <p>
    
    <h3>pixel_filter</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | box = 0
        
          | cubic b-spline = 1 (default)
        
          | quadratic b-spline = 2
        
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>pixel_filter_width</h3>
    <p>
      <b>Float</b>
      
      
        default: 3.0
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>texture_blur</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">Fireflies Removal attributes</summary>
  <p>
    
    <h3>roughness_clamping_factor</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-comment">clamp material roughness along paths to some extent (set value to [0..1]), to prevent fireflies from indirect caustics. Warning: Using this technique is biased</p>
      
    </p>
    
    <h3>sample_clamping_depth</h3>
    <p>
      <b>Int</b>
      
      
        default: 1
      
        <p class="scene-class-attr-comment">clamp sample values only after given non-specular depth</p>
      
    </p>
    
    <h3>sample_clamping_value</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-comment">clamp sample values to a maximum (disabled if 0.0). Warning: Using this technique is biased</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">Frame attributes</summary>
  <p>
    
    <h3>frame</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>max_frame</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>min_frame</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">Global Toggles attributes</summary>
  <p>
    
    <h3>enable_displacement</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>enable_dof</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>enable_max_geometry_resolution</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>enable_motion_blur</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>enable_presence_shadows</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>enable_shadowing</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>enable_subsurface_scattering</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>lights_visible_in_camera</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>max_geometry_resolution</h3>
    <p>
      <b>Int</b>
      
      
        default: 2147483647
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>propagate_visibility_bounce_type</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="scene-class-attr-comment">turns on/off propagation for ray visibility masks</p>
      
    </p>
    
    <h3>shadow_terminator_fix</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | Off = 0 (default)
        
          | On = 1
        
          | On (Sine Compensation Alternative) = 2
        
          | On (GGX Compensation Alternative) = 3
        
          | On (Cosine Compensation Alternative = 4
        
      
        <p class="scene-class-attr-comment">Attempt to soften hard shadow terminator boundaries due to shading/geometric normal deviations.  "ON uses a custom terminator softening method. Cosine Compensation" is Chiang's 2019 SIGGRAPH technique.  "GGX" is Estevez's raytracing gems technique.  "Sine Compensation" is a sine based modification of Chiang's method. Different scenes may work better with different techniques.  The recommendation is to start with the custom compensation ON, then sine compensation technique, then GGX, then cosine.</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">Image Size attributes</summary>
  <p>
    
    <h3>aperture_window</h3>
    <p>
      <b>IntVector</b>
      
      
        default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      
        <p class="scene-class-attr-comment">Window of the camera aperture. Overrides image width / height. Order: xmin ymin xmax ymax, with origin at left bottom.</p>
      
    </p>
    
    <h3>image_height</h3>
    <p>
      <b>Int</b>
      
      
        default: 1080
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>image_width</h3>
    <p>
      <b>Int</b>
      
      
        default: 1920
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>region_window</h3>
    <p>
      <b>IntVector</b>
      
      
        default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      
        <p class="scene-class-attr-comment">Window that is rendered. Overrides image width / height (and overrides aperture window override). Order: xmin ymin xmax ymax, with origin at left bottom.</p>
      
    </p>
    
    <h3>res</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.0
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>sub_viewport</h3>
    <p>
      <b>IntVector</b>
      
      
        default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      
        <p class="scene-class-attr-comment">Subviewport of region window. Coordinate (0,0) maps to left, bottom of region window</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">Logging attributes</summary>
  <p>
    
    <h3>athena_debug</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>debug</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>error</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>fatal_color</h3>
    <p>
      <b>Rgb</b>
      
      
        default: [ 1, 0, 1 ]
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>info</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>stats_file</h3>
    <p>
      <b>String</b>
      
      
        default: 
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>warning</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">Metadata attributes</summary>
  <p>
    
    <h3>exr_header_attributes</h3>
    <p>
      <b>Metadata</b>
      
      
        default: None
      
        <p class="scene-class-attr-comment">Metadata that is passed directly to the exr header. Format: {"name", "type", "value"}</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">Motion and Scale attributes</summary>
  <p>
    
    <h3>motion_steps</h3>
    <p>
      <b>FloatVector</b>
      
      
        default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      
        <p class="scene-class-attr-comment">frame-relative time offsets for motion sampling</p>
      
    </p>
    
    <h3>scene_scale</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.00999999977648
      
        <p class="scene-class-attr-comment">(in meters): one unit in world space = 'scene scale' meters</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">Path Guide attributes</summary>
  <p>
    
    <h3>path_guide_enable</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="scene-class-attr-comment">Turn on path guiding to handle difficult light transport problems (e.g. caustics) at the cost of increased memory</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">Resume Render attributes</summary>
  <p>
    
    <h3>on_resume_script</h3>
    <p>
      <b>String</b>
      
      
        default: 
      
        <p class="scene-class-attr-comment">Define on-resume lua script name. This script is loaded into the renderer just after renderPrep execution under resume render mode then executed. This script is not executed if non-resume render mode even if you set script name.Renderer sets some lua global variables and lua script can access them. We can get resume render start condition (true=properly started or false=failed to start as resume render and fall back to normal rendering) via lua global variable. See details in rendering-wiki checkpoint/resume page. If empty, on-resume script execution is disabled.</p>
      
    </p>
    
    <h3>resumable_output</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="scene-class-attr-comment">make aov output as resumable for resume render</p>
      
    </p>
    
    <h3>resume_render</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="scene-class-attr-comment">resuming render process</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">Sampling attributes</summary>
  <p>
    
    <h3>bsdf_sampler_strategy</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | multi-sample = 0 (default)
        
          | one-sample = 1
        
          | one-lobe = 2
        
      
        <p class="scene-class-attr-comment">Indirect sampling and evaluation strategy: all lobes using one path segment per lobe (multi-sample), all lobes using one shared path segment (one-sample), or one lobe.</p>
      
    </p>
    
    <h3>bsdf_samples</h3>
    <p>
      <b>Int</b>
      
      
        default: 2
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>bssrdf_samples</h3>
    <p>
      <b>Int</b>
      
      
        default: 2
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>disable_optimized_hair_sampling</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="scene-class-attr-comment">Forces all hair materials to sample each hair BSDF lobe independently. This will enable the LPE label syntax for 'hair R', 'hair TT', 'hair TRT' and 'hair TRRT ' but will result in slower rendering</p>
      
    </p>
    
    <h3>light_samples</h3>
    <p>
      <b>Int</b>
      
      
        default: 2
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>lock_frame_noise</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>max_depth</h3>
    <p>
      <b>Int</b>
      
      
        default: 5
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>max_diffuse_depth</h3>
    <p>
      <b>Int</b>
      
      
        default: 2
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>max_glossy_depth</h3>
    <p>
      <b>Int</b>
      
      
        default: 2
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>max_hair_depth</h3>
    <p>
      <b>Int</b>
      
      
        default: 5
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>max_mirror_depth</h3>
    <p>
      <b>Int</b>
      
      
        default: 3
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>max_presence_depth</h3>
    <p>
      <b>Int</b>
      
      
        default: 16
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>max_subsurface_per_path</h3>
    <p>
      <b>Int</b>
      
      
        default: 1
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>pixel_samples</h3>
    <p>
      <b>Int</b>
      
      
        default: 8
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>presence_threshold</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.999000012875
      
        <p class="scene-class-attr-comment">Defines at which point the accumulated presence can be considered as opaque, skipping generation of presence continuation rays.</p>
      
    </p>
    
    <h3>russian_roulette_threshold</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.0375000014901
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>transparency_threshold</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.0
      
        <p class="scene-class-attr-comment">Defines at which point the accumulated opacity can be considered as opaque, skipping generation of new transparency rays.</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">Volumes attributes</summary>
  <p>
    
    <h3>max_volume_depth</h3>
    <p>
      <b>Int</b>
      
      
        default: 1
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>volume_attenuation_factor</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.649999976158
      
        <p class="scene-class-attr-comment">Controls how volume attenuation gets exponentially scaled down when rendering multiple scattering volumes. Dialing down the value generally results in more translucent look. This variable is only effective when "max volume depth" is greater than 1</p>
      
    </p>
    
    <h3>volume_contribution_factor</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.649999976158
      
        <p class="scene-class-attr-comment">Controls how scattering contribution gets exponentially scaled down when rendering multiple scattering volumes. Dialing down the value generally results in a darker volume scattering look. This variable is only effective when "max volume depth" is greater than 1</p>
      
    </p>
    
    <h3>volume_illumination_samples</h3>
    <p>
      <b>Int</b>
      
      
        default: 4
      
        <p class="scene-class-attr-comment">Sample number along the ray when computing volume scattering radiance towards the eye. Set to 0 to turn off volume lighting completely.</p>
      
    </p>
    
    <h3>volume_opacity_threshold</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.995000004768
      
        <p class="scene-class-attr-comment">As a ray travels through volume regions, it will accumulate the amount of opacity. When the value exceeds volume opacity threshold the renderer will stop the further volume integration along this ray.</p>
      
    </p>
    
    <h3>volume_overlap_mode</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | sum = 0 (default)
        
          | max = 1
        
          | rnd = 2
        
      
        <p class="scene-class-attr-comment">Selects how to handle contributions from overlapping volumes:<br>&emsp;&emsp;sum: add contributions from all volumes<br>&emsp;&emsp;max: only consider maximum volume based on extinction<br>&emsp;&emsp;rnd: randomly choose one value weighted by extinction<br>&emsp;&emsp;Warning: light linking does not work correctly in sum mode.</p>
      
    </p>
    
    <h3>volume_phase_attenuation_factor</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.5
      
        <p class="scene-class-attr-comment">Controls how phase function(anisotropy) gets exponentially scaled down when rendering multiple scattering volumes. This variable is only effective when "max volume depth" is greater than 1</p>
      
    </p>
    
    <h3>volume_quality</h3>
    <p>
      <b>Float</b>
      
      
        default: 0.5
      
        <p class="scene-class-attr-comment">Controls the overall quality of volume rendering. The higher number gives better volume shape detail and more accurate scattering integration result.</p>
      
    </p>
    
    <h3>volume_shadow_quality</h3>
    <p>
      <b>Float</b>
      
      
        default: 1.0
      
        <p class="scene-class-attr-comment">Controls the quality of volume shadow (transmittance). The higher number gives more accurate volume shadow.</p>
      
    </p>
    
  </p>
</details>


<details open>
  <summary class="scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>batch_tile_order</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | top = 0
        
          | bottom = 1
        
          | left = 2
        
          | right = 3
        
          | morton = 4 (default)
        
          | random = 5
        
          | spiral square = 6
        
          | spiral rect = 7
        
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>checkpoint_tile_order</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | top = 0
        
          | bottom = 1
        
          | left = 2
        
          | right = 3
        
          | morton = 4 (default)
        
          | random = 5
        
          | spiral square = 6
        
          | spiral rect = 7
        
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>fps</h3>
    <p>
      <b>Float</b>
      
      
        default: 24.0
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>max_adaptive_samples</h3>
    <p>
      <b>Int</b>
      
      
        default: 4096
      
        <p class="scene-class-attr-comment">When adaptive sampling is turned on, this represents the max number of samples we can throw at a pixel. It's best to err on the high side since adaptive sampling will cull out samples where they're not needed based on the target adaptive error, in which case we should rarely hit the max samples value.</p>
      
    </p>
    
    <h3>min_adaptive_samples</h3>
    <p>
      <b>Int</b>
      
      
        default: 16
      
        <p class="scene-class-attr-comment">When adaptive sampling is turned on, it's possible that a tile may be mis-classified as having converged before it has actually converged. This manifests itself as square 8x8 artifacts in the final image. The higher this value, the less the chance of this happening.</p>
      
    </p>
    
    <h3>progressive_tile_order</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | top = 0
        
          | bottom = 1
        
          | left = 2
        
          | right = 3
        
          | morton = 4 (default)
        
          | random = 5
        
          | spiral square = 6
        
          | spiral rect = 7
        
      
        <p class="scene-class-attr-missing">No documentation available</p>
      
    </p>
    
    <h3>sampling_mode</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | uniform = 0 (default)
        
          | adaptive = 2
        
      
        <p class="scene-class-attr-comment">Controls which sampling scheme to use, defaults to uniform sampling.</p>
      
    </p>
    
    <h3>target_adaptive_error</h3>
    <p>
      <b>Float</b>
      
      
        default: 10.0
      
        <p class="scene-class-attr-comment">When adaptive sampling is turned on, this represents the desired quality of the output images. Lower values will give higher quality but take longer to render. Higher values will give lower quality but render quicker.</p>
      
    </p>
    
    <h3>two_stage_output</h3>
    <p>
      <b>Bool</b>
      
      
        default: True
      
        <p class="scene-class-attr-comment">Selection of image file write uses two stage output logic or not. Two stage output (=true: default) is that the image file is written out to temporary file location first and copy/rename next. This solution greatly reduces the risk of output data collapsing from unexpected render process termination for both of final output and checkpoint output. Temporary file directory is defined by tmp_dir scene_variable.</p>
      
    </p>
    
  </p>
</details>

