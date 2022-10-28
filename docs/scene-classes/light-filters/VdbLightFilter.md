---
title: VdbLightFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# VdbLightFilter
{%include image-gallery.html images=site.data.scene-classes.light-filters.VdbLightFilter.gallery data=site.data.scene-classes.light-filters.VdbLightFilter-%}
{%include see-also.html links=site.data.scene-classes.light-filters.VdbLightFilter.links-%}
---
## Attribute Reference

<div class="scene-class">
<details open>
  <summary>Properties attributes</summary>
  <p>
    <h3>blur_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | gaussian = 0 (default)
          | circular = 1
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.blur_type.images data=site.data.scene-classes.light-filters.VdbLightFilter-%}
      {%include see-also.html links=site.data.scene-classes.light-filters.VdbLightFilter.attributes.blur_type.links-%}
    </p>
    <h3>blur_value</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.blur_value.images data=site.data.scene-classes.light-filters.VdbLightFilter-%}
      {%include see-also.html links=site.data.scene-classes.light-filters.VdbLightFilter.attributes.blur_value.links-%}
    </p>
    <h3>color_tint</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.color_tint.images data=site.data.scene-classes.light-filters.VdbLightFilter-%}
      {%include see-also.html links=site.data.scene-classes.light-filters.VdbLightFilter.attributes.color_tint.links-%}
    </p>
    <h3>density_grid_name</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">The name of the grid within the .vdb file from which to sample for density(hint: use openvdb_print to see contents of .vdb file). If no grid is specified, it will use 'density' as the defaultIn cases where there are multiple grids with the same name, the grid name can be indexed (eg. density[1])</p>
      {%include image-gallery.html images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_grid_name.images data=site.data.scene-classes.light-filters.VdbLightFilter-%}
      {%include see-also.html links=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_grid_name.links-%}
    </p>
    <h3>density_remap_input_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_remap_input_max.images data=site.data.scene-classes.light-filters.VdbLightFilter-%}
      {%include see-also.html links=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_remap_input_max.links-%}
    </p>
    <h3>density_remap_input_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_remap_input_min.images data=site.data.scene-classes.light-filters.VdbLightFilter-%}
      {%include see-also.html links=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_remap_input_min.links-%}
    </p>
    <h3>density_remap_inputs</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_remap_inputs.images data=site.data.scene-classes.light-filters.VdbLightFilter-%}
      {%include see-also.html links=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_remap_inputs.links-%}
    </p>
    <h3>density_remap_interpolation_types</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_remap_interpolation_types.images data=site.data.scene-classes.light-filters.VdbLightFilter-%}
      {%include see-also.html links=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_remap_interpolation_types.links-%}
    </p>
    <h3>density_remap_output_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_remap_output_max.images data=site.data.scene-classes.light-filters.VdbLightFilter-%}
      {%include see-also.html links=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_remap_output_max.links-%}
    </p>
    <h3>density_remap_output_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_remap_output_min.images data=site.data.scene-classes.light-filters.VdbLightFilter-%}
      {%include see-also.html links=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_remap_output_min.links-%}
    </p>
    <h3>density_remap_outputs</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_remap_outputs.images data=site.data.scene-classes.light-filters.VdbLightFilter-%}
      {%include see-also.html links=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_remap_outputs.links-%}
    </p>
    <h3>density_rescale_enable</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_rescale_enable.images data=site.data.scene-classes.light-filters.VdbLightFilter-%}
      {%include see-also.html links=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_rescale_enable.links-%}
    </p>
    <h3>invert_density</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.invert_density.images data=site.data.scene-classes.light-filters.VdbLightFilter-%}
      {%include see-also.html links=site.data.scene-classes.light-filters.VdbLightFilter.attributes.invert_density.links-%}
    </p>
    <h3>vdb_interpolation_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | point = 0 (default)
          | box = 1
          | quadratic = 2
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.vdb_interpolation_type.images data=site.data.scene-classes.light-filters.VdbLightFilter-%}
      {%include see-also.html links=site.data.scene-classes.light-filters.VdbLightFilter.attributes.vdb_interpolation_type.links-%}
    </p>
    <h3>vdb_map</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">Supply the path to the vdb</p>
      {%include image-gallery.html images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.vdb_map.images data=site.data.scene-classes.light-filters.VdbLightFilter-%}
      {%include see-also.html links=site.data.scene-classes.light-filters.VdbLightFilter.attributes.vdb_map.links-%}
    </p>
  </p>
</details>
<details open>
  <summary>General attributes</summary>
  <p>
    <h3>node_xform</h3>
    <p class="scene-class-type">
      <b>Mat4d</b> <i>blurrable</i>
      default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.node_xform.images data=site.data.scene-classes.light-filters.VdbLightFilter-%}
      {%include see-also.html links=site.data.scene-classes.light-filters.VdbLightFilter.attributes.node_xform.links-%}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {%include image-gallery.html images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.on.images data=site.data.scene-classes.light-filters.VdbLightFilter-%}
      {%include see-also.html links=site.data.scene-classes.light-filters.VdbLightFilter.attributes.on.links-%}
    </p>
  </p>
</details>
</div>