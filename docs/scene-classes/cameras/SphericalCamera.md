---
title: SphericalCamera

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# SphericalCamera
{%include image-gallery.html images=site.data.scene-classes.cameras.SphericalCamera.gallery data=site.data.scene-classes.cameras.SphericalCamera-%}
{%include see-also.html links=site.data.scene-classes.cameras.SphericalCamera.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Frustum attributes</summary>
  <p>
    <h3>far</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 10000.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.cameras.SphericalCamera.attributes.far.images data=site.data.scene-classes.cameras.SphericalCamera-%}
      {%include see-also.html links=site.data.scene-classes.cameras.SphericalCamera.attributes.far.links-%}
    </p>
    <h3>near</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.cameras.SphericalCamera.attributes.near.images data=site.data.scene-classes.cameras.SphericalCamera-%}
      {%include see-also.html links=site.data.scene-classes.cameras.SphericalCamera.attributes.near.links-%}
    </p>
  </p>
</details>
<details open>
  <summary>Motion Blur attributes</summary>
  <p>
    <h3>mb_shutter_bias</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.cameras.SphericalCamera.attributes.mb_shutter_bias.images data=site.data.scene-classes.cameras.SphericalCamera-%}
      {%include see-also.html links=site.data.scene-classes.cameras.SphericalCamera.attributes.mb_shutter_bias.links-%}
    </p>
    <h3>mb_shutter_close</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.25
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.cameras.SphericalCamera.attributes.mb_shutter_close.images data=site.data.scene-classes.cameras.SphericalCamera-%}
      {%include see-also.html links=site.data.scene-classes.cameras.SphericalCamera.attributes.mb_shutter_close.links-%}
    </p>
    <h3>mb_shutter_open</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: -0.25
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.cameras.SphericalCamera.attributes.mb_shutter_open.images data=site.data.scene-classes.cameras.SphericalCamera-%}
      {%include see-also.html links=site.data.scene-classes.cameras.SphericalCamera.attributes.mb_shutter_open.links-%}
    </p>
  </p>
</details>
<details open>
  <summary>Render Masks attributes</summary>
  <p>
    <h3>pixel_sample_map</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.cameras.SphericalCamera.attributes.pixel_sample_map.images data=site.data.scene-classes.cameras.SphericalCamera-%}
      {%include see-also.html links=site.data.scene-classes.cameras.SphericalCamera.attributes.pixel_sample_map.links-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.cameras.SphericalCamera.attributes.node_xform.images data=site.data.scene-classes.cameras.SphericalCamera-%}
      {%include see-also.html links=site.data.scene-classes.cameras.SphericalCamera.attributes.node_xform.links-%}
    </p>
  </p>
</details>
</div>