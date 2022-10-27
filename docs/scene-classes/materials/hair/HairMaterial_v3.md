---
title: HairMaterial_v3

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# HairMaterial_v3
{%assign image_path=site.data.scene-classes.materials.hair.HairMaterial_v3.images.path%}
{%if site.data.scene-classes.materials.hair.HairMaterial_v3.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.materials.hair.HairMaterial_v3.links-%}
---
## See Also
{%for link in site.data.scene-classes.materials.hair.HairMaterial_v3.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>show_multiple_scattering</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">show the amount of light scattered after TRT bounce, good for blonde/white hair</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.show_multiple_scattering
          path=image_path
      %}
    </p>
    <h3>use_optimized_sampling</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">optimized sampling of all the hair lobes, results in 2x-4x speedup on average (disables individual hair lobe AOVs). When false, the look may slightly change if using biased techniques like roughness/sample clamping. </p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.use_optimized_sampling
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Common attributes</summary>
  <p>
    <h3>casts_caustics</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">allows continuation of caustic light paths.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.casts_caustics
          path=image_path
      %}
    </p>
    <h3>presence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.presence
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
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.emission
          path=image_path
      %}
    </p>
    <h3>show_emission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables/disable emission</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.show_emission
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Fresnel attributes</summary>
  <p>
    <h3>cuticle_layer_thickness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.10000000149
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.cuticle_layer_thickness
          path=image_path
      %}
    </p>
    <h3>fresnel_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | simple longitudinal = 0
          | dielectric cylinder = 1 (default)
          | layered cuticles = 2
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.fresnel_type
          path=image_path
      %}
    </p>
    <h3>refractive_index</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.45000004768
      <p class="scene-class-comments">keep this value between [1.3,2.0] for realistic behavior (human hair is around 1.55)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.refractive_index
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Primary Specular attributes</summary>
  <p>
    <h3>primary_specular_offset</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: -3.0
      <p class="scene-class-comments">offset specular highlight along hair direction (in degrees) [-10,+10], around -3 for human hair</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.primary_specular_offset
          path=image_path
      %}
    </p>
    <h3>primary_specular_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.5
      <p class="scene-class-comments">roughness of the primary specular highlight, also sets the transmission roughness to 0.5x and secondary specular roughness to 2x by default unless independent roughnesses are being used for both</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.primary_specular_roughness
          path=image_path
      %}
    </p>
    <h3>primary_specular_tint</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">tint the primary specular highlight with this color (leave white for physical behavior)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.primary_specular_tint
          path=image_path
      %}
    </p>
    <h3>show_primary_specular</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">show primary specular</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.show_primary_specular
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Secondary Specular attributes</summary>
  <p>
    <h3>glint_eccentricity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.850000023842
      <p class="scene-class-comments">secondary specular glint eccentricity [0.85, 1], values that deviate from 1 make the hair fiber more elliptical and more glinty</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.glint_eccentricity
          path=image_path
      %}
    </p>
    <h3>glint_max_twists</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 2.5
      <p class="scene-class-comments">the maximum number of twists along the hair's length. More twists means more glints. Each hair strand will be randomly assigned a twist amount between [min twists, max twists]</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.glint_max_twists
          path=image_path
      %}
    </p>
    <h3>glint_min_twists</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.5
      <p class="scene-class-comments">the minimum number of twists along the hair's length. More twists means more glints. Each hair strand will be randomly assigned a twist amount between [min twists, max twists]</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.glint_min_twists
          path=image_path
      %}
    </p>
    <h3>glint_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.5
      <p class="scene-class-comments">secondary specular glint roughness</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.glint_roughness
          path=image_path
      %}
    </p>
    <h3>glint_saturation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.5
      <p class="scene-class-comments">secondary specular glint saturation</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.glint_saturation
          path=image_path
      %}
    </p>
    <h3>independent_secondary_specular_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.40000000596
      <p class="scene-class-comments">secondary specular roughness</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.independent_secondary_specular_roughness
          path=image_path
      %}
    </p>
    <h3>secondary_specular_offset</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: -4.5
      <p class="scene-class-comments">offset secondary specular highlight along hair direction (in degrees) [-10,+10], around -4.5 for human hair</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.secondary_specular_offset
          path=image_path
      %}
    </p>
    <h3>secondary_specular_tint</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">tint secondary specular with this color (leave white for physical behavior)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.secondary_specular_tint
          path=image_path
      %}
    </p>
    <h3>show_hair_glint</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">show hair glint</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.show_hair_glint
          path=image_path
      %}
    </p>
    <h3>show_secondary_specular</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">show secondary specular</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.show_secondary_specular
          path=image_path
      %}
    </p>
    <h3>use_independent_secondary_specular_roughness</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">when disabled, uses a physically correct value for secondary specular roughness which is linked to the primary specular roughness</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.use_independent_secondary_specular_roughness
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Transmission attributes</summary>
  <p>
    <h3>direct_transmission_saturation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">(Non-Physical, Advanced) saturate/desaturate direct transmission highlights.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.direct_transmission_saturation
          path=image_path
      %}
    </p>
    <h3>independent_transmission_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.10000000149
      <p class="scene-class-comments">transmission roughness</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.independent_transmission_roughness
          path=image_path
      %}
    </p>
    <h3>show_transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">show tranmission specular</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.show_transmission
          path=image_path
      %}
    </p>
    <h3>transmission_azimuthal_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">higher values create a softer look</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.transmission_azimuthal_roughness
          path=image_path
      %}
    </p>
    <h3>transmission_offset</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: -1.5
      <p class="scene-class-comments">offset transmission highlight along hair direction (in degrees) [-10,+10], around -1.5 for human hair</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.transmission_offset
          path=image_path
      %}
    </p>
    <h3>transmission_tint</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">tint transmission with this color (leave white for physical behavior)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.transmission_tint
          path=image_path
      %}
    </p>
    <h3>use_independent_transmission_roughness</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">when disabled, uses a physically correct value for Transmission roughness which is linked to the primary specular roughness</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.use_independent_transmission_roughness
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
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.extra_aovs
          path=image_path
      %}
    </p>
    <h3>hair_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.hair_color
          path=image_path
      %}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.label
          path=image_path
      %}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairMaterial_v3.images.attributes.priority
          path=image_path
      %}
    </p>
  </p>
</details>
</div>