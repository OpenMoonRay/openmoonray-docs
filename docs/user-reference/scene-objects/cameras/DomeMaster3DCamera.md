---
title: DomeMaster3DCamera

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DomeMaster3DCamera
{%-include overview.html data=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.gallery data=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Frustum attributes</summary>
  <p>
    <h3>far</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: 10000.0
      <p class="scene-class-comments">Far clipping plane</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.far.images data=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.far.links heading=4-%}
    </p>
    <h3>near</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: 1.0
      <p class="scene-class-comments">Near clipping plane</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.near.images data=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.near.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Medium attributes</summary>
  <p>
    <h3>medium_geometry</h3>
    <p class="scene-class-type">
      <b>SceneObject</b><br/>
      default: None
      <p class="scene-class-comments">The geometry the camera is 'inside' to which you'd like the medium_material applied. (The use case for this is typically partially-submerged cameras)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.medium_geometry.images data=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.medium_geometry.links heading=4-%}
    </p>
    <h3>medium_material</h3>
    <p class="scene-class-type">
      <b>SceneObject</b><br/>
      default: None
      <p class="scene-class-comments">The material the camera is 'inside'. If no medium_geometry is specified, ALL rays will have this initial index of refraction applied. </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.medium_material.images data=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.medium_material.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Motion Blur attributes</summary>
  <p>
    <h3>mb_shutter_bias</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: 0.0
      <p class="scene-class-comments">Biases the motion blur samples toward one end of the shutter interval.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.mb_shutter_bias.images data=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.mb_shutter_bias.links heading=4-%}
    </p>
    <h3>mb_shutter_close</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: 0.25
      <p class="scene-class-comments">Frame at which the shutter closes, i.e., the end of the motion blur interval.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.mb_shutter_close.images data=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.mb_shutter_close.links heading=4-%}
    </p>
    <h3>mb_shutter_open</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: -0.25
      <p class="scene-class-comments">Frame at which the shutter opens, i.e., the beginning of the motion blur interval.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.mb_shutter_open.images data=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.mb_shutter_open.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Render Masks attributes</summary>
  <p>
    <h3>pixel_sample_map</h3>
    <p class="scene-class-type">
      <b>String</b><br/>
      default: 
      <p class="scene-class-comments">Map indicating the number of pixel samples that should be used per pixel (in uniform sampling mode). This is a multiplier on the global pixel sample count specified in SceneVariables. If the provided map has incompatible dimensions, it will be resized.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.pixel_sample_map.images data=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.pixel_sample_map.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Stereo attributes</summary>
  <p>
    <h3>head_tilt_map</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.head_tilt_map.images data=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.head_tilt_map.links heading=4-%}
    </p>
    <h3>interocular_distance_map_file_name</h3>
    <p class="scene-class-type">
      <b>String</b><br/> <i>filename</i><br/>
      default: 
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.interocular_distance_map_file_name.images data=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.interocular_distance_map_file_name.links heading=4-%}
    </p>
    <h3>stereo_convergence_distance</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: 360.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.stereo_convergence_distance.images data=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.stereo_convergence_distance.links heading=4-%}
    </p>
    <h3>stereo_interocular_distance</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: 6.5
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.stereo_interocular_distance.images data=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.stereo_interocular_distance.links heading=4-%}
    </p>
    <h3>stereo_view</h3>
    <p class="scene-class-type">
      <b>Int</b><br/> <i>enum</i><br/>
          0=center view(default)<br/>
          1=left view<br/>
          2=right view<br/>
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.stereo_view.images data=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.stereo_view.links heading=4-%}
    </p>
    <h3>zenith_mode</h3>
    <p class="scene-class-type">
      <b>Bool</b><br/>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.zenith_mode.images data=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.zenith_mode.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>FOV_horizontal_angle</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: 60.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.FOV_horizontal_angle.images data=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.FOV_horizontal_angle.links heading=4-%}
    </p>
    <h3>FOV_vertical_angle</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: 30.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.FOV_vertical_angle.images data=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.FOV_vertical_angle.links heading=4-%}
    </p>
    <h3>flip_ray_x</h3>
    <p class="scene-class-type">
      <b>Bool</b><br/>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.flip_ray_x.images data=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.flip_ray_x.links heading=4-%}
    </p>
    <h3>flip_ray_y</h3>
    <p class="scene-class-type">
      <b>Bool</b><br/>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.flip_ray_y.images data=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.flip_ray_y.links heading=4-%}
    </p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b><br/> <i>blurrable</i><br/>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">The 4x4 matrix describing the transformation from local space to world space.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.node_xform.images data=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera.attributes.node_xform.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.cameras.DomeMaster3DCamera-%}