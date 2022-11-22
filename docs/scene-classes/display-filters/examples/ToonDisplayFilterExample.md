```lua
local depth = RenderOutput("/output/depth") {
    ["file_name"] = "result_tmp.exr",
    ["result"] = "depth",
    ["math_filter"] = "min",
}

local normal = RenderOutput("/output/normal") {
    ["file_name"] = "result_tmp.exr",
    ["result"] = "material aov",
    ["material_aov"] = "DSS.normal"
}

local albedo = RenderOutput("/output/albedo") {
    ["file_name"] = "result_tmp.exr",
    ["result"] = "material aov",
    ["material_aov"] = "DSS.color"
}

local glossy = RenderOutput("/output/glossy") {
    ["file_name"] = "result_tmp.exr",
    ["result"] = "light aov",
    ["light_aov"] = "glossy"
}

local diffuse = RenderOutput("/output/diffuse") {
    ["file_name"] = "result_tmp.exr",
    ["result"] = "light aov",
    ["light_aov"] = "diffuse"
}

local toonDF = ToonDisplayFilter("/display/toon") {
    ["input_glossy"] = glossy,
    ["input_diffuse"] = diffuse,
    ["input_albedo"] = albedo,
    ["input_depth"] = depth,
    ["input_normal"] = normal,
    ["num_cels"] = 2,
    ["ambient"] = Rgb(0.1, 0.05, 0.2),
    ["ink_depth_threshold"] = 0.01,
    ["ink_normal_threshold"] = 0.0,
    ["ink_normal_scale"] = 1.0,
    ["edge_detector"] = "Sobel",
}

RenderOutput("/output/toon") {
    ["file_name"] = "result0.exr",
    ["result"] = "display filter",
    ["display_filter"] = toonDF,
    ["channel_name"] = "toon"
}
```