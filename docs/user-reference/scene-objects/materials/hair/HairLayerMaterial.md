---
title: HairLayerMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# HairLayerMaterial
{%-include overview.html data=site.data.user-reference.scene-objects.materials.HairLayerMaterial-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairLayerMaterial.gallery data=site.data.user-reference.scene-objects.materials.HairLayerMaterial-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairLayerMaterial.links-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairLayerMaterial.attributes.blend_color_space.images data=site.data.user-reference.scene-objects.materials.HairLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairLayerMaterial.attributes.blend_color_space.links heading=4-%}
    </p>
    <h3>fallback_bssrdf</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;normalized diffusion&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;dipole&rdquo;<br>
      <p class="scene-class-comments">If child materials disagree on the type of bssrdf, this type will be used instead.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairLayerMaterial.attributes.fallback_bssrdf.images data=site.data.user-reference.scene-objects.materials.HairLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairLayerMaterial.attributes.fallback_bssrdf.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairLayerMaterial.attributes.extra_aovs.images data=site.data.user-reference.scene-objects.materials.HairLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairLayerMaterial.attributes.extra_aovs.links heading=4-%}
    </p>
    <h3>hair_material_A</h3>
    <p class="scene-class-type">
      <b>DwaBaseHairLayerable</b>
      <br>
      default: None
      <p class="scene-class-comments">Foreground hair material</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairLayerMaterial.attributes.hair_material_A.images data=site.data.user-reference.scene-objects.materials.HairLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairLayerMaterial.attributes.hair_material_A.links heading=4-%}
    </p>
    <h3>hair_material_B</h3>
    <p class="scene-class-type">
      <b>DwaBaseHairLayerable</b>
      <br>
      default: None
      <p class="scene-class-comments">Background hair material</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairLayerMaterial.attributes.hair_material_B.images data=site.data.user-reference.scene-objects.materials.HairLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairLayerMaterial.attributes.hair_material_B.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">Label used in material and light aovs</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairLayerMaterial.attributes.label.images data=site.data.user-reference.scene-objects.materials.HairLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairLayerMaterial.attributes.label.links heading=4-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 1.0
      <p class="scene-class-comments">Foreground hair material weight</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairLayerMaterial.attributes.mask.images data=site.data.user-reference.scene-objects.materials.HairLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairLayerMaterial.attributes.mask.links heading=4-%}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. a value of 0 means the priority should be ignored. materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  to enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.HairLayerMaterial.attributes.priority.images data=site.data.user-reference.scene-objects.materials.HairLayerMaterial-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.HairLayerMaterial.attributes.priority.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.materials.HairLayerMaterial-%}