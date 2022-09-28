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

<h3>far</h3>
<b>Float</b>  

default: 10000.0

<p class="scene-class-attr-missing">Documentation for the attribute <b>far</b> needs to be written</p>


<h3>near</h3>
<b>Float</b>  

default: 1.0

<p class="scene-class-attr-missing">Documentation for the attribute <b>near</b> needs to be written</p>


</details>


<details open>
<summary class="scene-class-attr-group">Motion Blur attributes</summary>

<h3>mb_shutter_bias</h3>
<b>Float</b>  

default: 0.0

<p class="scene-class-attr-missing">Documentation for the attribute <b>mb_shutter_bias</b> needs to be written</p>


<h3>mb_shutter_close</h3>
<b>Float</b>  

default: 0.25

<p class="scene-class-attr-missing">Documentation for the attribute <b>mb_shutter_close</b> needs to be written</p>


<h3>mb_shutter_open</h3>
<b>Float</b>  

default: -0.25

<p class="scene-class-attr-missing">Documentation for the attribute <b>mb_shutter_open</b> needs to be written</p>


</details>


<details open>
<summary class="scene-class-attr-group">Render Masks attributes</summary>

<h3>pixel_sample_map</h3>
<b>String</b>  

default: 

<p class="scene-class-attr-missing">Documentation for the attribute <b>pixel_sample_map</b> needs to be written</p>


</details>


<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h3>bias</h3>
<b>Float</b>  

default: 0.00300000002608

Ray-tracing offset for primary ray origin


<h3>geometry</h3>
<b>Geometry</b>  

default: None

The geometry object to bake


<h3>map_factor</h3>
<b>Float</b>  

default: 1.0

Increase or decrease the internal position map buffer resolution


<h3>mode</h3>
<b>Int</b>  *enum*

- from camera to surface = 0

- from surface along normal = 1

- from surface along reflection vector = 2

- above surface reverse normal = 3 (default)


How to generate primary rays


<h3>node_xform</h3>
<b>Mat4d</b>  *blurrable*

default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]

<p class="scene-class-attr-missing">Documentation for the attribute <b>node_xform</b> needs to be written</p>


<h3>normal_map</h3>
<b>String</b>  *filename*

default: 

Use this option to supply your own normals that are used when computing ray directions.  Without this option, normals are computed from the geometry and do not take into account any material applied normal mapping.


<h3>normal_map_space</h3>
<b>Int</b>  *enum*

- camera space = 0 (default)

- tangent space = 1


Use camera space if you generated per frame normal maps in a pre-pass using the normal material aov.  You probably want to use tangent space if you are using a normal map that is also used in the surfacing setup.


<h3>udim</h3>
<b>Int</b>  

default: 1001

Udim tile to bake


<h3>use_relative_bias</h3>
<b>Bool</b>  

default: True

If true, bias is scaled based on position magnitude


<h3>uv_attribute</h3>
<b>String</b>  

default: 

Specifies a Vec2f primitive attribute to use as the uv coordinates.  If empty, the default uv for the mesh is used.  The uvs must provide a unique parameterization of the mesh, i.e. a given (u, v) can appear only once on the mesh being baked.


</details>

