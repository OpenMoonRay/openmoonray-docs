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
  <p>
  
  <h3>TRS_order</h3>
  <b>Int</b>  *enum*
  
  - Scale Rot Trans = 0 (default)
  
  - Scale Trans Rot = 1
  
  - Rot Scale Trans = 2
  
  - Rot Trans Scale = 3
  
  - Trans Scale Rot = 4
  
  - Trans Rot Scale = 5
  
  
  Order in which to apply transformations
  
  
  <h3>normal_encoding</h3>
  <b>Int</b>  *enum*
  
  - [0,1] = 0 (default)
  
  - [-1,1] = 1
  
  
  Most normal maps are encoded [0,1].   Only certain rare floating point normal maps are encoded [-1,1]
  
  
  <h3>projection_matrix</h3>
  <b>Mat4d</b>  
  
  default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
  
  the transform to use for projection
  
  
  <h3>projection_mode</h3>
  <b>Int</b>  *enum*
  
  - projector = 0 (default)
  
  - projection_matrix = 1
  
  - TRS = 2
  
  
  Source parameters to use for projection transform
  
  
  <h3>projector</h3>
  <b>Node</b>  
  
  default: None
  
  the object whose transform to use for projection
  
  
  <h3>rotate</h3>
  <b>Vec3d</b>  
  
  default: [ 0, 0, 0 ]
  
  Rotation of the projection transform
  
  
  <h3>rotation_order</h3>
  <b>Int</b>  *enum*
  
  - xyz = 0 (default)
  
  - xzy = 1
  
  - yxz = 2
  
  - yzx = 3
  
  - zxy = 4
  
  - zyx = 5
  
  
  Order in which to apply rotation transformations
  
  
  <h3>scale</h3>
  <b>Vec3d</b>  
  
  default: [ 1, 1, 1 ]
  
  Scale of the projection transform
  
  
  <h3>texture</h3>
  <b>String</b>  *filename*
  
  default: 
  
  filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).
  
  
  <h3>translate</h3>
  <b>Vec3d</b>  
  
  default: [ 0, 0, 0 ]
  
  Tranlation of the projection transform
  
  
  <h3>use_reference_space</h3>
  <b>Bool</b>  
  
  default: False
  
  use reference space
  
  
  <h3>wrap_around</h3>
  <b>Bool</b>  
  
  default: True
  
  Controls whether to repeat (true) or clamp (false) the texture
  
  
  </p>
</details>

