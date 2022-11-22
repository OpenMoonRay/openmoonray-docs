---
title: CookieLightFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# CookieLightFilter
{%-include overview.html data=site.data.scene-classes.light-filters.CookieLightFilter-%}
{%-include image-gallery.html images=site.data.scene-classes.light-filters.CookieLightFilter.gallery data=site.data.scene-classes.light-filters.CookieLightFilter-%}
{%-include see-also.html links=site.data.scene-classes.light-filters.CookieLightFilter.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Properties attributes</summary>
  <p>
    <h3>blur_far_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.CookieLightFilter.attributes.blur_far_distance.images data=site.data.scene-classes.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.CookieLightFilter.attributes.blur_far_distance.links heading=4-%}
    </p>
    <h3>blur_far_value</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.CookieLightFilter.attributes.blur_far_value.images data=site.data.scene-classes.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.CookieLightFilter.attributes.blur_far_value.links heading=4-%}
    </p>
    <h3>blur_mid_value</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.CookieLightFilter.attributes.blur_mid_value.images data=site.data.scene-classes.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.CookieLightFilter.attributes.blur_mid_value.links heading=4-%}
    </p>
    <h3>blur_midpoint</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.CookieLightFilter.attributes.blur_midpoint.images data=site.data.scene-classes.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.CookieLightFilter.attributes.blur_midpoint.links heading=4-%}
    </p>
    <h3>blur_near_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.CookieLightFilter.attributes.blur_near_distance.images data=site.data.scene-classes.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.CookieLightFilter.attributes.blur_near_distance.links heading=4-%}
    </p>
    <h3>blur_near_value</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.CookieLightFilter.attributes.blur_near_value.images data=site.data.scene-classes.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.CookieLightFilter.attributes.blur_near_value.links heading=4-%}
    </p>
    <h3>blur_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | gaussian = 0 (default)
          | circular = 1
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.CookieLightFilter.attributes.blur_type.images data=site.data.scene-classes.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.CookieLightFilter.attributes.blur_type.links heading=4-%}
    </p>
    <h3>density</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.CookieLightFilter.attributes.density.images data=site.data.scene-classes.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.CookieLightFilter.attributes.density.links heading=4-%}
    </p>
    <h3>invert</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.CookieLightFilter.attributes.invert.images data=site.data.scene-classes.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.CookieLightFilter.attributes.invert.links heading=4-%}
    </p>
    <h3>outside_projection</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | black = 0 (default)
          | white = 1
          | default = 2
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.CookieLightFilter.attributes.outside_projection.images data=site.data.scene-classes.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.CookieLightFilter.attributes.outside_projection.links heading=4-%}
    </p>
    <h3>projector</h3>
    <p class="scene-class-type">
      <b>Camera</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.CookieLightFilter.attributes.projector.images data=site.data.scene-classes.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.CookieLightFilter.attributes.projector.links heading=4-%}
    </p>
    <h3>texture_map</h3>
    <p class="scene-class-type">
      <b>Map</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.CookieLightFilter.attributes.texture_map.images data=site.data.scene-classes.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.CookieLightFilter.attributes.texture_map.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.CookieLightFilter.attributes.node_xform.images data=site.data.scene-classes.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.CookieLightFilter.attributes.node_xform.links heading=4-%}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.CookieLightFilter.attributes.on.images data=site.data.scene-classes.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.CookieLightFilter.attributes.on.links heading=4-%}
    </p>
    <h3>projector_film_width_aperture</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 24.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.CookieLightFilter.attributes.projector_film_width_aperture.images data=site.data.scene-classes.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.CookieLightFilter.attributes.projector_film_width_aperture.links heading=4-%}
    </p>
    <h3>projector_focal</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 30.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.CookieLightFilter.attributes.projector_focal.images data=site.data.scene-classes.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.CookieLightFilter.attributes.projector_focal.links heading=4-%}
    </p>
    <h3>projector_pixel_aspect_ratio</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.CookieLightFilter.attributes.projector_pixel_aspect_ratio.images data=site.data.scene-classes.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.CookieLightFilter.attributes.projector_pixel_aspect_ratio.links heading=4-%}
    </p>
    <h3>projector_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | perspective = 0 (default)
          | orthographic = 1
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.CookieLightFilter.attributes.projector_type.images data=site.data.scene-classes.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.CookieLightFilter.attributes.projector_type.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.scene-classes.light-filters.CookieLightFilter-%}