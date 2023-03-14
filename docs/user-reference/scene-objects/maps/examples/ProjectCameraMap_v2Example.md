```lua
local projCam1 = Camera("projCam1")
{
   ["node xform"] = translate(0, 3, 75) * rotate(-5, 1, 0, 0) * rotate(90, 0, 1, 0),
   ["focal"] = 150,
   ["film width aperture"] = 24,
}

local projMap = ProjectCameraMap_v2("projMap") {
    ["projector"] = projCam1,
    ["texture"] = "myTexture.tx",
    ["project_on_back_faces"] = false,
}

local mtl1 = DwaSolidDielectricMaterial("mtl1") {
    ["show diffuse"] = false,
    ["show specular"] = false,
    ["show emission"] = true,
    ["emission"] = bind(projMap, Rgb(1,1,1)),
}
```