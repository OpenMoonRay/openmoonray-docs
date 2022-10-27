---
title: HairToonMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# HairToonMaterial
{%assign image_path=site.data.scene-classes.materials.hair.HairToonMaterial.images.path%}
{%if site.data.scene-classes.materials.hair.HairToonMaterial.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.materials.hair.HairToonMaterial.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.materials.hair.HairToonMaterial.links-%}
---
## See Also
{%for link in site.data.scene-classes.materials.hair.HairToonMaterial.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
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
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.back_hair_color
          path=image_path
      %}
    </p>
    <h3>front_hair_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">(advanced only) hair color used for front-lit hair (backward reflectance)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.front_hair_color
          path=image_path
      %}
    </p>
    <h3>sss_trace_set</h3>
    <p class="scene-class-type">
      <b>Traceset</b>
      default: None
      <p class="scene-class-comments">Set of geometries that contribute neighboring subsurface points. By default, only the geometry associated with this material contributes to subsurface. If you want adjacent geometry with different material to contribute as well, specify all those parts here.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.sss_trace_set
          path=image_path
      %}
    </p>
    <h3>use_independent_front_and_back_hair_color</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">(advanced) use a separate hair color for front and back</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.use_independent_front_and_back_hair_color
          path=image_path
      %}
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
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.presence
          path=image_path
      %}
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
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.hair_color
          path=image_path
      %}
    </p>
    <h3>hair_diffuse</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Amount of hair diffuse</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.hair_diffuse
          path=image_path
      %}
    </p>
    <h3>show_hair_diffuse</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Show the hair diffuse lobe</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.show_hair_diffuse
          path=image_path
      %}
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
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.emission
          path=image_path
      %}
    </p>
    <h3>show_emission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables/disable emission</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.show_emission
          path=image_path
      %}
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
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_1_enable_indirect_reflections
          path=image_path
      %}
    </p>
    <h3>specular_1_enable_input_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables sampling the normal map for toon specular 1</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_1_enable_input_normal
          path=image_path
      %}
    </p>
    <h3>specular_1_indirect_reflections_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">the intensity for the indirect reflections of the toon specular model</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_1_indirect_reflections_intensity
          path=image_path
      %}
    </p>
    <h3>specular_1_indirect_reflections_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.5
      <p class="scene-class-comments">the roughness for the indirect reflections of the toon specular model</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_1_indirect_reflections_roughness
          path=image_path
      %}
    </p>
    <h3>specular_1_input_U</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">input U / tangent for specular stretch</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_1_input_U
          path=image_path
      %}
    </p>
    <h3>specular_1_input_V</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">input V / bitangent for specular stretch</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_1_input_V
          path=image_path
      %}
    </p>
    <h3>specular_1_input_normal</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-comments">specifies an alternate shading normal for toon specular 1</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_1_input_normal
          path=image_path
      %}
    </p>
    <h3>specular_1_input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">controls influence of input normal versus hair normal for toon specular 1</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_1_input_normal_dial
          path=image_path
      %}
    </p>
    <h3>specular_1_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">The overall intensity of the specular response</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_1_intensity
          path=image_path
      %}
    </p>
    <h3>specular_1_interpolations</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-comments">None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |<br>&emsp;&emsp;&emsp;Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_1_interpolations
          path=image_path
      %}
    </p>
    <h3>specular_1_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | Toon_Surface = 2 (default)
          | Toon_Hair = 3
      <p class="scene-class-comments">sets the normalized distribution function for specular</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_1_model
          path=image_path
      %}
    </p>
    <h3>specular_1_positions</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">ramp positions, maximum 10 allowed</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_1_positions
          path=image_path
      %}
    </p>
    <h3>specular_1_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.899999976158
      <p class="scene-class-comments">The roughness of the toon specular.   Smaller values produce tighter highlights</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_1_roughness
          path=image_path
      %}
    </p>
    <h3>specular_1_show</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Show first toon specular lobe</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_1_show
          path=image_path
      %}
    </p>
    <h3>specular_1_stretch_u</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Amount to stretch or compress the specular in the u direction </p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_1_stretch_u
          path=image_path
      %}
    </p>
    <h3>specular_1_stretch_v</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Amount to stretch or compress the specular in the v direction </p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_1_stretch_v
          path=image_path
      %}
    </p>
    <h3>specular_1_tint</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_1_tint
          path=image_path
      %}
    </p>
    <h3>specular_1_use_input_vectors_for_stretch</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">when checked, use input_U and V. otherwise use geometry dPds/t</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_1_use_input_vectors_for_stretch
          path=image_path
      %}
    </p>
    <h3>specular_1_values</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">List of colors on the ramp</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_1_values
          path=image_path
      %}
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
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_2_enable_indirect_reflections
          path=image_path
      %}
    </p>
    <h3>specular_2_enable_input_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables sampling the normal map for toon specular 2</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_2_enable_input_normal
          path=image_path
      %}
    </p>
    <h3>specular_2_indirect_reflections_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">the intensity for the indirect reflections of the toon specular model</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_2_indirect_reflections_intensity
          path=image_path
      %}
    </p>
    <h3>specular_2_indirect_reflections_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.5
      <p class="scene-class-comments">the roughness for the indirect reflections of the toon specular model</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_2_indirect_reflections_roughness
          path=image_path
      %}
    </p>
    <h3>specular_2_input_U</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">input U / tangent for specular stretch</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_2_input_U
          path=image_path
      %}
    </p>
    <h3>specular_2_input_V</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">input V / bitangent for specular stretch</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_2_input_V
          path=image_path
      %}
    </p>
    <h3>specular_2_input_normal</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-comments">specifies an alternate shading normal for toon specular 2</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_2_input_normal
          path=image_path
      %}
    </p>
    <h3>specular_2_input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">controls influence of input normal versus hair normal for toon specular 2</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_2_input_normal_dial
          path=image_path
      %}
    </p>
    <h3>specular_2_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">The overall intensity of the specular response</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_2_intensity
          path=image_path
      %}
    </p>
    <h3>specular_2_interpolations</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-comments">None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |<br>&emsp;&emsp;&emsp;Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_2_interpolations
          path=image_path
      %}
    </p>
    <h3>specular_2_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | Toon_Surface = 2 (default)
          | Toon_Hair = 3
      <p class="scene-class-comments">sets the normalized distribution function for specular</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_2_model
          path=image_path
      %}
    </p>
    <h3>specular_2_positions</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">ramp positions, maximum 10 allowed</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_2_positions
          path=image_path
      %}
    </p>
    <h3>specular_2_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.899999976158
      <p class="scene-class-comments">The roughness of the toon specular.   Smaller values produce tighter highlights</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_2_roughness
          path=image_path
      %}
    </p>
    <h3>specular_2_show</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Show second toon specular lobe</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_2_show
          path=image_path
      %}
    </p>
    <h3>specular_2_stretch_u</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Amount to stretch or compress the specular in the u direction </p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_2_stretch_u
          path=image_path
      %}
    </p>
    <h3>specular_2_stretch_v</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Amount to stretch or compress the specular in the v direction </p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_2_stretch_v
          path=image_path
      %}
    </p>
    <h3>specular_2_tint</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_2_tint
          path=image_path
      %}
    </p>
    <h3>specular_2_use_input_vectors_for_stretch</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">when checked, use input_U and V. otherwise use geometry dPds/t</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_2_use_input_vectors_for_stretch
          path=image_path
      %}
    </p>
    <h3>specular_2_values</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">List of colors on the ramp</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_2_values
          path=image_path
      %}
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
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_3_enable_indirect_reflections
          path=image_path
      %}
    </p>
    <h3>specular_3_enable_input_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables sampling the normal map for toon specular 3</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_3_enable_input_normal
          path=image_path
      %}
    </p>
    <h3>specular_3_indirect_reflections_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">the intensity for the indirect reflections of the toon specular model</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_3_indirect_reflections_intensity
          path=image_path
      %}
    </p>
    <h3>specular_3_indirect_reflections_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.5
      <p class="scene-class-comments">the roughness for the indirect reflections of the toon specular model</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_3_indirect_reflections_roughness
          path=image_path
      %}
    </p>
    <h3>specular_3_input_U</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">input U / tangent for specular stretch</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_3_input_U
          path=image_path
      %}
    </p>
    <h3>specular_3_input_V</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">input V / bitangent for specular stretch</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_3_input_V
          path=image_path
      %}
    </p>
    <h3>specular_3_input_normal</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-comments">specifies an alternate shading normal for toon specular 3</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_3_input_normal
          path=image_path
      %}
    </p>
    <h3>specular_3_input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">controls influence of input normal versus hair normal for toon specular 3</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_3_input_normal_dial
          path=image_path
      %}
    </p>
    <h3>specular_3_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">The overall intensity of the specular response</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_3_intensity
          path=image_path
      %}
    </p>
    <h3>specular_3_interpolations</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-comments">None: 0 | Linear: 1 | Exponential Up: 2 | Exponential Down: 3 |<br>&emsp;&emsp;&emsp;Smooth: 4 | Catmull Rom: 5 | Monotone Cubic: 6</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_3_interpolations
          path=image_path
      %}
    </p>
    <h3>specular_3_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | Toon_Surface = 2 (default)
          | Toon_Hair = 3
      <p class="scene-class-comments">sets the normalized distribution function for specular</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_3_model
          path=image_path
      %}
    </p>
    <h3>specular_3_positions</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">ramp positions, maximum 10 allowed</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_3_positions
          path=image_path
      %}
    </p>
    <h3>specular_3_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.899999976158
      <p class="scene-class-comments">The roughness of the toon specular.   Smaller values produce tighter highlights</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_3_roughness
          path=image_path
      %}
    </p>
    <h3>specular_3_show</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Show third toon specular lobe</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_3_show
          path=image_path
      %}
    </p>
    <h3>specular_3_stretch_u</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Amount to stretch or compress the specular in the u direction </p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_3_stretch_u
          path=image_path
      %}
    </p>
    <h3>specular_3_stretch_v</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Amount to stretch or compress the specular in the v direction </p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_3_stretch_v
          path=image_path
      %}
    </p>
    <h3>specular_3_tint</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_3_tint
          path=image_path
      %}
    </p>
    <h3>specular_3_use_input_vectors_for_stretch</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">when checked, use input_U and V. otherwise use geometry dPds/t</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_3_use_input_vectors_for_stretch
          path=image_path
      %}
    </p>
    <h3>specular_3_values</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-comments">List of colors on the ramp</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.specular_3_values
          path=image_path
      %}
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
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.bssrdf
          path=image_path
      %}
    </p>
    <h3>enable_sss_input_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables sampling the normal map for sss samples. More accurate but potentially expensive</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.enable_sss_input_normal
          path=image_path
      %}
    </p>
    <h3>input_normal</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-comments">specifies an alternate shading normal (only for SSS lobe)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.input_normal
          path=image_path
      %}
    </p>
    <h3>input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">controls influence of input normal versus hair normal for SSS</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.input_normal_dial
          path=image_path
      %}
    </p>
    <h3>scattering_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the subsurface scattering 'falloff' color</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.scattering_color
          path=image_path
      %}
    </p>
    <h3>scattering_radius</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">the distance the light scatters beneath the surface.  When 0 surface diffuse is used</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.scattering_radius
          path=image_path
      %}
    </p>
    <h3>subsurface_blend</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">0 is fully hair diffuse, 1 is fully SSS. No effect if scattering radius is 0.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.subsurface_blend
          path=image_path
      %}
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
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.extra_aovs
          path=image_path
      %}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.label
          path=image_path
      %}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairToonMaterial.images.attributes.priority
          path=image_path
      %}
    </p>
  </p>
</details>
</div>