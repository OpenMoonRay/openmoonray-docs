---
title: Material AOVs
---
# Material AOVs
A Material AOV is a RenderOutput that provides a diagnostic view of a material "property", like *color*, *emission*, or *roughness*. This material "property" is specified through a custom LPE-like material aov syntax. Note: A Material AOV does NOT include any information that is influenced by scene lighting and occlusion is not considered. A Material AOV is specified by three attributes: label + selection + property. 

## Syntax

```
[('<Label>')+\.][(SS | R | T | D | G | M)+\.][fresnel\.]<property>
```

## Properties
A <span class="define">property</span> is a value that can be computed from a Bsdf closure returned from a material shader. There are currently 7:
* `albedo`: result of shining an unoccluded, omnidirectional white light
* `color`
* `emission`: emitted radiance
* `factor`: fresnel factor
* `normal`
* `radius`: sub-surface radius
* `roughness`: glossy roughness

## Selections 
A <span class="define">selection</span> is a portion of the bsdf closure we are interested in. A bsdf closure can consist of up to 8 lobes:

* `R` / `T` = reflection / transmission
* `D` / `G` / `M` = diffuse / glossy / mirror
* `fresnel` = optional fresnel
* `SS` = bssrdf
* `emission` = emission color

## Labels
<span class="define">Labels</span> can be used to further refine material aov selection. Material shaders can assign multiple labels to bsdf lobes and bssrdf objects. You can add labels by doing the following:
* updating "labels" in the associated .json file
* passing them as an argument in ISPC: 
  ```
  Closure_add...(... , /* labels = */ aov...|...);
  ```
* passing them as an argument in C++: 
  ```cpp
  lobe->setLabel(aov...|aov...);
  ```

Notes:
- any selected lobe or bssrdf must match at least one label
- labels in the syntax are "or" operations

### Existing Labels

| Material | Labels |
| -------- | ------ |
| BaseMaterial | "diffuse", "specular", "directional diffuse", "translucency", "transmission" |
| HairMaterial | Hair materials only have one lobe which can be accessed via the "hair" label. When `use_optimized_sampling` is OFF, the hair lobes will be split into four individual lobes: "hair R", "hair TT", "hair TRT", "hair TRRT" |
| Dwa*Materials | each has some subset of the following: "fuzz", "outer specular" (clearcoat), "specular", "diffuse", "specular transmission" "diffuse transmission" |
| HairDiffuseMaterial | "hair diffuse" |
| IrisMaterial | "iris caustics" |
| GlitterFlakeMaterial | "glitter" |


## Examples

### RDLA Example
```lua
-- Example that outputs subsurface color
RenderOutput("/output") {
    ["file_name"] = "result0.exr",
    ["result"] = 7, -- material aov
    ["material aov"] = "SS.color"
}
```

<!--- Images included in the section below need to be properly attributed. --->
<!--- ### Visual Output Examples

**Beauty Render**

![Beauty Render]({{ "/assets/images/user-reference/how-to-guides/material-aovs/beauty.png" | absolute_url }})

**DSS.albedo**

![Diffuse Translucent Albedo]({{ "/assets/images/user-reference/how-to-guides/material-aovs/dss-albedo.png" | absolute_url }})

**G.albedo**

![Glossy Albedo]({{ "/assets/images/user-reference/how-to-guides/material-aovs/glossy-albedo.png" | absolute_url }})

**M.albedo**

![Mirror Albedo]({{ "/assets/images/user-reference/how-to-guides/material-aovs/mirror-albedo.png" | absolute_url }})

**emission**

![Emission]({{ "/assets/images/user-reference/how-to-guides/material-aovs/emission.png" | absolute_url }})

**GSS.fresnel.factor**

![Glossy and SS Fresnel]({{ "/assets/images/user-reference/how-to-guides/material-aovs/gss-fresnel-factor.png" | absolute_url }})

**DGM.roughness**

![Roughness]({{ "/assets/images/user-reference/how-to-guides/material-aovs/dgm-roughness.png" | absolute_url }})

**'specular'.albedo**

![Specular Albedo]({{ "/assets/images/user-reference/how-to-guides/material-aovs/specular-albedo.png" | absolute_url }})

**'diffuse translucency'.DSS.albedo**

![Diffuse Translucent Albedo]({{ "/assets/images/user-reference/how-to-guides/material-aovs/diffuse-translucency-dss-albedo.png" | absolute_url }}) --->

