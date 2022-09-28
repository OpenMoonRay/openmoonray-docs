---
title: ProjectPlanarNormalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ProjectPlanarNormalMap
**SHADER**

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


<h2>normal_encoding</h2>
<b>Int</b>  *enum*

- [0,1] = 0 (default)

- [-1,1] = 1


Most normal maps are encoded [0,1].   Only certain rare floating point normal maps are encoded [-1,1]


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


<h2>texture</h2>
<b>String</b>  *filename*

Default value :   

filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).


<h2>translate</h2>
<b>Vec3d</b>  

Default value : [ 0, 0, 0 ]  

Tranlation of the projection transform


<h2>use_reference_space</h2>
<b>Bool</b>  

Default value : False  

use reference space


<h2>wrap_around</h2>
<b>Bool</b>  

Default value : True  

Controls whether to repeat (true) or clamp (false) the texture


</details>

