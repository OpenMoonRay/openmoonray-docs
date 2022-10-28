---
title: VectorDisplacement

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# VectorDisplacement
{%include image-gallery.html images=site.data.scene-classes.displacement.VectorDisplacement.gallery data=site.data.scene-classes.displacement.VectorDisplacement-%}
{%include see-also.html links=site.data.scene-classes.displacement.VectorDisplacement.links-%}
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
      {%include image-gallery.html images=site.data.scene-classes.displacement.VectorDisplacement.attributes.bound_padding.images data=site.data.scene-classes.displacement.VectorDisplacement-%}
      {%include see-also.html links=site.data.scene-classes.displacement.VectorDisplacement.attributes.bound_padding.links-%}
    </p>
    <h3>factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.displacement.VectorDisplacement.attributes.factor.images data=site.data.scene-classes.displacement.VectorDisplacement-%}
      {%include see-also.html links=site.data.scene-classes.displacement.VectorDisplacement.attributes.factor.links-%}
    </p>
    <h3>source_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | tangent = 0 (default)
          | object = 1
      <p class="scene-class-comments">The space that the map bound to the vector parameter is in</p>
      {%include image-gallery.html images=site.data.scene-classes.displacement.VectorDisplacement.attributes.source_space.images data=site.data.scene-classes.displacement.VectorDisplacement-%}
      {%include see-also.html links=site.data.scene-classes.displacement.VectorDisplacement.attributes.source_space.links-%}
    </p>
    <h3>tangent_space_style</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | tnb = 0 (default)
          | tbn = 1
      <p class="scene-class-comments">Controls how RGB maps to Tangent, Normal, and Bi-Normal</p>
      {%include image-gallery.html images=site.data.scene-classes.displacement.VectorDisplacement.attributes.tangent_space_style.images data=site.data.scene-classes.displacement.VectorDisplacement-%}
      {%include see-also.html links=site.data.scene-classes.displacement.VectorDisplacement.attributes.tangent_space_style.links-%}
    </p>
    <h3>vector</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.displacement.VectorDisplacement.attributes.vector.images data=site.data.scene-classes.displacement.VectorDisplacement-%}
      {%include see-also.html links=site.data.scene-classes.displacement.VectorDisplacement.attributes.vector.links-%}
    </p>
  </p>
</details>
</div>