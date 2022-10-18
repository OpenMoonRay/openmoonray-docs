---
title: VdbVolume

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# VdbVolume
---
{%assign image_dir=site.data.scene-classes.volumes.VdbVolume.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.volumes.VdbVolume.gallery
    image_dir=image_dir
%}
<details open>
  <summary>Optical Properties attributes</summary>
  <p>
    <h3>anisotropy</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Value in the interval [-1,1] that defines how foward (1) or backward (-1) scattering the volume is. 0.0 is isotropic.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.volumes.VdbVolume.anisotropy
          image_dir=image_dir
      %}
    </p>
    <h3>color_mult</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">A multiplier further applied to the color.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.volumes.VdbVolume.color_mult
          image_dir=image_dir
      %}
    </p>
    <h3>incandescence_gain_mult</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">A multiplier further applied to the incandescence gain.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.volumes.VdbVolume.incandescence_gain_mult
          image_dir=image_dir
      %}
    </p>
    <h3>opacity_gain_mult</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">A multiplier further applied to the opacity gain.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.volumes.VdbVolume.opacity_gain_mult
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>bake_divisions</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 100
      <p class="scene-class-comments">Divide widest axis by this many divisions</p>
      {% include image-gallery.html
          images=site.data.scene-classes.volumes.VdbVolume.bake_divisions
          image_dir=image_dir
      %}
    </p>
    <h3>bake_resolution_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | default = 0 (default)
          | divisions = 1
          | voxel size = 2
      <p class="scene-class-comments">Toggle method to specify grid resolution of baked density grid.<br>&emsp;&emsp;default: for shaders that are bound to vdb volumes, use vdb resolution. For shaders that are bounds to mesh geometriesuse 100 divisions<br>&emsp;&emsp;divisions: specify number of divisions.<br>&emsp;&emsp;voxel size: specify voxel size.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.volumes.VdbVolume.bake_resolution_mode
          image_dir=image_dir
      %}
    </p>
    <h3>bake_voxel_size</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 10.0
      <p class="scene-class-comments">Size of voxel in world space</p>
      {% include image-gallery.html
          images=site.data.scene-classes.volumes.VdbVolume.bake_voxel_size
          image_dir=image_dir
      %}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in light aovs</p>
      {% include image-gallery.html
          images=site.data.scene-classes.volumes.VdbVolume.label
          image_dir=image_dir
      %}
    </p>
    <h3>surface_opacity_threshold</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">Accumulated opacity that's considered the 'surface' for computing surface position and Z</p>
      {% include image-gallery.html
          images=site.data.scene-classes.volumes.VdbVolume.surface_opacity_threshold
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>