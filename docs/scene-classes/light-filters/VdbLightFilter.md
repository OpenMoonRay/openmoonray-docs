---
title: VdbLightFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# VdbLightFilter
{%assign image_path=site.data.scene-classes.light-filters.VdbLightFilter.image_path%}
{%if site.data.scene-classes.light-filters.VdbLightFilter.gallery-%}
---
## Gallery
{% include image-gallery.html
    images=site.data.scene-classes.light-filters.VdbLightFilter.gallery
    path=image_path
%}
{%endif%}
{%if site.data.scene-classes.light-filters.VdbLightFilter.links-%}
---
## See Also
{%for link in site.data.scene-classes.light-filters.VdbLightFilter.links-%}
[{{link.text}}]({{site.baseurl}}/{{link.path}})  
{%endfor%}
{%endif%}
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
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.blur_type.images.
          path=image_path
      %}
    </p>
    <h3>blur_value</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.blur_value.images.
          path=image_path
      %}
    </p>
    <h3>color_tint</h3>
    <p class="scene-class-type">
      <b>Rgb</b>
      default: [ 0, 0, 0 ]
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.color_tint.images.
          path=image_path
      %}
    </p>
    <h3>density_grid_name</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">The name of the grid within the .vdb file from which to sample for density(hint: use openvdb_print to see contents of .vdb file). If no grid is specified, it will use 'density' as the defaultIn cases where there are multiple grids with the same name, the grid name can be indexed (eg. density[1])</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_grid_name.images.
          path=image_path
      %}
    </p>
    <h3>density_remap_input_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_remap_input_max.images.
          path=image_path
      %}
    </p>
    <h3>density_remap_input_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_remap_input_min.images.
          path=image_path
      %}
    </p>
    <h3>density_remap_inputs</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_remap_inputs.images.
          path=image_path
      %}
    </p>
    <h3>density_remap_interpolation_types</h3>
    <p class="scene-class-type">
      <b>IntVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.IntVector object at ...&gt;
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_remap_interpolation_types.images.
          path=image_path
      %}
    </p>
    <h3>density_remap_output_max</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 1.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_remap_output_max.images.
          path=image_path
      %}
    </p>
    <h3>density_remap_output_min</h3>
    <p class="scene-class-type">
      <b>Float</b>
      default: 0.0
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_remap_output_min.images.
          path=image_path
      %}
    </p>
    <h3>density_remap_outputs</h3>
    <p class="scene-class-type">
      <b>FloatVector</b>
      default: &lt;scene_rdl2.__scene_rdl2__.FloatVector object at ...&gt;
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_remap_outputs.images.
          path=image_path
      %}
    </p>
    <h3>density_rescale_enable</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.density_rescale_enable.images.
          path=image_path
      %}
    </p>
    <h3>invert_density</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: False
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.invert_density.images.
          path=image_path
      %}
    </p>
    <h3>vdb_interpolation_type</h3>
    <p class="scene-class-type">
      <b>Int</b> <i>enum</i>
          | point = 0 (default)
          | box = 1
          | quadratic = 2
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.vdb_interpolation_type.images.
          path=image_path
      %}
    </p>
    <h3>vdb_map</h3>
    <p class="scene-class-type">
      <b>String</b> <i>filename</i>
      default: 
      <p class="scene-class-comments">Supply the path to the vdb</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.vdb_map.images.
          path=image_path
      %}
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
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.node_xform.images.
          path=image_path
      %}
    </p>
    <h3>on</h3>
    <p class="scene-class-type">
      <b>Bool</b>
      default: True
      <p class="scene-class-no-doc">No documentation available</p>
      {% include image-gallery.html
          images=site.data.scene-classes.light-filters.VdbLightFilter.attributes.on.images.
          path=image_path
      %}
    </p>
  </p>
</details>
</div>