---
title: VdbLightFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# VdbLightFilter
{%-include overview.html data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
{%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.gallery data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
{%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Properties attributes</summary>
  <p>
    <h3>blur_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;gaussian&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;circular&rdquo;<br>
      <p class="scene-class-comments">The type of blur to apply</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.blur_type.images data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.blur_type.videos data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.blur_type.links heading=4-%}
    </p>
    <h3>blur_value</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">The blur radius</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.blur_value.images data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.blur_value.videos data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.blur_value.links heading=4-%}
    </p>
    <h3>color_tint</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      <br>
      default: [ 0, 0, 0 ]
      <p class="scene-class-comments">Tints the light filter.  Lower density increases the shift toward the tint color.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.color_tint.images data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.color_tint.videos data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.color_tint.links heading=4-%}
    </p>
    <h3>density_grid_name</h3>
    <p class="scene-class-type">
      <b>String</b>
      <br>
      default: 
      <p class="scene-class-comments">The name of the grid within the .vdb file from which to sample for density(hint: use openvdb_print to see contents of .vdb file). If no grid is specified, it will use 'density' as the defaultIn cases where there are multiple grids with the same name, the grid name can be indexed (eg. density[1])</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_grid_name.images data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_grid_name.videos data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_grid_name.links heading=4-%}
    </p>
    <h3>density_remap_input_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Clamp the remapped input to this max value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_remap_input_max.images data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_remap_input_max.videos data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_remap_input_max.links heading=4-%}
    </p>
    <h3>density_remap_input_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Clamp the remapped input to this min value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_remap_input_min.images data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_remap_input_min.videos data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_remap_input_min.links heading=4-%}
    </p>
    <h3>density_remap_inputs</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">List of input remap curve values</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_remap_inputs.images data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_remap_inputs.videos data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_remap_inputs.links heading=4-%}
    </p>
    <h3>density_remap_interpolation_types</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">List of density remap interpolation types</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_remap_interpolation_types.images data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_remap_interpolation_types.videos data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_remap_interpolation_types.links heading=4-%}
    </p>
    <h3>density_remap_output_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 1.0
      <p class="scene-class-comments">Clamp the remapped output to this max value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_remap_output_max.images data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_remap_output_max.videos data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_remap_output_max.links heading=4-%}
    </p>
    <h3>density_remap_output_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      <br>
      default: 0.0
      <p class="scene-class-comments">Clamp the remapped output to this min value</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_remap_output_min.images data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_remap_output_min.videos data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_remap_output_min.links heading=4-%}
    </p>
    <h3>density_remap_outputs</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      <br>
      default: {}
      <p class="scene-class-comments">List of output remap curve values</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_remap_outputs.images data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_remap_outputs.videos data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_remap_outputs.links heading=4-%}
    </p>
    <h3>density_rescale_enable</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Enable density rescaling</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_rescale_enable.images data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_rescale_enable.videos data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.density_rescale_enable.links heading=4-%}
    </p>
    <h3>invert_density</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: False
      <p class="scene-class-comments">Invert the density with density = 1 - density</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.invert_density.images data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.invert_density.videos data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.invert_density.links heading=4-%}
    </p>
    <h3>vdb_interpolation_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
      <br>
          &nbsp;&nbsp;0 = &ldquo;point&rdquo; (default)<br>
          &nbsp;&nbsp;1 = &ldquo;box&rdquo;<br>
          &nbsp;&nbsp;2 = &ldquo;quadratic&rdquo;<br>
      <p class="scene-class-comments">The type of interpolation to use when sampling the filter</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.vdb_interpolation_type.images data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.vdb_interpolation_type.videos data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.vdb_interpolation_type.links heading=4-%}
    </p>
    <h3>vdb_map</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      <br>
      default: 
      <p class="scene-class-comments">The path to the vdb</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.vdb_map.images data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.vdb_map.videos data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.vdb_map.links heading=4-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      <br>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-comments">The filter's orientation</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.node_xform.images data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.node_xform.videos data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.node_xform.links heading=4-%}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      <br>
      default: True
      <p class="scene-class-comments">Turns the light filter on/off.</p>
      {%-include image-gallery.html images=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.on.images data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include video-gallery.html videos=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.on.videos data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}
      {%-include see-also.html links=site.data.user-reference.scene-objects.light-filters.VdbLightFilter.attributes.on.links heading=4-%}
    </p>
  </p>
</details>
</div>
{%-include example.html data=site.data.user-reference.scene-objects.light-filters.VdbLightFilter-%}