---
title: A Note On Benchmarking
---
# A Note on Benchmarking

If you're interested in running benchmarking or regression tests take consideration of the following:

- Public assets can be very useful, but often need to be modified before using them for benchmarking results, to accomodate the various differences between renderers.  First attempt to make the asset look as correct as possible, and then try optimizing the asset for efficiency, followed finally by optimizing your renderer for performance.

- You'll want to run MoonRay either in "auto" or "vector" mode, to take advantage of all the CPU lanes for free.  MoonRay defaults to "auto" mode, which first attempts to run vector mode, and then falls back to scalar mode if there's an unsupported feature for vector mode in the scene.

- The cache for loading scene and texture data should be warmed-up before benchmarking, so that tests are fair to the MCRT phase of rendering.  For example, when we run regression tests, we'll render a given scene four times in a row on the same machine, and use the fastest run as our benchmark, to ensure we have a hot cache.

- To the last point, the relevant data to look for during benchmarking is MCRT (raytracing) time, not RenderPrep (textures, object loads, etc.) time. Both are calculated in MoonRay logs after a scene is rendered.

- The [Render Profile Viewer]({{ "/user-reference/tools/render-profile-viewer" | absolute_url }}) is useful for benchmarking results for scenes across time, and inspecting any regressions.

- Naturally take care not to be running any other processes on the machine during benchmarking.

