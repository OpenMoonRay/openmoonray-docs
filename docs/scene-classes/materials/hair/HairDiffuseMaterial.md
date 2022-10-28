---
title: HairDiffuseMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# HairDiffuseMaterial
{%include image-gallery.html images=site.data.scene-classes.materials.hair.HairDiffuseMaterial.gallery data=site.data.scene-classes.materials.hair.HairDiffuseMaterial-%}
{%include see-also.html links=site.data.scene-classes.materials.hair.HairDiffuseMaterial.links-%}
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
      {%include image-gallery.html images=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.back_hair_color.images data=site.data.scene-classes.materials.hair.HairDiffuseMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.back_hair_color.links heading=4-%}
    </p>
    <h3>front_hair_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">(advanced only) hair color used for front-lit hair (backward reflectance)</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.front_hair_color.images data=site.data.scene-classes.materials.hair.HairDiffuseMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.front_hair_color.links heading=4-%}
    </p>
    <h3>sss_trace_set</h3>
    <p class="scene-class-type">
      <b>Traceset</b>
      default: None
      <p class="scene-class-comments">Set of geometries that contribute neighboring subsurface points. By default, only the geometry associated with this material contributes to subsurface. If you want adjacent geometry with different material to contribute as well, specify all those parts here.</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.sss_trace_set.images data=site.data.scene-classes.materials.hair.HairDiffuseMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.sss_trace_set.links heading=4-%}
    </p>
    <h3>use_independent_front_and_back_hair_color</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">(advanced) use a separate hair color for front and back</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.use_independent_front_and_back_hair_color.images data=site.data.scene-classes.materials.hair.HairDiffuseMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.use_independent_front_and_back_hair_color.links heading=4-%}
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
      {%include image-gallery.html images=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.casts_caustics.images data=site.data.scene-classes.materials.hair.HairDiffuseMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.casts_caustics.links heading=4-%}
    </p>
    <h3>presence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.presence.images data=site.data.scene-classes.materials.hair.HairDiffuseMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.presence.links heading=4-%}
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
      {%include image-gallery.html images=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.emission.images data=site.data.scene-classes.materials.hair.HairDiffuseMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.emission.links heading=4-%}
    </p>
    <h3>show_emission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables/disable emission</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.show_emission.images data=site.data.scene-classes.materials.hair.HairDiffuseMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.show_emission.links heading=4-%}
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
      {%include image-gallery.html images=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.bssrdf.images data=site.data.scene-classes.materials.hair.HairDiffuseMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.bssrdf.links heading=4-%}
    </p>
    <h3>enable_sss_input_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables sampling the normal map for sss samples. More accurate but potentially expensive</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.enable_sss_input_normal.images data=site.data.scene-classes.materials.hair.HairDiffuseMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.enable_sss_input_normal.links heading=4-%}
    </p>
    <h3>input_normal</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-comments">specifies an alternate shading normal (only for SSS lobe)</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.input_normal.images data=site.data.scene-classes.materials.hair.HairDiffuseMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.input_normal.links heading=4-%}
    </p>
    <h3>input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">controls influence of input normal versus hair normal for SSS</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.input_normal_dial.images data=site.data.scene-classes.materials.hair.HairDiffuseMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.input_normal_dial.links heading=4-%}
    </p>
    <h3>scattering_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the subsurface scattering 'falloff' color</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.scattering_color.images data=site.data.scene-classes.materials.hair.HairDiffuseMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.scattering_color.links heading=4-%}
    </p>
    <h3>scattering_radius</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">the distance the light scatters beneath the surface.  When 0 surface diffuse is used</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.scattering_radius.images data=site.data.scene-classes.materials.hair.HairDiffuseMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.scattering_radius.links heading=4-%}
    </p>
    <h3>subsurface_blend</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">0 is fully hair diffuse, 1 is fully SSS. No effect if scattering radius is 0.</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.subsurface_blend.images data=site.data.scene-classes.materials.hair.HairDiffuseMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.subsurface_blend.links heading=4-%}
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
      {%include image-gallery.html images=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.extra_aovs.images data=site.data.scene-classes.materials.hair.HairDiffuseMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.extra_aovs.links heading=4-%}
    </p>
    <h3>hair_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.hair_color.images data=site.data.scene-classes.materials.hair.HairDiffuseMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.hair_color.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.label.images data=site.data.scene-classes.materials.hair.HairDiffuseMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.label.links heading=4-%}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.priority.images data=site.data.scene-classes.materials.hair.HairDiffuseMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.hair.HairDiffuseMaterial.attributes.priority.links heading=4-%}
    </p>
  </p>
</details>
</div>