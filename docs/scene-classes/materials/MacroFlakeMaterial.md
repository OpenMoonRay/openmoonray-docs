---
title: MacroFlakeMaterial

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# MacroFlakeMaterial
{%include image-gallery.html images=site.data.scene-classes.materials.MacroFlakeMaterial.gallery data=site.data.scene-classes.materials.MacroFlakeMaterial-%}
{%include see-also.html links=site.data.scene-classes.materials.MacroFlakeMaterial.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Normal attributes</summary>
  <p>
    <h3>input_normal</h3>
    <p class="scene-class-type">
      <b>33554432</b>
      default: None
      <p class="scene-class-comments">specifies an alternate shading normal in the tangent frame (normal map)</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.input_normal.images data=site.data.scene-classes.materials.MacroFlakeMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.input_normal.links-%}
    </p>
    <h3>input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">controls the amount of influence of the alternate normal</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.input_normal_dial.images data=site.data.scene-classes.materials.MacroFlakeMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.input_normal_dial.links-%}
    </p>
  </p>
</details>
<details open>
  <summary>Specular attributes</summary>
  <p>
    <h3>metallic_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the overall reflection color, defines Fresnel behavior</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.metallic_color.images data=site.data.scene-classes.materials.MacroFlakeMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.metallic_color.links-%}
    </p>
    <h3>metallic_edge_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">the reflection color at grazing angles, defines Fresnel behavior</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.metallic_edge_color.images data=site.data.scene-classes.materials.MacroFlakeMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.metallic_edge_color.links-%}
    </p>
    <h3>roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.5
      <p class="scene-class-comments">the roughness of the surface (currently only affects reflection)</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.roughness.images data=site.data.scene-classes.materials.MacroFlakeMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.roughness.links-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>background_material</h3>
    <p class="scene-class-type">
      <b>Material</b>
      default: None
      <p class="scene-class-comments">background material</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.background_material.images data=site.data.scene-classes.materials.MacroFlakeMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.background_material.links-%}
    </p>
    <h3>diffuse_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | block = 0
          | add = 1 (default)
      <p class="scene-class-comments">Whether to block the diffuse lobe where the mask is applied</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.diffuse_mode.images data=site.data.scene-classes.materials.MacroFlakeMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.diffuse_mode.links-%}
    </p>
    <h3>extra_aovs</h3>
    <p class="scene-class-type">
      <b>Map</b>
      default: None
      <p class="scene-class-comments">Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.extra_aovs.images data=site.data.scene-classes.materials.MacroFlakeMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.extra_aovs.links-%}
    </p>
    <h3>fuzz_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | block = 0 (default)
          | add = 1
      <p class="scene-class-comments">Whether to block the fuzz lobe where the mask is applied</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.fuzz_mode.images data=site.data.scene-classes.materials.MacroFlakeMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.fuzz_mode.links-%}
    </p>
    <h3>is_additive</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">When true, lobe does not block background material</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.is_additive.images data=site.data.scene-classes.materials.MacroFlakeMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.is_additive.links-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.label.images data=site.data.scene-classes.materials.MacroFlakeMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.label.links-%}
    </p>
    <h3>mask</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">foreground (metal) material weight</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.mask.images data=site.data.scene-classes.materials.MacroFlakeMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.mask.links-%}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.priority.images data=site.data.scene-classes.materials.MacroFlakeMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.priority.links-%}
    </p>
    <h3>specular_background_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | block = 0
          | add = 1 (default)
      <p class="scene-class-comments">Whether to block the underlying specular lobe where the mask is applied</p>
      {%include image-gallery.html images=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.specular_background_mode.images data=site.data.scene-classes.materials.MacroFlakeMaterial-%}
      {%include see-also.html links=site.data.scene-classes.materials.MacroFlakeMaterial.attributes.specular_background_mode.links-%}
    </p>
  </p>
</details>
</div>