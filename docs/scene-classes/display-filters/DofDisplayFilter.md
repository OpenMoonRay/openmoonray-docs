---
title: DofDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DofDisplayFilter
---
{%assign image_dir=site.data.scene-classes.display-filters.DofDisplayFilter.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.display-filters.DofDisplayFilter.gallery
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
          images=site.data.scene-classes.display-filters.DofDisplayFilter.invert_mask
          image_dir=image_dir
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">blend between output and input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.DofDisplayFilter.mix
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>aperture</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 8.0
      <p class="scene-class-comments">aperture in millimeters</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.DofDisplayFilter.aperture
          image_dir=image_dir
      %}
    </p>
    <h3>depth</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">the 'depth' result RenderOutput to sample z depth values from</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.DofDisplayFilter.depth
          image_dir=image_dir
      %}
    </p>
    <h3>focal_length</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 30.0
      <p class="scene-class-comments">focal length in millimeters</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.DofDisplayFilter.focal_length
          image_dir=image_dir
      %}
    </p>
    <h3>focus_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.DofDisplayFilter.focus_distance
          image_dir=image_dir
      %}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">RenderOutput to apply depth of field</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.DofDisplayFilter.input
          image_dir=image_dir
      %}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.DofDisplayFilter.mask
          image_dir=image_dir
      %}
    </p>
    <h3>use_camera_attributes</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">read dof attributes from active scene camera</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.DofDisplayFilter.use_camera_attributes
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>