```lua
local beauty = RenderOutput("/output/beauty") {
    ["file_name"] = "result_tmp.exr",
    ["result"] = "beauty",
}

local r = RgbToFloatDisplayFilter("/display/r") {
    ["input"] = beauty,
    ["mode"] = "r",
}

RenderOutput("/output/r") {
    ["file_name"] = "result0.exr",
    ["result"] = "display filter",
    ["display_filter"] = r,
    ["channel_name"] = "r"
}
```