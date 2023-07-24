A <span class="define">LightSet</span> is a high-level grouping of lights, whose purpose is primarily to specify which
lights influence a given geometry object. It is not a physically based construct, but provides artists with a useful
and flexible degree of control.

A LightSet is assigned to a Geometry object via its layer entry. For example:

```lua
lightSet1 = LightSet("lightSet1") {
    SphereLight("lightA"),
    SphereLight("lightB"),
}

Layer("Scene/layer") {
    {sphere1, "", lightSet1}
}
```

Here, the Geometry object sphere1 will be illuminated by the lights in its assigned LightSet, i.e. lightA and lightB.
It will not be illuminated by any other lights present in the scene.
