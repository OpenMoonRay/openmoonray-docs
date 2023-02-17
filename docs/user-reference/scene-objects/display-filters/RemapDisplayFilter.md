---
title: RemapDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RemapDisplayFilter
{%-include overview.html data=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.gallery data=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.links-%}
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
      <p class="scene-class-comments">Invert the value of the mask</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.invert_mask.images data=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.invert_mask.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Blend [0,1] between input and output</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.mix.images data=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.mix.links heading=4-%}
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
      <p class="scene-class-comments">The maximum RGB value output by this map when 'clamp' is enabled</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.clamp_max_RGB.images data=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.clamp_max_RGB.links heading=4-%}
    </p>
    <h3>clamp_min_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">The minimum RGB value output by this map when 'clamp' is enabled</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.clamp_min_RGB.images data=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.clamp_min_RGB.links heading=4-%}
    </p>
    <h3>input_max_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">The input RGB value that will be remapped to the 'output max RGB' value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.input_max_RGB.images data=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.input_max_RGB.links heading=4-%}
    </p>
    <h3>input_min_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">The input RGB value that will be remapped to the 'output min RGB' value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.input_min_RGB.images data=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.input_min_RGB.links heading=4-%}
    </p>
    <h3>midpoint_bias_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0.5, 0.5, 0.5 ]
      <p class="scene-class-comments">Biases the in-between values toward 'output min RGB' or 'output max RGB'. Default = 0.5</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.midpoint_bias_RGB.images data=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.midpoint_bias_RGB.links heading=4-%}
    </p>
    <h3>output_max_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">The RGB value that 'input max RGB' is remapped to</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.output_max_RGB.images data=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.output_max_RGB.links heading=4-%}
    </p>
    <h3>output_min_RGB</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">The RGB value that 'input min RGB' is remapped to</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.output_min_RGB.images data=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.output_min_RGB.links heading=4-%}
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
      <p class="scene-class-comments">Enables/disables clamping of the output values.  This is useful to prevent out-of-range values when expanding the input values.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.clamp.images data=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.clamp.links heading=4-%}
    </p>
    <h3>clamp_RGB</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Enables/disables clamping of the RGB output values.  This useful prevent out-of-range values when expanding the input values.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.clamp_RGB.images data=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.clamp_RGB.links heading=4-%}
    </p>
    <h3>clamp_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">The maximum value output by this map when 'clamp' is enabled</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.clamp_max.images data=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.clamp_max.links heading=4-%}
    </p>
    <h3>clamp_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">The minimum value output by this map when 'clamp' is enabled</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.clamp_min.images data=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.clamp_min.links heading=4-%}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      default: None
      <p class="scene-class-comments">RenderOutput to remap</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.input.images data=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.input.links heading=4-%}
    </p>
    <h3>input_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">The input float that will be remapped to the 'output max' value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.input_max.images data=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.input_max.links heading=4-%}
    </p>
    <h3>input_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">The input float that will be remapped to the 'output min' value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.input_min.images data=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.input_min.links heading=4-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      default: None
      <p class="scene-class-comments">RenderOutput used to mask the output, revealing input1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.mask.images data=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.mask.links heading=4-%}
    </p>
    <h3>midpoint_bias</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">Biases the in-between values toward 'output min' or 'output max'. Default = 0.5</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.midpoint_bias.images data=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.midpoint_bias.links heading=4-%}
    </p>
    <h3>output_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">The value that 'input max' will be remapped to</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.output_max.images data=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.output_max.links heading=4-%}
    </p>
    <h3>output_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">The float that 'input min' will be remapped to</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.output_min.images data=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.output_min.links heading=4-%}
    </p>
    <h3>remap_method</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | uniform = 0 (default)
          | RGB = 1
      <p class="scene-class-comments">Choose whether you are remapping using single values (uniform) or with separate RGB channels</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.remap_method.images data=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter.attributes.remap_method.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.display-filters.RemapDisplayFilter-%}