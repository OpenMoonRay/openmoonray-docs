---

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/BarnDoorLightFilter/exampleOff.jpg" | absolute_url }}){: style="width: 300px"} | ![]({{ "/assets/images/user-reference/scene-objects/light-filters/BarnDoorLightFilter/example.jpg" | absolute_url }}){: style="width: 300px"} |
|-----------------|--------------------------|
| No light filter | With BarnDoorLightFilter |

```rdla
filter = BarnDoorLightFilter("/Scene/lighting/barndoor") {
    ["node_xform"] = Mat4(-0.0291956, 0, 0.999573, 0, 
                           0.999573, 0, 0.0291956, 0, 
                           0, 1, 0, 0, 
                           0, 9, -7, 1),
    ["projector_width"] = 0.5,
    ["projector_height"] = 0.5,
    ["projector_type"] = "perspective",
    ["projector_focal_distance"] = 9,
    ["pre_barn_mode"] = "black",
    ["pre_barn_distance"] = 0,
    ["mode"] = "physical",
    ["invert"] = false,
    ["radius"] = 0.2,
    ["edge"] = 0.2,
    ["use_light_xform"] = true,
    ["edge_scale_top"] = 1.0,
    ["edge_scale_bottom"] = 0.11,
    ["edge_scale_left"] = 0.5,
    ["edge_scale_right"] = 10,
    ["rotation"] = 35,
    ["density"] = 0.95,
    ["color"] = Rgb(1,1,1),
    ["on"] = true,
    ["size_top"] = 0,
    ["size_bottom"] = 0,
    ["size_left"] = 0,
    ["size_right"] = 0,
}
```

In the following examples, a BarnDoorLightFilter is above the scene aiming straight down from a light. The focal length is such that the flap opening occurs exactly at the ground plane. The scene geometry is designed to illustrate the shape of the rectangular flap opening and the shape of the filtered light.


on

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/BarnDoorLightFilter/Barn_180.jpg" | absolute_url }}){: style="width: 227px"} | ![]({{ "/assets/images/user-reference/scene-objects/light-filters/BarnDoorLightFilter/Barn_181.jpg" | absolute_url }}){: style="width: 227px"} |
|--------------------------------|----------------------------|
| `on=true` | `on=false` |
