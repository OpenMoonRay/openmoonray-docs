```lua
local beauty = RenderOutput("/output/beauty") {
    ["file_name"] = "result_tmp.exr",
    ["result"] = "beauty",
}

local image_stretch = ImageDisplayFilter("/display/image_stretch") {
    ["input"] = beauty,
    ["display_type"] = "stretch",
    ["image_path"] = "/example/image/path.exr"
}

RenderOutput("/output/image_stretch") {
    ["file_name"] = "result0.exr",
    ["result"] = "display filter",
    ["display_filter"] = image_stretch,
    ["channel_name"] = "image_stretch"
}
```