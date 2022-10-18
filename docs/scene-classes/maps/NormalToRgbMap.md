---
title: NormalToRgbMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# NormalToRgbMap
---
{%assign image_dir=site.data.scene-classes.maps.NormalToRgbMap.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.maps.NormalToRgbMap.gallery
    image_dir=image_dir
%}
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-comments">Input normal map to convert to a color</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.NormalToRgbMap.input
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>