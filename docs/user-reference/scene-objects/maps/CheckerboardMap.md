---
title: CheckerboardMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# CheckerboardMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.CheckerboardMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.CheckerboardMap.gallery data=site.data.user-reference.scene-objects.maps.CheckerboardMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.CheckerboardMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>color_A</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.CheckerboardMap.attributes.color_A.images data=site.data.user-reference.scene-objects.maps.CheckerboardMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.CheckerboardMap.attributes.color_A.links heading=4-%}
    </p>
    <h3>color_B</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.CheckerboardMap.attributes.color_B.images data=site.data.user-reference.scene-objects.maps.CheckerboardMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.CheckerboardMap.attributes.color_B.links heading=4-%}
    </p>
    <h3>input_texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">bind a shader that outputs UV coordinates (such as a projection shader) here</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.CheckerboardMap.attributes.input_texture_coordinates.images data=site.data.user-reference.scene-objects.maps.CheckerboardMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.CheckerboardMap.attributes.input_texture_coordinates.links heading=4-%}
    </p>
    <h3>num_u_tiles</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 8
      <p class="scene-class-comments">number of checkerboard squares in the U direction</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.CheckerboardMap.attributes.num_u_tiles.images data=site.data.user-reference.scene-objects.maps.CheckerboardMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.CheckerboardMap.attributes.num_u_tiles.links heading=4-%}
    </p>
    <h3>num_v_tiles</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 8
      <p class="scene-class-comments">number of checkerboard squares in the V direction</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.CheckerboardMap.attributes.num_v_tiles.images data=site.data.user-reference.scene-objects.maps.CheckerboardMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.CheckerboardMap.attributes.num_v_tiles.links heading=4-%}
    </p>
    <h3>texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;&nbsp;&nbsp;0 = texture(default)<br>
          &nbsp;&nbsp;&nbsp;&nbsp;1 = input texture coordinates<br>
      <p class="scene-class-comments">switches between the model's uv coordinates or the input texture coordinates</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.CheckerboardMap.attributes.texture_coordinates.images data=site.data.user-reference.scene-objects.maps.CheckerboardMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.CheckerboardMap.attributes.texture_coordinates.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.CheckerboardMap-%}