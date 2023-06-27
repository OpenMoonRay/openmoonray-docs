The DwaTwoSidedMaterial allows you to assign two different materials to the front and back of "thin" geometry, such as a 
playing card. 

```lua
local front = DwaRefractiveMaterial("front") {
    ["albedo"] = Rgb(0.6, 0.0, 0.0),
    ["roughness"] = 0.1,
    ["specular_model"] = 0,
}

local back = DwaSolidDielectricMaterial("back") {
    ["albedo"] = Rgb(0.0, 0.0, 0.6),
    ["roughness"] = 0.3,
    ["specular_model"] = 0,
}

local mtl = DwaTwoSidedMaterial("mtl") {
    ["front_material"] = front,
    ["back_material"] = back,
}
```