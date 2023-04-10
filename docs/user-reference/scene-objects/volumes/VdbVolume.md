---
title: VdbVolume

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# VdbVolume
{%-include overview.html data=site.data.user-reference.scene-objects.volumes.VdbVolume-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.VdbVolume.gallery data=site.data.user-reference.scene-objects.volumes.VdbVolume-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.volumes.VdbVolume.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Volume attributes</summary>
  <p>
    <h3>anisotropy</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Value in the interval [-1,1] that defines how foward (1) or backward (-1) scattering the volume is.  A value of 0.0 indicates an isotropic volume.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.anisotropy.images data=site.data.user-reference.scene-objects.volumes.VdbVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.anisotropy.videos data=site.data.user-reference.scene-objects.volumes.VdbVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.anisotropy.links heading=4-%}
    </p>
    <h3>color_mult</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">The albedo of the volume</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.color_mult.images data=site.data.user-reference.scene-objects.volumes.VdbVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.color_mult.videos data=site.data.user-reference.scene-objects.volumes.VdbVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.color_mult.links heading=4-%}
    </p>
    <h3>incandescence_gain_mult</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">A multiplier applied to the volume emission</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.incandescence_gain_mult.images data=site.data.user-reference.scene-objects.volumes.VdbVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.incandescence_gain_mult.videos data=site.data.user-reference.scene-objects.volumes.VdbVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.incandescence_gain_mult.links heading=4-%}
    </p>
    <h3>opacity_gain_mult</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">A multiplier applied to the volume density</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.opacity_gain_mult.images data=site.data.user-reference.scene-objects.volumes.VdbVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.opacity_gain_mult.videos data=site.data.user-reference.scene-objects.volumes.VdbVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.opacity_gain_mult.links heading=4-%}
    </p>
    <h3>surface_opacity_threshold</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.5
      <p class="scene-class-comments">Accumulated opacity that's considered the 'surface' for computing surface position and Z</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.surface_opacity_threshold.images data=site.data.user-reference.scene-objects.volumes.VdbVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.surface_opacity_threshold.videos data=site.data.user-reference.scene-objects.volumes.VdbVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.surface_opacity_threshold.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.bake_divisions.images data=site.data.user-reference.scene-objects.volumes.VdbVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.bake_divisions.videos data=site.data.user-reference.scene-objects.volumes.VdbVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.bake_divisions.links heading=4-%}
    </p>
    <h3>bake_resolution_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;default&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;divisions&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;voxel size&rdquo;<br>
      <p class="scene-class-comments">Method to specify grid resolution of baked density grid.<br>&emsp;&emsp;default: For shaders that are bound to vdb volumes, use vdb resolution.<br>&emsp;&emsp;         For shaders that are bounds to mesh geometries use 100 divisions<br>&emsp;&emsp;divisions: specify number of divisions.<br>&emsp;&emsp;voxel size: specify voxel size.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.bake_resolution_mode.images data=site.data.user-reference.scene-objects.volumes.VdbVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.bake_resolution_mode.videos data=site.data.user-reference.scene-objects.volumes.VdbVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.bake_resolution_mode.links heading=4-%}
    </p>
    <h3>bake_voxel_size</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 10.0
      <p class="scene-class-comments">Size of voxel in world space</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.bake_voxel_size.images data=site.data.user-reference.scene-objects.volumes.VdbVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.bake_voxel_size.videos data=site.data.user-reference.scene-objects.volumes.VdbVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.bake_voxel_size.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">label used in light aovs</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.label.images data=site.data.user-reference.scene-objects.volumes.VdbVolume-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.label.videos data=site.data.user-reference.scene-objects.volumes.VdbVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.VdbVolume.attributes.label.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.volumes.VdbVolume-%}