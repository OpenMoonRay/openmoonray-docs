**RdlPointGeometry** generates points defined by the node's parameters.

By default, points render as spheres.  The example below generates points
of varying color and radius.
```lua
colorData = UserData("colorData") {
    ["color_key"] = "Cd",
    ["color_values_0"] = { 
        Rgb(1.0, 0.0, 0.0),
        Rgb(0.0, 1.0, 0.0),
        Rgb(0.0, 0.0, 1.0),
        Rgb(1.0, 0.0, 1.0),
        Rgb(0.0, 1.0, 1.0),
    },
}

points1 = RdlPointGeometry("points1") {
    ["vertex_list_0"] = {
        Vec3(0.0, 0.1, 0.0),
        Vec3(0.0, 0.25, 0.0),
        Vec3(0.0, 0.37, 0.0),
        Vec3(0.0, 0.45, 0.0),
        Vec3(0.0, 0.5, 0.0),
    },
    ["radius_list"] = {
        0.1, 0.07, 0.05, 0.03, 0.02
    },
    ["primitive_attributes"] = { 
        colorData,
    },
}
```
![]({{ "/assets/images/user-reference/scene-objects/geometry/RdlPointGeometry/rdl_points.jpg" | absolute_url }})

Points can also be rendered as flat disks.  This requires additional *normal*, *dPds*, and *dPdt* user data.
See the [point rendering]({{ "/user-reference/how-to-guides/point-rendering" | absolute_url }}) how-to guide
for more information.
```lua
colorData = UserData("colorData") {
    ["color_key"] = "Cd",
    ["color_values_0"] = { 
        Rgb(1.0, 0.0, 0.0),
        Rgb(0.0, 1.0, 0.0),
        Rgb(0.0, 0.0, 1.0),
        Rgb(1.0, 0.0, 1.0),
        Rgb(0.0, 1.0, 1.0),
    },
}

normalData = UserData("normalData") {
    ["vec3f_key"] = "normal",
    ["vec3f_values_0"] = { 
        Vec3(0.0, 0.0, 1.0),
        Vec3(0.0, 0.0, 1.0),
        Vec3(0.0, 0.0, 1.0),
        Vec3(0.0, 0.0, 1.0),
        Vec3(0.0, 0.0, 1.0),
    },
}

dPdsData = UserData("dPdsData") {
    ["vec3f_key"] = "dPds",
    ["vec3f_values_0"] = { 
        Vec3(1.0, 0.0, 0.0),
        Vec3(1.0, 0.0, 0.0),
        Vec3(1.0, 0.0, 0.0),
        Vec3(1.0, 0.0, 0.0),
        Vec3(1.0, 0.0, 0.0),
    },
}

dPdtData = UserData("dPdtData") {
    ["vec3f_key"] = "dPdt",
    ["vec3f_values_0"] = { 
        Vec3(0.0, 1.0, 0.0),
        Vec3(0.0, 1.0, 0.0),
        Vec3(0.0, 1.0, 0.0),
        Vec3(0.0, 1.0, 0.0),
        Vec3(0.0, 1.0, 0.0),
    },
}

points1 = RdlPointGeometry("points1") {
    ["vertex_list_0"] = {
        Vec3(0.0, 0.1, 0.0),
        Vec3(0.0, 0.25, 0.0),
        Vec3(0.0, 0.37, 0.0),
        Vec3(0.0, 0.45, 0.0),
        Vec3(0.0, 0.5, 0.0),
    },
    ["radius_list"] = {
        0.1, 0.07, 0.05, 0.03, 0.02
    },
    ["primitive_attributes"] = { 
        colorData,
        normalData,
        dPdsData,
        dPdtData,
    },
}
```

![]({{ "/assets/images/user-reference/scene-objects/geometry/RdlPointGeometry/rdl_points_flat.jpg" | absolute_url }})

