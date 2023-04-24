---
title: DwaTwoSidedMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DwaTwoSidedMaterial
{%-include overview.html data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.gallery data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>fallback_bssrdf</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;normalized diffusion&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;dipole&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;random walk&rdquo;<br>
      <p class="scene-class-comments">If the two materials disagree on the type of bssrdf, this type will be used instead.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.fallback_bssrdf.images data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.fallback_bssrdf.videos data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.fallback_bssrdf.links heading=4-%}
    </p>
    <h3>fallback_clearcoat_use_bending</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">If child materials disagree on the type of clearcoat use bending, this type will be used instead.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.fallback_clearcoat_use_bending.images data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.fallback_clearcoat_use_bending.videos data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.fallback_clearcoat_use_bending.links heading=4-%}
    </p>
    <h3>fallback_outer_specular_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;Beckmann&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;GGX&rdquo; (default)<br>
      <p class="scene-class-comments">If child materials disagree on the type of outer specular model, this type will be used instead.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.fallback_outer_specular_model.images data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.fallback_outer_specular_model.videos data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.fallback_outer_specular_model.links heading=4-%}
    </p>
    <h3>fallback_specular_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;Beckmann&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;GGX&rdquo; (default)<br>
      <p class="scene-class-comments">If child materials disagree on the type of specular model, this type will be used instead.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.fallback_specular_model.images data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.fallback_specular_model.videos data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.fallback_specular_model.links heading=4-%}
    </p>
    <h3>fallback_toon_specular_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;Beckmann&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;GGX&rdquo; (default)<br>
          &nbsp;&nbsp;2 = &ldquo;Toon&rdquo;<br>
      <p class="scene-class-comments">If child materials disagree on the type of toon specular model, this type will be used instead.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.fallback_toon_specular_model.images data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.fallback_toon_specular_model.videos data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.fallback_toon_specular_model.links heading=4-%}
    </p>
    <h3>sss_trace_set</h3>
    <p class="scene-class-type">
      <b>TraceSet</b>
      <br>
      default: None
      <p class="scene-class-comments">By default, only the geometry associated with this material contributes to subsurface. The DwaTwoSidedMaterial ignores the sss trace sets of the submaterials. If you want adjacent geometry with different material to contribute as well, specify all those parts here.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.sss_trace_set.images data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.sss_trace_set.videos data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.sss_trace_set.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>back_material</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-comments">material to use on back-facing surfaces</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.back_material.images data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.back_material.videos data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.back_material.links heading=4-%}
    </p>
    <h3>extra_aovs</h3>
    <p class="scene-class-type">
      <b>Map</b>
      <br>
      default: None
      <p class="scene-class-comments">Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.extra_aovs.images data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.extra_aovs.videos data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.extra_aovs.links heading=4-%}
    </p>
    <h3>front_material</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-comments">material to use on front-facing surfaces</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.front_material.images data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.front_material.videos data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.front_material.links heading=4-%}
    </p>
    <h3>invisible_refractive_cryptomatte</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.invisible_refractive_cryptomatte.images data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.invisible_refractive_cryptomatte.videos data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.invisible_refractive_cryptomatte.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.label.images data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.label.videos data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.label.links heading=4-%}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.priority.images data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.priority.videos data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial.attributes.priority.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.materials.DwaTwoSidedMaterial-%}