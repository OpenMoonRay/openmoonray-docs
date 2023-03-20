---
title: ColorCorrectNukeMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectNukeMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap.gallery data=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>TMI</h3>
    <p class="scene-class-type">
      <b>Vec3f</b><br/>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">T = Temperature where positive values push towards blue and negative towards red.   M = Magenta where positive values push towards magenta and negative towards green.  I = Intensity where negative values remove and positive values add energy </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap.attributes.TMI.images data=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap.attributes.TMI.links heading=4-%}
    </p>
    <h3>TMI_control_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b><br/>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap.attributes.TMI_control_enabled.images data=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap.attributes.TMI_control_enabled.links heading=4-%}
    </p>
    <h3>contrast</h3>
    <p class="scene-class-type">
      <b>Rgb</b><br/>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap.attributes.contrast.images data=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap.attributes.contrast.links heading=4-%}
    </p>
    <h3>contrast_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b><br/>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap.attributes.contrast_enabled.images data=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap.attributes.contrast_enabled.links heading=4-%}
    </p>
    <h3>gain</h3>
    <p class="scene-class-type">
      <b>Rgb</b><br/>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap.attributes.gain.images data=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap.attributes.gain.links heading=4-%}
    </p>
    <h3>gain_offset_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b><br/>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap.attributes.gain_offset_enabled.images data=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap.attributes.gain_offset_enabled.links heading=4-%}
    </p>
    <h3>gamma</h3>
    <p class="scene-class-type">
      <b>Rgb</b><br/>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap.attributes.gamma.images data=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap.attributes.gamma.links heading=4-%}
    </p>
    <h3>gamma_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b><br/>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap.attributes.gamma_enabled.images data=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap.attributes.gamma_enabled.links heading=4-%}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b><br/> <i>bindable</i><br/>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap.attributes.input.images data=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap.attributes.input.links heading=4-%}
    </p>
    <h3>offset</h3>
    <p class="scene-class-type">
      <b>Rgb</b><br/>
      default: [ 0, 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap.attributes.offset.images data=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap.attributes.offset.links heading=4-%}
    </p>
    <h3>saturation</h3>
    <p class="scene-class-type">
      <b>Rgb</b><br/>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap.attributes.saturation.images data=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap.attributes.saturation.links heading=4-%}
    </p>
    <h3>saturation_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b><br/>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap.attributes.saturation_enabled.images data=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap.attributes.saturation_enabled.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.ColorCorrectNukeMap-%}