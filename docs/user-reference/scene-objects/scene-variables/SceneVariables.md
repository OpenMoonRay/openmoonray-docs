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
      <p class="scene-class-comments">If this flag is off, the tessellation related data for subdivision surface will be deleted after tessellation is done. This is to save memory for single frame rendering. Otherwise, that data will be kept in memory to support re-tessellation after geometry are updated.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.fast_geometry_update.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.fast_geometry_update.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.fast_geometry_update.links heading=4-%}
    </p>
    <h3>texture_cache_size</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 4000
      <p class="scene-class-comments">Specifies the maximum size of the texture cache in megabytes. This value can significantly impact rendering speed, where larger values often improve rendering speed.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.texture_cache_size.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.texture_cache_size.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.texture_cache_size.links heading=4-%}
    </p>
    <h3>texture_file_handles</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 24000
      <p class="scene-class-comments">Specifies the maximum number of simultaneous open texture file handles.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.texture_file_handles.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.texture_file_handles.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
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
      <p class="scene-class-comments">This specifies the camera object used for rendering. If no camera is specified in the scene variables, MoonRay will render using the first camera object encountered.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.camera.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.camera.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.camera.links heading=4-%}
    </p>
    <h3>dicing_camera</h3>
    <p class="scene-class-type">
      <b>Camera</b>
      <br>
      default: None
      <p class="scene-class-comments">This attribute specifies a camera to use for adaptive geometry tessellation. The rendering camera is used if no camera is specified.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.dicing_camera.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.dicing_camera.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.dicing_camera.links heading=4-%}
    </p>
    <h3>layer</h3>
    <p class="scene-class-type">
      <b>Layer</b>
      <br>
      default: None
      <p class="scene-class-comments">This specifies the layer object used for rendering. If no layer is specified in the scene variables, MoonRay will rendering using the first layer object encountered.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.layer.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.layer.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
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
      <p class="scene-class-comments">Enables or disables checkpoint file writing.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_active.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_active.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_active.links heading=4-%}
    </p>
    <h3>checkpoint_bg_write</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">When set to true, checkpoint file writes occur in a background thread that runs concurrently with the MCRT threads. Otherwise, all MCRT threads must wait while the checkpoint file is written.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_bg_write.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_bg_write.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_bg_write.links heading=4-%}
    </p>
    <h3>checkpoint_interval</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 15.0
      <p class="scene-class-comments">Specifies the time interval, in minutes, between checkpoint file writes. The interval must be equal to or greater than 0.1 minutes.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_interval.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_interval.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_interval.links heading=4-%}
    </p>
    <h3>checkpoint_max_bgcache</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 2
      <p class="scene-class-comments">Specifies the maximum number of queued checkpoint images the checkpoint-writing background thread can handle. The value of checkpoint_max_bgcache must be greater than or equal to 1. If the number of queued checkpoint images exceeds this limit, MCRT threads will be temporarily suspended while background images are written to make room in the queue. A larger value can support background writing even with short checkpoint intervals, but it may require more memory. A value of 2 is recommended for most cases.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_max_bgcache.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_max_bgcache.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_max_bgcache.links heading=4-%}
    </p>
    <h3>checkpoint_max_snapshot_overhead</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Specifies the maximum fraction of the snapshot overhead threshold for an extra snapshot action in the event of an unexpected interruption by SIGINT. The value is expressed as a fraction. If the value is set to zero or a negative number, no extra snapshot action will be executed, and no checkpoint file will be generated if SIGINT is received.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_max_snapshot_overhead.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_max_snapshot_overhead.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_max_snapshot_overhead.links heading=4-%}
    </p>
    <h3>checkpoint_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;time&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;quality&rdquo;<br>
      <p class="scene-class-comments">Allows you to choose whether checkpoint images are written based on time elapsed or on quality reached.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_mode.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_mode.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_mode.links heading=4-%}
    </p>
    <h3>checkpoint_overwrite</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">When set to true, the last checkpoint file will be overwritten when writing out the new checkpoint file. If set to false, the checkpoint filename will be appended with the total number of samples, which will result in the retention of all checkpoint files.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_overwrite.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_overwrite.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_overwrite.links heading=4-%}
    </p>
    <h3>checkpoint_post_script</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Specifies the filename of a Lua script that will be executed after every checkpoint file is written. The script will run concurrently with the ongoing MCRT threads. For more information, refer to the documentation for MoonRay-provided Lua variables accessible within the script.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_post_script.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_post_script.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_post_script.links heading=4-%}
    </p>
    <h3>checkpoint_quality_steps</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 2
      <p class="scene-class-comments">Specifies the number of quality steps, which refers to the internal sampling iteration count between checkpoint file writes. The value must be equal to or greater than 1. In the case of uniform sampling, this number of steps is equivalent to the pixel sampling steps for each pixel. For example, if you set quality steps to 2, a checkpoint file will be created every time each pixel's sample count exceeds 2, 4, 6, 8, 10, and so on. In the case of adaptive sampling, this number of steps is equivalent to the internal adaptive sampling iteration steps. A recommended number falls within the range of 1 to 3. For example, if you set the value to 2, a checkpoint file will be created after finishing every 2 adaptive sampling passes. A larger value will conduct more rendering passes before writing a file.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_quality_steps.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_quality_steps.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_quality_steps.links heading=4-%}
    </p>
    <h3>checkpoint_sample_cap</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 0
      <p class="scene-class-comments">Causes the render to finish based on the total pixel sample count. For example, if the value is 1024, the render will end after the next checkpoint write when each pixel exceeds 1024 samples. If the value is set to 0, the sample cap feature is disabled.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_sample_cap.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_sample_cap.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_sample_cap.links heading=4-%}
    </p>
    <h3>checkpoint_snapshot_interval</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Specifies the time interval, in minutes, allowed for a snapshot when a SIGINT is encountered. If the value is 0 or negative, the checkpoint_max_snapshot_overhead parameter is used instead.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_snapshot_interval.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_snapshot_interval.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_snapshot_interval.links heading=4-%}
    </p>
    <h3>checkpoint_start_sample</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 1
      <p class="scene-class-comments">Specifies the samples per pixel (SPP). A checkpoint file is created when all pixels' SPP are greater than or equal to this number. A checkpoint file is created once this criterion is met.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_start_sample.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_start_sample.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_start_sample.links heading=4-%}
    </p>
    <h3>checkpoint_time_cap</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Determines when the render will finish based on the total render process time in minutes. If the value is exceeded, the render will finish after the next checkpoint write. If the value is set to 0, the time cap feature is disabled.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_time_cap.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_time_cap.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_time_cap.links heading=4-%}
    </p>
    <h3>checkpoint_total_files</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 0
      <p class="scene-class-comments">This variable specifies the total number of checkpoint files for the quality-based checkpoint mode. It serves as a substitute parameter for checkpoint_quality_steps. If the value is set to 0 (the default), the interval at which checkpoints are generated is controlled by the checkpoint_quality_steps variable. If the value is set to 1 or higher, the renderer will attempt to automatically generate a user-defined number of checkpoint files based on this value. This option takes into account the checkpoint_start_sample variable.<br><br>In some cases, the renderer may be unable to create the requested number of checkpoint_total_files due to limitations in the internal implementation or because the user has specified a value greater than 1 for the checkpoint_start_sample variable. However, in these cases, the renderer will attempt to generate the closest possible number of checkpoint files to the user-defined value.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_total_files.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_total_files.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
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
      <p class="scene-class-comments">Specifies the port number for the debug console. When the debug console functionalities are enabled, you can use a telnet connection to send commands and control rendering behavior for debugging purposes.<br>- A value of -1 disables all debug console functionality.<br>- A positive value specifies a specific port number.<br>- If you set the port number to 0, the kernel will find an available port for you and display the port number to stderr.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug_console.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug_console.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug_console.links heading=4-%}
    </p>
    <h3>debug_pixel</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">Allows for rendering a single pixel and is typically used for debugging. The value given specifies the 2D pixel coordinate expressed from the bottom-left of the frame-viewport</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug_pixel.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug_pixel.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug_pixel.links heading=4-%}
    </p>
    <h3>debug_rays_depth_range</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">Deprecated.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug_rays_depth_range.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug_rays_depth_range.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug_rays_depth_range.links heading=4-%}
    </p>
    <h3>debug_rays_file</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Deprecated.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug_rays_file.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug_rays_file.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug_rays_file.links heading=4-%}
    </p>
    <h3>debug_rays_primary_range</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">Deprecated.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug_rays_primary_range.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug_rays_primary_range.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.debug_rays_primary_range.links heading=4-%}
    </p>
    <h3>validate_geometry</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Checks geometry for bad data</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.validate_geometry.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.validate_geometry.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
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
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_curvature_tolerance.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_curvature_tolerance.links heading=4-%}
    </p>
    <h3>deep_format</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;openexr2.0&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;opendcx2.0&rdquo; (default)<br>
      <p class="scene-class-comments">Deep image format:<br>&emsp;&emsp;openexr2.0: vanilla OpenEXR deep<br>&emsp;&emsp;opendcx2.0: DCX abuffer mask encoding</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_format.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_format.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_format.links heading=4-%}
    </p>
    <h3>deep_id_attribute_names</h3>
    <p class="scene-class-type">
      <b>StringVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">Names of primitive attributes containing deep IDs</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_id_attribute_names.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_id_attribute_names.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_id_attribute_names.links heading=4-%}
    </p>
    <h3>deep_vol_compression_res</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 10
      <p class="scene-class-comments">Volume opacity compression resolution.  Lower values gives higher compression.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_vol_compression_res.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_vol_compression_res.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_vol_compression_res.links heading=4-%}
    </p>
    <h3>deep_z_tolerance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 2.0
      <p class="scene-class-comments">Maximum range of the deep surface's Z values within a pixel before it is split</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_z_tolerance.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_z_tolerance.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.deep_z_tolerance.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Driver attributes</summary>
  <p>
    <h3>machine_id</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: -1
      <p class="scene-class-comments">Used only in arras moonray context, automatically set by arras and indicates the MCRT computation ID in the current session</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.machine_id.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.machine_id.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.machine_id.links heading=4-%}
    </p>
    <h3>num_machines</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: -1
      <p class="scene-class-comments">Used only in arras moonray context, automatically set by arras and indicates total number of MCRT computations active in the current session</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.num_machines.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.num_machines.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.num_machines.links heading=4-%}
    </p>
    <h3>output_file</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: scene.exr
      <p class="scene-class-comments">This specifies the output path for the beauty image (RGBA). This is independent of the AOV RenderOutputs, which can also write a beauty image.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.output_file.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.output_file.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.output_file.links heading=4-%}
    </p>
    <h3>task_distribution_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;non-overlapped tile&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;multiplex pixel&rdquo; (default)<br>
      <p class="scene-class-comments">Used only in arras moonray context, defines the task distribution method to the MCRT computation. Multi-plex pixel is the default and preferred method. Non-overlapped tile is experimental and only used for debugging/development purposes</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.task_distribution_type.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.task_distribution_type.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.task_distribution_type.links heading=4-%}
    </p>
    <h3>tmp_dir</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Define temporary directory name for temporary file generation. Use $TMPDIR environment variable value if this variable is empty.If $TMPDIR is also empty, use /tmp</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.tmp_dir.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.tmp_dir.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
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
      <p class="scene-class-comments">The type of filter used for filter importance sampling. A box filter with a width of 1 is analogous to disabling pixel filtering.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.pixel_filter.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.pixel_filter.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.pixel_filter.links heading=4-%}
    </p>
    <h3>pixel_filter_width</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 3.0
      <p class="scene-class-comments">The overall extents, in pixels, of the pixel filter. Larger values will result in softer images.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.pixel_filter_width.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.pixel_filter_width.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.pixel_filter_width.links heading=4-%}
    </p>
    <h3>texture_blur</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Adjusts the amount of texture filtering.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.texture_blur.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.texture_blur.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
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
      <p class="scene-class-comments">Clamp material roughness along paths. A value of 1 clamps values to the maximum roughness encountered, while lower values temper the clamping value. 0 disables the effect. Using this technique reduces fireflies from indirect caustics but is biased.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.roughness_clamping_factor.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.roughness_clamping_factor.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.roughness_clamping_factor.links heading=4-%}
    </p>
    <h3>sample_clamping_depth</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 1
      <p class="scene-class-comments">Clamp sample values only after the given non-specular ray depth.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.sample_clamping_depth.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.sample_clamping_depth.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.sample_clamping_depth.links heading=4-%}
    </p>
    <h3>sample_clamping_value</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 10.0
      <p class="scene-class-comments">Clamp sample radiance values to this maximum value (the feature is disabled if the value is 0.0). Using this technique reduces fireflies, but is biased.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.sample_clamping_value.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.sample_clamping_value.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
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
      <p class="scene-class-comments">Used to provide unique samples per frame, and for selecting the frame for scenes with animated data.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.frame.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.frame.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.frame.links heading=4-%}
    </p>
    <h3>max_frame</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Used to provide unique samples per frame.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_frame.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_frame.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_frame.links heading=4-%}
    </p>
    <h3>min_frame</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Used to provide unique samples per frame.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.min_frame.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.min_frame.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.min_frame.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Global Toggles attributes</summary>
  <p>
    <h3>cryptomatte_multi_presence</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Determines whether to record presence bounces as separate cryptomatte samples.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.cryptomatte_multi_presence.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.cryptomatte_multi_presence.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.cryptomatte_multi_presence.links heading=4-%}
    </p>
    <h3>enable_displacement</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Enables or disables geometry displacement.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_displacement.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_displacement.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_displacement.links heading=4-%}
    </p>
    <h3>enable_dof</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Enables or disables camera depth-of-field (DOF)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_dof.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_dof.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_dof.links heading=4-%}
    </p>
    <h3>enable_max_geometry_resolution</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Specifies whether the max_geometry_resolution limit is in effect.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_max_geometry_resolution.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_max_geometry_resolution.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_max_geometry_resolution.links heading=4-%}
    </p>
    <h3>enable_motion_blur</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Enables or disables motion blur</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_motion_blur.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_motion_blur.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_motion_blur.links heading=4-%}
    </p>
    <h3>enable_presence_shadows</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Whether or not to respect a material's "presence" value for shadow rays. Performance may improve when disabled, but all materials are treated as fully present.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_presence_shadows.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_presence_shadows.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_presence_shadows.links heading=4-%}
    </p>
    <h3>enable_shadowing</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Enables or disables shadowing through occlusion rays.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_shadowing.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_shadowing.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_shadowing.links heading=4-%}
    </p>
    <h3>enable_subsurface_scattering</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Enables or disables sub-surface scattering.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_subsurface_scattering.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_subsurface_scattering.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.enable_subsurface_scattering.links heading=4-%}
    </p>
    <h3>lights_visible_in_camera</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Globally enables or disables lights being visible in camera. Each light has its own setting which may override this value.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.lights_visible_in_camera.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.lights_visible_in_camera.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.lights_visible_in_camera.links heading=4-%}
    </p>
    <h3>max_geometry_resolution</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 2147483647
      <p class="scene-class-comments">Specifies a global limit to geometry resolution. Geometry procedurals should respect this limit.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_geometry_resolution.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_geometry_resolution.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_geometry_resolution.links heading=4-%}
    </p>
    <h3>propagate_visibility_bounce_type</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">turns on/off propagation for ray visibility masks</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.propagate_visibility_bounce_type.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.propagate_visibility_bounce_type.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
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
      <p class="scene-class-comments">Attempt to soften hard shadow terminator boundaries due to shading/geometric normal deviations.  "ON uses a custom terminator softening method. Cosine Compensation" is Chiang's 2019 SIGGRAPH technique.  "GGX" is Estevez's raytracing gems technique.  "Sine Compensation" is a sine based modification of Chiang's method. Different scenes may work better with different techniques.  The recommendation is to start with the custom compensation ON, then sine compensation technique, then GGX, then cosine.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.shadow_terminator_fix.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.shadow_terminator_fix.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
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
      default: {}
      <p class="scene-class-comments">The window of the camera aperture. Overrides image_width and image_height. Ordered as xmin, ymin, xmax, and ymax, with origin at the bottom-left.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.aperture_window.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.aperture_window.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.aperture_window.links heading=4-%}
    </p>
    <h3>image_height</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 1080
      <p class="scene-class-comments">The desired height of the output image(s), in pixels.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.image_height.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.image_height.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.image_height.links heading=4-%}
    </p>
    <h3>image_width</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 1920
      <p class="scene-class-comments">The desired width of the output image(s), in pixels.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.image_width.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.image_width.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.image_width.links heading=4-%}
    </p>
    <h3>region_window</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">Window that is rendered. Overrides image width / height (and overrides aperture window override). Order: xmin ymin xmax ymax, with origin at left bottom.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.region_window.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.region_window.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.region_window.links heading=4-%}
    </p>
    <h3>res</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Final divisor for the overall image dimensions. A quick way to reduce or increase the size of the render. A value of 2 halves the size of the rendered image(s). A value of 0.5 doubles it.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.res.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.res.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.res.links heading=4-%}
    </p>
    <h3>sub_viewport</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">Subviewport of region window. Coordinate (0,0) maps to left, bottom of region window</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.sub_viewport.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.sub_viewport.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
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
      <p class="scene-class-comments">[DreamWorks Animation internal] Enables or disables sending logging results to the Athena debugging database instead of the production database.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.athena_debug.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.athena_debug.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.athena_debug.links heading=4-%}
    </p>
    <h3>fatal_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 0, 1 ]
      <p class="scene-class-comments">The color to use for materials or map shaders that are unable to execute shading, usually due to incomplete initialization.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.fatal_color.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.fatal_color.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.fatal_color.links heading=4-%}
    </p>
    <h3>log_debug</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Determines whether debugging-level messages are logged.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.log_debug.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.log_debug.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.log_debug.links heading=4-%}
    </p>
    <h3>log_info</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Determines whether information-level messages are logged.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.log_info.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.log_info.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.log_info.links heading=4-%}
    </p>
    <h3>stats_file</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">The filename to write the rendering statistics to in CSV format.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.stats_file.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.stats_file.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.stats_file.links heading=4-%}
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
      <p class="scene-class-comments">Metadata that is passed directly to the exr header. Format: {"name", "type", "value"}</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.exr_header_attributes.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.exr_header_attributes.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
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
      default: {}
      <p class="scene-class-comments">Frame-relative time offsets for motion sampling</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.motion_steps.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.motion_steps.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.motion_steps.links heading=4-%}
    </p>
    <h3>scene_scale</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.01
      <p class="scene-class-comments">(in meters): one unit in world space = 'scene scale' meters</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.scene_scale.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.scene_scale.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.scene_scale.links heading=4-%}
    </p>
    <h3>slerp_xforms</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">If use_rotation_motion_blur is false this will use slerp to interpolate the node_xform for motion blur</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.slerp_xforms.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.slerp_xforms.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.slerp_xforms.links heading=4-%}
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
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.path_guide_enable.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
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
      <p class="scene-class-comments">When using resumable rendering, the Lua script named here is executed after the render prep stage. In addition, MoonRay sets some Lua global variables the script can access. This functionality is disabled when the script name is empty or when not using resumable rendering. Please refer to the checkpoint/resume documentation for more details.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.on_resume_script.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.on_resume_script.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.on_resume_script.links heading=4-%}
    </p>
    <h3>resumable_output</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">make aov output as resumable for resume render</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.resumable_output.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.resumable_output.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.resumable_output.links heading=4-%}
    </p>
    <h3>resume_render</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">resuming render process</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.resume_render.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.resume_render.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.resume_render.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Sampling attributes</summary>
  <p>
    <h3>bsdf_samples</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 2
      <p class="scene-class-comments">The square root of the number of samples taken for BSDF lobe evaluations on the primary intersection. The number of samples taken per material depends on the BSDF sampler strategy and the number of lobes that comprise the material.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.bsdf_samples.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.bsdf_samples.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.bsdf_samples.links heading=4-%}
    </p>
    <h3>bssrdf_samples</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 2
      <p class="scene-class-comments">The square root of the number of samples taken to evaluate BSSRDF (subsurface scattering) contributions on the primary intersection.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.bssrdf_samples.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.bssrdf_samples.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.bssrdf_samples.links heading=4-%}
    </p>
    <h3>disable_optimized_hair_sampling</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Forces all hair materials to sample each hair BSDF lobe independently. This will enable the LPE label syntax for 'hair R', 'hair TT', 'hair TRT' and 'hair TRRT ' but will result in slower rendering</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.disable_optimized_hair_sampling.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.disable_optimized_hair_sampling.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.disable_optimized_hair_sampling.links heading=4-%}
    </p>
    <h3>light_samples</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 2
      <p class="scene-class-comments">The square root of the number of samples taken for each light on the primary intersection.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.light_samples.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.light_samples.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.light_samples.links heading=4-%}
    </p>
    <h3>lock_frame_noise</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">By default, the random number generators are seeded by considering the frame number. However, if lock_frame_noise is true, the same seed values are used for each frame, which is typically undesirable.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.lock_frame_noise.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.lock_frame_noise.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.lock_frame_noise.links heading=4-%}
    </p>
    <h3>max_depth</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 5
      <p class="scene-class-comments">The maximum ray depth (number of "bounces") for diffuse|glossy|mirror event types. This can be thought of as the global depth limit. Reducing this can improve performance at the cost of biasing the rendered image.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_depth.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_depth.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_depth.links heading=4-%}
    </p>
    <h3>max_diffuse_depth</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 2
      <p class="scene-class-comments">The maximum ray depth (number of "bounces") for diffuse event types. Reducing this can improve performance at the cost of biasing the rendered image. Note that this limit is also governed by the global "max depth" attribute.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_diffuse_depth.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_diffuse_depth.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_diffuse_depth.links heading=4-%}
    </p>
    <h3>max_glossy_depth</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 2
      <p class="scene-class-comments">The maximum ray depth (number of "bounces") for glossy event types. Reducing this can improve performance at the cost of biasing the rendered image. Note that this limit is also governed by the global "max depth" attribute.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_glossy_depth.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_glossy_depth.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_glossy_depth.links heading=4-%}
    </p>
    <h3>max_hair_depth</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 5
      <p class="scene-class-comments">The maximum ray depth (number of "bounces") for hair material types. This limit may need to be increased to allow for more hair-to-hair interactions, especially for blonde/white hair or fur. Reducing this can improve performance at the cost of biasing the rendered image. </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_hair_depth.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_hair_depth.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_hair_depth.links heading=4-%}
    </p>
    <h3>max_mirror_depth</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 3
      <p class="scene-class-comments">The maximum ray depth (number of "bounces") for mirror event types. Reducing this can improve performance at the cost of biasing the rendered image. Note that this limit is also governed by the global "max depth" attribute.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_mirror_depth.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_mirror_depth.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_mirror_depth.links heading=4-%}
    </p>
    <h3>max_presence_depth</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 16
      <p class="scene-class-comments">The maximum ray depth (number of "bounces") for presence event types. The material's "presence" attribute is ignored after this depth has been reached and the surface is treated as fully present. Reducing this can improve performance at the cost of biasing the rendered image.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_presence_depth.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_presence_depth.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_presence_depth.links heading=4-%}
    </p>
    <h3>max_subsurface_per_path</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 1
      <p class="scene-class-comments">The maximum ray depth (number of "bounces") to allow subsurface scattering. For ray depths beyond this limit Lambertian diffuse is used to approximate subsurface scattering.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_subsurface_per_path.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_subsurface_per_path.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_subsurface_per_path.links heading=4-%}
    </p>
    <h3>pixel_samples</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 8
      <p class="scene-class-comments">The square root of the number of primary samples taken for each pixel in uniform sampling mode. For example, a value of 4 will result in 4*4 = 16 uniform pixel samples.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.pixel_samples.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.pixel_samples.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.pixel_samples.links heading=4-%}
    </p>
    <h3>presence_threshold</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.999
      <p class="scene-class-comments">The presence threshold defines the point at which the accumulated presence can be considered opaque, skipping the generation of presence continuation rays.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.presence_threshold.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.presence_threshold.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.presence_threshold.links heading=4-%}
    </p>
    <h3>russian_roulette_threshold</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0375
      <p class="scene-class-comments">The Russian roulette threshold specifies the point at which point Russian roulette is evaluated for direct light sampling and BSDF continuation. The unit is luminance of the radiance.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.russian_roulette_threshold.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.russian_roulette_threshold.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.russian_roulette_threshold.links heading=4-%}
    </p>
    <h3>transparency_threshold</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">The transparency threshold defines the point at which the accumulated opacity can be considered opaque, skipping the generation of new transparency rays.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.transparency_threshold.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.transparency_threshold.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
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
      <p class="scene-class-comments">The maximum ray depth (number of "bounces") for volume event types. Volumes are ignored after this depth has been reached. Reducing this can improve performance at the cost of biasing the rendered image. </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_volume_depth.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_volume_depth.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_volume_depth.links heading=4-%}
    </p>
    <h3>volume_attenuation_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.65
      <p class="scene-class-comments">Controls how volume attenuation gets exponentially scaled down when rendering multiple scattering volumes. Dialing down the value generally results in more translucent look. This variable is only effective when "max volume depth" is greater than 1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_attenuation_factor.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_attenuation_factor.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_attenuation_factor.links heading=4-%}
    </p>
    <h3>volume_contribution_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.65
      <p class="scene-class-comments">Controls how scattering contribution gets exponentially scaled down when rendering multiple scattering volumes. Dialing down the value generally results in a darker volume scattering look. This variable is only effective when "max volume depth" is greater than 1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_contribution_factor.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_contribution_factor.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_contribution_factor.links heading=4-%}
    </p>
    <h3>volume_illumination_samples</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 4
      <p class="scene-class-comments">Sample number along the ray when computing volume scattering radiance towards the eye. Set to 0 to turn off volume lighting completely.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_illumination_samples.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_illumination_samples.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_illumination_samples.links heading=4-%}
    </p>
    <h3>volume_opacity_threshold</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.995
      <p class="scene-class-comments">As a ray travels through volumes, it will accumulate opacity. When the value exceeds the volume opacity threshold, the renderer will stop further volume integration along this ray.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_opacity_threshold.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_opacity_threshold.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_opacity_threshold.links heading=4-%}
    </p>
    <h3>volume_overlap_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;sum&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;max&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;rnd&rdquo;<br>
      <p class="scene-class-comments">Selects how to handle contributions from overlapping volumes:<br>&emsp;&emsp;sum: add contributions from all volumes<br>&emsp;&emsp;max: only consider maximum volume based on extinction<br>&emsp;&emsp;rnd: randomly choose one value weighted by extinction<br>&emsp;&emsp;Warning: light linking does not work correctly in sum mode.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_overlap_mode.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_overlap_mode.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_overlap_mode.links heading=4-%}
    </p>
    <h3>volume_phase_attenuation_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.5
      <p class="scene-class-comments">Controls how phase function (anisotropy) gets exponentially scaled down when rendering multiple scattering volumes. This variable is only effective when "max volume depth" is greater than 1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_phase_attenuation_factor.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_phase_attenuation_factor.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_phase_attenuation_factor.links heading=4-%}
    </p>
    <h3>volume_quality</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.5
      <p class="scene-class-comments">Controls the overall quality of volume rendering. The higher number gives better volume shape detail and more accurate scattering integration result.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_quality.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_quality.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_quality.links heading=4-%}
    </p>
    <h3>volume_shadow_quality</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Controls the quality of volume shadow (transmittance). The higher number gives more accurate volume shadow.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_shadow_quality.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.volume_shadow_quality.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
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
          &nbsp;&nbsp;8 = &ldquo;morton shiftflip&rdquo;<br>
      <p class="scene-class-comments">Specifies the order in which tiles (as areas of 8x8 pixels) are prioritized for batch rendering, which determines which areas of the image are rendered first. The ordering is not guaranteed: the strict sequence of tile starting and completion for any pass is nondeterministic due to thread scheduling.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.batch_tile_order.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.batch_tile_order.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
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
          &nbsp;&nbsp;8 = &ldquo;morton shiftflip&rdquo;<br>
      <p class="scene-class-comments">Specifies the order in which tiles (as areas of 8x8 pixels) are prioritized for checkpoint rendering, which determines which areas of the image are rendered first. The ordering is not guaranteed: the strict sequence of tile starting and completion for any pass is nondeterministic due to thread scheduling.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_tile_order.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_tile_order.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.checkpoint_tile_order.links heading=4-%}
    </p>
    <h3>crypto_uv_attribute_name</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Names of primitive attribute containing crypto UVs</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.crypto_uv_attribute_name.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.crypto_uv_attribute_name.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.crypto_uv_attribute_name.links heading=4-%}
    </p>
    <h3>fps</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 24.0
      <p class="scene-class-comments">(Frames per second) Affects motion blur.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.fps.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.fps.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.fps.links heading=4-%}
    </p>
    <h3>light_sampling_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;uniform&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;adaptive&rdquo;<br>
      <p class="scene-class-comments">Controls which light sampling scheme to use:  uniform or adaptive</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.light_sampling_mode.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.light_sampling_mode.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.light_sampling_mode.links heading=4-%}
    </p>
    <h3>light_sampling_quality</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.5
      <p class="scene-class-comments">When the light sampling mode is 'adaptive', this attribute controls how many lights are sampled per light sample, where 0.0 is low quality (1 light sampled per light sample) and 1.0 is high quality (all lights sampled per light sample). Any value in between will cause adaptive light sampling to kick into effect, meaning that it will choose a higher or lower number of lights depending on what that particular point needs. A number closer to 0.0 will cause it to sample a lower number of lights on average, and vice versa. </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.light_sampling_quality.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.light_sampling_quality.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.light_sampling_quality.links heading=4-%}
    </p>
    <h3>max_adaptive_samples</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 4096
      <p class="scene-class-comments">When adaptive sampling is turned on, this represents the max number of samples we can throw at a pixel. It's best to err on the high side since adaptive sampling will cull out samples where they're not needed based on the target adaptive error, in which case we should rarely hit the max samples value.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_adaptive_samples.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_adaptive_samples.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.max_adaptive_samples.links heading=4-%}
    </p>
    <h3>min_adaptive_samples</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 16
      <p class="scene-class-comments">This is the minimum number of samples taken per pixel before enabling adaptive sampling. A larger number of samples may prevent the adaptive sampler from prematurely identifying an area as converged but may incur a longer running time.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.min_adaptive_samples.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.min_adaptive_samples.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
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
          &nbsp;&nbsp;8 = &ldquo;morton shiftflip&rdquo;<br>
      <p class="scene-class-comments">Specifies the order in which tiles (as areas of 8x8 pixels) are prioritized for progressive rendering, which determines which areas of the image are rendered first. The ordering is not guaranteed: the strict sequence of tile starting and completion for any pass is nondeterministic due to thread scheduling.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.progressive_tile_order.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.progressive_tile_order.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
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
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.sampling_mode.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.sampling_mode.links heading=4-%}
    </p>
    <h3>target_adaptive_error</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 10.0
      <p class="scene-class-comments">When adaptive sampling is turned on, this represents the desired quality of the output images. Lower values will give higher quality but take longer to render. Higher values will give lower quality but render quicker.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.target_adaptive_error.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.target_adaptive_error.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.target_adaptive_error.links heading=4-%}
    </p>
    <h3>two_stage_output</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Specifies whether to use a two-stage writing process for images. In two-stage writing, the image is first written to a temporary location and then moved to the final location. This approach significantly reduces the risk of output data corruption due to an unexpected render process termination.<br>The directory where the temporary files are stored is defined by the "tmp_dir" scene variable.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.two_stage_output.images data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.two_stage_output.videos data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.scene-variables.SceneVariables.attributes.two_stage_output.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.scene-variables.SceneVariables-%}