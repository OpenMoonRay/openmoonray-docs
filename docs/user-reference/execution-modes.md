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
In the current build configuration, `auto` is the default. The default can be
changed when MoonRay is built.

## Scalar Mode

Scalar mode processes one ray at a time.  The rendering is distributed across
multiple CPU cores, but MoonRay does not attempt to use the multiple SIMD lanes within the CPU
cores for additional parallelism.  It also does not batch rays together for improved
memory access coherency.

Hence, it can be considered a "classical" path tracing algorithm.

## Vector Mode

Vector mode (also named `vectorized` by the command-line help) achieves higher
performance than scalar mode with two strategies:

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

Vector mode is designed to generate identical images as scalar mode. However,
due to architectural differences, `RenderContext` currently checks for several
features that require scalar mode:

1. Physically-correct overlapping dielectrics
2. Volume rendering with deep file output
3. Cryptomatte outputs that record reflected paths
4. Cryptomatte outputs that record refracted paths

These checks are conservative and are not an exhaustive statement of feature
support. In `auto` mode, a scene that triggers one of them is rendered in scalar
mode. If vector mode is explicitly requested, MoonRay logs the features that
will be missing and continues in vector mode.

MoonRay's vector mode is described in detail in the paper "Vectorized Production
Path Tracing", available from ACM at: <https://dl.acm.org/doi/10.1145/3105762.3105768>

## XPU Mode

MoonRay's XPU mode uses a GPU to accelerate batches of occlusion-ray queries.
It is not a complete GPU implementation of MoonRay, but instead uses the GPU as
a heterogeneous coprocessor that offloads work from the CPU. Builds can use
NVIDIA CUDA/OptiX or Apple Metal as the GPU backend.

XPU mode is designed to pixel-match MoonRay's vector mode output.  It utilizes the
vector mode infrastructure, hence it inherits the same performance benefits
and feature limitations of vector mode.

GPU feature limits are backend-specific. The current OptiX path supports
ray-facing linear, Bezier, and B-spline curves and round linear and B-spline
curves; round Bezier curves are handled as ray-facing. Normal-oriented curves
are also replaced with ray-facing curves when XPU is explicitly requested.
The OptiX setup code does not impose the Metal curve motion-sample limit, but
meshes are limited to 16 motion samples and use only the first 16 when XPU is
explicitly requested. The current Metal path supports ray-facing and round
linear, Bezier, and B-spline curves, with at most two motion samples for curves
and meshes; normal-oriented curves are not supported. These are the limitations
checked by the current backend setup code, not an exhaustive support matrix.

Depending on the backend and feature, an explicitly requested XPU render may
log a warning and use a supported approximation, or fall back to CPU vector
mode. XPU mode may also fall back if GPU setup fails, including because the
scene does not fit in GPU memory.

## Auto Mode

Auto mode does not attempt XPU mode. It selects scalar mode when one of
`RenderContext`'s vector-mode checks fails; otherwise, it selects vector mode.
