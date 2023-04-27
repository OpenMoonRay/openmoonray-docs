---
title: Texture Cache Size Considerations
---
# Texture Cache Size Considerations
---

Selecting proper texture cache size is very crucial for efficient rendering especially texture-heavy scenes like ALab2.0.1.
Actually, the best configuration is depending on the scene itself and the machine environment.
A quick general solution to find the good texture cache size for an exclusive moonray run is
[here](../../performance/#quick-texture-cache-size-setup).

This is a rendering test result image of ALab 2.0.1. (without denoising)
![alab201]({{ "/assets/images/user-reference/alab/out_txCache096Xpu0.png" | absolute_url }})

The texture cache size setting has a huge impact on the efficiency of rendering especially texture-heavy scenes like ALab.
This is a test profiling result of various different texture cache sizes on ALab2.0.1.
![Texture Cache Size Performance Difference]({{ "/assets/images/user-reference/alab/texCacheSize.png" | absolute_url }})

All tests are using vanilla ALab 2.0.1 scene (i.e. no optimization of the scene itself) with 4K high reso texture and baked geometry.
Basically all sceneVariable settings are default except image size and uniform sampling related parameters.
```
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

The rendering machine specification is as follows
```
CPU : Intel(R) Xeon(R) Gold 6240R CPU @ 2.40GHz
Physical CPU : 2
CPU cores : 24
Total cores : 48 (HyperThread ON)
Memory : 187 GByte (However, test redner was done around 124GByte of free memory)
GPU : Nvidia Quadro RTX 6000
```

Texture main cache hit miss number is very depend on the OpenImageIO versions. This is based on the OpenImageIO 2.3.20.<br>
4GByte (actually, default is 3.91GByte) texture cache render run did not show the main cache hit-miss ratio in the log
(and is not plotted on the graph).
Looks like overall render performance using around 96G texture cache size would be ideal configuration for this scene with
this environment. 
More than 96G is also basically fine but it makes slightly slow down the rendering. Probably big texture cache makes
swap out some portion of BVH and sceneContext memory at runtime. Then this might make some small impact on the final
efficiency and as a result it is slowdown a bit.

XPU performance is constantly better than scalar and its ratio is __1.16x__ ~ __1.68x__ better.
Vector performance is also constantly better than scalar and its ratio is __1.14x__ ~ __1.34x__ better as well.
Moonrays vector/XPU architecture is very useful for texture-heavy scenes due to vector/XPU architecture maximizing
the memory access coherency.

This is a breakdown of runtime by profile_viewer for the XPU runs.
![renderProfileViewer]({{ "/assets/images/user-reference/alab/renderProfileViewer.png" | absolute_url }})

As you can see, the texturing time is dominant when the texture cache size is small.
Also, shader handler time is directly related to the texturing time and it is getting big if the texturing time is big.
Performance is improved when texture sampling cost is dropped by increasing texture cache size.

