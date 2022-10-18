---
title: BlendMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# BlendMap
---
{%assign image_dir=site.data.scene-classes.maps.BlendMap.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.maps.BlendMap.gallery
    image_dir=image_dir
%}
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>blend_amount</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.5
      <p class="scene-class-comments">The amount to blend between color A (0) and color B (1)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.BlendMap.blend_amount
          image_dir=image_dir
      %}
    </p>
    <h3>blend_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | linear = 0 (default)
          | cubic = 1
      <p class="scene-class-comments">The type of blending algorithm</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.BlendMap.blend_type
          image_dir=image_dir
      %}
    </p>
    <h3>color_A</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">The color you get if blend amount is 0</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.BlendMap.color_A
          image_dir=image_dir
      %}
    </p>
    <h3>color_B</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">The color you get if blend amount is 1</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.BlendMap.color_B
          image_dir=image_dir
      %}
    </p>
    <h3>threshold_max</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">If the blend amount is greater than this amount, it will choose color B (1)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.BlendMap.threshold_max
          image_dir=image_dir
      %}
    </p>
    <h3>threshold_min</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">If the blend amount is less than or equal to this amount, it will choose color A (0)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.BlendMap.threshold_min
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>