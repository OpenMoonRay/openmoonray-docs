---
title: RampDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RampDisplayFilter
---
{%assign image_dir=site.data.scene-classes.display-filters.RampDisplayFilter.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.display-filters.RampDisplayFilter.gallery
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
          images=site.data.scene-classes.display-filters.RampDisplayFilter.invert_mask
          image_dir=image_dir
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">blend between output and input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RampDisplayFilter.mix
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Ramp Knot attributes</summary>
  <p>
    <h3>colors</h3>
    <p class="scene-class-type">
      <b>RgbVector</b>
      default: [[ 0, 0, 0 ], [ 0.25, 0.25, 0.25 ], [ 0.75, 0.75, 0.75 ], [ 1, 1, 1 ]]
      <p class="scene-class-comments">List of colors on the ramp</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RampDisplayFilter.colors
          image_dir=image_dir
      %}
    </p>
    <h3>interpolations</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-comments">None: 0, Linear: 1, Exponential Up: 2, Exponential Down: 3, Smooth: 4, Catmull-Rom: 5</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RampDisplayFilter.interpolations
          image_dir=image_dir
      %}
    </p>
    <h3>positions</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">Color ramp</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RampDisplayFilter.positions
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Ramp properties attributes</summary>
  <p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">input to the input ramp</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RampDisplayFilter.input
          image_dir=image_dir
      %}
    </p>
    <h3>ramp_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | v_ramp = 0 (default)
          | u_ramp = 1
          | diagonal_ramp = 2
          | radial_ramp = 3
          | circular_ramp = 4
          | box_ramp = 5
          | uxv_ramp = 6
          | four_corner_ramp = 7
          | input_ramp = 8
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RampDisplayFilter.ramp_type
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RampDisplayFilter.mask
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>