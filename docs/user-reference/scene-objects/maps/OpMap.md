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
      <br/>
      default: False
      <p class="scene-class-comments">Whether to clamp result to 0 - 1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpMap.attributes.clamp.images data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.attributes.clamp.links heading=4-%}
    </p>
    <h3>op1</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br/>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">First operand</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpMap.attributes.op1.images data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.attributes.op1.links heading=4-%}
    </p>
    <h3>op1_factor</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br/>
      default: 1.0
      <p class="scene-class-comments">Scalar multiplier on op1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpMap.attributes.op1_factor.images data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.attributes.op1_factor.links heading=4-%}
    </p>
    <h3>op2</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br/>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Second operand</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpMap.attributes.op2.images data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.attributes.op2.links heading=4-%}
    </p>
    <h3>op2_factor</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br/>
      default: 1.0
      <p class="scene-class-comments">Scalar multiplier on op2</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpMap.attributes.op2_factor.images data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.attributes.op2_factor.links heading=4-%}
    </p>
    <h3>operation</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br/>
          </t>0 = add(default)<br/>
          </t>1 = subtract<br/>
          </t>2 = multiply<br/>
          </t>3 = divide<br/>
          </t>4 = maximum<br/>
          </t>5 = minimum<br/>
          </t>6 = power<br/>
          </t>7 = cross<br/>
          </t>8 = dot<br/>
          </t>9 = invert op1<br/>
          </t>10 = normalize op1<br/>
          </t>11 = op1<br/>
          </t>12 = op2<br/>
          </t>13 = overlay<br/>
          </t>14 = screen<br/>
          </t>15 = abs<br/>
          </t>16 = ceil<br/>
          </t>17 = floor<br/>
          </t>18 = modulo<br/>
          </t>19 = fraction<br/>
          </t>20 = length<br/>
          </t>21 = sine<br/>
          </t>22 = cosine<br/>
          </t>23 = round<br/>
          </t>24 = acos<br/>
          </t>25 = less_than<br/>
          </t>26 = less_than_or_equal<br/>
          </t>27 = greater_than<br/>
          </t>28 = greater_than_or_equal<br/>
          </t>29 = equal<br/>
          </t>30 = not equal<br/>
          </t>31 = and<br/>
          </t>32 = or<br/>
          </t>33 = not<br/>
          </t>34 = xor<br/>
          </t>35 = bit_shift_left<br/>
          </t>36 = bit_shift_right<br/>
          </t>37 = bitwise_and<br/>
          </t>38 = bitwise_or<br/>
      <p class="scene-class-comments">Operation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpMap.attributes.operation.images data=site.data.user-reference.scene-objects.maps.OpMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpMap.attributes.operation.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.OpMap-%}