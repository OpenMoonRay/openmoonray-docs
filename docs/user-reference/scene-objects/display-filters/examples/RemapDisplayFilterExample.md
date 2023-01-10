```lua
local beauty = RenderOutput("/output/beauty") {
    ["file_name"] = "result_tmp.exr",
    ["result"] = "beauty",
}

local remap_uniform = RemapDisplayFilter("/display/remap_uniform") {
    ["remap_method"] = "uniform",
    ["input_min"] = 0.1,
    ["input_max"] = 0.3,
    ["output_min"] = 0.2,
    ["output_max"] = 0.9,
    ["input"] = beauty
}

RenderOutput("/output/remap_uniform") {
    ["file_name"] = "result0.exr",
    ["result"] = "display filter",
    ["display_filter"] = remap_uniform,
    ["channel_name"] = "remap_uniform"
}

local remap_RGB = RemapDisplayFilter("/display/remap_RGB") {
    ["remap_method"] = "RGB",
    ["input_min_RGB"] = Rgb(0.5, 0.4, 0.2),
    ["input_max_RGB"] = Rgb(0.9, 0.8, 1.0),
    ["output_min_RGB"] = Rgb(0.4, 0.3, 0.1),
    ["output_max_RGB"] = Rgb(0.8, 0.9, 1.0),
    ["input"] = beauty
}

RenderOutput("/output/remap_RGB") {
    ["file_name"] = "result0.exr",
    ["result"] = "display filter",
    ["display_filter"] = remap_RGB,
    ["channel_name"] = "remap_RGB"
}
```