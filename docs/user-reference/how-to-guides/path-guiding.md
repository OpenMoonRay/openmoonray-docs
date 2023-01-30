---
title: Path Guiding
---
# Path Guiding

_Path guiding_ is MoonRay's method for handling difficult light transport
situations, such as caustics and scenes dominated by _indirect lighting_
(such as a room lit through a door crack). Other techniques for these
types of problems (which are not currently implemented in MoonRay)
include metropolis light transport, VCM, photon mapping, and various
other bi-directional path tracing techniques. The specific path guiding
technique in MoonRay is based on [Practical Path Guiding for Efficient
Light-Transport
Simulation](http://drz.disneyresearch.com/~jnovak/publications/PathGuide/index.html)

## How do I use it?

To enable path guiding, set the RDL scene variable:

 `["path_guide_enable"] = true`

## When should I use it?  
This feature should be used only when needed. Basic path tracing
handles the vast majority of cases we encounter. When path guiding
is enabled, the basic cases will run more slowly and consume more
memory.
 
## What are the limitations?
- This feature does not work in vector mode.

- If path guiding is turned on, deep output will fail.  Path guiding
 relies on the ability to render a frame in multiple passes, which is
 incompatible with deep file generation.

- Sample clamping can lead to inconsistent lighting results,
 especially when compared to non-path guided results.  Don't use
 sample clamping with path guiding.

- Bounces off sub-surface objects (like skin) are not path guided.

## Examples

> The RDLA files that generated these images are available here:
> `/work/rd/raas/scenes/path_guide`.

The following examples show situations where path guiding can help. In the first example, the ring is casting a bright caustic reflection on a fairly rough surface. 

| ![]({{site.baseurl}}/assets/images/user-reference/how-to-guides/path-guiding/image1.png) | ![]({{site.baseurl}}/assets/images/user-reference/how-to-guides/path-guiding/image2.png) |
| Ring 1:19:55 / 417Mb with path guiding | Ring 1:29:52 518Mb without path guiding (note adaptive sampling failures in this case) |

The second example shows a difficut _SDS_ light path (specular-diffuse-specular). In this case light passes through the cube (a specular surface), onto a torus (diffuse surface), back out through the cube, and finally onto the floor (another diffuse surface).  

| ![]({{site.baseurl}}/assets/images/user-reference/how-to-guides/path-guiding/image3.png) | ![]({{site.baseurl}}/assets/images/user-reference/how-to-guides/path-guiding/image4.png) |
| SDS 50:58 / 437Mb with path guiding | SDS 42:08 / 437.0 without path guiding (note how adaptive sampling gives up in this case) |

| ![]({{site.baseurl}}/assets/images/user-reference/how-to-guides/path-guiding/image5.png) | ![]({{site.baseurl}}/assets/images/user-reference/how-to-guides/path-guiding/image6.png) |
| Bedroom 13:01 / 1.3Gb with path guiding | Bedroom 48:09 / 1.2Gb without path guiding  |

| ![]({{site.baseurl}}/assets/images/user-reference/how-to-guides/path-guiding/image7.jpeg) | ![]({{site.baseurl}}/assets/images/user-reference/how-to-guides/path-guiding/image8.jpeg) |
| Tiger 40:32 with path guiding | Tiger \~4 hours without path guiding |