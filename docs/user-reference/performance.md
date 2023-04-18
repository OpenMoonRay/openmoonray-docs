---
title: Performance Considerations
---
# Performance Considerations
This page documents how to get the best performance out of MoonRay

## Tiled Textures

<aside class="info-aside">MoonRay <b>requires</b> the use of tiled textures which greatly improves rendering performance.</aside>  

The OpenImageIO utility
`maketx` or `oiiotool` should be used to convert common file formats to the optimal .tx format.

## Adaptive Error Tesselation
The `adaptive_error` setting on geometry is off by default (set to 0) resulting in uniform tessellation.
Depending on the `mesh_resolution` setting, the geometry may be overtessellated for it's distance from the camera.
Turning `adaptive_error` on sets the maximum allowable difference in pixels for subdivison mesh adaptive tessellation.
Each final tessellated edge won't be longer than n pixels if adaptive error is set to n.  Adaptive tessellation is
not supported for instances.

## Texture Cache Size
Setting a proper texture cache size can be very important for MCRT stage efficiency, especially for texture-heavy
scenes.  The `texture_cache_size` scene variable is set to 4000MB by default.   If the scene being rendered makes
use of many and/or large texture maps, this may not be large enough.

The moonray render log output (when using the `-info` cmd-line option or SceneVariabels attribute) reports both
the set texture cache size and also the `main cache miss ratio`.  Even if the reported miss ratio is only a few
percent, this can make a big difference in render time. Increasing the texture_cache_size can be a good way to
improve performance in such scenes.

Here's example output from the log ( with `-info` enabled):

```
00:00:35    1.2 GB | ---------- OpenImageIO Texture Summary -------------------
00:00:35    1.2 GB | Total texture I/O time           = 164.71s
00:00:35    1.2 GB | Total texture MB read            = 371.29 MB
00:00:36    1.2 GB | texture_cache_size    = 4,000 (3.91 GByte)
00:00:36    1.2 GB | main cache miss ratio = 0.01%
```

In this case, texture_cache_size is 3.91GB and the main cache miss rate is 0.01% (i.e. cache miss happens 1 in
10K lookups).  Here, even though texture cache size is relatively small, texture accessing is quite healthy
and this texture cache size seems optimal.

The following example is from a texture heavy scene (Animal Logic's ALab) with a small texture cache size.

```
00:41:07    8.4 GB | ---------- OpenImageIO Texture Summary -------------------
00:41:07    8.4 GB | Total texture I/O time           = 68,276.54s
00:41:07    8.4 GB | Total texture MB read            = 4.50 TB
00:41:08    8.4 GB | texture_cache_size    = 4,000 (3.91 GByte)
00:41:08    8.4 GB | main cache miss ratio = 1.94%
```

In this case, a cache miss happened around 1.94% of the time. This is a fairly high cache miss rate and will have
a huge impact on the MCRT performance. Actually, in this example roughly 90% of MCRT time was spent on the texture
file access in this case.  In this case we also see pretty low CPU utilization.

If we changed the texture cache size from 3.91GB to 40GB, MCRT time is drastically improved.
The `texture_cache_size` SceneVariables attribute is specified in Mb (40960MB = 40GB).

In this example (also from the ALab scene), the texture_cache_size has been raised to 40GB:

```
00:08:50   42.9 GB | ---------- OpenImageIO Texture Summary -------------------
00:08:50   42.9 GB | Total texture I/O time           = 812.61s
00:08:50   42.9 GB | Total texture MB read            = 49.67 GB
00:08:51   42.9 GB | texture_cache_size    = 40,960 (40.00 GByte)
00:08:51   42.9 GB | main cache miss ratio = 0.02%
```

The cache hit-miss rate is down to 0.02% due to the use of a roughly 10x bigger texture cache. The overall rendering
speed is 4.75x faster in than when the `texture_cache_size` was set to 4000MB.

You should pay attention to the reported texture cache hit-miss rate for the opportunity of optimization. If the miss
ratio is more than say 1% there might be an opportunity to improve rendering time. The solution is often just to
increase the `texture_cache_size`.

Its worth mentioning that MoonRay does not allocate the entire texture cache at the beginning of rendering. The texture
cache is gradually allocated as needed internally. It is usually acceptable to use a large texture cache size even when
the scene does not use all of it. The process memory is increased up to the texture cache size as needed.

However, some memory resource issues may occur if you set a large texture cache and the scene actually needs all of
it. The machine may not have enough physical memory. In these cases, the process can cause a lot of memory paging and
performance can be pretty bad. It is important to control the texture cache size properly by hand to find the right
balance.

A lower cache miss rate is always better than a larger cache miss rate. However, the cache miss rate value itself is
also dependent on the OpenImageIO (OIIO) version. For example, a miss rate of 1.94% of OIIO 1.7.7 is roughly the same as
a miss rate of 4.36% of OIIO 2.3.20. Please keep this in mind, otherwise you might be confused when MoonRay upgrades OIIO versions.

## Quick Texture Cache Size Setup
You can use the following procedure to find the best texture cache size for your moonray process If your moonray process exclusively run on the host. Idea is simple

`texture cache size` = ***free_memory_size*** - ***MCRT_phase_start_timing_memory_size***

### Step A : Get free memory size on the host<br>
Get free available memory size by using "free" command.
```
> free
             total        used        free      shared  buff/cache   available
Mem:      197571200     6790192   125246204      775464    65534804   189254584
Swap:       8388604     1639168     6749436
```

In this example, free memory size is 125246204Kbyte = 119.444GByte

### Step B : Get MCRT phase start timing memory size<br>
You can get the exact used memory size of moonray process at MCRT phase start timing if you run rendering once at advance. This is done by -info output of moonray.
```
00:01:40   15.2 GB | ---------- MCRT Rendering --------------------------------
no-extra-snapshot
00:01:40   15.5 GB | Rendering [  0%]
00:02:40   18.1 GB | Rendering [  0%]
00:03:41   22.5 GB | Rendering [  0%]
00:04:41   27.2 GB | Rendering [  0%]
```

In this case, the used memory size at MCRT phase start timing is 15.2GB.

### Step C : Calculate texture cache size<br>
Therefore, the expected best texture cache size would be

```
textureCacheSize = 119GByte - 15.2GByte = 104GByte = 106496MByte
```

We should convert it to MByte and set it as sceneVariable.

```lua
["texture_cache_size"] = 106496
```

## A note on Benchmarking

If you're interested in running benchmarking or regression tests, in addition to the notes given above, take consideration of the following.

- Public assets can be very useful, but often need to be modified before using them for benchmarking results, to accomodate the various differences between renderers.  First attempt to make the asset look as correct as possible, and then try optimizing the asset for efficiency, followed finally by optimizing your renderer for performance.

- You'll want to run MoonRay either in "auto" or "vector" mode, to take advantage of all the CPU lanes for free.  MoonRay defaults to "auto" mode, which first attempts to run vector mode, and then falls back to scalar mode if there's an unsupported feature for vector mode in the scene.

- The cache for loading scene and texture data should be warmed-up before benchmarking, so that tests are fair to the MCRT phase of rendering.  For example, when we run regression tests, we'll render a given scene four times in a row on the same machine, and use the fastest run as our benchmark, to ensure we have a hot cache.

- To the last point, the relevant data to look for during benchmarking is MCRT (raytracing) time, not RenderPrep (textures, object loads, etc.) time. Both are calculated in MoonRay logs after a scene is rendered.

- The [Render Profile Viewer]({{ "/user-reference/tools/render-profile-viewer" | absolute_url }}) is useful for benchmarking results for scenes across time, and inspecting any regressions.

- Naturally take care not to be running any other processes on the machine during benchmarking.


