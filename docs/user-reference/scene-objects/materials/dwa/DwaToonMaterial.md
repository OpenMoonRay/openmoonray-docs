---
title: DwaToonMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DwaToonMaterial
{%-include overview.html data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.gallery data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>prevent_light_culling</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">WARNING: Experimental and must be used with max_depth: 0 and only for non-photoreal looks. Prevents culling of lights so surfaces can be lit purely with respect to the shading normal irrespective of geometry</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.prevent_light_culling.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.prevent_light_culling.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.prevent_light_culling.links heading=4-%}
    </p>
    <h3>specular</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">enables/disables specular reflections (binary 0|1 for plausibility)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.specular.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.specular.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.specular.links heading=4-%}
    </p>
    <h3>sss_trace_set</h3>
    <p class="scene-class-type">
      <b>TraceSet</b>
      <br>
      default: None
      <p class="scene-class-comments">Set of geometries that contribute neighboring subsurface points. By default, only the geometry associated with this material contributes to subsurface. If you want adjacent geometry with different material to contribute as well, specify all those parts here.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.sss_trace_set.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.sss_trace_set.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.sss_trace_set.links heading=4-%}
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
      <p class="scene-class-comments">enables/disables clearcoat (binary 0|1 for plausibility)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.clearcoat.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.clearcoat.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.clearcoat.links heading=4-%}
    </p>
    <h3>clearcoat_attenuation_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 0.5, 0.5, 0.5 ]
      <p class="scene-class-comments">the attenuation color of the clearcoat when 'cleacoat thickness' &gt; 0</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.clearcoat_attenuation_color.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.clearcoat_attenuation_color.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.clearcoat_attenuation_color.links heading=4-%}
    </p>
    <h3>clearcoat_bending</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">(advanced, recommended ON) bends rays based on the clearcoat-refractive-index before evaluating the lobes under clearcoat</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.clearcoat_bending.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.clearcoat_bending.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.clearcoat_bending.links heading=4-%}
    </p>
    <h3>clearcoat_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;Beckmann&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;GGX&rdquo; (default)<br>
      <p class="scene-class-comments">sets the normal distribution function for clearcoat.  GGX is currently isotropic only</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.clearcoat_model.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.clearcoat_model.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.clearcoat_model.links heading=4-%}
    </p>
    <h3>clearcoat_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">controls the amount of infuence of the alternate clearcoat normal</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.clearcoat_normal_dial.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.clearcoat_normal_dial.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.clearcoat_normal_dial.links heading=4-%}
    </p>
    <h3>clearcoat_refractive_index</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.5
      <p class="scene-class-comments">defines the Fresnel behavior</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.clearcoat_refractive_index.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.clearcoat_refractive_index.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.clearcoat_refractive_index.links heading=4-%}
    </p>
    <h3>clearcoat_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.1
      <p class="scene-class-comments">the roughness of the clearcoat lobe</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.clearcoat_roughness.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.clearcoat_roughness.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.clearcoat_roughness.links heading=4-%}
    </p>
    <h3>clearcoat_thickness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">the thickness of the virtual clearcoat layer. Values &gt; 0 enable absorption</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.clearcoat_thickness.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.clearcoat_thickness.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.clearcoat_thickness.links heading=4-%}
    </p>
    <h3>independent_clearcoat_normal</h3>
    <p class="scene-class-type">
      <b>NormalMap</b>
      <br>
      default: None
      <p class="scene-class-comments">specifies an independent shading normal (normal map) for the clearcoat lobe</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.independent_clearcoat_normal.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.independent_clearcoat_normal.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.independent_clearcoat_normal.links heading=4-%}
    </p>
    <h3>show_clearcoat</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">enables/disables clearcoat</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.show_clearcoat.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.show_clearcoat.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.show_clearcoat.links heading=4-%}
    </p>
    <h3>use_independent_clearcoat_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">specifies whether the clearcoat lobe should use an independent normal</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.use_independent_clearcoat_normal.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.use_independent_clearcoat_normal.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.use_independent_clearcoat_normal.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.casts_caustics.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.casts_caustics.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.casts_caustics.links heading=4-%}
    </p>
    <h3>presence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.presence.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.presence.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.presence.links heading=4-%}
    </p>
    <h3>thin_geometry</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">enables proper shading of infinitely thin geometry such as paper or leaves.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.thin_geometry.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.thin_geometry.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.thin_geometry.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.albedo.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.albedo.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.albedo.links heading=4-%}
    </p>
    <h3>bssrdf</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;normalized diffusion&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;dipole&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;random walk&rdquo;<br>
      <p class="scene-class-comments">0 for NormalizedDiffuse, 1 for Dipole, 2 for random walk</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.bssrdf.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.bssrdf.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.bssrdf.links heading=4-%}
    </p>
    <h3>colors</h3>
    <p class="scene-class-type">
      <b>RgbVector</b>
      <br>
      default: [[ 0, 0, 0 ], [ 0.25, 0.25, 0.25 ], [ 0.75, 0.75, 0.75 ], [ 1, 1, 1 ]]
      <p class="scene-class-comments">List of colors on the ramp</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.colors.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.colors.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.colors.links heading=4-%}
    </p>
    <h3>crease_attenuation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">This mitigates the over-brightening around creases which random walk SSS can cause.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.crease_attenuation.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.crease_attenuation.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.crease_attenuation.links heading=4-%}
    </p>
    <h3>diffuse_flatness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Flattens out the diffuse response by bending the normal towards the light direction</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.diffuse_flatness.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.diffuse_flatness.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.diffuse_flatness.links heading=4-%}
    </p>
    <h3>diffuse_flatness_falloff</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Fades out flatness with respect to light direction</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.diffuse_flatness_falloff.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.diffuse_flatness_falloff.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.diffuse_flatness_falloff.links heading=4-%}
    </p>
    <h3>diffuse_lightset</h3>
    <p class="scene-class-type">
      <b>LightSet</b>
      <br>
      default: None
      <p class="scene-class-comments">lightset to use for diffuse lobes</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.diffuse_lightset.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.diffuse_lightset.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.diffuse_lightset.links heading=4-%}
    </p>
    <h3>diffuse_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;oren-nayar&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;ramp&rdquo;<br>
      <p class="scene-class-comments">The method used to render the diffuse response.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.diffuse_model.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.diffuse_model.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.diffuse_model.links heading=4-%}
    </p>
    <h3>diffuse_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Roughness of the diffuse shading.  If the value is zero a Lambertian model is used.  If it's above zero the Oren Nayar model is used.   Not compatible with subsurface scattering.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.diffuse_roughness.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.diffuse_roughness.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.diffuse_roughness.links heading=4-%}
    </p>
    <h3>diffuse_transmission</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">multiplier on the amount of light that is transmitted through the surface.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.diffuse_transmission.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.diffuse_transmission.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.diffuse_transmission.links heading=4-%}
    </p>
    <h3>diffuse_transmission_blending_behavior</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;RGB&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;Monochromatic&rdquo; (default)<br>
      <p class="scene-class-comments">Controls how diffuse transmission color attenuates diffuse reflection</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.diffuse_transmission_blending_behavior.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.diffuse_transmission_blending_behavior.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.diffuse_transmission_blending_behavior.links heading=4-%}
    </p>
    <h3>diffuse_transmission_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">the color/amount of light that is transmitted through the surface.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.diffuse_transmission_color.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.diffuse_transmission_color.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.diffuse_transmission_color.links heading=4-%}
    </p>
    <h3>enable_sss_input_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">enables sampling the normal map for sss samples. More accurate but potentially expensive</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.enable_sss_input_normal.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.enable_sss_input_normal.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.enable_sss_input_normal.links heading=4-%}
    </p>
    <h3>extend_ramp</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Extends the last ramp color to unlit portions. IMPORTANT: Only works in conjuction with prevent_light_culling ON and visible_shadows OFF</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.extend_ramp.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.extend_ramp.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.extend_ramp.links heading=4-%}
    </p>
    <h3>interpolations</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |<br>&emsp;&emsp;&emsp;Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.interpolations.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.interpolations.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.interpolations.links heading=4-%}
    </p>
    <h3>positions</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">ramp positions, maximum 10 allowed</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.positions.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.positions.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.positions.links heading=4-%}
    </p>
    <h3>ramp_color_multiplier0</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bindable multiplier on the ramp color</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier0.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier0.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier0.links heading=4-%}
    </p>
    <h3>ramp_color_multiplier1</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bindable multiplier on the ramp color</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier1.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier1.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier1.links heading=4-%}
    </p>
    <h3>ramp_color_multiplier2</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bindable multiplier on the ramp color</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier2.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier2.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier2.links heading=4-%}
    </p>
    <h3>ramp_color_multiplier3</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bindable multiplier on the ramp color</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier3.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier3.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier3.links heading=4-%}
    </p>
    <h3>ramp_color_multiplier4</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bindable multiplier on the ramp color</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier4.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier4.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier4.links heading=4-%}
    </p>
    <h3>ramp_color_multiplier5</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bindable multiplier on the ramp color</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier5.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier5.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier5.links heading=4-%}
    </p>
    <h3>ramp_color_multiplier6</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bindable multiplier on the ramp color</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier6.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier6.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier6.links heading=4-%}
    </p>
    <h3>ramp_color_multiplier7</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bindable multiplier on the ramp color</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier7.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier7.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier7.links heading=4-%}
    </p>
    <h3>ramp_color_multiplier8</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bindable multiplier on the ramp color</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier8.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier8.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier8.links heading=4-%}
    </p>
    <h3>ramp_color_multiplier9</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Bindable multiplier on the ramp color</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier9.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier9.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_color_multiplier9.links heading=4-%}
    </p>
    <h3>ramp_input_scale</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Factor to apply to the input diffuse reflectance before using it as the input to the ramp</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_input_scale.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_input_scale.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_input_scale.links heading=4-%}
    </p>
    <h3>ramp_position_offset0</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset0.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset0.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset0.links heading=4-%}
    </p>
    <h3>ramp_position_offset1</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset1.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset1.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset1.links heading=4-%}
    </p>
    <h3>ramp_position_offset2</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset2.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset2.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset2.links heading=4-%}
    </p>
    <h3>ramp_position_offset3</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset3.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset3.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset3.links heading=4-%}
    </p>
    <h3>ramp_position_offset4</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset4.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset4.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset4.links heading=4-%}
    </p>
    <h3>ramp_position_offset5</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset5.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset5.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset5.links heading=4-%}
    </p>
    <h3>ramp_position_offset6</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset6.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset6.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset6.links heading=4-%}
    </p>
    <h3>ramp_position_offset7</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset7.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset7.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset7.links heading=4-%}
    </p>
    <h3>ramp_position_offset8</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset8.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset8.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset8.links heading=4-%}
    </p>
    <h3>ramp_position_offset9</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset9.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset9.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.ramp_position_offset9.links heading=4-%}
    </p>
    <h3>resolve_self_intersections</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">tries to resolve self-intersecting geometry automatically by only evaluating 'exiting' intersections for subsurface evaluations</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.resolve_self_intersections.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.resolve_self_intersections.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.resolve_self_intersections.links heading=4-%}
    </p>
    <h3>scattering_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the subsurface scattering 'falloff' color</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.scattering_color.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.scattering_color.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.scattering_color.links heading=4-%}
    </p>
    <h3>scattering_radius</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">the distance the light scatters beneath the surface. When 0 surface diffuse (lambertian or toon) is used</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.scattering_radius.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.scattering_radius.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.scattering_radius.links heading=4-%}
    </p>
    <h3>show_diffuse</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">enables/disables diffuse reflectance</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.show_diffuse.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.show_diffuse.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.show_diffuse.links heading=4-%}
    </p>
    <h3>terminator_shift</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.05
      <p class="scene-class-comments">Controls how the diffuse ligthing falls off.  Values greater than 0.0 shift the falloff point closer to the light source and values less than 0.0 shift the falloff point further away</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.terminator_shift.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.terminator_shift.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.terminator_shift.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.emission.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.emission.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.emission.links heading=4-%}
    </p>
    <h3>show_emission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">enables/disable emission</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.show_emission.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.show_emission.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.show_emission.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.fuzz.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.fuzz.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.fuzz.links heading=4-%}
    </p>
    <h3>fuzz_albedo</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Color of the fuzz highlights.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.fuzz_albedo.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.fuzz_albedo.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.fuzz_albedo.links heading=4-%}
    </p>
    <h3>fuzz_normal</h3>
    <p class="scene-class-type">
      <b>NormalMap</b>
      <br>
      default: None
      <p class="scene-class-comments">specifies an independent shading normal (normal map) for the fuzz lobe</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.fuzz_normal.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.fuzz_normal.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.fuzz_normal.links heading=4-%}
    </p>
    <h3>fuzz_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">controls the amount of infuence of the alternate fuzz normal</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.fuzz_normal_dial.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.fuzz_normal_dial.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.fuzz_normal_dial.links heading=4-%}
    </p>
    <h3>fuzz_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.25
      <p class="scene-class-comments">Lower values result in glancing angle highlights while higher values result in a broad, uniform coverage</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.fuzz_roughness.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.fuzz_roughness.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.fuzz_roughness.links heading=4-%}
    </p>
    <h3>show_fuzz</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables/disables fuzz lobe</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.show_fuzz.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.show_fuzz.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.show_fuzz.links heading=4-%}
    </p>
    <h3>use_absorbing_fuzz_fibers</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Specify whether dark fuzz fibers absorb energy or transmit it to the layers below.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.use_absorbing_fuzz_fibers.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.use_absorbing_fuzz_fibers.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.use_absorbing_fuzz_fibers.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter.links heading=4-%}
    </p>
    <h3>glitter_LOD_quality</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.5
      <p class="scene-class-comments">controls quality of glitter at distances where individual flakes cannot be perceived; at lower values, approximation kicks in earlier</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_LOD_quality.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_LOD_quality.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_LOD_quality.links heading=4-%}
    </p>
    <h3>glitter_approximate_for_secondary_rays</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">use an approximation to shade glitter for non-mirror secondary rays</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_approximate_for_secondary_rays.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_approximate_for_secondary_rays.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_approximate_for_secondary_rays.links heading=4-%}
    </p>
    <h3>glitter_color_A</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">base flake color (use physical metallic color values)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_color_A.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_color_A.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_color_A.links heading=4-%}
    </p>
    <h3>glitter_color_B</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">base flake color (use physical metallic color values)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_color_B.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_color_B.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_color_B.links heading=4-%}
    </p>
    <h3>glitter_color_hue_variation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">introduce hue variation in flake color centered at the base flake color's hue on the hue wheel</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_color_hue_variation.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_color_hue_variation.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_color_hue_variation.links heading=4-%}
    </p>
    <h3>glitter_color_saturation_variation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">introduce saturation variation in flake color centered at the base flake color's saturation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_color_saturation_variation.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_color_saturation_variation.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_color_saturation_variation.links heading=4-%}
    </p>
    <h3>glitter_color_value_variation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">introduce value variation in flake color centered at the base flake color's value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_color_value_variation.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_color_value_variation.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_color_value_variation.links heading=4-%}
    </p>
    <h3>glitter_compensate_reference_space_deformation</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">(In ReferenceSpace) Compensates for stretch/compression/shear in glitter shapes resulting from animation etc</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_compensate_reference_space_deformation.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_compensate_reference_space_deformation.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_compensate_reference_space_deformation.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_debug_mode.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_debug_mode.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_debug_mode.links heading=4-%}
    </p>
    <h3>glitter_density</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">controls the number of flakes per unit length; larger density packs more flakes into same space</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_density.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_density.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_density.links heading=4-%}
    </p>
    <h3>glitter_jitter</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Controls how much the flakes are randomly offset from a regular grid</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_jitter.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_jitter.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_jitter.links heading=4-%}
    </p>
    <h3>glitter_layering_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;physical&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;additive&rdquo;<br>
      <p class="scene-class-comments">layering mode for glitter on top of the under material. physical: conserves energy and glitter attenuates under material, additive: breaks energy conservation but glitter is never darker than the under material (eg. use case: snow)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_layering_mode.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_layering_mode.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_layering_mode.links heading=4-%}
    </p>
    <h3>glitter_randomness</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.5
      <p class="scene-class-comments">randomness of flake orientation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_randomness.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_randomness.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_randomness.links heading=4-%}
    </p>
    <h3>glitter_roughness_A</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.14
      <p class="scene-class-comments">specular roughness of individual flakes (0 makes flakes mirror-like)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_roughness_A.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_roughness_A.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_roughness_A.links heading=4-%}
    </p>
    <h3>glitter_roughness_B</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.14
      <p class="scene-class-comments">specular roughness of individual flakes (0 makes flakes mirror-like)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_roughness_B.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_roughness_B.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_roughness_B.links heading=4-%}
    </p>
    <h3>glitter_seed</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 0
      <p class="scene-class-comments">The seed for the glitter random number generator</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_seed.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_seed.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_seed.links heading=4-%}
    </p>
    <h3>glitter_size_A</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">size of the flakes.  Apparent flake size may vary based on how much the flake spheres intersect the surface</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_size_A.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_size_A.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_size_A.links heading=4-%}
    </p>
    <h3>glitter_size_B</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">size of the flakes.  Apparent flake size may vary based on how much the flake spheres intersect the surface</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_size_B.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_size_B.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_size_B.links heading=4-%}
    </p>
    <h3>glitter_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;4 = &ldquo;object&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;reference&rdquo; (default)<br>
      <p class="scene-class-comments">The space to calculate the worley noise in, defaults to reference space</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_space.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_space.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_space.links heading=4-%}
    </p>
    <h3>glitter_style_A_frequency</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">0 implies none of this style, 1 implies all the flakes will get this style</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_style_A_frequency.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_style_A_frequency.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_style_A_frequency.links heading=4-%}
    </p>
    <h3>glitter_style_B_frequency</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">0 implies none of this style, 1 implies all the flakes will get this style</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_style_B_frequency.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_style_B_frequency.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_style_B_frequency.links heading=4-%}
    </p>
    <h3>glitter_texture_A</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      <br>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_texture_A.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_texture_A.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_texture_A.links heading=4-%}
    </p>
    <h3>glitter_texture_B</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      <br>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_texture_B.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_texture_B.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_texture_B.links heading=4-%}
    </p>
    <h3>glitter_texture_orientation_randomness</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.15
      <p class="scene-class-comments">randomly orient each texture</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_texture_orientation_randomness.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_texture_orientation_randomness.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.glitter_texture_orientation_randomness.links heading=4-%}
    </p>
    <h3>show_glitter</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables/disables glitter lobes</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.show_glitter.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.show_glitter.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.show_glitter.links heading=4-%}
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
      <p class="scene-class-comments">controls the strength of the iridescence effect</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence.links heading=4-%}
    </p>
    <h3>iridescence_apply_to</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;primary specular&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;clearcoat/moisture specular&rdquo;<br>
      <p class="scene-class-comments">Apply iridescence to primary specular lobe or clearcoat/moisture lobe</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_apply_to.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_apply_to.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_apply_to.links heading=4-%}
    </p>
    <h3>iridescence_at_0_incidence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Iridescence effect at 0 degree viewing angle</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_at_0_incidence.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_at_0_incidence.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_at_0_incidence.links heading=4-%}
    </p>
    <h3>iridescence_at_90_incidence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Iridescence effect at 90 degree viewing angle</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_at_90_incidence.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_at_90_incidence.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_at_90_incidence.links heading=4-%}
    </p>
    <h3>iridescence_color_control</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;use hue interpolation&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;use ramp&rdquo;<br>
      <p class="scene-class-comments">use hue interpolation: automatically cycles through hue wheel, use ramp: user specified color ramp</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_color_control.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_color_control.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_color_control.links heading=4-%}
    </p>
    <h3>iridescence_colors</h3>
    <p class="scene-class-type">
      <b>RgbVector</b>
      <br>
      default: [[ 1, 0, 0 ], [ 1, 1, 0 ], [ 0, 1, 0 ], [ 0, 1, 1 ], [ 0, 0, 1 ], [ 1, 0, 1 ], [ 1, 0, 0 ]]
      <p class="scene-class-comments">List of colors on the ramp</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_colors.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_colors.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_colors.links heading=4-%}
    </p>
    <h3>iridescence_exponent</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Tightens or broadens the distribution of colors</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_exponent.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_exponent.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_exponent.links heading=4-%}
    </p>
    <h3>iridescence_flip_hue_direction</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">flip interpolation around the hue wheel to counter-clockwise direction</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_flip_hue_direction.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_flip_hue_direction.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_flip_hue_direction.links heading=4-%}
    </p>
    <h3>iridescence_interpolations</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |<br>&emsp;&emsp;&emsp;Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_interpolations.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_interpolations.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_interpolations.links heading=4-%}
    </p>
    <h3>iridescence_positions</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">ramp positions</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_positions.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_positions.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_positions.links heading=4-%}
    </p>
    <h3>iridescence_primary_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 0, 0 ]
      <p class="scene-class-comments">First color to interpolate from around the hue wheel</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_primary_color.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_primary_color.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_primary_color.links heading=4-%}
    </p>
    <h3>iridescence_ramp_interpolation_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;RGB&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;HSV&rdquo;<br>
      <p class="scene-class-comments">RGB: lerp in RGB space which matches UI preview but can lose saturation, HSV: lerp in HSV space which preserves saturation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_ramp_interpolation_mode.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_ramp_interpolation_mode.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_ramp_interpolation_mode.links heading=4-%}
    </p>
    <h3>iridescence_secondary_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 0, 0 ]
      <p class="scene-class-comments">Second color to interpolate to around the hue wheel</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_secondary_color.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_secondary_color.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_secondary_color.links heading=4-%}
    </p>
    <h3>iridescence_thickness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Controls how much the color spectrum is repeated</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_thickness.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_thickness.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.iridescence_thickness.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.input_normal.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.input_normal.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.input_normal.links heading=4-%}
    </p>
    <h3>input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">controls the amount of influence of the alternate normal</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.input_normal_dial.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.input_normal_dial.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.input_normal_dial.links heading=4-%}
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
      <p class="scene-class-comments">Controls the amount roughness compensation from the normal map AA strategy.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.normal_AA_dial.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.normal_AA_dial.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.normal_AA_dial.links heading=4-%}
    </p>
    <h3>normal_AA_strategy</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;none&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;toksvig&rdquo;<br>
      <p class="scene-class-comments">Normal map anti-aliasing strategy to use - 'none' uses regular mip-mapping, 'toksvig' increases specular roughness corresponding to the geometric details filtered out because of mip-mapping.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.normal_AA_strategy.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.normal_AA_strategy.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.normal_AA_strategy.links heading=4-%}
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
      <p class="scene-class-comments">controls the shape of the primary reflection</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.anisotropy.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.anisotropy.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.anisotropy.links heading=4-%}
    </p>
    <h3>metallic</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">enables/disables metallic model (binary 0|1 for plausibility)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.metallic.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.metallic.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.metallic.links heading=4-%}
    </p>
    <h3>metallic_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the overall reflection color, defines Fresnel behavior</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.metallic_color.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.metallic_color.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.metallic_color.links heading=4-%}
    </p>
    <h3>metallic_edge_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the reflection color at grazing angles, defines Fresnel behavior</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.metallic_edge_color.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.metallic_edge_color.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.metallic_edge_color.links heading=4-%}
    </p>
    <h3>refractive_index</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.5
      <p class="scene-class-comments">defines the Fresnel behavior (affects only refraction when model is Toon)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.refractive_index.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.refractive_index.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.refractive_index.links heading=4-%}
    </p>
    <h3>roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.5
      <p class="scene-class-comments">the roughness of the surface</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.roughness.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.roughness.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.roughness.links heading=4-%}
    </p>
    <h3>shading_tangent</h3>
    <p class="scene-class-type">
      <b>Vec2f</b> <i>bindable</i>
      <br>
      default: [ 1, 0 ]
      <p class="scene-class-comments">controls the orientation of anistropy</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.shading_tangent.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.shading_tangent.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.shading_tangent.links heading=4-%}
    </p>
    <h3>show_specular</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">enables/disables specular reflections</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.show_specular.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.show_specular.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.show_specular.links heading=4-%}
    </p>
    <h3>specular_lightset</h3>
    <p class="scene-class-type">
      <b>LightSet</b>
      <br>
      default: None
      <p class="scene-class-comments">lightset to use for specular lobes</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.specular_lightset.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.specular_lightset.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.specular_lightset.links heading=4-%}
    </p>
    <h3>specular_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;Beckmann&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;GGX&rdquo; (default)<br>
          &nbsp;&nbsp;2 = &ldquo;Toon&rdquo;<br>
      <p class="scene-class-comments">sets the normal distribution function for specular.  GGX is currently isotropic only</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.specular_model.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.specular_model.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.specular_model.links heading=4-%}
    </p>
    <h3>toon_specular_enable_indirect_reflections</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">enables indirect GGX reflections for toon specular model</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_enable_indirect_reflections.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_enable_indirect_reflections.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_enable_indirect_reflections.links heading=4-%}
    </p>
    <h3>toon_specular_enable_input_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">enables sampling the normal map for toon toon specular</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_enable_input_normal.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_enable_input_normal.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_enable_input_normal.links heading=4-%}
    </p>
    <h3>toon_specular_fresnel_blend</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">The amount of fresnel to use for the toon specular response</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_fresnel_blend.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_fresnel_blend.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_fresnel_blend.links heading=4-%}
    </p>
    <h3>toon_specular_indirect_reflections_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">the intensity for the indirect reflections of the toon specular model</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_indirect_reflections_intensity.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_indirect_reflections_intensity.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_indirect_reflections_intensity.links heading=4-%}
    </p>
    <h3>toon_specular_indirect_reflections_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.5
      <p class="scene-class-comments">the roughness for the indirect reflections of the toon specular model</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_indirect_reflections_roughness.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_indirect_reflections_roughness.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_indirect_reflections_roughness.links heading=4-%}
    </p>
    <h3>toon_specular_input_U</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">input U / tangent for specular stretch</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_input_U.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_input_U.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_input_U.links heading=4-%}
    </p>
    <h3>toon_specular_input_V</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">input V / bitangent for specular stretch</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_input_V.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_input_V.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_input_V.links heading=4-%}
    </p>
    <h3>toon_specular_input_normal</h3>
    <p class="scene-class-type">
      <b>NormalMap</b>
      <br>
      default: None
      <p class="scene-class-comments">specifies an alternate shading normal for toon toon specular</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_input_normal.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_input_normal.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_input_normal.links heading=4-%}
    </p>
    <h3>toon_specular_input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">controls influence of input normal versus hair normal for toon toon specular</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_input_normal_dial.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_input_normal_dial.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_input_normal_dial.links heading=4-%}
    </p>
    <h3>toon_specular_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">The overall intensity of the toon specular response</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_intensity.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_intensity.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_intensity.links heading=4-%}
    </p>
    <h3>toon_specular_interpolations</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |<br>&emsp;&emsp;&emsp;Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_interpolations.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_interpolations.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_interpolations.links heading=4-%}
    </p>
    <h3>toon_specular_mult0</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult0.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult0.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult0.links heading=4-%}
    </p>
    <h3>toon_specular_mult1</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult1.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult1.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult1.links heading=4-%}
    </p>
    <h3>toon_specular_mult2</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult2.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult2.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult2.links heading=4-%}
    </p>
    <h3>toon_specular_mult3</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult3.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult3.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult3.links heading=4-%}
    </p>
    <h3>toon_specular_mult4</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult4.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult4.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult4.links heading=4-%}
    </p>
    <h3>toon_specular_mult5</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult5.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult5.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult5.links heading=4-%}
    </p>
    <h3>toon_specular_mult6</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult6.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult6.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult6.links heading=4-%}
    </p>
    <h3>toon_specular_mult7</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult7.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult7.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult7.links heading=4-%}
    </p>
    <h3>toon_specular_mult8</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult8.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult8.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult8.links heading=4-%}
    </p>
    <h3>toon_specular_mult9</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult9.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult9.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_mult9.links heading=4-%}
    </p>
    <h3>toon_specular_offset0</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset0.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset0.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset0.links heading=4-%}
    </p>
    <h3>toon_specular_offset1</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset1.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset1.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset1.links heading=4-%}
    </p>
    <h3>toon_specular_offset2</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset2.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset2.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset2.links heading=4-%}
    </p>
    <h3>toon_specular_offset3</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset3.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset3.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset3.links heading=4-%}
    </p>
    <h3>toon_specular_offset4</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset4.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset4.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset4.links heading=4-%}
    </p>
    <h3>toon_specular_offset5</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset5.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset5.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset5.links heading=4-%}
    </p>
    <h3>toon_specular_offset6</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset6.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset6.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset6.links heading=4-%}
    </p>
    <h3>toon_specular_offset7</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset7.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset7.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset7.links heading=4-%}
    </p>
    <h3>toon_specular_offset8</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset8.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset8.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset8.links heading=4-%}
    </p>
    <h3>toon_specular_offset9</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset9.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset9.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_offset9.links heading=4-%}
    </p>
    <h3>toon_specular_positions</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">ramp positions, maximum 10 allowed</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_positions.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_positions.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_positions.links heading=4-%}
    </p>
    <h3>toon_specular_ramp_input_scale</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Scales the input value x to the ramp lookup y, where x is based on the angle between the sample direction and normal.  This has the effect of squashing or stretching the ramp point positions towards/away from 0.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_ramp_input_scale.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_ramp_input_scale.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_ramp_input_scale.links heading=4-%}
    </p>
    <h3>toon_specular_stretch_u</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Amount to stretch or compress the specular in the u direction </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_stretch_u.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_stretch_u.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_stretch_u.links heading=4-%}
    </p>
    <h3>toon_specular_stretch_v</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Amount to stretch or compress the specular in the v direction </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_stretch_v.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_stretch_v.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_stretch_v.links heading=4-%}
    </p>
    <h3>toon_specular_tint</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_tint.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_tint.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_tint.links heading=4-%}
    </p>
    <h3>toon_specular_use_input_vectors_for_stretch</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">when checked, use input_U and V. otherwise use geometry dPds/t</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_use_input_vectors_for_stretch.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_use_input_vectors_for_stretch.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_use_input_vectors_for_stretch.links heading=4-%}
    </p>
    <h3>toon_specular_values</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">List of colors on the ramp</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_values.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_values.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.toon_specular_values.links heading=4-%}
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
      <p class="scene-class-comments">The amount of dispersion/chromatic-aberration via refractions. Lower this number to increase the effect. A value of 0 turns off dispersion. Around [25-80] makes sense for realistic glass. Lower values may look better on gemstones.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.dispersion_abbe_number.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.dispersion_abbe_number.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.dispersion_abbe_number.links heading=4-%}
    </p>
    <h3>independent_transmission_refractive_index</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.5
      <p class="scene-class-comments">defines a separate IOR for the bending of light with transmission</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.independent_transmission_refractive_index.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.independent_transmission_refractive_index.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.independent_transmission_refractive_index.links heading=4-%}
    </p>
    <h3>independent_transmission_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.5
      <p class="scene-class-comments">separate roughness for transmission</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.independent_transmission_roughness.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.independent_transmission_roughness.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.independent_transmission_roughness.links heading=4-%}
    </p>
    <h3>show_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">enables/disables refractive solid model</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.show_transmission.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.show_transmission.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.show_transmission.links heading=4-%}
    </p>
    <h3>transmission</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">enables/disables refractive solid model (binary 0|1 for plausibility)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.transmission.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.transmission.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.transmission.links heading=4-%}
    </p>
    <h3>transmission_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the desired color of transmitted light</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.transmission_color.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.transmission_color.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.transmission_color.links heading=4-%}
    </p>
    <h3>use_dispersion</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">use dispersion effects in transmission</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.use_dispersion.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.use_dispersion.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.use_dispersion.links heading=4-%}
    </p>
    <h3>use_independent_transmission_refractive_index</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">use a separate IOR for transmission</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.use_independent_transmission_refractive_index.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.use_independent_transmission_refractive_index.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.use_independent_transmission_refractive_index.links heading=4-%}
    </p>
    <h3>use_independent_transmission_roughness</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">use a separate roughness for transmission</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.use_independent_transmission_roughness.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.use_independent_transmission_roughness.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.use_independent_transmission_roughness.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.extra_aovs.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.extra_aovs.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.extra_aovs.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.label.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.label.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.label.links heading=4-%}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.priority.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.priority.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.priority.links heading=4-%}
    </p>
    <h3>record_reflected_cryptomatte</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Indicates whether the next reflected surface should appear in the reflected cryptomatte layers</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.record_reflected_cryptomatte.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.record_reflected_cryptomatte.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.record_reflected_cryptomatte.links heading=4-%}
    </p>
    <h3>record_refracted_cryptomatte</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Indicates whether the next refracted surface should appear in the refracted cryptomatte layers</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.record_refracted_cryptomatte.images data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.record_refracted_cryptomatte.videos data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaToonMaterial.attributes.record_refracted_cryptomatte.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.materials.DwaToonMaterial-%}