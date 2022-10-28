---
title: RandomNormalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RandomNormalMap
{%include image-gallery.html images=site.data.scene-classes.normal-maps.RandomNormalMap.gallery data=site.data.scene-classes.normal-maps.RandomNormalMap-%}
{%include see-also.html links=site.data.scene-classes.normal-maps.RandomNormalMap.links-%}
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
      <p class="scene-class-comments">the input color used as a base seed to generate the random value</p>
      {%include image-gallery.html images=site.data.scene-classes.normal-maps.RandomNormalMap.attributes.input.images data=site.data.scene-classes.normal-maps.RandomNormalMap-%}
      {%include see-also.html links=site.data.scene-classes.normal-maps.RandomNormalMap.attributes.input.links-%}
    </p>
    <h3>seed</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">additional seed added to input for random number generator</p>
      {%include image-gallery.html images=site.data.scene-classes.normal-maps.RandomNormalMap.attributes.seed.images data=site.data.scene-classes.normal-maps.RandomNormalMap-%}
      {%include see-also.html links=site.data.scene-classes.normal-maps.RandomNormalMap.attributes.seed.links-%}
    </p>
  </p>
</details>
</div>