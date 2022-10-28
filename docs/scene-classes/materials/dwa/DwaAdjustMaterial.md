---
title: DwaAdjustMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DwaAdjustMaterial
{%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.gallery data=site.data.scene-classes.materials.dwa.DwaAdjustMaterial-%}
{%include see-also.html links=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Enable attributes</summary>
  <p>
    <h3>adjust_color</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">use color adjustment attrs: color_hue_shift, color_saturation, color_gain</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.adjust_color.images data=site.data.scene-classes.materials.dwa.DwaAdjustMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.adjust_color.links heading=4-%}
    </p>
    <h3>adjust_presence</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">use presence adjustment attrs: presence_set, presence_set_blend, presence_mult</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.adjust_presence.images data=site.data.scene-classes.materials.dwa.DwaAdjustMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.adjust_presence.links heading=4-%}
    </p>
    <h3>adjust_roughness</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">use roughness adjustment attrs: roughness_set, roughness_set_blend, roughness_mult, roughness_remap_{in/out}_{min/max}</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.adjust_roughness.images data=site.data.scene-classes.materials.dwa.DwaAdjustMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.adjust_roughness.links heading=4-%}
    </p>
    <h3>adjust_specular</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">use specular adjustment attrs: specular_set, specular_set_blend, specular_mult</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.adjust_specular.images data=site.data.scene-classes.materials.dwa.DwaAdjustMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.adjust_specular.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Override attributes</summary>
  <p>
    <h3>casts_caustics</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | unmodified = 0 (default)
          | force on = 1
          | force off = 2
      <p class="scene-class-comments">allows you to keep or set casts caustics attribute</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.casts_caustics.images data=site.data.scene-classes.materials.dwa.DwaAdjustMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.casts_caustics.links heading=4-%}
    </p>
    <h3>disable_clearcoat</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">when checked, turn off clearcoat from input</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.disable_clearcoat.images data=site.data.scene-classes.materials.dwa.DwaAdjustMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.disable_clearcoat.links heading=4-%}
    </p>
    <h3>disable_diffuse</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">when checked, turn off all diffuse from input</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.disable_diffuse.images data=site.data.scene-classes.materials.dwa.DwaAdjustMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.disable_diffuse.links heading=4-%}
    </p>
    <h3>disable_specular</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">when checked, turn off all specular from input</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.disable_specular.images data=site.data.scene-classes.materials.dwa.DwaAdjustMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.disable_specular.links heading=4-%}
    </p>
    <h3>thin_geometry</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | unmodified = 0 (default)
          | force on = 1
          | force off = 2
      <p class="scene-class-comments">allows you to keep or set thin geometry attribute</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.thin_geometry.images data=site.data.scene-classes.materials.dwa.DwaAdjustMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.thin_geometry.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>emission</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">emissive map to add to material's emission</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.emission.images data=site.data.scene-classes.materials.dwa.DwaAdjustMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.emission.links heading=4-%}
    </p>
    <h3>emission_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | off = 0 (default)
          | masked = 1
          | unmasked = 2
      <p class="scene-class-comments">how to handle emission input. masked uses mix input, unmasked is mix = 1</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.emission_mode.images data=site.data.scene-classes.materials.dwa.DwaAdjustMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.emission_mode.links heading=4-%}
    </p>
    <h3>extra_aovs</h3>
    <p class="scene-class-type">
      <b>Map</b>
      default: None
      <p class="scene-class-comments">Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.extra_aovs.images data=site.data.scene-classes.materials.dwa.DwaAdjustMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.extra_aovs.links heading=4-%}
    </p>
    <h3>input_material</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.input_material.images data=site.data.scene-classes.materials.dwa.DwaAdjustMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.input_material.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.label.images data=site.data.scene-classes.materials.dwa.DwaAdjustMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.label.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">weight of adjustments applied to the material</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.mix.images data=site.data.scene-classes.materials.dwa.DwaAdjustMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.mix.links heading=4-%}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Enable/disable all adjustments</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.on.images data=site.data.scene-classes.materials.dwa.DwaAdjustMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.on.links heading=4-%}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.priority.images data=site.data.scene-classes.materials.dwa.DwaAdjustMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaAdjustMaterial.attributes.priority.links heading=4-%}
    </p>
  </p>
</details>
</div>