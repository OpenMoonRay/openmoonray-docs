---

|![]({{ "/assets/images/user-reference/scene-objects/light-filters/CombineLightFilter/combine_filter_example_1.png" | absolute_url }}){: style="width: 800px"} |
|![]({{ "/assets/images/user-reference/scene-objects/light-filters/CombineLightFilter/combine_filter_example_2.png" | absolute_url }}){: style="width: 800px"} |
|![]({{ "/assets/images/user-reference/scene-objects/light-filters/CombineLightFilter/combine_filter_example_3.png" | absolute_url }}){: style="width: 800px"} |
|![]({{ "/assets/images/user-reference/scene-objects/light-filters/CombineLightFilter/combine_filter_example_4.png" | absolute_url }}){: style="width: 800px"} |
|![]({{ "/assets/images/user-reference/scene-objects/light-filters/CombineLightFilter/combine_filter_example_5.png" | absolute_url }}){: style="width: 800px"} |
|![]({{ "/assets/images/user-reference/scene-objects/light-filters/CombineLightFilter/combine_filter_example_6.png" | absolute_url }}){: style="width: 800px"} |
|![]({{ "/assets/images/user-reference/scene-objects/light-filters/CombineLightFilter/combine_filter_example_7.png" | absolute_url }}){: style="width: 800px"} |
|![]({{ "/assets/images/user-reference/scene-objects/light-filters/CombineLightFilter/combine_filter_example_8.png" | absolute_url }}){: style="width: 800px"} |

```rdla
RodLightFilter("/RIG/RodLightFilter1") {
    ["color"] = Rgb(0, 0, 1),
    ["node_xform"] = Mat4(3.0, 0.0, 0.0, 0.0,
                          0.0, 3.0, 0.0, 0.0,
                          0.0, 0.0, 3.0, 0.0, 
                         -0.931609630585, 0.0, -0.5, 1.0),
}

RodLightFilter("/RIG/RodLightFilter2") {
    ["color"] = Rgb(1, 0, 0),
    ["node_xform"] = Mat4(3.0, 0.0, 0.0, 0.0,
                          0.0, 3.0, 0.0, 0.0,
                          0.0, 0.0, 3.0, 0.0, 
                          1.05325031281, 0.0, -0.5, 1.0),
}

CombineLightFilter("/RIG/CombineLightFilter1") {
    ["light_filters"] = {RodLightFilter("/RIG/RodLightFilter1"),
                         RodLightFilter("/RIG/RodLightFilter2")},

    ["mode"] = 0, -- multiply filter values
    --["mode"] = 1, -- min filter value
    --["mode"] = 2, -- max filter value
    --["mode"] = 3, -- add filter values, clamp to 1
    --["mode"] = 4, -- subtract (first filter - 2nd - 3rd...) clamped to zero
}

LightFilterSet("/Scene/lightfilterset/3") {
    RodLightFilter("/RIG/RodLightFilter1"), 
    RodLightFilter("/RIG/RodLightFilter2"), 
    CombineLightFilter("/RIG/CombineLightFilter1"),
}
```

