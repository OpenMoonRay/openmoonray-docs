A <span class="define">ShadowReceiverSet</span> (not to be confused with a
[ShadowSet]( {{ "/user-reference/scene-objects/shadow-set/ShadowSet/" | absolute_url }})
) is a mechanism for suppressing the casting of designated shadows.
It is not a physically based construct, but provides artists with a useful and flexible degree of control.

ShadowReceiverSet is a group of geometries. Once a ShadowReceiverSet has been established,
one or more geometries (or, optionally, a subset of their parts) can be specified
as having their shadows excluded from being cast onto the indicated ShadowReceiverSet.

There are two distinct mechanisms for setting up the required data:
* a direct method, useful for gaining understanding of ShadowReceiverSets;
* an indirect method, which users may find more artist-friendly and more USD-friendly, and which is also more
flexible and powerful.

### Direct method

One or more ShadowReceiverSets can be constructed directly, and then the Layer entry can be used
to specify which geometries/parts should not cast shadows onto a designated ShadowReceiverSet. For example:

```lua
shadowReceiverSet1 = ShadowReceiverSet("shadowReceiverSet1") {
    ["geometries"] = {geom1, geom2}
}

Layer("Scene/layer") {
    {geom3, "", lightSet1, shadowReceiverSet1},
    {geom4, {partA, partB}, lightSet1, shadowReceiverSet1}
}
```

In this example, shadowReceiverSet1 contains two geometries: geom1 and geom2. shadowReceiverSet1 is then
assigned in the Layer to geom3, and to partA and partB of geom4. The result is that geom3, partA and partB
cannot cast shadows (from any light) onto geom1 or geom2.

### Indirect method

To create and use ShadowReceiverSets indirectly requires making use of two Geometry attributes:
* `["shadow_receiver_label"]`
* `["shadow_exclusion_mappings"]`

One or more Geometry objects can be associated impliclty into a ShadowReceiverSet by setting their
`["shadow_receiver_label"]` attribute equal to a given string. Then, other Geometry objects (or even
the same Geometry object, for suppressing self-shadowing) can have some or all of their parts
mapped to one or more ShadowReceiverSets using the `["shadow_exclusion_mappings"]` attribute.

The above example could be re-implemented using the indrect method as follows:


```lua
geom1 = AbcGeometry("geom1") {
    ...
    ["shadow_receiver_label"] = "shadow_receiver_set_1"
}

geom2 = AbcGeometry("geom2") {
    ...
    ["shadow_receiver_label"] = "shadow_receiver_set_1"
}

geom3 = AbcGeometry("geom3") {
    ...
    ["shadow_exclusion_mappings"] = "*:shadow_receiver_set_1"
}

geom4 = AbcGeometry("geom4") {
    ...
    ["shadow_exclusion_mappings"] = "partA,partB:shadow_receiver_set_1"
}
```

Multiple mappings can appear in the same string, and each mapping can specify multiple ShadowReceiverSets.
In general, the string takes the form of a space-separated list of mappings of the form A:B where:\
A is a comma-separated list of names of parts of this Geometry, or an asterisk to specify the whole geometry;\
B is a comma-separated list of shadow receiver labels established using the ["shadow_receiver_label"] attribute,
or an asterisk to specify to all such sets in the scene.\
For each of the specified mappings, shadows from the parts specified in A will be suppressed from
casting onto any geometries in the ShadowReceiverSets specified in B.\
**Note: no part name should appear more once in the string, otherwise the behavior is undefined.**

Please see the various [Geometry]( {{ "/user-reference/scene-objects/geometry/" | absolute_url }})
classes for more information.

