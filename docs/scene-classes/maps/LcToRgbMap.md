---
title: LcToRgbMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# LcToRgbMap
---
{%assign image_dir=site.data.scene-classes.maps.LcToRgbMap.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.maps.LcToRgbMap.gallery
    image_dir=image_dir
%}
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>input_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.LcToRgbMap.input_color
          image_dir=image_dir
      %}
    </p>
    <h3>target_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 100, 0, 0 ]
      <p class="scene-class-comments">Target color for remapping, in LAB colorspace</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.LcToRgbMap.target_color
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>