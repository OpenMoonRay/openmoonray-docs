---
title: ImageNormalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ImageNormalMap
{%-include overview.html data=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.gallery data=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>UVs attributes</summary>
  <p>
    <h3>offset</h3>
    <p class="scene-class-type">
      <b>Vec2f</b><br/>
      default: [ 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.offset.images data=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.offset.links heading=4-%}
    </p>
    <h3>rotation_angle</h3>
    <p class="scene-class-type">
      <b>Float</b><br/>
      default: 0.0
      <p class="scene-class-comments">Rotation in degrees</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.rotation_angle.images data=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.rotation_angle.links heading=4-%}
    </p>
    <h3>rotation_center</h3>
    <p class="scene-class-type">
      <b>Vec2f</b><br/>
      default: [ 0.5, 0.5 ]
      <p class="scene-class-comments">UV coordinate around which to rotate</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.rotation_center.images data=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.rotation_center.links heading=4-%}
    </p>
    <h3>scale</h3>
    <p class="scene-class-type">
      <b>Vec2f</b><br/>
      default: [ 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.scale.images data=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.scale.links heading=4-%}
    </p>
    <h3>udim_files</h3>
    <p class="scene-class-type">
      <b>StringVector</b><br/>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.udim_files.images data=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.udim_files.links heading=4-%}
    </p>
    <h3>udim_max_v</h3>
    <p class="scene-class-type">
      <b>Int</b><br/>
      default: 10
      <p class="scene-class-comments">udim maximum v value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.udim_max_v.images data=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.udim_max_v.links heading=4-%}
    </p>
    <h3>udim_values</h3>
    <p class="scene-class-type">
      <b>IntVector</b><br/>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.udim_values.images data=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.udim_values.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>default_value</h3>
    <p class="scene-class-type">
      <b>Vec3f</b><br/>
      default: [ 0, 0, 1 ]
      <p class="scene-class-comments">default value to be used for missing udims when 'use_default_value_when_missing' is enabled</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.default_value.images data=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.default_value.links heading=4-%}
    </p>
    <h3>input_texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Vec3f</b><br/> <i>bindable</i><br/>
      default: [ 0, 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.input_texture_coordinates.images data=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.input_texture_coordinates.links heading=4-%}
    </p>
    <h3>normal_encoding</h3>
    <p class="scene-class-type">
      <b>Int</b><br/> <i>enum</i><br/>
          0=[0,1](default)<br/>
          1=[-1,1]<br/>
      <p class="scene-class-comments">Most normal maps are encoded [0,1]. Only certain rare floating point normal maps are encoded [-1,1]</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.normal_encoding.images data=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.normal_encoding.links heading=4-%}
    </p>
    <h3>tangent_space_normal_texture</h3>
    <p class="scene-class-type">
      <b>String</b><br/> <i>filename</i><br/>
      default: 
      <p class="scene-class-comments">filename that points to a tangent space normal texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.tangent_space_normal_texture.images data=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.tangent_space_normal_texture.links heading=4-%}
    </p>
    <h3>texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Int</b><br/> <i>enum</i><br/>
          0=texture(default)<br/>
          1=input texture coordinates<br/>
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.texture_coordinates.images data=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.texture_coordinates.links heading=4-%}
    </p>
    <h3>use_default_value_when_missing</h3>
    <p class="scene-class-type">
      <b>Bool</b><br/>
      default: False
      <p class="scene-class-comments">Uses the 'default_value' for missing udims and does not report error</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.use_default_value_when_missing.images data=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.use_default_value_when_missing.links heading=4-%}
    </p>
    <h3>wrap_around</h3>
    <p class="scene-class-type">
      <b>Bool</b><br/>
      default: True
      <p class="scene-class-comments">Controls whether to repeat (true) or clamp (false) the texture</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.wrap_around.images data=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap.attributes.wrap_around.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.normal-maps.ImageNormalMap-%}