---
title: ShadowDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ShadowDisplayFilter
---
{%assign image_dir=site.data.scene-classes.display-filters.ShadowDisplayFilter.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.display-filters.ShadowDisplayFilter.gallery
    image_dir=image_dir
%}
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>density</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Blend value between occluded and unoccluded images. 1 = completely occluded. 0 = completely unoccluded.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ShadowDisplayFilter.density
          image_dir=image_dir
      %}
    </p>
    <h3>occluded</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">Image Buffer representing the occluded image</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ShadowDisplayFilter.occluded
          image_dir=image_dir
      %}
    </p>
    <h3>shadow_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">color of the shadow</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ShadowDisplayFilter.shadow_color
          image_dir=image_dir
      %}
    </p>
    <h3>unoccluded</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">Image Buffer representing the unoccluded image</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ShadowDisplayFilter.unoccluded
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>