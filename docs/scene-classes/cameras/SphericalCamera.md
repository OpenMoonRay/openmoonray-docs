---
title: SphericalCamera

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# SphericalCamera
{%assign image_path=site.data.scene-classes.cameras.SphericalCamera.images.path%}
{%if site.data.scene-classes.cameras.SphericalCamera.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.cameras.SphericalCamera.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.cameras.SphericalCamera.links-%}
---
## See Also
{%for link in site.data.scene-classes.cameras.SphericalCamera.links-%}
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
          images=site.data.scene-classes.cameras.SphericalCamera.images.attributes.far
          path=image_path
      %}
    </p>
    <h3>near</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.SphericalCamera.images.attributes.near
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
          images=site.data.scene-classes.cameras.SphericalCamera.images.attributes.mb_shutter_bias
          path=image_path
      %}
    </p>
    <h3>mb_shutter_close</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.25
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.SphericalCamera.images.attributes.mb_shutter_close
          path=image_path
      %}
    </p>
    <h3>mb_shutter_open</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: -0.25
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.SphericalCamera.images.attributes.mb_shutter_open
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
          images=site.data.scene-classes.cameras.SphericalCamera.images.attributes.pixel_sample_map
          path=image_path
      %}
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
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.SphericalCamera.images.attributes.node_xform
          path=image_path
      %}
    </p>
  </p>
</details>
</div>