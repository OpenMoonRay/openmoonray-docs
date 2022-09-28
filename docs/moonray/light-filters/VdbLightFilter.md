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

## blur_type  
**Int**  *enum*

- gaussian = 0 (default)

- circular = 1


<p class="scene-class-attr-missing">Documentation for the attribute <b>blur_type</b> needs to be written</p>


## blur_value  
**Float**  

Default value : 0.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>blur_value</b> needs to be written</p>


## color_tint  
**Rgb**  

Default value : [ 0, 0, 0 ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>color_tint</b> needs to be written</p>


## density_grid_name  
**String**  *filename*

Default value :   

The name of the grid within the .vdb file from which to sample for density(hint: use openvdb_print to see contents of .vdb file). If no grid is specified, it will use 'density' as the defaultIn cases where there are multiple grids with the same name, the grid name can be indexed (eg. density[1])


## density_remap_input_max  
**Float**  

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>density_remap_input_max</b> needs to be written</p>


## density_remap_input_min  
**Float**  

Default value : 0.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>density_remap_input_min</b> needs to be written</p>


## density_remap_inputs  
**FloatVector**  

Default value : <scene_rdl2.__scene_rdl2__.FloatVector object at >  

<p class="scene-class-attr-missing">Documentation for the attribute <b>density_remap_inputs</b> needs to be written</p>


## density_remap_interpolation_types  
**IntVector**  

Default value : <scene_rdl2.__scene_rdl2__.IntVector object at >  

<p class="scene-class-attr-missing">Documentation for the attribute <b>density_remap_interpolation_types</b> needs to be written</p>


## density_remap_output_max  
**Float**  

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>density_remap_output_max</b> needs to be written</p>


## density_remap_output_min  
**Float**  

Default value : 0.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>density_remap_output_min</b> needs to be written</p>


## density_remap_outputs  
**FloatVector**  

Default value : <scene_rdl2.__scene_rdl2__.FloatVector object at >  

<p class="scene-class-attr-missing">Documentation for the attribute <b>density_remap_outputs</b> needs to be written</p>


## density_rescale_enable  
**Bool**  

Default value : False  

<p class="scene-class-attr-missing">Documentation for the attribute <b>density_rescale_enable</b> needs to be written</p>


## invert_density  
**Bool**  

Default value : False  

<p class="scene-class-attr-missing">Documentation for the attribute <b>invert_density</b> needs to be written</p>


## vdb_interpolation_type  
**Int**  *enum*

- point = 0 (default)

- box = 1

- quadratic = 2


<p class="scene-class-attr-missing">Documentation for the attribute <b>vdb_interpolation_type</b> needs to be written</p>


## vdb_map  
**String**  *filename*

Default value :   

Supply the path to the vdb


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

## node_xform  
**Mat4d**  *blurrable*

Default value : [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>node_xform</b> needs to be written</p>


## on  
**Bool**  

Default value : True  

<p class="scene-class-attr-missing">Documentation for the attribute <b>on</b> needs to be written</p>


</details>

