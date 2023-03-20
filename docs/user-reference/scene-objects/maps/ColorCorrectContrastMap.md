---
title: ColorCorrectContrastMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectContrastMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap.gallery data=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>contrast</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap.attributes.contrast.images data=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap.attributes.contrast.links heading=4-%}
    </p>
    <h3>contrast_b</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the blue channel</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap.attributes.contrast_b.images data=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap.attributes.contrast_b.links heading=4-%}
    </p>
    <h3>contrast_g</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the green channel</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap.attributes.contrast_g.images data=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap.attributes.contrast_g.links heading=4-%}
    </p>
    <h3>contrast_r</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">negative values reduce the difference in luminance towards grey and positive values increase the difference in luminance for the red channel</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap.attributes.contrast_r.images data=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap.attributes.contrast_r.links heading=4-%}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">bind the input here</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap.attributes.input.images data=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap.attributes.input.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">how much of the overall color correct to mix in</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap.attributes.mix.images data=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap.attributes.mix.links heading=4-%}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">enables/disables all color correct operations</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap.attributes.on.images data=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap.attributes.on.links heading=4-%}
    </p>
    <h3>use_per_channel_contrast</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">enables separate RGB controls for contrast</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap.attributes.use_per_channel_contrast.images data=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap.attributes.use_per_channel_contrast.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.ColorCorrectContrastMap-%}