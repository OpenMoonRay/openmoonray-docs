---

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/DecayLightFilter/decay_filter_no_decay.jpg" | absolute_url }}){: style="width: 300px"} |
|-----------------------------------------|
| No decay |

```rdla
filter = DecayLightFilter("/Scene/lighting/decay") {
     ["falloff near"] = false,
     ["falloff far"] = false,
}
```

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/DecayLightFilter/decay_filter_fade_in.jpg" | absolute_url }}){: style="width: 300px"} |
|-----------------------------------------|
| Fade in |

```rdla
filter = DecayLightFilter("/Scene/lighting/decay") {
     ["falloff near"] = true,
     ["falloff far"] = false,
     ["near start"] = 4.0,
     ["near end"] = 5.0,
}
```

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/DecayLightFilter/decay_filter_fade_out.jpg" | absolute_url }}){: style="width: 300px"} |
|-----------------------------------------|
| Fade out |

```rdla
filter = DecayLightFilter("/Scene/lighting/decay") {
     ["falloff near"] = false,
     ["falloff far"] = true,
     ["far start"] = 7.0,
     ["far end"] = 8.0,
}
```

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/DecayLightFilter/decay_filter_fade_in_fade_out.jpg" | absolute_url }}){: style="width: 300px"} |
|-----------------------------------------|
| Fade in and fade out |

```rdla
filter = DecayLightFilter("/Scene/lighting/decay") {
     ["falloff near"] = true,
     ["falloff far"] = true,
     ["near start"] = 4.0,
     ["near end"] = 5.0,
     ["far start"] = 7.0,
     ["far end"] = 8.0,
}
```

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/DecayLightFilter/decay_filter_sharp_decay.jpg" | absolute_url }}){: style="width: 300px"} |
|-----------------------------------------|
| Sharp decay |

```rdla
filter = DecayLightFilter("/Scene/lighting/decay") {
     ["falloff near"] = true,
     ["falloff far"] = true,
     ["near start"] = 5.0,
     ["near end"] = 5.0,
     ["far start"] = 7.6,
     ["far end"] = 7.6,
}
```

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/DecayLightFilter/decay_filter_broad_decay.jpg" | absolute_url }}){: style="width: 300px"} |
|-----------------------------------------|
| Broad decay |

```rdla
filter = DecayLightFilter("/Scene/lighting/decay") {
     ["falloff near"] = true,
     ["falloff far"] = true,
     ["near start"] = 3.0,
     ["near end"] = 5.0,
     ["far start"] = 7.0,
     ["far end"] = 9.0,
}
```

