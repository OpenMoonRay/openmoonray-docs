```lua
local beauty = RenderOutput("/output/beauty") {
    ["file_name"] = "result_tmp.exr",
    ["result"] = "beauty",
}

local exposure = ColorCorrectDisplayFilter("/display/exposure") {
    ["input"] = beauty,
    ["exposure"] = 2,
}

RenderOutput("/output/exposure") {
    ["file_name"] = "result0.exr",
    ["result"] = "display filter",
    ["display_filter"] = exposure,
    ["channel_name"] = "exposure"
}
```