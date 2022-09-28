---
title: OrthographicCamera

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# OrthographicCamera
**NODE CAMERA**

---

<details open>
<summary class="scene-class-attr-group">Depth of Field attributes</summary>

<h2>bokeh</h2>
<b>Bool</b>  

Default value : False  

Enable Bokeh. Requires DOF to be enabled.


<h2>bokeh_angle</h2>
<b>Float</b>  

Default value : 0.0  

Angle of iris rotation


<h2>bokeh_image</h2>
<b>String</b>  

Default value :   

Path to image file to be used for the iris


<h2>bokeh_sides</h2>
<b>Int</b>  

Default value : 0  

Number of sides of the iris. Specifying less than 3 sides will default to a disk.


<h2>bokeh_weight_location</h2>
<b>Float</b>  

Default value : 0.0  

Distance from the origin of Bokeh shape


<h2>bokeh_weight_strength</h2>
<b>Float</b>  

Default value : 0.0  

Controls the strength of weights as samples approach the weight location


<h2>dof</h2>
<b>Bool</b>  

Default value : False  

<p class="scene-class-attr-missing">Documentation for the attribute <b>dof</b> needs to be written</p>


<h2>dof_aperture</h2>
<b>Float</b>  

Default value : 8.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>dof_aperture</b> needs to be written</p>


<h2>dof_focus_distance</h2>
<b>Float</b>  

Default value : 0.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>dof_focus_distance</b> needs to be written</p>


</details>


<details open>
<summary class="scene-class-attr-group">Frustum attributes</summary>

<h2>far</h2>
<b>Float</b>  

Default value : 10000.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>far</b> needs to be written</p>


<h2>film_width_aperture</h2>
<b>Float</b>  

Default value : 24.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>film_width_aperture</b> needs to be written</p>


<h2>horizontal_film_offset</h2>
<b>Float</b>  

Default value : 0.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>horizontal_film_offset</b> needs to be written</p>


<h2>near</h2>
<b>Float</b>  

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>near</b> needs to be written</p>


<h2>pixel_aspect_ratio</h2>
<b>Float</b>  

Default value : 1.0  

ratio of pixel size y / x


<h2>vertical_film_offset</h2>
<b>Float</b>  

Default value : 0.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>vertical_film_offset</b> needs to be written</p>


</details>


<details open>
<summary class="scene-class-attr-group">Motion Blur attributes</summary>

<h2>mb_shutter_bias</h2>
<b>Float</b>  

Default value : 0.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>mb_shutter_bias</b> needs to be written</p>


<h2>mb_shutter_close</h2>
<b>Float</b>  

Default value : 0.25  

<p class="scene-class-attr-missing">Documentation for the attribute <b>mb_shutter_close</b> needs to be written</p>


<h2>mb_shutter_open</h2>
<b>Float</b>  

Default value : -0.25  

<p class="scene-class-attr-missing">Documentation for the attribute <b>mb_shutter_open</b> needs to be written</p>


</details>


<details open>
<summary class="scene-class-attr-group">Render Masks attributes</summary>

<h2>pixel_sample_map</h2>
<b>String</b>  

Default value :   

<p class="scene-class-attr-missing">Documentation for the attribute <b>pixel_sample_map</b> needs to be written</p>


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>node_xform</h2>
<b>Mat4d</b>  *blurrable*

Default value : [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>node_xform</b> needs to be written</p>


</details>

