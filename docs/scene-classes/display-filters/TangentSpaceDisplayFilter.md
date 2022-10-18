---
title: TangentSpaceDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# TangentSpaceDisplayFilter
---
{%assign image_dir=site.data.scene-classes.display-filters.TangentSpaceDisplayFilter.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.display-filters.TangentSpaceDisplayFilter.gallery
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
          images=site.data.scene-classes.display-filters.TangentSpaceDisplayFilter.invert_mask
          image_dir=image_dir
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">blend between output and input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.TangentSpaceDisplayFilter.mix
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>N</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">Connect a RenderOutput with State N AOV here. Used to construct tangent space.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.TangentSpaceDisplayFilter.N
          image_dir=image_dir
      %}
    </p>
    <h3>dPds</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">Connect a RenderOutput with State dPds AOV here. Used to construct tangent space.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.TangentSpaceDisplayFilter.dPds
          image_dir=image_dir
      %}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">data to transform into tangent space</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.TangentSpaceDisplayFilter.input
          image_dir=image_dir
      %}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.TangentSpaceDisplayFilter.mask
          image_dir=image_dir
      %}
    </p>
    <h3>normal_map_output</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">when on, encodes the output to clamped [0, 1] in the same manner as a normal map</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.TangentSpaceDisplayFilter.normal_map_output
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>