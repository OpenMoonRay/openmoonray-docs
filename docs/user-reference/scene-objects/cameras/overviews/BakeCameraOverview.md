Baking in Moonray is accomplished through the use of a <span class="define">BakeCamera</span> camera shader. The BakeCamera, like any other camera shader, is responsible for turning sample locations on the image plane into primary rays (ray origin and ray direction). For each pixel location `(px, py)` in the image being rendered a `(u, v)` coordinate is computed as:

```
u = px / (image_width - 1)
v = py / (image_height - 1)
```

Once this `(u, v)` coordinate is computed, the corresponding 3D location, `P`, on the geometry being baked is looked up. Any normal supplied with the mesh, `N`, is also available. In order to do this, the geometry being baked must have a properly uvunwrapped parameterization. This is just a fancy way of saying that a given `(u, v)` coordinate must map to at most one point location on the geometry's surface. The BakeCamera does not check for this condition, it assumes it.

Once the 3D location is known, the primary ray origin and direction can be chosen according to one of four modes:

- `0`: _camera to surface_ : The ray direction is chosen as the direction between the location of the bake camera and the 3D surface point. The ray origin is chosen to be just slightly offset from `P` back along this ray.
- `1`: _surface along normal_ : The ray direction is the surface normal, the ray origin is offset just above the surface along the normal direction.
- `2`: _surface along reflection vector_ : The ray direction is the reflection vector defined by the bake camera's location and the surface normal. The ray origin is the surface location, offset slightly along the reflection vector direction.
- `3`: _reverse normal_ : The ray direction is the negative normal direction. The ray origin is offset just slightly above the surface.

![Baking Modes]({{site.baseurl}}/assets/images/user-reference/scene-objects/cameras/BakeCamera/BakeModes.png)

Once the primary ray has been defined, there is nothing left that is specific to baking. All features of Moonray rendering are available, including AOVs. There are some features you should avoid though. Motion-blur and depth of field are not implemented in the BakeCamera. So turning those on could produce undesirable or unexpected results.

The following default camera attributes cannot be used or are ignored during baking:
- <span class="define">*near*</span> and <span class="define">*far*</span> for modes 0 (from camera to surface) and 3 (reverse normal). The *near* and *far* clipping planes are computed automatically based on the <span class="define">*bias*</span> parameter to ensure that the position is baked in optimally inside these two clipping planes.
- <span class="define">*mb*</span> parameters (motion blur should not be used with the BakeCamera)