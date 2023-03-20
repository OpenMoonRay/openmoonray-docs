---
title: ProjectCameraNormalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ProjectCameraNormalMap
{%-include overview.html data=site.data.user-reference.scene-objects.normal-maps.ProjectCameraNormalMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.ProjectCameraNormalMap.gallery data=site.data.user-reference.scene-objects.normal-maps.ProjectCameraNormalMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.ProjectCameraNormalMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>aspect_ratio_source</h3>
    <p class="scene-class-type">
      <b>Int</b><br/> <i>enum</i><br/>
          0=from texture(default)<br/>
          1=custom<br/>
      <p class="scene-class-comments">Whether to use the image and pixel aspect ratio of the texture being projected, or a custom aspect ratio</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.ProjectCameraNormalMap.attributes.aspect_ratio_source.images data=site.data.user-reference.scene-objects.normal-maps.ProjectCameraNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.ProjectCameraNormalMap.attributes.aspect_ratio_source.links heading=4-%}
    </p>
    <h3>custom_aspect_ratio</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: 1.0
      <p class="scene-class-comments">a custom aspect ratio for the projected texture</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.ProjectCameraNormalMap.attributes.custom_aspect_ratio.images data=site.data.user-reference.scene-objects.normal-maps.ProjectCameraNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.ProjectCameraNormalMap.attributes.custom_aspect_ratio.links heading=4-%}
    </p>
    <h3>normal_encoding</h3>
    <p class="scene-class-type">
      <b>Int</b><br/> <i>enum</i><br/>
          0=[0,1](default)<br/>
          1=[-1,1]<br/>
      <p class="scene-class-comments">Most normal maps are encoded [0,1].   Only certain rare floating point normal maps are encoded [-1,1]</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.ProjectCameraNormalMap.attributes.normal_encoding.images data=site.data.user-reference.scene-objects.normal-maps.ProjectCameraNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.ProjectCameraNormalMap.attributes.normal_encoding.links heading=4-%}
    </p>
    <h3>project_on_back_faces</h3>
    <p class="scene-class-type">
      <b>Bool</b><br/>
      default: False
      <p class="scene-class-comments">Toggles whether camera projections appear on back faces.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.ProjectCameraNormalMap.attributes.project_on_back_faces.images data=site.data.user-reference.scene-objects.normal-maps.ProjectCameraNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.ProjectCameraNormalMap.attributes.project_on_back_faces.links heading=4-%}
    </p>
    <h3>projector</h3>
    <p class="scene-class-type">
      <b>Camera</b><br/>
      default: None
      <p class="scene-class-comments">the camera to project from</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.ProjectCameraNormalMap.attributes.projector.images data=site.data.user-reference.scene-objects.normal-maps.ProjectCameraNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.ProjectCameraNormalMap.attributes.projector.links heading=4-%}
    </p>
    <h3>texture</h3>
    <p class="scene-class-type">
      <b>String</b><br/> <i>filename</i><br/>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.ProjectCameraNormalMap.attributes.texture.images data=site.data.user-reference.scene-objects.normal-maps.ProjectCameraNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.ProjectCameraNormalMap.attributes.texture.links heading=4-%}
    </p>
    <h3>use_reference_space</h3>
    <p class="scene-class-type">
      <b>Bool</b><br/>
      default: False
      <p class="scene-class-comments">use reference space</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.ProjectCameraNormalMap.attributes.use_reference_space.images data=site.data.user-reference.scene-objects.normal-maps.ProjectCameraNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.ProjectCameraNormalMap.attributes.use_reference_space.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.normal-maps.ProjectCameraNormalMap-%}