---
title: CookieLightFilter_v2

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# CookieLightFilter_v2
{%-include overview.html data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.gallery data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.links-%}
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
      <p class="scene-class-comments">Distance from cookie filter</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.blur_far_distance.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.blur_far_distance.links heading=4-%}
    </p>
    <h3>blur_far_value</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Blur filter radius (in texture UV space) at the far distance</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.blur_far_value.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.blur_far_value.links heading=4-%}
    </p>
    <h3>blur_mid_value</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Blur filter radius (in texture UV space) at the mid distance</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.blur_mid_value.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.blur_mid_value.links heading=4-%}
    </p>
    <h3>blur_midpoint</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">Distance from cookie filter</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.blur_midpoint.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.blur_midpoint.links heading=4-%}
    </p>
    <h3>blur_near_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Distance from cookie filter</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.blur_near_distance.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.blur_near_distance.links heading=4-%}
    </p>
    <h3>blur_near_value</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Blur filter radius (in texture UV space) at the near distance</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.blur_near_value.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.blur_near_value.links heading=4-%}
    </p>
    <h3>blur_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | gaussian = 0 (default)
          | circular = 1
      <p class="scene-class-comments">Gaussian or circular blur</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.blur_type.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.blur_type.links heading=4-%}
    </p>
    <h3>density</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Controls how much of the cookie is added to the light</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.density.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.density.links heading=4-%}
    </p>
    <h3>gamma</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Per-channel gamma used in color-correcting the light filter's texture, if one is present. This is achieved by applying the following formula for each channel:<br>  For input &gt;  0, output = pow(input, gamma)<br>  For input &lt;= 0, output = input</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.gamma.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.gamma.links heading=4-%}
    </p>
    <h3>invert</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Inverts the map</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.invert.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.invert.links heading=4-%}
    </p>
    <h3>outside_projection</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | black = 0 (default)
          | white = 1
          | default = 2
      <p class="scene-class-comments">What happens outside the frustum of the projection camera.  Black (default), White, or Default (This uses the mode set on the Moonray map shader)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.outside_projection.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.outside_projection.links heading=4-%}
    </p>
    <h3>projector</h3>
    <p class="scene-class-type">
      <b>Camera</b>
      default: None
      <p class="scene-class-comments">If a projector is specified, it overrides the node_xform and projector_* attributes</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.projector.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.projector.links heading=4-%}
    </p>
    <h3>texture</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">File name of the texture applied to the light filter.  Any file format supported by OpenImageIO can be used.  </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.texture.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.texture.links heading=4-%}
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
      <p class="scene-class-comments">Filter orientation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.node_xform.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.node_xform.links heading=4-%}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Turns the light filter on/off</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.on.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.on.links heading=4-%}
    </p>
    <h3>projector_film_width_aperture</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 24.0
      <p class="scene-class-comments">Size of the camera image plane</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.projector_film_width_aperture.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.projector_film_width_aperture.links heading=4-%}
    </p>
    <h3>projector_focal</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 30.0
      <p class="scene-class-comments">Focal length of the lens when using perspective projection</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.projector_focal.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.projector_focal.links heading=4-%}
    </p>
    <h3>projector_pixel_aspect_ratio</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Aspect ratio of the projection</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.projector_pixel_aspect_ratio.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.projector_pixel_aspect_ratio.links heading=4-%}
    </p>
    <h3>projector_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | perspective = 0 (default)
          | orthographic = 1
      <p class="scene-class-comments">Perspective or orthographic projection</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.projector_type.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2.attributes.projector_type.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter_v2-%}