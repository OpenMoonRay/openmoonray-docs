```lua
local attrmap = AttributeMap("attrmap") {
    -- shading normals
    ["map_type"] = 3,
}

-- rotate about world space
-- shading normals should remain perpendicular to screen
local axisanglemap0 = AxisAngleMap("axisanglemap0") {
    ["input_vector"] = bind(attrmap),
    ["input_space"] = 0,
    ["rotation_axis"] = Vec3(0,1,0),
    ["axis_space"] = 2,
    ["angle"] = 50,
    ["output_space"] = 0,
}
```