---
title: LODMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# LODMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.LODMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.LODMap.gallery data=site.data.user-reference.scene-objects.maps.LODMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.LODMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>far_value</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">value output when feature_width/camera_distance is more than or equal to stop</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.LODMap.attributes.far_value.images data=site.data.user-reference.scene-objects.maps.LODMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.LODMap.attributes.far_value.videos data=site.data.user-reference.scene-objects.maps.LODMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.LODMap.attributes.far_value.links heading=4-%}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;feature width&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;camera distance&rdquo;<br>
      <p class="scene-class-comments">Use feature_width for LOD based on average, world-space feature-width visible in a pixel, correctly changing with resolution. Use camera_distance for LOD based on distance from render cam.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.LODMap.attributes.mode.images data=site.data.user-reference.scene-objects.maps.LODMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.LODMap.attributes.mode.videos data=site.data.user-reference.scene-objects.maps.LODMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.LODMap.attributes.mode.links heading=4-%}
    </p>
    <h3>near_value</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">value output when feature_width/camera_distance is less than or equal to start</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.LODMap.attributes.near_value.images data=site.data.user-reference.scene-objects.maps.LODMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.LODMap.attributes.near_value.videos data=site.data.user-reference.scene-objects.maps.LODMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.LODMap.attributes.near_value.links heading=4-%}
    </p>
    <h3>start</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.009999999776482582
      <p class="scene-class-comments">feature_width/camera_distance at which to start blending near_value-&gt;far_value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.LODMap.attributes.start.images data=site.data.user-reference.scene-objects.maps.LODMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.LODMap.attributes.start.videos data=site.data.user-reference.scene-objects.maps.LODMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.LODMap.attributes.start.links heading=4-%}
    </p>
    <h3>stop</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.10000000149011612
      <p class="scene-class-comments">feature_width/camera_distance at which to stop blending near_value-&gt;far_value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.LODMap.attributes.stop.images data=site.data.user-reference.scene-objects.maps.LODMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.LODMap.attributes.stop.videos data=site.data.user-reference.scene-objects.maps.LODMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.LODMap.attributes.stop.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.LODMap-%}