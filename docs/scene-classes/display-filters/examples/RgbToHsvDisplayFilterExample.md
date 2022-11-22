```lua
local beauty = RenderOutput("/output/beauty") {
    ["file_name"] = "result_tmp.exr",
    ["result"] = "beauty",
}

local rgbToHsv = RgbToHsvDisplayFilter("/display/rgbToHsv") {
    ["input"] = beauty,
    ["mode"] = "rgb_to_hsv"
}

local hsvToRgb = RgbToHsvDisplayFilter("/display/hsvToRgb") {
    ["input"] = rgbToHsv,
    ["mode"] = "hsv_to_rgb"
}

RenderOutput("/output/rgb_to_hsv") {
    ["file_name"] = "result0.exr",
    ["result"] = "display filter",
    ["display_filter"] = rgbToHsv,
    ["channel_name"] = "rgb_to_hsv"
}

RenderOutput("/output/hsv_to_rgb") {
    ["file_name"] = "result0.exr",
    ["result"] = "display filter",
    ["display_filter"] = hsvToRgb,
    ["channel_name"] = "hsv_to_rgb"
}
```