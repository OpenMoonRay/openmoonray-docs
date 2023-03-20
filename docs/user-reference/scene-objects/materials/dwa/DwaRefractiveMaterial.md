---
title: DwaRefractiveMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DwaRefractiveMaterial
{%-include overview.html data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.gallery data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>specular</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Enables/disables specular reflections (binary 0|1 for plausibility)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.specular.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.specular.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Clearcoat attributes</summary>
  <p>
    <h3>clearcoat</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Enables/disables clearcoat (binary 0|1 for plausibility)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.clearcoat.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.clearcoat.links heading=4-%}
    </p>
    <h3>clearcoat_attenuation_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 0.5, 0.5, 0.5 ]
      <p class="scene-class-comments">The attenuation color of the clearcoat when 'cleacoat thickness' &gt; 0</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.clearcoat_attenuation_color.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.clearcoat_attenuation_color.links heading=4-%}
    </p>
    <h3>clearcoat_bending</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">(advanced, recommended on) bends rays based on the clearcoat-refractive-index before evaluating the lobes under clearcoat</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.clearcoat_bending.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.clearcoat_bending.links heading=4-%}
    </p>
    <h3>clearcoat_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;Beckmann&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;GGX&rdquo; (default)<br>
      <p class="scene-class-comments">Sets the normal distribution function for clearcoat.  ggx is currently isotropic only</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.clearcoat_model.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.clearcoat_model.links heading=4-%}
    </p>
    <h3>clearcoat_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Controls the amount of infuence of the alternate clearcoat normal</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.clearcoat_normal_dial.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.clearcoat_normal_dial.links heading=4-%}
    </p>
    <h3>clearcoat_refractive_index</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.5
      <p class="scene-class-comments">Defines the fresnel behavior</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.clearcoat_refractive_index.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.clearcoat_refractive_index.links heading=4-%}
    </p>
    <h3>clearcoat_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.10000000149
      <p class="scene-class-comments">The roughness of the clearcoat lobe</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.clearcoat_roughness.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.clearcoat_roughness.links heading=4-%}
    </p>
    <h3>clearcoat_thickness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">The thickness of the virtual clearcoat layer. values &gt; 0 enable absorption</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.clearcoat_thickness.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.clearcoat_thickness.links heading=4-%}
    </p>
    <h3>independent_clearcoat_normal</h3>
    <p class="scene-class-type">
      <b>NormalMap</b>
      <br>
      default: None
      <p class="scene-class-comments">Specifies an independent shading normal (normal map) for the clearcoat lobe</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.independent_clearcoat_normal.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.independent_clearcoat_normal.links heading=4-%}
    </p>
    <h3>show_clearcoat</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables/disables clearcoat</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.show_clearcoat.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.show_clearcoat.links heading=4-%}
    </p>
    <h3>use_independent_clearcoat_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Specifies whether the clearcoat lobe should use an independent normal</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.use_independent_clearcoat_normal.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.use_independent_clearcoat_normal.links heading=4-%}
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
      <p class="scene-class-comments">Allows continuation of caustic light paths.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.casts_caustics.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.casts_caustics.links heading=4-%}
    </p>
    <h3>presence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Controls the visibility of this object. useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.presence.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.presence.links heading=4-%}
    </p>
    <h3>thin_geometry</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables proper shading of infinitely thin geometry such as paper or leaves.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.thin_geometry.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.thin_geometry.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.emission.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.emission.links heading=4-%}
    </p>
    <h3>show_emission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables/disable emission</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.show_emission.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.show_emission.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Fuzz attributes</summary>
  <p>
    <h3>fuzz</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Fuzz mask</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.fuzz.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.fuzz.links heading=4-%}
    </p>
    <h3>fuzz_albedo</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Color of the fuzz highlights.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.fuzz_albedo.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.fuzz_albedo.links heading=4-%}
    </p>
    <h3>fuzz_normal</h3>
    <p class="scene-class-type">
      <b>NormalMap</b>
      <br>
      default: None
      <p class="scene-class-comments">Specifies an independent shading normal (normal map) for the fuzz lobe</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.fuzz_normal.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.fuzz_normal.links heading=4-%}
    </p>
    <h3>fuzz_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Controls the amount of infuence of the alternate fuzz normal</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.fuzz_normal_dial.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.fuzz_normal_dial.links heading=4-%}
    </p>
    <h3>fuzz_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.25
      <p class="scene-class-comments">Lower values result in glancing angle highlights while higher values result in a broad, uniform coverage</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.fuzz_roughness.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.fuzz_roughness.links heading=4-%}
    </p>
    <h3>show_fuzz</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables/disables fuzz lobe</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.show_fuzz.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.show_fuzz.links heading=4-%}
    </p>
    <h3>use_absorbing_fuzz_fibers</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Specify whether dark fuzz fibers absorb energy or transmit it to the layers below.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.use_absorbing_fuzz_fibers.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.use_absorbing_fuzz_fibers.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Iridescence attributes</summary>
  <p>
    <h3>iridescence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Controls the strength of the iridescence effect</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence.links heading=4-%}
    </p>
    <h3>iridescence_apply_to</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;primary specular&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;clearcoat/moisture specular&rdquo;<br>
      <p class="scene-class-comments">Apply iridescence to primary specular lobe or clearcoat/moisture lobe</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence_apply_to.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence_apply_to.links heading=4-%}
    </p>
    <h3>iridescence_at_0_incidence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Iridescence effect at 0 degree viewing angle</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence_at_0_incidence.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence_at_0_incidence.links heading=4-%}
    </p>
    <h3>iridescence_at_90_incidence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Iridescence effect at 90 degree viewing angle</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence_at_90_incidence.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence_at_90_incidence.links heading=4-%}
    </p>
    <h3>iridescence_color_control</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;use hue interpolation&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;use ramp&rdquo;<br>
      <p class="scene-class-comments">Use hue interpolation: automatically cycles through hue wheel, use ramp: user specified color ramp</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence_color_control.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence_color_control.links heading=4-%}
    </p>
    <h3>iridescence_colors</h3>
    <p class="scene-class-type">
      <b>RgbVector</b>
      <br>
      default: [[ 1, 0, 0 ], [ 1, 1, 0 ], [ 0, 1, 0 ], [ 0, 1, 1 ], [ 0, 0, 1 ], [ 1, 0, 1 ], [ 1, 0, 0 ]]
      <p class="scene-class-comments">List of colors on the ramp</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence_colors.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence_colors.links heading=4-%}
    </p>
    <h3>iridescence_exponent</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Tightens or broadens the distribution of colors</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence_exponent.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence_exponent.links heading=4-%}
    </p>
    <h3>iridescence_flip_hue_direction</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Flip interpolation around the hue wheel to counter-clockwise direction</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence_flip_hue_direction.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence_flip_hue_direction.links heading=4-%}
    </p>
    <h3>iridescence_interpolations</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: []
      <p class="scene-class-comments">None: 0 | linear: 1 | exponential up: 2 | exponential down: 3 |<br>&emsp;&emsp;&emsp;smooth: 4 | catmull rom: 5 | monotone cubic: 6</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence_interpolations.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence_interpolations.links heading=4-%}
    </p>
    <h3>iridescence_positions</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      <br>
      default: []
      <p class="scene-class-comments">Ramp positions</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence_positions.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence_positions.links heading=4-%}
    </p>
    <h3>iridescence_primary_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 0, 0 ]
      <p class="scene-class-comments">First color to interpolate from around the hue wheel</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence_primary_color.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence_primary_color.links heading=4-%}
    </p>
    <h3>iridescence_ramp_interpolation_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;RGB&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;HSV&rdquo;<br>
      <p class="scene-class-comments">Rgb: lerp in rgb space which matches ui preview but can lose saturation, hsv: lerp in hsv space which preserves saturation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence_ramp_interpolation_mode.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence_ramp_interpolation_mode.links heading=4-%}
    </p>
    <h3>iridescence_secondary_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 0, 0 ]
      <p class="scene-class-comments">Second color to interpolate to around the hue wheel</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence_secondary_color.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence_secondary_color.links heading=4-%}
    </p>
    <h3>iridescence_thickness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Controls how much the color spectrum is repeated</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence_thickness.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.iridescence_thickness.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Normal attributes</summary>
  <p>
    <h3>input_normal</h3>
    <p class="scene-class-type">
      <b>NormalMap</b>
      <br>
      default: None
      <p class="scene-class-comments">Specifies an alternate shading normal in the tangent frame (normal map)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.input_normal.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.input_normal.links heading=4-%}
    </p>
    <h3>input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Controls the amount of influence of the alternate normal</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.input_normal_dial.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.input_normal_dial.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Normal Anti-aliasing attributes</summary>
  <p>
    <h3>normal_AA_dial</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Controls the amount roughness compensation from the normal map aa strategy.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.normal_AA_dial.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.normal_AA_dial.links heading=4-%}
    </p>
    <h3>normal_AA_strategy</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;none&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;toksvig&rdquo;<br>
      <p class="scene-class-comments">Normal map anti-aliasing strategy to use - 'none' uses regular mip-mapping, 'toksvig' increases specular roughness corresponding to the geometric details filtered out because of mip-mapping.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.normal_AA_strategy.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.normal_AA_strategy.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Specular attributes</summary>
  <p>
    <h3>anisotropy</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Controls the shape of the primary reflection</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.anisotropy.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.anisotropy.links heading=4-%}
    </p>
    <h3>refractive_index</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.5
      <p class="scene-class-comments">Defines the fresnel behavior, (affects reflection and refraction)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.refractive_index.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.refractive_index.links heading=4-%}
    </p>
    <h3>roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.5
      <p class="scene-class-comments">The roughness of the surface (currently only affects reflection)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.roughness.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.roughness.links heading=4-%}
    </p>
    <h3>shading_tangent</h3>
    <p class="scene-class-type">
      <b>Vec2f</b> <i>bindable</i>
      <br>
      default: [ 1, 0 ]
      <p class="scene-class-comments">Controls the orientation of anistropy</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.shading_tangent.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.shading_tangent.links heading=4-%}
    </p>
    <h3>show_specular</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Enables/disables specular reflections</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.show_specular.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.show_specular.links heading=4-%}
    </p>
    <h3>specular_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;Beckmann&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;GGX&rdquo; (default)<br>
      <p class="scene-class-comments">Sets the normal distribution function for specular.  ggx is currently isotropic only</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.specular_model.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.specular_model.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Transmission attributes</summary>
  <p>
    <h3>dispersion_abbe_number</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 34.0
      <p class="scene-class-comments">The amount of dispersion/chromatic-aberration via refractions. lower this number to increase the effect. a value of 0 turns off dispersion. around [25-80] makes sense for realistic glass. lower values may look better on gemstones.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.dispersion_abbe_number.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.dispersion_abbe_number.links heading=4-%}
    </p>
    <h3>independent_transmission_refractive_index</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.5
      <p class="scene-class-comments">Defines a separate ior for the bending of light with transmission</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.independent_transmission_refractive_index.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.independent_transmission_refractive_index.links heading=4-%}
    </p>
    <h3>independent_transmission_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.5
      <p class="scene-class-comments">Separate roughness for transmission</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.independent_transmission_roughness.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.independent_transmission_roughness.links heading=4-%}
    </p>
    <h3>show_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Enables/disables refractive solid model</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.show_transmission.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.show_transmission.links heading=4-%}
    </p>
    <h3>transmission_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">The desired color of transmitted light</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.transmission_color.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.transmission_color.links heading=4-%}
    </p>
    <h3>use_dispersion</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Use dispersion effects in transmission</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.use_dispersion.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.use_dispersion.links heading=4-%}
    </p>
    <h3>use_independent_transmission_refractive_index</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Use a separate ior for transmission</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.use_independent_transmission_refractive_index.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.use_independent_transmission_refractive_index.links heading=4-%}
    </p>
    <h3>use_independent_transmission_roughness</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Use a separate roughness for transmission</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.use_independent_transmission_roughness.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.use_independent_transmission_roughness.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.extra_aovs.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.extra_aovs.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Label used in material and light aovs</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.label.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.label.links heading=4-%}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. a value of 0 means the priority should be ignored. materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  to enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.priority.images data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial.attributes.priority.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.materials.DwaRefractiveMaterial-%}