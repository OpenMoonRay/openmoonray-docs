---
title: ProjectPlanarMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ProjectPlanarMap
**MAP SHADER**

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>TRS_order</h2>
<b>Int</b>  *enum*

- Scale Rot Trans = 0 (default)

- Scale Trans Rot = 1

- Rot Scale Trans = 2

- Rot Trans Scale = 3

- Trans Scale Rot = 4

- Trans Rot Scale = 5


Order in which to apply transformations


<h2>black_outside_projection</h2>
<b>Bool</b>  

Default value : False  

Toggles whether projections appear outside the 0-1 uv range of the projector


<h2>project_on_back_faces</h2>
<b>Bool</b>  

Default value : True  

Toggles whether projections appear on back faces relative to projector


<h2>projection_matrix</h2>
<b>Mat4d</b>  

Default value : [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]  

the transform to use for projection


<h2>projection_mode</h2>
<b>Int</b>  *enum*

- projector = 0 (default)

- projection_matrix = 1

- TRS = 2


Source parameters to use for projection transform


<h2>projector</h2>
<b>Node</b>  

Default value : None  

the object whose transform to use for projection


<h2>rotate</h2>
<b>Vec3d</b>  

Default value : [ 0, 0, 0 ]  

Rotation of the projection transform


<h2>rotation_order</h2>
<b>Int</b>  *enum*

- xyz = 0 (default)

- xzy = 1

- yxz = 2

- yzx = 3

- zxy = 4

- zyx = 5


Order in which to apply rotation transformations


<h2>scale</h2>
<b>Vec3d</b>  

Default value : [ 1, 1, 1 ]  

Scale of the projection transform


<h2>translate</h2>
<b>Vec3d</b>  

Default value : [ 0, 0, 0 ]  

Tranlation of the projection transform


<h2>use_reference_space</h2>
<b>Bool</b>  

Default value : False  

use reference space


</details>

