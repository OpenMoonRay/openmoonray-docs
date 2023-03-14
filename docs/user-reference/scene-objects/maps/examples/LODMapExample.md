```lua
local lodMapTopPixelWidth = LODMap("/Scene/surfacing/LODMapPixelWidth") {
}

local lodMapCamera = LODMap("/Scene/surfacing/LODMapCamera") {
    ["mode"] = "camera distance",
    ["start"] = 1,
    ["stop"]  = 100
}
```