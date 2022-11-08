---
title: ProjectCameraMap_v2

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ProjectCameraMap_v2
{%-include overview.html data=site.data.scene-classes.maps.ProjectCameraMap_v2-%}
{%-include image-gallery.html images=site.data.scene-classes.maps.ProjectCameraMap_v2.gallery data=site.data.scene-classes.maps.ProjectCameraMap_v2-%}
{%-include see-also.html links=site.data.scene-classes.maps.ProjectCameraMap_v2.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>alpha_only</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">When enabled, the alpha channel is returned instead of RGB</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ProjectCameraMap_v2.attributes.alpha_only.images data=site.data.scene-classes.maps.ProjectCameraMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ProjectCameraMap_v2.attributes.alpha_only.links heading=4-%}
    </p>
    <h3>aspect_ratio_source</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | from texture = 0 (default)
          | custom = 1
      <p class="scene-class-comments">Whether to use the image and pixel aspect ratio of the texture being projected, or a custom aspect ratio</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ProjectCameraMap_v2.attributes.aspect_ratio_source.images data=site.data.scene-classes.maps.ProjectCameraMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ProjectCameraMap_v2.attributes.aspect_ratio_source.links heading=4-%}
    </p>
    <h3>black_outside_projection</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Toggles whether projections appear outside the 0-1 uv range of the projector</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ProjectCameraMap_v2.attributes.black_outside_projection.images data=site.data.scene-classes.maps.ProjectCameraMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ProjectCameraMap_v2.attributes.black_outside_projection.links heading=4-%}
    </p>
    <h3>custom_aspect_ratio</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">a custom aspect ratio for the projected texture</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ProjectCameraMap_v2.attributes.custom_aspect_ratio.images data=site.data.scene-classes.maps.ProjectCameraMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ProjectCameraMap_v2.attributes.custom_aspect_ratio.links heading=4-%}
    </p>
    <h3>gamma</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | off = 0
          | on = 1
          | auto = 2 (default)
      <p class="scene-class-comments">Controls application of gamma to images (off -0, on - 1, auto - 2).   Auto will apply gamma decoding to 8-bit images</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ProjectCameraMap_v2.attributes.gamma.images data=site.data.scene-classes.maps.ProjectCameraMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ProjectCameraMap_v2.attributes.gamma.links heading=4-%}
    </p>
    <h3>project_on_back_faces</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Toggles whether camera projections appear on back faces.</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ProjectCameraMap_v2.attributes.project_on_back_faces.images data=site.data.scene-classes.maps.ProjectCameraMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ProjectCameraMap_v2.attributes.project_on_back_faces.links heading=4-%}
    </p>
    <h3>projector</h3>
    <p class="scene-class-type">
      <b>Camera</b>
      default: None
      <p class="scene-class-comments">the camera to project from</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ProjectCameraMap_v2.attributes.projector.images data=site.data.scene-classes.maps.ProjectCameraMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ProjectCameraMap_v2.attributes.projector.links heading=4-%}
    </p>
    <h3>texture</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ProjectCameraMap_v2.attributes.texture.images data=site.data.scene-classes.maps.ProjectCameraMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ProjectCameraMap_v2.attributes.texture.links heading=4-%}
    </p>
    <h3>unpremultiply</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">When enabled, the rgb channels are divided by the alpha channel (where non-zero)</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ProjectCameraMap_v2.attributes.unpremultiply.images data=site.data.scene-classes.maps.ProjectCameraMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ProjectCameraMap_v2.attributes.unpremultiply.links heading=4-%}
    </p>
    <h3>use_reference_space</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">use reference space</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ProjectCameraMap_v2.attributes.use_reference_space.images data=site.data.scene-classes.maps.ProjectCameraMap_v2-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ProjectCameraMap_v2.attributes.use_reference_space.links heading=4-%}
    </p>
  </p>
</details>
</div>