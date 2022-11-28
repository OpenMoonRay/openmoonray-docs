---
title: RemapMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RemapMap
{%-include overview.html data=site.data.scene-classes.maps.RemapMap-%}
{%-include image-gallery.html images=site.data.scene-classes.maps.RemapMap.gallery data=site.data.scene-classes.maps.RemapMap-%}
{%-include see-also.html links=site.data.scene-classes.maps.RemapMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Channel attributes</summary>
  <p>
    <h3>clamp_max_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the maximum value output by this map when 'clamp' is enabled</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.RemapMap.attributes.clamp_max_RGB.images data=site.data.scene-classes.maps.RemapMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.RemapMap.attributes.clamp_max_RGB.links heading=4-%}
    </p>
    <h3>clamp_min_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">the minimum value output by this map when 'clamp' is enabled</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.RemapMap.attributes.clamp_min_RGB.images data=site.data.scene-classes.maps.RemapMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.RemapMap.attributes.clamp_min_RGB.links heading=4-%}
    </p>
    <h3>input_max_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the input value that will be remapped to the 'output max' value</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.RemapMap.attributes.input_max_RGB.images data=site.data.scene-classes.maps.RemapMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.RemapMap.attributes.input_max_RGB.links heading=4-%}
    </p>
    <h3>input_min_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">the input value that will be remapped to the 'output min' value</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.RemapMap.attributes.input_min_RGB.images data=site.data.scene-classes.maps.RemapMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.RemapMap.attributes.input_min_RGB.links heading=4-%}
    </p>
    <h3>midpoint_bias_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0.5, 0.5, 0.5 ]
      <p class="scene-class-comments">biases the in-between values toward 'output min' or 'output max'. Default = 0.5</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.RemapMap.attributes.midpoint_bias_RGB.images data=site.data.scene-classes.maps.RemapMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.RemapMap.attributes.midpoint_bias_RGB.links heading=4-%}
    </p>
    <h3>output_max_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the value that 'input max' is remapped to</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.RemapMap.attributes.output_max_RGB.images data=site.data.scene-classes.maps.RemapMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.RemapMap.attributes.output_max_RGB.links heading=4-%}
    </p>
    <h3>output_min_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">the value that 'input min' is remapped to</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.RemapMap.attributes.output_min_RGB.images data=site.data.scene-classes.maps.RemapMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.RemapMap.attributes.output_min_RGB.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.scene-classes.maps.RemapMap.attributes.clamp.images data=site.data.scene-classes.maps.RemapMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.RemapMap.attributes.clamp.links heading=4-%}
    </p>
    <h3>clamp_RGB</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables/disables clamping of the output values.  This useful prevent out-of-range values when expanding the input values.</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.RemapMap.attributes.clamp_RGB.images data=site.data.scene-classes.maps.RemapMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.RemapMap.attributes.clamp_RGB.links heading=4-%}
    </p>
    <h3>clamp_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">the maximum value output by this map when 'clamp' is enabled</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.RemapMap.attributes.clamp_max.images data=site.data.scene-classes.maps.RemapMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.RemapMap.attributes.clamp_max.links heading=4-%}
    </p>
    <h3>clamp_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">the minimum value output by this map when 'clamp' is enabled</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.RemapMap.attributes.clamp_min.images data=site.data.scene-classes.maps.RemapMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.RemapMap.attributes.clamp_min.links heading=4-%}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the input values to be remapped</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.RemapMap.attributes.input.images data=site.data.scene-classes.maps.RemapMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.RemapMap.attributes.input.links heading=4-%}
    </p>
    <h3>input_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">the input value that will be remapped to the 'output max' value</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.RemapMap.attributes.input_max.images data=site.data.scene-classes.maps.RemapMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.RemapMap.attributes.input_max.links heading=4-%}
    </p>
    <h3>input_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">the input value that will be remapped to the 'output min' value</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.RemapMap.attributes.input_min.images data=site.data.scene-classes.maps.RemapMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.RemapMap.attributes.input_min.links heading=4-%}
    </p>
    <h3>midpoint_bias</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">biases the in-between values toward 'output min' or 'output max'. Default = 0.5</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.RemapMap.attributes.midpoint_bias.images data=site.data.scene-classes.maps.RemapMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.RemapMap.attributes.midpoint_bias.links heading=4-%}
    </p>
    <h3>output_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">the value that 'input max' is remapped to</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.RemapMap.attributes.output_max.images data=site.data.scene-classes.maps.RemapMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.RemapMap.attributes.output_max.links heading=4-%}
    </p>
    <h3>output_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">the value that 'input min' is remapped to</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.RemapMap.attributes.output_min.images data=site.data.scene-classes.maps.RemapMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.RemapMap.attributes.output_min.links heading=4-%}
    </p>
    <h3>remap_method</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | uniform = 0 (default)
          | RGB = 1
      <p class="scene-class-comments">Choose whether you are remapping using single values (uniform) or with separate RGB channels</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.RemapMap.attributes.remap_method.images data=site.data.scene-classes.maps.RemapMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.RemapMap.attributes.remap_method.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.scene-classes.maps.RemapMap-%}