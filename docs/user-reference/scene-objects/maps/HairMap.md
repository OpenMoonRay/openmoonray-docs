---
title: HairMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# HairMap
{%-include overview.html data=site.data.scene-classes.maps.HairMap-%}
{%-include image-gallery.html images=site.data.scene-classes.maps.HairMap.gallery data=site.data.scene-classes.maps.HairMap-%}
{%-include see-also.html links=site.data.scene-classes.maps.HairMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>base_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.HairMap.attributes.base_color.images data=site.data.scene-classes.maps.HairMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.HairMap.attributes.base_color.links heading=4-%}
    </p>
    <h3>bias</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.5
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.HairMap.attributes.bias.images data=site.data.scene-classes.maps.HairMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.HairMap.attributes.bias.links heading=4-%}
    </p>
    <h3>column_uv_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bound image map must have a HairColumnUvMap bound to its input texture coordinates.</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.HairMap.attributes.column_uv_color.images data=site.data.scene-classes.maps.HairMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.HairMap.attributes.column_uv_color.links heading=4-%}
    </p>
    <h3>gain</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.5
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.HairMap.attributes.gain.images data=site.data.scene-classes.maps.HairMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.HairMap.attributes.gain.links heading=4-%}
    </p>
    <h3>tip_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.HairMap.attributes.tip_color.images data=site.data.scene-classes.maps.HairMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.HairMap.attributes.tip_color.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.scene-classes.maps.HairMap-%}