---
title: SceneVariables

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# SceneVariables
{%-include overview.html data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.gallery data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Caching attributes</summary>
  <p>
    <h3>fast_geometry_update</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.fast_geometry_update.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.fast_geometry_update.links heading=4-%}
    </p>
    <h3>texture_cache_size</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 4000
      <p class="scene-class-comments">Size is in mb and this is the maximum cache size</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.texture_cache_size.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.texture_cache_size.links heading=4-%}
    </p>
    <h3>texture_file_handles</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 24000
      <p class="scene-class-comments">Maximum number of simultaneous open file handles</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.texture_file_handles.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.texture_file_handles.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Camera and Layer attributes</summary>
  <p>
    <h3>camera</h3>
    <p class="scene-class-type">
      <b>Camera</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.camera.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.camera.links heading=4-%}
    </p>
    <h3>dicing_camera</h3>
    <p class="scene-class-type">
      <b>Camera</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.dicing_camera.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.dicing_camera.links heading=4-%}
    </p>
    <h3>layer</h3>
    <p class="scene-class-type">
      <b>Layer</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.layer.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.layer.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Checkpoint attributes</summary>
  <p>
    <h3>checkpoint_active</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_active.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_active.links heading=4-%}
    </p>
    <h3>checkpoint_bg_write</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">If true, the checkpoint file write is written in a background thread that runs in parallel with the mcrt threads. otherwise, all mcrt threads wait while the checkpoint file is written.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_bg_write.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_bg_write.links heading=4-%}
    </p>
    <h3>checkpoint_interval</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 15.0
      <p class="scene-class-comments">Length of time, in minutes, between checkpoint file writes. time must be greater or equal to 0.1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_interval.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_interval.links heading=4-%}
    </p>
    <h3>checkpoint_max_bgcache</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 2
      <p class="scene-class-comments">Specify the maximum number of queued checkpoint images that the checkpoint-writing background thread can handle. the value of checkpoint_max_bgcache must be greater than or equal to 1. once this number is exceeded, the mcrt threads are suspended while background images are written to create room in the queue. a larger number can robustly support background writing even with short checkpoint intervals at the expense of memory. a value of 2 is best for most cases.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_max_bgcache.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_max_bgcache.links heading=4-%}
    </p>
    <h3>checkpoint_max_snapshot_overhead</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Specify max fraction of snapshot overhead threshold for extra snapshot action regarding unexpected interruption by sigint. this value is fraction. if this value is zero or negative, no extra snapshot action is executed and no checkpoint file is generated when sigint is received.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_max_snapshot_overhead.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_max_snapshot_overhead.links heading=4-%}
    </p>
    <h3>checkpoint_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;time&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;quality&rdquo;<br>
      <p class="scene-class-comments">Select whether checkpoint images are written depending on time elapsed or on quality reached.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_mode.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_mode.links heading=4-%}
    </p>
    <h3>checkpoint_overwrite</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">If true, the last checkpoint file is overwritten when writing out the checkpoint file. if false, the checkpoint filename is appended with the total number of samples, resulting in the retention of all checkpoint files.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_overwrite.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_overwrite.links heading=4-%}
    </p>
    <h3>checkpoint_post_script</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">This defines the file name of a lua script executed after every checkpoint file has been written, which is run in parallel with the ongoing mcrt threads. see further documentation for moonray-provided lua variables accessible within the script.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_post_script.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_post_script.links heading=4-%}
    </p>
    <h3>checkpoint_quality_steps</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 2
      <p class="scene-class-comments">Steps of quality, internal sampling iteration count, between checkpoint file writes. value should be equal or bigger than 1. uniform sampling case, this steps number is equivalent as each pixel's pixel sampling steps. if you set quality steps=2, checkpoint file is created at every timing of each pixel's sample count exceeds at 2, 4, 6, 8, 10, ... adaptive sampling case, this steps number is equivalent as internal adaptive sampling iteration steps. recommended number is 1~3 range. you can use more than 4 but bigger number always require longer rendering time. if you set 2, checkpoint file is created after finish every 2 adaptive sampling iteration execution.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_quality_steps.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_quality_steps.links heading=4-%}
    </p>
    <h3>checkpoint_sample_cap</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 0
      <p class="scene-class-comments">When total pixel sample count exceeds this value at every pixel (if you set 1024, each pixel exceeds 1024, then try to finish), the render will finish after the next checkpoint write. disabled sample cap feature when set to 0.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_sample_cap.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_sample_cap.links heading=4-%}
    </p>
    <h3>checkpoint_snapshot_interval</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Interval of time in minutes, about snapshot refreshment regarding interruption by sigint. unit is minute. if this value is zero or negative, checkpoint_max_snapshot_overhead parameter is used instead.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_snapshot_interval.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_snapshot_interval.links heading=4-%}
    </p>
    <h3>checkpoint_start_sample</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 1
      <p class="scene-class-comments">Specify samples per pixel (spp) number. checkpoint file is created when all pixel's spp are same or bigger than this number. until then, checkpoint file is not created.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_start_sample.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_start_sample.links heading=4-%}
    </p>
    <h3>checkpoint_time_cap</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">When total render process time exceeds this value, in minutes, the render will finish after the next checkpoint write. disabled time cap feature when set to 0.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_time_cap.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_time_cap.links heading=4-%}
    </p>
    <h3>checkpoint_total_files</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 0
      <p class="scene-class-comments">Specify total number of checkpoint files for quality based checkpoint mode.this variable is a substitute parameter of checkpoint_quality_steps.if this value is 0 (= default), the checkpoint generation interval is controlled by checkpoint_quality_steps variable. if this value is 1 or bigger, checkpoint generation interval is calculated based on this value and the renderer tries to generate a user defined number of checkpoint files automatically.this option respects the checkpoint_start_sample variable.in some cases, the renderer might not create the requested checkpoint_total_files due to current limitation of internal implementation or user specified bigger than 1 for checkpoint_start_sample variable. however even in that case, the renderer tries to create the closest number of total checkpoint files which user defined number as checkpoint_total_files.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_total_files.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_total_files.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Debug attributes</summary>
  <p>
    <h3>debug_console</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: -1
      <p class="scene-class-comments">Specify port number for debug console. if you set -1 (=default), all debug console functionalities are disabled. if you set 0 or positive port number, debug console functionalities are enabled. if enabled, we can send commands via telnet connection and control rendering behavior for debugging purposes. if you set 0, the kernel finds the available port for you and displays the port number to the cerr. otherwise you have to set the available port number yourself.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug_console.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug_console.links heading=4-%}
    </p>
    <h3>debug_pixel</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug_pixel.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug_pixel.links heading=4-%}
    </p>
    <h3>debug_rays_depth_range</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug_rays_depth_range.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug_rays_depth_range.links heading=4-%}
    </p>
    <h3>debug_rays_file</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug_rays_file.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug_rays_file.links heading=4-%}
    </p>
    <h3>debug_rays_primary_range</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug_rays_primary_range.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug_rays_primary_range.links heading=4-%}
    </p>
    <h3>validate_geometry</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Checks geometry for bad data</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.validate_geometry.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.validate_geometry.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Deep Images attributes</summary>
  <p>
    <h3>deep_curvature_tolerance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 45.0
      <p class="scene-class-comments">Maximum curvature (in degrees) of the deep surface within a pixel before it is split</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_curvature_tolerance.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_curvature_tolerance.links heading=4-%}
    </p>
    <h3>deep_format</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;openexr2.0&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;opendcx2.0&rdquo; (default)<br>
      <p class="scene-class-comments">Deep image format:<br>&emsp;&emsp;openexr2.0: vanilla openexr deep<br>&emsp;&emsp;opendcx2.0: dcx abuffer mask encoding</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_format.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_format.links heading=4-%}
    </p>
    <h3>deep_id_attribute_names</h3>
    <p class="scene-class-type">
      <b>StringVector</b>
      <br>
      default: []
      <p class="scene-class-comments">Names of primitive attributes containing deep ids</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_id_attribute_names.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_id_attribute_names.links heading=4-%}
    </p>
    <h3>deep_layer_bias</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.10000000149
      <p class="scene-class-comments">Minimum distance between deep layers</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_layer_bias.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_layer_bias.links heading=4-%}
    </p>
    <h3>deep_max_layers</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 1
      <p class="scene-class-comments">Maximum number of depth layers to output</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_max_layers.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_max_layers.links heading=4-%}
    </p>
    <h3>deep_vol_compression_res</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 10
      <p class="scene-class-comments">Volume opacity compression resolution.  lower values gives higher compression.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_vol_compression_res.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_vol_compression_res.links heading=4-%}
    </p>
    <h3>deep_z_tolerance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 2.0
      <p class="scene-class-comments">Maximum range of the deep surface's z values within a pixel before it is split</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_z_tolerance.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_z_tolerance.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Driver attributes</summary>
  <p>
    <h3>interactive_mode</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.interactive_mode.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.interactive_mode.links heading=4-%}
    </p>
    <h3>machine_id</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: -1
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.machine_id.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.machine_id.links heading=4-%}
    </p>
    <h3>num_machines</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: -1
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.num_machines.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.num_machines.links heading=4-%}
    </p>
    <h3>output_file</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: scene.exr
      <p class="scene-class-comments">This specifies the output path for the beauty image (rgba). this is independent of the aov renderoutputs, which can also write a beauty image.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.output_file.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.output_file.links heading=4-%}
    </p>
    <h3>progressive_shading</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.progressive_shading.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.progressive_shading.links heading=4-%}
    </p>
    <h3>task_distribution_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;non-overlapped tile&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;multiplex pixel&rdquo; (default)<br>
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.task_distribution_type.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.task_distribution_type.links heading=4-%}
    </p>
    <h3>threads</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.threads.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.threads.links heading=4-%}
    </p>
    <h3>tmp_dir</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Define temporary directory name for temporary file generation. use $tmpdir environment variable value if this variable is empty.if $tmpdir is also empty, use /tmp</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.tmp_dir.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.tmp_dir.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Filtering attributes</summary>
  <p>
    <h3>pixel_filter</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;box&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;cubic b-spline&rdquo; (default)<br>
          &nbsp;&nbsp;2 = &ldquo;quadratic b-spline&rdquo;<br>
      <p class="scene-class-comments">The type of filter used for filter importance sampling. a box filter with a width of 1 is analogous to disabling pixel filtering.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.pixel_filter.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.pixel_filter.links heading=4-%}
    </p>
    <h3>pixel_filter_width</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 3.0
      <p class="scene-class-comments">The overall extents, in pixels, of the pixel filter. larger values will result in softer images.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.pixel_filter_width.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.pixel_filter_width.links heading=4-%}
    </p>
    <h3>texture_blur</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.texture_blur.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.texture_blur.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Fireflies Removal attributes</summary>
  <p>
    <h3>roughness_clamping_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Clamp material roughness along paths. a value of 1 clamps values to the maximum roughness encountered, while lower values temper the clamping value. 0 disables the effect. using this technique reduces fireflies from indirect caustics but is biased.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.roughness_clamping_factor.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.roughness_clamping_factor.links heading=4-%}
    </p>
    <h3>sample_clamping_depth</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 1
      <p class="scene-class-comments">Clamp sample values only after the given non-specular ray depth.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.sample_clamping_depth.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.sample_clamping_depth.links heading=4-%}
    </p>
    <h3>sample_clamping_value</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 10.0
      <p class="scene-class-comments">Clamp sample radiance values to this maximum value (the feature is disabled if the value is 0.0). using this technique reduces fireflies, but is biased.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.sample_clamping_value.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.sample_clamping_value.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Frame attributes</summary>
  <p>
    <h3>frame</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.frame.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.frame.links heading=4-%}
    </p>
    <h3>max_frame</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_frame.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_frame.links heading=4-%}
    </p>
    <h3>min_frame</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.min_frame.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.min_frame.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Global Toggles attributes</summary>
  <p>
    <h3>enable_displacement</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_displacement.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_displacement.links heading=4-%}
    </p>
    <h3>enable_dof</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_dof.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_dof.links heading=4-%}
    </p>
    <h3>enable_max_geometry_resolution</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_max_geometry_resolution.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_max_geometry_resolution.links heading=4-%}
    </p>
    <h3>enable_motion_blur</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_motion_blur.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_motion_blur.links heading=4-%}
    </p>
    <h3>enable_presence_shadows</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_presence_shadows.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_presence_shadows.links heading=4-%}
    </p>
    <h3>enable_shadowing</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_shadowing.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_shadowing.links heading=4-%}
    </p>
    <h3>enable_subsurface_scattering</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_subsurface_scattering.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_subsurface_scattering.links heading=4-%}
    </p>
    <h3>lights_visible_in_camera</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.lights_visible_in_camera.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.lights_visible_in_camera.links heading=4-%}
    </p>
    <h3>max_geometry_resolution</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 2147483647
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_geometry_resolution.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_geometry_resolution.links heading=4-%}
    </p>
    <h3>propagate_visibility_bounce_type</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Turns on/off propagation for ray visibility masks</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.propagate_visibility_bounce_type.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.propagate_visibility_bounce_type.links heading=4-%}
    </p>
    <h3>shadow_terminator_fix</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;Off&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;On&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;On (Sine Compensation Alternative)&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;On (GGX Compensation Alternative)&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;On (Cosine Compensation Alternative&rdquo;<br>
      <p class="scene-class-comments">Attempt to soften hard shadow terminator boundaries due to shading/geometric normal deviations.  "on uses a custom terminator softening method. cosine compensation" is chiang's 2019 siggraph technique.  "ggx" is estevez's raytracing gems technique.  "sine compensation" is a sine based modification of chiang's method. different scenes may work better with different techniques.  the recommendation is to start with the custom compensation on, then sine compensation technique, then ggx, then cosine.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.shadow_terminator_fix.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.shadow_terminator_fix.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Image Size attributes</summary>
  <p>
    <h3>aperture_window</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: []
      <p class="scene-class-comments">The window of the camera aperture. overrides image_width and image_height. ordered as xmin, ymin, xmax, and ymax, with origin at the bottom-left.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.aperture_window.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.aperture_window.links heading=4-%}
    </p>
    <h3>image_height</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 1080
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.image_height.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.image_height.links heading=4-%}
    </p>
    <h3>image_width</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 1920
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.image_width.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.image_width.links heading=4-%}
    </p>
    <h3>region_window</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: []
      <p class="scene-class-comments">Window that is rendered. overrides image width / height (and overrides aperture window override). order: xmin ymin xmax ymax, with origin at left bottom.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.region_window.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.region_window.links heading=4-%}
    </p>
    <h3>res</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.res.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.res.links heading=4-%}
    </p>
    <h3>sub_viewport</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: []
      <p class="scene-class-comments">Subviewport of region window. coordinate (0,0) maps to left, bottom of region window</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.sub_viewport.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.sub_viewport.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Logging attributes</summary>
  <p>
    <h3>athena_debug</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.athena_debug.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.athena_debug.links heading=4-%}
    </p>
    <h3>debug</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug.links heading=4-%}
    </p>
    <h3>error</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.error.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.error.links heading=4-%}
    </p>
    <h3>fatal_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 0, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.fatal_color.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.fatal_color.links heading=4-%}
    </p>
    <h3>info</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.info.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.info.links heading=4-%}
    </p>
    <h3>stats_file</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.stats_file.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.stats_file.links heading=4-%}
    </p>
    <h3>warning</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.warning.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.warning.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Metadata attributes</summary>
  <p>
    <h3>exr_header_attributes</h3>
    <p class="scene-class-type">
      <b>Metadata</b>
      <br>
      default: None
      <p class="scene-class-comments">Metadata that is passed directly to the exr header. format: {"name", "type", "value"}</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.exr_header_attributes.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.exr_header_attributes.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Motion and Scale attributes</summary>
  <p>
    <h3>motion_steps</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      <br>
      default: []
      <p class="scene-class-comments">Frame-relative time offsets for motion sampling</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.motion_steps.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.motion_steps.links heading=4-%}
    </p>
    <h3>scene_scale</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.00999999977648
      <p class="scene-class-comments">(in meters): one unit in world space = 'scene scale' meters</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.scene_scale.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.scene_scale.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Path Guide attributes</summary>
  <p>
    <h3>path_guide_enable</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Turn on path guiding to handle difficult light transport problems (e.g. caustics) at the cost of increased memory</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.path_guide_enable.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.path_guide_enable.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Resume Render attributes</summary>
  <p>
    <h3>on_resume_script</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Define on-resume lua script name. this script is loaded into the renderer just after renderprep execution under resume render mode then executed. this script is not executed if non-resume render mode even if you set script name.renderer sets some lua global variables and lua script can access them. we can get resume render start condition (true=properly started or false=failed to start as resume render and fall back to normal rendering) via lua global variable. see details in rendering-wiki checkpoint/resume page. if empty, on-resume script execution is disabled.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.on_resume_script.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.on_resume_script.links heading=4-%}
    </p>
    <h3>resumable_output</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Make aov output as resumable for resume render</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.resumable_output.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.resumable_output.links heading=4-%}
    </p>
    <h3>resume_render</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Resuming render process</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.resume_render.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.resume_render.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Sampling attributes</summary>
  <p>
    <h3>bsdf_sampler_strategy</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;multi-sample&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;one-sample&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;one-lobe&rdquo;<br>
      <p class="scene-class-comments">Indirect sampling and evaluation strategy: all lobes using one path segment per lobe (multi-sample), all lobes using one shared path segment (one-sample), or one lobe.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.bsdf_sampler_strategy.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.bsdf_sampler_strategy.links heading=4-%}
    </p>
    <h3>bsdf_samples</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 2
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.bsdf_samples.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.bsdf_samples.links heading=4-%}
    </p>
    <h3>bssrdf_samples</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 2
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.bssrdf_samples.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.bssrdf_samples.links heading=4-%}
    </p>
    <h3>disable_optimized_hair_sampling</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Forces all hair materials to sample each hair bsdf lobe independently. this will enable the lpe label syntax for 'hair r', 'hair tt', 'hair trt' and 'hair trrt ' but will result in slower rendering</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.disable_optimized_hair_sampling.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.disable_optimized_hair_sampling.links heading=4-%}
    </p>
    <h3>light_samples</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 2
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.light_samples.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.light_samples.links heading=4-%}
    </p>
    <h3>lock_frame_noise</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.lock_frame_noise.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.lock_frame_noise.links heading=4-%}
    </p>
    <h3>max_depth</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 5
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_depth.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_depth.links heading=4-%}
    </p>
    <h3>max_diffuse_depth</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 2
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_diffuse_depth.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_diffuse_depth.links heading=4-%}
    </p>
    <h3>max_glossy_depth</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 2
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_glossy_depth.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_glossy_depth.links heading=4-%}
    </p>
    <h3>max_hair_depth</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 5
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_hair_depth.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_hair_depth.links heading=4-%}
    </p>
    <h3>max_mirror_depth</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 3
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_mirror_depth.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_mirror_depth.links heading=4-%}
    </p>
    <h3>max_presence_depth</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 16
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_presence_depth.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_presence_depth.links heading=4-%}
    </p>
    <h3>max_subsurface_per_path</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 1
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_subsurface_per_path.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_subsurface_per_path.links heading=4-%}
    </p>
    <h3>pixel_samples</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 8
      <p class="scene-class-comments">The square root of the number of primary samples taken for each pixel in uniform sampling mode. for example, a value of 4 will result in 4*4 = 16 uniform pixel samples.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.pixel_samples.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.pixel_samples.links heading=4-%}
    </p>
    <h3>presence_threshold</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.999000012875
      <p class="scene-class-comments">Defines at which point the accumulated presence can be considered as opaque, skipping generation of presence continuation rays.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.presence_threshold.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.presence_threshold.links heading=4-%}
    </p>
    <h3>russian_roulette_threshold</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0375000014901
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.russian_roulette_threshold.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.russian_roulette_threshold.links heading=4-%}
    </p>
    <h3>transparency_threshold</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Defines at which point the accumulated opacity can be considered as opaque, skipping generation of new transparency rays.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.transparency_threshold.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.transparency_threshold.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Volumes attributes</summary>
  <p>
    <h3>max_volume_depth</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 1
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_volume_depth.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_volume_depth.links heading=4-%}
    </p>
    <h3>volume_attenuation_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.649999976158
      <p class="scene-class-comments">Controls how volume attenuation gets exponentially scaled down when rendering multiple scattering volumes. dialing down the value generally results in more translucent look. this variable is only effective when "max volume depth" is greater than 1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_attenuation_factor.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_attenuation_factor.links heading=4-%}
    </p>
    <h3>volume_contribution_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.649999976158
      <p class="scene-class-comments">Controls how scattering contribution gets exponentially scaled down when rendering multiple scattering volumes. dialing down the value generally results in a darker volume scattering look. this variable is only effective when "max volume depth" is greater than 1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_contribution_factor.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_contribution_factor.links heading=4-%}
    </p>
    <h3>volume_illumination_samples</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 4
      <p class="scene-class-comments">Sample number along the ray when computing volume scattering radiance towards the eye. set to 0 to turn off volume lighting completely.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_illumination_samples.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_illumination_samples.links heading=4-%}
    </p>
    <h3>volume_opacity_threshold</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.995000004768
      <p class="scene-class-comments">As a ray travels through volume regions, it will accumulate the amount of opacity. when the value exceeds volume opacity threshold the renderer will stop the further volume integration along this ray.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_opacity_threshold.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_opacity_threshold.links heading=4-%}
    </p>
    <h3>volume_overlap_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;sum&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;max&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;rnd&rdquo;<br>
      <p class="scene-class-comments">Selects how to handle contributions from overlapping volumes:<br>&emsp;&emsp;sum: add contributions from all volumes<br>&emsp;&emsp;max: only consider maximum volume based on extinction<br>&emsp;&emsp;rnd: randomly choose one value weighted by extinction<br>&emsp;&emsp;warning: light linking does not work correctly in sum mode.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_overlap_mode.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_overlap_mode.links heading=4-%}
    </p>
    <h3>volume_phase_attenuation_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.5
      <p class="scene-class-comments">Controls how phase function (anisotropy) gets exponentially scaled down when rendering multiple scattering volumes. this variable is only effective when "max volume depth" is greater than 1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_phase_attenuation_factor.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_phase_attenuation_factor.links heading=4-%}
    </p>
    <h3>volume_quality</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.5
      <p class="scene-class-comments">Controls the overall quality of volume rendering. the higher number gives better volume shape detail and more accurate scattering integration result.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_quality.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_quality.links heading=4-%}
    </p>
    <h3>volume_shadow_quality</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Controls the quality of volume shadow (transmittance). the higher number gives more accurate volume shadow.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_shadow_quality.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_shadow_quality.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>batch_tile_order</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;top&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;bottom&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;left&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;right&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;morton&rdquo; (default)<br>
          &nbsp;&nbsp;5 = &ldquo;random&rdquo;<br>
          &nbsp;&nbsp;6 = &ldquo;spiral square&rdquo;<br>
          &nbsp;&nbsp;7 = &ldquo;spiral rect&rdquo;<br>
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.batch_tile_order.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.batch_tile_order.links heading=4-%}
    </p>
    <h3>checkpoint_tile_order</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;top&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;bottom&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;left&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;right&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;morton&rdquo; (default)<br>
          &nbsp;&nbsp;5 = &ldquo;random&rdquo;<br>
          &nbsp;&nbsp;6 = &ldquo;spiral square&rdquo;<br>
          &nbsp;&nbsp;7 = &ldquo;spiral rect&rdquo;<br>
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_tile_order.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_tile_order.links heading=4-%}
    </p>
    <h3>fps</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 24.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.fps.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.fps.links heading=4-%}
    </p>
    <h3>max_adaptive_samples</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 4096
      <p class="scene-class-comments">When adaptive sampling is turned on, this represents the max number of samples we can throw at a pixel. it's best to err on the high side since adaptive sampling will cull out samples where they're not needed based on the target adaptive error, in which case we should rarely hit the max samples value.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_adaptive_samples.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_adaptive_samples.links heading=4-%}
    </p>
    <h3>min_adaptive_samples</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 16
      <p class="scene-class-comments">When adaptive sampling is turned on, it's possible that a tile may be mis-classified as having converged before it has actually converged. this manifests itself as square 8x8 artifacts in the final image. the higher this value, the less the chance of this happening.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.min_adaptive_samples.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.min_adaptive_samples.links heading=4-%}
    </p>
    <h3>progressive_tile_order</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;top&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;bottom&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;left&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;right&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;morton&rdquo; (default)<br>
          &nbsp;&nbsp;5 = &ldquo;random&rdquo;<br>
          &nbsp;&nbsp;6 = &ldquo;spiral square&rdquo;<br>
          &nbsp;&nbsp;7 = &ldquo;spiral rect&rdquo;<br>
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.progressive_tile_order.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.progressive_tile_order.links heading=4-%}
    </p>
    <h3>sampling_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;uniform&rdquo; (default)<br>
          &nbsp;&nbsp;2 = &ldquo;adaptive&rdquo;<br>
      <p class="scene-class-comments">Controls which sampling scheme to use: uniform or adaptive.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.sampling_mode.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.sampling_mode.links heading=4-%}
    </p>
    <h3>target_adaptive_error</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 10.0
      <p class="scene-class-comments">When adaptive sampling is turned on, this represents the desired quality of the output images. lower values will give higher quality but take longer to render. higher values will give lower quality but render quicker.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.target_adaptive_error.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.target_adaptive_error.links heading=4-%}
    </p>
    <h3>two_stage_output</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Selection of image file write uses two stage output logic or not. two stage output (=true: default) is that the image file is written out to temporary file location first and copy/rename next. this solution greatly reduces the risk of output data collapsing from unexpected render process termination for both of final output and checkpoint output. temporary file directory is defined by tmp_dir scene_variable.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.two_stage_output.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.two_stage_output.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}