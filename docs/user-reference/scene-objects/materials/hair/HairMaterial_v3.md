---
title: HairMaterial_v3

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# HairMaterial_v3
{%-include overview.html data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.gallery data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>show_multiple_scattering</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">show the amount of light scattered after TRT bounce, good for blonde/white hair</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.show_multiple_scattering.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.show_multiple_scattering.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.show_multiple_scattering.links heading=4-%}
    </p>
    <h3>use_optimized_sampling</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">optimized sampling of all the hair lobes, results in 2x-4x speedup on average (disables individual hair lobe AOVs). When false, the look may slightly change if using biased techniques like roughness/sample clamping. </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.use_optimized_sampling.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.use_optimized_sampling.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.use_optimized_sampling.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Common attributes</summary>
  <p>
    <h3>casts_caustics</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">allows continuation of caustic light paths.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.casts_caustics.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.casts_caustics.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.casts_caustics.links heading=4-%}
    </p>
    <h3>presence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.presence.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.presence.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.presence.links heading=4-%}
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
      <p class="scene-class-comments">the energy emitted from this material</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.emission.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.emission.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.emission.links heading=4-%}
    </p>
    <h3>show_emission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">enables/disable emission</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.show_emission.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.show_emission.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.show_emission.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Fresnel attributes</summary>
  <p>
    <h3>cuticle_layer_thickness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.10000000149
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.cuticle_layer_thickness.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.cuticle_layer_thickness.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.cuticle_layer_thickness.links heading=4-%}
    </p>
    <h3>fresnel_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;simple longitudinal&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;dielectric cylinder&rdquo; (default)<br>
          &nbsp;&nbsp;2 = &ldquo;layered cuticles&rdquo;<br>
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.fresnel_type.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.fresnel_type.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.fresnel_type.links heading=4-%}
    </p>
    <h3>refractive_index</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.45000004768
      <p class="scene-class-comments">keep this value between [1.3,2.0] for realistic behavior (human hair is around 1.55)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.refractive_index.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.refractive_index.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.refractive_index.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Primary Specular attributes</summary>
  <p>
    <h3>primary_specular_offset</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: -3.0
      <p class="scene-class-comments">offset specular highlight along hair direction (in degrees) [-10,+10], around -3 for human hair</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.primary_specular_offset.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.primary_specular_offset.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.primary_specular_offset.links heading=4-%}
    </p>
    <h3>primary_specular_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.5
      <p class="scene-class-comments">roughness of the primary specular highlight, also sets the transmission roughness to 0.5x and secondary specular roughness to 2x by default unless independent roughnesses are being used for both</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.primary_specular_roughness.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.primary_specular_roughness.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.primary_specular_roughness.links heading=4-%}
    </p>
    <h3>primary_specular_tint</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">tint the primary specular highlight with this color (leave white for physical behavior)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.primary_specular_tint.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.primary_specular_tint.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.primary_specular_tint.links heading=4-%}
    </p>
    <h3>show_primary_specular</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">show primary specular</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.show_primary_specular.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.show_primary_specular.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.show_primary_specular.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Secondary Specular attributes</summary>
  <p>
    <h3>glint_eccentricity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.850000023842
      <p class="scene-class-comments">secondary specular glint eccentricity [0.85, 1], values that deviate from 1 make the hair fiber more elliptical and more glinty</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.glint_eccentricity.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.glint_eccentricity.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.glint_eccentricity.links heading=4-%}
    </p>
    <h3>glint_max_twists</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 2.5
      <p class="scene-class-comments">the maximum number of twists along the hair's length. More twists means more glints. Each hair strand will be randomly assigned a twist amount between [min twists, max twists]</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.glint_max_twists.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.glint_max_twists.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.glint_max_twists.links heading=4-%}
    </p>
    <h3>glint_min_twists</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.5
      <p class="scene-class-comments">the minimum number of twists along the hair's length. More twists means more glints. Each hair strand will be randomly assigned a twist amount between [min twists, max twists]</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.glint_min_twists.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.glint_min_twists.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.glint_min_twists.links heading=4-%}
    </p>
    <h3>glint_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.5
      <p class="scene-class-comments">secondary specular glint roughness</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.glint_roughness.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.glint_roughness.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.glint_roughness.links heading=4-%}
    </p>
    <h3>glint_saturation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.5
      <p class="scene-class-comments">secondary specular glint saturation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.glint_saturation.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.glint_saturation.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.glint_saturation.links heading=4-%}
    </p>
    <h3>independent_secondary_specular_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.40000000596
      <p class="scene-class-comments">secondary specular roughness</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.independent_secondary_specular_roughness.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.independent_secondary_specular_roughness.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.independent_secondary_specular_roughness.links heading=4-%}
    </p>
    <h3>secondary_specular_offset</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: -4.5
      <p class="scene-class-comments">offset secondary specular highlight along hair direction (in degrees) [-10,+10], around -4.5 for human hair</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.secondary_specular_offset.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.secondary_specular_offset.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.secondary_specular_offset.links heading=4-%}
    </p>
    <h3>secondary_specular_tint</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">tint secondary specular with this color (leave white for physical behavior)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.secondary_specular_tint.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.secondary_specular_tint.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.secondary_specular_tint.links heading=4-%}
    </p>
    <h3>show_hair_glint</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">show hair glint</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.show_hair_glint.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.show_hair_glint.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.show_hair_glint.links heading=4-%}
    </p>
    <h3>show_secondary_specular</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">show secondary specular</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.show_secondary_specular.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.show_secondary_specular.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.show_secondary_specular.links heading=4-%}
    </p>
    <h3>use_independent_secondary_specular_roughness</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">when disabled, uses a physically correct value for secondary specular roughness which is linked to the primary specular roughness</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.use_independent_secondary_specular_roughness.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.use_independent_secondary_specular_roughness.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.use_independent_secondary_specular_roughness.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Transmission attributes</summary>
  <p>
    <h3>direct_transmission_saturation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">(Non-Physical, Advanced) saturate/desaturate direct transmission highlights.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.direct_transmission_saturation.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.direct_transmission_saturation.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.direct_transmission_saturation.links heading=4-%}
    </p>
    <h3>independent_transmission_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.10000000149
      <p class="scene-class-comments">transmission roughness</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.independent_transmission_roughness.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.independent_transmission_roughness.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.independent_transmission_roughness.links heading=4-%}
    </p>
    <h3>show_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">show tranmission specular</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.show_transmission.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.show_transmission.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.show_transmission.links heading=4-%}
    </p>
    <h3>transmission_azimuthal_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">higher values create a softer look</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.transmission_azimuthal_roughness.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.transmission_azimuthal_roughness.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.transmission_azimuthal_roughness.links heading=4-%}
    </p>
    <h3>transmission_offset</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: -1.5
      <p class="scene-class-comments">offset transmission highlight along hair direction (in degrees) [-10,+10], around -1.5 for human hair</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.transmission_offset.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.transmission_offset.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.transmission_offset.links heading=4-%}
    </p>
    <h3>transmission_tint</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">tint transmission with this color (leave white for physical behavior)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.transmission_tint.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.transmission_tint.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.transmission_tint.links heading=4-%}
    </p>
    <h3>use_independent_transmission_roughness</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">when disabled, uses a physically correct value for Transmission roughness which is linked to the primary specular roughness</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.use_independent_transmission_roughness.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.use_independent_transmission_roughness.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.use_independent_transmission_roughness.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.extra_aovs.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.extra_aovs.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.extra_aovs.links heading=4-%}
    </p>
    <h3>hair_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.hair_color.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.hair_color.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.hair_color.links heading=4-%}
    </p>
    <h3>invisible_refractive_cryptomatte</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Indicates whether material should/should not appear in the refractive cryptomatte layers</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.invisible_refractive_cryptomatte.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.invisible_refractive_cryptomatte.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.invisible_refractive_cryptomatte.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.label.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.label.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.label.links heading=4-%}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.priority.images data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.priority.videos data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairMaterial_v3.attributes.priority.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.materials.HairMaterial_v3-%}