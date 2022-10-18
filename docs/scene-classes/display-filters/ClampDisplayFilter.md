---
title: ClampDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ClampDisplayFilter
---
{%assign image_dir=site.data.scene-classes.display-filters.ClampDisplayFilter.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.display-filters.ClampDisplayFilter.gallery
    image_dir=image_dir
%}
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>invert_mask</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">invert value of mask</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ClampDisplayFilter.invert_mask
          image_dir=image_dir
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">blend between output and input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ClampDisplayFilter.mix
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">Image buffer to clamp</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ClampDisplayFilter.input
          image_dir=image_dir
      %}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ClampDisplayFilter.mask
          image_dir=image_dir
      %}
    </p>
    <h3>max</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">max color value</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ClampDisplayFilter.max
          image_dir=image_dir
      %}
    </p>
    <h3>min</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">min color value</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ClampDisplayFilter.min
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>