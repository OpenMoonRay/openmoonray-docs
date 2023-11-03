A <span class="define">Trace Set</span> is a list of geometries and parts. It is used to specify a set of geometric primitives that a ray can trace. This can be useful in subsurface scattering, when we want to trace rays through geometries that have similar, but different, subsurface materials.

By default, when scattering the ray from an original intersection point, we only look for neighboring intersections that have the same material as the original intersection. If the neighboring intersection has a different material then we skip it. This creates dark seams at material boundaries.

The example below uses a sphere geometry that's overlapping the front of a widget model.  They have similar subsurface materials, but there
is a dark boundary where they meet.

|![]({{ "/assets/images/user-reference/scene-objects/tracesets/traceset_off.jpg" | absolute_url }}){: style="width: 500px"} |
|-----------------|
| No traceset|

We can "weld" the two different geometries/subsurface materials with a trace set, and specifying that trace set as a subsurface material attribute.
The dark boundary disappears as the two geometries are now considered to be welded together via the traceset.

|![]({{ "/assets/images/user-reference/scene-objects/tracesets/traceset_on.jpg" | absolute_url }}){: style="width: 500px"} |
|-----------------|
| With traceset |

Example rdla:

```rdla
traceset = TraceSet("/Scene/surfacing/traceset") {
    {widgetGeom, ""},
    {sphereGeom, ""}
}

widgetMaterial = DwaSolidDielectricMaterial("/Scene/surfacing/mtl/sd") {
    ["show specular"] = false,
    ["albedo"] = Rgb(0.6, 0.4, 0.3),
    ["roughness"] = 0.55,
    ["refractive index"] = 1.4,
    ["scattering radius"] = 0.2,
    ["scattering color"] = Rgb(1.0, 0.4, 0.4),
    ["sss trace set"] = traceset
}

sphereMaterial = DwaSolidDielectricMaterial("/Scene/surfacing/mtl/sd2") {
    ["show specular"] = false,
    ["albedo"] = Rgb(0.6, 0.4, 0.3),
    ["roughness"] = 0.55,
    ["refractive index"] = 1.4,
    ["scattering radius"] = 0.2,
    ["scattering color"] = Rgb(1.0, 0.4, 0.4),
    ["sss trace set"] = traceset
}
```
