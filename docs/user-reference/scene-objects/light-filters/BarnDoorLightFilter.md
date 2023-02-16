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
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Color within the Barn Door lit region. For each color channel 0 is full shadow and 1 is no shadow.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.color.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.color.links heading=4-%}
    </p>
    <h3>density</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Fades the filter effect. 0 means no effect (like having no filter), and 1 means full effect.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.density.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.density.links heading=4-%}
    </p>
    <h3>edge</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">The size of the transition zone from the rounded box to the outside, as a proportion of width (or height, whichever is smaller).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.edge.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.edge.links heading=4-%}
    </p>
    <h3>edge_scale_bottom</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">The scale factor for the bottom edge.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.edge_scale_bottom.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.edge_scale_bottom.links heading=4-%}
    </p>
    <h3>edge_scale_left</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">The scale factor for the left edge.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.edge_scale_left.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.edge_scale_left.links heading=4-%}
    </p>
    <h3>edge_scale_right</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">The scale factor for the right edge.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.edge_scale_right.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.edge_scale_right.links heading=4-%}
    </p>
    <h3>edge_scale_top</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">The scale factor for the top edge.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.edge_scale_top.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.edge_scale_top.links heading=4-%}
    </p>
    <h3>invert</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Swap application of the filter from inside the Barn Door to outside.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.invert.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.invert.links heading=4-%}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | analytical = 0 (default)
          | physical = 1
      <p class="scene-class-comments">Analytical mode allows light to shading points that project to the flap opening.Physical mode allows light whose direction goes through the flap opening.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.mode.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.mode.links heading=4-%}
    </p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">The transform of the filter.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.node_xform.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.node_xform.links heading=4-%}
    </p>
    <h3>pre_barn_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">The distance from the BarnDoorLightFilter that the pre_barn_mode control takes effect.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.pre_barn_distance.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.pre_barn_distance.links heading=4-%}
    </p>
    <h3>pre_barn_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | black = 0
          | white = 1
          | default = 2 (default)
      <p class="scene-class-comments">Force the region before the pre_barn_distance to be fully filtered (black), not filtered at all (white), or treated the same as elsewhere (default).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.pre_barn_mode.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.pre_barn_mode.links heading=4-%}
    </p>
    <h3>projector_focal_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 30.0
      <p class="scene-class-comments">The distance of the flap opening from the projector origin. Ignored for orthographic projection.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.projector_focal_distance.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.projector_focal_distance.links heading=4-%}
    </p>
    <h3>projector_height</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">The height of the frustum at distance 1.0.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.projector_height.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.projector_height.links heading=4-%}
    </p>
    <h3>projector_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | perspective = 0 (default)
          | orthographic = 1
      <p class="scene-class-comments">The projection type used to map points to the flap opening. perspective has a focal point, while orthographic does not.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.projector_type.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.projector_type.links heading=4-%}
    </p>
    <h3>projector_width</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">The width of the frustum at distance 1.0.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.projector_width.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.projector_width.links heading=4-%}
    </p>
    <h3>radius</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">The radius by which to convert the base box shape into a rounded box, as a proportion of half the width (or height, whichever is smaller).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.radius.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.radius.links heading=4-%}
    </p>
    <h3>rotation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">The angle to rotate the Barn Door counter-clockwise as seen from the light, in degrees.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.rotation.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.rotation.links heading=4-%}
    </p>
    <h3>size_bottom</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Additional size on the bottom edge.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.size_bottom.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.size_bottom.links heading=4-%}
    </p>
    <h3>size_left</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Additional size on the left edge.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.size_left.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.size_left.links heading=4-%}
    </p>
    <h3>size_right</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Additional size on the right edge.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.size_right.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.size_right.links heading=4-%}
    </p>
    <h3>size_top</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Additional size on the top edge.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.size_top.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.size_top.links heading=4-%}
    </p>
    <h3>use_light_xform</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Attach the filter to the light (in the -Z direction) and ignore node_xform.</p>
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
      default: True
      <p class="scene-class-comments">Turns the light filter on/off.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.on.images data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter.attributes.on.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.light-filters.BarnDoorLightFilter-%}
