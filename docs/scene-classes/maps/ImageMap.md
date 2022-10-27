---
title: ImageMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ImageMap
{%assign image_path=site.data.scene-classes.maps.ImageMap.images.path%}
{%if site.data.scene-classes.maps.ImageMap.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.ImageMap.images.gallery
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
          images=site.data.scene-classes.maps.ImageMap.images.attributes.blur
          path=image_path
      %}
    </p>
    <h3>mip_bias</h3>
    <p class="scene-class-type">
      <b>Float</b> <i>bindable</i>
      default: 0.0
      <p class="scene-class-comments">Amount to scale derivatives which controls mipmap selection</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMap.images.attributes.mip_bias
          path=image_path
      %}
    </p>
    <h3>num_blur_samples</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 3
      <p class="scene-class-comments">This parameter is deprecated, do not use!  Number of internal samples for blur.   Higher values increase quality</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMap.images.attributes.num_blur_samples
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
          images=site.data.scene-classes.maps.ImageMap.images.attributes.TMI
          path=image_path
      %}
    </p>
    <h3>TMI_control_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMap.images.attributes.TMI_control_enabled
          path=image_path
      %}
    </p>
    <h3>contrast</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMap.images.attributes.contrast
          path=image_path
      %}
    </p>
    <h3>contrast_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMap.images.attributes.contrast_enabled
          path=image_path
      %}
    </p>
    <h3>gain</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMap.images.attributes.gain
          path=image_path
      %}
    </p>
    <h3>gain_offset_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMap.images.attributes.gain_offset_enabled
          path=image_path
      %}
    </p>
    <h3>gamma_adjust</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMap.images.attributes.gamma_adjust
          path=image_path
      %}
    </p>
    <h3>gamma_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMap.images.attributes.gamma_enabled
          path=image_path
      %}
    </p>
    <h3>offset_adjust</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMap.images.attributes.offset_adjust
          path=image_path
      %}
    </p>
    <h3>saturation</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMap.images.attributes.saturation
          path=image_path
      %}
    </p>
    <h3>saturation_enabled</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMap.images.attributes.saturation_enabled
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
          images=site.data.scene-classes.maps.ImageMap.images.attributes.alpha_only
          path=image_path
      %}
    </p>
    <h3>default_color</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 1, 0 ]
      <p class="scene-class-comments">default color to be used for missing udims when 'use default color when missing' is enabled</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMap.images.attributes.default_color
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
          images=site.data.scene-classes.maps.ImageMap.images.attributes.gamma
          path=image_path
      %}
    </p>
    <h3>input_texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMap.images.attributes.input_texture_coordinates
          path=image_path
      %}
    </p>
    <h3>offset</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMap.images.attributes.offset
          path=image_path
      %}
    </p>
    <h3>rotation_angle</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">Rotation in degrees</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMap.images.attributes.rotation_angle
          path=image_path
      %}
    </p>
    <h3>rotation_center</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0.5, 0.5 ]
      <p class="scene-class-comments">UV coordinate around which to rotate</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMap.images.attributes.rotation_center
          path=image_path
      %}
    </p>
    <h3>scale</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMap.images.attributes.scale
          path=image_path
      %}
    </p>
    <h3>texture</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx). If filename contains '&lt;UDIM&gt;', udim index substitution is performed on filename.  In the UDIM case, 'scale', 'offset', and 'wrap around' are ignored.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMap.images.attributes.texture
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
          images=site.data.scene-classes.maps.ImageMap.images.attributes.texture_coordinates
          path=image_path
      %}
    </p>
    <h3>udim_files</h3>
    <p class="scene-class-type">
      <b>StringVector</b>
      default: []
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMap.images.attributes.udim_files
          path=image_path
      %}
    </p>
    <h3>udim_max_v</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 10
      <p class="scene-class-comments">udim maximum v value</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMap.images.attributes.udim_max_v
          path=image_path
      %}
    </p>
    <h3>udim_values</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMap.images.attributes.udim_values
          path=image_path
      %}
    </p>
    <h3>use_default_color_when_missing</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Uses the 'default color' for missing udims and does not report error</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMap.images.attributes.use_default_color_when_missing
          path=image_path
      %}
    </p>
    <h3>wrap_around</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ImageMap.images.attributes.wrap_around
          path=image_path
      %}
    </p>
  </p>
</details>
</div>