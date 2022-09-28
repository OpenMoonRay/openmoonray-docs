---
title: ProjectCameraNormalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ProjectCameraNormalMap
**SHADER**

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>aspect_ratio_source</h2>
<b>Int</b>  *enum*

- from texture = 0 (default)

- custom = 1


Whether to use the image and pixel aspect ratio of the texture being projected, or a custom aspect ratio


<h2>custom_aspect_ratio</h2>
<b>Float</b>  

Default value : 1.0  

a custom aspect ratio for the projected texture


<h2>normal_encoding</h2>
<b>Int</b>  *enum*

- [0,1] = 0 (default)

- [-1,1] = 1


Most normal maps are encoded [0,1].   Only certain rare floating point normal maps are encoded [-1,1]


<h2>project_on_back_faces</h2>
<b>Bool</b>  

Default value : False  

Toggles whether camera projections appear on back faces.


<h2>projector</h2>
<b>Camera</b>  

Default value : None  

the camera to project from


<h2>texture</h2>
<b>String</b>  *filename*

Default value :   

filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).


<h2>use_reference_space</h2>
<b>Bool</b>  

Default value : False  

use reference space


</details>

