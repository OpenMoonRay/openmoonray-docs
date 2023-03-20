---
title: DwaColorCorrectMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DwaColorCorrectMaterial
{%-include overview.html data=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial.gallery data=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Hue/Sat/Gain attributes</summary>
  <p>
    <h3>gain</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br/>
      default: 1.0
      <p class="scene-class-comments">multiplies the input channels by the specified value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial.attributes.gain.images data=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial.attributes.gain.links heading=4-%}
    </p>
    <h3>hue_shift</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br/>
      default: 0.0
      <p class="scene-class-comments">shifts the hue of the input (spectrum range is 0-1)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial.attributes.hue_shift.images data=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial.attributes.hue_shift.links heading=4-%}
    </p>
    <h3>saturation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br/>
      default: 1.0
      <p class="scene-class-comments">desaturates the input below 1.0 and adds saturation above 1.0</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial.attributes.saturation.images data=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial.attributes.saturation.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>TMI attributes</summary>
  <p>
    <h3>TMI</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br/>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">T = Temperature where positive values push towards blue and negative towards red.   M = Magenta where positive values push towards magenta and negative towards green.  I = Intensity where negative values remove and positive values add energy </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial.attributes.TMI.images data=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial.attributes.TMI.links heading=4-%}
    </p>
    <h3>TMI_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br/>
      default: False
      <p class="scene-class-comments">enables the TMI parameters</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial.attributes.TMI_enabled.images data=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial.attributes.TMI_enabled.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>extra_aovs</h3>
    <p class="scene-class-type">
      <b>Map</b>
      <br/>
      default: None
      <p class="scene-class-comments">Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial.attributes.extra_aovs.images data=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial.attributes.extra_aovs.links heading=4-%}
    </p>
    <h3>input_material</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br/>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial.attributes.input_material.images data=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial.attributes.input_material.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br/>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial.attributes.label.images data=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial.attributes.label.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br/>
      default: 1.0
      <p class="scene-class-comments">how much of the overall color correct to mix in</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial.attributes.mix.images data=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial.attributes.mix.links heading=4-%}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br/>
      default: True
      <p class="scene-class-comments">Enable/disable all color corrections</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial.attributes.on.images data=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial.attributes.on.links heading=4-%}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br/>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial.attributes.priority.images data=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial.attributes.priority.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.materials.DwaColorCorrectMaterial-%}