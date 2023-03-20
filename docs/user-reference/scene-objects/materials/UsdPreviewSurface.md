---
title: UsdPreviewSurface

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# UsdPreviewSurface
{%-include overview.html data=site.data.user-reference.scene-objects.materials.UsdPreviewSurface-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.gallery data=site.data.user-reference.scene-objects.materials.UsdPreviewSurface-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>clearcoat</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br/>
      default: 0.0
      <p class="scene-class-comments">Second specular lobe amount. The color is white.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.clearcoat.images data=site.data.user-reference.scene-objects.materials.UsdPreviewSurface-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.clearcoat.links heading=4-%}
    </p>
    <h3>clearcoatRoughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br/>
      default: 0.00999999977648
      <p class="scene-class-comments">Roughness for the second specular lobe.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.clearcoatRoughness.images data=site.data.user-reference.scene-objects.materials.UsdPreviewSurface-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.clearcoatRoughness.links heading=4-%}
    </p>
    <h3>diffuseColor</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br/>
      default: [ 0.18, 0.18, 0.18 ]
      <p class="scene-class-comments">When using metallic workflow this is interpreted as albedo.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.diffuseColor.images data=site.data.user-reference.scene-objects.materials.UsdPreviewSurface-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.diffuseColor.links heading=4-%}
    </p>
    <h3>displacement</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br/>
      default: 0.0
      <p class="scene-class-comments">Displacement in the direction of the normal.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.displacement.images data=site.data.user-reference.scene-objects.materials.UsdPreviewSurface-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.displacement.links heading=4-%}
    </p>
    <h3>emissiveColor</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br/>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Emissive component.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.emissiveColor.images data=site.data.user-reference.scene-objects.materials.UsdPreviewSurface-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.emissiveColor.links heading=4-%}
    </p>
    <h3>extra_aovs</h3>
    <p class="scene-class-type">
      <b>Map</b>
      <br/>
      default: None
      <p class="scene-class-comments">Bind this attribute to a 'ListMap' that contains references to ExtraAovMaps that specify additional outputs that can be assigned to a RenderOutput "light aov" result</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.extra_aovs.images data=site.data.user-reference.scene-objects.materials.UsdPreviewSurface-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.extra_aovs.links heading=4-%}
    </p>
    <h3>ior</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br/>
      default: 1.5
      <p class="scene-class-comments">Index of Refraction to be used for translucent objects and objects with specular components, including the clearcoat if clearcoat &gt; 0.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.ior.images data=site.data.user-reference.scene-objects.materials.UsdPreviewSurface-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.ior.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br/>
      default: 
      <p class="scene-class-comments">label used in material and light aovs</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.label.images data=site.data.user-reference.scene-objects.materials.UsdPreviewSurface-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.label.links heading=4-%}
    </p>
    <h3>metallic</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br/>
      default: 0.0
      <p class="scene-class-comments">Use 1 for metallic surfaces and 0 for non-metallic.  If metallic is 1, then both F0 (reflectivity at 0 degree incidence) and edge F90 reflectivity will simply be the Albedo.  If metallic is 0, then Albedo is ignored in the calculation of F0 and F90; F0 is derived from ior via ( (1-ior)/(1+ior) )^2 and F90 is white. In between, we interpolate.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.metallic.images data=site.data.user-reference.scene-objects.materials.UsdPreviewSurface-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.metallic.links heading=4-%}
    </p>
    <h3>normal</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      <br/>
      default: [ 0, 0, 1 ]
      <p class="scene-class-comments">Expects normal in tangent space [(-1,-1,-1), (1,1,1)]</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.normal.images data=site.data.user-reference.scene-objects.materials.UsdPreviewSurface-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.normal.links heading=4-%}
    </p>
    <h3>occlusion</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br/>
      default: 1.0
      <p class="scene-class-comments">Ignored by Moonray</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.occlusion.images data=site.data.user-reference.scene-objects.materials.UsdPreviewSurface-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.occlusion.links heading=4-%}
    </p>
    <h3>opacity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br/>
      default: 1.0
      <p class="scene-class-comments">When opacity is 1.0 then the geometry is fully opaque, if it is smaller than 1.0 then the geometry is translucent, when it is 0 the geometry is transparent. Note that even a fully transparent object still receives lighting as, for example, perfectly clear glass still has a specular response.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.opacity.images data=site.data.user-reference.scene-objects.materials.UsdPreviewSurface-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.opacity.links heading=4-%}
    </p>
    <h3>opacityThreshold</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br/>
      default: 0.0
      <p class="scene-class-comments">The opacityThreshold input is useful for creating geometric cut-outs based on the opacity input. A value of 0.0 indicates that no masking is applied to the opacity input, while a value greater than 0.0 indicates that rendering of the surface is limited to the areas where the opacity is greater or equal to that value.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.opacityThreshold.images data=site.data.user-reference.scene-objects.materials.UsdPreviewSurface-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.opacityThreshold.links heading=4-%}
    </p>
    <h3>priority</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br/>
      default: 0
      <p class="scene-class-comments">The material's place in an order of precedence for overlapping dielectrics. A value of 0 means the priority should be ignored. Materials with lower numbers (higher priority) "override" materials with higher numbers (lower priority).  To enable automatic removal of self-overlapping geometry, a non-zero priority must be set on the geometry's material.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.priority.images data=site.data.user-reference.scene-objects.materials.UsdPreviewSurface-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.priority.links heading=4-%}
    </p>
    <h3>roughness</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br/>
      default: 0.5
      <p class="scene-class-comments">Roughness for the specular lobe. The value ranges from 0 to 1, which goes from a perfectly specular surface at 0.0 to maximum roughness of the specular lobe.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.roughness.images data=site.data.user-reference.scene-objects.materials.UsdPreviewSurface-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.roughness.links heading=4-%}
    </p>
    <h3>specularColor</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      <br/>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Specular color to be used. This is the color at 0 incidence. Edge color is assumed white. Transition between the two colors according to Schlick fresnel approximation.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.specularColor.images data=site.data.user-reference.scene-objects.materials.UsdPreviewSurface-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.specularColor.links heading=4-%}
    </p>
    <h3>useSpecularWorkflow</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br/>
          </t>0 = Metalness workflow(default)<br/>
          </t>1 = Specular workflow<br/>
      <p class="scene-class-comments">This node can fundamentally operate in two modes : Specular workflow where you provide a texture/value to the 'specularColor' input. Or, Metallic workflow where you provide a texture/value to the 'metallic' input.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.useSpecularWorkflow.images data=site.data.user-reference.scene-objects.materials.UsdPreviewSurface-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.materials.UsdPreviewSurface.attributes.useSpecularWorkflow.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.materials.UsdPreviewSurface-%}