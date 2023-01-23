```lua
local beauty = RenderOutput("/output/beauty") {
    ["file_name"] = "result_tmp.exr",
    ["result"] = "beauty",
}

local clamp = ClampDisplayFilter("/display/clamp") {
    ["input"] = beauty,
    ["min"] = Rgb(0.4, 0.4, 0.4),
    ["max"] = Rgb(0.6, 0.6, 0.6),
}

RenderOutput("/output/clamp") {
    ["file_name"] = "result0.exr",
    ["result"] = "display filter",
    ["display_filter"] = clamp,
    ["channel_name"] = "clamp"
}
```