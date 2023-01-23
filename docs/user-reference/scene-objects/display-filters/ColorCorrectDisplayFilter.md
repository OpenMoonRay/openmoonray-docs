---
title: ColorCorrectDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectDisplayFilter
{%-include overview.html data=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter-%}
{%-include image-gallery.html images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.gallery data=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter-%}
{%-include see-also.html links=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.links-%}
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
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.invert_mask.images data=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.invert_mask.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Blend [0,1] between input and output</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.mix.images data=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.mix.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>contrast</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Negative values decrease contrast, while positive values increase it</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.contrast.images data=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.contrast.links heading=4-%}
    </p>
    <h3>exposure</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Adjusts the exposure, in fstops</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.exposure.images data=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.exposure.links heading=4-%}
    </p>
    <h3>gamma</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Adjusts gamma of input</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.gamma.images data=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.gamma.links heading=4-%}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      default: None
      <p class="scene-class-comments">RenderOutput to color correct</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.input.images data=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.input.links heading=4-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      default: None
      <p class="scene-class-comments">RenderOutput used to mask the output, revealing input1</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.mask.images data=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.mask.links heading=4-%}
    </p>
    <h3>multiply</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Multiplies input using specified color</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.multiply.images data=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.multiply.links heading=4-%}
    </p>
    <h3>offset</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Adds offset color to input</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.offset.images data=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.offset.links heading=4-%}
    </p>
    <h3>saturation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Desaturates input below 1.0 and adds saturation above 1.0</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.saturation.images data=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.saturation.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter-%}