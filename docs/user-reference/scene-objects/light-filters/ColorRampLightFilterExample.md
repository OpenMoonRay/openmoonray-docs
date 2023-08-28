---

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/RampLightFilter/ramp_filter_no_ramp.jpg" | absolute_url }}){: style="width: 300px"} |
|-----------------------------------------|
| No ramp - defaults to black |

```rdla
filter = ColorRampLightFilter("/Scene/lighting/colorRamp") {
}
```

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/RampLightFilter/ramp_blue_red.jpg" | absolute_url }}){: style="width: 300px"} |
|-----------------------------------------|
| Simple ramp between blue and red |

```rdla
filter = ColorRampLightFilter("/Scene/lighting/colorRamp") {
    ["colors"] = { Rgb(0, 0, 1), Rgb(1, 0, 0)},
    ["distances"] = {4.0, 8.0},
}
```

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/RampLightFilter/ramp_blue_red_nointerp.jpg" | absolute_url }}){: style="width: 300px"} |
|-----------------------------------------|
| Simple ramp between blue and red, no interpolation |

```rdla
filter = ColorRampLightFilter("/Scene/lighting/colorRamp") {
    ["colors"] = { Rgb(0, 0, 1), Rgb(1, 0, 0)},
    ["distances"] = {4.0, 8.0},
    ["interpolation_types"] = {0, 0},
}
```

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/RampLightFilter/ramp_3color_nointerp.jpg" | absolute_url }}){: style="width: 300px"} |
|-----------------------------------------|
| Ramp between 3 colors, no interpolation |

```rdla
filter = ColorRampLightFilter("/Scene/lighting/colorRamp") {
    ["colors"] = { Rgb(0, 0, 1), Rgb(1, 0, 0), Rgb(0, 1, 0)},
    ["distances"] = {4.0, 6.0, 8.0},
    ["interpolation_types"] = {0, 0, 0},
}
```

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/RampLightFilter/ramp_3color_linear_intensity.jpg" | absolute_url }}){: style="width: 300px"} |
|-----------------------------------------|
| Ramp between 3 colors, linear interpolation, intensity |

```rdla
filter = ColorRampLightFilter("/Scene/lighting/colorRamp") {
    ["colors"] = { Rgb(0, 0, 1), Rgb(1, 0, 0), Rgb(0, 1, 0)},
    ["distances"] = {4.0, 6.0, 8.0},
    ["interpolation_types"] = {1, 1, 1},
    ["intensity"] = 2.0
}
```

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/RampLightFilter/ramp_3color_linear_density.jpg" | absolute_url }}){: style="width: 300px"} |
|-----------------------------------------|
| Ramp between 3 colors, linear interpolation, density |

```rdla
filter = ColorRampLightFilter("/Scene/lighting/colorRamp") {
    ["colors"] = { Rgb(0, 0, 1), Rgb(1, 0, 0), Rgb(0, 1, 0)},
    ["distances"] = {4.0, 6.0, 8.0},
    ["interpolation_types"] = {1, 1, 1},
    ["density"] = 0.5
}
```

