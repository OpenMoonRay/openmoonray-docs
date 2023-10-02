---

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/VdbLightFilter/vdb_filter_default.jpg" | absolute_url }}){: style="width: 500px"} |
|-----------------------------------------|
| Default (with torus VDB) |

```rdla
filter = VdbLightFilter("/Scene/lighting/vdb") {
    ["node_xform"] = scale(0.01, 0.05, 0.01) * translate(0, 0, -7),
    ["vdb_map"] = "torus.vdb",
}
```

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/VdbLightFilter/vdb_filter_interpolation.jpg" | absolute_url }}){: style="width: 500px"} |
|-----------------------------------------|
| Smooth interpolation (with torus VDB) |

```rdla
filter = VdbLightFilter("/Scene/lighting/vdb") {
    ["node_xform"] = scale(0.01, 0.05, 0.01) * translate(0, 0, -7),
    ["vdb_map"] = "torus.vdb",
    ["vdb_interpolation_type"] = 2,
}
```

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/VdbLightFilter/vdb_filter_invert.jpg" | absolute_url }}){: style="width: 500px"} |
|-----------------------------------------|
| Invert density (with torus VDB) |

```rdla
filter = VdbLightFilter("/Scene/lighting/vdb") {
    ["node_xform"] = scale(0.01, 0.05, 0.01) * translate(0, 0, -7),
    ["vdb_map"] = "torus.vdb",
    ["invert_density"] = true,
}
```

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/VdbLightFilter/vdb_filter_blurred.jpg" | absolute_url }}){: style="width: 500px"} |
|-----------------------------------------|
| Blurred (with torus VDB) |

```rdla
filter = VdbLightFilter("/Scene/lighting/vdb") {
    ["node_xform"] = scale(0.01, 0.05, 0.01) * translate(0, 0, -7),
    ["vdb_map"] = "torus.vdb",
    ["blur_value"] = 40,
}
```

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/VdbLightFilter/vdb_filter_tinted.jpg" | absolute_url }}){: style="width: 500px"} |
|-----------------------------------------|
| Tinted (with torus VDB) |

```rdla
filter = VdbLightFilter("/Scene/lighting/vdb") {
    ["node_xform"] = scale(0.01, 0.05, 0.01) * translate(0, 0, -7),
    ["vdb_map"] = "torus.vdb",
    ["color_tint"] = Rgb(0.8, 0.0, 0.0),
}
```

