---
title: OrthographicCamera

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# OrthographicCamera
{%assign image_path=site.data.scene-classes.cameras.OrthographicCamera.image_path%}
{%if site.data.scene-classes.cameras.OrthographicCamera.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.cameras.OrthographicCamera.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.cameras.OrthographicCamera.links-%}
---
## See Also
{%for link in site.data.scene-classes.cameras.OrthographicCamera.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.url}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Depth of Field attributes</summary>
  <p>
    <h3>bokeh</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Enable Bokeh. Requires DOF to be enabled.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.OrthographicCamera.attributes.bokeh.images.
          path=image_path
      %}
    </p>
    <h3>bokeh_angle</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Angle of iris rotation</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.OrthographicCamera.attributes.bokeh_angle.images.
          path=image_path
      %}
    </p>
    <h3>bokeh_image</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">Path to image file to be used for the iris</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.OrthographicCamera.attributes.bokeh_image.images.
          path=image_path
      %}
    </p>
    <h3>bokeh_sides</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">Number of sides of the iris. Specifying less than 3 sides will default to a disk.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.OrthographicCamera.attributes.bokeh_sides.images.
          path=image_path
      %}
    </p>
    <h3>bokeh_weight_location</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Distance from the origin of Bokeh shape</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.OrthographicCamera.attributes.bokeh_weight_location.images.
          path=image_path
      %}
    </p>
    <h3>bokeh_weight_strength</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Controls the strength of weights as samples approach the weight location</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.OrthographicCamera.attributes.bokeh_weight_strength.images.
          path=image_path
      %}
    </p>
    <h3>dof</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.OrthographicCamera.attributes.dof.images.
          path=image_path
      %}
    </p>
    <h3>dof_aperture</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 8.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.OrthographicCamera.attributes.dof_aperture.images.
          path=image_path
      %}
    </p>
    <h3>dof_focus_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.OrthographicCamera.attributes.dof_focus_distance.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Frustum attributes</summary>
  <p>
    <h3>far</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 10000.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.OrthographicCamera.attributes.far.images.
          path=image_path
      %}
    </p>
    <h3>film_width_aperture</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 24.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.OrthographicCamera.attributes.film_width_aperture.images.
          path=image_path
      %}
    </p>
    <h3>horizontal_film_offset</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.OrthographicCamera.attributes.horizontal_film_offset.images.
          path=image_path
      %}
    </p>
    <h3>near</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.OrthographicCamera.attributes.near.images.
          path=image_path
      %}
    </p>
    <h3>pixel_aspect_ratio</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">ratio of pixel size y / x</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.OrthographicCamera.attributes.pixel_aspect_ratio.images.
          path=image_path
      %}
    </p>
    <h3>vertical_film_offset</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.OrthographicCamera.attributes.vertical_film_offset.images.
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
          images=site.data.scene-classes.cameras.OrthographicCamera.attributes.mb_shutter_bias.images.
          path=image_path
      %}
    </p>
    <h3>mb_shutter_close</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.25
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.OrthographicCamera.attributes.mb_shutter_close.images.
          path=image_path
      %}
    </p>
    <h3>mb_shutter_open</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: -0.25
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.cameras.OrthographicCamera.attributes.mb_shutter_open.images.
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
          images=site.data.scene-classes.cameras.OrthographicCamera.attributes.pixel_sample_map.images.
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
          images=site.data.scene-classes.cameras.OrthographicCamera.attributes.node_xform.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>