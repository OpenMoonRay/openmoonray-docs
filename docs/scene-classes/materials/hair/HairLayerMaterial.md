---
title: HairLayerMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# HairLayerMaterial
{%assign image_path=site.data.scene-classes.materials.hair.HairLayerMaterial.images.path%}
{%if site.data.scene-classes.materials.hair.HairLayerMaterial.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.materials.hair.HairLayerMaterial.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.materials.hair.HairLayerMaterial.links-%}
---
## See Also
{%for link in site.data.scene-classes.materials.hair.HairLayerMaterial.links-%}
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
          images=site.data.scene-classes.materials.hair.HairLayerMaterial.images.attributes.blend_color_space
          path=image_path
      %}
    </p>
    <h3>fallback_bssrdf</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | normalized diffusion = 0 (default)
          | dipole = 1
      <p class="scene-class-comments">If child materials disagree on the type of bssrdf, this type will be used instead.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairLayerMaterial.images.attributes.fallback_bssrdf
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
          images=site.data.scene-classes.materials.hair.HairLayerMaterial.images.attributes.extra_aovs
          path=image_path
      %}
    </p>
    <h3>hair_material_A</h3>
    <p class="scene-class-type">
      <b>262144</b>
      default: None
      <p class="scene-class-comments">foreground hair material</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairLayerMaterial.images.attributes.hair_material_A
          path=image_path
      %}
    </p>
    <h3>hair_material_B</h3>
    <p class="scene-class-type">
      <b>262144</b>
      default: None
      <p class="scene-class-comments">background hair material</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairLayerMaterial.images.attributes.hair_material_B
          path=image_path
      %}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairLayerMaterial.images.attributes.label
          path=image_path
      %}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">foreground hair material weight</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairLayerMaterial.images.attributes.mask
          path=image_path
      %}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairLayerMaterial.images.attributes.priority
          path=image_path
      %}
    </p>
  </p>
</details>
</div>