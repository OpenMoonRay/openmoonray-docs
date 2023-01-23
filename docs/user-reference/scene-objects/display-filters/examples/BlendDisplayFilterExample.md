```lua
local beauty = RenderOutput("/output/beauty") {
    ["file_name"] = "result_tmp.exr",
    ["result"] = "beauty",
}

local albedo = RenderOutput("/output/albedo") {
    ["file_name"] = "result_tmp.exr",
    ["result"] = "material aov",
    ["material_aov"] = "DSS.color"
}

local blend_linear = BlendDisplayFilter("/display/blend_linear") {
    ["input1"] = albedo,
    ["input2"] = beauty,
    ["blendAmt"] = "0.6",
    ["blendType"] = "linear" 
}

RenderOutput("/output/blend_linear") {
    ["file_name"] = "result0.exr",
    ["result"] = "display filter",
    ["display_filter"] = blend_linear,
    ["channel_name"] = "blend_linear"
}
```