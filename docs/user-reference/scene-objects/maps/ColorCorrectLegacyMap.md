---
title: ColorCorrectLegacyMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorCorrectLegacyMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.gallery data=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>brightness</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.brightness.images data=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.brightness.videos data=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.brightness.links heading=4-%}
    </p>
    <h3>clamp</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.clamp.images data=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.clamp.videos data=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.clamp.links heading=4-%}
    </p>
    <h3>contrast</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.contrast.images data=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.contrast.videos data=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.contrast.links heading=4-%}
    </p>
    <h3>hue</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.hue.images data=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.hue.videos data=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.hue.links heading=4-%}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.input.images data=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.input.videos data=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.input.links heading=4-%}
    </p>
    <h3>invert</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.invert.images data=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.invert.videos data=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.invert.links heading=4-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.mask.images data=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.mask.videos data=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.mask.links heading=4-%}
    </p>
    <h3>monochrome</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;off&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;luminance&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;average&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;minimum&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;maximum&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;red channel&rdquo;<br>
          &nbsp;&nbsp;6 = &ldquo;green channel&rdquo;<br>
          &nbsp;&nbsp;7 = &ldquo;blue channel&rdquo;<br>
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.monochrome.images data=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.monochrome.videos data=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.monochrome.links heading=4-%}
    </p>
    <h3>multiplier</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.multiplier.images data=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.multiplier.videos data=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.multiplier.links heading=4-%}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.on.images data=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.on.videos data=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.on.links heading=4-%}
    </p>
    <h3>saturation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.saturation.images data=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.saturation.videos data=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap.attributes.saturation.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.ColorCorrectLegacyMap-%}