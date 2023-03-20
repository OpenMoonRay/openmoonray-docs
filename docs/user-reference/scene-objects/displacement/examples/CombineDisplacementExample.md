```lua
local checkermap = CheckerboardMap("/Scene/surfacing/checkermap") {
}

local noiseWorley = NoiseWorleyMap("/Scene/surfacing/noiseWorley") {
    ["space"] = 2,
    ["scale"] = Vec3(0.05, 0.05, 0.05),
    ["use smoothstep"] = true,
}

local vDisplacement = VectorDisplacement("/Scene/surfacing/vDisplacement") {
    ["vector"] = bind(noiseWorley),
    ["factor"] = 1,
    ["source space"] = 1,
}

local nDisplacement = NormalDisplacement("/Scene/surfacing/nDisplacement") {
    ["height"] = bind(checkermap, 1),
}

-- note that inputs 1 and 2 are different types of displacement map
local combineDisplacement1 = CombineDisplacement("/Scene/surfacing/combineDisplacement1") {
    ["operation"] = 0,
    ["input 1"] = vDisplacement,
    ["scale 1"] = 10,
    ["input 2"] = nDisplacement,
    ["scale 2"] = bind(noiseWorley, 8),
}
```