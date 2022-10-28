---
title: ToonMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ToonMap
{%include image-gallery.html images=site.data.scene-classes.maps.ToonMap.gallery data=site.data.scene-classes.maps.ToonMap-%}
{%include see-also.html links=site.data.scene-classes.maps.ToonMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>crease_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 0, 0 ]
      <p class="scene-class-comments">Creases are sharp edges like corners in the geometry.</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ToonMap.attributes.crease_color.images data=site.data.scene-classes.maps.ToonMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ToonMap.attributes.crease_color.links heading=4-%}
    </p>
    <h3>crease_scale</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">This attribute controls the thickness of creases.</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ToonMap.attributes.crease_scale.images data=site.data.scene-classes.maps.ToonMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ToonMap.attributes.crease_scale.links heading=4-%}
    </p>
    <h3>crease_threshold</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 45.0
      <p class="scene-class-comments">This attribute sets the threshold angle (in degree units) to draw creases. The more the threshold angle is, the less the creases are traced.</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ToonMap.attributes.crease_threshold.images data=site.data.scene-classes.maps.ToonMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ToonMap.attributes.crease_threshold.links heading=4-%}
    </p>
    <h3>fill_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ToonMap.attributes.fill_color.images data=site.data.scene-classes.maps.ToonMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ToonMap.attributes.fill_color.links heading=4-%}
    </p>
    <h3>mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | outline = 0
          | crease = 1
          | both = 2 (default)
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ToonMap.attributes.mode.images data=site.data.scene-classes.maps.ToonMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ToonMap.attributes.mode.links heading=4-%}
    </p>
    <h3>outline_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Outlines are silhouettes of the geometry</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ToonMap.attributes.outline_color.images data=site.data.scene-classes.maps.ToonMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ToonMap.attributes.outline_color.links heading=4-%}
    </p>
    <h3>outline_scale</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">This attribute controls the thickness of outlines.</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ToonMap.attributes.outline_scale.images data=site.data.scene-classes.maps.ToonMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ToonMap.attributes.outline_scale.links heading=4-%}
    </p>
    <h3>outline_threshold</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">In most cases, the shader would trace an outline of a model well when this threshold is zero.</p>
      {%include image-gallery.html images=site.data.scene-classes.maps.ToonMap.attributes.outline_threshold.images data=site.data.scene-classes.maps.ToonMap-%}
      {%include see-also.html links=site.data.scene-classes.maps.ToonMap.attributes.outline_threshold.links heading=4-%}
    </p>
  </p>
</details>
</div>