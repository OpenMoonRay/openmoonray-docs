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
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>TRS_order</h3>
    <b>Int</b>
    <span class="emphasized">enum</span>
    
    - Scale Rot Trans = 0 (default)
    
    - Scale Trans Rot = 1
    
    - Rot Scale Trans = 2
    
    - Rot Trans Scale = 3
    
    - Trans Scale Rot = 4
    
    - Trans Rot Scale = 5
    
    
    <p>Order in which to apply transformations</p>
    
    
    <h3>normal_encoding</h3>
    <b>Int</b>
    <span class="emphasized">enum</span>
    
    - [0,1] = 0 (default)
    
    - [-1,1] = 1
    
    
    <p>Most normal maps are encoded [0,1].   Only certain rare floating point normal maps are encoded [-1,1]</p>
    
    
    <h3>projection_matrix</h3>
    <b>Mat4d</b>
    
    
    default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
    
    <p>the transform to use for projection</p>
    
    
    <h3>projection_mode</h3>
    <b>Int</b>
    <span class="emphasized">enum</span>
    
    - projector = 0 (default)
    
    - projection_matrix = 1
    
    - TRS = 2
    
    
    <p>Source parameters to use for projection transform</p>
    
    
    <h3>projector</h3>
    <b>Node</b>
    
    
    default: None
    
    <p>the object whose transform to use for projection</p>
    
    
    <h3>rotate</h3>
    <b>Vec3d</b>
    
    
    default: [ 0, 0, 0 ]
    
    <p>Rotation of the projection transform</p>
    
    
    <h3>rotation_order</h3>
    <b>Int</b>
    <span class="emphasized">enum</span>
    
    - xyz = 0 (default)
    
    - xzy = 1
    
    - yxz = 2
    
    - yzx = 3
    
    - zxy = 4
    
    - zyx = 5
    
    
    <p>Order in which to apply rotation transformations</p>
    
    
    <h3>scale</h3>
    <b>Vec3d</b>
    
    
    default: [ 1, 1, 1 ]
    
    <p>Scale of the projection transform</p>
    
    
    <h3>texture</h3>
    <b>String</b>
    <span class="emphasized">filename</span>
    
    default: 
    
    <p>filename that points to a texture .exr or .tx file (must be mip-mapped and tiled with maketx).</p>
    
    
    <h3>translate</h3>
    <b>Vec3d</b>
    
    
    default: [ 0, 0, 0 ]
    
    <p>Tranlation of the projection transform</p>
    
    
    <h3>use_reference_space</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>use reference space</p>
    
    
    <h3>wrap_around</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>Controls whether to repeat (true) or clamp (false) the texture</p>
    
    
  </p>
</details>

