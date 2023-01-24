---
title: Curvature Map
---
# CurvatureMap
{%-include overview.html data=site.data.scene-classes.maps.CurvatureMap-%}
{%-include image-gallery.html images=site.data.scene-classes.maps.CurvatureMap.gallery data=site.data.scene-classes.maps.CurvatureMap-%}
{%-include see-also.html links=site.data.scene-classes.maps.CurvatureMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>invert</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.CurvatureMap.attributes.invert.images data=site.data.scene-classes.maps.CurvatureMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.CurvatureMap.attributes.invert.links heading=4-%}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | convex = 0
          | concave = 1
          | composite = 2
          | all = 3 (default)
      <p class="scene-class-comments">The composite mode outputs the composite of convex curvature and concave curvature as grayscale ((concave - convex) * 0.5) + 0.5. The all mode outputs the convex curvature in the red channel, concave curvature in the green channel, and composite of both curvatures in the blue channel.</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.CurvatureMap.attributes.mode.images data=site.data.scene-classes.maps.CurvatureMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.CurvatureMap.attributes.mode.links heading=4-%}
    </p>
    <h3>power</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.CurvatureMap.attributes.power.images data=site.data.scene-classes.maps.CurvatureMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.CurvatureMap.attributes.power.links heading=4-%}
    </p>
    <h3>scale</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.CurvatureMap.attributes.scale.images data=site.data.scene-classes.maps.CurvatureMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.CurvatureMap.attributes.scale.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.scene-classes.maps.CurvatureMap-%}