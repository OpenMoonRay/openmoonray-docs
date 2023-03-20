---
title: OpMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# OpMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.OpMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpMap.gallery data=site.data.user-reference.scene-objects.maps.OpMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>clamp</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Whether to clamp result to 0 - 1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpMap.attributes.clamp.images data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.attributes.clamp.links heading=4-%}
    </p>
    <h3>op1</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">First operand</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpMap.attributes.op1.images data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.attributes.op1.links heading=4-%}
    </p>
    <h3>op1_factor</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Scalar multiplier on op1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpMap.attributes.op1_factor.images data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.attributes.op1_factor.links heading=4-%}
    </p>
    <h3>op2</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Second operand</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpMap.attributes.op2.images data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.attributes.op2.links heading=4-%}
    </p>
    <h3>op2_factor</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Scalar multiplier on op2</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpMap.attributes.op2_factor.images data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.attributes.op2_factor.links heading=4-%}
    </p>
    <h3>operation</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;&nbsp;&nbsp;0 = add(default)<br>
          &nbsp;&nbsp;&nbsp;&nbsp;1 = subtract<br>
          &nbsp;&nbsp;&nbsp;&nbsp;2 = multiply<br>
          &nbsp;&nbsp;&nbsp;&nbsp;3 = divide<br>
          &nbsp;&nbsp;&nbsp;&nbsp;4 = maximum<br>
          &nbsp;&nbsp;&nbsp;&nbsp;5 = minimum<br>
          &nbsp;&nbsp;&nbsp;&nbsp;6 = power<br>
          &nbsp;&nbsp;&nbsp;&nbsp;7 = cross<br>
          &nbsp;&nbsp;&nbsp;&nbsp;8 = dot<br>
          &nbsp;&nbsp;&nbsp;&nbsp;9 = invert op1<br>
          &nbsp;&nbsp;&nbsp;&nbsp;10 = normalize op1<br>
          &nbsp;&nbsp;&nbsp;&nbsp;11 = op1<br>
          &nbsp;&nbsp;&nbsp;&nbsp;12 = op2<br>
          &nbsp;&nbsp;&nbsp;&nbsp;13 = overlay<br>
          &nbsp;&nbsp;&nbsp;&nbsp;14 = screen<br>
          &nbsp;&nbsp;&nbsp;&nbsp;15 = abs<br>
          &nbsp;&nbsp;&nbsp;&nbsp;16 = ceil<br>
          &nbsp;&nbsp;&nbsp;&nbsp;17 = floor<br>
          &nbsp;&nbsp;&nbsp;&nbsp;18 = modulo<br>
          &nbsp;&nbsp;&nbsp;&nbsp;19 = fraction<br>
          &nbsp;&nbsp;&nbsp;&nbsp;20 = length<br>
          &nbsp;&nbsp;&nbsp;&nbsp;21 = sine<br>
          &nbsp;&nbsp;&nbsp;&nbsp;22 = cosine<br>
          &nbsp;&nbsp;&nbsp;&nbsp;23 = round<br>
          &nbsp;&nbsp;&nbsp;&nbsp;24 = acos<br>
          &nbsp;&nbsp;&nbsp;&nbsp;25 = less_than<br>
          &nbsp;&nbsp;&nbsp;&nbsp;26 = less_than_or_equal<br>
          &nbsp;&nbsp;&nbsp;&nbsp;27 = greater_than<br>
          &nbsp;&nbsp;&nbsp;&nbsp;28 = greater_than_or_equal<br>
          &nbsp;&nbsp;&nbsp;&nbsp;29 = equal<br>
          &nbsp;&nbsp;&nbsp;&nbsp;30 = not equal<br>
          &nbsp;&nbsp;&nbsp;&nbsp;31 = and<br>
          &nbsp;&nbsp;&nbsp;&nbsp;32 = or<br>
          &nbsp;&nbsp;&nbsp;&nbsp;33 = not<br>
          &nbsp;&nbsp;&nbsp;&nbsp;34 = xor<br>
          &nbsp;&nbsp;&nbsp;&nbsp;35 = bit_shift_left<br>
          &nbsp;&nbsp;&nbsp;&nbsp;36 = bit_shift_right<br>
          &nbsp;&nbsp;&nbsp;&nbsp;37 = bitwise_and<br>
          &nbsp;&nbsp;&nbsp;&nbsp;38 = bitwise_or<br>
      <p class="scene-class-comments">Operation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpMap.attributes.operation.images data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.attributes.operation.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.OpMap-%}