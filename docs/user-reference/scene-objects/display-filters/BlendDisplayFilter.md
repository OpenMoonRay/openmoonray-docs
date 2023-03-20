---
title: BlendDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# BlendDisplayFilter
{%-include overview.html data=site.data.user-reference.scene-objects.display-filters.BlendDisplayFilter-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.BlendDisplayFilter.gallery data=site.data.user-reference.scene-objects.display-filters.BlendDisplayFilter-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.BlendDisplayFilter.links-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.BlendDisplayFilter.attributes.invert_mask.images data=site.data.user-reference.scene-objects.display-filters.BlendDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.BlendDisplayFilter.attributes.invert_mask.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Blend [0,1] between input and output</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.BlendDisplayFilter.attributes.mix.images data=site.data.user-reference.scene-objects.display-filters.BlendDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.BlendDisplayFilter.attributes.mix.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>blendAmt</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.5
      <p class="scene-class-comments">Float between [0,1] determining amount of blend between input1 and input2</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.BlendDisplayFilter.attributes.blendAmt.images data=site.data.user-reference.scene-objects.display-filters.BlendDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.BlendDisplayFilter.attributes.blendAmt.links heading=4-%}
    </p>
    <h3>blendType</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;linear&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;cubic&rdquo;<br>
      <p class="scene-class-comments">Method used to blend between input1 and input2.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.BlendDisplayFilter.attributes.blendType.images data=site.data.user-reference.scene-objects.display-filters.BlendDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.BlendDisplayFilter.attributes.blendType.links heading=4-%}
    </p>
    <h3>input1</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      <br>
      default: None
      <p class="scene-class-comments">First RenderOutput to use in the blend operation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.BlendDisplayFilter.attributes.input1.images data=site.data.user-reference.scene-objects.display-filters.BlendDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.BlendDisplayFilter.attributes.input1.links heading=4-%}
    </p>
    <h3>input2</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      <br>
      default: None
      <p class="scene-class-comments">Second RenderOutput to use in the blend operation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.BlendDisplayFilter.attributes.input2.images data=site.data.user-reference.scene-objects.display-filters.BlendDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.BlendDisplayFilter.attributes.input2.links heading=4-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      <br>
      default: None
      <p class="scene-class-comments">RenderOutput used to mask the output, revealing input1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.BlendDisplayFilter.attributes.mask.images data=site.data.user-reference.scene-objects.display-filters.BlendDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.BlendDisplayFilter.attributes.mask.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.display-filters.BlendDisplayFilter-%}