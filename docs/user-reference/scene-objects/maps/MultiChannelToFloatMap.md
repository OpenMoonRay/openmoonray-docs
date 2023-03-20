---
title: MultiChannelToFloatMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# MultiChannelToFloatMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.MultiChannelToFloatMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.MultiChannelToFloatMap.gallery data=site.data.user-reference.scene-objects.maps.MultiChannelToFloatMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.MultiChannelToFloatMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.MultiChannelToFloatMap.attributes.input.images data=site.data.user-reference.scene-objects.maps.MultiChannelToFloatMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.MultiChannelToFloatMap.attributes.input.links heading=4-%}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = name (default)<br>
          &nbsp;&nbsp;1 = name<br>
          &nbsp;&nbsp;2 = name<br>
          &nbsp;&nbsp;3 = name<br>
          &nbsp;&nbsp;4 = name<br>
          &nbsp;&nbsp;5 = name<br>
          &nbsp;&nbsp;6 = name<br>
      <p class="scene-class-comments">Specifies which color channels including combination channels (Cyan, Magenta, Yellow, and White) to convert to float.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.MultiChannelToFloatMap.attributes.mode.images data=site.data.user-reference.scene-objects.maps.MultiChannelToFloatMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.MultiChannelToFloatMap.attributes.mode.links heading=4-%}
    </p>
    <h3>tolerance</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.20000000298
      <p class="scene-class-comments">Low tolerance values will tend to produce harsher edges near overlapping colors, while high tolerance values may result in cross-color bleeding.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.MultiChannelToFloatMap.attributes.tolerance.images data=site.data.user-reference.scene-objects.maps.MultiChannelToFloatMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.MultiChannelToFloatMap.attributes.tolerance.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.MultiChannelToFloatMap-%}