---
title: Base Material
---
# BaseMaterial
{%-include overview.html data=site.data.scene-classes.materials.BaseMaterial-%}
{%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.gallery data=site.data.scene-classes.materials.BaseMaterial-%}
{%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.links-%}
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
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.diffuse.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.diffuse.links heading=4-%}
    </p>
    <h3>diffuse_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.diffuse_color.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.diffuse_color.links heading=4-%}
    </p>
    <h3>diffuse_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.diffuse_factor.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.diffuse_factor.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.directional_diffuse.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.directional_diffuse.links heading=4-%}
    </p>
    <h3>directional_diffuse_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.directional_diffuse_color.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.directional_diffuse_color.links heading=4-%}
    </p>
    <h3>directional_diffuse_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.directional_diffuse_factor.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.directional_diffuse_factor.links heading=4-%}
    </p>
    <h3>directional_diffuse_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.5
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.directional_diffuse_roughness.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.directional_diffuse_roughness.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.emission.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.emission.links heading=4-%}
    </p>
    <h3>emission_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.emission_color.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.emission_color.links heading=4-%}
    </p>
    <h3>emission_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.emission_factor.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.emission_factor.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.iridescence.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.iridescence.links heading=4-%}
    </p>
    <h3>iridescence_at_0_incidence</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Iridescence effect at 0 degree viewing angle</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.iridescence_at_0_incidence.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.iridescence_at_0_incidence.links heading=4-%}
    </p>
    <h3>iridescence_exponent</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Tightens or broadens the distribution of colors</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.iridescence_exponent.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.iridescence_exponent.links heading=4-%}
    </p>
    <h3>iridescence_factor</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">overall multiplier on effect of iridescence</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.iridescence_factor.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.iridescence_factor.links heading=4-%}
    </p>
    <h3>iridescence_flip_hue_direction</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.iridescence_flip_hue_direction.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.iridescence_flip_hue_direction.links heading=4-%}
    </p>
    <h3>iridescence_primary_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 0, 0 ]
      <p class="scene-class-comments">First color to interpolate from around the hue wheel</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.iridescence_primary_color.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.iridescence_primary_color.links heading=4-%}
    </p>
    <h3>iridescence_secondary_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 0, 0 ]
      <p class="scene-class-comments">Second color to interpolate to around the hue wheel</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.iridescence_secondary_color.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.iridescence_secondary_color.links heading=4-%}
    </p>
    <h3>iridescence_thickness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">Controls how much the color spectrum is repeated</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.iridescence_thickness.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.iridescence_thickness.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.input_normal_space.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.input_normal_space.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.opacity.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.opacity.links heading=4-%}
    </p>
    <h3>opacity_factor</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.opacity_factor.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.opacity_factor.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.retroreflectivity.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.retroreflectivity.links heading=4-%}
    </p>
    <h3>specular</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.specular.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.specular.links heading=4-%}
    </p>
    <h3>specular_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.specular_color.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.specular_color.links heading=4-%}
    </p>
    <h3>specular_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.10000000149
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.specular_factor.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.specular_factor.links heading=4-%}
    </p>
    <h3>specular_roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.300000011921
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.specular_roughness.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.specular_roughness.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.translucency.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.translucency.links heading=4-%}
    </p>
    <h3>translucency_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.translucency_color.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.translucency_color.links heading=4-%}
    </p>
    <h3>translucency_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.translucency_factor.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.translucency_factor.links heading=4-%}
    </p>
    <h3>translucency_falloff</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.translucency_falloff.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.translucency_falloff.links heading=4-%}
    </p>
    <h3>translucency_radius</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.translucency_radius.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.translucency_radius.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.translucent_diffuse.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.translucent_diffuse.links heading=4-%}
    </p>
    <h3>translucent_diffuse_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.translucent_diffuse_color.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.translucent_diffuse_color.links heading=4-%}
    </p>
    <h3>translucent_diffuse_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.translucent_diffuse_factor.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.translucent_diffuse_factor.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.transmission.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.transmission.links heading=4-%}
    </p>
    <h3>transmission_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.transmission_color.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.transmission_color.links heading=4-%}
    </p>
    <h3>transmission_factor</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.transmission_factor.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.transmission_factor.links heading=4-%}
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
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.anisotropic_direction.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.anisotropic_direction.links heading=4-%}
    </p>
    <h3>anisotropy</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.anisotropy.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.anisotropy.links heading=4-%}
    </p>
    <h3>casts_caustics</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.casts_caustics.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.casts_caustics.links heading=4-%}
    </p>
    <h3>extra_aovs</h3>
    <p class="scene-class-type">
      <b>Map</b>
      default: None
      <p class="scene-class-comments">Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.extra_aovs.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.extra_aovs.links heading=4-%}
    </p>
    <h3>fresnel_factor</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.fresnel_factor.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.fresnel_factor.links heading=4-%}
    </p>
    <h3>index_of_refraction</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-comments">affects transmission and translucency</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.index_of_refraction.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.index_of_refraction.links heading=4-%}
    </p>
    <h3>input_normal</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.input_normal.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.input_normal.links heading=4-%}
    </p>
    <h3>input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.input_normal_dial.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.input_normal_dial.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.label.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.label.links heading=4-%}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.priority.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.priority.links heading=4-%}
    </p>
    <h3>use_fresnel</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.scene-classes.materials.BaseMaterial.attributes.use_fresnel.images data=site.data.scene-classes.materials.BaseMaterial-%}
      {%-include see-also.html links=site.data.scene-classes.materials.BaseMaterial.attributes.use_fresnel.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.scene-classes.materials.BaseMaterial-%}