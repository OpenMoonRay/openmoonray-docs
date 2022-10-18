---
title: GlitterFlakeMaterial_v2

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# GlitterFlakeMaterial_v2
---
{%assign image_dir=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.gallery
    image_dir=image_dir
%}
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>approximate_glitter_for_secondary_rays</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">use an approximation to shade glitter for non-mirror secondary rays</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.approximate_glitter_for_secondary_rays
          image_dir=image_dir
      %}
    </p>
    <h3>debug_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | off = 0 (default)
          | blend = 1
          | color = 2
          | averageColor = 3
          | footprintArea = 4
          | radius = 5
      <p class="scene-class-comments">developer debug visualization modes</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.debug_mode
          image_dir=image_dir
      %}
    </p>
    <h3>dense_glitter_LOD_quality</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">controls quality of glitter at distances where individual flakes cannot be perceived; at lower values, approximation kicks in earlier</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.dense_glitter_LOD_quality
          image_dir=image_dir
      %}
    </p>
    <h3>glitter_mask</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">use this to control where glitter appears</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.glitter_mask
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Appearance attributes</summary>
  <p>
    <h3>decouple_flake_size</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">makes flake size independent of flake density</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.decouple_flake_size
          image_dir=image_dir
      %}
    </p>
    <h3>flake_color_hue_variation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">introduce hue variation in flake color centered at the base flake color's hue on the hue wheel</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.flake_color_hue_variation
          image_dir=image_dir
      %}
    </p>
    <h3>flake_color_saturation_variation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">introduce saturation variation in flake color centered at the base flake color's saturation</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.flake_color_saturation_variation
          image_dir=image_dir
      %}
    </p>
    <h3>flake_color_value_variation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">introduce value variation in flake color centered at the base flake color's value</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.flake_color_value_variation
          image_dir=image_dir
      %}
    </p>
    <h3>flake_density</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">controls the number of flakes per unit length; larger density packs more flakes into same space</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.flake_density
          image_dir=image_dir
      %}
    </p>
    <h3>flake_jitter</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Controls how much the flakes are randomly offset from a regular grid</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.flake_jitter
          image_dir=image_dir
      %}
    </p>
    <h3>flake_orientation_randomness</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.15000000596
      <p class="scene-class-comments">randomly orient each texture</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.flake_orientation_randomness
          image_dir=image_dir
      %}
    </p>
    <h3>flake_randomness</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">randomness of flake orientation</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.flake_randomness
          image_dir=image_dir
      %}
    </p>
    <h3>flake_texture_1</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.flake_texture_1
          image_dir=image_dir
      %}
    </p>
    <h3>flake_texture_1_frequency</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">0 implies none of this texture, 1 implies all the flakes will get this texture</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.flake_texture_1_frequency
          image_dir=image_dir
      %}
    </p>
    <h3>flake_texture_2</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.flake_texture_2
          image_dir=image_dir
      %}
    </p>
    <h3>flake_texture_2_frequency</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">0 implies none of this texture, 1 implies all the flakes will get this texture</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.flake_texture_2_frequency
          image_dir=image_dir
      %}
    </p>
    <h3>use_flake_textures</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">use textured glitter flakes</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.use_flake_textures
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Common attributes</summary>
  <p>
    <h3>presence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.presence
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Flake Generation attributes</summary>
  <p>
    <h3>compensate_reference_space_deformation</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">(In ReferenceSpace) Compensates for stretch/compression/shear in glitter shapes resulting from animation etc</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.compensate_reference_space_deformation
          image_dir=image_dir
      %}
    </p>
    <h3>seed</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The seed for the random number generator</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.seed
          image_dir=image_dir
      %}
    </p>
    <h3>space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | object = 4
          | reference = 5 (default)
      <p class="scene-class-comments">The space to calculate the noise in, defaults to reference space</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.space
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Glitter A Appearance attributes</summary>
  <p>
    <h3>flake_color_A</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">base flake color (use physical metallic color values)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.flake_color_A
          image_dir=image_dir
      %}
    </p>
    <h3>flake_roughness_A</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.140000000596
      <p class="scene-class-comments">specular roughness of individual flakes (0 makes flakes mirror-like)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.flake_roughness_A
          image_dir=image_dir
      %}
    </p>
    <h3>flake_size_A</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">size of the flakes.   Apparent flake size may vary based on how much the flake spheres intersect the surface</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.flake_size_A
          image_dir=image_dir
      %}
    </p>
    <h3>flake_style_A_frequency</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">0 implies none of this style, 1 implies all the flakes will get this style</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.flake_style_A_frequency
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Glitter B Appearance attributes</summary>
  <p>
    <h3>flake_color_B</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">base flake color (use physical metallic color values)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.flake_color_B
          image_dir=image_dir
      %}
    </p>
    <h3>flake_roughness_B</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.140000000596
      <p class="scene-class-comments">specular roughness of individual flakes (0 makes flakes mirror-like)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.flake_roughness_B
          image_dir=image_dir
      %}
    </p>
    <h3>flake_size_B</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">size of the flakes.   Apparent flake size may vary based on how much the flake spheres intersect the surface</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.flake_size_B
          image_dir=image_dir
      %}
    </p>
    <h3>flake_style_B_frequency</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">0 implies none of this style, 1 implies all the flakes will get this style</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.flake_style_B_frequency
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Layering attributes</summary>
  <p>
    <h3>layering_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | physical = 0 (default)
          | additive = 1
      <p class="scene-class-comments">layering mode for glitter on top of the under material. physical: conserves energy and glitter attenuates under material, additive: breaks energy conservation but glitter is never darker than the under material (eg. use case: snow)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.layering_mode
          image_dir=image_dir
      %}
    </p>
    <h3>under_material</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-comments">material that fills the gaps between glitter flakes</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.under_material
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
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.extra_aovs
          image_dir=image_dir
      %}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.label
          image_dir=image_dir
      %}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.GlitterFlakeMaterial_v2.priority
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>