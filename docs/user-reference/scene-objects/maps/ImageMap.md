---
title: ImageMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ImageMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.ImageMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.gallery data=site.data.user-reference.scene-objects.maps.ImageMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Blur attributes</summary>
  <p>
    <h3>mip_bias</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      <br>
      default: 0.0
      <p class="scene-class-comments">Amount to scale derivatives which controls mipmap selection</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.mip_bias.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.mip_bias.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>Color Correction attributes</summary>
  <p>
    <h3>TMI</h3>
    <p class="scene-class-type">
      <b>Vec3f</b>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">T = Temperature where positive values push towards blue and negative towards red.   M = Magenta where positive values push towards magenta and negative towards green.  I = Intensity where negative values remove and positive values add energy </p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.TMI.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.TMI.links heading=4-%}
    </p>
    <h3>TMI_control_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.TMI_control_enabled.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.TMI_control_enabled.links heading=4-%}
    </p>
    <h3>contrast</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.contrast.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.contrast.links heading=4-%}
    </p>
    <h3>contrast_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.contrast_enabled.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.contrast_enabled.links heading=4-%}
    </p>
    <h3>gain</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.gain.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.gain.links heading=4-%}
    </p>
    <h3>gain_offset_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.gain_offset_enabled.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.gain_offset_enabled.links heading=4-%}
    </p>
    <h3>gamma_adjust</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.gamma_adjust.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.gamma_adjust.links heading=4-%}
    </p>
    <h3>gamma_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.gamma_enabled.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.gamma_enabled.links heading=4-%}
    </p>
    <h3>offset_adjust</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.offset_adjust.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.offset_adjust.links heading=4-%}
    </p>
    <h3>saturation</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.saturation.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.saturation.links heading=4-%}
    </p>
    <h3>saturation_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.saturation_enabled.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.saturation_enabled.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>alpha_only</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">If true, the alpha channel of the texture will be placed in the rgb channels.  If the texture has no alpha channel, 1.0 is used, and the resulting texture lookup is then always white.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.alpha_only.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.alpha_only.links heading=4-%}
    </p>
    <h3>default_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 0, 1, 0 ]
      <p class="scene-class-comments">default color to be used for missing udims when 'use default color when missing' is enabled</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.default_color.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.default_color.links heading=4-%}
    </p>
    <h3>gamma</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;&nbsp;&nbsp;0 = off<br>
          &nbsp;&nbsp;&nbsp;&nbsp;1 = on<br>
          &nbsp;&nbsp;&nbsp;&nbsp;2 = auto(default)<br>
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.gamma.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.gamma.links heading=4-%}
    </p>
    <h3>input_texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.input_texture_coordinates.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.input_texture_coordinates.links heading=4-%}
    </p>
    <h3>offset</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      <br>
      default: [ 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.offset.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.offset.links heading=4-%}
    </p>
    <h3>rotation_angle</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Rotation in degrees</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.rotation_angle.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.rotation_angle.links heading=4-%}
    </p>
    <h3>rotation_center</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      <br>
      default: [ 0.5, 0.5 ]
      <p class="scene-class-comments">UV coordinate around which to rotate</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.rotation_center.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.rotation_center.links heading=4-%}
    </p>
    <h3>scale</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      <br>
      default: [ 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.scale.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.scale.links heading=4-%}
    </p>
    <h3>texture</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      <br>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx). If filename contains '&lt;UDIM&gt;', udim index substitution is performed on filename.  In the UDIM case, 'scale', 'offset', and 'wrap around' are ignored.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.texture.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.texture.links heading=4-%}
    </p>
    <h3>texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;&nbsp;&nbsp;0 = texture(default)<br>
          &nbsp;&nbsp;&nbsp;&nbsp;1 = hair surface<br>
          &nbsp;&nbsp;&nbsp;&nbsp;2 = input texture coordinates<br>
          &nbsp;&nbsp;&nbsp;&nbsp;3 = hair closest surface<br>
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.texture_coordinates.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.texture_coordinates.links heading=4-%}
    </p>
    <h3>udim_files</h3>
    <p class="scene-class-type">
      <b>StringVector</b>
      <br>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.udim_files.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.udim_files.links heading=4-%}
    </p>
    <h3>udim_max_v</h3>
    <p class="scene-class-type">
      <b>Int</b>
      <br>
      default: 10
      <p class="scene-class-comments">udim maximum v value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.udim_max_v.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.udim_max_v.links heading=4-%}
    </p>
    <h3>udim_values</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.udim_values.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.udim_values.links heading=4-%}
    </p>
    <h3>use_default_color_when_missing</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Uses the 'default color' for missing udims and does not report error</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.use_default_color_when_missing.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.use_default_color_when_missing.links heading=4-%}
    </p>
    <h3>wrap_around</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.wrap_around.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.wrap_around.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.ImageMap-%}