---
title: ToonDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ToonDisplayFilter
---
{%assign image_dir=site.data.scene-classes.display-filters.ToonDisplayFilter.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.display-filters.ToonDisplayFilter.gallery
    image_dir=image_dir
%}
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>ambient</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Adds an ambient light to the cel shading</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ToonDisplayFilter.ambient
          image_dir=image_dir
      %}
    </p>
    <h3>edge_detector</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | None = 0 (default)
          | Sobel = 1
          | Laplacian = 2
          | Laplacian of Gaussian = 3
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ToonDisplayFilter.edge_detector
          image_dir=image_dir
      %}
    </p>
    <h3>ink_depth_threshold</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.00999999977648
      <p class="scene-class-comments">The threshold for the depth-based ink outline</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ToonDisplayFilter.ink_depth_threshold
          image_dir=image_dir
      %}
    </p>
    <h3>ink_normal_scale</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.00999999977648
      <p class="scene-class-comments">Increase for a more pronounced normal-based ink outline</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ToonDisplayFilter.ink_normal_scale
          image_dir=image_dir
      %}
    </p>
    <h3>ink_normal_threshold</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.00999999977648
      <p class="scene-class-comments">The threshold for the normal-based ink outline</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ToonDisplayFilter.ink_normal_threshold
          image_dir=image_dir
      %}
    </p>
    <h3>input_albedo</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">RenderOutput that represents diffuse albedo material aov</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ToonDisplayFilter.input_albedo
          image_dir=image_dir
      %}
    </p>
    <h3>input_depth</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">RenderOutput with 'depth' result</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ToonDisplayFilter.input_depth
          image_dir=image_dir
      %}
    </p>
    <h3>input_diffuse</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">RenderOutput that represents diffuse reflection LPE</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ToonDisplayFilter.input_diffuse
          image_dir=image_dir
      %}
    </p>
    <h3>input_glossy</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">RenderOutput that represents glossy reflection LPE</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ToonDisplayFilter.input_glossy
          image_dir=image_dir
      %}
    </p>
    <h3>input_normal</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">RenderOutput with 'normal' result</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ToonDisplayFilter.input_normal
          image_dir=image_dir
      %}
    </p>
    <h3>num_cels</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 2
      <p class="scene-class-comments">Sets number of toon cels in diffuse shading</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.ToonDisplayFilter.num_cels
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>