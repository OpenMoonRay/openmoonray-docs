---
title: BarnDoorLightFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# BarnDoorLightFilter
{%-include overview.html data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.gallery data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Properties attributes</summary>
  <p>
    <h3>color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Color within the Barn Door lit region. For each color channel, 0=full shadow, 1=no shadow</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.color.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.color.links heading=4-%}
    </p>
    <h3>density</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">fades the filter effect. 0=no effect (like having no filter), 1=full effect</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.density.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.density.links heading=4-%}
    </p>
    <h3>edge</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">size of transition zone from the rounded box to the outside, as a proportion of width (or height, whichever is smaller)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.edge.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.edge.links heading=4-%}
    </p>
    <h3>edge_scale_bottom</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">scale factor for bottom edge</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.edge_scale_bottom.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.edge_scale_bottom.links heading=4-%}
    </p>
    <h3>edge_scale_left</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">scale factor for left edge</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.edge_scale_left.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.edge_scale_left.links heading=4-%}
    </p>
    <h3>edge_scale_right</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">scale factor for right edge</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.edge_scale_right.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.edge_scale_right.links heading=4-%}
    </p>
    <h3>edge_scale_top</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">scale factor for top edge</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.edge_scale_top.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.edge_scale_top.links heading=4-%}
    </p>
    <h3>invert</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">swap application of filter from inside the Barn Door to outside</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.invert.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.invert.links heading=4-%}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = name (default)<br>
          &nbsp;&nbsp;1 = name<br>
      <p class="scene-class-comments">analytical mode allows light to shading points that project to the flap opening.physical mode allows light whose direction goes through the flap opening.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.mode.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.mode.links heading=4-%}
    </p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      <br>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">transform of the filter</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.node_xform.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.node_xform.links heading=4-%}
    </p>
    <h3>pre_barn_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.5
      <p class="scene-class-comments">distance from the BarnDoorLightFilter that the pre_barn_mode control takes effect</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.pre_barn_distance.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.pre_barn_distance.links heading=4-%}
    </p>
    <h3>pre_barn_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = name<br>
          &nbsp;&nbsp;1 = name<br>
          &nbsp;&nbsp;2 = name (default)<br>
      <p class="scene-class-comments">force region before the pre_barn_distance to be fully filtered (black), not filtered at all (white), or treated the same as elsewhere (default)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.pre_barn_mode.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.pre_barn_mode.links heading=4-%}
    </p>
    <h3>projector_focal_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 30.0
      <p class="scene-class-comments">distance of the flap opening from the projector origin. Ignored for orthographic projection</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.projector_focal_distance.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.projector_focal_distance.links heading=4-%}
    </p>
    <h3>projector_height</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">height of the frustum at distance 1.0</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.projector_height.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.projector_height.links heading=4-%}
    </p>
    <h3>projector_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = name (default)<br>
          &nbsp;&nbsp;1 = name<br>
      <p class="scene-class-comments">projection type used to map points to the flap opening. perspective has a focal point, while orthographic does not.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.projector_type.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.projector_type.links heading=4-%}
    </p>
    <h3>projector_width</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">width of the frustum at distance 1.0</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.projector_width.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.projector_width.links heading=4-%}
    </p>
    <h3>radius</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">radius by which to convert the base box shape into a rounded box, as a proportion of half the width (or height, whichever is smaller)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.radius.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.radius.links heading=4-%}
    </p>
    <h3>rotation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">angle to rotate the Barn Door counter-clockwise as seen from the light, in degrees</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.rotation.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.rotation.links heading=4-%}
    </p>
    <h3>size_bottom</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">additional size on bottom edge</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.size_bottom.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.size_bottom.links heading=4-%}
    </p>
    <h3>size_left</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">additional size on left edge</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.size_left.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.size_left.links heading=4-%}
    </p>
    <h3>size_right</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">additional size on right edge</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.size_right.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.size_right.links heading=4-%}
    </p>
    <h3>size_top</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">additional size on top edge</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.size_top.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.size_top.links heading=4-%}
    </p>
    <h3>use_light_xform</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">attach to the light (in the -Z direction) and ignore node_xform</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.use_light_xform.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.use_light_xform.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Turns the light filter on/off</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.on.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.on.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}