A <span class="define">ShadowSet</span> (not to be confused with a
[ShadowReceiverSet]( {{ "/user-reference/scene-objects/shadow-receiver-set/ShadowReceiverSet/" | absolute_url }})
) is a mechanism for suppressing the casting of designated shadows.
It is not a physically based construct, but provides artists with a useful and flexible degree of control.

ShadowSet is a grouping of lights, in much the same way as a LightSet but for a different purpose. Once lights have
been grouped into a ShadowSet, the ShadowSet can be assigned to any Geometry in the Layer in order to suppress shadows
cast by that Geometry object (or its designated parts list, if any) from the lights in the ShadowSet.

For example:

```lua

shadowSet1 = ShadowSet("shadowSet1") {
    SphereLight("light1"),
    SphereLight("light2"),
}

Layer("Scene/layer") {
    {geom1, "", lightSet1, shadowSet1}
    {geom2, {partA, partB}, lightSet1, shadowSet1}
}
```

Here, the ShadowSet called shadowSet1 comprises two SphereLights, light1 and light2. In the layer, shadowSet1 is
assigned to geom1, and to partA and partB of geom2, which means geom1, partA and part B will not cast
shadows from light1 or light2. In other words, if some other Geometry object includes either of these lights in
its LightSet, geom1, partA and partB will not block the rays from those lights from falling on it.
