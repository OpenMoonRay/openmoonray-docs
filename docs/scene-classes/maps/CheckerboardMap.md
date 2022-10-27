---
title: CheckerboardMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# CheckerboardMap
{%assign image_path=site.data.scene-classes.maps.CheckerboardMap.images.path%}
{%if site.data.scene-classes.maps.CheckerboardMap.images.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.CheckerboardMap.images.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.CheckerboardMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.CheckerboardMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>color_A</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.CheckerboardMap.images.attributes.color_A
          path=image_path
      %}
    </p>
    <h3>color_B</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 1, 1, 1 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.CheckerboardMap.images.attributes.color_B
          path=image_path
      %}
    </p>
    <h3>input_texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">bind a shader that outputs UV coordinates (such as a projection shader) here</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.CheckerboardMap.images.attributes.input_texture_coordinates
          path=image_path
      %}
    </p>
    <h3>num_u_tiles</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 8
      <p class="scene-class-comments">number of checkerboard squares in the U direction</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.CheckerboardMap.images.attributes.num_u_tiles
          path=image_path
      %}
    </p>
    <h3>num_v_tiles</h3>
    <p class="scene-class-type">
      <b>Int</b>
      default: 8
      <p class="scene-class-comments">number of checkerboard squares in the V direction</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.CheckerboardMap.images.attributes.num_v_tiles
          path=image_path
      %}
    </p>
    <h3>texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | texture = 0 (default)
          | input texture coordinates = 1
      <p class="scene-class-comments">switches between the model's uv coordinates or the input texture coordinates</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.CheckerboardMap.images.attributes.texture_coordinates
          path=image_path
      %}
    </p>
  </p>
</details>
</div>