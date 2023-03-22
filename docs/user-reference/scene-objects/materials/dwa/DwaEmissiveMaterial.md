---
title: DwaEmissiveMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DwaEmissiveMaterial
{%-include overview.html data=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial.gallery data=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Common attributes</summary>
  <p>
    <h3>presence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Controls the visibility of this object. useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial.attributes.presence.images data=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial.attributes.presence.videos data=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial.attributes.presence.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Emission attributes</summary>
  <p>
    <h3>emission</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">The energy emitted from this material</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial.attributes.emission.images data=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial.attributes.emission.videos data=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial.attributes.emission.links heading=4-%}
    </p>
    <h3>show_emission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Enables/disable emission</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial.attributes.show_emission.images data=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial.attributes.show_emission.videos data=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial.attributes.show_emission.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>extra_aovs</h3>
    <p class="scene-class-type">
      <b>Map</b>
      <br>
      default: None
      <p class="scene-class-comments">Bind this attribute to a 'listmap' that contains references to extraaovmaps that specify additional outputs that can be assigned to a renderoutput "light aov" result</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial.attributes.extra_aovs.images data=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial.attributes.extra_aovs.videos data=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial.attributes.extra_aovs.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Label used in material and light aovs</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial.attributes.label.images data=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial.attributes.label.videos data=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial.attributes.label.links heading=4-%}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. a value of 0 means the priority should be ignored. materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  to enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial.attributes.priority.images data=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial.attributes.priority.videos data=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial.attributes.priority.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.materials.DwaEmissiveMaterial-%}