---
title: OpMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# OpMap
{%assign image_path=site.data.scene-classes.maps.OpMap.image_path%}
{%if site.data.scene-classes.maps.OpMap.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.OpMap.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.OpMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.OpMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>clamp</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">if on, the result is clamped to 0 - 1</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.OpMap.attributes.clamp.images.
          path=image_path
      %}
    </p>
    <h3>op1</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the first operand</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.OpMap.attributes.op1.images.
          path=image_path
      %}
    </p>
    <h3>op1_factor</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">a scalar multiplier on op1</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.OpMap.attributes.op1_factor.images.
          path=image_path
      %}
    </p>
    <h3>op2</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the second operand</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.OpMap.attributes.op2.images.
          path=image_path
      %}
    </p>
    <h3>op2_factor</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">a scalar multiplier on op2</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.OpMap.attributes.op2_factor.images.
          path=image_path
      %}
    </p>
    <h3>operation</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | add = 0 (default)
          | subtract = 1
          | multiply = 2
          | divide = 3
          | maximum = 4
          | minimum = 5
          | power = 6
          | cross = 7
          | dot = 8
          | invert op1 = 9
          | normalize op1 = 10
          | op1 = 11
          | op2 = 12
          | overlay = 13
          | screen = 14
          | abs = 15
          | ceil = 16
          | floor = 17
          | modulo = 18
          | fraction = 19
          | length = 20
          | sine = 21
          | cosine = 22
          | round = 23
          | acos = 24
          | less_than = 25
          | less_than_or_equal = 26
          | greater_than = 27
          | greater_than_or_equal = 28
          | equal = 29
          | not equal = 30
          | and = 31
          | or = 32
          | not = 33
          | xor = 34
          | bit_shift_left = 35
          | bit_shift_right = 36
          | bitwise_and = 37
          | bitwise_or = 38
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.OpMap.attributes.operation.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>