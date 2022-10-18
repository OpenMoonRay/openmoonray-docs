---
title: VectorDisplacement

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# VectorDisplacement
---
{%assign image_dir=site.data.scene-classes.displacement.VectorDisplacement.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.displacement.VectorDisplacement.gallery
    image_dir=image_dir
%}
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>bound_padding</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">bound padding defines how much to extend the bounding box of the object. Keep this value as low as possible unless the geometry skips tessellation because control cage bounding box is out of camera frustum but the displacement stretch out of the original object bounding box (pre-displacement). Setting the bound padding too large will consume more memory and tessellation time.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.VectorDisplacement.bound_padding
          image_dir=image_dir
      %}
    </p>
    <h3>factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.VectorDisplacement.factor
          image_dir=image_dir
      %}
    </p>
    <h3>source_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | tangent = 0 (default)
          | object = 1
      <p class="scene-class-comments">The space that the map bound to the vector parameter is in</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.VectorDisplacement.source_space
          image_dir=image_dir
      %}
    </p>
    <h3>tangent_space_style</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | tnb = 0 (default)
          | tbn = 1
      <p class="scene-class-comments">Controls how RGB maps to Tangent, Normal, and Bi-Normal</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.VectorDisplacement.tangent_space_style
          image_dir=image_dir
      %}
    </p>
    <h3>vector</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.VectorDisplacement.vector
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>