---
title: ColorRampLightFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ColorRampLightFilter
{%-include overview.html data=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter.gallery data=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Properties attributes</summary>
  <p>
    <h3>begin_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br/>
      default: 0.0
      <p class="scene-class-comments">Where the ramp starts relative to the light or the ramp's independent transform</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter.attributes.begin_distance.images data=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter.attributes.begin_distance.links heading=4-%}
    </p>
    <h3>colors</h3>
    <p class="scene-class-type">
      <b>RgbVector</b>
      <br/>
      default: [[ 1, 1, 1 ], [ 0, 0, 0 ]]
      <p class="scene-class-comments">Vector of colors specified at different distances</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter.attributes.colors.images data=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter.attributes.colors.links heading=4-%}
    </p>
    <h3>density</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br/>
      default: 1.0
      <p class="scene-class-comments">The density of the filter</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter.attributes.density.images data=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter.attributes.density.links heading=4-%}
    </p>
    <h3>distances</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      <br/>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">Distances between which colors are interpolated</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter.attributes.distances.images data=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter.attributes.distances.links heading=4-%}
    </p>
    <h3>end_distance</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br/>
      default: 1.0
      <p class="scene-class-comments">Where the ramp ends relative to the light or the ramp's independent transform</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter.attributes.end_distance.images data=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter.attributes.end_distance.links heading=4-%}
    </p>
    <h3>intensity</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br/>
      default: 1.0
      <p class="scene-class-comments">The intensity of the filter</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter.attributes.intensity.images data=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter.attributes.intensity.links heading=4-%}
    </p>
    <h3>interpolation_types</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br/>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-comments">Interpolation types between the specified distances.  0: None 1: linear 2: exponential_up 3: exponential_down 4: smooth 5: catmull_rom</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter.attributes.interpolation_types.images data=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter.attributes.interpolation_types.links heading=4-%}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br/>
          </t>0 = radial(default)<br/>
          </t>1 = directional<br/>
      <p class="scene-class-comments">Ramp: Radiates out from the center of the light or ramp location.  Directional: Linear starting at the location of the light or ramp location along negative z</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter.attributes.mode.images data=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter.attributes.mode.links heading=4-%}
    </p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      <br/>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">Orientation of the light filter</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter.attributes.node_xform.images data=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter.attributes.node_xform.links heading=4-%}
    </p>
    <h3>wrap_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br/>
          </t>0 = extend(default)<br/>
          </t>1 = mirror<br/>
      <p class="scene-class-comments">For directional filter mode where filter uses distance along -Z axis.  Extend: f(z) = f(0) for z &gt; 0.  Mirror: f(z) = f(-z).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter.attributes.wrap_mode.images data=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter.attributes.wrap_mode.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br/>
      default: True
      <p class="scene-class-comments">Turns the light filter on/off</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter.attributes.on.images data=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter.attributes.on.links heading=4-%}
    </p>
    <h3>use_xform</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br/>
      default: False
      <p class="scene-class-comments">The filter can be bound to a light or lights position or when this toggle is set, can have its own transform</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter.attributes.use_xform.images data=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter.attributes.use_xform.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.light-filters.ColorRampLightFilter-%}