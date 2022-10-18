---
title: ConstantScalarMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ConstantScalarMap
---
{%assign image_dir=site.data.scene-classes.maps.ConstantScalarMap.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.maps.ConstantScalarMap.gallery
    image_dir=image_dir
%}
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>scalar_value</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">constant scalar value</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ConstantScalarMap.scalar_value
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>