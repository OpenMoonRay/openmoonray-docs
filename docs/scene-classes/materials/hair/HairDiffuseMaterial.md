---
title: HairDiffuseMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# HairDiffuseMaterial
{%assign image_path=site.data.scene-classes.materials.hair.HairDiffuseMaterial.image_path%}
{%if site.data.scene-classes.materials.hair.HairDiffuseMaterial.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.materials.hair.HairDiffuseMaterial.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.materials.hair.HairDiffuseMaterial.links-%}
---
## See Also
{%for link in site.data.scene-classes.materials.hair.HairDiffuseMaterial.links-%}
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
          images=site.data.scene-classes.materials.hair.HairDiffuseMaterialattributes.back_hair_color.images.
          path=image_path
      %}
    </p>
    <h3>front_hair_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">(advanced only) hair color used for front-lit hair (backward reflectance)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairDiffuseMaterialattributes.front_hair_color.images.
          path=image_path
      %}
    </p>
    <h3>sss_trace_set</h3>
    <p class="scene-class-type">
      <b>Traceset</b>
      default: None
      <p class="scene-class-comments">Set of geometries that contribute neighboring subsurface points. By default, only the geometry associated with this material contributes to subsurface. If you want adjacent geometry with different material to contribute as well, specify all those parts here.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairDiffuseMaterialattributes.sss_trace_set.images.
          path=image_path
      %}
    </p>
    <h3>use_independent_front_and_back_hair_color</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">(advanced) use a separate hair color for front and back</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairDiffuseMaterialattributes.use_independent_front_and_back_hair_color.images.
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
          images=site.data.scene-classes.materials.hair.HairDiffuseMaterialattributes.casts_caustics.images.
          path=image_path
      %}
    </p>
    <h3>presence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairDiffuseMaterialattributes.presence.images.
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
          images=site.data.scene-classes.materials.hair.HairDiffuseMaterialattributes.emission.images.
          path=image_path
      %}
    </p>
    <h3>show_emission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables/disable emission</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairDiffuseMaterialattributes.show_emission.images.
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
          images=site.data.scene-classes.materials.hair.HairDiffuseMaterialattributes.bssrdf.images.
          path=image_path
      %}
    </p>
    <h3>enable_sss_input_normal</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables sampling the normal map for sss samples. More accurate but potentially expensive</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairDiffuseMaterialattributes.enable_sss_input_normal.images.
          path=image_path
      %}
    </p>
    <h3>input_normal</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-comments">specifies an alternate shading normal (only for SSS lobe)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairDiffuseMaterialattributes.input_normal.images.
          path=image_path
      %}
    </p>
    <h3>input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">controls influence of input normal versus hair normal for SSS</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairDiffuseMaterialattributes.input_normal_dial.images.
          path=image_path
      %}
    </p>
    <h3>scattering_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the subsurface scattering 'falloff' color</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairDiffuseMaterialattributes.scattering_color.images.
          path=image_path
      %}
    </p>
    <h3>scattering_radius</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">the distance the light scatters beneath the surface.  When 0 surface diffuse is used</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairDiffuseMaterialattributes.scattering_radius.images.
          path=image_path
      %}
    </p>
    <h3>subsurface_blend</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">0 is fully hair diffuse, 1 is fully SSS. No effect if scattering radius is 0.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairDiffuseMaterialattributes.subsurface_blend.images.
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
          images=site.data.scene-classes.materials.hair.HairDiffuseMaterialattributes.extra_aovs.images.
          path=image_path
      %}
    </p>
    <h3>hair_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairDiffuseMaterialattributes.hair_color.images.
          path=image_path
      %}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairDiffuseMaterialattributes.label.images.
          path=image_path
      %}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairDiffuseMaterialattributes.priority.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>