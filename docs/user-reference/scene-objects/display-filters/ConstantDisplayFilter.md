---
title: ConstantDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ConstantDisplayFilter
{%-include overview.html data=site.data.user-reference.scene-objects.display-filters.ConstantDisplayFilter-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ConstantDisplayFilter.gallery data=site.data.user-reference.scene-objects.display-filters.ConstantDisplayFilter-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ConstantDisplayFilter.links-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ConstantDisplayFilter.attributes.invert_mask.images data=site.data.user-reference.scene-objects.display-filters.ConstantDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ConstantDisplayFilter.attributes.invert_mask.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: 1.0
      <p class="scene-class-comments">Blend [0,1] between input and output</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ConstantDisplayFilter.attributes.mix.images data=site.data.user-reference.scene-objects.display-filters.ConstantDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ConstantDisplayFilter.attributes.mix.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>color</h3>
    <p class="scene-class-type">
      <b>Rgb</b><br/>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Fill color value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ConstantDisplayFilter.attributes.color.images data=site.data.user-reference.scene-objects.display-filters.ConstantDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ConstantDisplayFilter.attributes.color.links heading=4-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b><br/>
      default: None
      <p class="scene-class-comments">RenderOutput used to mask the output, revealing input1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ConstantDisplayFilter.attributes.mask.images data=site.data.user-reference.scene-objects.display-filters.ConstantDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ConstantDisplayFilter.attributes.mask.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.display-filters.ConstantDisplayFilter-%}