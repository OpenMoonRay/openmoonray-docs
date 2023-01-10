```lua
local beauty = RenderOutput("/output/beauty") {
    ["file_name"] = "result_tmp.exr",
    ["result"] = "beauty",
}

local depth = RenderOutput("/output/depth") {
    ["file_name"] = "result_tmp.exr",
    ["result"] = "depth",
    ["math_filter"] = "min",
}

local dofFilter = DofDisplayFilter("/Filter/dof") {
    ["input"] = beauty,
    ["depth"] = depth,
}

RenderOutput("/Output/dof") {
    ["file_name"] = "result0.exr",
    ["result"] = "display filter",
    ["display_filter"] = dofFilter,
    ["channel_name"] = "dof"
}
```