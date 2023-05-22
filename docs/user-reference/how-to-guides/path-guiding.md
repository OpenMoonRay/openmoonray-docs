---
title: Path Guiding
---

# Path Guiding

_Path guiding_ is MoonRay's method for handling difficult light transport situations, such as caustics and scenes
dominated by _indirect lighting_ (such as a room lit through a door crack). Other techniques for these types of problems
(not currently implemented in MoonRay) include metropolis light transport, VCM, photon mapping, and other bi-directional
path tracing techniques. The specific path guiding method in MoonRay is based on
[Practical Path Guiding for Efficient Light-Transport Simulation](https://jannovak.info/publications/PathGuide/index.html).

## How do I use it?

To enable path guiding, set the RDL scene variable:

```lua
["path_guide_enable"] = true
```

## When should I use it?

This feature should be used only when needed. Basic path tracing performs well in most cases. However, when path guiding
is enabled, the basic cases will run more slowly and consume more memory.

## What are the limitations?

- This feature does not work in vector mode.
- If path guiding is turned on, deep output will fail. Path guiding relies on the ability to render a frame in multiple
  passes, which is incompatible with deep file generation.
- Sample clamping can lead to inconsistent lighting, especially compared to non-path-guided results. Do not use sample
  clamping with path guiding.
- Bounces off sub-surface objects (like skin) are not path guided.

## Examples

The following examples show situations where path guiding can help. For example, the ring casts a bright caustic
reflection on a rough surface in the first example.

| ![]({{ "/assets/images/user-reference/how-to-guides/path-guiding/image1.png" | absolute_url }}) | ![]({{ "/assets/images/user-reference/how-to-guides/path-guiding/image2.png" | absolute_url }}) |
| Ring 1:19:55 / 417Mb with path guiding | Ring 1:29:52 518Mb without path guiding (note adaptive sampling failures in this case) |

The second example shows a difficult _SDS_ light path (specular-diffuse-specular). In this case, light passes through
the cube (a specular surface), onto a torus (diffuse surface), back out through the cube, and finally onto the floor
(another diffuse surface).

| ![]({{ "/assets/images/user-reference/how-to-guides/path-guiding/image3.png" | absolute_url }}) | ![]({{ "/assets/images/user-reference/how-to-guides/path-guiding/image4.png" | absolute_url }}) |
| SDS 50:58 / 437Mb with path guiding | SDS 42:08 / 437.0 without path guiding (note how adaptive sampling gives up in this case) |

| ![]({{ "/assets/images/user-reference/how-to-guides/path-guiding/image5.png" | absolute_url }}) | ![]({{ "/assets/images/user-reference/how-to-guides/path-guiding/image6.png" | absolute_url }}) |
| Bedroom 13:01 / 1.3Gb with path guiding | Bedroom 48:09 / 1.2Gb without path guiding |
