---
title: ClampDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ClampDisplayFilter
{%-include overview.html data=site.data.user-reference.scene-objects.display-filters.ClampDisplayFilter-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ClampDisplayFilter.gallery data=site.data.user-reference.scene-objects.display-filters.ClampDisplayFilter-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ClampDisplayFilter.links-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ClampDisplayFilter.attributes.invert_mask.images data=site.data.user-reference.scene-objects.display-filters.ClampDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ClampDisplayFilter.attributes.invert_mask.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: 1.0
      <p class="scene-class-comments">Blend [0,1] between input and output</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ClampDisplayFilter.attributes.mix.images data=site.data.user-reference.scene-objects.display-filters.ClampDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ClampDisplayFilter.attributes.mix.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b><br/>
      default: None
      <p class="scene-class-comments">RenderOutput to clamp</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ClampDisplayFilter.attributes.input.images data=site.data.user-reference.scene-objects.display-filters.ClampDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ClampDisplayFilter.attributes.input.links heading=4-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b><br/>
      default: None
      <p class="scene-class-comments">RenderOutput used to mask the output, revealing input1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ClampDisplayFilter.attributes.mask.images data=site.data.user-reference.scene-objects.display-filters.ClampDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ClampDisplayFilter.attributes.mask.links heading=4-%}
    </p>
    <h3>max</h3>
    <p class="scene-class-type">
      <b>Rgb</b><br/>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Maximum color value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ClampDisplayFilter.attributes.max.images data=site.data.user-reference.scene-objects.display-filters.ClampDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ClampDisplayFilter.attributes.max.links heading=4-%}
    </p>
    <h3>min</h3>
    <p class="scene-class-type">
      <b>Rgb</b><br/>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Minimum color value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.ClampDisplayFilter.attributes.min.images data=site.data.user-reference.scene-objects.display-filters.ClampDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.ClampDisplayFilter.attributes.min.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.display-filters.ClampDisplayFilter-%}