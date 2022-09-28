---
title: BakeCamera

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# BakeCamera
**NODE CAMERA**

---

<details open>
<summary class="scene-class-attr-group">Frustum attributes</summary>

<h2>far</h2>
<b>Float</b>  

Default value : 10000.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>far</b> needs to be written</p>


<h2>near</h2>
<b>Float</b>  

Default value : 1.0  

<p class="scene-class-attr-missing">Documentation for the attribute <b>near</b> needs to be written</p>


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

<h2>bias</h2>
<b>Float</b>  

Default value : 0.00300000002608  

Ray-tracing offset for primary ray origin


<h2>geometry</h2>
<b>Geometry</b>  

Default value : None  

The geometry object to bake


<h2>map_factor</h2>
<b>Float</b>  

Default value : 1.0  

Increase or decrease the internal position map buffer resolution


<h2>mode</h2>
<b>Int</b>  *enum*

- from camera to surface = 0

- from surface along normal = 1

- from surface along reflection vector = 2

- above surface reverse normal = 3 (default)


How to generate primary rays


<h2>node_xform</h2>
<b>Mat4d</b>  *blurrable*

Default value : [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]  

<p class="scene-class-attr-missing">Documentation for the attribute <b>node_xform</b> needs to be written</p>


<h2>normal_map</h2>
<b>String</b>  *filename*

Default value :   

Use this option to supply your own normals that are used when computing ray directions.  Without this option, normals are computed from the geometry and do not take into account any material applied normal mapping.


<h2>normal_map_space</h2>
<b>Int</b>  *enum*

- camera space = 0 (default)

- tangent space = 1


Use camera space if you generated per frame normal maps in a pre-pass using the normal material aov.  You probably want to use tangent space if you are using a normal map that is also used in the surfacing setup.


<h2>udim</h2>
<b>Int</b>  

Default value : 1001  

Udim tile to bake


<h2>use_relative_bias</h2>
<b>Bool</b>  

Default value : True  

If true, bias is scaled based on position magnitude


<h2>uv_attribute</h2>
<b>String</b>  

Default value :   

Specifies a Vec2f primitive attribute to use as the uv coordinates.  If empty, the default uv for the mesh is used.  The uvs must provide a unique parameterization of the mesh, i.e. a given (u, v) can appear only once on the mesh being baked.


</details>

