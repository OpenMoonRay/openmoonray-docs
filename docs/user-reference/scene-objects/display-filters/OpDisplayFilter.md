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
      <br>
      default: False
      <p class="scene-class-comments">Invert the value of the mask</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.invert_mask.images data=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.invert_mask.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
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
      <br>
      default: None
      <p class="scene-class-comments">First RenderOutput; required</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.input1.images data=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.input1.links heading=4-%}
    </p>
    <h3>input2</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      <br>
      default: None
      <p class="scene-class-comments">Second RenderOutput; optional</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.input2.images data=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.input2.links heading=4-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      <br>
      default: None
      <p class="scene-class-comments">RenderOutput used to mask the output, revealing input1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.mask.images data=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.mask.links heading=4-%}
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
      <p class="scene-class-comments">Operation to use on the input(s)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.operation.images data=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter.attributes.operation.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.display-filters.OpDisplayFilter-%}