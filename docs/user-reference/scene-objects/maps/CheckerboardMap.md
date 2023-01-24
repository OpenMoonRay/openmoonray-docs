---
title: Checkerboard Map
---
# CheckerboardMap
{%-include overview.html data=site.data.scene-classes.maps.CheckerboardMap-%}
{%-include image-gallery.html images=site.data.scene-classes.maps.CheckerboardMap.gallery data=site.data.scene-classes.maps.CheckerboardMap-%}
{%-include see-also.html links=site.data.scene-classes.maps.CheckerboardMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>color_A</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.CheckerboardMap.attributes.color_A.images data=site.data.scene-classes.maps.CheckerboardMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.CheckerboardMap.attributes.color_A.links heading=4-%}
    </p>
    <h3>color_B</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.CheckerboardMap.attributes.color_B.images data=site.data.scene-classes.maps.CheckerboardMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.CheckerboardMap.attributes.color_B.links heading=4-%}
    </p>
    <h3>input_texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">bind a shader that outputs UV coordinates (such as a projection shader) here</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.CheckerboardMap.attributes.input_texture_coordinates.images data=site.data.scene-classes.maps.CheckerboardMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.CheckerboardMap.attributes.input_texture_coordinates.links heading=4-%}
    </p>
    <h3>num_u_tiles</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 8
      <p class="scene-class-comments">number of checkerboard squares in the U direction</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.CheckerboardMap.attributes.num_u_tiles.images data=site.data.scene-classes.maps.CheckerboardMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.CheckerboardMap.attributes.num_u_tiles.links heading=4-%}
    </p>
    <h3>num_v_tiles</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 8
      <p class="scene-class-comments">number of checkerboard squares in the V direction</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.CheckerboardMap.attributes.num_v_tiles.images data=site.data.scene-classes.maps.CheckerboardMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.CheckerboardMap.attributes.num_v_tiles.links heading=4-%}
    </p>
    <h3>texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | texture = 0 (default)
          | input texture coordinates = 1
      <p class="scene-class-comments">switches between the model's uv coordinates or the input texture coordinates</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.CheckerboardMap.attributes.texture_coordinates.images data=site.data.scene-classes.maps.CheckerboardMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.CheckerboardMap.attributes.texture_coordinates.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.scene-classes.maps.CheckerboardMap-%}