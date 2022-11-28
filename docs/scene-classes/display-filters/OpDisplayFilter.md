---
title: OpDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# OpDisplayFilter
{%-include overview.html data=site.data.scene-classes.display-filters.OpDisplayFilter-%}
{%-include image-gallery.html images=site.data.scene-classes.display-filters.OpDisplayFilter.gallery data=site.data.scene-classes.display-filters.OpDisplayFilter-%}
{%-include see-also.html links=site.data.scene-classes.display-filters.OpDisplayFilter.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>invert_mask</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">invert value of mask</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.OpDisplayFilter.attributes.invert_mask.images data=site.data.scene-classes.display-filters.OpDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.OpDisplayFilter.attributes.invert_mask.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">blend between output and input</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.OpDisplayFilter.attributes.mix.images data=site.data.scene-classes.display-filters.OpDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.OpDisplayFilter.attributes.mix.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.OpDisplayFilter.attributes.input1.images data=site.data.scene-classes.display-filters.OpDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.OpDisplayFilter.attributes.input1.links heading=4-%}
    </p>
    <h3>input2</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">second operand</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.OpDisplayFilter.attributes.input2.images data=site.data.scene-classes.display-filters.OpDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.OpDisplayFilter.attributes.input2.links heading=4-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.OpDisplayFilter.attributes.mask.images data=site.data.scene-classes.display-filters.OpDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.OpDisplayFilter.attributes.mask.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.OpDisplayFilter.attributes.operation.images data=site.data.scene-classes.display-filters.OpDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.OpDisplayFilter.attributes.operation.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.scene-classes.display-filters.OpDisplayFilter-%}