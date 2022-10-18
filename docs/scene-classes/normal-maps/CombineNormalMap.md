---
title: CombineNormalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# CombineNormalMap
---
{%assign image_dir=site.data.scene-classes.normal-maps.CombineNormalMap.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.normal-maps.CombineNormalMap.gallery
    image_dir=image_dir
%}
<details open>
  <summary>Normal attributes</summary>
  <p>
    <h3>input_1</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-comments">First normal map to combine; usually a base map</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.CombineNormalMap.input_1
          image_dir=image_dir
      %}
    </p>
    <h3>input_2</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-comments">Second normal map to combine; usually a base map</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.CombineNormalMap.input_2
          image_dir=image_dir
      %}
    </p>
    <h3>normal_map_1_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Amount of normal map 1 to blend in</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.CombineNormalMap.normal_map_1_dial
          image_dir=image_dir
      %}
    </p>
    <h3>normal_map_2_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Amount of normal map 2 to blend in</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.CombineNormalMap.normal_map_2_dial
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>