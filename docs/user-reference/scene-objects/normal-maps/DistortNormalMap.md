---
title: DistortNormalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DistortNormalMap
{%-include overview.html data=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap.gallery data=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Space attributes</summary>
  <p>
    <h3>input_texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap.attributes.input_texture_coordinates.images data=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap.attributes.input_texture_coordinates.links heading=4-%}
    </p>
    <h3>noise_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;2 = name<br>
          &nbsp;&nbsp;4 = name (default)<br>
          &nbsp;&nbsp;5 = name<br>
          &nbsp;&nbsp;6 = name<br>
          &nbsp;&nbsp;7 = name<br>
          &nbsp;&nbsp;8 = name<br>
          &nbsp;&nbsp;9 = name<br>
      <p class="scene-class-comments">The space to calculate the noise in</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap.attributes.noise_space.images data=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap.attributes.noise_space.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>amplitude_U</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">controls amplitude of U distortion</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap.attributes.amplitude_U.images data=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap.attributes.amplitude_U.links heading=4-%}
    </p>
    <h3>amplitude_V</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">controls amplitude of V distortion</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap.attributes.amplitude_V.images data=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap.attributes.amplitude_V.links heading=4-%}
    </p>
    <h3>frequency_U</h3>
    <p class="scene-class-type">
      <b>Vec3f</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">controls noise frequency for U distortion</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap.attributes.frequency_U.images data=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap.attributes.frequency_U.links heading=4-%}
    </p>
    <h3>frequency_V</h3>
    <p class="scene-class-type">
      <b>Vec3f</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">controls noise frequency for V distortion</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap.attributes.frequency_V.images data=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap.attributes.frequency_V.links heading=4-%}
    </p>
    <h3>input_U</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">input U / tangent for distortion</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap.attributes.input_U.images data=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap.attributes.input_U.links heading=4-%}
    </p>
    <h3>input_V</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">input V / bitangent for distortion</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap.attributes.input_V.images data=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap.attributes.input_V.links heading=4-%}
    </p>
    <h3>input_normals</h3>
    <p class="scene-class-type">
      <b>NormalMap</b>
      <br>
      default: None
      <p class="scene-class-comments">optional input to distort. if not connected, use geom normals</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap.attributes.input_normals.images data=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap.attributes.input_normals.links heading=4-%}
    </p>
    <h3>seed</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 0
      <p class="scene-class-comments">the seed for the noise generation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap.attributes.seed.images data=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap.attributes.seed.links heading=4-%}
    </p>
    <h3>use_input_vectors</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">when checked, use input_U and V. otherwise use geometry dPds/t</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap.attributes.use_input_vectors.images data=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap.attributes.use_input_vectors.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.normal-maps.DistortNormalMap-%}