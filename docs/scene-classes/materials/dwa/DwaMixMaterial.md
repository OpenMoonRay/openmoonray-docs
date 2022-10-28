---
title: DwaMixMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DwaMixMaterial
{%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.gallery data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
{%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>blend_color_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | RGB = 0 (default)
          | HSV = 1
          | HSL = 2
      <p class="scene-class-comments">Color space used when blending the two material's color parameters</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.blend_color_space.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.blend_color_space.links-%}
    </p>
    <h3>fallback_bssrdf</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | normalized diffusion = 0 (default)
          | dipole = 1
          | random walk = 2
      <p class="scene-class-comments">If child materials disagree on the type of bssrdf, this type will be used instead.</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_bssrdf.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_bssrdf.links-%}
    </p>
    <h3>fallback_clearcoat_use_bending</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">If child materials disagree on the type of clearcoat use bending, this type will be used instead.</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_clearcoat_use_bending.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_clearcoat_use_bending.links-%}
    </p>
    <h3>fallback_outer_specular_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | Beckmann = 0
          | GGX = 1 (default)
      <p class="scene-class-comments">If child materials disagree on the type of outer specular model, this type will be used instead.</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_outer_specular_model.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_outer_specular_model.links-%}
    </p>
    <h3>fallback_specular_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | Beckmann = 0
          | GGX = 1 (default)
      <p class="scene-class-comments">If child materials disagree on the type of specular model, this type will be used instead.</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_specular_model.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_specular_model.links-%}
    </p>
    <h3>fallback_thin_geometry</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">If child materials disagree on the type of thin geometry, this type will be used instead.</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_thin_geometry.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_thin_geometry.links-%}
    </p>
    <h3>fallback_toon_specular_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | Beckmann = 0
          | GGX = 1 (default)
          | Toon = 2
      <p class="scene-class-comments">If child materials disagree on the type of toon specular model, this type will be used instead.</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_toon_specular_model.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_toon_specular_model.links-%}
    </p>
    <h3>sss_trace_set</h3>
    <p class="scene-class-type">
      <b>Traceset</b>
      default: None
      <p class="scene-class-comments">By default, only the geometry associated with this material contributes to subsurface. The DwaLayerMaterial ignores the sss trace sets of the submaterials. If you want adjacent geometry with different material to contribute as well, specify all those parts here.</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.sss_trace_set.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.sss_trace_set.links-%}
    </p>
  </p>
</details>
<details open>
  <summary>Glitter Fallback attributes</summary>
  <p>
    <h3>fallback_glitter_LOD_quality</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">controls quality of glitter at distances where individual flakes cannot be perceived; at lower values, approximation kicks in earlier.  This parameter will only be used when layering two distinct glitter materials.</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_glitter_LOD_quality.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_glitter_LOD_quality.links-%}
    </p>
    <h3>fallback_glitter_debug_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | off = 0 (default)
          | blend = 1
          | color = 2
          | averageColor = 3
          | footprintArea = 4
          | radius = 5
      <p class="scene-class-comments">developer debug visualization modes.  This parameter will only be used when layering two distinct glitter materials.</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_glitter_debug_mode.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_glitter_debug_mode.links-%}
    </p>
    <h3>fallback_glitter_layering_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | physical = 0 (default)
          | additive = 1
      <p class="scene-class-comments">layering mode for glitter on top of the under material. physical: conserves energy and glitter attenuates under material, additive: breaks energy conservation but glitter is never darker than the under material (eg. use case: snow).  This parameter will only be used when layering two distinct glitter materials.</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_glitter_layering_mode.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_glitter_layering_mode.links-%}
    </p>
    <h3>fallback_glitter_randomness</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">randomness of flake orientation.  This parameter will only be used when layering two distinct glitter materials.</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_glitter_randomness.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_glitter_randomness.links-%}
    </p>
    <h3>fallback_glitter_seed</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The seed for the glitter random number generator.  This parameter will only be used when layering two distinct glitter materials.</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_glitter_seed.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_glitter_seed.links-%}
    </p>
    <h3>fallback_glitter_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | object = 4
          | reference = 5 (default)
      <p class="scene-class-comments">The space to calculate the worley noise in, defaults to reference space.  This parameter will only be used when layering two distinct glitter materials.</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_glitter_space.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_glitter_space.links-%}
    </p>
    <h3>fallback_glitter_style_A_frequency</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">0 implies none of this style, 1 implies all the flakes will get this style.  This parameter will only be used when layering two distinct glitter materials.</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_glitter_style_A_frequency.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_glitter_style_A_frequency.links-%}
    </p>
    <h3>fallback_glitter_style_B_frequency</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">0 implies none of this style, 1 implies all the flakes will get this style.  This parameter will only be used when layering two distinct glitter materials.</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_glitter_style_B_frequency.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_glitter_style_B_frequency.links-%}
    </p>
    <h3>fallback_glitter_texture_A</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).  This parameter will only be used when layering two distinct glitter materials.</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_glitter_texture_A.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_glitter_texture_A.links-%}
    </p>
    <h3>fallback_glitter_texture_B</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).  This parameter will only be used when layering two distinct glitter materials.</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_glitter_texture_B.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.fallback_glitter_texture_B.links-%}
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
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.extra_aovs.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.extra_aovs.links-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.label.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.label.links-%}
    </p>
    <h3>material0</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material0.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material0.links-%}
    </p>
    <h3>material1</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material1.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material1.links-%}
    </p>
    <h3>material10</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material10.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material10.links-%}
    </p>
    <h3>material11</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material11.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material11.links-%}
    </p>
    <h3>material12</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material12.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material12.links-%}
    </p>
    <h3>material13</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material13.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material13.links-%}
    </p>
    <h3>material14</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material14.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material14.links-%}
    </p>
    <h3>material15</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material15.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material15.links-%}
    </p>
    <h3>material16</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material16.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material16.links-%}
    </p>
    <h3>material17</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material17.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material17.links-%}
    </p>
    <h3>material18</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material18.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material18.links-%}
    </p>
    <h3>material19</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material19.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material19.links-%}
    </p>
    <h3>material2</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material2.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material2.links-%}
    </p>
    <h3>material20</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material20.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material20.links-%}
    </p>
    <h3>material21</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material21.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material21.links-%}
    </p>
    <h3>material22</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material22.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material22.links-%}
    </p>
    <h3>material23</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material23.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material23.links-%}
    </p>
    <h3>material24</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material24.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material24.links-%}
    </p>
    <h3>material25</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material25.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material25.links-%}
    </p>
    <h3>material26</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material26.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material26.links-%}
    </p>
    <h3>material27</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material27.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material27.links-%}
    </p>
    <h3>material28</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material28.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material28.links-%}
    </p>
    <h3>material29</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material29.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material29.links-%}
    </p>
    <h3>material3</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material3.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material3.links-%}
    </p>
    <h3>material30</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material30.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material30.links-%}
    </p>
    <h3>material31</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material31.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material31.links-%}
    </p>
    <h3>material32</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material32.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material32.links-%}
    </p>
    <h3>material33</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material33.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material33.links-%}
    </p>
    <h3>material34</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material34.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material34.links-%}
    </p>
    <h3>material35</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material35.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material35.links-%}
    </p>
    <h3>material36</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material36.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material36.links-%}
    </p>
    <h3>material37</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material37.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material37.links-%}
    </p>
    <h3>material38</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material38.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material38.links-%}
    </p>
    <h3>material39</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material39.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material39.links-%}
    </p>
    <h3>material4</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material4.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material4.links-%}
    </p>
    <h3>material40</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material40.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material40.links-%}
    </p>
    <h3>material41</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material41.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material41.links-%}
    </p>
    <h3>material42</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material42.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material42.links-%}
    </p>
    <h3>material43</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material43.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material43.links-%}
    </p>
    <h3>material44</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material44.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material44.links-%}
    </p>
    <h3>material45</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material45.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material45.links-%}
    </p>
    <h3>material46</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material46.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material46.links-%}
    </p>
    <h3>material47</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material47.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material47.links-%}
    </p>
    <h3>material48</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material48.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material48.links-%}
    </p>
    <h3>material49</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material49.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material49.links-%}
    </p>
    <h3>material5</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material5.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material5.links-%}
    </p>
    <h3>material50</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material50.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material50.links-%}
    </p>
    <h3>material51</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material51.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material51.links-%}
    </p>
    <h3>material52</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material52.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material52.links-%}
    </p>
    <h3>material53</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material53.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material53.links-%}
    </p>
    <h3>material54</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material54.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material54.links-%}
    </p>
    <h3>material55</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material55.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material55.links-%}
    </p>
    <h3>material56</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material56.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material56.links-%}
    </p>
    <h3>material57</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material57.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material57.links-%}
    </p>
    <h3>material58</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material58.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material58.links-%}
    </p>
    <h3>material59</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material59.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material59.links-%}
    </p>
    <h3>material6</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material6.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material6.links-%}
    </p>
    <h3>material60</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material60.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material60.links-%}
    </p>
    <h3>material61</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material61.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material61.links-%}
    </p>
    <h3>material62</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material62.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material62.links-%}
    </p>
    <h3>material63</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material63.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material63.links-%}
    </p>
    <h3>material7</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material7.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material7.links-%}
    </p>
    <h3>material8</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material8.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material8.links-%}
    </p>
    <h3>material9</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material9.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.material9.links-%}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Which of the 64 inputs (0 to 63) to use. Fractional values will mix the two materials the value lies between</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.mix.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.mix.links-%}
    </p>
    <h3>mix_interpolation</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | linear = 0 (default)
          | hold = 1
          | nearest = 2
          | smooth = 3
      <p class="scene-class-comments">Adjusts rate of transition from one material to the next based on mix value</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.mix_interpolation.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.mix_interpolation.links-%}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.priority.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.priority.links-%}
    </p>
    <h3>remap_mix_to_inputs</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">When enabled, multiplies mix value by number of inputs used. Inputs should start at 0 with no gaps</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.remap_mix_to_inputs.images data=site.data.scene-classes.materials.dwa.DwaMixMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.dwa.DwaMixMaterial.attributes.remap_mix_to_inputs.links-%}
    </p>
  </p>
</details>
</div>