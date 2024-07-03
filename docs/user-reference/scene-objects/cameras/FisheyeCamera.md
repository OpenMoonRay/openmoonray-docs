---
title: FisheyeCamera

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# FisheyeCamera
{%-include overview.html data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.FisheyeCamera.gallery data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.cameras.FisheyeCamera.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Frustum attributes</summary>
  <p>
    <h3>far</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 10000.0
      <p class="scene-class-comments">Far clipping plane</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.far.images data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.far.videos data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.far.links heading=4-%}
    </p>
    <h3>near</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Near clipping plane</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.near.images data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.near.videos data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.near.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.medium_geometry.images data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.medium_geometry.videos data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.medium_geometry.links heading=4-%}
    </p>
    <h3>medium_material</h3>
    <p class="scene-class-type">
      <b>SceneObject</b>
      <br>
      default: None
      <p class="scene-class-comments">The material the camera is 'inside'. If no medium_geometry is specified, ALL rays will have this initial index of refraction applied. </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.medium_material.images data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.medium_material.videos data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.medium_material.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.mb_shutter_bias.images data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.mb_shutter_bias.videos data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.mb_shutter_bias.links heading=4-%}
    </p>
    <h3>mb_shutter_close</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.25
      <p class="scene-class-comments">Frame at which the shutter closes, i.e., the end of the motion blur interval.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.mb_shutter_close.images data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.mb_shutter_close.videos data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.mb_shutter_close.links heading=4-%}
    </p>
    <h3>mb_shutter_open</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: -0.25
      <p class="scene-class-comments">Frame at which the shutter opens, i.e., the beginning of the motion blur interval.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.mb_shutter_open.images data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.mb_shutter_open.videos data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.mb_shutter_open.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.pixel_sample_map.images data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.pixel_sample_map.videos data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.pixel_sample_map.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>format</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;circular&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;cropped&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;diagonal&rdquo;<br>
      <p class="scene-class-comments">The format for fitting the circle to the image - see https://en.wikipedia.org/wiki/Fisheye_lens</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.format.images data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.format.videos data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.format.links heading=4-%}
    </p>
    <h3>mapping</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;stereographic&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;equidistant&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;equisolid angle&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;orthographic&rdquo;<br>
      <p class="scene-class-comments">The mapping function - see https://en.wikipedia.org/wiki/Fisheye_lens</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.mapping.images data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.mapping.videos data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.mapping.links heading=4-%}
    </p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      <br>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">The 4x4 matrix describing the transformation from local space to world space.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.node_xform.images data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.node_xform.videos data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.node_xform.links heading=4-%}
    </p>
    <h3>zoom</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Scaling factor applied on top of the format scale</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.zoom.images data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.zoom.videos data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.cameras.FisheyeCamera.attributes.zoom.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.cameras.FisheyeCamera-%}