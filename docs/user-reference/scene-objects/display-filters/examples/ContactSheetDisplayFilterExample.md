``` lua
-- beauty
local beauty = RenderOutput("/output/beauty") {
    ["file_name"] = "beauty.exr",
    ["result"] = "beauty",
}

-- st
local st = RenderOutput("/output/st") {
    ["file_name"] = "st.exr",
    ["result"] = "state variable",
    ["state_variable"] = "St",
}

-- light
local light = RenderOutput("/output/light") {
    ["file_name"] = "light.exr",
    ["result"] = "light aov",
    ["light_aov"] = "CG[<L.>O]",
    -- ["state variable"] = 2
}

-- wireframe
local wireframe = RenderOutput("/output/wireframe") {
    ["file_name"] = "wireframe.exr",
    ["result"] = "wireframe",
}

local cs_filter = ContactSheetDisplayFilter("/display/contact_sheet") {
    ["inputs"] = { beauty, st, light, wireframe},
    ["labels"] = {"", "Custom label", "", ""},
    ["label_color"] = Rgb(0.0, 0.5, 1.0),
    ["show_labels"] = true,
    ["font_path"] = "OpenSans-BoldItalic.ttf",
    ["font_scale"] = 1.5
}

local cs = RenderOutput("/output/contact_sheet") {
    ["file_name"] = "contact_sheet.exr",
    ["result"] = "display filter",
    ["display_filter"] = cs_filter,
    ["channel_name"] = "cs_filter",
}
```
