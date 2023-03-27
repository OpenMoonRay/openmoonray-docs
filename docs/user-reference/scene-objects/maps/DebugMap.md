---
title: DebugMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DebugMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.DebugMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DebugMap.gallery data=site.data.user-reference.scene-objects.maps.DebugMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.DebugMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Normal attributes</summary>
  <p>
    <h3>input_normal_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;tangent&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;render&rdquo;<br>
      <p class="scene-class-comments">Specifies what space the input normal is in.  Usually this is tangent space for texture maps and render space for projections</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DebugMap.attributes.input_normal_space.images data=site.data.user-reference.scene-objects.maps.DebugMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.DebugMap.attributes.input_normal_space.videos data=site.data.user-reference.scene-objects.maps.DebugMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.DebugMap.attributes.input_normal_space.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Primitive Attribute attributes</summary>
  <p>
    <h3>primitive_attribute_name</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: surface_st
      <p class="scene-class-comments">the name of primitive attribute to displayed when attribute 'map type' is set to 'primitive attribute'</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DebugMap.attributes.primitive_attribute_name.images data=site.data.user-reference.scene-objects.maps.DebugMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.DebugMap.attributes.primitive_attribute_name.videos data=site.data.user-reference.scene-objects.maps.DebugMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.DebugMap.attributes.primitive_attribute_name.links heading=4-%}
    </p>
    <h3>primitive_attribute_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;float&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;vec2f&rdquo; (default)<br>
          &nbsp;&nbsp;2 = &ldquo;vec3f&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;rgb&rdquo;<br>
      <p class="scene-class-comments">the type of primitive attribute to displayed when attribute 'map type' is set to 'primitive attribute'</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DebugMap.attributes.primitive_attribute_type.images data=site.data.user-reference.scene-objects.maps.DebugMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.DebugMap.attributes.primitive_attribute_type.videos data=site.data.user-reference.scene-objects.maps.DebugMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.DebugMap.attributes.primitive_attribute_type.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>checkerboard</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DebugMap.attributes.checkerboard.images data=site.data.user-reference.scene-objects.maps.DebugMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.DebugMap.attributes.checkerboard.videos data=site.data.user-reference.scene-objects.maps.DebugMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.DebugMap.attributes.checkerboard.links heading=4-%}
    </p>
    <h3>input_normal</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DebugMap.attributes.input_normal.images data=site.data.user-reference.scene-objects.maps.DebugMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.DebugMap.attributes.input_normal.videos data=site.data.user-reference.scene-objects.maps.DebugMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.DebugMap.attributes.input_normal.links heading=4-%}
    </p>
    <h3>input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DebugMap.attributes.input_normal_dial.images data=site.data.user-reference.scene-objects.maps.DebugMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.DebugMap.attributes.input_normal_dial.videos data=site.data.user-reference.scene-objects.maps.DebugMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.DebugMap.attributes.input_normal_dial.links heading=4-%}
    </p>
    <h3>map_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;position&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;texture st&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;shading normal&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;geometric normal&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;dpds&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;dpdt&rdquo;<br>
          &nbsp;&nbsp;6 = &ldquo;primitive attribute&rdquo;<br>
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.DebugMap.attributes.map_type.images data=site.data.user-reference.scene-objects.maps.DebugMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.DebugMap.attributes.map_type.videos data=site.data.user-reference.scene-objects.maps.DebugMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.DebugMap.attributes.map_type.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.DebugMap-%}