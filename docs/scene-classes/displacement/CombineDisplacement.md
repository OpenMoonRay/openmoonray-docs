---
title: CombineDisplacement

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# CombineDisplacement
---
{%assign image_dir=site.data.scene-classes.displacement.CombineDisplacement.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.displacement.CombineDisplacement.gallery
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
          images=site.data.scene-classes.displacement.CombineDisplacement.bound_padding
          image_dir=image_dir
      %}
    </p>
    <h3>input_1</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-comments">Displacement object 1</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.CombineDisplacement.input_1
          image_dir=image_dir
      %}
    </p>
    <h3>input_2</h3>
    <p class="scene-class-type">
      <b>Displacement</b>
      default: None
      <p class="scene-class-comments">Displacement object 2</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.CombineDisplacement.input_2
          image_dir=image_dir
      %}
    </p>
    <h3>operation</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | add = 0 (default)
          | max magnitude = 1
          | min magnitude = 2
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.CombineDisplacement.operation
          image_dir=image_dir
      %}
    </p>
    <h3>scale_1</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Scale of input 1</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.CombineDisplacement.scale_1
          image_dir=image_dir
      %}
    </p>
    <h3>scale_2</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Scale of input 2</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.CombineDisplacement.scale_2
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>