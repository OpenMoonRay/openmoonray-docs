---

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/IntensityLightFilter/intensity_filter_no_filter.jpg" | absolute_url }}){: style="width: 300px"} |
|-----------------------------------------|
| No intensity |

```rdla
filter = IntensityLightFilter("/Scene/lighting/intensity") {
}
```

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/IntensityLightFilter/intensity_filter_change_intensity.jpg" | absolute_url }}){: style="width: 300px"} |
|-----------------------------------------|
| Change intensity |

```rdla
filter = IntensityLightFilter("/Scene/lighting/intensity") {
    ["intensity"] = 2.0
}
```

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/IntensityLightFilter/intensity_filter_change_exposure.jpg" | absolute_url }}){: style="width: 300px"} |
|-----------------------------------------|
| Change exposure |

```rdla
filter = IntensityLightFilter("/Scene/lighting/intensity") {
    ["exposure"] = 2.0
}
```

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/IntensityLightFilter/intensity_filter_change_color.jpg" | absolute_url }}){: style="width: 300px"} |
|-----------------------------------------|
| Change color |

```rdla
filter = IntensityLightFilter("/Scene/lighting/intensity") {
    ["color"] = Rgb(0.3, 0.8, 0.8)
}
```

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/IntensityLightFilter/intensity_filter_invert_exposure.jpg" | absolute_url }}){: style="width: 300px"} |
|-----------------------------------------|
| Invert exposure |

```rdla
filter = IntensityLightFilter("/Scene/lighting/intensity") {
    ["exposure"] = 3.0,
    ["invert"] = true
}
```

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/IntensityLightFilter/intensity_filter_invert_color.jpg" | absolute_url }}){: style="width: 300px"} |
|-----------------------------------------|
| Invert color |

```rdla
filter = IntensityLightFilter("/Scene/lighting/intensity") {
    ["color"] = Rgb(0.3, 0.8, 0.8),
    ["invert"] = true
}
```


