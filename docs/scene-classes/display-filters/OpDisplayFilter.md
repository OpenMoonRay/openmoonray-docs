---
title: OpDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# OpDisplayFilter
---
{%assign image_dir=site.data.scene-classes.display-filters.OpDisplayFilter.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.display-filters.OpDisplayFilter.gallery
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
          images=site.data.scene-classes.display-filters.OpDisplayFilter.invert_mask
          image_dir=image_dir
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">blend between output and input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.OpDisplayFilter.mix
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>input1</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">first operand</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.OpDisplayFilter.input1
          image_dir=image_dir
      %}
    </p>
    <h3>input2</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">second operand</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.OpDisplayFilter.input2
          image_dir=image_dir
      %}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.OpDisplayFilter.mask
          image_dir=image_dir
      %}
    </p>
    <h3>operation</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | add = 0 (default)
          | subtract = 1
          | multiply = 2
          | divide = 3
          | min = 4
          | max = 5
          | power = 6
          | cross = 7
          | dot = 8
          | modulo = 9
          | greater_than = 10
          | greater_than_or_equal = 11
          | less_than = 12
          | less_than_or_equal = 13
          | equal = 14
          | not_equal = 15
          | and = 16
          | or = 17
          | xor = 18
          | invert = 19
          | normalize = 20
          | abs = 21
          | ceil = 22
          | floor = 23
          | length = 24
          | sine = 25
          | cosine = 26
          | round = 27
          | acos = 28
          | not = 29
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.OpDisplayFilter.operation
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>