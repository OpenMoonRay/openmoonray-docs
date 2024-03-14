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
      <p class="scene-class-comments">Amount to offset derivatives which controls mipmap selection.   This can be used to provide a cheap, albiet low quality, blur.  Note: Setting this value to -1.0 effectively disables mip mapping and the highest resolution will be used.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.mip_bias.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ImageMap.attributes.mip_bias.videos data=site.data.user-reference.scene-objects.maps.ImageMap-%}
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
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ImageMap.attributes.TMI.videos data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.TMI.links heading=4-%}
    </p>
    <h3>TMI_control_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables 'TMI' (Temperature Magenta Intensity) parameter</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.TMI_control_enabled.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ImageMap.attributes.TMI_control_enabled.videos data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.TMI_control_enabled.links heading=4-%}
    </p>
    <h3>contrast</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Applies contrast per channel in the style of Nuke where the pivot is at 0.18</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.contrast.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ImageMap.attributes.contrast.videos data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.contrast.links heading=4-%}
    </p>
    <h3>contrast_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables 'contrast' parameter</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.contrast_enabled.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ImageMap.attributes.contrast_enabled.videos data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.contrast_enabled.links heading=4-%}
    </p>
    <h3>gain</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Applies multiplier per channel.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.gain.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ImageMap.attributes.gain.videos data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.gain.links heading=4-%}
    </p>
    <h3>gain_offset_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables 'gain' and 'offset_adjust' parameters</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.gain_offset_enabled.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ImageMap.attributes.gain_offset_enabled.videos data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.gain_offset_enabled.links heading=4-%}
    </p>
    <h3>gamma_adjust</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Applies gamma(power fuction) per channel.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.gamma_adjust.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ImageMap.attributes.gamma_adjust.videos data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.gamma_adjust.links heading=4-%}
    </p>
    <h3>gamma_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables 'gamma_adjust' parameter</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.gamma_enabled.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ImageMap.attributes.gamma_enabled.videos data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.gamma_enabled.links heading=4-%}
    </p>
    <h3>offset_adjust</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Applies offset per channel.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.offset_adjust.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ImageMap.attributes.offset_adjust.videos data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.offset_adjust.links heading=4-%}
    </p>
    <h3>saturation</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Applies saturation per channel with 0.0 being grayscale and 1.0 being full saturation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.saturation.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ImageMap.attributes.saturation.videos data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.saturation.links heading=4-%}
    </p>
    <h3>saturation_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables 'saturation' parameter</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.saturation_enabled.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ImageMap.attributes.saturation_enabled.videos data=site.data.user-reference.scene-objects.maps.ImageMap-%}
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
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ImageMap.attributes.alpha_only.videos data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.alpha_only.links heading=4-%}
    </p>
    <h3>default_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 0, 1, 0 ]
      <p class="scene-class-comments">Default color to be used for missing udims when 'use default color when missing' is enabled</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.default_color.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ImageMap.attributes.default_color.videos data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.default_color.links heading=4-%}
    </p>
    <h3>gamma</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;off&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;on&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;auto&rdquo; (default)<br>
      <p class="scene-class-comments">If this is set to 'on' or 'auto' and the 'texture' file is 8-bit, then a power of 2.2 will be applied to the RGB channels of the image.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.gamma.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ImageMap.attributes.gamma.videos data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.gamma.links heading=4-%}
    </p>
    <h3>input_texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">If the 'texture_coordinates' parameter is set to 'input texture coordinates' then this parameter is evaluated and the resulting red and green channels are used for the u and v coordinates respectively.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.input_texture_coordinates.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ImageMap.attributes.input_texture_coordinates.videos data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.input_texture_coordinates.links heading=4-%}
    </p>
    <h3>offset</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      <br>
      default: [ 0, 0 ]
      <p class="scene-class-comments">A constant offset applied to the texture coordinates.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.offset.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ImageMap.attributes.offset.videos data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.offset.links heading=4-%}
    </p>
    <h3>rotation_angle</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">A constant rotation in degrees applied to the texture coordinates.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.rotation_angle.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ImageMap.attributes.rotation_angle.videos data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.rotation_angle.links heading=4-%}
    </p>
    <h3>rotation_center</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      <br>
      default: [ 0.5, 0.5 ]
      <p class="scene-class-comments">UV coordinate around which to rotate</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.rotation_center.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ImageMap.attributes.rotation_center.videos data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.rotation_center.links heading=4-%}
    </p>
    <h3>scale</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      <br>
      default: [ 1, 1 ]
      <p class="scene-class-comments">A constant scale applied to the texture coordinates.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.scale.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ImageMap.attributes.scale.videos data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.scale.links heading=4-%}
    </p>
    <h3>texture</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      <br>
      default: 
      <p class="scene-class-comments">Filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx). If filename contains '&lt;UDIM&gt;', udim index substitution is performed on filename.  In the UDIM case, 'scale', 'offset', and 'wrap around' are ignored.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.texture.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ImageMap.attributes.texture.videos data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.texture.links heading=4-%}
    </p>
    <h3>texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;texture&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;hair surface&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;input texture coordinates&rdquo;<br>
          &nbsp;&nbsp;3 = &ldquo;hair closest surface&rdquo;<br>
      <p class="scene-class-comments">Selects the source of the coordinates used to map the texture.  For meshes, the 'texture' setting will read a Vec2f attribute named 'surface_st' if it exists, otherwise it will use barycentric coordinates.   For points and curves, the 'texture' setting will read a Vec2f attribute named 'uv' if it exists.   If the attribute doesn't exist, parametric st coordinates are used for curves and a constant value of (1.0, 1.0) is used for points.  The 'input texture coordinates' setting will evaluate a binding on the 'input_texture_coordinates' parameter and use the resulting red and green channels as the texture coordinates.   The 'hair surface' setting will try to read an explicit attribute named 'surface_st'.   The 'hair closest surface' setting will try to read an explicit attribute named 'closest_surface_uv'.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.texture_coordinates.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ImageMap.attributes.texture_coordinates.videos data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.texture_coordinates.links heading=4-%}
    </p>
    <h3>use_default_color_when_missing</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Uses the 'default color' for missing udims and does not report error</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.use_default_color_when_missing.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ImageMap.attributes.use_default_color_when_missing.videos data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.use_default_color_when_missing.links heading=4-%}
    </p>
    <h3>wrap_around</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">If true, the image will repeat itself at it's boundries.   If false, the image will be clamped at it's boundries.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.ImageMap.attributes.wrap_around.images data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.ImageMap.attributes.wrap_around.videos data=site.data.user-reference.scene-objects.maps.ImageMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.ImageMap.attributes.wrap_around.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.ImageMap-%}