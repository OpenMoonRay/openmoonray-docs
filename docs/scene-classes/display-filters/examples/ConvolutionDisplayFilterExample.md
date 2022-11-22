```lua
local beauty = RenderOutput("/output/beauty") {
    ["file_name"] = "result_tmp.exr",
    ["result"] = "beauty",
}

local gaussian_filter = ConvolutionDisplayFilter("/display/gaussian") {
    ["input"] = beauty,
    ["kernel_type"] = "gaussian",
}

local laplacian_filter = ConvolutionDisplayFilter("/display/laplacian") {
    ["input"] = beauty,
    ["kernel_type"] = "custom",
    ["custom_kernel"] = {
        -1.0, -1.0, -1.0, -1.0, -1.0,
        -1.0, -1.0, -1.0, -1.0, -1.0,
        -1.0, -1.0, 24.0, -1.0, -1.0,
        -1.0, -1.0, -1.0, -1.0, -1.0,
        -1.0, -1.0, -1.0, -1.0, -1.0}
}

RenderOutput("/output/guassian") {
    ["file_name"] = "result0.exr",
    ["result"] = "display filter",
    ["display_filter"] = gaussian_filter,
    ["channel_name"] = "gaussian"
}

RenderOutput("/output/laplacian") {
    ["file_name"] = "result0.exr",
    ["result"] = "display filter",
    ["display_filter"] = laplacian_filter,
    ["channel_name"] = "laplacian"
}
```