---
title: RgbToFloatDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RgbToFloatDisplayFilter
{%-include overview.html data=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter-%}
{%-include image-gallery.html images=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.gallery data=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter-%}
{%-include see-also.html links=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.links-%}
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
      <p class="scene-class-comments">invert value of mask</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.attributes.invert_mask.images data=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.attributes.invert_mask.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">blend between output and input</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.attributes.mix.images data=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.attributes.mix.links heading=4-%}
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
      <p class="scene-class-comments">image buffer</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.attributes.input.images data=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.attributes.input.links heading=4-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.attributes.mask.images data=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.attributes.mask.links heading=4-%}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | r = 0
          | g = 1
          | b = 2
          | min = 3
          | max = 4
          | average = 5 (default)
          | sum = 6
          | luminance = 7
      <p class="scene-class-comments">specify the method to convert RGB Color to float</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.attributes.mode.images data=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.attributes.mode.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter-%}