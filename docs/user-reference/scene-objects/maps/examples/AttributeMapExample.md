```lua
-- vertex color, Cd
local attrMapPrimAttrCd = AttributeMap("attrMapPrimAttrCd") {
    --[[
        0 = prim attr
        1 = position
        2 = texture st
        3 = shading normal
        4 = geometric normal
        5 = dpds
        6 = dpdt
        7 = dnds
        8 = dndt
    ]]--
    ["map type"] = 0,
    -- 0 = float
    -- 1 = vec2
    -- 2 = vec3
    -- 3 = rgb
    ["primitive attribute type"] = 3,
    ["primitive attribute name"] = "Cd",
    ["default value"] = Rgb(0, 0, 1),
}

local attrMapPosition = AttributeMap("attrMapPosition") {
    --[[
        0 = prim attr
        1 = position
        2 = texture st
        3 = shading normal
        4 = geometric normal
        5 = dpds
        6 = dpdt
        7 = dnds
        8 = dndt
    ]]--
    ["map type"] = 1,
}

```