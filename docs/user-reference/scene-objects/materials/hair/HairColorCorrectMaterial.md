---
title: HairColorCorrectMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# HairColorCorrectMaterial
{%-include overview.html data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.gallery data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Hue/Sat/Gain attributes</summary>
  <p>
    <h3>gain</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">multiplies the input channels by the specified value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.gain.images data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.gain.videos data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.gain.links heading=4-%}
    </p>
    <h3>hue_shift</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">shifts the hue of the input (spectrum range is 0-1)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.hue_shift.images data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.hue_shift.videos data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.hue_shift.links heading=4-%}
    </p>
    <h3>saturation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">desaturates the input below 1.0 and adds saturation above 1.0</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.saturation.images data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.saturation.videos data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.saturation.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>TMI attributes</summary>
  <p>
    <h3>TMI</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">T = Temperature where positive values push towards blue and negative towards red.   M = Magenta where positive values push towards magenta and negative towards green.  I = Intensity where negative values remove and positive values add energy </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.TMI.images data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.TMI.videos data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.TMI.links heading=4-%}
    </p>
    <h3>TMI_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">enables the TMI parameters</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.TMI_enabled.images data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.TMI_enabled.videos data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.TMI_enabled.links heading=4-%}
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
      <p class="scene-class-comments">Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.extra_aovs.images data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.extra_aovs.videos data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.extra_aovs.links heading=4-%}
    </p>
    <h3>input_hair_material</h3>
    <p class="scene-class-type">
      <b>DwaBaseHairLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.input_hair_material.images data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.input_hair_material.videos data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.input_hair_material.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.label.images data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.label.videos data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.label.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">how much of the overall color correct to mix in</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.mix.images data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.mix.videos data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.mix.links heading=4-%}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Enable/disable all color corrections</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.on.images data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.on.videos data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.on.links heading=4-%}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.priority.images data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.priority.videos data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.priority.links heading=4-%}
    </p>
    <h3>record_reflected_cryptomatte</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Indicates whether the next reflected surface should appear in the reflected cryptomatte layers</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.record_reflected_cryptomatte.images data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.record_reflected_cryptomatte.videos data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.record_reflected_cryptomatte.links heading=4-%}
    </p>
    <h3>record_refracted_cryptomatte</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Indicates whether the next refracted surface should appear in the refracted cryptomatte layers</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.record_refracted_cryptomatte.images data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.record_refracted_cryptomatte.videos data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial.attributes.record_refracted_cryptomatte.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.materials.HairColorCorrectMaterial-%}