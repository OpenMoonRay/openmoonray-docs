---
title: DwaMixMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DwaMixMaterial
{%assign image_path=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.path%}
{%if site.data.scene-classes.materials.dwa.DwaMixMaterial.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.materials.dwa.DwaMixMaterial.links-%}
---
## See Also
{%for link in site.data.scene-classes.materials.dwa.DwaMixMaterial.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
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
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.blend_color_space
          path=image_path
      %}
    </p>
    <h3>fallback_bssrdf</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | normalized diffusion = 0 (default)
          | dipole = 1
          | random walk = 2
      <p class="scene-class-comments">If child materials disagree on the type of bssrdf, this type will be used instead.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.fallback_bssrdf
          path=image_path
      %}
    </p>
    <h3>fallback_clearcoat_use_bending</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">If child materials disagree on the type of clearcoat use bending, this type will be used instead.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.fallback_clearcoat_use_bending
          path=image_path
      %}
    </p>
    <h3>fallback_outer_specular_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | Beckmann = 0
          | GGX = 1 (default)
      <p class="scene-class-comments">If child materials disagree on the type of outer specular model, this type will be used instead.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.fallback_outer_specular_model
          path=image_path
      %}
    </p>
    <h3>fallback_specular_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | Beckmann = 0
          | GGX = 1 (default)
      <p class="scene-class-comments">If child materials disagree on the type of specular model, this type will be used instead.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.fallback_specular_model
          path=image_path
      %}
    </p>
    <h3>fallback_thin_geometry</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">If child materials disagree on the type of thin geometry, this type will be used instead.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.fallback_thin_geometry
          path=image_path
      %}
    </p>
    <h3>fallback_toon_specular_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | Beckmann = 0
          | GGX = 1 (default)
          | Toon = 2
      <p class="scene-class-comments">If child materials disagree on the type of toon specular model, this type will be used instead.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.fallback_toon_specular_model
          path=image_path
      %}
    </p>
    <h3>sss_trace_set</h3>
    <p class="scene-class-type">
      <b>Traceset</b>
      default: None
      <p class="scene-class-comments">By default, only the geometry associated with this material contributes to subsurface. The DwaLayerMaterial ignores the sss trace sets of the submaterials. If you want adjacent geometry with different material to contribute as well, specify all those parts here.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.sss_trace_set
          path=image_path
      %}
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
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.fallback_glitter_LOD_quality
          path=image_path
      %}
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
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.fallback_glitter_debug_mode
          path=image_path
      %}
    </p>
    <h3>fallback_glitter_layering_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | physical = 0 (default)
          | additive = 1
      <p class="scene-class-comments">layering mode for glitter on top of the under material. physical: conserves energy and glitter attenuates under material, additive: breaks energy conservation but glitter is never darker than the under material (eg. use case: snow).  This parameter will only be used when layering two distinct glitter materials.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.fallback_glitter_layering_mode
          path=image_path
      %}
    </p>
    <h3>fallback_glitter_randomness</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">randomness of flake orientation.  This parameter will only be used when layering two distinct glitter materials.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.fallback_glitter_randomness
          path=image_path
      %}
    </p>
    <h3>fallback_glitter_seed</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The seed for the glitter random number generator.  This parameter will only be used when layering two distinct glitter materials.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.fallback_glitter_seed
          path=image_path
      %}
    </p>
    <h3>fallback_glitter_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | object = 4
          | reference = 5 (default)
      <p class="scene-class-comments">The space to calculate the worley noise in, defaults to reference space.  This parameter will only be used when layering two distinct glitter materials.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.fallback_glitter_space
          path=image_path
      %}
    </p>
    <h3>fallback_glitter_style_A_frequency</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">0 implies none of this style, 1 implies all the flakes will get this style.  This parameter will only be used when layering two distinct glitter materials.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.fallback_glitter_style_A_frequency
          path=image_path
      %}
    </p>
    <h3>fallback_glitter_style_B_frequency</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">0 implies none of this style, 1 implies all the flakes will get this style.  This parameter will only be used when layering two distinct glitter materials.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.fallback_glitter_style_B_frequency
          path=image_path
      %}
    </p>
    <h3>fallback_glitter_texture_A</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).  This parameter will only be used when layering two distinct glitter materials.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.fallback_glitter_texture_A
          path=image_path
      %}
    </p>
    <h3>fallback_glitter_texture_B</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).  This parameter will only be used when layering two distinct glitter materials.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.fallback_glitter_texture_B
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
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.extra_aovs
          path=image_path
      %}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.label
          path=image_path
      %}
    </p>
    <h3>material0</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material0
          path=image_path
      %}
    </p>
    <h3>material1</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material1
          path=image_path
      %}
    </p>
    <h3>material10</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material10
          path=image_path
      %}
    </p>
    <h3>material11</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material11
          path=image_path
      %}
    </p>
    <h3>material12</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material12
          path=image_path
      %}
    </p>
    <h3>material13</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material13
          path=image_path
      %}
    </p>
    <h3>material14</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material14
          path=image_path
      %}
    </p>
    <h3>material15</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material15
          path=image_path
      %}
    </p>
    <h3>material16</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material16
          path=image_path
      %}
    </p>
    <h3>material17</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material17
          path=image_path
      %}
    </p>
    <h3>material18</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material18
          path=image_path
      %}
    </p>
    <h3>material19</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material19
          path=image_path
      %}
    </p>
    <h3>material2</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material2
          path=image_path
      %}
    </p>
    <h3>material20</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material20
          path=image_path
      %}
    </p>
    <h3>material21</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material21
          path=image_path
      %}
    </p>
    <h3>material22</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material22
          path=image_path
      %}
    </p>
    <h3>material23</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material23
          path=image_path
      %}
    </p>
    <h3>material24</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material24
          path=image_path
      %}
    </p>
    <h3>material25</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material25
          path=image_path
      %}
    </p>
    <h3>material26</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material26
          path=image_path
      %}
    </p>
    <h3>material27</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material27
          path=image_path
      %}
    </p>
    <h3>material28</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material28
          path=image_path
      %}
    </p>
    <h3>material29</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material29
          path=image_path
      %}
    </p>
    <h3>material3</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material3
          path=image_path
      %}
    </p>
    <h3>material30</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material30
          path=image_path
      %}
    </p>
    <h3>material31</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material31
          path=image_path
      %}
    </p>
    <h3>material32</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material32
          path=image_path
      %}
    </p>
    <h3>material33</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material33
          path=image_path
      %}
    </p>
    <h3>material34</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material34
          path=image_path
      %}
    </p>
    <h3>material35</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material35
          path=image_path
      %}
    </p>
    <h3>material36</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material36
          path=image_path
      %}
    </p>
    <h3>material37</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material37
          path=image_path
      %}
    </p>
    <h3>material38</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material38
          path=image_path
      %}
    </p>
    <h3>material39</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material39
          path=image_path
      %}
    </p>
    <h3>material4</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material4
          path=image_path
      %}
    </p>
    <h3>material40</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material40
          path=image_path
      %}
    </p>
    <h3>material41</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material41
          path=image_path
      %}
    </p>
    <h3>material42</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material42
          path=image_path
      %}
    </p>
    <h3>material43</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material43
          path=image_path
      %}
    </p>
    <h3>material44</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material44
          path=image_path
      %}
    </p>
    <h3>material45</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material45
          path=image_path
      %}
    </p>
    <h3>material46</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material46
          path=image_path
      %}
    </p>
    <h3>material47</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material47
          path=image_path
      %}
    </p>
    <h3>material48</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material48
          path=image_path
      %}
    </p>
    <h3>material49</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material49
          path=image_path
      %}
    </p>
    <h3>material5</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material5
          path=image_path
      %}
    </p>
    <h3>material50</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material50
          path=image_path
      %}
    </p>
    <h3>material51</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material51
          path=image_path
      %}
    </p>
    <h3>material52</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material52
          path=image_path
      %}
    </p>
    <h3>material53</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material53
          path=image_path
      %}
    </p>
    <h3>material54</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material54
          path=image_path
      %}
    </p>
    <h3>material55</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material55
          path=image_path
      %}
    </p>
    <h3>material56</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material56
          path=image_path
      %}
    </p>
    <h3>material57</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material57
          path=image_path
      %}
    </p>
    <h3>material58</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material58
          path=image_path
      %}
    </p>
    <h3>material59</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material59
          path=image_path
      %}
    </p>
    <h3>material6</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material6
          path=image_path
      %}
    </p>
    <h3>material60</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material60
          path=image_path
      %}
    </p>
    <h3>material61</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material61
          path=image_path
      %}
    </p>
    <h3>material62</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material62
          path=image_path
      %}
    </p>
    <h3>material63</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material63
          path=image_path
      %}
    </p>
    <h3>material7</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material7
          path=image_path
      %}
    </p>
    <h3>material8</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material8
          path=image_path
      %}
    </p>
    <h3>material9</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.material9
          path=image_path
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Which of the 64 inputs (0 to 63) to use. Fractional values will mix the two materials the value lies between</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.mix
          path=image_path
      %}
    </p>
    <h3>mix_interpolation</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | linear = 0 (default)
          | hold = 1
          | nearest = 2
          | smooth = 3
      <p class="scene-class-comments">Adjusts rate of transition from one material to the next based on mix value</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.mix_interpolation
          path=image_path
      %}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.priority
          path=image_path
      %}
    </p>
    <h3>remap_mix_to_inputs</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">When enabled, multiplies mix value by number of inputs used. Inputs should start at 0 with no gaps</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.images.attributes.remap_mix_to_inputs
          path=image_path
      %}
    </p>
  </p>
</details>
</div>