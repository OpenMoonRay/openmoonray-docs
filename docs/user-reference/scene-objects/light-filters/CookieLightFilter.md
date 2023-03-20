---
title: CookieLightFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# CookieLightFilter
{%-include overview.html data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.gallery data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Properties attributes</summary>
  <p>
    <h3>blur_far_distance</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: 1.0
      <p class="scene-class-comments">Distance from cookie filter</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.blur_far_distance.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.blur_far_distance.links heading=4-%}
    </p>
    <h3>blur_far_value</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: 0.0
      <p class="scene-class-comments">Blur filter radius (in texture UV space) at the far distance</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.blur_far_value.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.blur_far_value.links heading=4-%}
    </p>
    <h3>blur_mid_value</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: 0.0
      <p class="scene-class-comments">Blur filter radius (in texture UV space) at the mid distance</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.blur_mid_value.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.blur_mid_value.links heading=4-%}
    </p>
    <h3>blur_midpoint</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: 0.5
      <p class="scene-class-comments">Distance from cookie filter</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.blur_midpoint.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.blur_midpoint.links heading=4-%}
    </p>
    <h3>blur_near_distance</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: 0.0
      <p class="scene-class-comments">Distance from cookie filter</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.blur_near_distance.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.blur_near_distance.links heading=4-%}
    </p>
    <h3>blur_near_value</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: 0.0
      <p class="scene-class-comments">Blur filter radius (in texture UV space) at the near distance</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.blur_near_value.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.blur_near_value.links heading=4-%}
    </p>
    <h3>blur_type</h3>
    <p class="scene-class-type">
      <b>Int</b><br/> <i>enum</i><br/>
          0=gaussian(default)<br/>
          1=circular<br/>
      <p class="scene-class-comments">Gaussian or circular blur</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.blur_type.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.blur_type.links heading=4-%}
    </p>
    <h3>density</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: 1.0
      <p class="scene-class-comments">Controls how much of the cookie is added to the light</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.density.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.density.links heading=4-%}
    </p>
    <h3>invert</h3>
    <p class="scene-class-type">
      <b>Bool</b><br/>
      default: False
      <p class="scene-class-comments">Inverts the map</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.invert.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.invert.links heading=4-%}
    </p>
    <h3>outside_projection</h3>
    <p class="scene-class-type">
      <b>Int</b><br/> <i>enum</i><br/>
          0=black(default)<br/>
          1=white<br/>
          2=default<br/>
      <p class="scene-class-comments">What happens outside the frustum of the projection camera.  Black (default), White, or Default (This uses the mode set on the Moonray map shader)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.outside_projection.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.outside_projection.links heading=4-%}
    </p>
    <h3>projector</h3>
    <p class="scene-class-type">
      <b>Camera</b><br/>
      default: None
      <p class="scene-class-comments">If a projector is specified, it overrides the node_xform and projector_* attributes</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.projector.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.projector.links heading=4-%}
    </p>
    <h3>texture_map</h3>
    <p class="scene-class-type">
      <b>Map</b><br/>
      default: None
      <p class="scene-class-comments">Moonray map. Any Moonray map generator, checkerboard, noise, image map.  You may also add any of the map modifiers, color correct for example.  The default is an image map.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.texture_map.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.texture_map.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b><br/> <i>blurrable</i><br/>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">Filter orientation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.node_xform.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.node_xform.links heading=4-%}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b><br/>
      default: True
      <p class="scene-class-comments">Turns the light filter on/off</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.on.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.on.links heading=4-%}
    </p>
    <h3>projector_film_width_aperture</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: 24.0
      <p class="scene-class-comments">Size of the camera image plane</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.projector_film_width_aperture.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.projector_film_width_aperture.links heading=4-%}
    </p>
    <h3>projector_focal</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: 30.0
      <p class="scene-class-comments">Focal length of the lens when using perspective projection</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.projector_focal.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.projector_focal.links heading=4-%}
    </p>
    <h3>projector_pixel_aspect_ratio</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: 1.0
      <p class="scene-class-comments">Aspect ratio of the projection</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.projector_pixel_aspect_ratio.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.projector_pixel_aspect_ratio.links heading=4-%}
    </p>
    <h3>projector_type</h3>
    <p class="scene-class-type">
      <b>Int</b><br/> <i>enum</i><br/>
          0=perspective(default)<br/>
          1=orthographic<br/>
      <p class="scene-class-comments">Perspective or orthographic projection</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.projector_type.images data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.CookieLightFilter.attributes.projector_type.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.light-filters.CookieLightFilter-%}