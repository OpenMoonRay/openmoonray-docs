```lua
UsdGeometry("/geom/mesh") {
    ["node_xform"] = rotate(45, 0, 1, 0) * translate(10, 20, 30),
    ["model"] = "/path/mesh.usd",
}

MeshLight("/lights/mesh") {
    ["geometry"] = UsdGeometry("/geom/mesh"),
    ["parts"] = {"part1", "part2"},
    ["on"] = true,
    ["color"] = Rgb(1, 2, 3),
    ["intensity"] = 0.03,
}
```