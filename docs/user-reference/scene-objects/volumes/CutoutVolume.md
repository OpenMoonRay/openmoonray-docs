---
title: CutoutVolume

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# CutoutVolume
{%-include overview.html data=site.data.user-reference.scene-objects.volumes.CutoutVolume-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.CutoutVolume.gallery data=site.data.user-reference.scene-objects.volumes.CutoutVolume-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.volumes.CutoutVolume.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Volume attributes</summary>
  <p>
    <h3>surface_opacity_threshold</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.5
      <p class="scene-class-comments">Accumulated opacity that's considered the 'surface' for computing surface position and Z</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.CutoutVolume.attributes.surface_opacity_threshold.images data=site.data.user-reference.scene-objects.volumes.CutoutVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.CutoutVolume.attributes.surface_opacity_threshold.videos data=site.data.user-reference.scene-objects.volumes.CutoutVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.CutoutVolume.attributes.surface_opacity_threshold.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Volume Baking attributes</summary>
  <p>
    <h3>bake_divisions</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 100
      <p class="scene-class-comments">Divide widest axis by this many divisions</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.CutoutVolume.attributes.bake_divisions.images data=site.data.user-reference.scene-objects.volumes.CutoutVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.CutoutVolume.attributes.bake_divisions.videos data=site.data.user-reference.scene-objects.volumes.CutoutVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.CutoutVolume.attributes.bake_divisions.links heading=4-%}
    </p>
    <h3>bake_resolution_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;default&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;divisions&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;voxel size&rdquo;<br>
      <p class="scene-class-comments">Method to specify grid resolution of baked density grid.<br>&emsp;&emsp;default: For shaders that are bound to vdb volumes, use vdb resolution.<br>&emsp;&emsp;         For shaders that are bounds to mesh geometries use 100 divisions<br>&emsp;&emsp;divisions: specify number of divisions.<br>&emsp;&emsp;voxel size: specify voxel size.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.CutoutVolume.attributes.bake_resolution_mode.images data=site.data.user-reference.scene-objects.volumes.CutoutVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.CutoutVolume.attributes.bake_resolution_mode.videos data=site.data.user-reference.scene-objects.volumes.CutoutVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.CutoutVolume.attributes.bake_resolution_mode.links heading=4-%}
    </p>
    <h3>bake_voxel_size</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 10.0
      <p class="scene-class-comments">Size of voxel in world space</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.CutoutVolume.attributes.bake_voxel_size.images data=site.data.user-reference.scene-objects.volumes.CutoutVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.CutoutVolume.attributes.bake_voxel_size.videos data=site.data.user-reference.scene-objects.volumes.CutoutVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.CutoutVolume.attributes.bake_voxel_size.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>indirect_volume</h3>
    <p class="scene-class-type">
      <b>Volume</b>
      <br>
      default: None
      <p class="scene-class-comments">The volume to cutout / use for indirect illumination and occlusion.  Cutout behavior is invoked for primary rays but secondary/indirect rays are processed normally.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.CutoutVolume.attributes.indirect_volume.images data=site.data.user-reference.scene-objects.volumes.CutoutVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.CutoutVolume.attributes.indirect_volume.videos data=site.data.user-reference.scene-objects.volumes.CutoutVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.CutoutVolume.attributes.indirect_volume.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">label used in light aovs</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.CutoutVolume.attributes.label.images data=site.data.user-reference.scene-objects.volumes.CutoutVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.CutoutVolume.attributes.label.videos data=site.data.user-reference.scene-objects.volumes.CutoutVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.CutoutVolume.attributes.label.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.volumes.CutoutVolume-%}