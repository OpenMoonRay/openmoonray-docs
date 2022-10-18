---
title: RgbToNormalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RgbToNormalMap
---
{%assign image_dir=site.data.scene-classes.normal-maps.RgbToNormalMap.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.normal-maps.RgbToNormalMap.gallery
    image_dir=image_dir
%}
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Input color to convert to a normal map</p>
      {% include image-gallery.html
          images=site.data.scene-classes.normal-maps.RgbToNormalMap.input
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>