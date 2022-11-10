---
title: BakeCamera

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# BakeCamera
{%-include overview.html data=site.data.scene-classes.cameras.BakeCamera-%}
{%-include image-gallery.html images=site.data.scene-classes.cameras.BakeCamera.gallery data=site.data.scene-classes.cameras.BakeCamera-%}
{%-include see-also.html links=site.data.scene-classes.cameras.BakeCamera.links-%}
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
      {%-include image-gallery.html images=site.data.scene-classes.cameras.BakeCamera.attributes.far.images data=site.data.scene-classes.cameras.BakeCamera-%}
      {%-include see-also.html links=site.data.scene-classes.cameras.BakeCamera.attributes.far.links heading=4-%}
    </p>
    <h3>near</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.cameras.BakeCamera.attributes.near.images data=site.data.scene-classes.cameras.BakeCamera-%}
      {%-include see-also.html links=site.data.scene-classes.cameras.BakeCamera.attributes.near.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Medium attributes</summary>
  <p>
    <h3>medium_geometry</h3>
    <p class="scene-class-type">
      <b>Object</b>
      default: None
      <p class="scene-class-comments">The geometry the camera is 'inside' to which you'd like the medium_material applied. (The use case for this is typically partially-submerged cameras)</p>
      {%-include image-gallery.html images=site.data.scene-classes.cameras.BakeCamera.attributes.medium_geometry.images data=site.data.scene-classes.cameras.BakeCamera-%}
      {%-include see-also.html links=site.data.scene-classes.cameras.BakeCamera.attributes.medium_geometry.links heading=4-%}
    </p>
    <h3>medium_material</h3>
    <p class="scene-class-type">
      <b>Object</b>
      default: None
      <p class="scene-class-comments">The material the camera is 'inside'. If no medium_geometry is specified, ALL rays will have this initial index of refraction applied. </p>
      {%-include image-gallery.html images=site.data.scene-classes.cameras.BakeCamera.attributes.medium_material.images data=site.data.scene-classes.cameras.BakeCamera-%}
      {%-include see-also.html links=site.data.scene-classes.cameras.BakeCamera.attributes.medium_material.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.scene-classes.cameras.BakeCamera.attributes.mb_shutter_bias.images data=site.data.scene-classes.cameras.BakeCamera-%}
      {%-include see-also.html links=site.data.scene-classes.cameras.BakeCamera.attributes.mb_shutter_bias.links heading=4-%}
    </p>
    <h3>mb_shutter_close</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.25
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.cameras.BakeCamera.attributes.mb_shutter_close.images data=site.data.scene-classes.cameras.BakeCamera-%}
      {%-include see-also.html links=site.data.scene-classes.cameras.BakeCamera.attributes.mb_shutter_close.links heading=4-%}
    </p>
    <h3>mb_shutter_open</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: -0.25
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.cameras.BakeCamera.attributes.mb_shutter_open.images data=site.data.scene-classes.cameras.BakeCamera-%}
      {%-include see-also.html links=site.data.scene-classes.cameras.BakeCamera.attributes.mb_shutter_open.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.scene-classes.cameras.BakeCamera.attributes.pixel_sample_map.images data=site.data.scene-classes.cameras.BakeCamera-%}
      {%-include see-also.html links=site.data.scene-classes.cameras.BakeCamera.attributes.pixel_sample_map.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>bias</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.00300000002608
      <p class="scene-class-comments">Ray-tracing offset for primary ray origin</p>
      {%-include image-gallery.html images=site.data.scene-classes.cameras.BakeCamera.attributes.bias.images data=site.data.scene-classes.cameras.BakeCamera-%}
      {%-include see-also.html links=site.data.scene-classes.cameras.BakeCamera.attributes.bias.links heading=4-%}
    </p>
    <h3>geometry</h3>
    <p class="scene-class-type">
      <b>Geometry</b>
      default: None
      <p class="scene-class-comments">The geometry object to bake</p>
      {%-include image-gallery.html images=site.data.scene-classes.cameras.BakeCamera.attributes.geometry.images data=site.data.scene-classes.cameras.BakeCamera-%}
      {%-include see-also.html links=site.data.scene-classes.cameras.BakeCamera.attributes.geometry.links heading=4-%}
    </p>
    <h3>map_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Increase or decrease the internal position map buffer resolution</p>
      {%-include image-gallery.html images=site.data.scene-classes.cameras.BakeCamera.attributes.map_factor.images data=site.data.scene-classes.cameras.BakeCamera-%}
      {%-include see-also.html links=site.data.scene-classes.cameras.BakeCamera.attributes.map_factor.links heading=4-%}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | from camera to surface = 0
          | from surface along normal = 1
          | from surface along reflection vector = 2
          | above surface reverse normal = 3 (default)
      <p class="scene-class-comments">How to generate primary rays</p>
      {%-include image-gallery.html images=site.data.scene-classes.cameras.BakeCamera.attributes.mode.images data=site.data.scene-classes.cameras.BakeCamera-%}
      {%-include see-also.html links=site.data.scene-classes.cameras.BakeCamera.attributes.mode.links heading=4-%}
    </p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.cameras.BakeCamera.attributes.node_xform.images data=site.data.scene-classes.cameras.BakeCamera-%}
      {%-include see-also.html links=site.data.scene-classes.cameras.BakeCamera.attributes.node_xform.links heading=4-%}
    </p>
    <h3>normal_map</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">Use this option to supply your own normals that are used when computing ray directions.  Without this option, normals are computed from the geometry and do not take into account any material applied normal mapping.</p>
      {%-include image-gallery.html images=site.data.scene-classes.cameras.BakeCamera.attributes.normal_map.images data=site.data.scene-classes.cameras.BakeCamera-%}
      {%-include see-also.html links=site.data.scene-classes.cameras.BakeCamera.attributes.normal_map.links heading=4-%}
    </p>
    <h3>normal_map_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | camera space = 0 (default)
          | tangent space = 1
      <p class="scene-class-comments">Use camera space if you generated per frame normal maps in a pre-pass using the normal material aov.  You probably want to use tangent space if you are using a normal map that is also used in the surfacing setup.</p>
      {%-include image-gallery.html images=site.data.scene-classes.cameras.BakeCamera.attributes.normal_map_space.images data=site.data.scene-classes.cameras.BakeCamera-%}
      {%-include see-also.html links=site.data.scene-classes.cameras.BakeCamera.attributes.normal_map_space.links heading=4-%}
    </p>
    <h3>udim</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 1001
      <p class="scene-class-comments">Udim tile to bake</p>
      {%-include image-gallery.html images=site.data.scene-classes.cameras.BakeCamera.attributes.udim.images data=site.data.scene-classes.cameras.BakeCamera-%}
      {%-include see-also.html links=site.data.scene-classes.cameras.BakeCamera.attributes.udim.links heading=4-%}
    </p>
    <h3>use_relative_bias</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">If true, bias is scaled based on position magnitude</p>
      {%-include image-gallery.html images=site.data.scene-classes.cameras.BakeCamera.attributes.use_relative_bias.images data=site.data.scene-classes.cameras.BakeCamera-%}
      {%-include see-also.html links=site.data.scene-classes.cameras.BakeCamera.attributes.use_relative_bias.links heading=4-%}
    </p>
    <h3>uv_attribute</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">Specifies a Vec2f primitive attribute to use as the uv coordinates.  If empty, the default uv for the mesh is used.  The uvs must provide a unique parameterization of the mesh, i.e. a given (u, v) can appear only once on the mesh being baked.</p>
      {%-include image-gallery.html images=site.data.scene-classes.cameras.BakeCamera.attributes.uv_attribute.images data=site.data.scene-classes.cameras.BakeCamera-%}
      {%-include see-also.html links=site.data.scene-classes.cameras.BakeCamera.attributes.uv_attribute.links heading=4-%}
    </p>
  </p>
</details>
</div>