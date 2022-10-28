---
title: DebugMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DebugMap
{%-include image-gallery.html images=site.data.scene-classes.maps.DebugMap.gallery data=site.data.scene-classes.maps.DebugMap-%}
{%-include see-also.html links=site.data.scene-classes.maps.DebugMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Normal attributes</summary>
  <p>
    <h3>input_normal_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | tangent = 0 (default)
          | render = 1
      <p class="scene-class-comments">Specifies what space the input normal is in.  Usually this is tangent space for texture maps and render space for projections</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.DebugMap.attributes.input_normal_space.images data=site.data.scene-classes.maps.DebugMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.DebugMap.attributes.input_normal_space.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Primitive Attribute attributes</summary>
  <p>
    <h3>primitive_attribute_name</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: surface_st
      <p class="scene-class-comments">the name of primitive attribute to displayed when attribute 'map type' is set to 'primitive attribute'</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.DebugMap.attributes.primitive_attribute_name.images data=site.data.scene-classes.maps.DebugMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.DebugMap.attributes.primitive_attribute_name.links heading=4-%}
    </p>
    <h3>primitive_attribute_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | float = 0
          | vec2f = 1 (default)
          | vec3f = 2
          | rgb = 3
      <p class="scene-class-comments">the type of primitive attribute to displayed when attribute 'map type' is set to 'primitive attribute'</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.DebugMap.attributes.primitive_attribute_type.images data=site.data.scene-classes.maps.DebugMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.DebugMap.attributes.primitive_attribute_type.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>checkerboard</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.DebugMap.attributes.checkerboard.images data=site.data.scene-classes.maps.DebugMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.DebugMap.attributes.checkerboard.links heading=4-%}
    </p>
    <h3>input_normal</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.DebugMap.attributes.input_normal.images data=site.data.scene-classes.maps.DebugMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.DebugMap.attributes.input_normal.links heading=4-%}
    </p>
    <h3>input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.DebugMap.attributes.input_normal_dial.images data=site.data.scene-classes.maps.DebugMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.DebugMap.attributes.input_normal_dial.links heading=4-%}
    </p>
    <h3>map_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | position = 0 (default)
          | texture st = 1
          | shading normal = 2
          | geometric normal = 3
          | dpds = 4
          | dpdt = 5
          | primitive attribute = 6
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.DebugMap.attributes.map_type.images data=site.data.scene-classes.maps.DebugMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.DebugMap.attributes.map_type.links heading=4-%}
    </p>
  </p>
</details>
</div>