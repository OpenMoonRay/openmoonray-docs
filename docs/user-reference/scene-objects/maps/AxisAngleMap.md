---
title: AxisAngleMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# AxisAngleMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.AxisAngleMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.AxisAngleMap.gallery data=site.data.user-reference.scene-objects.maps.AxisAngleMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.AxisAngleMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>angle</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">The angle of rotation in degrees</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.AxisAngleMap.attributes.angle.images data=site.data.user-reference.scene-objects.maps.AxisAngleMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.AxisAngleMap.attributes.angle.links heading=4-%}
    </p>
    <h3>axis_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;2 = &ldquo;world&rdquo; (default)<br>
          &nbsp;&nbsp;4 = &ldquo;object&rdquo;<br>
      <p class="scene-class-comments">The space of the axis to rotate about</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.AxisAngleMap.attributes.axis_space.images data=site.data.user-reference.scene-objects.maps.AxisAngleMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.AxisAngleMap.attributes.axis_space.links heading=4-%}
    </p>
    <h3>input_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;render&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;camera&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;world&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;screen&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;object&rdquo;<br>
      <p class="scene-class-comments">The space to transform from</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.AxisAngleMap.attributes.input_space.images data=site.data.user-reference.scene-objects.maps.AxisAngleMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.AxisAngleMap.attributes.input_space.links heading=4-%}
    </p>
    <h3>input_vector</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 1 ]
      <p class="scene-class-comments">Input vector to be rotated</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.AxisAngleMap.attributes.input_vector.images data=site.data.user-reference.scene-objects.maps.AxisAngleMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.AxisAngleMap.attributes.input_vector.links heading=4-%}
    </p>
    <h3>output_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;render&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;camera&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;world&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;screen&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;object&rdquo;<br>
      <p class="scene-class-comments">The space to transform the resulting vector to</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.AxisAngleMap.attributes.output_space.images data=site.data.user-reference.scene-objects.maps.AxisAngleMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.AxisAngleMap.attributes.output_space.links heading=4-%}
    </p>
    <h3>rotation_axis</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      <br>
      default: [ 0, 1, 0 ]
      <p class="scene-class-comments">Axis to be rotated around</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.AxisAngleMap.attributes.rotation_axis.images data=site.data.user-reference.scene-objects.maps.AxisAngleMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.AxisAngleMap.attributes.rotation_axis.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.AxisAngleMap-%}