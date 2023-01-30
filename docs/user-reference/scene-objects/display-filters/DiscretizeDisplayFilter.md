---
title: Discretize Display Filter
---
# DiscretizeDisplayFilter
{%-include overview.html data=site.data.user-reference.scene-objects.display-filters.DiscretizeDisplayFilter-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.DiscretizeDisplayFilter.gallery data=site.data.user-reference.scene-objects.display-filters.DiscretizeDisplayFilter-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.DiscretizeDisplayFilter.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>invert_mask</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Invert the value of the mask</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.DiscretizeDisplayFilter.attributes.invert_mask.images data=site.data.user-reference.scene-objects.display-filters.DiscretizeDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.DiscretizeDisplayFilter.attributes.invert_mask.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Blend [0,1] between input and output</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.DiscretizeDisplayFilter.attributes.mix.images data=site.data.user-reference.scene-objects.display-filters.DiscretizeDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.DiscretizeDisplayFilter.attributes.mix.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      default: None
      <p class="scene-class-comments">RenderOutput to discretize</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.DiscretizeDisplayFilter.attributes.input.images data=site.data.user-reference.scene-objects.display-filters.DiscretizeDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.DiscretizeDisplayFilter.attributes.input.links heading=4-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      default: None
      <p class="scene-class-comments">RenderOutput used to mask the output, revealing input1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.DiscretizeDisplayFilter.attributes.mask.images data=site.data.user-reference.scene-objects.display-filters.DiscretizeDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.DiscretizeDisplayFilter.attributes.mask.links heading=4-%}
    </p>
    <h3>num_bins</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 8
      <p class="scene-class-comments">Number of discrete color bins</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.DiscretizeDisplayFilter.attributes.num_bins.images data=site.data.user-reference.scene-objects.display-filters.DiscretizeDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.DiscretizeDisplayFilter.attributes.num_bins.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.display-filters.DiscretizeDisplayFilter-%}