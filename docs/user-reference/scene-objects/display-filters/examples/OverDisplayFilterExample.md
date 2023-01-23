```lua
local beauty = RenderOutput("/output/beauty") {
    ["file_name"] = "result_tmp.exr",
    ["result"] = "beauty",
}

local glossy = RenderOutput("/output/glossy") {
    ["file_name"] = "result_tmp.exr",
    ["result"] = "light aov",
    ["light_aov"] = "glossy"
}

local alpha = RenderOutput("/output/alpha") {
    ["file_name"] = "result_tmp.exr",
    ["result"] = "alpha",
    ["channel name"] = "Alpha",
}

local over = OverDisplayFilter("/display/over") {
    ["input_top"] = glossy,
    ["input_bottom"] = beauty,
    ["alpha"] = alpha,
}

RenderOutput("/output/over") {
    ["file_name"] = "result0.exr",
    ["result"] = "display filter",
    ["display_filter"] = over,
    ["channel_name"] = "over"
}
```