---

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/RodLightFilter/Rod_21.jpg" | absolute_url }}){: style="width: 300px"} | ![]({{ "/assets/images/user-reference/scene-objects/light-filters/RodLightFilter/Rod_22.jpg" | absolute_url }}){: style="width: 300px"} |
|-----------------|--------------------------|
| No light filter | With RodLightFilter |

```rdla
filter = RodLightFilter("/Scene/lighting/rod") {   
    ["node_xform"] = translate(-1.5, 0, -6),
    ["width"] = 1,
    ["height"] = 1,
    ["depth"] = 1,
    ["radius"] = 0.1,
    ["edge"] = 0.1,
    ["color"] = Rgb(0.05, 0.05, 0.05),
    ["invert"] = false,
}
```

