---
![Header]({{ "/assets/images/user-reference/scene-objects/materials/dwa/DwaEmissiveMaterial/header.png" | absolute_url }})

The DwaEmissiveMaterial is a material that can emit energy according to the user-specified *emission*.

```lua
DwaEmissiveMaterial("/Scene/surfacing/emissiveMtl") {
    ["emission"] = Rgb(0.2, 1.5, 0.0),
    ["show_emission"] = true,
}
```