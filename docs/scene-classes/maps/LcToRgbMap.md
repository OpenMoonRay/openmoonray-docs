---
title: LcToRgbMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# LcToRgbMap
{%-include image-gallery.html images=site.data.scene-classes.maps.LcToRgbMap.gallery data=site.data.scene-classes.maps.LcToRgbMap-%}
{%-include see-also.html links=site.data.scene-classes.maps.LcToRgbMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>input_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.LcToRgbMap.attributes.input_color.images data=site.data.scene-classes.maps.LcToRgbMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.LcToRgbMap.attributes.input_color.links heading=4-%}
    </p>
    <h3>target_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 100, 0, 0 ]
      <p class="scene-class-comments">Target color for remapping, in LAB colorspace</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.LcToRgbMap.attributes.target_color.images data=site.data.scene-classes.maps.LcToRgbMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.LcToRgbMap.attributes.target_color.links heading=4-%}
    </p>
  </p>
</details>
</div>