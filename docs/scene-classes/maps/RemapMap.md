---
title: RemapMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RemapMap
---
{%assign image_dir=site.data.scene-classes.maps.RemapMap.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.maps.RemapMap.gallery
    image_dir=image_dir
%}
<details open>
  <summary>Channel attributes</summary>
  <p>
    <h3>clamp_max_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the maximum value output by this map when 'clamp' is enabled</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RemapMap.clamp_max_RGB
          image_dir=image_dir
      %}
    </p>
    <h3>clamp_min_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">the minimum value output by this map when 'clamp' is enabled</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RemapMap.clamp_min_RGB
          image_dir=image_dir
      %}
    </p>
    <h3>input_max_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the input value that will be remapped to the 'output max' value</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RemapMap.input_max_RGB
          image_dir=image_dir
      %}
    </p>
    <h3>input_min_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">the input value that will be remapped to the 'output min' value</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RemapMap.input_min_RGB
          image_dir=image_dir
      %}
    </p>
    <h3>midpoint_bias_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0.5, 0.5, 0.5 ]
      <p class="scene-class-comments">biases the in-between values toward 'output min' or 'output max'. Default = 0.5</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RemapMap.midpoint_bias_RGB
          image_dir=image_dir
      %}
    </p>
    <h3>output_max_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the value that 'input max' is remapped to</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RemapMap.output_max_RGB
          image_dir=image_dir
      %}
    </p>
    <h3>output_min_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">the value that 'input min' is remapped to</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RemapMap.output_min_RGB
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>clamp</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables/disables clamping of the output values.  This useful prevent out-of-range values when expanding the input values.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RemapMap.clamp
          image_dir=image_dir
      %}
    </p>
    <h3>clamp_RGB</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables/disables clamping of the output values.  This useful prevent out-of-range values when expanding the input values.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RemapMap.clamp_RGB
          image_dir=image_dir
      %}
    </p>
    <h3>clamp_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">the maximum value output by this map when 'clamp' is enabled</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RemapMap.clamp_max
          image_dir=image_dir
      %}
    </p>
    <h3>clamp_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">the minimum value output by this map when 'clamp' is enabled</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RemapMap.clamp_min
          image_dir=image_dir
      %}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the input values to be remapped</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RemapMap.input
          image_dir=image_dir
      %}
    </p>
    <h3>input_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">the input value that will be remapped to the 'output max' value</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RemapMap.input_max
          image_dir=image_dir
      %}
    </p>
    <h3>input_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">the input value that will be remapped to the 'output min' value</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RemapMap.input_min
          image_dir=image_dir
      %}
    </p>
    <h3>midpoint_bias</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">biases the in-between values toward 'output min' or 'output max'. Default = 0.5</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RemapMap.midpoint_bias
          image_dir=image_dir
      %}
    </p>
    <h3>output_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">the value that 'input max' is remapped to</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RemapMap.output_max
          image_dir=image_dir
      %}
    </p>
    <h3>output_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">the value that 'input min' is remapped to</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RemapMap.output_min
          image_dir=image_dir
      %}
    </p>
    <h3>remap_method</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | uniform = 0 (default)
          | RGB = 1
      <p class="scene-class-comments">Choose whether you are remapping using single values (uniform) or with separate RGB channels</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.RemapMap.remap_method
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>