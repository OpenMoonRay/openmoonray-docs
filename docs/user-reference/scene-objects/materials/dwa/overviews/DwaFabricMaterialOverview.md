---
![DwaFabricMaterial Header]({{ "/assets/images/user-reference/scene-objects/materials/dwa/DwaFabricMaterial/header.png" | absolute_url }})

The DwaFabricMaterial is a streamlined material specifically targeted for modeling fabric surfaces.

```lua
local mtl = DwaFabricMaterial("mtl") {
    ["albedo"] = Rgb(1, 0, 0),
    ["show_specular"] = true,
    ["use_UVs_for_thread_direction"] = true,
    ["use_independent_weft_attributes"] = true,
    ["warp_color"] = Rgb(0, 0, 1),
    ["warp_roughness"] = 0.5,
    ["weft_color"] = Rgb(0, 1, 1),
    ["weft_roughness"] = 0.5,
    ["warp_thread_coverage"] = 0.3,
    ["warp_thread_direction"] = Vec3(0, 0, 1),
    ["warp_thread_elevation"] = 0
}
```
