---
title: BaseMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# BaseMaterial
{%assign image_path=site.data.scene-classes.materials.BaseMaterial.images.path%}
{%if site.data.scene-classes.materials.BaseMaterial.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.materials.BaseMaterial.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.materials.BaseMaterial.links-%}
---
## See Also
{%for link in site.data.scene-classes.materials.BaseMaterial.links-%}
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
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.diffuse
          path=image_path
      %}
    </p>
    <h3>diffuse_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.diffuse_color
          path=image_path
      %}
    </p>
    <h3>diffuse_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.diffuse_factor
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Directional Diffuse attributes</summary>
  <p>
    <h3>directional_diffuse</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.directional_diffuse
          path=image_path
      %}
    </p>
    <h3>directional_diffuse_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.directional_diffuse_color
          path=image_path
      %}
    </p>
    <h3>directional_diffuse_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.directional_diffuse_factor
          path=image_path
      %}
    </p>
    <h3>directional_diffuse_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.5
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.directional_diffuse_roughness
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
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.emission
          path=image_path
      %}
    </p>
    <h3>emission_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.emission_color
          path=image_path
      %}
    </p>
    <h3>emission_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.emission_factor
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Iridescence attributes</summary>
  <p>
    <h3>iridescence</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.iridescence
          path=image_path
      %}
    </p>
    <h3>iridescence_at_0_incidence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Iridescence effect at 0 degree viewing angle</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.iridescence_at_0_incidence
          path=image_path
      %}
    </p>
    <h3>iridescence_exponent</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Tightens or broadens the distribution of colors</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.iridescence_exponent
          path=image_path
      %}
    </p>
    <h3>iridescence_factor</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">overall multiplier on effect of iridescence</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.iridescence_factor
          path=image_path
      %}
    </p>
    <h3>iridescence_flip_hue_direction</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.iridescence_flip_hue_direction
          path=image_path
      %}
    </p>
    <h3>iridescence_primary_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 0, 0 ]
      <p class="scene-class-comments">First color to interpolate from around the hue wheel</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.iridescence_primary_color
          path=image_path
      %}
    </p>
    <h3>iridescence_secondary_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 0, 0 ]
      <p class="scene-class-comments">Second color to interpolate to around the hue wheel</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.iridescence_secondary_color
          path=image_path
      %}
    </p>
    <h3>iridescence_thickness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Controls how much the color spectrum is repeated</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.iridescence_thickness
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Normal attributes</summary>
  <p>
    <h3>input_normal_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | tangent = 0 (default)
          | render = 1
      <p class="scene-class-comments">Specifies what space the input normal is in.  Usually this is tangent space for texture maps and render space for projections</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.input_normal_space
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Opacity attributes</summary>
  <p>
    <h3>opacity</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.opacity
          path=image_path
      %}
    </p>
    <h3>opacity_factor</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.opacity_factor
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Specular attributes</summary>
  <p>
    <h3>retroreflectivity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.retroreflectivity
          path=image_path
      %}
    </p>
    <h3>specular</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.specular
          path=image_path
      %}
    </p>
    <h3>specular_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.specular_color
          path=image_path
      %}
    </p>
    <h3>specular_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.10000000149
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.specular_factor
          path=image_path
      %}
    </p>
    <h3>specular_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.300000011921
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.specular_roughness
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Translucency attributes</summary>
  <p>
    <h3>translucency</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.translucency
          path=image_path
      %}
    </p>
    <h3>translucency_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.translucency_color
          path=image_path
      %}
    </p>
    <h3>translucency_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.translucency_factor
          path=image_path
      %}
    </p>
    <h3>translucency_falloff</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.translucency_falloff
          path=image_path
      %}
    </p>
    <h3>translucency_radius</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.translucency_radius
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Translucent Diffuse attributes</summary>
  <p>
    <h3>translucent_diffuse</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.translucent_diffuse
          path=image_path
      %}
    </p>
    <h3>translucent_diffuse_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.translucent_diffuse_color
          path=image_path
      %}
    </p>
    <h3>translucent_diffuse_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.translucent_diffuse_factor
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Transmission attributes</summary>
  <p>
    <h3>transmission</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.transmission
          path=image_path
      %}
    </p>
    <h3>transmission_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.transmission_color
          path=image_path
      %}
    </p>
    <h3>transmission_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.transmission_factor
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
      <b>Vec2f</b> <i>bindable</i>
      default: [ 1, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.anisotropic_direction
          path=image_path
      %}
    </p>
    <h3>anisotropy</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.anisotropy
          path=image_path
      %}
    </p>
    <h3>casts_caustics</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.casts_caustics
          path=image_path
      %}
    </p>
    <h3>extra_aovs</h3>
    <p class="scene-class-type">
      <b>Map</b>
      default: None
      <p class="scene-class-comments">Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.extra_aovs
          path=image_path
      %}
    </p>
    <h3>fresnel_factor</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.fresnel_factor
          path=image_path
      %}
    </p>
    <h3>index_of_refraction</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">affects transmission and translucency</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.index_of_refraction
          path=image_path
      %}
    </p>
    <h3>input_normal</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.input_normal
          path=image_path
      %}
    </p>
    <h3>input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.input_normal_dial
          path=image_path
      %}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.label
          path=image_path
      %}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.priority
          path=image_path
      %}
    </p>
    <h3>use_fresnel</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.materials.BaseMaterial.images.attributes.use_fresnel
          path=image_path
      %}
    </p>
  </p>
</details>
</div>