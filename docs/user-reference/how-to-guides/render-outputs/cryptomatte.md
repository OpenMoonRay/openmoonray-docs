---
title: Cryptomatte
---
# Cryptomatte
<span class="define">Cryptomatte</span> provides a way to isolate specific objects in the scene by ingesting user-specified object ids and generating pixel coverages. 

In MoonRay, a single geometry (or part) covering a pixel will be represented by an `{id, weight}` pair, where the `id` 
represents some hash value assigned to the geometry by the user, and the `weight` represents the "coverage" amount, or 
the fractional amount the associated geometry contributes to the final value of the pixel. To understand coverage amount, 
you might consider the case  where you have an object with presence, where there might be multiple geometries contributing 
to the final value of a pixel. 

These `{id, weight}` pairs will be stored in the R, G and B, A channels of each .exr layer, and the *cryptomatte_depth* 
user attribute determines how many layers will be generated (labeled like so: **Cryptomatte00**, **Cryptomatte01**, 
**Cryptomatte02**, etc). The `{id, weight}` pairs are sorted by max coverage, so the geometry with the most pixel 
coverage will always be the first entry. 

## Extensions

There are several options to output additional information. 

### Positions, Normals, Beauty

The RenderOutput object contains the additional toggles:

- *cryptomatte_output_positions*
- *cryptomatte_output_normals*
- *cryptomatte_output_beauty*

When turned on, each id/weight pair will also have the associated position/normal/beauty value output to a separate layer. 
If there are multiple pixel samples, the values from all the samples will be _averaged_ together. The output layers are 
as follows:

- **CryptoP**: position `(x, y, z)` is stored in `(r, g, b)`, respectively
- **CryptoN**: normal `(x, y, z)` is stored in `(r, g, b)`, respectively
- **CryptoB**: beauty `(r, g, b, presence)` is stored in `(r, g, b, a)`

### Multiple Presence Bounces

In SceneVariables, you can toggle on *cryptomatte_multi_presence* to count each presence bounce as a separate cryptomatte entry. 

## Resume/Checkpoint Rendering
In order to support resume/checkpoint rendering for the cryptomatte extensions, use the attribute *cryptomatte_support_resume_render*. 
When on, this will output the presence depth and fragment samples to a layer called **CryptoS**, which allows us to accurately 
restore the cryptomatte fragment data upon resuming rendering. 

<aside> 
By default, the <i>channel_format</i> of the RenderOutput is set to "half", which means we get half-precision. This is 
typically fine. However, when re-constructing cryptomatte data during resume/checkpoint rendering, the ids may not match 
due to precision loss. If you find you have split cryptomatte fragments during checkpoint rendering, try changing the 
<i>channel_format</i> to "float". 
</aside>
{: .info-aside}

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

RenderOutput("dummy0") {                  -- this extra layer is always needed
    ["file_name"] = "ignore_this_file",   -- so that cryptomatte can access
    ["primitive_attribute"] = "prim_id",  -- the id primitive attribute
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
    ["cryptomatte_depth"] = 2,      -- max possible number of {id, weight} pairs
                                    -- limits number of generated exr layers 
                                    -- (in this case, only 1 layer needed)
    ["cryptomatte_output_positions"] = true,
    ["cryptomatte_output_beauty"] = true
}

RenderOutput("dummy0") {
    ["file_name"] = "ignore_this_file",
    ["primitive_attribute"] = "prim_id",
    ["result"] = "primitive attribute",
}
```
Since this example includes cryptomatte extensions, it will output these named layers: Cryptomatte00, CryptoP00, 
CryptoP01, CryptoB00, CryptoB01.