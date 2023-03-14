```lua
local planeGeom = MmGeometry("/Scene/geometry/planeGeom") {
    ["node xform"] = scale(2, 1, 1) * translate(-3, 1, 0),
    ["model"] = "plane_xy_unit.mm",
}

local rampMap0 = RampMap("/Scene/surfacing/rampMap0") {
    -- positions, colors, interpolations have same number of elements
    ["positions"] = { 0.0, 0.33, 0.5, 0.75, 1.0 },
    ["colors"] = { Rgb(0.9, 0.1, 0.1), Rgb(0.1, 0.025, 0.4), Rgb(0.8, 0.1, 0.2), Rgb(0.2, 0.8, 0.1), Rgb(0.1, 1.0, 1.0) },
    ["interpolations"] = { 1, 1, 1, 1, 1 },
    ["ramp type"] = 1,
    ["wrap type"] = 0,
    ["uv repeat"] = Vec2(1.5, 1.0),
    ["space"] = 6,
    ["object"] = planeGeom,
    ["color space"] = 2
}
```