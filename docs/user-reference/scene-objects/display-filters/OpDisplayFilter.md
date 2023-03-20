---
title: OpDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# OpDisplayFilter
{%-include overview.html data=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.gallery data=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>invert_mask</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br/>
      default: False
      <p class="scene-class-comments">Invert the value of the mask</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.invert_mask.images data=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.invert_mask.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br/>
      default: 1.0
      <p class="scene-class-comments">Blend [0,1] between input and output</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.mix.images data=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.mix.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>input1</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      <br/>
      default: None
      <p class="scene-class-comments">First RenderOutput; required</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.input1.images data=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.input1.links heading=4-%}
    </p>
    <h3>input2</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      <br/>
      default: None
      <p class="scene-class-comments">Second RenderOutput; optional</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.input2.images data=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.input2.links heading=4-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      <br/>
      default: None
      <p class="scene-class-comments">RenderOutput used to mask the output, revealing input1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.mask.images data=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.mask.links heading=4-%}
    </p>
    <h3>operation</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br/>
          </t>0 = add(default)<br/>
          </t>1 = subtract<br/>
          </t>2 = multiply<br/>
          </t>3 = divide<br/>
          </t>4 = min<br/>
          </t>5 = max<br/>
          </t>6 = power<br/>
          </t>7 = cross<br/>
          </t>8 = dot<br/>
          </t>9 = modulo<br/>
          </t>10 = greater_than<br/>
          </t>11 = greater_than_or_equal<br/>
          </t>12 = less_than<br/>
          </t>13 = less_than_or_equal<br/>
          </t>14 = equal<br/>
          </t>15 = not_equal<br/>
          </t>16 = and<br/>
          </t>17 = or<br/>
          </t>18 = xor<br/>
          </t>19 = invert<br/>
          </t>20 = normalize<br/>
          </t>21 = abs<br/>
          </t>22 = ceil<br/>
          </t>23 = floor<br/>
          </t>24 = length<br/>
          </t>25 = sine<br/>
          </t>26 = cosine<br/>
          </t>27 = round<br/>
          </t>28 = acos<br/>
          </t>29 = not<br/>
      <p class="scene-class-comments">Operation to use on the input(s)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.operation.images data=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.operation.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter-%}