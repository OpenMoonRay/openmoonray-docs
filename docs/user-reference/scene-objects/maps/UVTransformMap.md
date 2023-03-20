---
title: UVTransformMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# UVTransformMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.UVTransformMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UVTransformMap.gallery data=site.data.user-reference.scene-objects.maps.UVTransformMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.UVTransformMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>offset</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      <br>
      default: [ 0, 0 ]
      <p class="scene-class-comments">Shifts uv coordinates</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UVTransformMap.attributes.offset.images data=site.data.user-reference.scene-objects.maps.UVTransformMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UVTransformMap.attributes.offset.links heading=4-%}
    </p>
    <h3>rotation_angle</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Rotation in degrees</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UVTransformMap.attributes.rotation_angle.images data=site.data.user-reference.scene-objects.maps.UVTransformMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UVTransformMap.attributes.rotation_angle.links heading=4-%}
    </p>
    <h3>rotation_axis</h3>
    <p class="scene-class-type">
      <b>Vec3f</b>
      <br>
      default: [ 0, 0, 1 ]
      <p class="scene-class-comments">Axis in which to rotate (only for 3d spaces)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UVTransformMap.attributes.rotation_axis.images data=site.data.user-reference.scene-objects.maps.UVTransformMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UVTransformMap.attributes.rotation_axis.links heading=4-%}
    </p>
    <h3>rotation_center</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      <br>
      default: [ 0.5, 0.5 ]
      <p class="scene-class-comments">Uv coordinate around which to rotate</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UVTransformMap.attributes.rotation_center.images data=site.data.user-reference.scene-objects.maps.UVTransformMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UVTransformMap.attributes.rotation_center.links heading=4-%}
    </p>
    <h3>scale</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      <br>
      default: [ 1, 1 ]
      <p class="scene-class-comments">Scales uv coordinates (after rotation, before offset)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UVTransformMap.attributes.scale.images data=site.data.user-reference.scene-objects.maps.UVTransformMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UVTransformMap.attributes.scale.links heading=4-%}
    </p>
    <h3>space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;render&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;camera&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;world&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;screen&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;object&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;reference&rdquo;<br>
          &nbsp;&nbsp;6 = &ldquo;texture&rdquo; (default)<br>
      <p class="scene-class-comments">Determines source of coordinates. default is mesh uvs. other options procedurally create uvs from the chosen space.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.UVTransformMap.attributes.space.images data=site.data.user-reference.scene-objects.maps.UVTransformMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.UVTransformMap.attributes.space.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.UVTransformMap-%}