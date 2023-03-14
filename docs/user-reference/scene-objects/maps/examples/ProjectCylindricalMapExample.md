```lua
local projGeom = MmGeometry("/Scene/geometry/projGeom") {
    ["node xform"] = translate(-2, 0, 0),
    ["model"] = "cylinder_ref.mm",
}

local projMap = ProjectCylindricalMap("/Scene/surfacing/projMap") {
   ["projector"] = projGeom,
   ["use reference space"] = false
}

local checkerMap = CheckerboardMap("/Scene/surfacing/checkerMap") {
    ["texture coordinates"] = 1,
    ["input texture coordinates"] = bind(projMap),
}
```