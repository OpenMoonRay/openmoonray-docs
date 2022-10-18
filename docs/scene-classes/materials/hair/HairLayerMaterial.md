---
title: HairLayerMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# HairLayerMaterial
---
{%assign image_dir=site.data.scene-classes.materials.hair.HairLayerMaterial.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.materials.hair.HairLayerMaterial.gallery
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
          images=site.data.scene-classes.materials.hair.HairLayerMaterial.blend_color_space
          image_dir=image_dir
      %}
    </p>
    <h3>fallback_bssrdf</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | normalized diffusion = 0 (default)
          | dipole = 1
      <p class="scene-class-comments">If child materials disagree on the type of bssrdf, this type will be used instead.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairLayerMaterial.fallback_bssrdf
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
          images=site.data.scene-classes.materials.hair.HairLayerMaterial.extra_aovs
          image_dir=image_dir
      %}
    </p>
    <h3>hair_material_A</h3>
    <p class="scene-class-type">
      <b>262144</b>
      default: None
      <p class="scene-class-comments">foreground hair material</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairLayerMaterial.hair_material_A
          image_dir=image_dir
      %}
    </p>
    <h3>hair_material_B</h3>
    <p class="scene-class-type">
      <b>262144</b>
      default: None
      <p class="scene-class-comments">background hair material</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairLayerMaterial.hair_material_B
          image_dir=image_dir
      %}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairLayerMaterial.label
          image_dir=image_dir
      %}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">foreground hair material weight</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairLayerMaterial.mask
          image_dir=image_dir
      %}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairLayerMaterial.priority
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>