---
title: HairMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# HairMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.HairMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.HairMap.gallery data=site.data.user-reference.scene-objects.maps.HairMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.HairMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>base_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Color at each hair's base</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.HairMap.attributes.base_color.images data=site.data.user-reference.scene-objects.maps.HairMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.HairMap.attributes.base_color.links heading=4-%}
    </p>
    <h3>bias</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.5
      <p class="scene-class-comments">Modulates the shape of blending between base and tip color. &lt; 0.5 pushes the center of the blend towards the base, and &gt; 0.5 towards the tip.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.HairMap.attributes.bias.images data=site.data.user-reference.scene-objects.maps.HairMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.HairMap.attributes.bias.links heading=4-%}
    </p>
    <h3>column_uv_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bound image map must have a haircolumnuvmap bound to its input texture coordinates.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.HairMap.attributes.column_uv_color.images data=site.data.user-reference.scene-objects.maps.HairMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.HairMap.attributes.column_uv_color.links heading=4-%}
    </p>
    <h3>gain</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.5
      <p class="scene-class-comments">Modulates the shape of blending between base and tip color. &lt; 0.5 is higher contrast in the middle of the blend. &gt; 0.5 is higher contrast at the start and end, and lower contrast in the middle.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.HairMap.attributes.gain.images data=site.data.user-reference.scene-objects.maps.HairMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.HairMap.attributes.gain.links heading=4-%}
    </p>
    <h3>tip_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Color at each hair's tip</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.HairMap.attributes.tip_color.images data=site.data.user-reference.scene-objects.maps.HairMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.HairMap.attributes.tip_color.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.HairMap-%}