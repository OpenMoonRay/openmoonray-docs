---
title: ColorCorrectLegacyMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectLegacyMap
{%include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectLegacyMap.gallery data=site.data.scene-classes.maps.ColorCorrectLegacyMap-%}
{%include see-also.html links=site.data.scene-classes.maps.ColorCorrectLegacyMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>brightness</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectLegacyMap.attributes.brightness.images data=site.data.scene-classes.maps.ColorCorrectLegacyMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ColorCorrectLegacyMap.attributes.brightness.links-%}
    </p>
    <h3>clamp</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectLegacyMap.attributes.clamp.images data=site.data.scene-classes.maps.ColorCorrectLegacyMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ColorCorrectLegacyMap.attributes.clamp.links-%}
    </p>
    <h3>contrast</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectLegacyMap.attributes.contrast.images data=site.data.scene-classes.maps.ColorCorrectLegacyMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ColorCorrectLegacyMap.attributes.contrast.links-%}
    </p>
    <h3>hue</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectLegacyMap.attributes.hue.images data=site.data.scene-classes.maps.ColorCorrectLegacyMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ColorCorrectLegacyMap.attributes.hue.links-%}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectLegacyMap.attributes.input.images data=site.data.scene-classes.maps.ColorCorrectLegacyMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ColorCorrectLegacyMap.attributes.input.links-%}
    </p>
    <h3>invert</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectLegacyMap.attributes.invert.images data=site.data.scene-classes.maps.ColorCorrectLegacyMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ColorCorrectLegacyMap.attributes.invert.links-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectLegacyMap.attributes.mask.images data=site.data.scene-classes.maps.ColorCorrectLegacyMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ColorCorrectLegacyMap.attributes.mask.links-%}
    </p>
    <h3>monochrome</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | off = 0 (default)
          | luminance = 1
          | average = 2
          | minimum = 3
          | maximum = 4
          | red channel = 5
          | green channel = 6
          | blue channel = 7
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectLegacyMap.attributes.monochrome.images data=site.data.scene-classes.maps.ColorCorrectLegacyMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ColorCorrectLegacyMap.attributes.monochrome.links-%}
    </p>
    <h3>multiplier</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectLegacyMap.attributes.multiplier.images data=site.data.scene-classes.maps.ColorCorrectLegacyMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ColorCorrectLegacyMap.attributes.multiplier.links-%}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectLegacyMap.attributes.on.images data=site.data.scene-classes.maps.ColorCorrectLegacyMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ColorCorrectLegacyMap.attributes.on.links-%}
    </p>
    <h3>saturation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ColorCorrectLegacyMap.attributes.saturation.images data=site.data.scene-classes.maps.ColorCorrectLegacyMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ColorCorrectLegacyMap.attributes.saturation.links-%}
    </p>
  </p>
</details>
</div>