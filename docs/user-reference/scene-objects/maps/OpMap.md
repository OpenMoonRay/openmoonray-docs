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
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.OpMap.attributes.clamp.videos data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.attributes.clamp.links heading=4-%}
    </p>
    <h3>op1</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">First operand</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpMap.attributes.op1.images data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.OpMap.attributes.op1.videos data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.attributes.op1.links heading=4-%}
    </p>
    <h3>op1_factor</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Scalar multiplier on op1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpMap.attributes.op1_factor.images data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.OpMap.attributes.op1_factor.videos data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.attributes.op1_factor.links heading=4-%}
    </p>
    <h3>op2</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Second operand</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpMap.attributes.op2.images data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.OpMap.attributes.op2.videos data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.attributes.op2.links heading=4-%}
    </p>
    <h3>op2_factor</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Scalar multiplier on op2</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpMap.attributes.op2_factor.images data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.OpMap.attributes.op2_factor.videos data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.attributes.op2_factor.links heading=4-%}
    </p>
    <h3>operation</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;add&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;subtract&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;multiply&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;divide&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;maximum&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;minimum&rdquo;<br>
          &nbsp;&nbsp;6 = &ldquo;power&rdquo;<br>
          &nbsp;&nbsp;7 = &ldquo;cross&rdquo;<br>
          &nbsp;&nbsp;8 = &ldquo;dot&rdquo;<br>
          &nbsp;&nbsp;9 = &ldquo;invert op1&rdquo;<br>
          &nbsp;&nbsp;10 = &ldquo;normalize op1&rdquo;<br>
          &nbsp;&nbsp;11 = &ldquo;op1&rdquo;<br>
          &nbsp;&nbsp;12 = &ldquo;op2&rdquo;<br>
          &nbsp;&nbsp;13 = &ldquo;overlay&rdquo;<br>
          &nbsp;&nbsp;14 = &ldquo;screen&rdquo;<br>
          &nbsp;&nbsp;15 = &ldquo;abs&rdquo;<br>
          &nbsp;&nbsp;16 = &ldquo;ceil&rdquo;<br>
          &nbsp;&nbsp;17 = &ldquo;floor&rdquo;<br>
          &nbsp;&nbsp;18 = &ldquo;modulo&rdquo;<br>
          &nbsp;&nbsp;19 = &ldquo;fraction&rdquo;<br>
          &nbsp;&nbsp;20 = &ldquo;length&rdquo;<br>
          &nbsp;&nbsp;21 = &ldquo;sine&rdquo;<br>
          &nbsp;&nbsp;22 = &ldquo;cosine&rdquo;<br>
          &nbsp;&nbsp;23 = &ldquo;round&rdquo;<br>
          &nbsp;&nbsp;24 = &ldquo;acos&rdquo;<br>
          &nbsp;&nbsp;25 = &ldquo;less_than&rdquo;<br>
          &nbsp;&nbsp;26 = &ldquo;less_than_or_equal&rdquo;<br>
          &nbsp;&nbsp;27 = &ldquo;greater_than&rdquo;<br>
          &nbsp;&nbsp;28 = &ldquo;greater_than_or_equal&rdquo;<br>
          &nbsp;&nbsp;29 = &ldquo;equal&rdquo;<br>
          &nbsp;&nbsp;30 = &ldquo;not equal&rdquo;<br>
          &nbsp;&nbsp;31 = &ldquo;and&rdquo;<br>
          &nbsp;&nbsp;32 = &ldquo;or&rdquo;<br>
          &nbsp;&nbsp;33 = &ldquo;not&rdquo;<br>
          &nbsp;&nbsp;34 = &ldquo;xor&rdquo;<br>
          &nbsp;&nbsp;35 = &ldquo;bit_shift_left&rdquo;<br>
          &nbsp;&nbsp;36 = &ldquo;bit_shift_right&rdquo;<br>
          &nbsp;&nbsp;37 = &ldquo;bitwise_and&rdquo;<br>
          &nbsp;&nbsp;38 = &ldquo;bitwise_or&rdquo;<br>
          &nbsp;&nbsp;39 = &ldquo;vector_equal&rdquo;<br>
          &nbsp;&nbsp;40 = &ldquo;vector_not_equal&rdquo;<br>
      <p class="scene-class-comments">Operation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpMap.attributes.operation.images data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.OpMap.attributes.operation.videos data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.attributes.operation.links heading=4-%}
    </p>
    <h3>tolerance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.001
      <p class="scene-class-comments">Epsilon. Sets range for almost-equals checking of values</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpMap.attributes.tolerance.images data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.OpMap.attributes.tolerance.videos data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.attributes.tolerance.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.OpMap-%}