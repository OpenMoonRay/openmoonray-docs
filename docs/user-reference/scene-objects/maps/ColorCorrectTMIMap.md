---
title: ColorCorrectTMIMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectTMIMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.ColorCorrectTMIMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectTMIMap.gallery data=site.data.user-reference.scene-objects.maps.ColorCorrectTMIMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectTMIMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>TMI</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br/>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">T = Temperature where positive values push towards blue and negative towards red.   M = Magenta where positive values push towards magenta and negative towards green.  I = Intensity where negative values remove and positive values add energy </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectTMIMap.attributes.TMI.images data=site.data.user-reference.scene-objects.maps.ColorCorrectTMIMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectTMIMap.attributes.TMI.links heading=4-%}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br/>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">bind the input here</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectTMIMap.attributes.input.images data=site.data.user-reference.scene-objects.maps.ColorCorrectTMIMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectTMIMap.attributes.input.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br/>
      default: 1.0
      <p class="scene-class-comments">how much of the overall color correct to mix in</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectTMIMap.attributes.mix.images data=site.data.user-reference.scene-objects.maps.ColorCorrectTMIMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectTMIMap.attributes.mix.links heading=4-%}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br/>
      default: True
      <p class="scene-class-comments">enables/disables all color correct operations</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectTMIMap.attributes.on.images data=site.data.user-reference.scene-objects.maps.ColorCorrectTMIMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectTMIMap.attributes.on.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.ColorCorrectTMIMap-%}