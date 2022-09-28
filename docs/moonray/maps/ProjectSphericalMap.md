---
title: ProjectSphericalMap

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# ProjectSphericalMap

**MAP SHADER**

Documentation for class ProjectSphericalMap



---

## <p class="scene-class-attr-group">General attributes</p>

## TRS_order

**Int** *enum*



- Scale Rot Trans = 0 (default)

- Scale Trans Rot = 1

- Rot Scale Trans = 2

- Rot Trans Scale = 3

- Trans Scale Rot = 4

- Trans Rot Scale = 5





Order in which to apply transformations




## projection_matrix

**Mat4d** 


Default value : [ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]




the transform to use for projection




## projection_mode

**Int** *enum*



- projector = 0 (default)

- projection_matrix = 1

- TRS = 2





Source parameters to use for projection transform




## projector

**Node** 


Default value : None




the object whose transform to use for projection




## rotate

**Vec3d** 


Default value : [ 0, 0, 0 ]




Rotation of the projection transform




## rotation_order

**Int** *enum*



- xyz = 0 (default)

- xzy = 1

- yxz = 2

- yzx = 3

- zxy = 4

- zyx = 5





Order in which to apply rotation transformations




## scale

**Vec3d** 


Default value : [ 1, 1, 1 ]




Scale of the projection transform




## translate

**Vec3d** 


Default value : [ 0, 0, 0 ]




Tranlation of the projection transform




## use_reference_space

**Bool** 


Default value : False




use reference space





