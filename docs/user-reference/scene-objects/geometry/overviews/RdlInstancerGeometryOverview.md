**RdlInstancerGeometry** instances other geometry based on its parameters.

Geometry to instance is referenced with the *references* attribute.   Which geometry to use per-instance is defined with the *ref_indices* attribute.  Note that the reference object itself will _not_ be rendered -- only its instances.

The transforms of the instances can be defined by either the *xforms_list* which uses a list matrices or the *positions*, *orientations*, and *scales* vector list attributes. The attribute *use_reference_xforms* determines whether the instances should first be transformed by the reference object's *node_xform*. Primitive attributes can be defined per-instance but only at a constant rate.

<aside class="info-aside"> Volumes can also be instanced in the same manner, but keep in mind that MoonRay is currently limited to max 512 volumes. </aside>

```lua
boxGeom = BoxGeometry("boxGeom") {
}

sphereGeom = SphereGeometry("sphereGeom") {
}

colorData = UserData("colorData") {
    ["color_key"] = "Cd",
    ["color_values_0"] = { 
        Rgb(1.0, 0.0, 0.0),
        Rgb(0.0, 1.0, 0.0),
        Rgb(0.0, 0.0, 1.0),
        Rgb(1.0, 0.0, 1.0),
        Rgb(0.0, 1.0, 1.0),
    },
}

instancer0 = RdlInstancerGeometry("instancer0") {
    ["references"] = { boxGeom, sphereGeom },
    ["ref_indices"] = {0, 1, 0, 1, 0 },
    ["positions"] = {
        Vec3(-0.1, 0.1, 0.0),
        Vec3(0.1, 0.2, 0.0),
        Vec3(-0.1, 0.3, 0.0),
        Vec3(0.1, 0.4, 0.0),
        Vec3(-0.1, 0.5, 0.0),
    },
    ["orientations"] = {
        Vec4(0.0, 0.0, -0.487175, -0.873305),
        Vec4(0.0, 0.0, 0.0, 0.0),
        Vec4(0.0, -0.487175, 0.0, -0.873305),
        Vec4(0.0, 0.0, 0.0, 0.0),
        Vec4(0.0, 0.0, 0.0, 0.0),
    },
    ["scales"] = {
        Vec3(0.15, 0.05, 0.05),
        Vec3(0.05, 0.05, 0.05),
        Vec3(0.1, 0.05, 0.2),
        Vec3(0.05, 0.1, 0.05),
        Vec3(0.1, 0.1, 0.1),
    },
    ["primitive_attributes"] = { 
        colorData,
    },
}

colorData2 = UserData("colorData2") {
    ["color_key"] = "Cd",
    ["color_values_0"] = { 
        Rgb(1.0, 0.0, 0.0),
        Rgb(0.0, 1.0, 0.0),
        Rgb(0.0, 0.0, 1.0),
    },
}
```

Referenced geometry must also be declared in the *GeometrySet* and materials must also be assigned to
the referenced geometry. Any material assigned to the *RdlInstancerGeometry* itself is ignored.

```lua
GeometrySet("/Scene/geometry/all") {
    grid,
    boxGeom,
    sphereGeom,
    instancer0,
    instancer1,
}

geomMtl = DwaSolidDielectricMaterial("geomMtl") {
    ["show_diffuse"] = true,
    ["show_specular"] = true,
    ["albedo"] = bind(attrMapCd, Rgb(0.1, 0.1, 0.1)),
    ["roughness"] = 0.2,
}

Layer("/Scene/rendering/all") {
    {boxGeom,    "", geomMtl},
    {sphereGeom, "", geomMtl},
    {instancer0, ""}
}
```

![]({{ "/assets/images/user-reference/scene-objects/geometry/RdlInstancerGeometry/rdl_instancer_level_0.jpg" | absolute_url }})


Instancer geometry may itself also be instanced up to four levels deep.  The example below instances the
previously defined instancer.  It also uses its own set of *Cd* color data which overrides the data on
the referenced instancer.

```lua
colorData2 = UserData("colorData2") {
    ["color_key"] = "Cd",
    ["color_values_0"] = { 
        Rgb(1.0, 0.0, 0.0),
        Rgb(0.0, 1.0, 0.0),
        Rgb(0.0, 0.0, 1.0),
    },
}

instancer1 = RdlInstancerGeometry("instancer1") {
    ["references"] = { instancer0 },
    ["positions"] = {
        Vec3(-0.2, 0.0, 0.0),
        Vec3(-0.0, 0.1, -0.2),
        Vec3(0.3, 0.0, 0.0),
    },
    ["primitive_attributes"] = { 
        colorData2,
    },
}

GeometrySet("/Scene/geometry/all") {
    boxGeom,
    sphereGeom,
    instancer0,
    instancer1,
}

Layer("/Scene/rendering/all") {
    {boxGeom,    "", geomMtl},
    {sphereGeom, "", geomMtl},
    {instancer0, "" },
    {instancer1, "" },
}
```

![]({{ "/assets/images/user-reference/scene-objects/geometry/RdlInstancerGeometry/rdl_instancer_level_1.jpg" | absolute_url }})
