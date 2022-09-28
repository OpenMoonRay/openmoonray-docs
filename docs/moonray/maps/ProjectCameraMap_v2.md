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

<h3>alpha_only</h3>
<b>Bool</b>  

default: False

When enabled, the alpha channel is returned instead of RGB


<h3>aspect_ratio_source</h3>
<b>Int</b>  *enum*

- from texture = 0 (default)

- custom = 1


Whether to use the image and pixel aspect ratio of the texture being projected, or a custom aspect ratio


<h3>black_outside_projection</h3>
<b>Bool</b>  

default: True

Toggles whether projections appear outside the 0-1 uv range of the projector


<h3>custom_aspect_ratio</h3>
<b>Float</b>  

default: 1.0

a custom aspect ratio for the projected texture


<h3>gamma</h3>
<b>Int</b>  *enum*

- off = 0

- on = 1

- auto = 2 (default)


Controls application of gamma to images (off -0, on - 1, auto - 2).   Auto will apply gamma decoding to 8-bit images


<h3>project_on_back_faces</h3>
<b>Bool</b>  

default: False

Toggles whether camera projections appear on back faces.


<h3>projector</h3>
<b>Camera</b>  

default: None

the camera to project from


<h3>texture</h3>
<b>String</b>  *filename*

default: 

filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).


<h3>unpremultiply</h3>
<b>Bool</b>  

default: False

When enabled, the rgb channels are divided by the alpha channel (where non-zero)


<h3>use_reference_space</h3>
<b>Bool</b>  

default: False

use reference space


</details>

