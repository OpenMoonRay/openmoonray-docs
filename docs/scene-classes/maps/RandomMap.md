---
title: RandomMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RandomMap
{%assign image_path=site.data.scene-classes.maps.RandomMap.images.path%}
{%if site.data.scene-classes.maps.RandomMap.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.RandomMap.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.RandomMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.RandomMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
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
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RandomMap.images.attributes.input
          path=image_path
      %}
    </p>
    <h3>monochrome</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">outputs the same color for all three channels</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RandomMap.images.attributes.monochrome
          path=image_path
      %}
    </p>
    <h3>output_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">the maximum output random value</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RandomMap.images.attributes.output_max
          path=image_path
      %}
    </p>
    <h3>output_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">the minimum output random value</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RandomMap.images.attributes.output_min
          path=image_path
      %}
    </p>
    <h3>seed</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">additional seed added to input for random number generator</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RandomMap.images.attributes.seed
          path=image_path
      %}
    </p>
  </p>
</details>
</div>