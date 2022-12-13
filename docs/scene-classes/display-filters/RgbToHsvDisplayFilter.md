---
title: RgbToHsvDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RgbToHsvDisplayFilter
{%-include overview.html data=site.data.scene-classes.display-filters.RgbToHsvDisplayFilter-%}
{%-include image-gallery.html images=site.data.scene-classes.display-filters.RgbToHsvDisplayFilter.gallery data=site.data.scene-classes.display-filters.RgbToHsvDisplayFilter-%}
{%-include see-also.html links=site.data.scene-classes.display-filters.RgbToHsvDisplayFilter.links-%}
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
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.RgbToHsvDisplayFilter.attributes.invert_mask.images data=site.data.scene-classes.display-filters.RgbToHsvDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.RgbToHsvDisplayFilter.attributes.invert_mask.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Blend [0,1] between input and output</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.RgbToHsvDisplayFilter.attributes.mix.images data=site.data.scene-classes.display-filters.RgbToHsvDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.RgbToHsvDisplayFilter.attributes.mix.links heading=4-%}
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
      <p class="scene-class-comments">RenderOutput to use in the RgbToHsv operation</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.RgbToHsvDisplayFilter.attributes.input.images data=site.data.scene-classes.display-filters.RgbToHsvDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.RgbToHsvDisplayFilter.attributes.input.links heading=4-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      default: None
      <p class="scene-class-comments">RenderOutput used to mask the output, revealing input1</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.RgbToHsvDisplayFilter.attributes.mask.images data=site.data.scene-classes.display-filters.RgbToHsvDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.RgbToHsvDisplayFilter.attributes.mask.links heading=4-%}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | rgb_to_hsv = 0 (default)
          | hsv_to_rgb = 1
      <p class="scene-class-comments">Specifies whether you are converting rgb-&gt;hsv or hsv-&gt;rgb</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.RgbToHsvDisplayFilter.attributes.mode.images data=site.data.scene-classes.display-filters.RgbToHsvDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.RgbToHsvDisplayFilter.attributes.mode.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.scene-classes.display-filters.RgbToHsvDisplayFilter-%}