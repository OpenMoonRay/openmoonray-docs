```lua
local beauty = RenderOutput("/output/beauty") {
    ["file_name"] = "result_tmp.exr",
    ["result"] = "beauty",
}

local input_ramp = RampDisplayFilter("/display/input_ramp") {
    ["positions"] = {0.0, 0.15, 0.3, 0.5, 1.0},
    ["colors"] = {Rgb(0.0, 0.8, 0.8), Rgb(0.0, 1.0, 0.0), Rgb(0.2, 0.2, 0.0), Rgb(0.0, 0.0, 1.0), Rgb(0.2, 0.0, 1.0)},
    ["ramp_type"] = "input_ramp",
    ["interpolations"] = {4, 4, 4, 4, 4},
    ["input"] = beauty
}

RenderOutput("/output/input_ramp") {
    ["file_name"] = "result0.exr",
    ["result"] = "display filter",
    ["display_filter"] = input_ramp,
    ["channel_name"] = "input_ramp"
}
```