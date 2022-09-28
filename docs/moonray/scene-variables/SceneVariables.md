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

## fast_geometry_update
**Bool** 

Default value : False

<p class="scene-class-attr-missing">Documentation for the attribute <b>fast_geometry_update</b> needs to be written</p>


## texture_cache_size
**Int** 

Default value : 4000

size is in Mb and this is the maximum cache size


## texture_file_handles
**Int** 

Default value : 24000

maximum number of simultaneous open file handles


</details>

---

<details open>
<summary class="scene-class-attr-group">Camera and Layer attributes</summary>

## camera
**Camera** 

Default value : None

<p class="scene-class-attr-missing">Documentation for the attribute <b>camera</b> needs to be written</p>


## layer
**Layer** 

Default value : None

<p class="scene-class-attr-missing">Documentation for the attribute <b>layer</b> needs to be written</p>


</details>

---

<details open>
<summary class="scene-class-attr-group">Checkpoint attributes</summary>

## checkpoint_active
**Bool** 

Default value : False

<p class="scene-class-attr-missing">Documentation for the attribute <b>checkpoint_active</b> needs to be written</p>


## checkpoint_bg_write
**Bool** 

Default value : True

Define checkpoint file write operation execution mode.Checkpoint file write is executed as background thread and run parallel with MCRT threads (= true:default). Or stop all MCRT threads and checkpoint file write is exclusively executed (= false).


## checkpoint_interval
**Float** 

Default value : 15.0

Length of time, in minutes, between checkpoint file writes. Time should be equal or bigger than 0.1


## checkpoint_max_bgcache
**Int** 

Default value : 2

Specify max number of internal ImageWriteCache total which defines total number of write backlog under background thread write mode. You have to specify 1 or bigger number. Background thread write mode is suspended and processed serially when internal ImageWriteCache reaches this checkpoint_max_bgcache number. Bigger max value can support background write more robustly even if checkpoint write interval is pretty short. However it requires more runtime memory. 2 is best for most of the cases.


## checkpoint_max_snapshot_overhead
**Float** 

Default value : 0.0

Specify max fraction of snapshot overhead threshold for extra snapshot action regarding unexpected interruption by SIGINT. This value is fraction. If this value is ZERO or negative, no extra snapshot action is executed and no checkpoint file is generated when SIGINT is received.


## checkpoint_mode
**Int** *enum*

- time = 0 (default)

- quality = 1


Select checkpoint computation internal logic based on the time interval or quality steps


## checkpoint_overwrite
**Bool** 

Default value : True

Checkpoint file overwrite/non-overwirte control options, If checkpoint_overwrite=true, all latest checkpoint file is overwritten to previous checkpoint file output and we only have latest checkpoint file on disk. if checkpoint_overwrite=false, checkpoint files name is modified and extend with tile based sampling total number and all checkpoint files are write out by different name. As result we can keep all checkpoint files.


## checkpoint_post_script
**String** 

Default value : 

Define post checkpoint lua script name. This script is loaded into renderer just after every checkpoint file write completion then executed simultaneously with MCRT threads. Renderer sets some lua global variables and lua script can access them. See details in rendering-wiki checkpoint/resume page. If empty, post checkpoint script execution is disabled.


## checkpoint_quality_steps
**Int** 

Default value : 2

Steps of quality, internal sampling iteration count, between checkpoint file writes. Value should be equal or bigger than 1. Uniform sampling case, this steps number is equivalent as each pixel's pixel sampling steps. If you set quality steps=2, checkpoint file is created at every timing of each pixel's sample count exceeds at 2, 4, 6, 8, 10, ... Adaptive sampling case, this steps number is equivalent as internal adaptive sampling iteration steps. Recommended number is 1~3 range. You can use more than 4 but bigger number always require longer rendering time. If you set 2, checkpoint file is created after finish every 2 adaptive sampling iteration execution.


## checkpoint_sample_cap
**Int** 

Default value : 0

When total pixel sample count exceeds this value at every pixel (If you set 1024, each pixel exceeds 1024, then try to finish), the render will finish after the next checkpoint write. Disabled sample cap feature when set to 0.


## checkpoint_snapshot_interval
**Float** 

Default value : 0.0

Interval of time in minutes, about snapshot refreshment regarding interruption by SIGINT. Unit is minute. If this value is ZERO or negative, checkpoint_max_snapshot_overhead parameter is used instead.


## checkpoint_start_sample
**Int** 

Default value : 1

Specify samples per pixel (SPP) number. Checkpoint file is created when all pixel's SPP are same or bigger than this number. Until then, checkpoint file is not created.


## checkpoint_time_cap
**Float** 

Default value : 0.0

When total render process time exceeds this value, in minutes, the render will finish after the next checkpoint write. Disabled time cap feature when set to 0.


## checkpoint_total_files
**Int** 

Default value : 0

Specify total number of checkpoint files for quality based checkpoint mode.This variable is a substitute parameter of checkpoint_quality_steps.If this value is 0 (= default), the checkpoint generation interval is controlled by checkpoint_quality_steps variable.If this value is 1 or bigger, checkpoint generation interval is calculated based on this value and the renderer tries to generate a user defined number of checkpoint files automatically.This option respects the checkpoint_start_sample variable.In some cases, the renderer might not create the requested checkpoint_total_files due to current limitation of internal implementation or user specified bigger than 1 for checkpoint_start_sample variable. However even in that case, the renderer tries to create the closest number of total checkpoint files which user defined number as checkpoint_total_files.


</details>

---

<details open>
<summary class="scene-class-attr-group">Debug attributes</summary>

## debug_console
**Int** 

Default value : -1

Specify port number for debug console. If you set -1 (=default), all debug console functionalities are disabled. If you set 0 or positive port number, debug console functionalities are enabled. If enabled, we can send commands via telnet connection and control rendering behavior for debugging purposes. If you set 0, the kernel finds the available port for you and displays the port number to the cerr. Otherwise you have to set the available port number yourself.


## debug_pixel
**IntVector** 

Default value : <scene_rdl2.__scene_rdl2__.IntVector object at >

<p class="scene-class-attr-missing">Documentation for the attribute <b>debug_pixel</b> needs to be written</p>


## debug_rays_depth_range
**IntVector** 

Default value : <scene_rdl2.__scene_rdl2__.IntVector object at >

<p class="scene-class-attr-missing">Documentation for the attribute <b>debug_rays_depth_range</b> needs to be written</p>


## debug_rays_file
**String** 

Default value : 

<p class="scene-class-attr-missing">Documentation for the attribute <b>debug_rays_file</b> needs to be written</p>


## debug_rays_primary_range
**IntVector** 

Default value : <scene_rdl2.__scene_rdl2__.IntVector object at >

<p class="scene-class-attr-missing">Documentation for the attribute <b>debug_rays_primary_range</b> needs to be written</p>


## validate_geometry
**Bool** 

Default value : False

Checks geometry for bad data


</details>

---

<details open>
<summary class="scene-class-attr-group">Deep Images attributes</summary>

## deep_curvature_tolerance
**Float** 

Default value : 45.0

Maximum curvature (in degrees) of the deep surface within a pixel before it is split


## deep_format
**Int** *enum*

- openexr2.0 = 0

- opendcx2.0 = 1 (default)


Deep image format: openexr2.0: vanilla OpenEXR deep, opendcx2.0: DCX abuffer mask encoding


## deep_id_attribute_names
**StringVector** 

Default value : []

Names of primitive attributes containing deep IDs


## deep_layer_bias
**Float** 

Default value : 0.10000000149

Minimum distance between deep layers


## deep_max_layers
**Int** 

Default value : 1

Maximum number of depth layers to output


## deep_vol_compression_res
**Int** 

Default value : 10

Volume opacity compression resolution.  Lower values gives higher compression.


## deep_z_tolerance
**Float** 

Default value : 2.0

Maximum range of the deep surface's Z values within a pixel before it is split


</details>

---

<details open>
<summary class="scene-class-attr-group">Driver attributes</summary>

## interactive_mode
**Bool** 

Default value : False

<p class="scene-class-attr-missing">Documentation for the attribute <b>interactive_mode</b> needs to be written</p>


## machine_id
**Int** 

Default value : -1

<p class="scene-class-attr-missing">Documentation for the attribute <b>machine_id</b> needs to be written</p>


## num_machines
**Int** 

Default value : -1

<p class="scene-class-attr-missing">Documentation for the attribute <b>num_machines</b> needs to be written</p>


## output_file
**String** 

Default value : scene.exr

<p class="scene-class-attr-missing">Documentation for the attribute <b>output_file</b> needs to be written</p>


## progressive_shading
**Bool** 

Default value : False

<p class="scene-class-attr-missing">Documentation for the attribute <b>progressive_shading</b> needs to be written</p>


## task_distribution_type
**Int** *enum*

- non-overlapped tile = 0

- multiplex pixel = 1 (default)


<p class="scene-class-attr-missing">Documentation for the attribute <b>task_distribution_type</b> needs to be written</p>


## threads
**Int** 

Default value : 0

<p class="scene-class-attr-missing">Documentation for the attribute <b>threads</b> needs to be written</p>


## tmp_dir
**String** 

Default value : 

Define temporary directory name for temporary file generation. Use $TMPDIR environment variable value if this variable is empty.If $TMPDIR is also empty, use /tmp


</details>

---

<details open>
<summary class="scene-class-attr-group">Filtering attributes</summary>

## pixel_filter
**Int** *enum*

- box = 0

- cubic b-spline = 1 (default)

- quadratic b-spline = 2


<p class="scene-class-attr-missing">Documentation for the attribute <b>pixel_filter</b> needs to be written</p>


## pixel_filter_width
**Float** 

Default value : 3.0

<p class="scene-class-attr-missing">Documentation for the attribute <b>pixel_filter_width</b> needs to be written</p>


## texture_blur
**Float** 

Default value : 0.0

<p class="scene-class-attr-missing">Documentation for the attribute <b>texture_blur</b> needs to be written</p>


</details>

---

<details open>
<summary class="scene-class-attr-group">Fireflies Removal attributes</summary>

## roughness_clamping_factor
**Float** 

Default value : 0.0

clamp material roughness along paths to some extent (set value to [0..1]), to prevent fireflies from indirect caustics. Warning: Using this technique is biased


## sample_clamping_depth
**Int** 

Default value : 1

clamp sample values only after given non-specular depth


## sample_clamping_value
**Float** 

Default value : 0.0

clamp sample values to a maximum (disabled if 0.0). Warning: Using this technique is biased


</details>

---

<details open>
<summary class="scene-class-attr-group">Frame attributes</summary>

## frame
**Float** 

Default value : 0.0

<p class="scene-class-attr-missing">Documentation for the attribute <b>frame</b> needs to be written</p>


## max_frame
**Float** 

Default value : 0.0

<p class="scene-class-attr-missing">Documentation for the attribute <b>max_frame</b> needs to be written</p>


## min_frame
**Float** 

Default value : 0.0

<p class="scene-class-attr-missing">Documentation for the attribute <b>min_frame</b> needs to be written</p>


</details>

---

<details open>
<summary class="scene-class-attr-group">Global Toggles attributes</summary>

## enable_displacement
**Bool** 

Default value : True

<p class="scene-class-attr-missing">Documentation for the attribute <b>enable_displacement</b> needs to be written</p>


## enable_dof
**Bool** 

Default value : True

<p class="scene-class-attr-missing">Documentation for the attribute <b>enable_dof</b> needs to be written</p>


## enable_max_geometry_resolution
**Bool** 

Default value : False

<p class="scene-class-attr-missing">Documentation for the attribute <b>enable_max_geometry_resolution</b> needs to be written</p>


## enable_motion_blur
**Bool** 

Default value : True

<p class="scene-class-attr-missing">Documentation for the attribute <b>enable_motion_blur</b> needs to be written</p>


## enable_presence_shadows
**Bool** 

Default value : False

<p class="scene-class-attr-missing">Documentation for the attribute <b>enable_presence_shadows</b> needs to be written</p>


## enable_shadowing
**Bool** 

Default value : True

<p class="scene-class-attr-missing">Documentation for the attribute <b>enable_shadowing</b> needs to be written</p>


## enable_subsurface_scattering
**Bool** 

Default value : True

<p class="scene-class-attr-missing">Documentation for the attribute <b>enable_subsurface_scattering</b> needs to be written</p>


## lights_visible_in_camera
**Bool** 

Default value : False

<p class="scene-class-attr-missing">Documentation for the attribute <b>lights_visible_in_camera</b> needs to be written</p>


## max_geometry_resolution
**Int** 

Default value : 2147483647

<p class="scene-class-attr-missing">Documentation for the attribute <b>max_geometry_resolution</b> needs to be written</p>


## propagate_visibility_bounce_type
**Bool** 

Default value : False

turns on/off propagation for ray visibility masks


## shadow_terminator_fix
**Int** *enum*

- Off = 0 (default)

- On = 1

- On (Sine Compensation Alternative) = 2

- On (GGX Compensation Alternative) = 3

- On (Cosine Compensation Alternative = 4


Attempt to soften hard shadow terminator boundaries due to shading/geometric normal deviations.  "ON uses a custom terminator softening method. Cosine Compensation" is Chiang's 2019 SIGGRAPH technique.  "GGX" is Estevez's raytracing gems technique.  "Sine Compensation" is a sine based modification of Chiang's method. Different scenes may work better with different techniques.  The recommendation is to start with the custom compensation ON, then sine compensation technique, then GGX, then cosine.


</details>

---

<details open>
<summary class="scene-class-attr-group">Image Size attributes</summary>

## aperture_window
**IntVector** 

Default value : <scene_rdl2.__scene_rdl2__.IntVector object at >

Window of the camera aperture. Overrides image width / height. Order: xmin ymin xmax ymax, with origin at left bottom.


## image_height
**Int** 

Default value : 1080

<p class="scene-class-attr-missing">Documentation for the attribute <b>image_height</b> needs to be written</p>


## image_width
**Int** 

Default value : 1920

<p class="scene-class-attr-missing">Documentation for the attribute <b>image_width</b> needs to be written</p>


## region_window
**IntVector** 

Default value : <scene_rdl2.__scene_rdl2__.IntVector object at >

Window that is rendered. Overrides image width / height (and overrides aperture window override). Order: xmin ymin xmax ymax, with origin at left bottom.


## res
**Float** 

Default value : 1.0

<p class="scene-class-attr-missing">Documentation for the attribute <b>res</b> needs to be written</p>


## sub_viewport
**IntVector** 

Default value : <scene_rdl2.__scene_rdl2__.IntVector object at >

Subviewport of region window. Coordinate (0,0) maps to left, bottom of region window


</details>

---

<details open>
<summary class="scene-class-attr-group">Logging attributes</summary>

## athena_debug
**Bool** 

Default value : False

<p class="scene-class-attr-missing">Documentation for the attribute <b>athena_debug</b> needs to be written</p>


## debug
**Bool** 

Default value : False

<p class="scene-class-attr-missing">Documentation for the attribute <b>debug</b> needs to be written</p>


## error
**Bool** 

Default value : True

<p class="scene-class-attr-missing">Documentation for the attribute <b>error</b> needs to be written</p>


## fatal_color
**Rgb** 

Default value : [ 1, 0, 1 ]

<p class="scene-class-attr-missing">Documentation for the attribute <b>fatal_color</b> needs to be written</p>


## info
**Bool** 

Default value : False

<p class="scene-class-attr-missing">Documentation for the attribute <b>info</b> needs to be written</p>


## stats_file
**String** 

Default value : 

<p class="scene-class-attr-missing">Documentation for the attribute <b>stats_file</b> needs to be written</p>


## warning
**Bool** 

Default value : True

<p class="scene-class-attr-missing">Documentation for the attribute <b>warning</b> needs to be written</p>


</details>

---

<details open>
<summary class="scene-class-attr-group">Metadata attributes</summary>

## exr_header_attributes
**Metadata** 

Default value : None

Metadata that is passed directly to the exr header. Format: {"name", "type", "value"}


</details>

---

<details open>
<summary class="scene-class-attr-group">Motion and Scale attributes</summary>

## motion_steps
**FloatVector** 

Default value : <scene_rdl2.__scene_rdl2__.FloatVector object at >

frame-relative time offsets for motion sampling


## scene_scale
**Float** 

Default value : 0.00999999977648

(in meters): one unit in world space = 'scene scale' meters


</details>

---

<details open>
<summary class="scene-class-attr-group">Path Guide attributes</summary>

## path_guide_enable
**Bool** 

Default value : False

Turn on path guiding to handle difficult light transport problems (e.g. caustics) at the cost of increased memory


</details>

---

<details open>
<summary class="scene-class-attr-group">Resume Render attributes</summary>

## on_resume_script
**String** 

Default value : 

Define on-resume lua script name. This script is loaded into the renderer just after renderPrep execution under resume render mode then executed. This script is not executed if non-resume render mode even if you set script name.Renderer sets some lua global variables and lua script can access them. We can get resume render start condition (true=properly started or false=failed to start as resume render and fall back to normal rendering) via lua global variable. See details in rendering-wiki checkpoint/resume page. If empty, on-resume script execution is disabled.


## resumable_output
**Bool** 

Default value : False

make aov output as resumable for resume render


## resume_render
**Bool** 

Default value : False

resuming render process


</details>

---

<details open>
<summary class="scene-class-attr-group">Sampling attributes</summary>

## bsdf_sampler_strategy
**Int** *enum*

- multi-sample = 0 (default)

- one-sample = 1

- one-lobe = 2


Indirect sampling and evaluation strategy: all lobes using one path segment per lobe (multi-sample), all lobes using one shared path segment (one-sample), or one lobe.


## bsdf_samples
**Int** 

Default value : 2

<p class="scene-class-attr-missing">Documentation for the attribute <b>bsdf_samples</b> needs to be written</p>


## bssrdf_samples
**Int** 

Default value : 2

<p class="scene-class-attr-missing">Documentation for the attribute <b>bssrdf_samples</b> needs to be written</p>


## disable_optimized_hair_sampling
**Bool** 

Default value : False

Forces all hair materials to sample each hair BSDF lobe independently. This will enable the LPE label syntax for 'hair R', 'hair TT', 'hair TRT' and 'hair TRRT ' but will result in slower rendering


## light_samples
**Int** 

Default value : 2

<p class="scene-class-attr-missing">Documentation for the attribute <b>light_samples</b> needs to be written</p>


## lock_frame_noise
**Bool** 

Default value : False

<p class="scene-class-attr-missing">Documentation for the attribute <b>lock_frame_noise</b> needs to be written</p>


## max_depth
**Int** 

Default value : 5

<p class="scene-class-attr-missing">Documentation for the attribute <b>max_depth</b> needs to be written</p>


## max_diffuse_depth
**Int** 

Default value : 2

<p class="scene-class-attr-missing">Documentation for the attribute <b>max_diffuse_depth</b> needs to be written</p>


## max_glossy_depth
**Int** 

Default value : 2

<p class="scene-class-attr-missing">Documentation for the attribute <b>max_glossy_depth</b> needs to be written</p>


## max_hair_depth
**Int** 

Default value : 5

<p class="scene-class-attr-missing">Documentation for the attribute <b>max_hair_depth</b> needs to be written</p>


## max_mirror_depth
**Int** 

Default value : 3

<p class="scene-class-attr-missing">Documentation for the attribute <b>max_mirror_depth</b> needs to be written</p>


## max_presence_depth
**Int** 

Default value : 16

<p class="scene-class-attr-missing">Documentation for the attribute <b>max_presence_depth</b> needs to be written</p>


## max_subsurface_per_path
**Int** 

Default value : 1

<p class="scene-class-attr-missing">Documentation for the attribute <b>max_subsurface_per_path</b> needs to be written</p>


## pixel_samples
**Int** 

Default value : 8

<p class="scene-class-attr-missing">Documentation for the attribute <b>pixel_samples</b> needs to be written</p>


## presence_threshold
**Float** 

Default value : 0.999000012875

Defines at which point the accumulated presence can be considered as opaque, skipping generation of presence continuation rays.


## russian_roulette_threshold
**Float** 

Default value : 0.0375000014901

<p class="scene-class-attr-missing">Documentation for the attribute <b>russian_roulette_threshold</b> needs to be written</p>


## transparency_threshold
**Float** 

Default value : 1.0

Defines at which point the accumulated opacity can be considered as opaque, skipping generation of new transparency rays.


</details>

---

<details open>
<summary class="scene-class-attr-group">Volumes attributes</summary>

## max_volume_depth
**Int** 

Default value : 1

<p class="scene-class-attr-missing">Documentation for the attribute <b>max_volume_depth</b> needs to be written</p>


## volume_attenuation_factor
**Float** 

Default value : 0.649999976158

Controls how volume attenuation gets exponentially scaled down when rendering multiple scattering volumes. Dialing down the value generally results in more translucent look. This variable is only effective when "max volume depth" is greater than 1


## volume_contribution_factor
**Float** 

Default value : 0.649999976158

Controls how scattering contribution gets exponentially scaled down when rendering multiple scattering volumes. Dialing down the value generally results in a darker volume scattering look. This variable is only effective when "max volume depth" is greater than 1


## volume_illumination_samples
**Int** 

Default value : 4

Sample number along the ray when computing volume scattering radiance towards the eye. Set to 0 to turn off volume lighting completely.


## volume_opacity_threshold
**Float** 

Default value : 0.995000004768

As a ray travels through volume regions, it will accumulate the amount of opacity. When the value exceeds volume opacity threshold the renderer will stop the further volume integration along this ray.


## volume_overlap_mode
**Int** *enum*

- sum = 0 (default)

- max = 1

- rnd = 2


Selects how to handle contributions from overlapping volumes:

		sum: add contributions from all volumes

		max: only consider maximum volume based on extinction

		rnd: randomly choose one value weighted by extinction

		Warning: light linking does not work correctly in sum mode.


## volume_phase_attenuation_factor
**Float** 

Default value : 0.5

Controls how phase function(anisotropy) gets exponentially scaled down when rendering multiple scattering volumes. This variable is only effective when "max volume depth" is greater than 1


## volume_quality
**Float** 

Default value : 0.5

Controls the overall quality of volume rendering. The higher number gives better volume shape detail and more accurate scattering integration result.


## volume_shadow_quality
**Float** 

Default value : 1.0

Controls the quality of volume shadow (transmittance). The higher number gives more accurate volume shadow.


</details>

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

## batch_tile_order
**Int** *enum*

- top = 0

- bottom = 1

- left = 2

- right = 3

- morton = 4 (default)

- random = 5

- spiral square = 6

- spiral rect = 7


<p class="scene-class-attr-missing">Documentation for the attribute <b>batch_tile_order</b> needs to be written</p>


## checkpoint_tile_order
**Int** *enum*

- top = 0

- bottom = 1

- left = 2

- right = 3

- morton = 4 (default)

- random = 5

- spiral square = 6

- spiral rect = 7


<p class="scene-class-attr-missing">Documentation for the attribute <b>checkpoint_tile_order</b> needs to be written</p>


## fps
**Float** 

Default value : 24.0

<p class="scene-class-attr-missing">Documentation for the attribute <b>fps</b> needs to be written</p>


## max_adaptive_samples
**Int** 

Default value : 4096

When adaptive sampling is turned on, this represents the max number of samples we can throw at a pixel. It's best to err on the high side since adaptive sampling will cull out samples where they're not needed based on the target adaptive error, in which case we should rarely hit the max samples value.


## min_adaptive_samples
**Int** 

Default value : 16

When adaptive sampling is turned on, it's possible that a tile may be mis-classified as having converged before it has actually converged. This manifests itself as square 8x8 artifacts in the final image. The higher this value, the less the chance of this happening.


## progressive_tile_order
**Int** *enum*

- top = 0

- bottom = 1

- left = 2

- right = 3

- morton = 4 (default)

- random = 5

- spiral square = 6

- spiral rect = 7


<p class="scene-class-attr-missing">Documentation for the attribute <b>progressive_tile_order</b> needs to be written</p>


## sampling_mode
**Int** *enum*

- uniform = 0 (default)

- adaptive = 2


Controls which sampling scheme to use, defaults to uniform sampling.


## target_adaptive_error
**Float** 

Default value : 10.0

When adaptive sampling is turned on, this represents the desired quality of the output images. Lower values will give higher quality but take longer to render. Higher values will give lower quality but render quicker.


## two_stage_output
**Bool** 

Default value : True

Selection of image file write uses two stage output logic or not. Two stage output (=true: default) is that the image file is written out to temporary file location first and copy/rename next. This solution greatly reduces the risk of output data collapsing from unexpected render process termination for both of final output and checkpoint output. Temporary file directory is defined by tmp_dir scene_variable.


</details>

