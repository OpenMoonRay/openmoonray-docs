---
title: ProjectCylindricalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ProjectCylindricalMap
**MAP SHADER**

---

<details open>
  <summary class="jekyll-theme-minimal scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>TRS_order</h3>
    <b>Int</b>
    <i>enum</i>
    
    - Scale Rot Trans = 0 (default)
    
    - Scale Trans Rot = 1
    
    - Rot Scale Trans = 2
    
    - Rot Trans Scale = 3
    
    - Trans Scale Rot = 4
    
    - Trans Rot Scale = 5
    
    
    <p>Order in which to apply transformations</p>
    
    
    <h3>black_outside_projection</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>Toggles whether projections appear outside the 0-1 uv range of the projector</p>
    
    
    <h3>project_on_inward_surfaces</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>enables projection on surfaces with inward facing normals</p>
    
    
    <h3>project_on_outward_surfaces</h3>
    <b>Bool</b>
    
    
    default: True
    
    <p>enables projection on surfaces with outward facing normals</p>
    
    
    <h3>projection_matrix</h3>
    <b>Mat4d</b>
    
    
    default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
    
    <p>the transform to use for projection</p>
    
    
    <h3>projection_mode</h3>
    <b>Int</b>
    <i>enum</i>
    
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
    <i>enum</i>
    
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
    
    
    <h3>translate</h3>
    <b>Vec3d</b>
    
    
    default: [ 0, 0, 0 ]
    
    <p>Tranlation of the projection transform</p>
    
    
    <h3>use_reference_space</h3>
    <b>Bool</b>
    
    
    default: False
    
    <p>use reference space</p>
    
    
  </p>
</details>

