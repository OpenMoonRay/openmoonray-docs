---
title: BlendDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# BlendDisplayFilter
---
{%assign image_dir=site.data.scene-classes.display-filters.BlendDisplayFilter.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.display-filters.BlendDisplayFilter.gallery
    image_dir=image_dir
%}
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>invert_mask</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">invert value of mask</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.BlendDisplayFilter.invert_mask
          image_dir=image_dir
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">blend between output and input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.BlendDisplayFilter.mix
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>blendAmt</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">float determining amount of blend</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.BlendDisplayFilter.blendAmt
          image_dir=image_dir
      %}
    </p>
    <h3>blendType</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | linear = 0 (default)
          | cubic = 1
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.BlendDisplayFilter.blendType
          image_dir=image_dir
      %}
    </p>
    <h3>input1</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">first operand</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.BlendDisplayFilter.input1
          image_dir=image_dir
      %}
    </p>
    <h3>input2</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">second operand</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.BlendDisplayFilter.input2
          image_dir=image_dir
      %}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.BlendDisplayFilter.mask
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>