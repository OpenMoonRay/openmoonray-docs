A <span class="define">Layer</span> assigns scene objects (e.g. materials, volumes, lights, etc) to geometry objects or parts. For example:

```lua
Layer("/Scene/layer") {
    {AbcGeometry("geom1"), {""}, DwaRefractiveMaterial("glass_mat"), LightSet("lightset1")}
}
```

In this Layer, we only have 1 assignment. The DwaRefractiveMaterial "glass_mat" and the LightSet "lightset1" are both assigned to "geom1".