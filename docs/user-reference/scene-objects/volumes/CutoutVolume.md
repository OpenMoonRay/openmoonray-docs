---
title: CutoutVolume

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# CutoutVolume
{%-include overview.html data=site.data.scene-classes.volumes.CutoutVolume-%}
{%-include image-gallery.html images=site.data.scene-classes.volumes.CutoutVolume.gallery data=site.data.scene-classes.volumes.CutoutVolume-%}
{%-include see-also.html links=site.data.scene-classes.volumes.CutoutVolume.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>bake_divisions</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 100
      <p class="scene-class-comments">Divide widest axis by this many divisions</p>
      {%-include image-gallery.html images=site.data.scene-classes.volumes.CutoutVolume.attributes.bake_divisions.images data=site.data.scene-classes.volumes.CutoutVolume-%}
      {%-include see-also.html links=site.data.scene-classes.volumes.CutoutVolume.attributes.bake_divisions.links heading=4-%}
    </p>
    <h3>bake_resolution_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | default = 0 (default)
          | divisions = 1
          | voxel size = 2
      <p class="scene-class-comments">Toggle method to specify grid resolution of baked density grid.<br>&emsp;&emsp;default: for shaders that are bound to vdb volumes, use vdb resolution. For shaders that are bounds to mesh geometriesuse 100 divisions<br>&emsp;&emsp;divisions: specify number of divisions.<br>&emsp;&emsp;voxel size: specify voxel size.</p>
      {%-include image-gallery.html images=site.data.scene-classes.volumes.CutoutVolume.attributes.bake_resolution_mode.images data=site.data.scene-classes.volumes.CutoutVolume-%}
      {%-include see-also.html links=site.data.scene-classes.volumes.CutoutVolume.attributes.bake_resolution_mode.links heading=4-%}
    </p>
    <h3>bake_voxel_size</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 10.0
      <p class="scene-class-comments">Size of voxel in world space</p>
      {%-include image-gallery.html images=site.data.scene-classes.volumes.CutoutVolume.attributes.bake_voxel_size.images data=site.data.scene-classes.volumes.CutoutVolume-%}
      {%-include see-also.html links=site.data.scene-classes.volumes.CutoutVolume.attributes.bake_voxel_size.links heading=4-%}
    </p>
    <h3>indirect_volume</h3>
    <p class="scene-class-type">
      <b>Volume</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.volumes.CutoutVolume.attributes.indirect_volume.images data=site.data.scene-classes.volumes.CutoutVolume-%}
      {%-include see-also.html links=site.data.scene-classes.volumes.CutoutVolume.attributes.indirect_volume.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in light aovs</p>
      {%-include image-gallery.html images=site.data.scene-classes.volumes.CutoutVolume.attributes.label.images data=site.data.scene-classes.volumes.CutoutVolume-%}
      {%-include see-also.html links=site.data.scene-classes.volumes.CutoutVolume.attributes.label.links heading=4-%}
    </p>
    <h3>surface_opacity_threshold</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">Accumulated opacity that's considered the 'surface' for computing surface position and Z</p>
      {%-include image-gallery.html images=site.data.scene-classes.volumes.CutoutVolume.attributes.surface_opacity_threshold.images data=site.data.scene-classes.volumes.CutoutVolume-%}
      {%-include see-also.html links=site.data.scene-classes.volumes.CutoutVolume.attributes.surface_opacity_threshold.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.scene-classes.volumes.CutoutVolume-%}