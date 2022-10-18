---
title: NormalDisplacement

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# NormalDisplacement
---
{%assign image_dir=site.data.scene-classes.displacement.NormalDisplacement.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.displacement.NormalDisplacement.gallery
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
          images=site.data.scene-classes.displacement.NormalDisplacement.bound_padding
          image_dir=image_dir
      %}
    </p>
    <h3>height</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.NormalDisplacement.height
          image_dir=image_dir
      %}
    </p>
    <h3>height_multiplier</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Multiply the computed (post zero-value) height with this factor.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.NormalDisplacement.height_multiplier
          image_dir=image_dir
      %}
    </p>
    <h3>zero_value</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.displacement.NormalDisplacement.zero_value
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>