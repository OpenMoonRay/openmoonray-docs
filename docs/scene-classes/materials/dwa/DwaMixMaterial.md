---
title: DwaMixMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DwaMixMaterial
---
{%assign image_dir=site.data.scene-classes.materials.dwa.DwaMixMaterial.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.materials.dwa.DwaMixMaterial.gallery
    image_dir=image_dir
%}
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
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.blend_color_space
          image_dir=image_dir
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
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.fallback_bssrdf
          image_dir=image_dir
      %}
    </p>
    <h3>fallback_clearcoat_use_bending</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">If child materials disagree on the type of clearcoat use bending, this type will be used instead.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.fallback_clearcoat_use_bending
          image_dir=image_dir
      %}
    </p>
    <h3>fallback_outer_specular_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | Beckmann = 0
          | GGX = 1 (default)
      <p class="scene-class-comments">If child materials disagree on the type of outer specular model, this type will be used instead.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.fallback_outer_specular_model
          image_dir=image_dir
      %}
    </p>
    <h3>fallback_specular_model</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | Beckmann = 0
          | GGX = 1 (default)
      <p class="scene-class-comments">If child materials disagree on the type of specular model, this type will be used instead.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.fallback_specular_model
          image_dir=image_dir
      %}
    </p>
    <h3>fallback_thin_geometry</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">If child materials disagree on the type of thin geometry, this type will be used instead.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.fallback_thin_geometry
          image_dir=image_dir
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
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.fallback_toon_specular_model
          image_dir=image_dir
      %}
    </p>
    <h3>sss_trace_set</h3>
    <p class="scene-class-type">
      <b>Traceset</b>
      default: None
      <p class="scene-class-comments">By default, only the geometry associated with this material contributes to subsurface. The DwaLayerMaterial ignores the sss trace sets of the submaterials. If you want adjacent geometry with different material to contribute as well, specify all those parts here.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.sss_trace_set
          image_dir=image_dir
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
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.fallback_glitter_LOD_quality
          image_dir=image_dir
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
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.fallback_glitter_debug_mode
          image_dir=image_dir
      %}
    </p>
    <h3>fallback_glitter_layering_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | physical = 0 (default)
          | additive = 1
      <p class="scene-class-comments">layering mode for glitter on top of the under material. physical: conserves energy and glitter attenuates under material, additive: breaks energy conservation but glitter is never darker than the under material (eg. use case: snow).  This parameter will only be used when layering two distinct glitter materials.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.fallback_glitter_layering_mode
          image_dir=image_dir
      %}
    </p>
    <h3>fallback_glitter_randomness</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">randomness of flake orientation.  This parameter will only be used when layering two distinct glitter materials.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.fallback_glitter_randomness
          image_dir=image_dir
      %}
    </p>
    <h3>fallback_glitter_seed</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The seed for the glitter random number generator.  This parameter will only be used when layering two distinct glitter materials.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.fallback_glitter_seed
          image_dir=image_dir
      %}
    </p>
    <h3>fallback_glitter_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | object = 4
          | reference = 5 (default)
      <p class="scene-class-comments">The space to calculate the worley noise in, defaults to reference space.  This parameter will only be used when layering two distinct glitter materials.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.fallback_glitter_space
          image_dir=image_dir
      %}
    </p>
    <h3>fallback_glitter_style_A_frequency</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">0 implies none of this style, 1 implies all the flakes will get this style.  This parameter will only be used when layering two distinct glitter materials.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.fallback_glitter_style_A_frequency
          image_dir=image_dir
      %}
    </p>
    <h3>fallback_glitter_style_B_frequency</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">0 implies none of this style, 1 implies all the flakes will get this style.  This parameter will only be used when layering two distinct glitter materials.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.fallback_glitter_style_B_frequency
          image_dir=image_dir
      %}
    </p>
    <h3>fallback_glitter_texture_A</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).  This parameter will only be used when layering two distinct glitter materials.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.fallback_glitter_texture_A
          image_dir=image_dir
      %}
    </p>
    <h3>fallback_glitter_texture_B</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).  This parameter will only be used when layering two distinct glitter materials.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.fallback_glitter_texture_B
          image_dir=image_dir
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
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.extra_aovs
          image_dir=image_dir
      %}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.label
          image_dir=image_dir
      %}
    </p>
    <h3>material0</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material0
          image_dir=image_dir
      %}
    </p>
    <h3>material1</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material1
          image_dir=image_dir
      %}
    </p>
    <h3>material10</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material10
          image_dir=image_dir
      %}
    </p>
    <h3>material11</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material11
          image_dir=image_dir
      %}
    </p>
    <h3>material12</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material12
          image_dir=image_dir
      %}
    </p>
    <h3>material13</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material13
          image_dir=image_dir
      %}
    </p>
    <h3>material14</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material14
          image_dir=image_dir
      %}
    </p>
    <h3>material15</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material15
          image_dir=image_dir
      %}
    </p>
    <h3>material16</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material16
          image_dir=image_dir
      %}
    </p>
    <h3>material17</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material17
          image_dir=image_dir
      %}
    </p>
    <h3>material18</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material18
          image_dir=image_dir
      %}
    </p>
    <h3>material19</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material19
          image_dir=image_dir
      %}
    </p>
    <h3>material2</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material2
          image_dir=image_dir
      %}
    </p>
    <h3>material20</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material20
          image_dir=image_dir
      %}
    </p>
    <h3>material21</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material21
          image_dir=image_dir
      %}
    </p>
    <h3>material22</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material22
          image_dir=image_dir
      %}
    </p>
    <h3>material23</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material23
          image_dir=image_dir
      %}
    </p>
    <h3>material24</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material24
          image_dir=image_dir
      %}
    </p>
    <h3>material25</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material25
          image_dir=image_dir
      %}
    </p>
    <h3>material26</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material26
          image_dir=image_dir
      %}
    </p>
    <h3>material27</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material27
          image_dir=image_dir
      %}
    </p>
    <h3>material28</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material28
          image_dir=image_dir
      %}
    </p>
    <h3>material29</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material29
          image_dir=image_dir
      %}
    </p>
    <h3>material3</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material3
          image_dir=image_dir
      %}
    </p>
    <h3>material30</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material30
          image_dir=image_dir
      %}
    </p>
    <h3>material31</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material31
          image_dir=image_dir
      %}
    </p>
    <h3>material32</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material32
          image_dir=image_dir
      %}
    </p>
    <h3>material33</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material33
          image_dir=image_dir
      %}
    </p>
    <h3>material34</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material34
          image_dir=image_dir
      %}
    </p>
    <h3>material35</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material35
          image_dir=image_dir
      %}
    </p>
    <h3>material36</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material36
          image_dir=image_dir
      %}
    </p>
    <h3>material37</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material37
          image_dir=image_dir
      %}
    </p>
    <h3>material38</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material38
          image_dir=image_dir
      %}
    </p>
    <h3>material39</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material39
          image_dir=image_dir
      %}
    </p>
    <h3>material4</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material4
          image_dir=image_dir
      %}
    </p>
    <h3>material40</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material40
          image_dir=image_dir
      %}
    </p>
    <h3>material41</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material41
          image_dir=image_dir
      %}
    </p>
    <h3>material42</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material42
          image_dir=image_dir
      %}
    </p>
    <h3>material43</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material43
          image_dir=image_dir
      %}
    </p>
    <h3>material44</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material44
          image_dir=image_dir
      %}
    </p>
    <h3>material45</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material45
          image_dir=image_dir
      %}
    </p>
    <h3>material46</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material46
          image_dir=image_dir
      %}
    </p>
    <h3>material47</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material47
          image_dir=image_dir
      %}
    </p>
    <h3>material48</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material48
          image_dir=image_dir
      %}
    </p>
    <h3>material49</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material49
          image_dir=image_dir
      %}
    </p>
    <h3>material5</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material5
          image_dir=image_dir
      %}
    </p>
    <h3>material50</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material50
          image_dir=image_dir
      %}
    </p>
    <h3>material51</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material51
          image_dir=image_dir
      %}
    </p>
    <h3>material52</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material52
          image_dir=image_dir
      %}
    </p>
    <h3>material53</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material53
          image_dir=image_dir
      %}
    </p>
    <h3>material54</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material54
          image_dir=image_dir
      %}
    </p>
    <h3>material55</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material55
          image_dir=image_dir
      %}
    </p>
    <h3>material56</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material56
          image_dir=image_dir
      %}
    </p>
    <h3>material57</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material57
          image_dir=image_dir
      %}
    </p>
    <h3>material58</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material58
          image_dir=image_dir
      %}
    </p>
    <h3>material59</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material59
          image_dir=image_dir
      %}
    </p>
    <h3>material6</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material6
          image_dir=image_dir
      %}
    </p>
    <h3>material60</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material60
          image_dir=image_dir
      %}
    </p>
    <h3>material61</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material61
          image_dir=image_dir
      %}
    </p>
    <h3>material62</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material62
          image_dir=image_dir
      %}
    </p>
    <h3>material63</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material63
          image_dir=image_dir
      %}
    </p>
    <h3>material7</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material7
          image_dir=image_dir
      %}
    </p>
    <h3>material8</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material8
          image_dir=image_dir
      %}
    </p>
    <h3>material9</h3>
    <p class="scene-class-type">
      <b>Dwabaselayerable</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.material9
          image_dir=image_dir
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Which of the 64 inputs (0 to 63) to use. Fractional values will mix the two materials the value lies between</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.mix
          image_dir=image_dir
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
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.mix_interpolation
          image_dir=image_dir
      %}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.priority
          image_dir=image_dir
      %}
    </p>
    <h3>remap_mix_to_inputs</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">When enabled, multiplies mix value by number of inputs used. Inputs should start at 0 with no gaps</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaMixMaterial.remap_mix_to_inputs
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>