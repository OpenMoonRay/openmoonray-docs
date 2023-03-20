---
title: RandomMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RandomMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.RandomMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RandomMap.gallery data=site.data.user-reference.scene-objects.maps.RandomMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.RandomMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b><br/> <i>bindable</i><br/>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the input color used as a base seed to generate the random value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RandomMap.attributes.input.images data=site.data.user-reference.scene-objects.maps.RandomMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.RandomMap.attributes.input.links heading=4-%}
    </p>
    <h3>monochrome</h3>
    <p class="scene-class-type">
      <b>Bool</b><br/>
      default: True
      <p class="scene-class-comments">outputs the same color for all three channels</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RandomMap.attributes.monochrome.images data=site.data.user-reference.scene-objects.maps.RandomMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.RandomMap.attributes.monochrome.links heading=4-%}
    </p>
    <h3>output_max</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: 1.0
      <p class="scene-class-comments">the maximum output random value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RandomMap.attributes.output_max.images data=site.data.user-reference.scene-objects.maps.RandomMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.RandomMap.attributes.output_max.links heading=4-%}
    </p>
    <h3>output_min</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: 0.0
      <p class="scene-class-comments">the minimum output random value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RandomMap.attributes.output_min.images data=site.data.user-reference.scene-objects.maps.RandomMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.RandomMap.attributes.output_min.links heading=4-%}
    </p>
    <h3>seed</h3>
    <p class="scene-class-type">
      <b>Int</b><br/>
      default: 0
      <p class="scene-class-comments">additional seed added to input for random number generator</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.RandomMap.attributes.seed.images data=site.data.user-reference.scene-objects.maps.RandomMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.RandomMap.attributes.seed.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.RandomMap-%}