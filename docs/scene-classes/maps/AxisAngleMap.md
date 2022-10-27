---
title: AxisAngleMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# AxisAngleMap
{%assign image_path=site.data.scene-classes.maps.AxisAngleMap.images.path%}
{%if site.data.scene-classes.maps.AxisAngleMap.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.AxisAngleMap.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.AxisAngleMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.AxisAngleMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>angle</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">the angle of rotation in degrees</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.AxisAngleMap.images.attributes.angle
          path=image_path
      %}
    </p>
    <h3>axis_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | world = 2 (default)
          | object = 4
      <p class="scene-class-comments">the space of the axis to rotate about</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.AxisAngleMap.images.attributes.axis_space
          path=image_path
      %}
    </p>
    <h3>input_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | render = 0 (default)
          | camera = 1
          | world = 2
          | screen = 3
          | object = 4
      <p class="scene-class-comments">the space to transform from</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.AxisAngleMap.images.attributes.input_space
          path=image_path
      %}
    </p>
    <h3>input_vector</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 1 ]
      <p class="scene-class-comments">input vector to be rotated</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.AxisAngleMap.images.attributes.input_vector
          path=image_path
      %}
    </p>
    <h3>output_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | render = 0 (default)
          | camera = 1
          | world = 2
          | screen = 3
          | object = 4
      <p class="scene-class-comments">the space to transform the resulting vector to</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.AxisAngleMap.images.attributes.output_space
          path=image_path
      %}
    </p>
    <h3>rotation_axis</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 1, 0 ]
      <p class="scene-class-comments">axis to be rotated around</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.AxisAngleMap.images.attributes.rotation_axis
          path=image_path
      %}
    </p>
  </p>
</details>
</div>