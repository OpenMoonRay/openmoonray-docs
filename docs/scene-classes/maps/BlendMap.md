---
title: BlendMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# BlendMap
{%-include image-gallery.html images=site.data.scene-classes.maps.BlendMap.gallery data=site.data.scene-classes.maps.BlendMap-%}
{%-include see-also.html links=site.data.scene-classes.maps.BlendMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>blend_amount</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.5
      <p class="scene-class-comments">The amount to blend between color A (0) and color B (1)</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.BlendMap.attributes.blend_amount.images data=site.data.scene-classes.maps.BlendMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.BlendMap.attributes.blend_amount.links heading=4-%}
    </p>
    <h3>blend_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | linear = 0 (default)
          | cubic = 1
      <p class="scene-class-comments">The type of blending algorithm</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.BlendMap.attributes.blend_type.images data=site.data.scene-classes.maps.BlendMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.BlendMap.attributes.blend_type.links heading=4-%}
    </p>
    <h3>color_A</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">The color you get if blend amount is 0</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.BlendMap.attributes.color_A.images data=site.data.scene-classes.maps.BlendMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.BlendMap.attributes.color_A.links heading=4-%}
    </p>
    <h3>color_B</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">The color you get if blend amount is 1</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.BlendMap.attributes.color_B.images data=site.data.scene-classes.maps.BlendMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.BlendMap.attributes.color_B.links heading=4-%}
    </p>
    <h3>threshold_max</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">If the blend amount is greater than this amount, it will choose color B (1)</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.BlendMap.attributes.threshold_max.images data=site.data.scene-classes.maps.BlendMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.BlendMap.attributes.threshold_max.links heading=4-%}
    </p>
    <h3>threshold_min</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">If the blend amount is less than or equal to this amount, it will choose color A (0)</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.BlendMap.attributes.threshold_min.images data=site.data.scene-classes.maps.BlendMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.BlendMap.attributes.threshold_min.links heading=4-%}
    </p>
  </p>
</details>
</div>