---
title: DomeMaster3DCamera

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DomeMaster3DCamera
{%assign image_path=site.data.scene-classes.cameras.DomeMaster3DCamera.image_path%}
{%if site.data.scene-classes.cameras.DomeMaster3DCamera.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.cameras.DomeMaster3DCamera.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.cameras.DomeMaster3DCamera.links-%}
---
## See Also
{%for link in site.data.scene-classes.cameras.DomeMaster3DCamera.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
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
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCameraattributes.far.images.
          path=image_path
      %}
    </p>
    <h3>near</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCameraattributes.near.images.
          path=image_path
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
          images=site.data.scene-classes.cameras.DomeMaster3DCameraattributes.mb_shutter_bias.images.
          path=image_path
      %}
    </p>
    <h3>mb_shutter_close</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.25
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCameraattributes.mb_shutter_close.images.
          path=image_path
      %}
    </p>
    <h3>mb_shutter_open</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: -0.25
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCameraattributes.mb_shutter_open.images.
          path=image_path
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
          images=site.data.scene-classes.cameras.DomeMaster3DCameraattributes.pixel_sample_map.images.
          path=image_path
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
          images=site.data.scene-classes.cameras.DomeMaster3DCameraattributes.head_tilt_map.images.
          path=image_path
      %}
    </p>
    <h3>interocular_distance_map_file_name</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCameraattributes.interocular_distance_map_file_name.images.
          path=image_path
      %}
    </p>
    <h3>stereo_convergence_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 360.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCameraattributes.stereo_convergence_distance.images.
          path=image_path
      %}
    </p>
    <h3>stereo_interocular_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 6.5
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCameraattributes.stereo_interocular_distance.images.
          path=image_path
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
          images=site.data.scene-classes.cameras.DomeMaster3DCameraattributes.stereo_view.images.
          path=image_path
      %}
    </p>
    <h3>zenith_mode</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCameraattributes.zenith_mode.images.
          path=image_path
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
          images=site.data.scene-classes.cameras.DomeMaster3DCameraattributes.FOV_horizontal_angle.images.
          path=image_path
      %}
    </p>
    <h3>FOV_vertical_angle</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 30.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCameraattributes.FOV_vertical_angle.images.
          path=image_path
      %}
    </p>
    <h3>flip_ray_x</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCameraattributes.flip_ray_x.images.
          path=image_path
      %}
    </p>
    <h3>flip_ray_y</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCameraattributes.flip_ray_y.images.
          path=image_path
      %}
    </p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.DomeMaster3DCameraattributes.node_xform.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>