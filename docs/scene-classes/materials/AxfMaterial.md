---
title: AxfMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# AxfMaterial
---
{%assign image_dir=site.data.scene-classes.materials.AxfMaterial.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.materials.AxfMaterial.gallery
    image_dir=image_dir
%}
<details open>
  <summary>Normal attributes</summary>
  <p>
    <h3>input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">controls the amount of influence of the alternate normal</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.AxfMaterial.input_normal_dial
          image_dir=image_dir
      %}
    </p>
    <h3>normal</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">bind the 'Normal' texture here, the multiplier is ignored. The state's normal is used when no texture is bound.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.AxfMaterial.normal
          image_dir=image_dir
      %}
    </p>
    <h3>normal_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | tangent = 0 (default)
          | render = 1
      <p class="scene-class-comments">Specifies what space the normal is given in.  Usually this is tangent space for texture maps and render space for projections</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.AxfMaterial.normal_space
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>alpha</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">bind the 'Alpha' texture here</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.AxfMaterial.alpha
          image_dir=image_dir
      %}
    </p>
    <h3>aniso_rotation</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">bind the 'AnisoRotation' texture here</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.AxfMaterial.aniso_rotation
          image_dir=image_dir
      %}
    </p>
    <h3>casts_caustics</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">allows continuation of caustic light paths</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.AxfMaterial.casts_caustics
          image_dir=image_dir
      %}
    </p>
    <h3>diffuse_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">bind the 'DiffuseColor' texture here</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.AxfMaterial.diffuse_color
          image_dir=image_dir
      %}
    </p>
    <h3>extra_aovs</h3>
    <p class="scene-class-type">
      <b>Map</b>
      default: None
      <p class="scene-class-comments">Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.AxfMaterial.extra_aovs
          image_dir=image_dir
      %}
    </p>
    <h3>fresnel</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">bind the 'Fresnel' texture here</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.AxfMaterial.fresnel
          image_dir=image_dir
      %}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.AxfMaterial.label
          image_dir=image_dir
      %}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.AxfMaterial.priority
          image_dir=image_dir
      %}
    </p>
    <h3>specular_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">bind the 'SpecularColor' texture here</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.AxfMaterial.specular_color
          image_dir=image_dir
      %}
    </p>
    <h3>specular_lobe</h3>
    <p class="scene-class-type">
      <b>Vec2f</b> <i>bindable</i>
      default: [ 1, 1 ]
      <p class="scene-class-comments">bind the 'SpecularLobe' texture here</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.AxfMaterial.specular_lobe
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>