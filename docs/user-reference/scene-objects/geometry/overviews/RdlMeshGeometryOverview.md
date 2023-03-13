**RdlMeshGeometry** generates either a polygonal or subdivision mesh defined soley by the node's parameters.

The example below generates a single quad polygon.

```lua
RdlMeshGeometry("shape_basic") {
    ["vertex_list"] = { Vec3(0, 0, 0),
                        Vec3(0, 1, 0),
                        Vec3(1, 1, 0),
                        Vec3(1, 0, 0) },
    ["vertices_by_index"] = { 0, 1, 2, 3},
    ["face vertex count"] = { 4 },
}
```

Advanced subdivision mesh features such as creasing are also supported.   The example below generates a mesh with creases.

```lua
RdlMeshGeometry("shape_creases") {
    ["node xform"] = translate(-4, -2, 0),
    ["vertex list"] = { Vec3(0, 0, 0), Vec3(0, 0, -1), Vec3(0, 0, -2),
                        Vec3(1, 2, 0), Vec3(1, 3, -1), Vec3(1, 4, -2),
                        Vec3(2, 0, 0), Vec3(2, 0, -1), Vec3(2, 0, -2),
                        Vec3(3, 2, 0), Vec3(3, 3, -1), Vec3(3, 4, -2),
                        Vec3(4, 0, 0), Vec3(4, 0, -1), Vec3(4, 0, -2),
                        Vec3(5, 2, 0), Vec3(5, 3, -1), Vec3(5, 4, -2),
                        Vec3(6, 0, 0), Vec3(6, 0, -1), Vec3(6, 0, -2),
                        Vec3(7, 2, 0), Vec3(7, 3, -1), Vec3(7, 4, -2),
                        Vec3(8, 0, 0), Vec3(8, 0, -1), Vec3(8, 0, -2) },
    ["vertices by index"] = { 0,  3,  4,  1,   1,  4,  5,  2,
                              3,  6,  7,  4,   4,  7,  8,  5,
                              6,  9, 10,  7,   7, 10, 11,  8,
                              9, 12, 13, 10,  10, 13, 14, 11,
                             12, 15, 16, 13,  13, 16, 17, 14,
                             15, 18, 19, 16,  16, 19, 20, 17,
                             18, 21, 22, 19,  19, 22, 23, 20,
                             21, 24, 25, 22,  22, 25, 26, 23},
    ["face vertex count"] = {4,4, 4,4, 4,4, 4,4, 4,4, 4,4, 4,4, 4,4},
    ["subd crease indices"]     = { 3, 4,  4, 5,    9,10, 10,11,
                                   15,16, 16,17,   21,22, 22,23},
    ["subd crease sharpnesses"] = { 0.0,   0.0,     1.5,   1.5,
                                    3.0,   3.0,    10.0,  10.0},
    ["is subd"] = true,
    ["subd scheme"] = "catclark",
    ["subd resolution"] = 20
}

```
The above code generates this creased mesh:
![]({{ "/assets/images/user-reference/scene-objects/geometry/RdlMeshGeometry/rdl_mesh.jpg" | absolute_url }})
