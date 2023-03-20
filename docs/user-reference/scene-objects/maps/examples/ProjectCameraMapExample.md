```lua
local projCam1 = Camera("projCam1")
{
   ["node xform"] = translate(0, 3, 75) * rotate(-5, 1, 0, 0) * rotate(90, 0, 1, 0),
   ["focal"] = 150,
   ["film width aperture"] = 24,
}

local projMap1 = ProjectCameraMap("/Scene/surfacing/projMap4") {
   ["projector"] = projCam1,
   ["use reference space"] = true,
   ["project on back faces"] = true,
}

local planeMap1 = ImageMap("/Scene/surfacing/planeMap1") {
   ["texture"] = "myTexture.tx",
   ["texture coordinates"] = 2, -- input texture coordinates
   ["input texture coordinates"] = bind(projMap1),
   ["wrap around"] = false,
}
```