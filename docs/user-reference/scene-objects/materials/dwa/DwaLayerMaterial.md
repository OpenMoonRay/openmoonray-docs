---
title: DwaLayerMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DwaLayerMaterial
{%-include overview.html data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.gallery data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>blend_color_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;RGB&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;HSV&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;HSL&rdquo;<br>
      <p class="scene-class-comments">Color space used when blending the two material's color parameters</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.blend_color_space.images data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.blend_color_space.videos data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.blend_color_space.links heading=4-%}
    </p>
    <h3>fallback_bssrdf</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;normalized diffusion&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;dipole&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;random walk&rdquo;<br>
      <p class="scene-class-comments">If child materials disagree on the type of bssrdf, this type will be used instead.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_bssrdf.images data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_bssrdf.videos data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_bssrdf.links heading=4-%}
    </p>
    <h3>fallback_clearcoat_use_bending</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">If child materials disagree on the type of clearcoat use bending, this type will be used instead.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_clearcoat_use_bending.images data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_clearcoat_use_bending.videos data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_clearcoat_use_bending.links heading=4-%}
    </p>
    <h3>fallback_outer_specular_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;Beckmann&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;GGX&rdquo; (default)<br>
      <p class="scene-class-comments">If child materials disagree on the type of outer specular model, this type will be used instead.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_outer_specular_model.images data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_outer_specular_model.videos data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_outer_specular_model.links heading=4-%}
    </p>
    <h3>fallback_prevent_light_culling</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">If child materials disagree on prevent light culling, this will be used instead.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_prevent_light_culling.images data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_prevent_light_culling.videos data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_prevent_light_culling.links heading=4-%}
    </p>
    <h3>fallback_specular_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;Beckmann&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;GGX&rdquo; (default)<br>
      <p class="scene-class-comments">If child materials disagree on the type of specular model, this type will be used instead.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_specular_model.images data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_specular_model.videos data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_specular_model.links heading=4-%}
    </p>
    <h3>fallback_thin_geometry</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">If child materials disagree on the type of thin geometry, this type will be used instead.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_thin_geometry.images data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_thin_geometry.videos data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_thin_geometry.links heading=4-%}
    </p>
    <h3>fallback_toon_specular_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;Beckmann&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;GGX&rdquo; (default)<br>
          &nbsp;&nbsp;2 = &ldquo;Toon&rdquo;<br>
      <p class="scene-class-comments">If child materials disagree on the type of toon specular model, this type will be used instead.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_toon_specular_model.images data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_toon_specular_model.videos data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_toon_specular_model.links heading=4-%}
    </p>
    <h3>sss_trace_set</h3>
    <p class="scene-class-type">
      <b>TraceSet</b>
      <br>
      default: None
      <p class="scene-class-comments">By default, only the geometry associated with this material contributes to subsurface. The DwaLayerMaterial ignores the sss trace sets of the submaterials. If you want adjacent geometry with different material to contribute as well, specify all those parts here.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.sss_trace_set.images data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.sss_trace_set.videos data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.sss_trace_set.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Glitter Fallback attributes</summary>
  <p>
    <h3>fallback_glitter_LOD_quality</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.5
      <p class="scene-class-comments">controls quality of glitter at distances where individual flakes cannot be perceived; at lower values, approximation kicks in earlier.  This parameter will only be used when layering two distinct glitter materials.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_LOD_quality.images data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_LOD_quality.videos data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_LOD_quality.links heading=4-%}
    </p>
    <h3>fallback_glitter_debug_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;off&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;blend&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;color&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;averageColor&rdquo;<br>
          &nbsp;&nbsp;4 = &ldquo;footprintArea&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;radius&rdquo;<br>
      <p class="scene-class-comments">developer debug visualization modes.  This parameter will only be used when layering two distinct glitter materials.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_debug_mode.images data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_debug_mode.videos data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_debug_mode.links heading=4-%}
    </p>
    <h3>fallback_glitter_layering_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;physical&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;additive&rdquo;<br>
      <p class="scene-class-comments">layering mode for glitter on top of the under material. physical: conserves energy and glitter attenuates under material, additive: breaks energy conservation but glitter is never darker than the under material (eg. use case: snow).  This parameter will only be used when layering two distinct glitter materials.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_layering_mode.images data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_layering_mode.videos data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_layering_mode.links heading=4-%}
    </p>
    <h3>fallback_glitter_randomness</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.5
      <p class="scene-class-comments">randomness of flake orientation.  This parameter will only be used when layering two distinct glitter materials.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_randomness.images data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_randomness.videos data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_randomness.links heading=4-%}
    </p>
    <h3>fallback_glitter_seed</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 0
      <p class="scene-class-comments">The seed for the glitter random number generator.  This parameter will only be used when layering two distinct glitter materials.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_seed.images data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_seed.videos data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_seed.links heading=4-%}
    </p>
    <h3>fallback_glitter_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;4 = &ldquo;object&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;reference&rdquo; (default)<br>
      <p class="scene-class-comments">The space to calculate the worley noise in, defaults to reference space.  This parameter will only be used when layering two distinct glitter materials.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_space.images data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_space.videos data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_space.links heading=4-%}
    </p>
    <h3>fallback_glitter_style_A_frequency</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">0 implies none of this style, 1 implies all the flakes will get this style.  This parameter will only be used when layering two distinct glitter materials.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_style_A_frequency.images data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_style_A_frequency.videos data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_style_A_frequency.links heading=4-%}
    </p>
    <h3>fallback_glitter_style_B_frequency</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">0 implies none of this style, 1 implies all the flakes will get this style.  This parameter will only be used when layering two distinct glitter materials.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_style_B_frequency.images data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_style_B_frequency.videos data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_style_B_frequency.links heading=4-%}
    </p>
    <h3>fallback_glitter_texture_A</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      <br>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).  This parameter will only be used when layering two distinct glitter materials.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_texture_A.images data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_texture_A.videos data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_texture_A.links heading=4-%}
    </p>
    <h3>fallback_glitter_texture_B</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).  This parameter will only be used when layering two distinct glitter materials.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_texture_B.images data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_texture_B.videos data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.fallback_glitter_texture_B.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.extra_aovs.images data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.extra_aovs.videos data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.extra_aovs.links heading=4-%}
    </p>
    <h3>invisible_refractive_cryptomatte</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Indicates whether material should/should not appear in the refractive cryptomatte layers</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.invisible_refractive_cryptomatte.images data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.invisible_refractive_cryptomatte.videos data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.invisible_refractive_cryptomatte.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.label.images data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.label.videos data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.label.links heading=4-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">foreground material weight</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.mask.images data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.mask.videos data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.mask.links heading=4-%}
    </p>
    <h3>material_A</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-comments">foreground material</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.material_A.images data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.material_A.videos data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.material_A.links heading=4-%}
    </p>
    <h3>material_B</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-comments">background material</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.material_B.images data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.material_B.videos data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.material_B.links heading=4-%}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.priority.images data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.priority.videos data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaLayerMaterial.attributes.priority.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.materials.DwaLayerMaterial-%}