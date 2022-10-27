---
title: MeasuredMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# MeasuredMaterial
{%assign image_path=site.data.scene-classes.materials.MeasuredMaterial.image_path%}
{%if site.data.scene-classes.materials.MeasuredMaterial.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.materials.MeasuredMaterial.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.materials.MeasuredMaterial.links-%}
---
## See Also
{%for link in site.data.scene-classes.materials.MeasuredMaterial.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Diffuse attributes</summary>
  <p>
    <h3>diffuse</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.MeasuredMaterialattributes.diffuse.images.
          path=image_path
      %}
    </p>
    <h3>diffuse_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.MeasuredMaterialattributes.diffuse_color.images.
          path=image_path
      %}
    </p>
    <h3>diffuse_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.MeasuredMaterialattributes.diffuse_factor.images.
          path=image_path
      %}
    </p>
    <h3>diffuse_filename</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.MeasuredMaterialattributes.diffuse_filename.images.
          path=image_path
      %}
    </p>
    <h3>diffuse_hue_shift</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.MeasuredMaterialattributes.diffuse_hue_shift.images.
          path=image_path
      %}
    </p>
    <h3>diffuse_saturation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.MeasuredMaterialattributes.diffuse_saturation.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Specular attributes</summary>
  <p>
    <h3>specular</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.MeasuredMaterialattributes.specular.images.
          path=image_path
      %}
    </p>
    <h3>specular_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.MeasuredMaterialattributes.specular_color.images.
          path=image_path
      %}
    </p>
    <h3>specular_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.MeasuredMaterialattributes.specular_factor.images.
          path=image_path
      %}
    </p>
    <h3>specular_filename</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.MeasuredMaterialattributes.specular_filename.images.
          path=image_path
      %}
    </p>
    <h3>specular_hue_shift</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.MeasuredMaterialattributes.specular_hue_shift.images.
          path=image_path
      %}
    </p>
    <h3>specular_saturation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.MeasuredMaterialattributes.specular_saturation.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>anisotropic_direction</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 1, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.MeasuredMaterialattributes.anisotropic_direction.images.
          path=image_path
      %}
    </p>
    <h3>casts_caustics</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.MeasuredMaterialattributes.casts_caustics.images.
          path=image_path
      %}
    </p>
    <h3>extra_aovs</h3>
    <p class="scene-class-type">
      <b>Map</b>
      default: None
      <p class="scene-class-comments">Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.MeasuredMaterialattributes.extra_aovs.images.
          path=image_path
      %}
    </p>
    <h3>input_normal</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.MeasuredMaterialattributes.input_normal.images.
          path=image_path
      %}
    </p>
    <h3>input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.MeasuredMaterialattributes.input_normal_dial.images.
          path=image_path
      %}
    </p>
    <h3>input_normal_space</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.MeasuredMaterialattributes.input_normal_space.images.
          path=image_path
      %}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.MeasuredMaterialattributes.label.images.
          path=image_path
      %}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.MeasuredMaterialattributes.priority.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>