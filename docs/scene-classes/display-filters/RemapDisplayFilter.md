---
title: RemapDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RemapDisplayFilter
{%assign image_path=site.data.scene-classes.display-filters.RemapDisplayFilter.image_path%}
{%if site.data.scene-classes.display-filters.RemapDisplayFilter.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.display-filters.RemapDisplayFilter.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.display-filters.RemapDisplayFilter.links-%}
---
## See Also
{%for link in site.data.scene-classes.display-filters.RemapDisplayFilter.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>invert_mask</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">invert value of mask</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RemapDisplayFilter.attributes.invert_mask.images.
          path=image_path
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">blend between output and input</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RemapDisplayFilter.attributes.mix.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Channel attributes</summary>
  <p>
    <h3>clamp_max_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the maximum value output by this map when 'clamp' is enabled</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RemapDisplayFilter.attributes.clamp_max_RGB.images.
          path=image_path
      %}
    </p>
    <h3>clamp_min_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">the minimum value output by this map when 'clamp' is enabled</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RemapDisplayFilter.attributes.clamp_min_RGB.images.
          path=image_path
      %}
    </p>
    <h3>input_max_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the input value that will be remapped to the 'output max' value</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RemapDisplayFilter.attributes.input_max_RGB.images.
          path=image_path
      %}
    </p>
    <h3>input_min_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">the input value that will be remapped to the 'output min' value</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RemapDisplayFilter.attributes.input_min_RGB.images.
          path=image_path
      %}
    </p>
    <h3>midpoint_bias_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0.5, 0.5, 0.5 ]
      <p class="scene-class-comments">biases the in-between values toward 'output min' or 'output max'. Default = 0.5</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RemapDisplayFilter.attributes.midpoint_bias_RGB.images.
          path=image_path
      %}
    </p>
    <h3>output_max_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the value that 'input max' is remapped to</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RemapDisplayFilter.attributes.output_max_RGB.images.
          path=image_path
      %}
    </p>
    <h3>output_min_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">the value that 'input min' is remapped to</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RemapDisplayFilter.attributes.output_min_RGB.images.
          path=image_path
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
          images=site.data.scene-classes.display-filters.RemapDisplayFilter.attributes.clamp.images.
          path=image_path
      %}
    </p>
    <h3>clamp_RGB</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables/disables clamping of the output values.  This useful prevent out-of-range values when expanding the input values.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RemapDisplayFilter.attributes.clamp_RGB.images.
          path=image_path
      %}
    </p>
    <h3>clamp_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">the maximum value output by this map when 'clamp' is enabled</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RemapDisplayFilter.attributes.clamp_max.images.
          path=image_path
      %}
    </p>
    <h3>clamp_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">the minimum value output by this map when 'clamp' is enabled</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RemapDisplayFilter.attributes.clamp_min.images.
          path=image_path
      %}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">Input buffer</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RemapDisplayFilter.attributes.input.images.
          path=image_path
      %}
    </p>
    <h3>input_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">the input value that will be remapped to the 'output max' value</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RemapDisplayFilter.attributes.input_max.images.
          path=image_path
      %}
    </p>
    <h3>input_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">the input value that will be remapped to the 'output min' value</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RemapDisplayFilter.attributes.input_min.images.
          path=image_path
      %}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RemapDisplayFilter.attributes.mask.images.
          path=image_path
      %}
    </p>
    <h3>midpoint_bias</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">biases the in-between values toward 'output min' or 'output max'. Default = 0.5</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RemapDisplayFilter.attributes.midpoint_bias.images.
          path=image_path
      %}
    </p>
    <h3>output_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">the value that 'input max' is remapped to</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RemapDisplayFilter.attributes.output_max.images.
          path=image_path
      %}
    </p>
    <h3>output_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">the value that 'input min' is remapped to</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RemapDisplayFilter.attributes.output_min.images.
          path=image_path
      %}
    </p>
    <h3>remap_method</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | uniform = 0 (default)
          | RGB = 1
      <p class="scene-class-comments">Choose whether you are remapping using single values (uniform) or with separate RGB channels</p>
      {% include image-gallery.html
          images=site.data.scene-classes.display-filters.RemapDisplayFilter.attributes.remap_method.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>