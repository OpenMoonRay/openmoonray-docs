---
The DwaColorCorrectMaterial provides common color-correction controls for making "global" adjustments to an existing material.

```lua
local metal = DwaMetalMaterial("metal") {
    ["roughness"] = 0.1,
    ["specular_model"] = 0,
    ["metallic_color"] = Rgb(0.966, 0.829, 0.438),
    ["metallic_edge_color"] = Rgb(0.366, 0.429, 0.938),
}

DwaColorCorrectMaterial("colorCorrectMtl") {
    ["input_material"] = metal,
    ["hue_shift"] = 0.5,
    ["saturation"] = 0.1,
    ["gain"] = 0.2
}
```