---
title: ProjectCameraMap_v2

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ProjectCameraMap_v2
**MAP SHADER**

---

<details open>
<summary class="scene-class-attr-group">General attributes</summary>

<h2>alpha_only</h2>
<b>Bool</b>  

Default value : False  

When enabled, the alpha channel is returned instead of RGB


<h2>aspect_ratio_source</h2>
<b>Int</b>  *enum*

- from texture = 0 (default)

- custom = 1


Whether to use the image and pixel aspect ratio of the texture being projected, or a custom aspect ratio


<h2>black_outside_projection</h2>
<b>Bool</b>  

Default value : True  

Toggles whether projections appear outside the 0-1 uv range of the projector


<h2>custom_aspect_ratio</h2>
<b>Float</b>  

Default value : 1.0  

a custom aspect ratio for the projected texture


<h2>gamma</h2>
<b>Int</b>  *enum*

- off = 0

- on = 1

- auto = 2 (default)


Controls application of gamma to images (off -0, on - 1, auto - 2).   Auto will apply gamma decoding to 8-bit images


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


<h2>unpremultiply</h2>
<b>Bool</b>  

Default value : False  

When enabled, the rgb channels are divided by the alpha channel (where non-zero)


<h2>use_reference_space</h2>
<b>Bool</b>  

Default value : False  

use reference space


</details>

