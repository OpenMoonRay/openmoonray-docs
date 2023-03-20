---
title: Layer

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# Layer
{%-include overview.html data=site.data.user-reference.scene-objects.layer.Layer-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.layer.Layer.gallery data=site.data.user-reference.scene-objects.layer.Layer-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.layer.Layer.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>displacements</h3>
    <p class="scene-class-type">
      <b>Displacement Vector</b>
      <br>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.layer.Layer.attributes.displacements.images data=site.data.user-reference.scene-objects.layer.Layer-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.layer.Layer.attributes.displacements.links heading=4-%}
    </p>
    <h3>geometries</h3>
    <p class="scene-class-type">
      <b>SceneObjectIndexable</b>
      <br>
      default: None
      <p class="scene-class-comments">Geometry objects that are members of this TraceSet</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.layer.Layer.attributes.geometries.images data=site.data.user-reference.scene-objects.layer.Layer-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.layer.Layer.attributes.geometries.links heading=4-%}
    </p>
    <h3>lightfiltersets</h3>
    <p class="scene-class-type">
      <b>LightFilterSet Vector</b>
      <br>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.layer.Layer.attributes.lightfiltersets.images data=site.data.user-reference.scene-objects.layer.Layer-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.layer.Layer.attributes.lightfiltersets.links heading=4-%}
    </p>
    <h3>lightsets</h3>
    <p class="scene-class-type">
      <b>LightSet Vector</b>
      <br>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.layer.Layer.attributes.lightsets.images data=site.data.user-reference.scene-objects.layer.Layer-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.layer.Layer.attributes.lightsets.links heading=4-%}
    </p>
    <h3>parts</h3>
    <p class="scene-class-type">
      <b>StringVector</b>
      <br>
      default: []
      <p class="scene-class-comments">Part names (one for each geometry object)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.layer.Layer.attributes.parts.images data=site.data.user-reference.scene-objects.layer.Layer-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.layer.Layer.attributes.parts.links heading=4-%}
    </p>
    <h3>shadowreceiversets</h3>
    <p class="scene-class-type">
      <b>ShadowReceiverSet Vector</b>
      <br>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.layer.Layer.attributes.shadowreceiversets.images data=site.data.user-reference.scene-objects.layer.Layer-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.layer.Layer.attributes.shadowreceiversets.links heading=4-%}
    </p>
    <h3>shadowsets</h3>
    <p class="scene-class-type">
      <b>ShadowSet Vector</b>
      <br>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.layer.Layer.attributes.shadowsets.images data=site.data.user-reference.scene-objects.layer.Layer-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.layer.Layer.attributes.shadowsets.links heading=4-%}
    </p>
    <h3>surface_shaders</h3>
    <p class="scene-class-type">
      <b>Material Vector</b>
      <br>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.layer.Layer.attributes.surface_shaders.images data=site.data.user-reference.scene-objects.layer.Layer-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.layer.Layer.attributes.surface_shaders.links heading=4-%}
    </p>
    <h3>volume_shaders</h3>
    <p class="scene-class-type">
      <b>Volume Vector</b>
      <br>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.layer.Layer.attributes.volume_shaders.images data=site.data.user-reference.scene-objects.layer.Layer-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.layer.Layer.attributes.volume_shaders.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.layer.Layer-%}