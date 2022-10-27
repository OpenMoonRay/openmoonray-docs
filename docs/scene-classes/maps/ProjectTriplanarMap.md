---
title: ProjectTriplanarMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ProjectTriplanarMap
{%assign image_path=site.data.scene-classes.maps.ProjectTriplanarMap.images.path%}
{%if site.data.scene-classes.maps.ProjectTriplanarMap.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.ProjectTriplanarMap.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.ProjectTriplanarMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.ProjectTriplanarMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Negative X Modifiers attributes</summary>
  <p>
    <h3>negative_x_invert_s</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Flip in the s direction (horizontal)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_x_invert_s
          path=image_path
      %}
    </p>
    <h3>negative_x_invert_t</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Flip in the t direction (vertical)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_x_invert_t
          path=image_path
      %}
    </p>
    <h3>negative_x_offset</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0, 0 ]
      <p class="scene-class-comments">2D offset</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_x_offset
          path=image_path
      %}
    </p>
    <h3>negative_x_rotation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">2D rotation amount</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_x_rotation
          path=image_path
      %}
    </p>
    <h3>negative_x_rotation_center</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0, 0 ]
      <p class="scene-class-comments">2D rotation center</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_x_rotation_center
          path=image_path
      %}
    </p>
    <h3>negative_x_scale</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 1, 1 ]
      <p class="scene-class-comments">2D scale</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_x_scale
          path=image_path
      %}
    </p>
    <h3>negative_x_swap_st</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Swap the s and t directions.   Same as a 90 degree rotation</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_x_swap_st
          path=image_path
      %}
    </p>
    <h3>negative_x_wrap_around</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Controls whether to repeat (true) or clamp (false) the texture</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_x_wrap_around
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Negative Y Modifiers attributes</summary>
  <p>
    <h3>negative_y_invert_s</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Flip in the s direction (horizontal)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_y_invert_s
          path=image_path
      %}
    </p>
    <h3>negative_y_invert_t</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Flip in the t direction (vertical)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_y_invert_t
          path=image_path
      %}
    </p>
    <h3>negative_y_offset</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0, 0 ]
      <p class="scene-class-comments">2D offset</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_y_offset
          path=image_path
      %}
    </p>
    <h3>negative_y_rotation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">2D rotation amount</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_y_rotation
          path=image_path
      %}
    </p>
    <h3>negative_y_rotation_center</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0, 0 ]
      <p class="scene-class-comments">2D rotation center</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_y_rotation_center
          path=image_path
      %}
    </p>
    <h3>negative_y_scale</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 1, 1 ]
      <p class="scene-class-comments">2D scale</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_y_scale
          path=image_path
      %}
    </p>
    <h3>negative_y_swap_st</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Swap the s and t directions.   Same as a 90 degree rotation</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_y_swap_st
          path=image_path
      %}
    </p>
    <h3>negative_y_wrap_around</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Controls whether to repeat (true) or clamp (false) the texture</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_y_wrap_around
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Negative Z Modifiers attributes</summary>
  <p>
    <h3>negative_z_invert_s</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Flip in the s direction (horizontal)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_z_invert_s
          path=image_path
      %}
    </p>
    <h3>negative_z_invert_t</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Flip in the t direction (vertical)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_z_invert_t
          path=image_path
      %}
    </p>
    <h3>negative_z_offset</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0, 0 ]
      <p class="scene-class-comments">2D offset</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_z_offset
          path=image_path
      %}
    </p>
    <h3>negative_z_rotation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">2D rotation amount</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_z_rotation
          path=image_path
      %}
    </p>
    <h3>negative_z_rotation_center</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0, 0 ]
      <p class="scene-class-comments">2D rotation center</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_z_rotation_center
          path=image_path
      %}
    </p>
    <h3>negative_z_scale</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 1, 1 ]
      <p class="scene-class-comments">2D scale</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_z_scale
          path=image_path
      %}
    </p>
    <h3>negative_z_swap_st</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Swap the s and t directions.   Same as a 90 degree rotation</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_z_swap_st
          path=image_path
      %}
    </p>
    <h3>negative_z_wrap_around</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Controls whether to repeat (true) or clamp (false) the texture</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_z_wrap_around
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Positive X Modifiers attributes</summary>
  <p>
    <h3>positive_x_invert_s</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Flip in the s direction (horizontal)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_x_invert_s
          path=image_path
      %}
    </p>
    <h3>positive_x_invert_t</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Flip in the t direction (vertical)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_x_invert_t
          path=image_path
      %}
    </p>
    <h3>positive_x_offset</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0, 0 ]
      <p class="scene-class-comments">2D offset</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_x_offset
          path=image_path
      %}
    </p>
    <h3>positive_x_rotation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">2D rotation amount</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_x_rotation
          path=image_path
      %}
    </p>
    <h3>positive_x_rotation_center</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0, 0 ]
      <p class="scene-class-comments">2D rotation center</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_x_rotation_center
          path=image_path
      %}
    </p>
    <h3>positive_x_scale</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 1, 1 ]
      <p class="scene-class-comments">2D scale</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_x_scale
          path=image_path
      %}
    </p>
    <h3>positive_x_swap_st</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Swap the s and t directions.   Same as a 90 degree rotation</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_x_swap_st
          path=image_path
      %}
    </p>
    <h3>positive_x_wrap_around</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Controls whether to repeat (true) or clamp (false) the texture</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_x_wrap_around
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Positive Y Modifiers attributes</summary>
  <p>
    <h3>positive_y_invert_s</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Flip in the s direction (horizontal)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_y_invert_s
          path=image_path
      %}
    </p>
    <h3>positive_y_invert_t</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Flip in the t direction (vertical)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_y_invert_t
          path=image_path
      %}
    </p>
    <h3>positive_y_offset</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0, 0 ]
      <p class="scene-class-comments">2D offset</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_y_offset
          path=image_path
      %}
    </p>
    <h3>positive_y_rotation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">2D rotation amount</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_y_rotation
          path=image_path
      %}
    </p>
    <h3>positive_y_rotation_center</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0, 0 ]
      <p class="scene-class-comments">2D rotation center</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_y_rotation_center
          path=image_path
      %}
    </p>
    <h3>positive_y_scale</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 1, 1 ]
      <p class="scene-class-comments">2D scale</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_y_scale
          path=image_path
      %}
    </p>
    <h3>positive_y_swap_st</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Swap the s and t directions.   Same as a 90 degree rotation</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_y_swap_st
          path=image_path
      %}
    </p>
    <h3>positive_y_wrap_around</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Controls whether to repeat (true) or clamp (false) the texture</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_y_wrap_around
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Positive Z Modifiers attributes</summary>
  <p>
    <h3>positive_z_invert_s</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Flip in the s direction (horizontal)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_z_invert_s
          path=image_path
      %}
    </p>
    <h3>positive_z_invert_t</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Flip in the t direction (vertical)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_z_invert_t
          path=image_path
      %}
    </p>
    <h3>positive_z_offset</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0, 0 ]
      <p class="scene-class-comments">2D offset</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_z_offset
          path=image_path
      %}
    </p>
    <h3>positive_z_rotation</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-comments">2D rotation amount</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_z_rotation
          path=image_path
      %}
    </p>
    <h3>positive_z_rotation_center</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 0, 0 ]
      <p class="scene-class-comments">2D rotation center</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_z_rotation_center
          path=image_path
      %}
    </p>
    <h3>positive_z_scale</h3>
    <p class="scene-class-type">
      <b>Vec2f</b>
      default: [ 1, 1 ]
      <p class="scene-class-comments">2D scale</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_z_scale
          path=image_path
      %}
    </p>
    <h3>positive_z_swap_st</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Swap the s and t directions.   Same as a 90 degree rotation</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_z_swap_st
          path=image_path
      %}
    </p>
    <h3>positive_z_wrap_around</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Controls whether to repeat (true) or clamp (false) the texture</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_z_wrap_around
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>TRS_order</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | Scale Rot Trans = 0 (default)
          | Scale Trans Rot = 1
          | Rot Scale Trans = 2
          | Rot Trans Scale = 3
          | Trans Scale Rot = 4
          | Trans Rot Scale = 5
      <p class="scene-class-comments">Order in which to apply transformations</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.TRS_order
          path=image_path
      %}
    </p>
    <h3>debug_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | none = 0 (default)
          | dSdx/dSdy = 1
          | dTdx/dTdy = 2
      <p class="scene-class-comments">for testing</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.debug_mode
          path=image_path
      %}
    </p>
    <h3>gamma</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | off = 0
          | on = 1
          | auto = 2 (default)
      <p class="scene-class-comments">Controls application of gamma to images (off -0, on - 1, auto - 2).   Auto will apply gamma decoding to 8-bit images</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.gamma
          path=image_path
      %}
    </p>
    <h3>negative_x_active</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Turns this direction on/off.  Output is black if off.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_x_active
          path=image_path
      %}
    </p>
    <h3>negative_x_texture</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_x_texture
          path=image_path
      %}
    </p>
    <h3>negative_y_active</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Turns this direction on/off.  Output is black if off.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_y_active
          path=image_path
      %}
    </p>
    <h3>negative_y_texture</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_y_texture
          path=image_path
      %}
    </p>
    <h3>negative_z_active</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Turns this direction on/off.  Output is black if off.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_z_active
          path=image_path
      %}
    </p>
    <h3>negative_z_texture</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.negative_z_texture
          path=image_path
      %}
    </p>
    <h3>number_of_textures</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | one = 1
          | three = 3 (default)
          | six = 6
      <p class="scene-class-comments">Controls the number of active textures.   If set to 'one', only the 'pos x' texture settings will be used for all sides.   If set to 'three' the pos x, pos y, and pos z settings will be used for their respective negative sides.   If set to 'six', each side has independent controls and texture.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.number_of_textures
          path=image_path
      %}
    </p>
    <h3>positive_x_active</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Turns this direction on/off.  Output is black if off.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_x_active
          path=image_path
      %}
    </p>
    <h3>positive_x_texture</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_x_texture
          path=image_path
      %}
    </p>
    <h3>positive_y_active</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Turns this direction on/off.  Output is black if off.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_y_active
          path=image_path
      %}
    </p>
    <h3>positive_y_texture</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_y_texture
          path=image_path
      %}
    </p>
    <h3>positive_z_active</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-comments">Turns this direction on/off.  Output is black if off.</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_z_active
          path=image_path
      %}
    </p>
    <h3>positive_z_texture</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.positive_z_texture
          path=image_path
      %}
    </p>
    <h3>projection_matrix</h3>
    <p class="scene-class-type">
      <b>Mat4d</b>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">the transform to use for projection</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.projection_matrix
          path=image_path
      %}
    </p>
    <h3>projection_mode</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | projector = 0 (default)
          | projection_matrix = 1
          | TRS = 2
      <p class="scene-class-comments">Source parameters to use for projection transform</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.projection_mode
          path=image_path
      %}
    </p>
    <h3>projector</h3>
    <p class="scene-class-type">
      <b>Node</b>
      default: None
      <p class="scene-class-comments">the object whose transform to use for projection</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.projector
          path=image_path
      %}
    </p>
    <h3>random_seed</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 8241
      <p class="scene-class-comments">Seed for randomizing orientation, offset, and flip</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.random_seed
          path=image_path
      %}
    </p>
    <h3>randomize_flip</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Rnd flipping in S or T for each active texture</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.randomize_flip
          path=image_path
      %}
    </p>
    <h3>randomize_offset</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Rnd offset in S or T for each active texture</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.randomize_offset
          path=image_path
      %}
    </p>
    <h3>randomize_rotation</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Rnd 2d rotation of each active texture</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.randomize_rotation
          path=image_path
      %}
    </p>
    <h3>rotate</h3>
    <p class="scene-class-type">
      <b>Vec3d</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Rotation of the projection transform</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.rotate
          path=image_path
      %}
    </p>
    <h3>rotation_order</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | xyz = 0 (default)
          | xzy = 1
          | yxz = 2
          | yzx = 3
          | zxy = 4
          | zyx = 5
      <p class="scene-class-comments">Order in which to apply rotation transformations</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.rotation_order
          path=image_path
      %}
    </p>
    <h3>scale</h3>
    <p class="scene-class-type">
      <b>Vec3d</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-comments">Scale of the projection transform</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.scale
          path=image_path
      %}
    </p>
    <h3>transition_width</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.5
      <p class="scene-class-comments">Controls blending of per-axis projections.   Valid range is 0.0 (no blending) to 1.0 (max blending)</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.transition_width
          path=image_path
      %}
    </p>
    <h3>translate</h3>
    <p class="scene-class-type">
      <b>Vec3d</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Tranlation of the projection transform</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.translate
          path=image_path
      %}
    </p>
    <h3>use_reference_space</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Project onto reference positions ('ref_P') and normals ('ref_N')</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.ProjectTriplanarMap.images.attributes.use_reference_space
          path=image_path
      %}
    </p>
  </p>
</details>
</div>