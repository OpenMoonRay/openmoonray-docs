```lua
local glossy = RenderOutput("/output/glossy") {
    ["file_name"] = "result_tmp.exr",
    ["result"] = "light aov",
    ["light_aov"] = "glossy"
}

local diffuse = RenderOutput("/output/diffuse") {
    ["file_name"] = "result_tmp.exr",
    ["result"] = "light aov",
    ["light_aov"] = "diffuse"
}

local add = OpDisplayFilter("/display/add") {
    ["input1"] = diffuse,
    ["input2"] = glossy,
    ["operation"] = "add",
}

RenderOutput("/output/add") {
    ["file_name"] = "result0.exr",
    ["result"] = "display filter",
    ["display_filter"] = add,
    ["channel_name"] = "add"
}
```