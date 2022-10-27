---
title: CurvatureMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# CurvatureMap
{%assign image_path=site.data.scene-classes.maps.CurvatureMap.image_path%}
{%if site.data.scene-classes.maps.CurvatureMap.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.CurvatureMap.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.CurvatureMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.CurvatureMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
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
      {% include image-gallery.html
          images=site.data.scene-classes.maps.CurvatureMapattributes.invert.images.
          path=image_path
      %}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | convex = 0
          | concave = 1
          | composite = 2
          | all = 3 (default)
      <p class="scene-class-comments">The composite mode outputs the composite of convex curvature and concave curvature as grayscale ((concave - convex) * 0.5) + 0.5. The all mode outputs the convex curvature in the red channel, concave curvature in the green channel, and composite of both curvatures in the blue channel.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.CurvatureMapattributes.mode.images.
          path=image_path
      %}
    </p>
    <h3>power</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.CurvatureMapattributes.power.images.
          path=image_path
      %}
    </p>
    <h3>scale</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.CurvatureMapattributes.scale.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>