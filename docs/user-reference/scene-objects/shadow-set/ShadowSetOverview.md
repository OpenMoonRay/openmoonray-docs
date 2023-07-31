A <span class="define">ShadowSet</span> is a mechanism for suppressing the casting of designated shadows. It is not a
physically based construct, but provides artists with a useful and flexible degree of control.

ShadowSet is a grouping of lights, in much the same way as a LightSet but for a different purpose. Once lights have
been grouped into a ShadowSet, the ShadowSet can be assigned to any Geometry in the Layer in order to suppress shadows
cast by that Geometry object (or its designated parts list, if any) from the lights in the ShadowSet.

For example:

```lua

shadowSet1 = ShadowSet("shadowSet1") {
    SphereLight("lightA"),
    SphereLight("lightB"),
}

Layer("Scene/layer") {
    {sphere1, "", shadowSet1}
}
```

Here, the ShadowSet called shadowSet1 comprises two SphereLights, lightA and lightB. In the layer, shadowSet1 is
assigned to sphere1, which means sphere1 will not cast a shadow from lightA or lightB. In other words, if some
other Geometry object includes either of these lights in its LightSet, sphere1 will not block the rays from lightA
or lightB from falling on it.
