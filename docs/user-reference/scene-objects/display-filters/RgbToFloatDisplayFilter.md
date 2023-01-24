---
title: RGB to Float Display Filter
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
      <p class="scene-class-comments">Invert the value of the mask</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.attributes.invert_mask.images data=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.attributes.invert_mask.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Blend [0,1] between input and output</p>
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
      <p class="scene-class-comments">RenderOutput to use in the RgbToFloat operation</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.attributes.input.images data=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.attributes.input.links heading=4-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      default: None
      <p class="scene-class-comments">RenderOutput used to mask the output, revealing input1</p>
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
      <p class="scene-class-comments">The method used to convert RGB Color to float</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.attributes.mode.images data=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter.attributes.mode.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.scene-classes.display-filters.RgbToFloatDisplayFilter-%}