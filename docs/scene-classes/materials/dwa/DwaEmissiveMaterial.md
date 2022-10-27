---
title: DwaEmissiveMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DwaEmissiveMaterial
{%assign image_path=site.data.scene-classes.materials.dwa.DwaEmissiveMaterial.image_path%}
{%if site.data.scene-classes.materials.dwa.DwaEmissiveMaterial.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.materials.dwa.DwaEmissiveMaterial.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.materials.dwa.DwaEmissiveMaterial.links-%}
---
## See Also
{%for link in site.data.scene-classes.materials.dwa.DwaEmissiveMaterial.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Common attributes</summary>
  <p>
    <h3>presence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">controls the visibility of this object. Useful for fading an object in/out, or to specify a cut-out mask on thin single-sided geometry (eg. a complex leaf texture on a simple card).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaEmissiveMaterialattributes.presence.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Emission attributes</summary>
  <p>
    <h3>emission</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the energy emitted from this material</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaEmissiveMaterialattributes.emission.images.
          path=image_path
      %}
    </p>
    <h3>show_emission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">enables/disable emission</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaEmissiveMaterialattributes.show_emission.images.
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
          images=site.data.scene-classes.materials.dwa.DwaEmissiveMaterialattributes.extra_aovs.images.
          path=image_path
      %}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaEmissiveMaterialattributes.label.images.
          path=image_path
      %}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.dwa.DwaEmissiveMaterialattributes.priority.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>