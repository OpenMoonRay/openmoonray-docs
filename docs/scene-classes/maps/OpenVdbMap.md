---
title: OpenVdbMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# OpenVdbMap
{%assign image_path=site.data.scene-classes.maps.OpenVdbMap.image_path%}
{%if site.data.scene-classes.maps.OpenVdbMap.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.maps.OpenVdbMap.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.maps.OpenVdbMap.links-%}
---
## See Also
{%for link in site.data.scene-classes.maps.OpenVdbMap.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>show_active_field</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">When enabled active/inactive field locations will be white/black, respectively</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.OpenVdbMapattributes.show_active_field.images.
          path=image_path
      %}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>default_value</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">A default value to use when A) the .vdb file is not found, B) the requested grid is not found, C) the grid is unspecified, but no grid is found</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.OpenVdbMapattributes.default_value.images.
          path=image_path
      %}
    </p>
    <h3>grid_name</h3>
    <p class="scene-class-type">
      <b>String</b>
      default: 
      <p class="scene-class-comments">The name of the grid within the .vdb file from which to sample (hint: use openvdb_print to see contents of .vdb file). If no grid is specified, the first grid found in the .vdb will be used.  In cases where there are multiple grids with the same name, the grid name can be indexed (eg. density[1])</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.OpenVdbMapattributes.grid_name.images.
          path=image_path
      %}
    </p>
    <h3>input_texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">The world-space coordinate to use when 'texture coordinates' is set to 'input texture coordinates'</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.OpenVdbMapattributes.input_texture_coordinates.images.
          path=image_path
      %}
    </p>
    <h3>interpolation</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | point = 0
          | box = 1
          | quadratic = 2 (default)
      <p class="scene-class-comments">The type of interpolation to use when sampling the vdb</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.OpenVdbMapattributes.interpolation.images.
          path=image_path
      %}
    </p>
    <h3>openvdb_geometry</h3>
    <p class="scene-class-type">
      <b>Geometry</b>
      default: None
      <p class="scene-class-comments">The OpenVdbGeometry object from which to retrieve the .vdb filename and transform when 'vdb source' is set to 'from OpenVdbGeometry'</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.OpenVdbMapattributes.openvdb_geometry.images.
          path=image_path
      %}
    </p>
    <h3>show_warnings</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-comments">Enables a warning message when A) the .vdb file is not found, B) the requested grid is not found, C) the grid is unspecified, but no grid is found</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.OpenVdbMapattributes.show_warnings.images.
          path=image_path
      %}
    </p>
    <h3>texture</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments"></p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.OpenVdbMapattributes.texture.images.
          path=image_path
      %}
    </p>
    <h3>texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | position = 0 (default)
          | reference position = 1
          | input texture coordinates = 2
      <p class="scene-class-comments">Which coordinate source to use for the texture lookup</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.OpenVdbMapattributes.texture_coordinates.images.
          path=image_path
      %}
    </p>
    <h3>vdb_source</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | from texture = 0 (default)
          | from OpenVdbGeometry = 1
      <p class="scene-class-comments">Where to look for the vdb filename.  Choose 'from texture' to specify a .vdb filename directly via the 'texture' attribute.  Choose 'from OpenVdbGeometry' to use the .vdb filename and transform from an OpenVdbGeometry object in the scene using the 'openvdb geometry' attribute</p>
      {% include image-gallery.html
          images=site.data.scene-classes.maps.OpenVdbMapattributes.vdb_source.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>