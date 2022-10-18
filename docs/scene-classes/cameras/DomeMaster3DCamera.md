---
title: DomeMaster3DCamera

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DomeMaster3DCamera
---
{%assign image_dir=site.data.scene-classes.cameras.DomeMaster3DCamera.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.cameras.DomeMaster3DCamera.gallery
    image_dir=image_dir
%}
<details open>
  <summary>Frustum attributes</summary>
  <p>
    <h3>far</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 10000.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCamera.far
          image_dir=image_dir
      %}
    </p>
    <h3>near</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCamera.near
          image_dir=image_dir
      %}
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
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCamera.mb_shutter_bias
          image_dir=image_dir
      %}
    </p>
    <h3>mb_shutter_close</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.25
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCamera.mb_shutter_close
          image_dir=image_dir
      %}
    </p>
    <h3>mb_shutter_open</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: -0.25
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCamera.mb_shutter_open
          image_dir=image_dir
      %}
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
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCamera.pixel_sample_map
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Stereo attributes</summary>
  <p>
    <h3>head_tilt_map</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCamera.head_tilt_map
          image_dir=image_dir
      %}
    </p>
    <h3>interocular_distance_map_file_name</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCamera.interocular_distance_map_file_name
          image_dir=image_dir
      %}
    </p>
    <h3>stereo_convergence_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 360.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCamera.stereo_convergence_distance
          image_dir=image_dir
      %}
    </p>
    <h3>stereo_interocular_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 6.5
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCamera.stereo_interocular_distance
          image_dir=image_dir
      %}
    </p>
    <h3>stereo_view</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | center view = 0 (default)
          | left view = 1
          | right view = 2
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCamera.stereo_view
          image_dir=image_dir
      %}
    </p>
    <h3>zenith_mode</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCamera.zenith_mode
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>FOV_horizontal_angle</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 60.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCamera.FOV_horizontal_angle
          image_dir=image_dir
      %}
    </p>
    <h3>FOV_vertical_angle</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 30.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCamera.FOV_vertical_angle
          image_dir=image_dir
      %}
    </p>
    <h3>flip_ray_x</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCamera.flip_ray_x
          image_dir=image_dir
      %}
    </p>
    <h3>flip_ray_y</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCamera.flip_ray_y
          image_dir=image_dir
      %}
    </p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCamera.node_xform
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>