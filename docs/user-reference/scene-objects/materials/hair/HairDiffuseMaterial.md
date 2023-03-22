---
title: HairDiffuseMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# HairDiffuseMaterial
{%-include overview.html data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.gallery data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.links-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.back_hair_color.images data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.back_hair_color.videos data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.back_hair_color.links heading=4-%}
    </p>
    <h3>front_hair_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">(advanced only) hair color used for front-lit hair (backward reflectance)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.front_hair_color.images data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.front_hair_color.videos data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.front_hair_color.links heading=4-%}
    </p>
    <h3>sss_trace_set</h3>
    <p class="scene-class-type">
      <b>TraceSet</b>
      <br>
      default: None
      <p class="scene-class-comments">Set of geometries that contribute neighboring subsurface points. by default, only the geometry associated with this material contributes to subsurface. if you want adjacent geometry with different material to contribute as well, specify all those parts here.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.sss_trace_set.images data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.sss_trace_set.videos data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.sss_trace_set.links heading=4-%}
    </p>
    <h3>use_independent_front_and_back_hair_color</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">(advanced) use a separate hair color for front and back</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.use_independent_front_and_back_hair_color.images data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.use_independent_front_and_back_hair_color.videos data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.use_independent_front_and_back_hair_color.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.casts_caustics.images data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.casts_caustics.videos data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.casts_caustics.links heading=4-%}
    </p>
    <h3>presence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Controls the visibility of this object. useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.presence.images data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.presence.videos data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.presence.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.emission.images data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.emission.videos data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.emission.links heading=4-%}
    </p>
    <h3>show_emission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables/disable emission</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.show_emission.images data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.show_emission.videos data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.show_emission.links heading=4-%}
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
      <p class="scene-class-comments">0 for normalizeddiffuse, 1 for dipole. random walk unsupported for hair.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.bssrdf.images data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.bssrdf.videos data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.bssrdf.links heading=4-%}
    </p>
    <h3>enable_sss_input_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables sampling the normal map for sss samples. more accurate but potentially expensive</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.enable_sss_input_normal.images data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.enable_sss_input_normal.videos data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.enable_sss_input_normal.links heading=4-%}
    </p>
    <h3>input_normal</h3>
    <p class="scene-class-type">
      <b>NormalMap</b>
      <br>
      default: None
      <p class="scene-class-comments">Specifies an alternate shading normal (only for sss lobe)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.input_normal.images data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.input_normal.videos data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.input_normal.links heading=4-%}
    </p>
    <h3>input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Controls influence of input normal versus hair normal for sss</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.input_normal_dial.images data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.input_normal_dial.videos data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.input_normal_dial.links heading=4-%}
    </p>
    <h3>scattering_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">The subsurface scattering 'falloff' color</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.scattering_color.images data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.scattering_color.videos data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.scattering_color.links heading=4-%}
    </p>
    <h3>scattering_radius</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">The distance the light scatters beneath the surface.  when 0 surface diffuse is used</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.scattering_radius.images data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.scattering_radius.videos data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.scattering_radius.links heading=4-%}
    </p>
    <h3>subsurface_blend</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">0 is fully hair diffuse, 1 is fully sss. no effect if scattering radius is 0.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.subsurface_blend.images data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.subsurface_blend.videos data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.subsurface_blend.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.extra_aovs.images data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.extra_aovs.videos data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.extra_aovs.links heading=4-%}
    </p>
    <h3>hair_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.hair_color.images data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.hair_color.videos data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.hair_color.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Label used in material and light aovs</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.label.images data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.label.videos data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.label.links heading=4-%}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. a value of 0 means the priority should be ignored. materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  to enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.priority.images data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.priority.videos data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial.attributes.priority.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.materials.HairDiffuseMaterial-%}