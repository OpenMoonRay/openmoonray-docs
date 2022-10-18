---
title: DebugMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# DebugMap
---
{%assign image_dir=site.data.scene-classes.maps.DebugMap.image_dir%}
<div class="scene-class">
{% include image-gallery.html
    images=site.data.scene-classes.maps.DebugMap.gallery
    image_dir=image_dir
%}
<details open>
  <summary>Normal attributes</summary>
  <p>
    <h3>input_normal_space</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | tangent = 0 (default)
          | render = 1
      <p class="scene-class-comments">Specifies what space the input normal is in.  Usually this is tangent space for texture maps and render space for projections</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.DebugMap.input_normal_space
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
<details open>
  <summary>Primitive Attribute attributes</summary>
  <p>
    <h3>primitive_attribute_name</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: surface_st
      <p class="scene-class-comments">the name of primitive attribute to displayed when attribute 'map type' is set to 'primitive attribute'</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.DebugMap.primitive_attribute_name
          image_dir=image_dir
      %}
    </p>
    <h3>primitive_attribute_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | float = 0
          | vec2f = 1 (default)
          | vec3f = 2
          | rgb = 3
      <p class="scene-class-comments">the type of primitive attribute to displayed when attribute 'map type' is set to 'primitive attribute'</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.DebugMap.primitive_attribute_type
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>checkerboard</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.DebugMap.checkerboard
          image_dir=image_dir
      %}
    </p>
    <h3>input_normal</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.DebugMap.input_normal
          image_dir=image_dir
      %}
    </p>
    <h3>input_normal_dial</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.DebugMap.input_normal_dial
          image_dir=image_dir
      %}
    </p>
    <h3>map_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | position = 0 (default)
          | texture st = 1
          | shading normal = 2
          | geometric normal = 3
          | dpds = 4
          | dpdt = 5
          | primitive attribute = 6
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.DebugMap.map_type
          image_dir=image_dir
      %}
    </p>
  </p>
</details>
</div>