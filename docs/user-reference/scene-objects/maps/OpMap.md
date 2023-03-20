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
          &nbsp;&nbsp;0 = name (default)<br>
          &nbsp;&nbsp;1 = name<br>
          &nbsp;&nbsp;2 = name<br>
          &nbsp;&nbsp;3 = name<br>
          &nbsp;&nbsp;4 = name<br>
          &nbsp;&nbsp;5 = name<br>
          &nbsp;&nbsp;6 = name<br>
          &nbsp;&nbsp;7 = name<br>
          &nbsp;&nbsp;8 = name<br>
          &nbsp;&nbsp;9 = name<br>
          &nbsp;&nbsp;10 = name<br>
          &nbsp;&nbsp;11 = name<br>
          &nbsp;&nbsp;12 = name<br>
          &nbsp;&nbsp;13 = name<br>
          &nbsp;&nbsp;14 = name<br>
          &nbsp;&nbsp;15 = name<br>
          &nbsp;&nbsp;16 = name<br>
          &nbsp;&nbsp;17 = name<br>
          &nbsp;&nbsp;18 = name<br>
          &nbsp;&nbsp;19 = name<br>
          &nbsp;&nbsp;20 = name<br>
          &nbsp;&nbsp;21 = name<br>
          &nbsp;&nbsp;22 = name<br>
          &nbsp;&nbsp;23 = name<br>
          &nbsp;&nbsp;24 = name<br>
          &nbsp;&nbsp;25 = name<br>
          &nbsp;&nbsp;26 = name<br>
          &nbsp;&nbsp;27 = name<br>
          &nbsp;&nbsp;28 = name<br>
          &nbsp;&nbsp;29 = name<br>
          &nbsp;&nbsp;30 = name<br>
          &nbsp;&nbsp;31 = name<br>
          &nbsp;&nbsp;32 = name<br>
          &nbsp;&nbsp;33 = name<br>
          &nbsp;&nbsp;34 = name<br>
          &nbsp;&nbsp;35 = name<br>
          &nbsp;&nbsp;36 = name<br>
          &nbsp;&nbsp;37 = name<br>
          &nbsp;&nbsp;38 = name<br>
      <p class="scene-class-comments">Operation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpMap.attributes.operation.images data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.attributes.operation.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.OpMap-%}