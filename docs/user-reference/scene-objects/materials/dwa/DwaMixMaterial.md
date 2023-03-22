---
title: DwaMixMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DwaMixMaterial
{%-include overview.html data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.gallery data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.links-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.blend_color_space.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.blend_color_space.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.blend_color_space.links heading=4-%}
    </p>
    <h3>fallback_bssrdf</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;normalized diffusion&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;dipole&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;random walk&rdquo;<br>
      <p class="scene-class-comments">If child materials disagree on the type of bssrdf, this type will be used instead.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_bssrdf.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_bssrdf.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_bssrdf.links heading=4-%}
    </p>
    <h3>fallback_clearcoat_use_bending</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">If child materials disagree on the type of clearcoat use bending, this type will be used instead.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_clearcoat_use_bending.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_clearcoat_use_bending.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_clearcoat_use_bending.links heading=4-%}
    </p>
    <h3>fallback_outer_specular_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;Beckmann&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;GGX&rdquo; (default)<br>
      <p class="scene-class-comments">If child materials disagree on the type of outer specular model, this type will be used instead.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_outer_specular_model.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_outer_specular_model.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_outer_specular_model.links heading=4-%}
    </p>
    <h3>fallback_specular_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;Beckmann&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;GGX&rdquo; (default)<br>
      <p class="scene-class-comments">If child materials disagree on the type of specular model, this type will be used instead.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_specular_model.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_specular_model.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_specular_model.links heading=4-%}
    </p>
    <h3>fallback_thin_geometry</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">If child materials disagree on the type of thin geometry, this type will be used instead.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_thin_geometry.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_thin_geometry.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_thin_geometry.links heading=4-%}
    </p>
    <h3>fallback_toon_specular_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;Beckmann&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;GGX&rdquo; (default)<br>
          &nbsp;&nbsp;2 = &ldquo;Toon&rdquo;<br>
      <p class="scene-class-comments">If child materials disagree on the type of toon specular model, this type will be used instead.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_toon_specular_model.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_toon_specular_model.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_toon_specular_model.links heading=4-%}
    </p>
    <h3>sss_trace_set</h3>
    <p class="scene-class-type">
      <b>TraceSet</b>
      <br>
      default: None
      <p class="scene-class-comments">By default, only the geometry associated with this material contributes to subsurface. the dwalayermaterial ignores the sss trace sets of the submaterials. if you want adjacent geometry with different material to contribute as well, specify all those parts here.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.sss_trace_set.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.sss_trace_set.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.sss_trace_set.links heading=4-%}
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
      <p class="scene-class-comments">Controls quality of glitter at distances where individual flakes cannot be perceived; at lower values, approximation kicks in earlier.  this parameter will only be used when layering two distinct glitter materials.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_LOD_quality.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_LOD_quality.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_LOD_quality.links heading=4-%}
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
      <p class="scene-class-comments">Developer debug visualization modes.  this parameter will only be used when layering two distinct glitter materials.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_debug_mode.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_debug_mode.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_debug_mode.links heading=4-%}
    </p>
    <h3>fallback_glitter_layering_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;physical&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;additive&rdquo;<br>
      <p class="scene-class-comments">Layering mode for glitter on top of the under material. physical: conserves energy and glitter attenuates under material, additive: breaks energy conservation but glitter is never darker than the under material (eg. use case: snow).  this parameter will only be used when layering two distinct glitter materials.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_layering_mode.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_layering_mode.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_layering_mode.links heading=4-%}
    </p>
    <h3>fallback_glitter_randomness</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.5
      <p class="scene-class-comments">Randomness of flake orientation.  this parameter will only be used when layering two distinct glitter materials.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_randomness.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_randomness.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_randomness.links heading=4-%}
    </p>
    <h3>fallback_glitter_seed</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 0
      <p class="scene-class-comments">The seed for the glitter random number generator.  this parameter will only be used when layering two distinct glitter materials.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_seed.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_seed.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_seed.links heading=4-%}
    </p>
    <h3>fallback_glitter_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;4 = &ldquo;object&rdquo;<br>
          &nbsp;&nbsp;5 = &ldquo;reference&rdquo; (default)<br>
      <p class="scene-class-comments">The space to calculate the worley noise in, defaults to reference space.  this parameter will only be used when layering two distinct glitter materials.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_space.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_space.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_space.links heading=4-%}
    </p>
    <h3>fallback_glitter_style_A_frequency</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">0 implies none of this style, 1 implies all the flakes will get this style.  this parameter will only be used when layering two distinct glitter materials.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_style_A_frequency.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_style_A_frequency.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_style_A_frequency.links heading=4-%}
    </p>
    <h3>fallback_glitter_style_B_frequency</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">0 implies none of this style, 1 implies all the flakes will get this style.  this parameter will only be used when layering two distinct glitter materials.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_style_B_frequency.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_style_B_frequency.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_style_B_frequency.links heading=4-%}
    </p>
    <h3>fallback_glitter_texture_A</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      <br>
      default: 
      <p class="scene-class-comments">Filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).  this parameter will only be used when layering two distinct glitter materials.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_texture_A.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_texture_A.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_texture_A.links heading=4-%}
    </p>
    <h3>fallback_glitter_texture_B</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).  this parameter will only be used when layering two distinct glitter materials.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_texture_B.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_texture_B.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.fallback_glitter_texture_B.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.extra_aovs.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.extra_aovs.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.extra_aovs.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Label used in material and light aovs</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.label.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.label.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.label.links heading=4-%}
    </p>
    <h3>material0</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material0.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material0.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material0.links heading=4-%}
    </p>
    <h3>material1</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material1.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material1.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material1.links heading=4-%}
    </p>
    <h3>material10</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material10.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material10.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material10.links heading=4-%}
    </p>
    <h3>material11</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material11.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material11.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material11.links heading=4-%}
    </p>
    <h3>material12</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material12.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material12.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material12.links heading=4-%}
    </p>
    <h3>material13</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material13.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material13.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material13.links heading=4-%}
    </p>
    <h3>material14</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material14.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material14.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material14.links heading=4-%}
    </p>
    <h3>material15</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material15.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material15.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material15.links heading=4-%}
    </p>
    <h3>material16</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material16.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material16.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material16.links heading=4-%}
    </p>
    <h3>material17</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material17.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material17.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material17.links heading=4-%}
    </p>
    <h3>material18</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material18.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material18.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material18.links heading=4-%}
    </p>
    <h3>material19</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material19.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material19.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material19.links heading=4-%}
    </p>
    <h3>material2</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material2.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material2.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material2.links heading=4-%}
    </p>
    <h3>material20</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material20.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material20.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material20.links heading=4-%}
    </p>
    <h3>material21</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material21.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material21.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material21.links heading=4-%}
    </p>
    <h3>material22</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material22.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material22.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material22.links heading=4-%}
    </p>
    <h3>material23</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material23.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material23.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material23.links heading=4-%}
    </p>
    <h3>material24</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material24.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material24.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material24.links heading=4-%}
    </p>
    <h3>material25</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material25.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material25.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material25.links heading=4-%}
    </p>
    <h3>material26</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material26.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material26.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material26.links heading=4-%}
    </p>
    <h3>material27</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material27.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material27.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material27.links heading=4-%}
    </p>
    <h3>material28</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material28.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material28.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material28.links heading=4-%}
    </p>
    <h3>material29</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material29.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material29.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material29.links heading=4-%}
    </p>
    <h3>material3</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material3.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material3.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material3.links heading=4-%}
    </p>
    <h3>material30</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material30.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material30.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material30.links heading=4-%}
    </p>
    <h3>material31</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material31.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material31.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material31.links heading=4-%}
    </p>
    <h3>material32</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material32.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material32.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material32.links heading=4-%}
    </p>
    <h3>material33</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material33.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material33.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material33.links heading=4-%}
    </p>
    <h3>material34</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material34.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material34.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material34.links heading=4-%}
    </p>
    <h3>material35</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material35.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material35.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material35.links heading=4-%}
    </p>
    <h3>material36</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material36.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material36.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material36.links heading=4-%}
    </p>
    <h3>material37</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material37.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material37.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material37.links heading=4-%}
    </p>
    <h3>material38</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material38.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material38.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material38.links heading=4-%}
    </p>
    <h3>material39</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material39.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material39.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material39.links heading=4-%}
    </p>
    <h3>material4</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material4.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material4.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material4.links heading=4-%}
    </p>
    <h3>material40</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material40.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material40.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material40.links heading=4-%}
    </p>
    <h3>material41</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material41.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material41.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material41.links heading=4-%}
    </p>
    <h3>material42</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material42.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material42.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material42.links heading=4-%}
    </p>
    <h3>material43</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material43.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material43.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material43.links heading=4-%}
    </p>
    <h3>material44</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material44.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material44.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material44.links heading=4-%}
    </p>
    <h3>material45</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material45.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material45.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material45.links heading=4-%}
    </p>
    <h3>material46</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material46.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material46.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material46.links heading=4-%}
    </p>
    <h3>material47</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material47.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material47.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material47.links heading=4-%}
    </p>
    <h3>material48</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material48.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material48.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material48.links heading=4-%}
    </p>
    <h3>material49</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material49.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material49.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material49.links heading=4-%}
    </p>
    <h3>material5</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material5.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material5.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material5.links heading=4-%}
    </p>
    <h3>material50</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material50.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material50.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material50.links heading=4-%}
    </p>
    <h3>material51</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material51.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material51.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material51.links heading=4-%}
    </p>
    <h3>material52</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material52.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material52.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material52.links heading=4-%}
    </p>
    <h3>material53</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material53.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material53.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material53.links heading=4-%}
    </p>
    <h3>material54</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material54.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material54.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material54.links heading=4-%}
    </p>
    <h3>material55</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material55.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material55.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material55.links heading=4-%}
    </p>
    <h3>material56</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material56.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material56.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material56.links heading=4-%}
    </p>
    <h3>material57</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material57.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material57.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material57.links heading=4-%}
    </p>
    <h3>material58</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material58.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material58.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material58.links heading=4-%}
    </p>
    <h3>material59</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material59.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material59.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material59.links heading=4-%}
    </p>
    <h3>material6</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material6.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material6.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material6.links heading=4-%}
    </p>
    <h3>material60</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material60.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material60.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material60.links heading=4-%}
    </p>
    <h3>material61</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material61.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material61.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material61.links heading=4-%}
    </p>
    <h3>material62</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material62.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material62.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material62.links heading=4-%}
    </p>
    <h3>material63</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material63.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material63.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material63.links heading=4-%}
    </p>
    <h3>material7</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material7.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material7.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material7.links heading=4-%}
    </p>
    <h3>material8</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material8.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material8.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material8.links heading=4-%}
    </p>
    <h3>material9</h3>
    <p class="scene-class-type">
      <b>DwaBaseLayerable</b>
      <br>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material9.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material9.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.material9.links heading=4-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Which of the 64 inputs (0 to 63) to use. fractional values will mix the two materials the value lies between</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.mix.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.mix.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.mix.links heading=4-%}
    </p>
    <h3>mix_interpolation</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;linear&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;hold&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;nearest&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;smooth&rdquo;<br>
      <p class="scene-class-comments">Adjusts rate of transition from one material to the next based on mix value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.mix_interpolation.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.mix_interpolation.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.mix_interpolation.links heading=4-%}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. a value of 0 means the priority should be ignored. materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  to enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.priority.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.priority.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.priority.links heading=4-%}
    </p>
    <h3>remap_mix_to_inputs</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">When enabled, multiplies mix value by number of inputs used. inputs should start at 0 with no gaps</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.remap_mix_to_inputs.images data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.remap_mix_to_inputs.videos data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.DwaMixMaterial.attributes.remap_mix_to_inputs.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.materials.DwaMixMaterial-%}