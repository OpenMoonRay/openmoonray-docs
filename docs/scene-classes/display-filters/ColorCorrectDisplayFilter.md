---
title: ColorCorrectDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectDisplayFilter
{%include image-gallery.html images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.gallery data=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter-%}
{%include see-also.html links=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.links-%}
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
      {%include image-gallery.html images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.invert_mask.images data=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter-%}
      {%include see-also.html links=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.invert_mask.links-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">blend between output and input</p>
      {%include image-gallery.html images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.mix.images data=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter-%}
      {%include see-also.html links=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.mix.links-%}
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
      <p class="scene-class-comments">Decrease contrast below 0.0 and increase contrast above 0.0</p>
      {%include image-gallery.html images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.contrast.images data=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter-%}
      {%include see-also.html links=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.contrast.links-%}
    </p>
    <h3>exposure</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Adjusts the exposure, in fstops</p>
      {%include image-gallery.html images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.exposure.images data=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter-%}
      {%include see-also.html links=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.exposure.links-%}
    </p>
    <h3>gamma</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Adjusts gamma of input</p>
      {%include image-gallery.html images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.gamma.images data=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter-%}
      {%include see-also.html links=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.gamma.links-%}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">RenderOutput to color correct</p>
      {%include image-gallery.html images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.input.images data=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter-%}
      {%include see-also.html links=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.input.links-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.mask.images data=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter-%}
      {%include see-also.html links=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.mask.links-%}
    </p>
    <h3>multiply</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Multiplies input using specified color</p>
      {%include image-gallery.html images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.multiply.images data=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter-%}
      {%include see-also.html links=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.multiply.links-%}
    </p>
    <h3>offset</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Add offset color to input</p>
      {%include image-gallery.html images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.offset.images data=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter-%}
      {%include see-also.html links=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.offset.links-%}
    </p>
    <h3>saturation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Desaturates input below 1.0 and adds saturation above 1.0</p>
      {%include image-gallery.html images=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.saturation.images data=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter-%}
      {%include see-also.html links=site.data.scene-classes.display-filters.ColorCorrectDisplayFilter.attributes.saturation.links-%}
    </p>
  </p>
</details>
</div>