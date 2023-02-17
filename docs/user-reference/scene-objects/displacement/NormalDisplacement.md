---
title: NormalDisplacement

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# NormalDisplacement
{%-include overview.html data=site.data.user-reference.scene-objects.displacement.NormalDisplacement-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.NormalDisplacement.gallery data=site.data.user-reference.scene-objects.displacement.NormalDisplacement-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.displacement.NormalDisplacement.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>bound_padding</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">bound padding defines how much to extend the bounding box of the object. Keep this value as low as possible unless the geometry skips tessellation because control cage bounding box is out of camera frustum but the displacement stretch out of the original object bounding box (pre-displacement). Setting the bound padding too large will consume more memory and tessellation time.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.NormalDisplacement.attributes.bound_padding.images data=site.data.user-reference.scene-objects.displacement.NormalDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.NormalDisplacement.attributes.bound_padding.links heading=4-%}
    </p>
    <h3>height</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.NormalDisplacement.attributes.height.images data=site.data.user-reference.scene-objects.displacement.NormalDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.NormalDisplacement.attributes.height.links heading=4-%}
    </p>
    <h3>height_multiplier</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Multiply the computed (post zero-value) height with this factor.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.NormalDisplacement.attributes.height_multiplier.images data=site.data.user-reference.scene-objects.displacement.NormalDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.NormalDisplacement.attributes.height_multiplier.links heading=4-%}
    </p>
    <h3>zero_value</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.NormalDisplacement.attributes.zero_value.images data=site.data.user-reference.scene-objects.displacement.NormalDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.NormalDisplacement.attributes.zero_value.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.displacement.NormalDisplacement-%}