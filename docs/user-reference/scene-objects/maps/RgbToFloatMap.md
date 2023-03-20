---
title: RgbToFloatMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RgbToFloatMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.RgbToFloatMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RgbToFloatMap.gallery data=site.data.user-reference.scene-objects.maps.RgbToFloatMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.RgbToFloatMap.links-%}
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
      <p class="scene-class-comments">Input color to convert</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RgbToFloatMap.attributes.input.images data=site.data.user-reference.scene-objects.maps.RgbToFloatMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.RgbToFloatMap.attributes.input.links heading=4-%}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;r&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;g&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;b&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;min&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;max&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;average&rdquo; (default)<br>
          &nbsp;&nbsp;6 = &ldquo;sum&rdquo;<br>
          &nbsp;&nbsp;7 = &ldquo;luminance&rdquo;<br>
      <p class="scene-class-comments">The method to convert rgb color to float</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RgbToFloatMap.attributes.mode.images data=site.data.user-reference.scene-objects.maps.RgbToFloatMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.RgbToFloatMap.attributes.mode.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.RgbToFloatMap-%}