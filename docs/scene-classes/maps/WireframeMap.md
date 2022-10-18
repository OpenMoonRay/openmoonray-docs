---
title: WireframeMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# WireframeMap
---
{%assign image_dir=site.data.scene-classes.maps.WireframeMap.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.maps.WireframeMap.gallery
    image_dir=image_dir
%}
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>fill_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.WireframeMap.fill_color
          image_dir=image_dir
      %}
    </p>
    <h3>line_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.WireframeMap.line_color
          image_dir=image_dir
      %}
    </p>
    <h3>line_width</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.WireframeMap.line_width
          image_dir=image_dir
      %}
    </p>
    <h3>raster</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.WireframeMap.raster
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>