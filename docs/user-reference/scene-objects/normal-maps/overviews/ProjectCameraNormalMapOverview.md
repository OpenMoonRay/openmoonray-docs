---

**ProjectCameraNormalMap** uses a camera frustum to directly apply a normal map texture to a material.

It uses the same setup as ProjectCameraMap_v2, requiring a projector object to directly apply the texture.

```lua
local projCam1 = Camera("projCam1")
{
   ["node xform"] = translate(0, 3, 75) * rotate(-5, 1, 0, 0) * rotate(90, 0, 1, 0),
   ["focal"] = 150,
   ["film width aperture"] = 24,
}

local projNormalMap = ProjectCameraNormalMap("projNormals") {
    ["projector"] = projCam1,
    ["texture"] = "myNormalTexture.tx",
    ["project_on_back_faces"] = false,
}

local mtl1 = DwaSolidDielectricMaterial("mtl1") {
    ["show diffuse"] = false,
    ["show specular"] = false,
    ["show emission"] = true,
    ["input_normal"] = projNormalMap,
}
```
