---
title: Execution Modes
---
# Execution Modes

MoonRay runs in four different execution modes:

1. Scalar mode
2. Vector mode
3. XPU mode
4. Auto mode

The mode is selected with the 'exec_mode' command-line option. e.g.
```
moonray -exec_mode scalar -in scene.rdla ...
moonray -exec_mode vector -in scene.rdla ...
moonray -exec_mode xpu -in scene.rdla ...
moonray -exec_mode auto -in scene.rdla ...
```

## Scalar Mode

Scalar mode processes one ray at a time.  The rendering is distributed across
multiple CPU cores, but MoonRay does not attempt to use the multiple SIMD lanes within the CPU
cores for additional parallelism.  It also does not batch rays together for improved
memory access coherency.

Hence, it can be considered a "classical" path tracing algorithm.

## Vector Mode

Vector mode achieves higher performance than scalar mode with two strategies:

1. Batch rays and shading operations together for improved memory access coherency.
2. Process multiple rays and shading calculations in parallel by using the multiple
SIMD lanes within the multiple CPU cores.

The ray/shading batching is implemented as a "wave-front" path tracer, where rays and
shading operations are batched and sorted into queues.  When these queues fill up, they are processed/emptied
as one batch of work.  This makes better use of the CPU's caches than scalar mode's
"single-ray" operation, which results in a more random memory access pattern.

SIMD calculation is implemented in special vectorized code.  On typical CPUs, there are 
eight "lanes", so up to eight rays or shading operations can be processed at once
per CPU core.

Vector mode is designed to generate identical images as scalar mode, however due to architectural differences
there are a few unsupported features:

1. Physically-correct overlapping dielectrics
2. Variance buffers
3. Volume rendering with deep file output

If the scene uses one of these unsupported features, a warning message will be logged
and the scene will be rendered without the feature.

MoonRay's vector mode is described in detail in the paper "Vectorized Production
Path Tracing", available from ACM at: <https://dl.acm.org/doi/10.1145/3105762.3105768>

## XPU Mode

MoonRay's XPU mode uses a NVIDIA CUDA/OptiX-capable GPU to accelerate ray-scene
intersection queries.  Hence, it is not a complete GPU implementation of MoonRay,
but rather uses the GPU as a heterogeneous coprocessor that offloads work from the CPU.

XPU mode is designed to pixel-match MoonRay's vector mode output.  It utilizes the
vector mode infrastructure, hence it inherits the same performance benefits
and feature limitations of vector mode.

XPU mode has the following additional unsupported features:

1. Round bezier curves
2. Round curves with more than 2 motion samples
3. Meshes with more than 2 motion samples

If the scene uses one of these unsupported features, a warning message will be logged
and the scene will be rendered without the feature.

XPU mode may also fall back to CPU vector mode if there is insufficient GPU memory
for the scene, or if there is a problem initializing the GPU.

## Auto Mode

Auto mode will first try to render in xpu mode.  If the scene uses a feature that
is unsupported in xpu mode, MoonRay will fall back to vector mode.  Then, if the scene
uses a feature that is unsupported in vector mode, MoonRay will fall back to scalar mode.
This prioritizes features over performance.

