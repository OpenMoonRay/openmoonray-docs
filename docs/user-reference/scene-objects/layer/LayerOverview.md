A <span class="define">Layer</span> assigns scene objects (e.g. materials, volumes, light sets, etc)
to geometry objects, or to a subset of the parts of a geometry object. For example:

```lua
Layer("/Scene/layer") {
    {SphereGeometry("geom1"), {""}, DwaRefractiveMaterial("mat1"), LightSet("lt_set1")},
    {SphereGeometry("geom2"), {"part2", "part5"}, DwaBaseMaterial("mat2"), LightSet("lt_set2"), ShadowSet("sh_set2")}
}
```

In this Layer, the DwaRefractiveMaterial "mat1" and the LightSet "lt_set1" are assigned to the whole of
SphereGeometry "geom1", and the DwaBaseMaterial "mat2", the LightSet "lt_set2", and the ShadowSet "sh_set2"
are assigned only to parts "part2" and "part5" of SphereGeometry "geom2".

Note that all geometry objects in the layer must also be included in the scene's geometry set. In the
example above,

```lua
GeometrySet("/Scene/geoset") {
    {SphereGeometry("geom1"),
    {SphereGeometry("geom2"),
}
```

Note also that if a parts list contains only one entry (either the empty string or a single part name), the braces
can be optionally be omitted. For example:

```lua
Layer("/Scene/layer") {
    {SphereGeometry("geomA"), "", LightSet("lt_set")},
    {SphereGeometry("geomB"), "part42", LightSet("lt_set")}
}
```

