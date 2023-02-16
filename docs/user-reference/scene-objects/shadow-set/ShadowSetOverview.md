Prevent the associated geometry from casting shadows originating from the lights in this ShadowSet. For example:

```lua
shadowGroup1 = ShadowSet("shadowGroup1") {
    SphereLight("light1"),
    SphereLight("light2"),
}

Layer("Scene/layer") {
    {sphere1, "", sphereMtl1, lightSet, undef(), undef(), shadowGroup1}
}
```

Here, we have a ShadowSet called "shadowGroup1" that is composed of two SphereLights. In the Layer, "shadowGroup1" is assigned to the "sphere1" geometry, which means that any of the shadows cast by "sphere1" because of light originating from "light1" or "light2" will be suppressed. 
