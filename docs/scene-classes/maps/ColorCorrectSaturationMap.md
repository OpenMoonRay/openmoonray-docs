---
title: ColorCorrectSaturationMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectSaturationMap
{%-include overview.html data=site.data.scene-classes.maps.ColorCorrectSaturationMap-%}
{%-include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectSaturationMap.gallery data=site.data.scene-classes.maps.ColorCorrectSaturationMap-%}
{%-include see-also.html links=site.data.scene-classes.maps.ColorCorrectSaturationMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">bind the input here</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectSaturationMap.attributes.input.images data=site.data.scene-classes.maps.ColorCorrectSaturationMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ColorCorrectSaturationMap.attributes.input.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">how much of the overall color correct to mix in</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectSaturationMap.attributes.mix.images data=site.data.scene-classes.maps.ColorCorrectSaturationMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ColorCorrectSaturationMap.attributes.mix.links heading=4-%}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables/disables all color correct operations</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectSaturationMap.attributes.on.images data=site.data.scene-classes.maps.ColorCorrectSaturationMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ColorCorrectSaturationMap.attributes.on.links heading=4-%}
    </p>
    <h3>saturation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">desaturates the input below 1.0 and adds saturation above 1.0</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectSaturationMap.attributes.saturation.images data=site.data.scene-classes.maps.ColorCorrectSaturationMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ColorCorrectSaturationMap.attributes.saturation.links heading=4-%}
    </p>
    <h3>saturation_b</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">desaturates the blue channel input below 1.0 and adds saturation above 1.0</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectSaturationMap.attributes.saturation_b.images data=site.data.scene-classes.maps.ColorCorrectSaturationMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ColorCorrectSaturationMap.attributes.saturation_b.links heading=4-%}
    </p>
    <h3>saturation_g</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">desaturates the green channel input below 1.0 and adds saturation above 1.0</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectSaturationMap.attributes.saturation_g.images data=site.data.scene-classes.maps.ColorCorrectSaturationMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ColorCorrectSaturationMap.attributes.saturation_g.links heading=4-%}
    </p>
    <h3>saturation_r</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">desaturates the red channel input below 1.0 and adds saturation above 1.0</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectSaturationMap.attributes.saturation_r.images data=site.data.scene-classes.maps.ColorCorrectSaturationMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ColorCorrectSaturationMap.attributes.saturation_r.links heading=4-%}
    </p>
    <h3>use_per_channel_saturation</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables separate RGB controls for saturation</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectSaturationMap.attributes.use_per_channel_saturation.images data=site.data.scene-classes.maps.ColorCorrectSaturationMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.ColorCorrectSaturationMap.attributes.use_per_channel_saturation.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.scene-classes.maps.ColorCorrectSaturationMap-%}