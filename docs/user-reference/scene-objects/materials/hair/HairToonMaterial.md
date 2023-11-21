---
title: HairToonMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# HairToonMaterial
{%-include overview.html data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.gallery data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>back_hair_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">(advanced only) hair color used for back-lit hair (transmission/forward reflectance)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.back_hair_color.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.back_hair_color.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.back_hair_color.links heading=4-%}
    </p>
    <h3>front_hair_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">(advanced only) hair color used for front-lit hair (backward reflectance)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.front_hair_color.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.front_hair_color.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.front_hair_color.links heading=4-%}
    </p>
    <h3>sss_trace_set</h3>
    <p class="scene-class-type">
      <b>TraceSet</b>
      <br>
      default: None
      <p class="scene-class-comments">Set of geometries that contribute neighboring subsurface points. By default, only the geometry associated with this material contributes to subsurface. If you want adjacent geometry with different material to contribute as well, specify all those parts here.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.sss_trace_set.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.sss_trace_set.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.sss_trace_set.links heading=4-%}
    </p>
    <h3>use_independent_front_and_back_hair_color</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">(advanced) use a separate hair color for front and back</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.use_independent_front_and_back_hair_color.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.use_independent_front_and_back_hair_color.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.use_independent_front_and_back_hair_color.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Common attributes</summary>
  <p>
    <h3>presence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.presence.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.presence.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.presence.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Diffuse attributes</summary>
  <p>
    <h3>hair_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.hair_color.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.hair_color.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.hair_color.links heading=4-%}
    </p>
    <h3>hair_diffuse</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Amount of hair diffuse</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.hair_diffuse.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.hair_diffuse.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.hair_diffuse.links heading=4-%}
    </p>
    <h3>show_hair_diffuse</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Show the hair diffuse lobe</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.show_hair_diffuse.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.show_hair_diffuse.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.show_hair_diffuse.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.emission.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.emission.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.emission.links heading=4-%}
    </p>
    <h3>show_emission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">enables/disable emission</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.show_emission.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.show_emission.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.show_emission.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Specular attributes</summary>
  <p>
    <h3>specular_1_ramp_input_scale</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Scales the input value x to the ramp lookup y, where x is based on the angle between the sample direction and normal.  This has the effect of squashing or stretching the ramp point positions towards/away from 0.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_ramp_input_scale.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_ramp_input_scale.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_ramp_input_scale.links heading=4-%}
    </p>
    <h3>specular_2_ramp_input_scale</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Scales the input value x to the ramp lookup y, where x is based on the angle between the sample direction and normal.  This has the effect of squashing or stretching the ramp point positions towards/away from 0.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_ramp_input_scale.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_ramp_input_scale.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_ramp_input_scale.links heading=4-%}
    </p>
    <h3>specular_3_ramp_input_scale</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Scales the input value x to the ramp lookup y, where x is based on the angle between the sample direction and normal.  This has the effect of squashing or stretching the ramp point positions towards/away from 0.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_ramp_input_scale.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_ramp_input_scale.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_ramp_input_scale.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Specular 1 attributes</summary>
  <p>
    <h3>specular_1_enable_indirect_reflections</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">enables indirect GGX reflections for toon specular model</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_enable_indirect_reflections.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_enable_indirect_reflections.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_enable_indirect_reflections.links heading=4-%}
    </p>
    <h3>specular_1_enable_input_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">enables sampling the normal map for toon specular 1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_enable_input_normal.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_enable_input_normal.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_enable_input_normal.links heading=4-%}
    </p>
    <h3>specular_1_indirect_reflections_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">the intensity for the indirect reflections of the toon specular model</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_indirect_reflections_intensity.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_indirect_reflections_intensity.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_indirect_reflections_intensity.links heading=4-%}
    </p>
    <h3>specular_1_indirect_reflections_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.5
      <p class="scene-class-comments">the roughness for the indirect reflections of the toon specular model</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_indirect_reflections_roughness.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_indirect_reflections_roughness.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_indirect_reflections_roughness.links heading=4-%}
    </p>
    <h3>specular_1_input_U</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">input U / tangent for specular stretch</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_input_U.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_input_U.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_input_U.links heading=4-%}
    </p>
    <h3>specular_1_input_V</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">input V / bitangent for specular stretch</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_input_V.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_input_V.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_input_V.links heading=4-%}
    </p>
    <h3>specular_1_input_normal</h3>
    <p class="scene-class-type">
      <b>NormalMap</b>
      <br>
      default: None
      <p class="scene-class-comments">specifies an alternate shading normal for toon specular 1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_input_normal.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_input_normal.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_input_normal.links heading=4-%}
    </p>
    <h3>specular_1_input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">controls influence of input normal versus hair normal for toon specular 1</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_input_normal_dial.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_input_normal_dial.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_input_normal_dial.links heading=4-%}
    </p>
    <h3>specular_1_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">The overall intensity of the specular response</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_intensity.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_intensity.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_intensity.links heading=4-%}
    </p>
    <h3>specular_1_interpolations</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |<br>&emsp;&emsp;&emsp;Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_interpolations.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_interpolations.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_interpolations.links heading=4-%}
    </p>
    <h3>specular_1_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;2 = &ldquo;Toon_Surface&rdquo; (default)<br>
          &nbsp;&nbsp;3 = &ldquo;Toon_Hair&rdquo;<br>
      <p class="scene-class-comments">sets the normal distribution function for specular</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_model.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_model.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_model.links heading=4-%}
    </p>
    <h3>specular_1_mult0</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult0.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult0.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult0.links heading=4-%}
    </p>
    <h3>specular_1_mult1</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult1.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult1.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult1.links heading=4-%}
    </p>
    <h3>specular_1_mult2</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult2.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult2.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult2.links heading=4-%}
    </p>
    <h3>specular_1_mult3</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult3.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult3.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult3.links heading=4-%}
    </p>
    <h3>specular_1_mult4</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult4.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult4.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult4.links heading=4-%}
    </p>
    <h3>specular_1_mult5</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult5.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult5.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult5.links heading=4-%}
    </p>
    <h3>specular_1_mult6</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult6.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult6.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult6.links heading=4-%}
    </p>
    <h3>specular_1_mult7</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult7.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult7.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult7.links heading=4-%}
    </p>
    <h3>specular_1_mult8</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult8.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult8.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult8.links heading=4-%}
    </p>
    <h3>specular_1_mult9</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult9.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult9.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_mult9.links heading=4-%}
    </p>
    <h3>specular_1_offset0</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset0.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset0.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset0.links heading=4-%}
    </p>
    <h3>specular_1_offset1</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset1.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset1.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset1.links heading=4-%}
    </p>
    <h3>specular_1_offset2</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset2.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset2.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset2.links heading=4-%}
    </p>
    <h3>specular_1_offset3</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset3.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset3.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset3.links heading=4-%}
    </p>
    <h3>specular_1_offset4</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset4.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset4.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset4.links heading=4-%}
    </p>
    <h3>specular_1_offset5</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset5.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset5.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset5.links heading=4-%}
    </p>
    <h3>specular_1_offset6</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset6.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset6.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset6.links heading=4-%}
    </p>
    <h3>specular_1_offset7</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset7.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset7.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset7.links heading=4-%}
    </p>
    <h3>specular_1_offset8</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset8.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset8.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset8.links heading=4-%}
    </p>
    <h3>specular_1_offset9</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset9.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset9.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_offset9.links heading=4-%}
    </p>
    <h3>specular_1_positions</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">ramp positions, maximum 10 allowed</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_positions.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_positions.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_positions.links heading=4-%}
    </p>
    <h3>specular_1_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.9
      <p class="scene-class-comments">The roughness of the toon specular.   Smaller values produce tighter highlights</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_roughness.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_roughness.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_roughness.links heading=4-%}
    </p>
    <h3>specular_1_show</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Show first toon specular lobe</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_show.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_show.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_show.links heading=4-%}
    </p>
    <h3>specular_1_stretch_u</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Amount to stretch or compress the specular in the u direction </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_stretch_u.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_stretch_u.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_stretch_u.links heading=4-%}
    </p>
    <h3>specular_1_stretch_v</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Amount to stretch or compress the specular in the v direction </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_stretch_v.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_stretch_v.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_stretch_v.links heading=4-%}
    </p>
    <h3>specular_1_tint</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_tint.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_tint.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_tint.links heading=4-%}
    </p>
    <h3>specular_1_use_input_vectors_for_stretch</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">when checked, use input_U and V. otherwise use geometry dPds/t</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_use_input_vectors_for_stretch.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_use_input_vectors_for_stretch.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_use_input_vectors_for_stretch.links heading=4-%}
    </p>
    <h3>specular_1_values</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">List of colors on the ramp</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_values.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_values.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_1_values.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Specular 2 attributes</summary>
  <p>
    <h3>specular_2_enable_indirect_reflections</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">enables indirect GGX reflections for toon specular model</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_enable_indirect_reflections.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_enable_indirect_reflections.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_enable_indirect_reflections.links heading=4-%}
    </p>
    <h3>specular_2_enable_input_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">enables sampling the normal map for toon specular 2</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_enable_input_normal.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_enable_input_normal.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_enable_input_normal.links heading=4-%}
    </p>
    <h3>specular_2_indirect_reflections_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">the intensity for the indirect reflections of the toon specular model</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_indirect_reflections_intensity.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_indirect_reflections_intensity.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_indirect_reflections_intensity.links heading=4-%}
    </p>
    <h3>specular_2_indirect_reflections_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.5
      <p class="scene-class-comments">the roughness for the indirect reflections of the toon specular model</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_indirect_reflections_roughness.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_indirect_reflections_roughness.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_indirect_reflections_roughness.links heading=4-%}
    </p>
    <h3>specular_2_input_U</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">input U / tangent for specular stretch</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_input_U.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_input_U.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_input_U.links heading=4-%}
    </p>
    <h3>specular_2_input_V</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">input V / bitangent for specular stretch</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_input_V.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_input_V.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_input_V.links heading=4-%}
    </p>
    <h3>specular_2_input_normal</h3>
    <p class="scene-class-type">
      <b>NormalMap</b>
      <br>
      default: None
      <p class="scene-class-comments">specifies an alternate shading normal for toon specular 2</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_input_normal.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_input_normal.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_input_normal.links heading=4-%}
    </p>
    <h3>specular_2_input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">controls influence of input normal versus hair normal for toon specular 2</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_input_normal_dial.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_input_normal_dial.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_input_normal_dial.links heading=4-%}
    </p>
    <h3>specular_2_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">The overall intensity of the specular response</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_intensity.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_intensity.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_intensity.links heading=4-%}
    </p>
    <h3>specular_2_interpolations</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |<br>&emsp;&emsp;&emsp;Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_interpolations.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_interpolations.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_interpolations.links heading=4-%}
    </p>
    <h3>specular_2_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;2 = &ldquo;Toon_Surface&rdquo; (default)<br>
          &nbsp;&nbsp;3 = &ldquo;Toon_Hair&rdquo;<br>
      <p class="scene-class-comments">sets the normal distribution function for specular</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_model.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_model.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_model.links heading=4-%}
    </p>
    <h3>specular_2_mult0</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult0.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult0.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult0.links heading=4-%}
    </p>
    <h3>specular_2_mult1</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult1.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult1.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult1.links heading=4-%}
    </p>
    <h3>specular_2_mult2</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult2.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult2.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult2.links heading=4-%}
    </p>
    <h3>specular_2_mult3</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult3.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult3.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult3.links heading=4-%}
    </p>
    <h3>specular_2_mult4</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult4.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult4.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult4.links heading=4-%}
    </p>
    <h3>specular_2_mult5</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult5.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult5.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult5.links heading=4-%}
    </p>
    <h3>specular_2_mult6</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult6.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult6.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult6.links heading=4-%}
    </p>
    <h3>specular_2_mult7</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult7.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult7.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult7.links heading=4-%}
    </p>
    <h3>specular_2_mult8</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult8.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult8.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult8.links heading=4-%}
    </p>
    <h3>specular_2_mult9</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult9.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult9.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_mult9.links heading=4-%}
    </p>
    <h3>specular_2_offset0</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset0.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset0.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset0.links heading=4-%}
    </p>
    <h3>specular_2_offset1</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset1.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset1.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset1.links heading=4-%}
    </p>
    <h3>specular_2_offset2</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset2.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset2.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset2.links heading=4-%}
    </p>
    <h3>specular_2_offset3</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset3.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset3.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset3.links heading=4-%}
    </p>
    <h3>specular_2_offset4</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset4.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset4.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset4.links heading=4-%}
    </p>
    <h3>specular_2_offset5</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset5.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset5.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset5.links heading=4-%}
    </p>
    <h3>specular_2_offset6</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset6.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset6.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset6.links heading=4-%}
    </p>
    <h3>specular_2_offset7</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset7.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset7.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset7.links heading=4-%}
    </p>
    <h3>specular_2_offset8</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset8.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset8.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset8.links heading=4-%}
    </p>
    <h3>specular_2_offset9</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset9.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset9.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_offset9.links heading=4-%}
    </p>
    <h3>specular_2_positions</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">ramp positions, maximum 10 allowed</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_positions.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_positions.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_positions.links heading=4-%}
    </p>
    <h3>specular_2_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.9
      <p class="scene-class-comments">The roughness of the toon specular.   Smaller values produce tighter highlights</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_roughness.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_roughness.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_roughness.links heading=4-%}
    </p>
    <h3>specular_2_show</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Show second toon specular lobe</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_show.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_show.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_show.links heading=4-%}
    </p>
    <h3>specular_2_stretch_u</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Amount to stretch or compress the specular in the u direction </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_stretch_u.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_stretch_u.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_stretch_u.links heading=4-%}
    </p>
    <h3>specular_2_stretch_v</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Amount to stretch or compress the specular in the v direction </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_stretch_v.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_stretch_v.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_stretch_v.links heading=4-%}
    </p>
    <h3>specular_2_tint</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_tint.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_tint.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_tint.links heading=4-%}
    </p>
    <h3>specular_2_use_input_vectors_for_stretch</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">when checked, use input_U and V. otherwise use geometry dPds/t</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_use_input_vectors_for_stretch.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_use_input_vectors_for_stretch.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_use_input_vectors_for_stretch.links heading=4-%}
    </p>
    <h3>specular_2_values</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">List of colors on the ramp</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_values.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_values.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_2_values.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Specular 3 attributes</summary>
  <p>
    <h3>specular_3_enable_indirect_reflections</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">enables indirect GGX reflections for toon specular model</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_enable_indirect_reflections.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_enable_indirect_reflections.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_enable_indirect_reflections.links heading=4-%}
    </p>
    <h3>specular_3_enable_input_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">enables sampling the normal map for toon specular 3</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_enable_input_normal.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_enable_input_normal.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_enable_input_normal.links heading=4-%}
    </p>
    <h3>specular_3_indirect_reflections_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">the intensity for the indirect reflections of the toon specular model</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_indirect_reflections_intensity.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_indirect_reflections_intensity.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_indirect_reflections_intensity.links heading=4-%}
    </p>
    <h3>specular_3_indirect_reflections_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.5
      <p class="scene-class-comments">the roughness for the indirect reflections of the toon specular model</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_indirect_reflections_roughness.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_indirect_reflections_roughness.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_indirect_reflections_roughness.links heading=4-%}
    </p>
    <h3>specular_3_input_U</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">input U / tangent for specular stretch</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_input_U.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_input_U.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_input_U.links heading=4-%}
    </p>
    <h3>specular_3_input_V</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">input V / bitangent for specular stretch</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_input_V.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_input_V.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_input_V.links heading=4-%}
    </p>
    <h3>specular_3_input_normal</h3>
    <p class="scene-class-type">
      <b>NormalMap</b>
      <br>
      default: None
      <p class="scene-class-comments">specifies an alternate shading normal for toon specular 3</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_input_normal.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_input_normal.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_input_normal.links heading=4-%}
    </p>
    <h3>specular_3_input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">controls influence of input normal versus hair normal for toon specular 3</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_input_normal_dial.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_input_normal_dial.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_input_normal_dial.links heading=4-%}
    </p>
    <h3>specular_3_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">The overall intensity of the specular response</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_intensity.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_intensity.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_intensity.links heading=4-%}
    </p>
    <h3>specular_3_interpolations</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |<br>&emsp;&emsp;&emsp;Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_interpolations.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_interpolations.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_interpolations.links heading=4-%}
    </p>
    <h3>specular_3_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;2 = &ldquo;Toon_Surface&rdquo; (default)<br>
          &nbsp;&nbsp;3 = &ldquo;Toon_Hair&rdquo;<br>
      <p class="scene-class-comments">sets the normal distribution function for specular</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_model.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_model.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_model.links heading=4-%}
    </p>
    <h3>specular_3_mult0</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult0.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult0.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult0.links heading=4-%}
    </p>
    <h3>specular_3_mult1</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult1.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult1.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult1.links heading=4-%}
    </p>
    <h3>specular_3_mult2</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult2.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult2.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult2.links heading=4-%}
    </p>
    <h3>specular_3_mult3</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult3.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult3.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult3.links heading=4-%}
    </p>
    <h3>specular_3_mult4</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult4.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult4.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult4.links heading=4-%}
    </p>
    <h3>specular_3_mult5</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult5.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult5.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult5.links heading=4-%}
    </p>
    <h3>specular_3_mult6</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult6.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult6.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult6.links heading=4-%}
    </p>
    <h3>specular_3_mult7</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult7.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult7.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult7.links heading=4-%}
    </p>
    <h3>specular_3_mult8</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult8.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult8.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult8.links heading=4-%}
    </p>
    <h3>specular_3_mult9</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Bindable multiplier on the toon specular ramp value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult9.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult9.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_mult9.links heading=4-%}
    </p>
    <h3>specular_3_offset0</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset0.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset0.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset0.links heading=4-%}
    </p>
    <h3>specular_3_offset1</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset1.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset1.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset1.links heading=4-%}
    </p>
    <h3>specular_3_offset2</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset2.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset2.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset2.links heading=4-%}
    </p>
    <h3>specular_3_offset3</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset3.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset3.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset3.links heading=4-%}
    </p>
    <h3>specular_3_offset4</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset4.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset4.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset4.links heading=4-%}
    </p>
    <h3>specular_3_offset5</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset5.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset5.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset5.links heading=4-%}
    </p>
    <h3>specular_3_offset6</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset6.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset6.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset6.links heading=4-%}
    </p>
    <h3>specular_3_offset7</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset7.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset7.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset7.links heading=4-%}
    </p>
    <h3>specular_3_offset8</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset8.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset8.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset8.links heading=4-%}
    </p>
    <h3>specular_3_offset9</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Bindable offset to the toon specular ramp-position, add a small variation using noise etc for art-directable ramp thresholds</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset9.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset9.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_offset9.links heading=4-%}
    </p>
    <h3>specular_3_positions</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">ramp positions, maximum 10 allowed</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_positions.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_positions.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_positions.links heading=4-%}
    </p>
    <h3>specular_3_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.9
      <p class="scene-class-comments">The roughness of the toon specular.   Smaller values produce tighter highlights</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_roughness.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_roughness.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_roughness.links heading=4-%}
    </p>
    <h3>specular_3_show</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Show third toon specular lobe</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_show.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_show.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_show.links heading=4-%}
    </p>
    <h3>specular_3_stretch_u</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Amount to stretch or compress the specular in the u direction </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_stretch_u.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_stretch_u.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_stretch_u.links heading=4-%}
    </p>
    <h3>specular_3_stretch_v</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Amount to stretch or compress the specular in the v direction </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_stretch_v.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_stretch_v.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_stretch_v.links heading=4-%}
    </p>
    <h3>specular_3_tint</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_tint.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_tint.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_tint.links heading=4-%}
    </p>
    <h3>specular_3_use_input_vectors_for_stretch</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">when checked, use input_U and V. otherwise use geometry dPds/t</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_use_input_vectors_for_stretch.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_use_input_vectors_for_stretch.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_use_input_vectors_for_stretch.links heading=4-%}
    </p>
    <h3>specular_3_values</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">List of colors on the ramp</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_values.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_values.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.specular_3_values.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Subsurface attributes</summary>
  <p>
    <h3>bssrdf</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;normalized diffusion&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;dipole&rdquo;<br>
      <p class="scene-class-comments">0 for NormalizedDiffuse, 1 for Dipole. Random walk unsupported for hair.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.bssrdf.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.bssrdf.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.bssrdf.links heading=4-%}
    </p>
    <h3>enable_sss_input_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">enables sampling the normal map for sss samples. More accurate but potentially expensive</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.enable_sss_input_normal.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.enable_sss_input_normal.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.enable_sss_input_normal.links heading=4-%}
    </p>
    <h3>input_normal</h3>
    <p class="scene-class-type">
      <b>NormalMap</b>
      <br>
      default: None
      <p class="scene-class-comments">specifies an alternate shading normal (only for SSS lobe)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.input_normal.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.input_normal.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.input_normal.links heading=4-%}
    </p>
    <h3>input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">controls influence of input normal versus hair normal for SSS</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.input_normal_dial.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.input_normal_dial.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.input_normal_dial.links heading=4-%}
    </p>
    <h3>scattering_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the subsurface scattering 'falloff' color</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.scattering_color.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.scattering_color.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.scattering_color.links heading=4-%}
    </p>
    <h3>scattering_radius</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">the distance the light scatters beneath the surface.  When 0 surface diffuse is used</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.scattering_radius.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.scattering_radius.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.scattering_radius.links heading=4-%}
    </p>
    <h3>subsurface_blend</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">0 is fully hair diffuse, 1 is fully SSS. No effect if scattering radius is 0.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.subsurface_blend.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.subsurface_blend.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.subsurface_blend.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.extra_aovs.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.extra_aovs.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.extra_aovs.links heading=4-%}
    </p>
    <h3>invisible_refractive_cryptomatte</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Indicates whether material should/should not appear in the refractive cryptomatte layers</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.invisible_refractive_cryptomatte.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.invisible_refractive_cryptomatte.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.invisible_refractive_cryptomatte.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.label.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.label.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.label.links heading=4-%}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.priority.images data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.priority.videos data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairToonMaterial.attributes.priority.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.materials.HairToonMaterial-%}