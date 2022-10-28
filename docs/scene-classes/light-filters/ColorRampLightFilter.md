---
title: ColorRampLightFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorRampLightFilter
{%-include image-gallery.html images=site.data.scene-classes.light-filters.ColorRampLightFilter.gallery data=site.data.scene-classes.light-filters.ColorRampLightFilter-%}
{%-include see-also.html links=site.data.scene-classes.light-filters.ColorRampLightFilter.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Properties attributes</summary>
  <p>
    <h3>begin_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.ColorRampLightFilter.attributes.begin_distance.images data=site.data.scene-classes.light-filters.ColorRampLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.ColorRampLightFilter.attributes.begin_distance.links heading=4-%}
    </p>
    <h3>colors</h3>
    <p class="scene-class-type">
      <b>RgbVector</b>
      default: [[ 1, 1, 1 ], [ 0, 0, 0 ]]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.ColorRampLightFilter.attributes.colors.images data=site.data.scene-classes.light-filters.ColorRampLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.ColorRampLightFilter.attributes.colors.links heading=4-%}
    </p>
    <h3>density</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.ColorRampLightFilter.attributes.density.images data=site.data.scene-classes.light-filters.ColorRampLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.ColorRampLightFilter.attributes.density.links heading=4-%}
    </p>
    <h3>distances</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.ColorRampLightFilter.attributes.distances.images data=site.data.scene-classes.light-filters.ColorRampLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.ColorRampLightFilter.attributes.distances.links heading=4-%}
    </p>
    <h3>end_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.ColorRampLightFilter.attributes.end_distance.images data=site.data.scene-classes.light-filters.ColorRampLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.ColorRampLightFilter.attributes.end_distance.links heading=4-%}
    </p>
    <h3>intensity</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.ColorRampLightFilter.attributes.intensity.images data=site.data.scene-classes.light-filters.ColorRampLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.ColorRampLightFilter.attributes.intensity.links heading=4-%}
    </p>
    <h3>interpolation_types</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.ColorRampLightFilter.attributes.interpolation_types.images data=site.data.scene-classes.light-filters.ColorRampLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.ColorRampLightFilter.attributes.interpolation_types.links heading=4-%}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | radial = 0 (default)
          | directional = 1
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.ColorRampLightFilter.attributes.mode.images data=site.data.scene-classes.light-filters.ColorRampLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.ColorRampLightFilter.attributes.mode.links heading=4-%}
    </p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.ColorRampLightFilter.attributes.node_xform.images data=site.data.scene-classes.light-filters.ColorRampLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.ColorRampLightFilter.attributes.node_xform.links heading=4-%}
    </p>
    <h3>wrap_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | extend = 0 (default)
          | mirror = 1
      <p class="scene-class-comments">For directional filter mode where filter uses distance along -Z axis.  Extend: f(z) = f(0) for z &gt; 0.  Mirror: f(z) = f(-z).</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.ColorRampLightFilter.attributes.wrap_mode.images data=site.data.scene-classes.light-filters.ColorRampLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.ColorRampLightFilter.attributes.wrap_mode.links heading=4-%}
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
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.ColorRampLightFilter.attributes.on.images data=site.data.scene-classes.light-filters.ColorRampLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.ColorRampLightFilter.attributes.on.links heading=4-%}
    </p>
    <h3>use_xform</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.light-filters.ColorRampLightFilter.attributes.use_xform.images data=site.data.scene-classes.light-filters.ColorRampLightFilter-%}
      {%-include see-also.html links=site.data.scene-classes.light-filters.ColorRampLightFilter.attributes.use_xform.links heading=4-%}
    </p>
  </p>
</details>
</div>