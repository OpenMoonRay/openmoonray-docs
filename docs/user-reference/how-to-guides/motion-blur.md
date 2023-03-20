---
title: Motion Blur
---

# Motion Blur

## Introduction
Attributes flagged as *blurrable* can be motion blurred using the *blur* rdla keyword.
```lua
PerspectiveCamera("camera") {
    ["focal"] = blur(30, 31),
}
```
This blurs the attribute over the time interval defined by the 
[SceneVariables]({{ "/user-reference/scene-objects/SceneVariables" | absolute_url }})
*frame* value and the
[camera's]({{ "/user-reference/scene-objects/cameras/PerspectiveCamera" | absolute_url }}) motion blur attributes
(*mb_shutter_open*, *mb_shutter_close*, *mb_shutter_bias*).


## Transform
Transformational motion blur is supported on cameras, lights, volumes, and geometry using the blurrable *node_xform*
attribute where two 4x4 matrices are blended as in the example below.
```lua
["node_xform"] = blur(Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0),
                      Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 5.0, 0.0, 0.0, 0.0, 1.0)),
```

## Geometry

Deformational motion blur is supported on hard surface geometry (i.e.
[RdlMeshGeometry]({{ "/user-reference/scene-objects/geometry/RdlMeshGeometry" | absolute_url }}),
[RdlCurveGeometry]({{ "/user-reference/scene-objects/geometry/RdlCurveGeometry" | absolute_url }}),
[RdlPointGeometry]({{ "/user-reference/scene-objects/geometry/RdlPointGeometry" | absolute_url }}), etc.).
The type of motion blur is dependent on the *motion_blur_type* attribute setting and the data present.  The types are:

Type|Description
---|---
*static*|Treat the mesh as static.  No motion blur.
*velocity*|Blur using the supplied vertex velocities(`v`)
*frame delta*|Interpolate between the two supplied vertex positions
*acceleration*|Blur using the supplied vertex velocities(`v`) and accelerations(`accel`)
*hermite*|Use the supplied pair of positions(`P`) and velocities(`v`) to interpolate along a cubic hermite curve.
*best*(default)|Choose the method which provides the highest quality with the given data.

When set to *best*, the type chosen is based on the following data being available in order of preference.

Type|Required Data
---|---
*hermite*|A pair of positions(`P`) and velocities(`v`)
*acceleration*|velocity(`v`) and acceleration(`accel`)
*velocity*|velocity(`v`)
*frame delta*|A pair of positions(`P`)

Motion blur types:
![]({{ "/assets/images/user-reference/how-to-guides/motion-blur/motion_blur.jpg" | absolute_url }})
*Left to right: geometry types (mesh, curves, and points).
Top to bottom: motion blur types (transform, frame delta, velocity, acceleration, and hermite).*

## Volumes
The [VdbVolume]({{ "/user-reference/scene-objects/volumes/VdbVolume" | absolute_url }}) geometry
node uses an explicit *velocity_grid* for volume motion.

