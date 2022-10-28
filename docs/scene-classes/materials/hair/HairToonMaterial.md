---
title: HairToonMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# HairToonMaterial
{%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.gallery data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
{%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>back_hair_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">(advanced only) hair color used for back-lit hair (transmission/forward reflectance)</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.back_hair_color.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.back_hair_color.links heading=4-%}
    </p>
    <h3>front_hair_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">(advanced only) hair color used for front-lit hair (backward reflectance)</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.front_hair_color.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.front_hair_color.links heading=4-%}
    </p>
    <h3>sss_trace_set</h3>
    <p class="scene-class-type">
      <b>Traceset</b>
      default: None
      <p class="scene-class-comments">Set of geometries that contribute neighboring subsurface points. By default, only the geometry associated with this material contributes to subsurface. If you want adjacent geometry with different material to contribute as well, specify all those parts here.</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.sss_trace_set.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.sss_trace_set.links heading=4-%}
    </p>
    <h3>use_independent_front_and_back_hair_color</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">(advanced) use a separate hair color for front and back</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.use_independent_front_and_back_hair_color.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.use_independent_front_and_back_hair_color.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Common attributes</summary>
  <p>
    <h3>presence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.presence.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.presence.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Diffuse attributes</summary>
  <p>
    <h3>hair_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.hair_color.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.hair_color.links heading=4-%}
    </p>
    <h3>hair_diffuse</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Amount of hair diffuse</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.hair_diffuse.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.hair_diffuse.links heading=4-%}
    </p>
    <h3>show_hair_diffuse</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Show the hair diffuse lobe</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.show_hair_diffuse.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.show_hair_diffuse.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Emission attributes</summary>
  <p>
    <h3>emission</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the energy emitted from this material</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.emission.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.emission.links heading=4-%}
    </p>
    <h3>show_emission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables/disable emission</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.show_emission.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.show_emission.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Specular 1 attributes</summary>
  <p>
    <h3>specular_1_enable_indirect_reflections</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables indirect GGX reflections for toon specular model</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_enable_indirect_reflections.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_enable_indirect_reflections.links heading=4-%}
    </p>
    <h3>specular_1_enable_input_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables sampling the normal map for toon specular 1</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_enable_input_normal.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_enable_input_normal.links heading=4-%}
    </p>
    <h3>specular_1_indirect_reflections_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">the intensity for the indirect reflections of the toon specular model</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_indirect_reflections_intensity.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_indirect_reflections_intensity.links heading=4-%}
    </p>
    <h3>specular_1_indirect_reflections_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.5
      <p class="scene-class-comments">the roughness for the indirect reflections of the toon specular model</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_indirect_reflections_roughness.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_indirect_reflections_roughness.links heading=4-%}
    </p>
    <h3>specular_1_input_U</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">input U / tangent for specular stretch</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_input_U.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_input_U.links heading=4-%}
    </p>
    <h3>specular_1_input_V</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">input V / bitangent for specular stretch</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_input_V.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_input_V.links heading=4-%}
    </p>
    <h3>specular_1_input_normal</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-comments">specifies an alternate shading normal for toon specular 1</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_input_normal.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_input_normal.links heading=4-%}
    </p>
    <h3>specular_1_input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">controls influence of input normal versus hair normal for toon specular 1</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_input_normal_dial.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_input_normal_dial.links heading=4-%}
    </p>
    <h3>specular_1_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">The overall intensity of the specular response</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_intensity.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_intensity.links heading=4-%}
    </p>
    <h3>specular_1_interpolations</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-comments">None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |<br>&emsp;&emsp;&emsp;Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_interpolations.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_interpolations.links heading=4-%}
    </p>
    <h3>specular_1_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | Toon_Surface = 2 (default)
          | Toon_Hair = 3
      <p class="scene-class-comments">sets the normalized distribution function for specular</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_model.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_model.links heading=4-%}
    </p>
    <h3>specular_1_positions</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">ramp positions, maximum 10 allowed</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_positions.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_positions.links heading=4-%}
    </p>
    <h3>specular_1_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.899999976158
      <p class="scene-class-comments">The roughness of the toon specular.   Smaller values produce tighter highlights</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_roughness.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_roughness.links heading=4-%}
    </p>
    <h3>specular_1_show</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Show first toon specular lobe</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_show.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_show.links heading=4-%}
    </p>
    <h3>specular_1_stretch_u</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Amount to stretch or compress the specular in the u direction </p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_stretch_u.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_stretch_u.links heading=4-%}
    </p>
    <h3>specular_1_stretch_v</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Amount to stretch or compress the specular in the v direction </p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_stretch_v.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_stretch_v.links heading=4-%}
    </p>
    <h3>specular_1_tint</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_tint.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_tint.links heading=4-%}
    </p>
    <h3>specular_1_use_input_vectors_for_stretch</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">when checked, use input_U and V. otherwise use geometry dPds/t</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_use_input_vectors_for_stretch.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_use_input_vectors_for_stretch.links heading=4-%}
    </p>
    <h3>specular_1_values</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">List of colors on the ramp</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_values.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_1_values.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Specular 2 attributes</summary>
  <p>
    <h3>specular_2_enable_indirect_reflections</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables indirect GGX reflections for toon specular model</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_enable_indirect_reflections.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_enable_indirect_reflections.links heading=4-%}
    </p>
    <h3>specular_2_enable_input_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables sampling the normal map for toon specular 2</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_enable_input_normal.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_enable_input_normal.links heading=4-%}
    </p>
    <h3>specular_2_indirect_reflections_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">the intensity for the indirect reflections of the toon specular model</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_indirect_reflections_intensity.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_indirect_reflections_intensity.links heading=4-%}
    </p>
    <h3>specular_2_indirect_reflections_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.5
      <p class="scene-class-comments">the roughness for the indirect reflections of the toon specular model</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_indirect_reflections_roughness.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_indirect_reflections_roughness.links heading=4-%}
    </p>
    <h3>specular_2_input_U</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">input U / tangent for specular stretch</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_input_U.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_input_U.links heading=4-%}
    </p>
    <h3>specular_2_input_V</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">input V / bitangent for specular stretch</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_input_V.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_input_V.links heading=4-%}
    </p>
    <h3>specular_2_input_normal</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-comments">specifies an alternate shading normal for toon specular 2</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_input_normal.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_input_normal.links heading=4-%}
    </p>
    <h3>specular_2_input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">controls influence of input normal versus hair normal for toon specular 2</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_input_normal_dial.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_input_normal_dial.links heading=4-%}
    </p>
    <h3>specular_2_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">The overall intensity of the specular response</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_intensity.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_intensity.links heading=4-%}
    </p>
    <h3>specular_2_interpolations</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-comments">None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |<br>&emsp;&emsp;&emsp;Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_interpolations.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_interpolations.links heading=4-%}
    </p>
    <h3>specular_2_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | Toon_Surface = 2 (default)
          | Toon_Hair = 3
      <p class="scene-class-comments">sets the normalized distribution function for specular</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_model.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_model.links heading=4-%}
    </p>
    <h3>specular_2_positions</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">ramp positions, maximum 10 allowed</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_positions.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_positions.links heading=4-%}
    </p>
    <h3>specular_2_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.899999976158
      <p class="scene-class-comments">The roughness of the toon specular.   Smaller values produce tighter highlights</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_roughness.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_roughness.links heading=4-%}
    </p>
    <h3>specular_2_show</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Show second toon specular lobe</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_show.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_show.links heading=4-%}
    </p>
    <h3>specular_2_stretch_u</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Amount to stretch or compress the specular in the u direction </p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_stretch_u.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_stretch_u.links heading=4-%}
    </p>
    <h3>specular_2_stretch_v</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Amount to stretch or compress the specular in the v direction </p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_stretch_v.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_stretch_v.links heading=4-%}
    </p>
    <h3>specular_2_tint</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_tint.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_tint.links heading=4-%}
    </p>
    <h3>specular_2_use_input_vectors_for_stretch</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">when checked, use input_U and V. otherwise use geometry dPds/t</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_use_input_vectors_for_stretch.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_use_input_vectors_for_stretch.links heading=4-%}
    </p>
    <h3>specular_2_values</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">List of colors on the ramp</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_values.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_2_values.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Specular 3 attributes</summary>
  <p>
    <h3>specular_3_enable_indirect_reflections</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables indirect GGX reflections for toon specular model</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_enable_indirect_reflections.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_enable_indirect_reflections.links heading=4-%}
    </p>
    <h3>specular_3_enable_input_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables sampling the normal map for toon specular 3</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_enable_input_normal.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_enable_input_normal.links heading=4-%}
    </p>
    <h3>specular_3_indirect_reflections_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">the intensity for the indirect reflections of the toon specular model</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_indirect_reflections_intensity.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_indirect_reflections_intensity.links heading=4-%}
    </p>
    <h3>specular_3_indirect_reflections_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.5
      <p class="scene-class-comments">the roughness for the indirect reflections of the toon specular model</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_indirect_reflections_roughness.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_indirect_reflections_roughness.links heading=4-%}
    </p>
    <h3>specular_3_input_U</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">input U / tangent for specular stretch</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_input_U.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_input_U.links heading=4-%}
    </p>
    <h3>specular_3_input_V</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">input V / bitangent for specular stretch</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_input_V.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_input_V.links heading=4-%}
    </p>
    <h3>specular_3_input_normal</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-comments">specifies an alternate shading normal for toon specular 3</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_input_normal.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_input_normal.links heading=4-%}
    </p>
    <h3>specular_3_input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">controls influence of input normal versus hair normal for toon specular 3</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_input_normal_dial.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_input_normal_dial.links heading=4-%}
    </p>
    <h3>specular_3_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">The overall intensity of the specular response</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_intensity.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_intensity.links heading=4-%}
    </p>
    <h3>specular_3_interpolations</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-comments">None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |<br>&emsp;&emsp;&emsp;Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_interpolations.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_interpolations.links heading=4-%}
    </p>
    <h3>specular_3_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | Toon_Surface = 2 (default)
          | Toon_Hair = 3
      <p class="scene-class-comments">sets the normalized distribution function for specular</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_model.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_model.links heading=4-%}
    </p>
    <h3>specular_3_positions</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">ramp positions, maximum 10 allowed</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_positions.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_positions.links heading=4-%}
    </p>
    <h3>specular_3_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.899999976158
      <p class="scene-class-comments">The roughness of the toon specular.   Smaller values produce tighter highlights</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_roughness.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_roughness.links heading=4-%}
    </p>
    <h3>specular_3_show</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Show third toon specular lobe</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_show.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_show.links heading=4-%}
    </p>
    <h3>specular_3_stretch_u</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Amount to stretch or compress the specular in the u direction </p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_stretch_u.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_stretch_u.links heading=4-%}
    </p>
    <h3>specular_3_stretch_v</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Amount to stretch or compress the specular in the v direction </p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_stretch_v.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_stretch_v.links heading=4-%}
    </p>
    <h3>specular_3_tint</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_tint.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_tint.links heading=4-%}
    </p>
    <h3>specular_3_use_input_vectors_for_stretch</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">when checked, use input_U and V. otherwise use geometry dPds/t</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_use_input_vectors_for_stretch.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_use_input_vectors_for_stretch.links heading=4-%}
    </p>
    <h3>specular_3_values</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">List of colors on the ramp</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_values.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.specular_3_values.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Subsurface attributes</summary>
  <p>
    <h3>bssrdf</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | normalized diffusion = 0 (default)
          | dipole = 1
      <p class="scene-class-comments">0 for NormalizedDiffuse, 1 for Dipole. Random walk unsupported for hair.</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.bssrdf.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.bssrdf.links heading=4-%}
    </p>
    <h3>enable_sss_input_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables sampling the normal map for sss samples. More accurate but potentially expensive</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.enable_sss_input_normal.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.enable_sss_input_normal.links heading=4-%}
    </p>
    <h3>input_normal</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-comments">specifies an alternate shading normal (only for SSS lobe)</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.input_normal.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.input_normal.links heading=4-%}
    </p>
    <h3>input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">controls influence of input normal versus hair normal for SSS</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.input_normal_dial.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.input_normal_dial.links heading=4-%}
    </p>
    <h3>scattering_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the subsurface scattering 'falloff' color</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.scattering_color.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.scattering_color.links heading=4-%}
    </p>
    <h3>scattering_radius</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">the distance the light scatters beneath the surface.  When 0 surface diffuse is used</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.scattering_radius.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.scattering_radius.links heading=4-%}
    </p>
    <h3>subsurface_blend</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">0 is fully hair diffuse, 1 is fully SSS. No effect if scattering radius is 0.</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.subsurface_blend.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.subsurface_blend.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>extra_aovs</h3>
    <p class="scene-class-type">
      <b>Map</b>
      default: None
      <p class="scene-class-comments">Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.extra_aovs.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.extra_aovs.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.label.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.label.links heading=4-%}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.priority.images data=site.data.scene-classes.materials.hair.HairToonMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.hair.HairToonMaterial.attributes.priority.links heading=4-%}
    </p>
  </p>
</details>
</div>