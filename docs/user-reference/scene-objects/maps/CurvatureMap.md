---
title: CurvatureMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# CurvatureMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.CurvatureMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.CurvatureMap.gallery data=site.data.user-reference.scene-objects.maps.CurvatureMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.CurvatureMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>invert</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br/>
      default: False
      <p class="scene-class-comments">Flips the value of the curvature.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.CurvatureMap.attributes.invert.images data=site.data.user-reference.scene-objects.maps.CurvatureMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.CurvatureMap.attributes.invert.links heading=4-%}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br/>
          </t>0 = convex<br/>
          </t>1 = concave<br/>
          </t>2 = composite<br/>
          </t>3 = all(default)<br/>
      <p class="scene-class-comments">The composite mode outputs the composite of convex curvature and concave curvature as grayscale ((concave - convex) * 0.5) + 0.5. The all mode outputs the convex curvature in the red channel, concave curvature in the green channel, and composite of both curvatures in the blue channel.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.CurvatureMap.attributes.mode.images data=site.data.user-reference.scene-objects.maps.CurvatureMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.CurvatureMap.attributes.mode.links heading=4-%}
    </p>
    <h3>power</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br/>
      default: 0.5
      <p class="scene-class-comments">Raises the value of the curvature to the given power.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.CurvatureMap.attributes.power.images data=site.data.user-reference.scene-objects.maps.CurvatureMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.CurvatureMap.attributes.power.links heading=4-%}
    </p>
    <h3>scale</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br/>
      default: 1.0
      <p class="scene-class-comments">Multiplies the value of the curvature. Results are still clamped between 0 and 1.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.CurvatureMap.attributes.scale.images data=site.data.user-reference.scene-objects.maps.CurvatureMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.CurvatureMap.attributes.scale.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.CurvatureMap-%}