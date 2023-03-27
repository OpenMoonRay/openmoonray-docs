---
title: PerspectiveCamera

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# PerspectiveCamera
{%-include overview.html data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.gallery data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Depth of Field attributes</summary>
  <p>
    <h3>bokeh</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enable Bokeh. Requires DOF to be enabled.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.bokeh.images data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.bokeh.videos data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.bokeh.links heading=4-%}
    </p>
    <h3>bokeh_angle</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Angle of iris rotation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.bokeh_angle.images data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.bokeh_angle.videos data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.bokeh_angle.links heading=4-%}
    </p>
    <h3>bokeh_image</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Path to image file to be used for the iris</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.bokeh_image.images data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.bokeh_image.videos data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.bokeh_image.links heading=4-%}
    </p>
    <h3>bokeh_sides</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 0
      <p class="scene-class-comments">Number of sides of the iris. Specifying less than 3 sides will default to a disk.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.bokeh_sides.images data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.bokeh_sides.videos data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.bokeh_sides.links heading=4-%}
    </p>
    <h3>bokeh_weight_location</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Distance from the origin of Bokeh shape</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.bokeh_weight_location.images data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.bokeh_weight_location.videos data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.bokeh_weight_location.links heading=4-%}
    </p>
    <h3>bokeh_weight_strength</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Controls the strength of weights as samples approach the weight location</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.bokeh_weight_strength.images data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.bokeh_weight_strength.videos data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.bokeh_weight_strength.links heading=4-%}
    </p>
    <h3>dof</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Whether to enable depth of field</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.dof.images data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.dof.videos data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.dof.links heading=4-%}
    </p>
    <h3>dof_aperture</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 8.0
      <p class="scene-class-comments">Depth of field focus distance</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.dof_aperture.images data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.dof_aperture.videos data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.dof_aperture.links heading=4-%}
    </p>
    <h3>dof_focus_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.dof_focus_distance.images data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.dof_focus_distance.videos data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.dof_focus_distance.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Frustum attributes</summary>
  <p>
    <h3>far</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 10000.0
      <p class="scene-class-comments">Far clipping plane</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.far.images data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.far.videos data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.far.links heading=4-%}
    </p>
    <h3>film_width_aperture</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 24.0
      <p class="scene-class-comments">Scale the aperture of the camera (i.e., the frustum) by this value.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.film_width_aperture.images data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.film_width_aperture.videos data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.film_width_aperture.links heading=4-%}
    </p>
    <h3>focal</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>blurrable</i>
      <br>
      default: 30.0
      <p class="scene-class-comments">Focal length</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.focal.images data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.focal.videos data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.focal.links heading=4-%}
    </p>
    <h3>horizontal_film_offset</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Horizontal offset of the frustum.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.horizontal_film_offset.images data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.horizontal_film_offset.videos data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.horizontal_film_offset.links heading=4-%}
    </p>
    <h3>near</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Near clipping plane</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.near.images data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.near.videos data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.near.links heading=4-%}
    </p>
    <h3>pixel_aspect_ratio</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">ratio of pixel size y / x</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.pixel_aspect_ratio.images data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.pixel_aspect_ratio.videos data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.pixel_aspect_ratio.links heading=4-%}
    </p>
    <h3>vertical_film_offset</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Vertical offset of the frustum.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.vertical_film_offset.images data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.vertical_film_offset.videos data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.vertical_film_offset.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Medium attributes</summary>
  <p>
    <h3>medium_geometry</h3>
    <p class="scene-class-type">
      <b>SceneObject</b>
      <br>
      default: None
      <p class="scene-class-comments">The geometry the camera is 'inside' to which you'd like the medium_material applied. (The use case for this is typically partially-submerged cameras)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.medium_geometry.images data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.medium_geometry.videos data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.medium_geometry.links heading=4-%}
    </p>
    <h3>medium_material</h3>
    <p class="scene-class-type">
      <b>SceneObject</b>
      <br>
      default: None
      <p class="scene-class-comments">The material the camera is 'inside'. If no medium_geometry is specified, ALL rays will have this initial index of refraction applied. </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.medium_material.images data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.medium_material.videos data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.medium_material.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Motion Blur attributes</summary>
  <p>
    <h3>mb_shutter_bias</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Biases the motion blur samples toward one end of the shutter interval.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.mb_shutter_bias.images data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.mb_shutter_bias.videos data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.mb_shutter_bias.links heading=4-%}
    </p>
    <h3>mb_shutter_close</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.25
      <p class="scene-class-comments">Frame at which the shutter closes, i.e., the end of the motion blur interval.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.mb_shutter_close.images data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.mb_shutter_close.videos data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.mb_shutter_close.links heading=4-%}
    </p>
    <h3>mb_shutter_open</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: -0.25
      <p class="scene-class-comments">Frame at which the shutter opens, i.e., the beginning of the motion blur interval.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.mb_shutter_open.images data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.mb_shutter_open.videos data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.mb_shutter_open.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Render Masks attributes</summary>
  <p>
    <h3>pixel_sample_map</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Map indicating the number of pixel samples that should be used per pixel (in uniform sampling mode). This is a multiplier on the global pixel sample count specified in SceneVariables. If the provided map has incompatible dimensions, it will be resized.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.pixel_sample_map.images data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.pixel_sample_map.videos data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.pixel_sample_map.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Stereo attributes</summary>
  <p>
    <h3>stereo_convergence_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 100.0
      <p class="scene-class-comments">Distance at which all the stereo views converge.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.stereo_convergence_distance.images data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.stereo_convergence_distance.videos data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.stereo_convergence_distance.links heading=4-%}
    </p>
    <h3>stereo_interocular_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 6.30000019073
      <p class="scene-class-comments">Distance between the left and right 'eyes'</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.stereo_interocular_distance.images data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.stereo_interocular_distance.videos data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.stereo_interocular_distance.links heading=4-%}
    </p>
    <h3>stereo_view</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;center view&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;left view&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;right view&rdquo;<br>
      <p class="scene-class-comments">Render from the center, left, or right stereo view.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.stereo_view.images data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.stereo_view.videos data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.stereo_view.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      <br>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">The 4x4 matrix describing the transformation from local space to world space.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.node_xform.images data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.node_xform.videos data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.PerspectiveCamera.attributes.node_xform.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.cameras.PerspectiveCamera-%}