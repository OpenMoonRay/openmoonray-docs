---
title: Multi Channel to FloatMap
---
# MultiChannelToFloatMap
{%-include overview.html data=site.data.scene-classes.maps.MultiChannelToFloatMap-%}
{%-include image-gallery.html images=site.data.scene-classes.maps.MultiChannelToFloatMap.gallery data=site.data.scene-classes.maps.MultiChannelToFloatMap-%}
{%-include see-also.html links=site.data.scene-classes.maps.MultiChannelToFloatMap.links-%}
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
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.MultiChannelToFloatMap.attributes.input.images data=site.data.scene-classes.maps.MultiChannelToFloatMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.MultiChannelToFloatMap.attributes.input.links heading=4-%}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | Red = 0 (default)
          | Green = 1
          | Blue = 2
          | Cyan = 3
          | Magenta = 4
          | Yellow = 5
          | White = 6
      <p class="scene-class-comments">Specifies which color channels including combination channels (Cyan, Magenta, Yellow, and White) to convert to float.</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.MultiChannelToFloatMap.attributes.mode.images data=site.data.scene-classes.maps.MultiChannelToFloatMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.MultiChannelToFloatMap.attributes.mode.links heading=4-%}
    </p>
    <h3>tolerance</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.20000000298
      <p class="scene-class-comments">Low tolerance values will tend to produce harsher edges near overlapping colors, while high tolerance values may result in cross-color bleeding.</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.MultiChannelToFloatMap.attributes.tolerance.images data=site.data.scene-classes.maps.MultiChannelToFloatMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.MultiChannelToFloatMap.attributes.tolerance.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.scene-classes.maps.MultiChannelToFloatMap-%}