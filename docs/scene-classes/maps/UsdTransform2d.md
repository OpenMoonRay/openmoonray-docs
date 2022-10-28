---
title: UsdTransform2d

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# UsdTransform2d
{%include image-gallery.html images=site.data.scene-classes.maps.UsdTransform2d.gallery data=site.data.scene-classes.maps.UsdTransform2d-%}
{%include see-also.html links=site.data.scene-classes.maps.UsdTransform2d.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>in</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">This input provides the data. It is usually connected to a UsdPrimvarReader_float2 that will provide the data.</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.UsdTransform2d.attributes.in.images data=site.data.scene-classes.maps.UsdTransform2d-%}
      {%include see-also.html links=site.data.scene-classes.maps.UsdTransform2d.attributes.in.links-%}
    </p>
    <h3>rotation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Counter-clockwise rotation in degrees around the origin to be applied to all components of the data.</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.UsdTransform2d.attributes.rotation.images data=site.data.scene-classes.maps.UsdTransform2d-%}
      {%include see-also.html links=site.data.scene-classes.maps.UsdTransform2d.attributes.rotation.links-%}
    </p>
    <h3>scale</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 1, 1 ]
      <p class="scene-class-comments">Scale around the origin to be applied to all components of the data.</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.UsdTransform2d.attributes.scale.images data=site.data.scene-classes.maps.UsdTransform2d-%}
      {%include see-also.html links=site.data.scene-classes.maps.UsdTransform2d.attributes.scale.links-%}
    </p>
    <h3>translation</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0, 0 ]
      <p class="scene-class-comments">Translation to be applied to all components of the data.</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.UsdTransform2d.attributes.translation.images data=site.data.scene-classes.maps.UsdTransform2d-%}
      {%include see-also.html links=site.data.scene-classes.maps.UsdTransform2d.attributes.translation.links-%}
    </p>
  </p>
</details>
</div>