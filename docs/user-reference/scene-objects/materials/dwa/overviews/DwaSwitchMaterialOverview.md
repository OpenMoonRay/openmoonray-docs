The DwaSwitchMaterial allows you to easily switch between materials, and it supports up to 64 material inputs. The 
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

switchMtl0 = DwaSwitchMaterial("switchMtl0") {
    ["choice"] = 0,
    ["material0"] = mtl0,
    ["material1"] = mtl1,
    ["material2"] = mtl2,
}
```