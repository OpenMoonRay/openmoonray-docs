---
title: ColorCorrectHsvMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectHsvMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap.gallery data=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>clamp</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">clamps output to [0,1] range</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap.attributes.clamp.images data=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap.attributes.clamp.links heading=4-%}
    </p>
    <h3>hue_shift</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">shifts the hue of the input (360 rolls over back to 0)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap.attributes.hue_shift.images data=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap.attributes.hue_shift.links heading=4-%}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">input color</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap.attributes.input.images data=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap.attributes.input.links heading=4-%}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">all attributes on/off</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap.attributes.on.images data=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap.attributes.on.links heading=4-%}
    </p>
    <h3>saturation_contrast</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">modifies the contrast of the input's saturation (-1, 1)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap.attributes.saturation_contrast.images data=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap.attributes.saturation_contrast.links heading=4-%}
    </p>
    <h3>saturation_factor</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">multiplies the saturation of the input</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap.attributes.saturation_factor.images data=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap.attributes.saturation_factor.links heading=4-%}
    </p>
    <h3>saturation_shift</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">shifts the saturation of the input (-1, 1)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap.attributes.saturation_shift.images data=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap.attributes.saturation_shift.links heading=4-%}
    </p>
    <h3>value_contrast</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">modifies the contrast of the input's value (-1, 1)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap.attributes.value_contrast.images data=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap.attributes.value_contrast.links heading=4-%}
    </p>
    <h3>value_factor</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">multiplies the value of the input</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap.attributes.value_factor.images data=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap.attributes.value_factor.links heading=4-%}
    </p>
    <h3>value_shift</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">shifts the value of the input (-1, 1)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap.attributes.value_shift.images data=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap.attributes.value_shift.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.ColorCorrectHsvMap-%}