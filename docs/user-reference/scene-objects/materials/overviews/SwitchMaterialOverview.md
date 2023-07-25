---

The SwitchMaterial allows you to switch between materials that are *not* part of the Dwa* material suite. The 
*choice* attribute is responsible for selecting the material. 

```lua
mtl0 = DwaSolidDielectricMaterial("mtl0") {
    ["specular_model"] = 0,
}

mtl1 = DwaRefractiveMaterial("mtl1") {
    ["specular_model"] = 0,
}

mtl2 = DwaMetalMaterial("mtl2") {
    ["specular_model"] = 0,
}

switchMtl0 = SwitchMaterial("switchMtl0") {
    ["choice"] = 0,
    ["material0"] = mtl0,
    ["material1"] = mtl1,
    ["material2"] = mtl2,
}
```