---
title: ImageMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ImageMap
{%assign image_path=site.data.scene-classes.maps.ImageMap.image_path%}
{%if site.data.scene-classes.maps.ImageMap.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.ImageMap.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.ImageMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.ImageMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Blur attributes</summary>
  <p>
    <h3>blur</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">This parameter is deprecated, do not use!   Number of pixels to blur the image</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.blur.images.
          path=image_path
      %}
    </p>
    <h3>mip_bias</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Amount to scale derivatives which controls mipmap selection</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.mip_bias.images.
          path=image_path
      %}
    </p>
    <h3>num_blur_samples</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 3
      <p class="scene-class-comments">This parameter is deprecated, do not use!  Number of internal samples for blur.   Higher values increase quality</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.num_blur_samples.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Color Correction attributes</summary>
  <p>
    <h3>TMI</h3>
    <p class="scene-class-type">
      <b>Vec3f</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">T = Temperature where positive values push towards blue and negative towards red.   M = Magenta where positive values push towards magenta and negative towards green.  I = Intensity where negative values remove and positive values add energy </p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.TMI.images.
          path=image_path
      %}
    </p>
    <h3>TMI_control_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.TMI_control_enabled.images.
          path=image_path
      %}
    </p>
    <h3>contrast</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.contrast.images.
          path=image_path
      %}
    </p>
    <h3>contrast_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.contrast_enabled.images.
          path=image_path
      %}
    </p>
    <h3>gain</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.gain.images.
          path=image_path
      %}
    </p>
    <h3>gain_offset_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.gain_offset_enabled.images.
          path=image_path
      %}
    </p>
    <h3>gamma_adjust</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.gamma_adjust.images.
          path=image_path
      %}
    </p>
    <h3>gamma_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.gamma_enabled.images.
          path=image_path
      %}
    </p>
    <h3>offset_adjust</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.offset_adjust.images.
          path=image_path
      %}
    </p>
    <h3>saturation</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.saturation.images.
          path=image_path
      %}
    </p>
    <h3>saturation_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.saturation_enabled.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>alpha_only</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">If true, the alpha channel of the texture will be placed in the rgb channels.  If the texture has no alpha channel, 1.0 is used, and the resulting texture lookup is then always white.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.alpha_only.images.
          path=image_path
      %}
    </p>
    <h3>default_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 1, 0 ]
      <p class="scene-class-comments">default color to be used for missing udims when 'use default color when missing' is enabled</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.default_color.images.
          path=image_path
      %}
    </p>
    <h3>gamma</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | off = 0
          | on = 1
          | auto = 2 (default)
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.gamma.images.
          path=image_path
      %}
    </p>
    <h3>input_texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.input_texture_coordinates.images.
          path=image_path
      %}
    </p>
    <h3>offset</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.offset.images.
          path=image_path
      %}
    </p>
    <h3>rotation_angle</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Rotation in degrees</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.rotation_angle.images.
          path=image_path
      %}
    </p>
    <h3>rotation_center</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0.5, 0.5 ]
      <p class="scene-class-comments">UV coordinate around which to rotate</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.rotation_center.images.
          path=image_path
      %}
    </p>
    <h3>scale</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.scale.images.
          path=image_path
      %}
    </p>
    <h3>texture</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx). If filename contains '&lt;UDIM&gt;', udim index substitution is performed on filename.  In the UDIM case, 'scale', 'offset', and 'wrap around' are ignored.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.texture.images.
          path=image_path
      %}
    </p>
    <h3>texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | texture = 0 (default)
          | hair surface = 1
          | input texture coordinates = 2
          | hair closest surface = 3
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.texture_coordinates.images.
          path=image_path
      %}
    </p>
    <h3>udim_files</h3>
    <p class="scene-class-type">
      <b>StringVector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.udim_files.images.
          path=image_path
      %}
    </p>
    <h3>udim_max_v</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 10
      <p class="scene-class-comments">udim maximum v value</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.udim_max_v.images.
          path=image_path
      %}
    </p>
    <h3>udim_values</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.udim_values.images.
          path=image_path
      %}
    </p>
    <h3>use_default_color_when_missing</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Uses the 'default color' for missing udims and does not report error</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.use_default_color_when_missing.images.
          path=image_path
      %}
    </p>
    <h3>wrap_around</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMapattributes.wrap_around.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>