---
title: ToonMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ToonMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.ToonMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ToonMap.gallery data=site.data.user-reference.scene-objects.maps.ToonMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.ToonMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>crease_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 0, 0 ]
      <p class="scene-class-comments">Creases are sharp edges like corners in the geometry.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ToonMap.attributes.crease_color.images data=site.data.user-reference.scene-objects.maps.ToonMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ToonMap.attributes.crease_color.links heading=4-%}
    </p>
    <h3>crease_scale</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">This attribute controls the thickness of creases.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ToonMap.attributes.crease_scale.images data=site.data.user-reference.scene-objects.maps.ToonMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ToonMap.attributes.crease_scale.links heading=4-%}
    </p>
    <h3>crease_threshold</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 45.0
      <p class="scene-class-comments">This attribute sets the threshold angle (in degree units) to draw creases. The more the threshold angle is, the less the creases are traced.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ToonMap.attributes.crease_threshold.images data=site.data.user-reference.scene-objects.maps.ToonMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ToonMap.attributes.crease_threshold.links heading=4-%}
    </p>
    <h3>fill_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Default color, within the outlines and creases</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ToonMap.attributes.fill_color.images data=site.data.user-reference.scene-objects.maps.ToonMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ToonMap.attributes.fill_color.links heading=4-%}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;outline&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;crease&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;both&rdquo; (default)<br>
      <p class="scene-class-comments">Pick which features are displayed</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ToonMap.attributes.mode.images data=site.data.user-reference.scene-objects.maps.ToonMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ToonMap.attributes.mode.links heading=4-%}
    </p>
    <h3>outline_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Outlines are silhouettes of the geometry</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ToonMap.attributes.outline_color.images data=site.data.user-reference.scene-objects.maps.ToonMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ToonMap.attributes.outline_color.links heading=4-%}
    </p>
    <h3>outline_scale</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">This attribute controls the thickness of outlines.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ToonMap.attributes.outline_scale.images data=site.data.user-reference.scene-objects.maps.ToonMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ToonMap.attributes.outline_scale.links heading=4-%}
    </p>
    <h3>outline_threshold</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">In most cases, the shader would trace an outline of a model well when this threshold is zero.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ToonMap.attributes.outline_threshold.images data=site.data.user-reference.scene-objects.maps.ToonMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ToonMap.attributes.outline_threshold.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.ToonMap-%}