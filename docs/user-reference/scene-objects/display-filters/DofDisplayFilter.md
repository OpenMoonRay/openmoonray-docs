---
title: Depth of Field Display Filter
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
      <p class="scene-class-comments">Invert the value of the mask</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.invert_mask.images data=site.data.scene-classes.display-filters.DofDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.invert_mask.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Blend [0,1] between input and output</p>
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
      <p class="scene-class-comments">Aperture in millimeters</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.aperture.images data=site.data.scene-classes.display-filters.DofDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.aperture.links heading=4-%}
    </p>
    <h3>depth</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      default: None
      <p class="scene-class-comments">The 'depth' RenderOutput to sample z-depth values from</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.depth.images data=site.data.scene-classes.display-filters.DofDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.depth.links heading=4-%}
    </p>
    <h3>focal_length</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 30.0
      <p class="scene-class-comments">Focal length in millimeters</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.focal_length.images data=site.data.scene-classes.display-filters.DofDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.focal_length.links heading=4-%}
    </p>
    <h3>focus_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Focus distance</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.focus_distance.images data=site.data.scene-classes.display-filters.DofDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.focus_distance.links heading=4-%}
    </p>
    <h3>input</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      default: None
      <p class="scene-class-comments">RenderOutput to which to apply depth of field</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.input.images data=site.data.scene-classes.display-filters.DofDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.input.links heading=4-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>RenderOutput</b>
      default: None
      <p class="scene-class-comments">RenderOutput used to mask the output, revealing input1</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.mask.images data=site.data.scene-classes.display-filters.DofDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.mask.links heading=4-%}
    </p>
    <h3>use_camera_attributes</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Read dof attributes from the active scene camera</p>
      {%-include image-gallery.html images=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.use_camera_attributes.images data=site.data.scene-classes.display-filters.DofDisplayFilter-%}
      {%-include see-also.html links=site.data.scene-classes.display-filters.DofDisplayFilter.attributes.use_camera_attributes.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.scene-classes.display-filters.DofDisplayFilter-%}