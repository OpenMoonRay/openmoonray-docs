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
      <b>Bool</b><br/>
      default: False
      <p class="scene-class-comments">Invert the value of the mask</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.invert_mask.images data=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.invert_mask.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
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
      <b>RenderOutput</b><br/>
      default: None
      <p class="scene-class-comments">First RenderOutput; required</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.input1.images data=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.input1.links heading=4-%}
    </p>
    <h3>input2</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b><br/>
      default: None
      <p class="scene-class-comments">Second RenderOutput; optional</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.input2.images data=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.input2.links heading=4-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b><br/>
      default: None
      <p class="scene-class-comments">RenderOutput used to mask the output, revealing input1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.mask.images data=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.mask.links heading=4-%}
    </p>
    <h3>operation</h3>
    <p class="scene-class-type">
      <b>Int</b><br/> <i>enum</i><br/>
          0=add(default)<br/>
          1=subtract<br/>
          2=multiply<br/>
          3=divide<br/>
          4=min<br/>
          5=max<br/>
          6=power<br/>
          7=cross<br/>
          8=dot<br/>
          9=modulo<br/>
          10=greater_than<br/>
          11=greater_than_or_equal<br/>
          12=less_than<br/>
          13=less_than_or_equal<br/>
          14=equal<br/>
          15=not_equal<br/>
          16=and<br/>
          17=or<br/>
          18=xor<br/>
          19=invert<br/>
          20=normalize<br/>
          21=abs<br/>
          22=ceil<br/>
          23=floor<br/>
          24=length<br/>
          25=sine<br/>
          26=cosine<br/>
          27=round<br/>
          28=acos<br/>
          29=not<br/>
      <p class="scene-class-comments">Operation to use on the input(s)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.operation.images data=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.operation.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter-%}