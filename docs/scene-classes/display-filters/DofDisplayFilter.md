---
title: DofDisplayFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DofDisplayFilter
{%-include overview.html data=site.data.scene-classes.display-filters.DofDisplayFilter-%}
{%-include image-gallery.html images=site.data.scene-classes.display-filters.DofDisplayFilter.gallery data=site.data.scene-classes.display-filters.DofDisplayFilter-%}
{%-include see-also.html links=site.data.scene-classes.display-filters.DofDisplayFilter.links-%}
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
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.invert_mask.images data=site.data.scene-classes.display-filters.DofDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.invert_mask.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">blend between output and input</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.mix.images data=site.data.scene-classes.display-filters.DofDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.mix.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.aperture.images data=site.data.scene-classes.display-filters.DofDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.aperture.links heading=4-%}
    </p>
    <h3>depth</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">the 'depth' result RenderOutput to sample z depth values from</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.depth.images data=site.data.scene-classes.display-filters.DofDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.depth.links heading=4-%}
    </p>
    <h3>focal_length</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 30.0
      <p class="scene-class-comments">focal length in millimeters</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.focal_length.images data=site.data.scene-classes.display-filters.DofDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.focal_length.links heading=4-%}
    </p>
    <h3>focus_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.focus_distance.images data=site.data.scene-classes.display-filters.DofDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.focus_distance.links heading=4-%}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-comments">RenderOutput to apply depth of field</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.input.images data=site.data.scene-classes.display-filters.DofDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.input.links heading=4-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>67141632</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.mask.images data=site.data.scene-classes.display-filters.DofDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.mask.links heading=4-%}
    </p>
    <h3>use_camera_attributes</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">read dof attributes from active scene camera</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.use_camera_attributes.images data=site.data.scene-classes.display-filters.DofDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.use_camera_attributes.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.scene-classes.display-filters.DofDisplayFilter-%}