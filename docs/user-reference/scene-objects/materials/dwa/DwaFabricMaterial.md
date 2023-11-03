---
title: DwaFabricMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DwaFabricMaterial
{%-include overview.html data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.gallery data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Common attributes</summary>
  <p>
    <h3>casts_caustics</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">allows continuation of caustic light paths.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.casts_caustics.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.casts_caustics.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.casts_caustics.links heading=4-%}
    </p>
    <h3>presence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.presence.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.presence.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.presence.links heading=4-%}
    </p>
    <h3>thin_geometry</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">enables proper shading of infinitely thin geometry such as paper or leaves.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.thin_geometry.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.thin_geometry.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.thin_geometry.links heading=4-%}
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
      <p class="scene-class-comments">the overall surface color as seen from a distance (ie. diffuse color)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.albedo.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.albedo.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.albedo.links heading=4-%}
    </p>
    <h3>diffuse_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Roughness of the diffuse shading.  If the value is zero a Lambertian model is used.  If it's above zero the Oren Nayar model is used.   Not compatible with subsurface scattering.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.diffuse_roughness.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.diffuse_roughness.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.diffuse_roughness.links heading=4-%}
    </p>
    <h3>diffuse_transmission</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">multiplier on the amount of light that is transmitted through the surface.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.diffuse_transmission.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.diffuse_transmission.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.diffuse_transmission.links heading=4-%}
    </p>
    <h3>diffuse_transmission_blending_behavior</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;RGB&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;Monochromatic&rdquo; (default)<br>
      <p class="scene-class-comments">Controls how diffuse transmission color attenuates diffuse reflection</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.diffuse_transmission_blending_behavior.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.diffuse_transmission_blending_behavior.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.diffuse_transmission_blending_behavior.links heading=4-%}
    </p>
    <h3>diffuse_transmission_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">the color/amount of light that is transmitted through the surface.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.diffuse_transmission_color.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.diffuse_transmission_color.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.diffuse_transmission_color.links heading=4-%}
    </p>
    <h3>fabric_diffuse_scattering</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.20000000298023224
      <p class="scene-class-comments">Amount of diffuse to mix in fabric. A value of 1 means fully diffuse fabric.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.fabric_diffuse_scattering.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.fabric_diffuse_scattering.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.fabric_diffuse_scattering.links heading=4-%}
    </p>
    <h3>show_diffuse</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">enables/disables diffuse reflectance</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.show_diffuse.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.show_diffuse.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.show_diffuse.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.emission.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.emission.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.emission.links heading=4-%}
    </p>
    <h3>show_emission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">enables/disable emission</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.show_emission.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.show_emission.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.show_emission.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Fabric attributes</summary>
  <p>
    <h3>show_specular</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Enables/disables specular fabric lobes</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.show_specular.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.show_specular.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.show_specular.links heading=4-%}
    </p>
    <h3>use_UVs_for_thread_direction</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Use UV texture coordinates to compute thread direction (along dPds). Switch OFF for seamless camera aligned thread direction.  The warp_thread_direction parameter rotates this direction in tangent space.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.use_UVs_for_thread_direction.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.use_UVs_for_thread_direction.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.use_UVs_for_thread_direction.links heading=4-%}
    </p>
    <h3>use_independent_weft_attributes</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Use a separate set of attributes for the 'weft' thread specular response.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.use_independent_weft_attributes.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.use_independent_weft_attributes.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.use_independent_weft_attributes.links heading=4-%}
    </p>
    <h3>warp_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Color of the fabric specular highlights. Or if 'use independent weft attributes' is 'true,' just the color of the fabric specular highlights of the warp threads.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.warp_color.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.warp_color.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.warp_color.links heading=4-%}
    </p>
    <h3>warp_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.75
      <p class="scene-class-comments">Roughness of the fabric specular highlights. Or if 'use independent weft attributes' is 'true,' just the roughness of the fabric specular highlights of the warp threads.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.warp_roughness.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.warp_roughness.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.warp_roughness.links heading=4-%}
    </p>
    <h3>weft_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Color of the fabric specular highlights from the weft threads.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.weft_color.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.weft_color.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.weft_color.links heading=4-%}
    </p>
    <h3>weft_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.75
      <p class="scene-class-comments">Roughness of the fabric specular highlights from the weft threads.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.weft_roughness.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.weft_roughness.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.weft_roughness.links heading=4-%}
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
      <p class="scene-class-comments">fuzz mask</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.fuzz.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.fuzz.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.fuzz.links heading=4-%}
    </p>
    <h3>fuzz_albedo</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Color of the fuzz highlights.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.fuzz_albedo.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.fuzz_albedo.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.fuzz_albedo.links heading=4-%}
    </p>
    <h3>fuzz_normal</h3>
    <p class="scene-class-type">
      <b>NormalMap</b>
      <br>
      default: None
      <p class="scene-class-comments">specifies an independent shading normal (normal map) for the fuzz lobe</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.fuzz_normal.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.fuzz_normal.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.fuzz_normal.links heading=4-%}
    </p>
    <h3>fuzz_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">controls the amount of infuence of the alternate fuzz normal</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.fuzz_normal_dial.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.fuzz_normal_dial.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.fuzz_normal_dial.links heading=4-%}
    </p>
    <h3>fuzz_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.25
      <p class="scene-class-comments">Lower values result in glancing angle highlights while higher values result in a broad, uniform coverage</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.fuzz_roughness.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.fuzz_roughness.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.fuzz_roughness.links heading=4-%}
    </p>
    <h3>show_fuzz</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables/disables fuzz lobe</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.show_fuzz.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.show_fuzz.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.show_fuzz.links heading=4-%}
    </p>
    <h3>use_absorbing_fuzz_fibers</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Specify whether dark fuzz fibers absorb energy or transmit it to the layers below.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.use_absorbing_fuzz_fibers.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.use_absorbing_fuzz_fibers.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.use_absorbing_fuzz_fibers.links heading=4-%}
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
      <p class="scene-class-comments">enables/disables glitter model (binary 0|1 for plausibility)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter.links heading=4-%}
    </p>
    <h3>glitter_LOD_quality</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.5
      <p class="scene-class-comments">controls quality of glitter at distances where individual flakes cannot be perceived; at lower values, approximation kicks in earlier</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_LOD_quality.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_LOD_quality.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_LOD_quality.links heading=4-%}
    </p>
    <h3>glitter_approximate_for_secondary_rays</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">use an approximation to shade glitter for non-mirror secondary rays</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_approximate_for_secondary_rays.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_approximate_for_secondary_rays.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_approximate_for_secondary_rays.links heading=4-%}
    </p>
    <h3>glitter_color_A</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">base flake color (use physical metallic color values)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_color_A.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_color_A.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_color_A.links heading=4-%}
    </p>
    <h3>glitter_color_B</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">base flake color (use physical metallic color values)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_color_B.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_color_B.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_color_B.links heading=4-%}
    </p>
    <h3>glitter_color_hue_variation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">introduce hue variation in flake color centered at the base flake color's hue on the hue wheel</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_color_hue_variation.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_color_hue_variation.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_color_hue_variation.links heading=4-%}
    </p>
    <h3>glitter_color_saturation_variation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">introduce saturation variation in flake color centered at the base flake color's saturation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_color_saturation_variation.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_color_saturation_variation.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_color_saturation_variation.links heading=4-%}
    </p>
    <h3>glitter_color_value_variation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">introduce value variation in flake color centered at the base flake color's value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_color_value_variation.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_color_value_variation.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_color_value_variation.links heading=4-%}
    </p>
    <h3>glitter_compensate_reference_space_deformation</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">(In ReferenceSpace) Compensates for stretch/compression/shear in glitter shapes resulting from animation etc</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_compensate_reference_space_deformation.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_compensate_reference_space_deformation.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_compensate_reference_space_deformation.links heading=4-%}
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
      <p class="scene-class-comments">developer debug visualization modes</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_debug_mode.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_debug_mode.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_debug_mode.links heading=4-%}
    </p>
    <h3>glitter_density</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">controls the number of flakes per unit length; larger density packs more flakes into same space</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_density.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_density.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_density.links heading=4-%}
    </p>
    <h3>glitter_jitter</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Controls how much the flakes are randomly offset from a regular grid</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_jitter.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_jitter.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_jitter.links heading=4-%}
    </p>
    <h3>glitter_layering_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;physical&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;additive&rdquo;<br>
      <p class="scene-class-comments">layering mode for glitter on top of the under material. physical: conserves energy and glitter attenuates under material, additive: breaks energy conservation but glitter is never darker than the under material (eg. use case: snow)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_layering_mode.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_layering_mode.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_layering_mode.links heading=4-%}
    </p>
    <h3>glitter_randomness</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.5
      <p class="scene-class-comments">randomness of flake orientation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_randomness.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_randomness.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_randomness.links heading=4-%}
    </p>
    <h3>glitter_roughness_A</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.14000000059604645
      <p class="scene-class-comments">specular roughness of individual flakes (0 makes flakes mirror-like)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_roughness_A.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_roughness_A.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_roughness_A.links heading=4-%}
    </p>
    <h3>glitter_roughness_B</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.14000000059604645
      <p class="scene-class-comments">specular roughness of individual flakes (0 makes flakes mirror-like)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_roughness_B.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_roughness_B.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_roughness_B.links heading=4-%}
    </p>
    <h3>glitter_seed</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 0
      <p class="scene-class-comments">The seed for the glitter random number generator</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_seed.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_seed.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_seed.links heading=4-%}
    </p>
    <h3>glitter_size_A</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">size of the flakes.  Apparent flake size may vary based on how much the flake spheres intersect the surface</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_size_A.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_size_A.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_size_A.links heading=4-%}
    </p>
    <h3>glitter_size_B</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">size of the flakes.  Apparent flake size may vary based on how much the flake spheres intersect the surface</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_size_B.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_size_B.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_size_B.links heading=4-%}
    </p>
    <h3>glitter_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;4 = &ldquo;object&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;reference&rdquo; (default)<br>
      <p class="scene-class-comments">The space to calculate the worley noise in, defaults to reference space</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_space.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_space.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_space.links heading=4-%}
    </p>
    <h3>glitter_style_A_frequency</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">0 implies none of this style, 1 implies all the flakes will get this style</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_style_A_frequency.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_style_A_frequency.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_style_A_frequency.links heading=4-%}
    </p>
    <h3>glitter_style_B_frequency</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">0 implies none of this style, 1 implies all the flakes will get this style</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_style_B_frequency.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_style_B_frequency.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_style_B_frequency.links heading=4-%}
    </p>
    <h3>glitter_texture_A</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      <br>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_texture_A.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_texture_A.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_texture_A.links heading=4-%}
    </p>
    <h3>glitter_texture_B</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      <br>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_texture_B.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_texture_B.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_texture_B.links heading=4-%}
    </p>
    <h3>glitter_texture_orientation_randomness</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.15000000596046448
      <p class="scene-class-comments">randomly orient each texture</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_texture_orientation_randomness.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_texture_orientation_randomness.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.glitter_texture_orientation_randomness.links heading=4-%}
    </p>
    <h3>show_glitter</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables/disables glitter lobes</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.show_glitter.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.show_glitter.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.show_glitter.links heading=4-%}
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
      <p class="scene-class-comments">specifies an alternate shading normal in the tangent frame (normal map)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.input_normal.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.input_normal.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.input_normal.links heading=4-%}
    </p>
    <h3>input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">controls the amount of influence of the alternate normal</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.input_normal_dial.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.input_normal_dial.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.input_normal_dial.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Threads attributes</summary>
  <p>
    <h3>warp_thread_coverage</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.75
      <p class="scene-class-comments">When set to 1, creates specular highlights only relative to the warp thread direction. When less than one, starts acting like a 'woven' fabric with specular contributions added in by a corresponding 'weft' thread direction, perpendicular to the 'warp' thread direction.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.warp_thread_coverage.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.warp_thread_coverage.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.warp_thread_coverage.links heading=4-%}
    </p>
    <h3>warp_thread_direction</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 0 ]
      <p class="scene-class-comments">Direction of the major/warp thread for the fabric. The fabric highlights will be relative to this direction.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.warp_thread_direction.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.warp_thread_direction.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.warp_thread_direction.links heading=4-%}
    </p>
    <h3>warp_thread_elevation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">This attribute can be used to 'elevate/rotate' the threads from their default direction. When laying flat on the surface (thread_direction.z=0), a value around 45 works well for 'silky' looks. Range - -90, +90. When threads are upright (thread_direction.z=1), this attribute can be used to 'dishevel' the threads and create a 'velvety' look (see wiki).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.warp_thread_elevation.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.warp_thread_elevation.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.warp_thread_elevation.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.extra_aovs.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.extra_aovs.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.extra_aovs.links heading=4-%}
    </p>
    <h3>invisible_refractive_cryptomatte</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Indicates whether material should/should not appear in the refractive cryptomatte layers</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.invisible_refractive_cryptomatte.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.invisible_refractive_cryptomatte.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.invisible_refractive_cryptomatte.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.label.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.label.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.label.links heading=4-%}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.priority.images data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.priority.videos data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaFabricMaterial.attributes.priority.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.materials.DwaFabricMaterial-%}