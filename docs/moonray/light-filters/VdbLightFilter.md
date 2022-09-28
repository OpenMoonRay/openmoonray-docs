---
title: VdbLightFilter

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# VdbLightFilter
**LIGHTFILTER**

---

<details open>
<summary class="scene-class-attr-group">Properties attributes</summary>

<h2>blur_type</h2>
<b>Int</b>  *enum*

- gaussian = 0 (default)

- circular = 1


<p class="scene-class-attr-missing">Documentation for the attribute <b>blur_type</b> needs to be written</p>


<h2>blur_value</h2>
<b>Float</b>  

Default value : 0.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>blur_value</b> needs to be written</p>


<h2>color_tint</h2>
<b>Rgb</b>  

Default value : [ 0, 0, 0 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>color_tint</b> needs to be written</p>


<h2>density_grid_name</h2>
<b>String</b>  *filename*

Default value :   

The name of the grid within the .vdb file from which to sample for density(hint: use openvdb_print to see contents of .vdb file). If no grid is specified, it will use 'density' as the defaultIn cases where there are multiple grids with the same name, the grid name can be indexed (eg. density[1])


<h2>density_remap_input_max</h2>
<b>Float</b>  

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>density_remap_input_max</b> needs to be written</p>


<h2>density_remap_input_min</h2>
<b>Float</b>  

Default value : 0.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>density_remap_input_min</b> needs to be written</p>


<h2>density_remap_inputs</h2>
<b>FloatVector</b>  

Default value : <scene_rdl2.__scene_rdl2__.FloatVector object at >  

<p class="scene-class-attr-missing">Documentation for the attribute <b>density_remap_inputs</b> needs to be written</p>


<h2>density_remap_interpolation_types</h2>
<b>IntVector</b>  

Default value : <scene_rdl2.__scene_rdl2__.IntVector object at >  

<p class="scene-class-attr-missing">Documentation for the attribute <b>density_remap_interpolation_types</b> needs to be written</p>


<h2>density_remap_output_max</h2>
<b>Float</b>  

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>density_remap_output_max</b> needs to be written</p>


<h2>density_remap_output_min</h2>
<b>Float</b>  

Default value : 0.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>density_remap_output_min</b> needs to be written</p>


<h2>density_remap_outputs</h2>
<b>FloatVector</b>  

Default value : <scene_rdl2.__scene_rdl2__.FloatVector object at >  

<p class="scene-class-attr-missing">Documentation for the attribute <b>density_remap_outputs</b> needs to be written</p>


<h2>density_rescale_enable</h2>
<b>Bool</b>  

Default value : False  

<p class="scene-class-attr-missing">Documentation for the attribute <b>density_rescale_enable</b> needs to be written</p>


<h2>invert_density</h2>
<b>Bool</b>  

Default value : False  

<p class="scene-class-attr-missing">Documentation for the attribute <b>invert_density</b> needs to be written</p>


<h2>vdb_interpolation_type</h2>
<b>Int</b>  *enum*

- point = 0 (default)

- box = 1

- quadratic = 2


<p class="scene-class-attr-missing">Documentation for the attribute <b>vdb_interpolation_type</b> needs to be written</p>


<h2>vdb_map</h2>
<b>String</b>  *filename*

Default value :   

Supply the path to the vdb


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>node_xform</h2>
<b>Mat4d</b>  *blurrable*

Default value : [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>node_xform</b> needs to be written</p>


<h2>on</h2>
<b>Bool</b>  

Default value : True  

<p class="scene-class-attr-missing">Documentation for the attribute <b>on</b> needs to be written</p>


</details>

