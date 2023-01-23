```lua
local beauty = RenderOutput("/output/beauty") {
    ["file_name"] = "result_tmp.exr",
    ["result"] = "beauty",
}

local halftoneDF = HalftoneDisplayFilter("/display/halftone") {
    ["input"] = beauty,
    ["size"] = 4,
    ["filter_width"] = 1,
    ["invert"] = false,
    ["grayscale"] = true,
}

RenderOutput("/output/halftone") {
    ["file_name"] = "result0.exr",
    ["result"] = "display filter",
    ["display_filter"] = halftoneDF,
    ["channel_name"] = "halftone"
}
```