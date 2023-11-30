---
title: CombineDisplacement

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# CombineDisplacement
{%-include overview.html data=site.data.user-reference.scene-objects.displacement.CombineDisplacement-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.CombineDisplacement.gallery data=site.data.user-reference.scene-objects.displacement.CombineDisplacement-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.displacement.CombineDisplacement.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>bound_padding</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">bound padding defines how much to extend the bounding box of the object. Keep this value as low as possible unless the geometry skips tessellation because control cage bounding box is out of camera frustum but the displacement stretch out of the original object bounding box (pre-displacement). Setting the bound padding too large will consume more memory and tessellation time.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.CombineDisplacement.attributes.bound_padding.images data=site.data.user-reference.scene-objects.displacement.CombineDisplacement-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.displacement.CombineDisplacement.attributes.bound_padding.videos data=site.data.user-reference.scene-objects.displacement.CombineDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.CombineDisplacement.attributes.bound_padding.links heading=4-%}
    </p>
    <h3>input_1</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-comments">Displacement object 1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.CombineDisplacement.attributes.input_1.images data=site.data.user-reference.scene-objects.displacement.CombineDisplacement-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.displacement.CombineDisplacement.attributes.input_1.videos data=site.data.user-reference.scene-objects.displacement.CombineDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.CombineDisplacement.attributes.input_1.links heading=4-%}
    </p>
    <h3>input_2</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      <br>
      default: None
      <p class="scene-class-comments">Displacement object 2</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.CombineDisplacement.attributes.input_2.images data=site.data.user-reference.scene-objects.displacement.CombineDisplacement-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.displacement.CombineDisplacement.attributes.input_2.videos data=site.data.user-reference.scene-objects.displacement.CombineDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.CombineDisplacement.attributes.input_2.links heading=4-%}
    </p>
    <h3>operation</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;add&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;max magnitude&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;min magnitude&rdquo;<br>
      <p class="scene-class-comments">The method used for combining the displacements</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.CombineDisplacement.attributes.operation.images data=site.data.user-reference.scene-objects.displacement.CombineDisplacement-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.displacement.CombineDisplacement.attributes.operation.videos data=site.data.user-reference.scene-objects.displacement.CombineDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.CombineDisplacement.attributes.operation.links heading=4-%}
    </p>
    <h3>scale_1</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Scale of input 1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.CombineDisplacement.attributes.scale_1.images data=site.data.user-reference.scene-objects.displacement.CombineDisplacement-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.displacement.CombineDisplacement.attributes.scale_1.videos data=site.data.user-reference.scene-objects.displacement.CombineDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.CombineDisplacement.attributes.scale_1.links heading=4-%}
    </p>
    <h3>scale_2</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Scale of input 2</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.displacement.CombineDisplacement.attributes.scale_2.images data=site.data.user-reference.scene-objects.displacement.CombineDisplacement-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.displacement.CombineDisplacement.attributes.scale_2.videos data=site.data.user-reference.scene-objects.displacement.CombineDisplacement-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.displacement.CombineDisplacement.attributes.scale_2.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.displacement.CombineDisplacement-%}