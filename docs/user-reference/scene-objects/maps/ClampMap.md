---
title: ClampMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ClampMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.ClampMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ClampMap.gallery data=site.data.user-reference.scene-objects.maps.ClampMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.ClampMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>clamp</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br/>
      default: True
      <p class="scene-class-comments">enables/disables clamping of the output values.  This useful prevent out-of-range values when expanding the input values.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ClampMap.attributes.clamp.images data=site.data.user-reference.scene-objects.maps.ClampMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ClampMap.attributes.clamp.links heading=4-%}
    </p>
    <h3>clamp_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br/>
      default: 1.0
      <p class="scene-class-comments">the maximum value output by this map when 'clamp' is enabled</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ClampMap.attributes.clamp_max.images data=site.data.user-reference.scene-objects.maps.ClampMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ClampMap.attributes.clamp_max.links heading=4-%}
    </p>
    <h3>clamp_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br/>
      default: 0.0
      <p class="scene-class-comments">the minimum value output by this map when 'clamp' is enabled</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ClampMap.attributes.clamp_min.images data=site.data.user-reference.scene-objects.maps.ClampMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ClampMap.attributes.clamp_min.links heading=4-%}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br/>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the input values to be remapped</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ClampMap.attributes.input.images data=site.data.user-reference.scene-objects.maps.ClampMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ClampMap.attributes.input.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.ClampMap-%}