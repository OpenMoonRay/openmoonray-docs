Prevent the associated geometry from casting shadows on the "receiver" geometries included in the ShadowReceiverSet. 

```lua
shadowReceiverSet = ShadowReceiverSet("shadowReceiverSet") {
    ["geometries"] = {geom1, geom2}
}

Layer("Scene/layer") { {geom3, "", whiteMtl, lightSet1, shadowReceiverSet} }
```

In this example, the ShadowReceiverSet contains two geometries: geom1 and geom2. This ShadowReceiveSet is then assigned to geom3. Now, geom3 cannot cast shadows (from any light) onto geom1 or geom2. 
