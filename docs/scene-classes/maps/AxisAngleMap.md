---
title: AxisAngleMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# AxisAngleMap
---
{%assign image_dir=site.data.scene-classes.maps.AxisAngleMap.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.maps.AxisAngleMap.gallery
    image_dir=image_dir
%}
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>angle</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">the angle of rotation in degrees</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.AxisAngleMap.angle
          image_dir=image_dir
      %}
    </p>
    <h3>axis_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | world = 2 (default)
          | object = 4
      <p class="scene-class-comments">the space of the axis to rotate about</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.AxisAngleMap.axis_space
          image_dir=image_dir
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
          images=site.data.scene-classes.maps.AxisAngleMap.input_space
          image_dir=image_dir
      %}
    </p>
    <h3>input_vector</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 1 ]
      <p class="scene-class-comments">input vector to be rotated</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.AxisAngleMap.input_vector
          image_dir=image_dir
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
          images=site.data.scene-classes.maps.AxisAngleMap.output_space
          image_dir=image_dir
      %}
    </p>
    <h3>rotation_axis</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 1, 0 ]
      <p class="scene-class-comments">axis to be rotated around</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.AxisAngleMap.rotation_axis
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>