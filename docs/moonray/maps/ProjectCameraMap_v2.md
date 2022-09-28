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
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
  
  <h3>alpha_only</h3>
  <b>Bool</b>  
  
  default: False
  
  <p>When enabled, the alpha channel is returned instead of RGB<\p>
  
  
  <h3>aspect_ratio_source</h3>
  <b>Int</b>  *enum*
  
  - from texture = 0 (default)
  
  - custom = 1
  
  
  <p>Whether to use the image and pixel aspect ratio of the texture being projected, or a custom aspect ratio<\p>
  
  
  <h3>black_outside_projection</h3>
  <b>Bool</b>  
  
  default: True
  
  <p>Toggles whether projections appear outside the 0-1 uv range of the projector<\p>
  
  
  <h3>custom_aspect_ratio</h3>
  <b>Float</b>  
  
  default: 1.0
  
  <p>a custom aspect ratio for the projected texture<\p>
  
  
  <h3>gamma</h3>
  <b>Int</b>  *enum*
  
  - off = 0
  
  - on = 1
  
  - auto = 2 (default)
  
  
  <p>Controls application of gamma to images (off -0, on - 1, auto - 2).   Auto will apply gamma decoding to 8-bit images<\p>
  
  
  <h3>project_on_back_faces</h3>
  <b>Bool</b>  
  
  default: False
  
  <p>Toggles whether camera projections appear on back faces.<\p>
  
  
  <h3>projector</h3>
  <b>Camera</b>  
  
  default: None
  
  <p>the camera to project from<\p>
  
  
  <h3>texture</h3>
  <b>String</b>  *filename*
  
  default: 
  
  <p>filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).<\p>
  
  
  <h3>unpremultiply</h3>
  <b>Bool</b>  
  
  default: False
  
  <p>When enabled, the rgb channels are divided by the alpha channel (where non-zero)<\p>
  
  
  <h3>use_reference_space</h3>
  <b>Bool</b>  
  
  default: False
  
  <p>use reference space<\p>
  
  
  </p>
</details>

