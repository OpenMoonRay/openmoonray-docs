# Cryptomatte
Cryptomatte provides a way to isolate specific objects in the scene by ingesting user-specified object ids and generating pixel coverages. 

In MoonRay, a single geometry (or part) covering a pixel will be represented by an `{id, weight}` pair, where the `id` represents some hash value assigned to the geometry by the user, and the `weight` represents the coverage amount. To understand coverage amount, you might consider the case  where you have an object with presence, where there might be multiple geometries contributing to the final value of a pixel. 

These `{id, weight}` pairs will be stored in the R, G and B, A channels of each .exr layer, and we allow for 6 `{id, weight}` pairs, which means there will be max three exr layers for every cryptomatte RenderOutput: **Cryptomatte00**, **Cryptomatte01**, and **Cryptomatte02**. The `{id, weight}` pairs are sorted by max coverage, so the geometry with the most pixel coverage will always be the first entry. 

## Examples

### Assigning IDs to Different Geometries
```lua
SceneVariables {
    ["deep_id_attribute_names"] = {"prim_id"}
}

local id0 = UserData("id0") {
    ["float_key"] = "prim_id",  -- cryptomatte attribute key
    ["float_values"] = 0.1      -- object id
}

local id1 = UserData("id1") {
    ["float_key"] = "prim_id",  -- cryptomatte attribute key
    ["float_values"] = 0.2      -- object id
}

local geom0 = AbcGeometry("geom0") {
    ["primitive_attributes"] = {id0}
    ...
}

local geom1 = AbcGeometry("geom1") {
    ["primitive_attributes"] = {id1}
    ...
}

RenderOutput("cryptomatte") {
    ["result"] = "cryptomatte",
    ["file_name"] = "result0.exr",
    ["cryptomatte_depth"] = 2       -- max possible number of {id, weight} pairs
                                    -- limits number of generated exr layers 
                                    -- (in this case, only 1 layer needed)
}

RenderOutput("dummy0") {
    ["file_name"] = "ignore_this_file",
    ["primitive_attribute"] = "prim_id",
    ["result"] = "primitive attribute",
}
```
### Assigning IDs to Geometry Parts
```lua
SceneVariables {
    ["deep_id_attribute_names"] = {"prim_id"}
}

local id0 = UserData("id0") {
    ["float_key"] = "prim_id",                   -- cryptomatte attribute key
    ["float_values"] = {0.1, 0.2, 0.3, 0.4, 0.5} -- object part ids
}

local geom0 = AbcGeometry("geom0") {
    ["part list"] = {"face1", "face2", "face3", "face4", "face5"},
    ["primitive_attributes"] = {id0}
    ...
}

RenderOutput("cryptomatte") {
    ["result"] = "cryptomatte",
    ["file_name"] = "result0.exr",
    ["cryptomatte_depth"] = 2       -- max possible number of {id, weight} pairs
                                    -- limits number of generated exr layers 
                                    -- (in this case, only 1 layer needed)
}

RenderOutput("dummy0") {
    ["file_name"] = "ignore_this_file",
    ["primitive_attribute"] = "prim_id",
    ["result"] = "primitive attribute",
}
```