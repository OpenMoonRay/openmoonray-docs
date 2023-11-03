---
title: Adaptive Tessellation
---

# Adaptive Tessellation

The *adaptive_error* setting on
[geometry]({{ "/user-reference/scene-objects/geometry" | absolute_url }})
is off by default (set to 0) resulting in uniform tessellation.
Depending on the *mesh_resolution* setting, the geometry may be over-tessellated for it's distance from the camera.
Turning *adaptive_error* on sets the maximum allowable difference in pixels for subdivison mesh adaptive tessellation.
Each final tessellated edge won't be longer than n pixels if adaptive error is set to n.  Adaptive tessellation is
not supported for instances.
