```lua
local NMapBuf = RenderOutput("/NormalMapped") {
    ["file name"] = "result_tmp.exr",
    ["result"] = 7, -- material aov
    ["material aov"] = "normal"
}

local NBuf = RenderOutput("/NormalsBase") {
    ["file name"] = "result_tmp.exr",
    ["result"] = 7, -- material aov
    ["material aov"] = "N"
}

local dPdsBuf = RenderOutput("/dPds") {
    ["file name"] = "result_tmp.exr",
    ["result"] = 7, -- material aov
    ["material aov"] = "dPds"
}

local tangents = TangentSpaceDisplayFilter("/display/tangents") {
    ["normal_map_output"] = true, -- want a [0,1] encoding (default true)    
    ["input"] = NMapBuf,          -- transforming this 
    ["N"] = NBuf,                 -- using a basis constructed from this
    ["dPds"] = dPdsBuf,           -- and this 
}

RenderOutput("/output/tangents") {
    ["file name"] = "result0.exr",
    ["result"] = "display filter",
    ["display_filter"] = tangents,
    ["channel_name"] = "Nt"
}
```