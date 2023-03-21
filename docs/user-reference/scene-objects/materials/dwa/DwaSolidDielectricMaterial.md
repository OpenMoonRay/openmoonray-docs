---
title: DwaSolidDielectricMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DwaSolidDielectricMaterial
{%-include overview.html data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.gallery data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.links-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.specular.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.specular.links heading=4-%}
    </p>
    <h3>sss_trace_set</h3>
    <p class="scene-class-type">
      <b>TraceSet</b>
      <br>
      default: None
      <p class="scene-class-comments">Set of geometries that contribute neighboring subsurface points. by default, only the geometry associated with this material contributes to subsurface. if you want adjacent geometry with different material to contribute as well, specify all those parts here.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.sss_trace_set.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.sss_trace_set.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.clearcoat.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.clearcoat.links heading=4-%}
    </p>
    <h3>clearcoat_attenuation_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 0.5, 0.5, 0.5 ]
      <p class="scene-class-comments">The attenuation color of the clearcoat when 'cleacoat thickness' &gt; 0</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.clearcoat_attenuation_color.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.clearcoat_attenuation_color.links heading=4-%}
    </p>
    <h3>clearcoat_bending</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">(advanced, recommended on) bends rays based on the clearcoat-refractive-index before evaluating the lobes under clearcoat</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.clearcoat_bending.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.clearcoat_bending.links heading=4-%}
    </p>
    <h3>clearcoat_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;Beckmann&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;GGX&rdquo; (default)<br>
      <p class="scene-class-comments">Sets the normal distribution function for clearcoat.  ggx is currently isotropic only</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.clearcoat_model.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.clearcoat_model.links heading=4-%}
    </p>
    <h3>clearcoat_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Controls the amount of infuence of the alternate clearcoat normal</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.clearcoat_normal_dial.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.clearcoat_normal_dial.links heading=4-%}
    </p>
    <h3>clearcoat_refractive_index</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.5
      <p class="scene-class-comments">Defines the fresnel behavior</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.clearcoat_refractive_index.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.clearcoat_refractive_index.links heading=4-%}
    </p>
    <h3>clearcoat_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.10000000149
      <p class="scene-class-comments">The roughness of the clearcoat lobe</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.clearcoat_roughness.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.clearcoat_roughness.links heading=4-%}
    </p>
    <h3>clearcoat_thickness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">The thickness of the virtual clearcoat layer. values &gt; 0 enable absorption</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.clearcoat_thickness.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.clearcoat_thickness.links heading=4-%}
    </p>
    <h3>independent_clearcoat_normal</h3>
    <p class="scene-class-type">
      <b>NormalMap</b>
      <br>
      default: None
      <p class="scene-class-comments">Specifies an independent shading normal (normal map) for the clearcoat lobe</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.independent_clearcoat_normal.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.independent_clearcoat_normal.links heading=4-%}
    </p>
    <h3>show_clearcoat</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables/disables clearcoat</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.show_clearcoat.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.show_clearcoat.links heading=4-%}
    </p>
    <h3>use_independent_clearcoat_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Specifies whether the clearcoat lobe should use an independent normal</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.use_independent_clearcoat_normal.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.use_independent_clearcoat_normal.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.casts_caustics.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.casts_caustics.links heading=4-%}
    </p>
    <h3>presence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Controls the visibility of this object. useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.presence.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.presence.links heading=4-%}
    </p>
    <h3>thin_geometry</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables proper shading of infinitely thin geometry such as paper or leaves.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.thin_geometry.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.thin_geometry.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Diffuse attributes</summary>
  <p>
    <h3>albedo</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">The overall surface color as seen from a distance (ie. diffuse color)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.albedo.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.albedo.links heading=4-%}
    </p>
    <h3>bssrdf</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;normalized diffusion&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;dipole&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;random walk&rdquo;<br>
      <p class="scene-class-comments">0 for normalizeddiffuse, 1 for dipole, 2 for random walk</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.bssrdf.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.bssrdf.links heading=4-%}
    </p>
    <h3>diffuse_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Roughness of the diffuse shading.  if the value is zero a lambertian model is used.  if it's above zero the oren nayar model is used.   not compatible with subsurface scattering.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.diffuse_roughness.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.diffuse_roughness.links heading=4-%}
    </p>
    <h3>diffuse_transmission</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Multiplier on the amount of light that is transmitted through the surface.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.diffuse_transmission.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.diffuse_transmission.links heading=4-%}
    </p>
    <h3>diffuse_transmission_blending_behavior</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;RGB&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;Monochromatic&rdquo; (default)<br>
      <p class="scene-class-comments">Controls how diffuse transmission color attenuates diffuse reflection</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.diffuse_transmission_blending_behavior.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.diffuse_transmission_blending_behavior.links heading=4-%}
    </p>
    <h3>diffuse_transmission_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">The color/amount of light that is transmitted through the surface.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.diffuse_transmission_color.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.diffuse_transmission_color.links heading=4-%}
    </p>
    <h3>enable_sss_input_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables sampling the normal map for sss samples. more accurate but potentially expensive</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.enable_sss_input_normal.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.enable_sss_input_normal.links heading=4-%}
    </p>
    <h3>resolve_self_intersections</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Tries to resolve self-intersecting geometry automatically by only evaluating 'exiting' intersections for subsurface evaluations</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.resolve_self_intersections.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.resolve_self_intersections.links heading=4-%}
    </p>
    <h3>scattering_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">The subsurface scattering 'falloff' color</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.scattering_color.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.scattering_color.links heading=4-%}
    </p>
    <h3>scattering_radius</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">The distance the light scatters beneath the surface. when 0 surface diffuse (lambertian or toon) is used</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.scattering_radius.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.scattering_radius.links heading=4-%}
    </p>
    <h3>show_diffuse</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Enables/disables diffuse reflectance</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.show_diffuse.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.show_diffuse.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.emission.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.emission.links heading=4-%}
    </p>
    <h3>show_emission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables/disable emission</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.show_emission.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.show_emission.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.fuzz.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.fuzz.links heading=4-%}
    </p>
    <h3>fuzz_albedo</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Color of the fuzz highlights.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.fuzz_albedo.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.fuzz_albedo.links heading=4-%}
    </p>
    <h3>fuzz_normal</h3>
    <p class="scene-class-type">
      <b>NormalMap</b>
      <br>
      default: None
      <p class="scene-class-comments">Specifies an independent shading normal (normal map) for the fuzz lobe</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.fuzz_normal.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.fuzz_normal.links heading=4-%}
    </p>
    <h3>fuzz_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Controls the amount of infuence of the alternate fuzz normal</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.fuzz_normal_dial.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.fuzz_normal_dial.links heading=4-%}
    </p>
    <h3>fuzz_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.25
      <p class="scene-class-comments">Lower values result in glancing angle highlights while higher values result in a broad, uniform coverage</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.fuzz_roughness.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.fuzz_roughness.links heading=4-%}
    </p>
    <h3>show_fuzz</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables/disables fuzz lobe</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.show_fuzz.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.show_fuzz.links heading=4-%}
    </p>
    <h3>use_absorbing_fuzz_fibers</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Specify whether dark fuzz fibers absorb energy or transmit it to the layers below.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.use_absorbing_fuzz_fibers.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.use_absorbing_fuzz_fibers.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Glitter attributes</summary>
  <p>
    <h3>glitter</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Enables/disables glitter model (binary 0|1 for plausibility)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter.links heading=4-%}
    </p>
    <h3>glitter_LOD_quality</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.5
      <p class="scene-class-comments">Controls quality of glitter at distances where individual flakes cannot be perceived; at lower values, approximation kicks in earlier</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_LOD_quality.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_LOD_quality.links heading=4-%}
    </p>
    <h3>glitter_approximate_for_secondary_rays</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Use an approximation to shade glitter for non-mirror secondary rays</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_approximate_for_secondary_rays.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_approximate_for_secondary_rays.links heading=4-%}
    </p>
    <h3>glitter_color_A</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Base flake color (use physical metallic color values)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_color_A.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_color_A.links heading=4-%}
    </p>
    <h3>glitter_color_B</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Base flake color (use physical metallic color values)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_color_B.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_color_B.links heading=4-%}
    </p>
    <h3>glitter_color_hue_variation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Introduce hue variation in flake color centered at the base flake color's hue on the hue wheel</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_color_hue_variation.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_color_hue_variation.links heading=4-%}
    </p>
    <h3>glitter_color_saturation_variation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Introduce saturation variation in flake color centered at the base flake color's saturation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_color_saturation_variation.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_color_saturation_variation.links heading=4-%}
    </p>
    <h3>glitter_color_value_variation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Introduce value variation in flake color centered at the base flake color's value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_color_value_variation.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_color_value_variation.links heading=4-%}
    </p>
    <h3>glitter_compensate_reference_space_deformation</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">(in referencespace) compensates for stretch/compression/shear in glitter shapes resulting from animation etc</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_compensate_reference_space_deformation.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_compensate_reference_space_deformation.links heading=4-%}
    </p>
    <h3>glitter_debug_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;off&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;blend&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;color&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;averageColor&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;footprintArea&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;radius&rdquo;<br>
      <p class="scene-class-comments">Developer debug visualization modes</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_debug_mode.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_debug_mode.links heading=4-%}
    </p>
    <h3>glitter_density</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Controls the number of flakes per unit length; larger density packs more flakes into same space</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_density.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_density.links heading=4-%}
    </p>
    <h3>glitter_jitter</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Controls how much the flakes are randomly offset from a regular grid</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_jitter.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_jitter.links heading=4-%}
    </p>
    <h3>glitter_layering_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;physical&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;additive&rdquo;<br>
      <p class="scene-class-comments">Layering mode for glitter on top of the under material. physical: conserves energy and glitter attenuates under material, additive: breaks energy conservation but glitter is never darker than the under material (eg. use case: snow)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_layering_mode.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_layering_mode.links heading=4-%}
    </p>
    <h3>glitter_randomness</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.5
      <p class="scene-class-comments">Randomness of flake orientation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_randomness.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_randomness.links heading=4-%}
    </p>
    <h3>glitter_roughness_A</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.140000000596
      <p class="scene-class-comments">Specular roughness of individual flakes (0 makes flakes mirror-like)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_roughness_A.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_roughness_A.links heading=4-%}
    </p>
    <h3>glitter_roughness_B</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.140000000596
      <p class="scene-class-comments">Specular roughness of individual flakes (0 makes flakes mirror-like)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_roughness_B.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_roughness_B.links heading=4-%}
    </p>
    <h3>glitter_seed</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 0
      <p class="scene-class-comments">The seed for the glitter random number generator</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_seed.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_seed.links heading=4-%}
    </p>
    <h3>glitter_size_A</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Size of the flakes.  apparent flake size may vary based on how much the flake spheres intersect the surface</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_size_A.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_size_A.links heading=4-%}
    </p>
    <h3>glitter_size_B</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Size of the flakes.  apparent flake size may vary based on how much the flake spheres intersect the surface</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_size_B.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_size_B.links heading=4-%}
    </p>
    <h3>glitter_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;4 = &ldquo;object&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;reference&rdquo; (default)<br>
      <p class="scene-class-comments">The space to calculate the worley noise in, defaults to reference space</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_space.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_space.links heading=4-%}
    </p>
    <h3>glitter_style_A_frequency</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">0 implies none of this style, 1 implies all the flakes will get this style</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_style_A_frequency.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_style_A_frequency.links heading=4-%}
    </p>
    <h3>glitter_style_B_frequency</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">0 implies none of this style, 1 implies all the flakes will get this style</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_style_B_frequency.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_style_B_frequency.links heading=4-%}
    </p>
    <h3>glitter_texture_A</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      <br>
      default: 
      <p class="scene-class-comments">Filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_texture_A.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_texture_A.links heading=4-%}
    </p>
    <h3>glitter_texture_B</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      <br>
      default: 
      <p class="scene-class-comments">Filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_texture_B.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_texture_B.links heading=4-%}
    </p>
    <h3>glitter_texture_orientation_randomness</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.15000000596
      <p class="scene-class-comments">Randomly orient each texture</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_texture_orientation_randomness.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.glitter_texture_orientation_randomness.links heading=4-%}
    </p>
    <h3>show_glitter</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables/disables glitter lobes</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.show_glitter.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.show_glitter.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence.links heading=4-%}
    </p>
    <h3>iridescence_apply_to</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;primary specular&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;clearcoat/moisture specular&rdquo;<br>
      <p class="scene-class-comments">Apply iridescence to primary specular lobe or clearcoat/moisture lobe</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence_apply_to.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence_apply_to.links heading=4-%}
    </p>
    <h3>iridescence_at_0_incidence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Iridescence effect at 0 degree viewing angle</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence_at_0_incidence.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence_at_0_incidence.links heading=4-%}
    </p>
    <h3>iridescence_at_90_incidence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Iridescence effect at 90 degree viewing angle</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence_at_90_incidence.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence_at_90_incidence.links heading=4-%}
    </p>
    <h3>iridescence_color_control</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;use hue interpolation&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;use ramp&rdquo;<br>
      <p class="scene-class-comments">Use hue interpolation: automatically cycles through hue wheel, use ramp: user specified color ramp</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence_color_control.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence_color_control.links heading=4-%}
    </p>
    <h3>iridescence_colors</h3>
    <p class="scene-class-type">
      <b>RgbVector</b>
      <br>
      default: [[ 1, 0, 0 ], [ 1, 1, 0 ], [ 0, 1, 0 ], [ 0, 1, 1 ], [ 0, 0, 1 ], [ 1, 0, 1 ], [ 1, 0, 0 ]]
      <p class="scene-class-comments">List of colors on the ramp</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence_colors.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence_colors.links heading=4-%}
    </p>
    <h3>iridescence_exponent</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Tightens or broadens the distribution of colors</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence_exponent.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence_exponent.links heading=4-%}
    </p>
    <h3>iridescence_flip_hue_direction</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Flip interpolation around the hue wheel to counter-clockwise direction</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence_flip_hue_direction.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence_flip_hue_direction.links heading=4-%}
    </p>
    <h3>iridescence_interpolations</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">None: 0 | linear: 1 | exponential up: 2 | exponential down: 3 |<br>&emsp;&emsp;&emsp;smooth: 4 | catmull rom: 5 | monotone cubic: 6</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence_interpolations.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence_interpolations.links heading=4-%}
    </p>
    <h3>iridescence_positions</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">Ramp positions</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence_positions.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence_positions.links heading=4-%}
    </p>
    <h3>iridescence_primary_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 0, 0 ]
      <p class="scene-class-comments">First color to interpolate from around the hue wheel</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence_primary_color.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence_primary_color.links heading=4-%}
    </p>
    <h3>iridescence_ramp_interpolation_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;RGB&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;HSV&rdquo;<br>
      <p class="scene-class-comments">Rgb: lerp in rgb space which matches ui preview but can lose saturation, hsv: lerp in hsv space which preserves saturation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence_ramp_interpolation_mode.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence_ramp_interpolation_mode.links heading=4-%}
    </p>
    <h3>iridescence_secondary_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 0, 0 ]
      <p class="scene-class-comments">Second color to interpolate to around the hue wheel</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence_secondary_color.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence_secondary_color.links heading=4-%}
    </p>
    <h3>iridescence_thickness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Controls how much the color spectrum is repeated</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence_thickness.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.iridescence_thickness.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.input_normal.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.input_normal.links heading=4-%}
    </p>
    <h3>input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Controls the amount of influence of the alternate normal</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.input_normal_dial.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.input_normal_dial.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.normal_AA_dial.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.normal_AA_dial.links heading=4-%}
    </p>
    <h3>normal_AA_strategy</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;none&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;toksvig&rdquo;<br>
      <p class="scene-class-comments">Normal map anti-aliasing strategy to use - 'none' uses regular mip-mapping, 'toksvig' increases specular roughness corresponding to the geometric details filtered out because of mip-mapping.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.normal_AA_strategy.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.normal_AA_strategy.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.anisotropy.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.anisotropy.links heading=4-%}
    </p>
    <h3>refractive_index</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.5
      <p class="scene-class-comments">Defines the fresnel behavior, (affects reflection and refraction)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.refractive_index.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.refractive_index.links heading=4-%}
    </p>
    <h3>roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.5
      <p class="scene-class-comments">The roughness of the surface (currently only affects reflection)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.roughness.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.roughness.links heading=4-%}
    </p>
    <h3>shading_tangent</h3>
    <p class="scene-class-type">
      <b>Vec2f</b> <i>bindable</i>
      <br>
      default: [ 1, 0 ]
      <p class="scene-class-comments">Controls the orientation of anistropy</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.shading_tangent.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.shading_tangent.links heading=4-%}
    </p>
    <h3>show_specular</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Enables/disables specular reflections</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.show_specular.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.show_specular.links heading=4-%}
    </p>
    <h3>specular_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;Beckmann&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;GGX&rdquo; (default)<br>
      <p class="scene-class-comments">Sets the normal distribution function for specular.  ggx is currently isotropic only</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.specular_model.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.specular_model.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.extra_aovs.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.extra_aovs.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Label used in material and light aovs</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.label.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.label.links heading=4-%}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. a value of 0 means the priority should be ignored. materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  to enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.priority.images data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial.attributes.priority.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.materials.DwaSolidDielectricMaterial-%}