---
title: OverDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# OverDisplayFilter
---
{%assign image_dir=site.data.scene-classes.display-filters.OverDisplayFilter.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.display-filters.OverDisplayFilter.gallery
    image_dir=image_dir
%}
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>alpha</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">alpha for over operation</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.OverDisplayFilter.alpha
          image_dir=image_dir
      %}
    </p>
    <h3>input_bottom</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">RenderOutput on bottom</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.OverDisplayFilter.input_bottom
          image_dir=image_dir
      %}
    </p>
    <h3>input_top</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">RenderOutput on top</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.OverDisplayFilter.input_top
          image_dir=image_dir
      %}
    </p>
    <h3>invert_alpha</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">invert value of alpha</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.OverDisplayFilter.invert_alpha
          image_dir=image_dir
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">blend between output and input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.OverDisplayFilter.mix
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>