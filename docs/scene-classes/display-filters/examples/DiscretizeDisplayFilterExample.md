```lua
local beauty = RenderOutput("/output/beauty") {
    ["file_name"] = "result_tmp.exr",
    ["result"] = "beauty",
}

local discretize = DiscretizeDisplayFilter("/display/discretize") {
    ["input"] = beauty,
    ["num_bins"] = 3,
}

RenderOutput("/output/discretize") {
    ["file_name"] = "result0.exr",
    ["result"] = "display filter",
    ["display_filter"] = discretize,
    ["channel_name"] = "discretize"
}
```