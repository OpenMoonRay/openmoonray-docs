**RdlCurveGeometry** generates curves defined by the node's parameters.

The example below generates three curves of varying color and radius.
```lua
colorData = UserData("colorData") {
    ["color_key"] = "Cd",
    ["color_values_0"] = { 
        Rgb(1.0, 0.0, 0.0),
        Rgb(0.0, 1.0, 0.0),
        Rgb(0.0, 0.0, 1.0),
    },
}

curves1 = RdlCurveGeometry("curves1") {
    ["curve_type"] = "bspline",
    ["curve_subtype"] = "ray_facing",
    ["tessellation_rate"] = 12,
    ["curves_vertex_count"] = { 6, 6, 6 },
    ["vertex_list_0"] = {
        Vec3(0.2, 0.0, 0.0),
        Vec3(0.2, 0.0, 0.0),
        Vec3(-0.2, 0.25, 0.0),
        Vec3(0.2, 0.5, 0.0),
        Vec3(-0.2, 0.75, 0.0),
        Vec3(0.2, 1.0, 0.0),

        Vec3(0.25, 0.0, 0.0),
        Vec3(0.25, 0.0, 0.0),
        Vec3(0.25, 0.25, 0.25),
        Vec3(0.25, 0.5, -0.25),
        Vec3(0.25, 0.75, 0.25),
        Vec3(0.25, 1.0, -0.25),

        Vec3(0.5, 0.0, 0.0),
        Vec3(0.5, 0.0, 0.0),
        Vec3(0.7, 0.25, -0.4),
        Vec3(0.5, 0.5, 0.0),
        Vec3(0.5, 0.75, -0.4),
        Vec3(0.9, 1.0, 0.0),
    },
    ["radius_list"] = {
        0.03, 0.04, 0.05
    },
    ["primitive_attributes"] = { colorData, },
}
```

The curves can be rendered as *ray_facing* as in the above example or *round*

*ray_facing*
![]({{ "/assets/images/user-reference/scene-objects/geometry/RdlCurveGeometry/ray_facing.jpg" | absolute_url }})
*round*
![]({{ "/assets/images/user-reference/scene-objects/geometry/RdlCurveGeometry/round.jpg" | absolute_url }})
