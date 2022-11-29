---
title: OverDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# OverDisplayFilter
{%-include overview.html data=site.data.scene-classes.display-filters.OverDisplayFilter-%}
{%-include image-gallery.html images=site.data.scene-classes.display-filters.OverDisplayFilter.gallery data=site.data.scene-classes.display-filters.OverDisplayFilter-%}
{%-include see-also.html links=site.data.scene-classes.display-filters.OverDisplayFilter.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>alpha</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      default: None
      <p class="scene-class-comments">alpha for over operation</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.OverDisplayFilter.attributes.alpha.images data=site.data.scene-classes.display-filters.OverDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.OverDisplayFilter.attributes.alpha.links heading=4-%}
    </p>
    <h3>input_bottom</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      default: None
      <p class="scene-class-comments">RenderOutput on bottom</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.OverDisplayFilter.attributes.input_bottom.images data=site.data.scene-classes.display-filters.OverDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.OverDisplayFilter.attributes.input_bottom.links heading=4-%}
    </p>
    <h3>input_top</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      default: None
      <p class="scene-class-comments">RenderOutput on top</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.OverDisplayFilter.attributes.input_top.images data=site.data.scene-classes.display-filters.OverDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.OverDisplayFilter.attributes.input_top.links heading=4-%}
    </p>
    <h3>invert_alpha</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">invert value of alpha</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.OverDisplayFilter.attributes.invert_alpha.images data=site.data.scene-classes.display-filters.OverDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.OverDisplayFilter.attributes.invert_alpha.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">blend between output and input</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.OverDisplayFilter.attributes.mix.images data=site.data.scene-classes.display-filters.OverDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.OverDisplayFilter.attributes.mix.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.scene-classes.display-filters.OverDisplayFilter-%}