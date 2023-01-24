---
title: Gradient Map
---
# GradientMap
{%-include overview.html data=site.data.scene-classes.maps.GradientMap-%}
{%-include image-gallery.html images=site.data.scene-classes.maps.GradientMap.gallery data=site.data.scene-classes.maps.GradientMap-%}
{%-include see-also.html links=site.data.scene-classes.maps.GradientMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Additional properties attributes</summary>
  <p>
    <h3>symmetric</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Color A blends into Color B and then back into Color A from the start to the end point</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.GradientMap.attributes.symmetric.images data=site.data.scene-classes.maps.GradientMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.GradientMap.attributes.symmetric.links heading=4-%}
    </p>
    <h3>symmetric_center</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">Shifts the center of the symmetric falloff</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.GradientMap.attributes.symmetric_center.images data=site.data.scene-classes.maps.GradientMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.GradientMap.attributes.symmetric_center.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Falloff properties attributes</summary>
  <p>
    <h3>falloff_bias</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">Compresses the blending towards the start or end color</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.GradientMap.attributes.falloff_bias.images data=site.data.scene-classes.maps.GradientMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.GradientMap.attributes.falloff_bias.links heading=4-%}
    </p>
    <h3>falloff_end</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Shifts where the falloff ends</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.GradientMap.attributes.falloff_end.images data=site.data.scene-classes.maps.GradientMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.GradientMap.attributes.falloff_end.links heading=4-%}
    </p>
    <h3>falloff_end_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Adjust the intensity of the end color</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.GradientMap.attributes.falloff_end_intensity.images data=site.data.scene-classes.maps.GradientMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.GradientMap.attributes.falloff_end_intensity.links heading=4-%}
    </p>
    <h3>falloff_exponent</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">Adjusts rate of blending</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.GradientMap.attributes.falloff_exponent.images data=site.data.scene-classes.maps.GradientMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.GradientMap.attributes.falloff_exponent.links heading=4-%}
    </p>
    <h3>falloff_start</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Shifts where the falloff starts</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.GradientMap.attributes.falloff_start.images data=site.data.scene-classes.maps.GradientMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.GradientMap.attributes.falloff_start.links heading=4-%}
    </p>
    <h3>falloff_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | none = 0
          | natural = 1 (default)
          | linear = 2
          | squared = 3
          | gaussian = 4
          | ease out = 5
      <p class="scene-class-comments">Falloff blend mode</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.GradientMap.attributes.falloff_type.images data=site.data.scene-classes.maps.GradientMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.GradientMap.attributes.falloff_type.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Gradient properties attributes</summary>
  <p>
    <h3>color_A</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Start color</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.GradientMap.attributes.color_A.images data=site.data.scene-classes.maps.GradientMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.GradientMap.attributes.color_A.links heading=4-%}
    </p>
    <h3>color_B</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">End color</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.GradientMap.attributes.color_B.images data=site.data.scene-classes.maps.GradientMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.GradientMap.attributes.color_B.links heading=4-%}
    </p>
    <h3>end</h3>
    <p class="scene-class-type">
      <b>Vec3f</b>
      default: [ 0, 1, 0 ]
      <p class="scene-class-comments">End position in the chosen space</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.GradientMap.attributes.end.images data=site.data.scene-classes.maps.GradientMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.GradientMap.attributes.end.links heading=4-%}
    </p>
    <h3>object</h3>
    <p class="scene-class-type">
      <b>Geometry</b>
      default: None
      <p class="scene-class-comments">Use the provided object's transformation space (only used if object space is also specified)</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.GradientMap.attributes.object.images data=site.data.scene-classes.maps.GradientMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.GradientMap.attributes.object.links heading=4-%}
    </p>
    <h3>space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | render = 0 (default)
          | camera = 1
          | world = 2
          | screen = 3
          | object = 4
          | reference = 5
          | texture = 6
      <p class="scene-class-comments">The transformation space in which to perform the blending</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.GradientMap.attributes.space.images data=site.data.scene-classes.maps.GradientMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.GradientMap.attributes.space.links heading=4-%}
    </p>
    <h3>start</h3>
    <p class="scene-class-type">
      <b>Vec3f</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Start position in the chosen space</p>
      {%-include image-gallery.html images=site.data.scene-classes.maps.GradientMap.attributes.start.images data=site.data.scene-classes.maps.GradientMap-%}
      {%-include see-also.html links=site.data.scene-classes.maps.GradientMap.attributes.start.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.scene-classes.maps.GradientMap-%}