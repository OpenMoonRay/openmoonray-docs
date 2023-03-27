---
title: OpenVdbMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# OpenVdbMap
{%-include overview.html data=site.data.user-reference.scene-objects.maps.OpenVdbMap-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpenVdbMap.gallery data=site.data.user-reference.scene-objects.maps.OpenVdbMap-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpenVdbMap.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Advanced attributes</summary>
  <p>
    <h3>show_active_field</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">When enabled active/inactive field locations will be white/black, respectively</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.show_active_field.images data=site.data.user-reference.scene-objects.maps.OpenVdbMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.show_active_field.videos data=site.data.user-reference.scene-objects.maps.OpenVdbMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.show_active_field.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>default_value</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">A default value to use when A) the .vdb file is not found, B) the requested grid is not found, C) the grid is unspecified, but no grid is found</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.default_value.images data=site.data.user-reference.scene-objects.maps.OpenVdbMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.default_value.videos data=site.data.user-reference.scene-objects.maps.OpenVdbMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.default_value.links heading=4-%}
    </p>
    <h3>grid_name</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">The name of the grid within the .vdb file from which to sample (hint: use openvdb_print to see contents of .vdb file). If no grid is specified, the first grid found in the .vdb will be used.  In cases where there are multiple grids with the same name, the grid name can be indexed (eg. density[1])</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.grid_name.images data=site.data.user-reference.scene-objects.maps.OpenVdbMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.grid_name.videos data=site.data.user-reference.scene-objects.maps.OpenVdbMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.grid_name.links heading=4-%}
    </p>
    <h3>input_texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Vec3f</b> <i>bindable</i>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">The world-space coordinate to use when 'texture coordinates' is set to 'input texture coordinates'</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.input_texture_coordinates.images data=site.data.user-reference.scene-objects.maps.OpenVdbMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.input_texture_coordinates.videos data=site.data.user-reference.scene-objects.maps.OpenVdbMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.input_texture_coordinates.links heading=4-%}
    </p>
    <h3>interpolation</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;point&rdquo;<br>
          &nbsp;&nbsp;1 = &ldquo;box&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;quadratic&rdquo; (default)<br>
      <p class="scene-class-comments">The type of interpolation to use when sampling the vdb</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.interpolation.images data=site.data.user-reference.scene-objects.maps.OpenVdbMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.interpolation.videos data=site.data.user-reference.scene-objects.maps.OpenVdbMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.interpolation.links heading=4-%}
    </p>
    <h3>openvdb_geometry</h3>
    <p class="scene-class-type">
      <b>Geometry</b>
      <br>
      default: None
      <p class="scene-class-comments">The OpenVdbGeometry object from which to retrieve the .vdb filename and transform when 'vdb source' is set to 'from OpenVdbGeometry'</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.openvdb_geometry.images data=site.data.user-reference.scene-objects.maps.OpenVdbMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.openvdb_geometry.videos data=site.data.user-reference.scene-objects.maps.OpenVdbMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.openvdb_geometry.links heading=4-%}
    </p>
    <h3>show_warnings</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enables a warning message when A) the .vdb file is not found, B) the requested grid is not found, C) the grid is unspecified, but no grid is found</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.show_warnings.images data=site.data.user-reference.scene-objects.maps.OpenVdbMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.show_warnings.videos data=site.data.user-reference.scene-objects.maps.OpenVdbMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.show_warnings.links heading=4-%}
    </p>
    <h3>texture</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      <br>
      default: 
      <p class="scene-class-comments"></p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.texture.images data=site.data.user-reference.scene-objects.maps.OpenVdbMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.texture.videos data=site.data.user-reference.scene-objects.maps.OpenVdbMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.texture.links heading=4-%}
    </p>
    <h3>texture_coordinates</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;position&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;reference position&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;input texture coordinates&rdquo;<br>
      <p class="scene-class-comments">Which coordinate source to use for the texture lookup</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.texture_coordinates.images data=site.data.user-reference.scene-objects.maps.OpenVdbMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.texture_coordinates.videos data=site.data.user-reference.scene-objects.maps.OpenVdbMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.texture_coordinates.links heading=4-%}
    </p>
    <h3>vdb_source</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;from texture&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;from OpenVdbGeometry&rdquo;<br>
      <p class="scene-class-comments">Where to look for the vdb filename.  Choose 'from texture' to specify a .vdb filename directly via the 'texture' attribute.  Choose 'from OpenVdbGeometry' to use the .vdb filename and transform from an OpenVdbGeometry object in the scene using the 'openvdb geometry' attribute</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.vdb_source.images data=site.data.user-reference.scene-objects.maps.OpenVdbMap-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.vdb_source.videos data=site.data.user-reference.scene-objects.maps.OpenVdbMap-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.maps.OpenVdbMap.attributes.vdb_source.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.maps.OpenVdbMap-%}