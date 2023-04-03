---
title: RampDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# RampDisplayFilter
{%-include overview.html data=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter.gallery data=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>invert_mask</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Invert the value of the mask</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter.attributes.invert_mask.images data=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter.attributes.invert_mask.videos data=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter.attributes.invert_mask.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Blend [0,1] between input and output</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter.attributes.mix.images data=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter.attributes.mix.videos data=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter.attributes.mix.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Ramp Knot attributes</summary>
  <p>
    <h3>colors</h3>
    <p class="scene-class-type">
      <b>RgbVector</b>
      <br>
      default: [[ 0, 0, 0 ], [ 0.25, 0.25, 0.25 ], [ 0.75, 0.75, 0.75 ], [ 1, 1, 1 ]]
      <p class="scene-class-comments">List of ramp colors</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter.attributes.colors.images data=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter.attributes.colors.videos data=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter.attributes.colors.links heading=4-%}
    </p>
    <h3>interpolations</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">List of ramp interpolations.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter.attributes.interpolations.images data=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter.attributes.interpolations.videos data=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter.attributes.interpolations.links heading=4-%}
    </p>
    <h3>positions</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">List of ramp positions</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter.attributes.positions.images data=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter.attributes.positions.videos data=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter.attributes.positions.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Ramp properties attributes</summary>
  <p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      <br>
      default: None
      <p class="scene-class-comments">RenderOutput fed into the ramp</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter.attributes.input.images data=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter.attributes.input.videos data=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter.attributes.input.links heading=4-%}
    </p>
    <h3>ramp_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;v_ramp&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;u_ramp&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;diagonal_ramp&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;radial_ramp&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;circular_ramp&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;box_ramp&rdquo;<br>
          &nbsp;&nbsp;6 = &ldquo;uxv_ramp&rdquo;<br>
          &nbsp;&nbsp;7 = &ldquo;four_corner_ramp&rdquo;<br>
          &nbsp;&nbsp;8 = &ldquo;input_ramp&rdquo;<br>
      <p class="scene-class-comments">Type of ramp</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter.attributes.ramp_type.images data=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter.attributes.ramp_type.videos data=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter.attributes.ramp_type.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      <br>
      default: None
      <p class="scene-class-comments">RenderOutput used to mask the output, revealing input1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter.attributes.mask.images data=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter.attributes.mask.videos data=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter.attributes.mask.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.display-filters.RampDisplayFilter-%}