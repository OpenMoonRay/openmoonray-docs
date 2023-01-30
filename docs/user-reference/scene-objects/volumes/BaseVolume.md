---
title: BaseVolume

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# BaseVolume
{%-include overview.html data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.gallery data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Attenuation Properties attributes</summary>
  <p>
    <h3>attenuation_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">a color to tint (multiply to) the attenuation. Technically the product of attenuation color and intensity is the attenuation(extinction) coefficient.(Note the inverse behavior of color with this parameter.)</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_color.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_color.links heading=4-%}
    </p>
    <h3>attenuation_factor</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">An additional factor to scale the attenuation. This attribute behaves identically to attenuation_intensity - it is provided simply as an extra way to control attenuation, typically during lighting. Surfacing should generally avoid setting this.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_factor.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_factor.links heading=4-%}
    </p>
    <h3>attenuation_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">the rate at which the intensity of a ray traversing a volume is lost. The attenuation (extinction) coefficient is technically the product of attenuation_color, attenuation_intensity, and attenuation_factor</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_intensity.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.attenuation_intensity.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Emission Properties attributes</summary>
  <p>
    <h3>emission_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">a color to tint (multiply to) the emission Technically the product of emision color and intensity is the emission coefficient</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.emission_color.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.emission_color.links heading=4-%}
    </p>
    <h3>emission_intensity</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 1.0
      <p class="scene-class-comments">the rate at which a volume emits light at a given point. Technically the product of emission color and intensity is the emission coefficient.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.emission_intensity.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.emission_intensity.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Scattering Properties attributes</summary>
  <p>
    <h3>anisotropy</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Value in the interval [-1,1] that defines how foward (1) or backward (-1) scattering the volume is. 0.0 is isotropic.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.anisotropy.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.anisotropy.links heading=4-%}
    </p>
    <h3>diffuse_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b> <i>bindable</i>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">reflectance color of the volume. Technically this is called scattering albedo, which is the scattering coefficient divided by the extinction coefficient.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.diffuse_color.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.diffuse_color.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>bake_divisions</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 100
      <p class="scene-class-comments">Divide widest axis by this many divisions</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.bake_divisions.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.bake_divisions.links heading=4-%}
    </p>
    <h3>bake_resolution_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | default = 0 (default)
          | divisions = 1
          | voxel size = 2
      <p class="scene-class-comments">Toggle method to specify grid resolution of baked density grid.<br>&emsp;&emsp;default: for shaders that are bound to vdb volumes, use vdb resolution. For shaders that are bounds to mesh geometriesuse 100 divisions<br>&emsp;&emsp;divisions: specify number of divisions.<br>&emsp;&emsp;voxel size: specify voxel size.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.bake_resolution_mode.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.bake_resolution_mode.links heading=4-%}
    </p>
    <h3>bake_voxel_size</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 10.0
      <p class="scene-class-comments">Size of voxel in world space</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.bake_voxel_size.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.bake_voxel_size.links heading=4-%}
    </p>
    <h3>label</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">label used in light aovs</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.label.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.label.links heading=4-%}
    </p>
    <h3>surface_opacity_threshold</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">Accumulated opacity that's considered the 'surface' for computing surface position and Z</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.surface_opacity_threshold.images data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.volumes.BaseVolume.attributes.surface_opacity_threshold.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.volumes.BaseVolume-%}