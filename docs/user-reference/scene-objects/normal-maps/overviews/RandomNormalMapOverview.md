**RandomNormalMap** generates a random hemisphere normal.
If *input* is bound, the same random normal will be generated for regions with the same color.   The example below uses a
[NoiseWorleyMap_v2]({{ "/user-reference/scene-objects/maps/NoiseWorleyMap_v2" | absolute_url }}) to generate random normal regions.

```lua
worleyMap = NoiseWorleyMap_v2("worleyMap") {
    ["output_mode"] = "cell id",
    ["frequency"] = 10.0,
}

randomNormalMap = RandomNormalMap("randomNormalMap") {
    ["input"] = bind(worleyMap),
}
```
