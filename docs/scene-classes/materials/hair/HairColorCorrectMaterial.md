---
title: HairColorCorrectMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# HairColorCorrectMaterial
{%assign image_path=site.data.scene-classes.materials.hair.HairColorCorrectMaterial.image_path%}
{%if site.data.scene-classes.materials.hair.HairColorCorrectMaterial.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.materials.hair.HairColorCorrectMaterial.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.materials.hair.HairColorCorrectMaterial.links-%}
---
## See Also
{%for link in site.data.scene-classes.materials.hair.HairColorCorrectMaterial.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Hue/Sat/Gain attributes</summary>
  <p>
    <h3>gain</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">multiplies the input channels by the specified value</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairColorCorrectMaterial.attributes.gain.images.
          path=image_path
      %}
    </p>
    <h3>hue_shift</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">shifts the hue of the input (spectrum range is 0-1)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairColorCorrectMaterial.attributes.hue_shift.images.
          path=image_path
      %}
    </p>
    <h3>saturation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">desaturates the input below 1.0 and adds saturation above 1.0</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairColorCorrectMaterial.attributes.saturation.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>TMI attributes</summary>
  <p>
    <h3>TMI</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">T = Temperature where positive values push towards blue and negative towards red.   M = Magenta where positive values push towards magenta and negative towards green.  I = Intensity where negative values remove and positive values add energy </p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairColorCorrectMaterial.attributes.TMI.images.
          path=image_path
      %}
    </p>
    <h3>TMI_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">enables the TMI parameters</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairColorCorrectMaterial.attributes.TMI_enabled.images.
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
          images=site.data.scene-classes.materials.hair.HairColorCorrectMaterial.attributes.extra_aovs.images.
          path=image_path
      %}
    </p>
    <h3>input_hair_material</h3>
    <p class="scene-class-type">
      <b>262144</b>
      default: None
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairColorCorrectMaterial.attributes.input_hair_material.images.
          path=image_path
      %}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairColorCorrectMaterial.attributes.label.images.
          path=image_path
      %}
    </p>
    <h3>mix</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">how much of the overall color correct to mix in</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairColorCorrectMaterial.attributes.mix.images.
          path=image_path
      %}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Enable/disable all color corrections</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairColorCorrectMaterial.attributes.on.images.
          path=image_path
      %}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.hair.HairColorCorrectMaterial.attributes.priority.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>