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
      <b>Bool</b><br/>
      default: False
      <p class="scene-class-comments">Whether to clamp result to 0 - 1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpMap.attributes.clamp.images data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.attributes.clamp.links heading=4-%}
    </p>
    <h3>op1</h3>
    <p class="scene-class-type">
      <b>Rgb</b><br/> <i>bindable</i><br/>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">First operand</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpMap.attributes.op1.images data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.attributes.op1.links heading=4-%}
    </p>
    <h3>op1_factor</h3>
    <p class="scene-class-type">
      <b>Float</b><br/> <i>bindable</i><br/>
      default: 1.0
      <p class="scene-class-comments">Scalar multiplier on op1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpMap.attributes.op1_factor.images data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.attributes.op1_factor.links heading=4-%}
    </p>
    <h3>op2</h3>
    <p class="scene-class-type">
      <b>Rgb</b><br/> <i>bindable</i><br/>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Second operand</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpMap.attributes.op2.images data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.attributes.op2.links heading=4-%}
    </p>
    <h3>op2_factor</h3>
    <p class="scene-class-type">
      <b>Float</b><br/> <i>bindable</i><br/>
      default: 1.0
      <p class="scene-class-comments">Scalar multiplier on op2</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpMap.attributes.op2_factor.images data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.attributes.op2_factor.links heading=4-%}
    </p>
    <h3>operation</h3>
    <p class="scene-class-type">
      <b>Int</b><br/> <i>enum</i><br/>
          0=add(default)<br/>
          1=subtract<br/>
          2=multiply<br/>
          3=divide<br/>
          4=maximum<br/>
          5=minimum<br/>
          6=power<br/>
          7=cross<br/>
          8=dot<br/>
          9=invert op1<br/>
          10=normalize op1<br/>
          11=op1<br/>
          12=op2<br/>
          13=overlay<br/>
          14=screen<br/>
          15=abs<br/>
          16=ceil<br/>
          17=floor<br/>
          18=modulo<br/>
          19=fraction<br/>
          20=length<br/>
          21=sine<br/>
          22=cosine<br/>
          23=round<br/>
          24=acos<br/>
          25=less_than<br/>
          26=less_than_or_equal<br/>
          27=greater_than<br/>
          28=greater_than_or_equal<br/>
          29=equal<br/>
          30=not equal<br/>
          31=and<br/>
          32=or<br/>
          33=not<br/>
          34=xor<br/>
          35=bit_shift_left<br/>
          36=bit_shift_right<br/>
          37=bitwise_and<br/>
          38=bitwise_or<br/>
      <p class="scene-class-comments">Operation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpMap.attributes.operation.images data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.attributes.operation.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.OpMap-%}