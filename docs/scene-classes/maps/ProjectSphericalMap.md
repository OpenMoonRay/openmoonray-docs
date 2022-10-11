---
title: ProjectSphericalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# ProjectSphericalMap
**MAP SHADER**

---

<details open>
  <summary class="scene-class-attr-group">General attributes</summary>
  <p>
    
    <h3>TRS_order</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | Scale Rot Trans = 0 (default)
        
          | Scale Trans Rot = 1
        
          | Rot Scale Trans = 2
        
          | Rot Trans Scale = 3
        
          | Trans Scale Rot = 4
        
          | Trans Rot Scale = 5
        
      
        <p class="scene-class-attr-comment">Order in which to apply transformations</p>
      
    </p>
    
    <h3>projection_matrix</h3>
    <p>
      <b>Mat4d</b>
      
      
        default: [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]
      
        <p class="scene-class-attr-comment">the transform to use for projection</p>
      
    </p>
    
    <h3>projection_mode</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | projector = 0 (default)
        
          | projection_matrix = 1
        
          | TRS = 2
        
      
        <p class="scene-class-attr-comment">Source parameters to use for projection transform</p>
      
    </p>
    
    <h3>projector</h3>
    <p>
      <b>Node</b>
      
      
        default: None
      
        <p class="scene-class-attr-comment">the object whose transform to use for projection</p>
      
    </p>
    
    <h3>rotate</h3>
    <p>
      <b>Vec3d</b>
      
      
        default: [ 0, 0, 0 ]
      
        <p class="scene-class-attr-comment">Rotation of the projection transform</p>
      
    </p>
    
    <h3>rotation_order</h3>
    <p>
      <b>Int</b>
      <i>enum</i>
      
          | xyz = 0 (default)
        
          | xzy = 1
        
          | yxz = 2
        
          | yzx = 3
        
          | zxy = 4
        
          | zyx = 5
        
      
        <p class="scene-class-attr-comment">Order in which to apply rotation transformations</p>
      
    </p>
    
    <h3>scale</h3>
    <p>
      <b>Vec3d</b>
      
      
        default: [ 1, 1, 1 ]
      
        <p class="scene-class-attr-comment">Scale of the projection transform</p>
      
    </p>
    
    <h3>translate</h3>
    <p>
      <b>Vec3d</b>
      
      
        default: [ 0, 0, 0 ]
      
        <p class="scene-class-attr-comment">Tranlation of the projection transform</p>
      
    </p>
    
    <h3>use_reference_space</h3>
    <p>
      <b>Bool</b>
      
      
        default: False
      
        <p class="scene-class-attr-comment">use reference space</p>
      
    </p>
    
  </p>
</details>

