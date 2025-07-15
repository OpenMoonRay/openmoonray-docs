---
title: Texture Cache Size Considerations
---
# Texture Cache Size Considerations
---

Selecting ABC the proper texture cache size is crucial for efficient rendering of especially texture-heavy scenes like the [ALab Scene](../../../getting-started/test-scenes/).  The best configuration will be dependant on the scene itself as well as the machine environment.  A quick general solution to find a good texture cache size for a general `moonray` run is documented [here]({{ "/user-reference/performance/texture-cache-size/#quick-texture-cache-size-setup" | absolute_url }}).

This is a rendered result image of ALab, v2.0.1 without denoising
![alab201]({{ "/assets/images/user-reference/alab/out_txCache096Xpu0.png" | absolute_url }})

The texture cache size setting has a large impact on the efficiency of rendering especially texture-heavy scenes like ALab.  What follows are the results of tests profiling the results of MCRT time (not including the RenderPrep time) for various different texture cache sizes on the ALab scene.
![Texture Cache Size Performance Difference]({{ "/assets/images/user-reference/alab/texCacheSize.png" | absolute_url }})

All tests are using the vanilla ALab v2.0.1 scene with no optimization of the scene itself) and with 4K high resolution textures and baked geometry. The Linux kernel cache was warmed by a preliminary test render. All tests were rendered 3 times and the results were averaged.

All sceneVariable settings are the default, except for image size and uniform sampling related parameters.
```lua
SceneVariables {
    ["image_width"] = 1920,
    ["image_height"] = 1080,
    ["sampling mode"] = 0,
    ["pixel samples"] = 8,
    ["motion_steps"] = { -0.25, 0.25},
--    ["texture_cache_size"] = 4096 -- 4G
--    ["texture_cache_size"] = 7168 -- 7G
--    ["texture_cache_size"] = 10240 -- 10G
--    ["texture_cache_size"] = 20480 -- 20G
--    ["texture_cache_size"] = 40960 -- 40G
--    ["texture_cache_size"] = 66560 -- 65G
    ["texture_cache_size"] = 98304 -- 96G
--    ["texture_cache_size"] = 122880 -- 120G
--    ["texture_cache_size"] = 131072 -- 128G
}
```

The tests were run on the following machine specs:
```
CPU : Intel(R) Xeon(R) Gold 6240R CPU @ 2.40GHz
Physical CPU : 2
CPU cores : 24
Total cores : 48 (HyperThread ON)
Memory : 187 GByte (However, test redner was done around 124GByte of free memory)
GPU : Nvidia Quadro RTX 6000
```
<aside class="info-aside">The texture main-cache-hit-miss statistic is dependent and varies based on the OpenImageIO version</aside> 

These tests were based on OpenImageIO v2.3.20.

Note that the 4GByte (actually, default is 3.91GByte) texture cache render run did not show the main cache hit-miss ratio in the log and is not plotted on the graph.

In the results the overall render performance using a 96GByte texture cache size would be the ideal configuration for this scene in this environment. More than 96GByte is basically fine but it does slightly slow down the rendering, likely due to an overly large texture cache swapping out some portion of the BVH and sceneContext memory at runtime, which makes some small impact on the final efficiency, and as a result a slower render.


XPU performance is consistently better than scalar and its ratio is __1.20x__ ~ __1.62x__ more performant.  Vector performance is also consistently better than scalar and its ratio is __1.16x__ ~ __1.33x__ more performant. MoonRay's Vector/XPU architecture is very useful for texture-heavy scenes and maximizes the memory access coherency.

This is a breakdown of runtime timing by profile_viewer for the XPU runs.
![Renderprofileviewer]({{ "/assets/images/user-reference/alab/renderProfileViewer.png" | absolute_url }})

As can be seen, the texturing time is dominant when the texture cache size is small.  Also, shader handler time is directly related to the texturing time and it is increasing as the texturing time increases.  Performance is improved when texture sampling cost is lowered by increasing the texture cache size.
