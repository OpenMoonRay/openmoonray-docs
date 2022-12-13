---
title: Extra AOVs

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# Extra AOV Workflow & Case Studies
## This page needs to be rebuilt

Extra AOV is a great way to create custom AOVs in a beauty render by
shader modification on an asset. These AOVs afford artists extra
flexibility in shot work to generate one of a kind AOVs that solve
unique problems that only occur in specific shots/sequences. The
workflow is extremely portable in Sceneflow and can be built into a rig
and shared between artists with ease.

## Light Path Expressions
If you are not familiar with light path expressions, you might first refer to [OSL Light Path Expressions](https://github.com/AcademySoftwareFoundation/OpenShadingLanguage/wiki/OSL-Light-Path-Expressions).

Extra aovs are implemented through an extension to the standard LPE syntax. We have added a new symbol `U`, which matches any extra aov on a material. For example:

```
CT+U
```

The above expression will match any ray path that that consists of 1 or more transmission events that hit a material with defined extra aovs. Of course, matching any extra aov is not a particularly useful result (unless you only have one extra aov in your setup). We almost always want to place extra aovs in their own output aov.  This is accomplished through the use of labels. We can assign extra aov labels and then use those in light path expressions. For example:

```
CT+U'U:my_extra_aov_label'
```

Of course, the U symbol is optional when using a label.  So the typical way this is written looks like:

```
CT+'U:my_extra_aov_label'
```

In fact, the use of labels is not merely a syntax niceness. As an optimization, moonray will not evaluate extra aovs on materials if there is no active LPE that references the label for that extra aov. That means the first example I showed you, where the "U" symbol exists without a label won't actually work in moonray. Although from a syntax standpoint it is valid, the aov will always be black. By convention, extra aov labels must start with a "U:". This provides a quick way to disambiguate them from light labels which moonray internals take advantage of in places.


## Material Setup
A material can produce a list of extra aov values. 

### Material
Every material in moonray has an `"extra_aovs"` attribute:

```lua
["extra_aovs"] = <null>, -- SceneObject*
 -- comment: Bind this attribute to a 'ListMap' that contains references to 
 -- ExtraAovMaps that specify additional outputs that can be assigned to a 
 -- RenderOutput "light aov" result
```

In the case of layered materials, only the extra_aovs on the top layer material are evaluated. 

### ListMap
The extra_aovs attribute must be bound to a `"ListMap"` map object.  This object simply provides a predefined set of slots for maps.

```lua
ListMap("Map") {
 ["map0"] = <null>, -- SceneObject*
 -- comment: Map object reference
 -- label: map0
 ["map1"] = <null>, -- SceneObject*
 -- comment: Map object reference
 -- label: map1
.
.
.
["map19"] = <null>, -- SceneObject*
 -- comment: Map object reference
 -- label: map19
```

### ExtraAovMap
For each extra aov that you want, plug an `ExtraAovMap"` into any empty slot on the `"ListMap"`.

```lua
ExtraAovMap("Map") {
 ["color"] = Rgb(1, 1, 1), -- Rgb, bindable
 -- comment: Bind the root of a map shader network that you want evaluated as an extra aov
 -- label: color
 ["label"] = "", -- String
 -- comment: Sets the LPE label that is used for the extra aov
 -- label: label
 ["post_scatter"] = false, -- Bool
 -- comment: If true, accumulate this aov when scattering off the surface as an 
 -- indirect ray (after the LPE scatter transition event, after path throughput 
 -- multiplication), rather than when the surface is first intersected. The purpose 
 -- of this setting is to efficiently capture information from all rays that leave 
 -- a surface that could potentially intersect and trigger aov evaluation on other
 -- surfaces.
 -- label: post scatter
}
```

The color attribute of the `"ExtraAovMap"` should be bound to the root of the map shader network that you want to produce the value for this aov. The label attribute specifies the label for  this aov that is used in light path expressions. You should not add `"U:"` to this label.  Moonray will add that prefix for you automatically. If either the color attribute is unbound or the label is empty, Moonray will report a warning and ignore this extra aov. Why would someone reference an aov that can't be evaluated or used in an LPE?

The `"post_scatter"` attribute is a bit complicated. Unless you really know that your application requires it, please leave this attribute in its default `"false"` state. When a ray in a path strikes a material, the extra aovs for that material are calculated at that intersection point. At that point the value is accumulated into the aov frame buffer for matching LPEs. If `"post_scatter"` is true though we first generate the next set of ray paths that will bounce off the intersection point. We then add these new path types for LPE matching purposes and update the path throughput for the new rays before accumulating the result. For example, consider an LPE that matches a primary ray hit on a diffuse object followed by an extra_aov event:

```
CD'U:my_aov'.
```

If post scatter is in the default `"false"` state, the LPE matches paths of the form: "ray leaves camera, ray hits and leaves diffuse surface, ray hits an object with "my_aov" aov. If however, `"post_scatter"` is true, the LPE matches "ray leaves camera, ray hits object with diffuse surface and the extra aov event". I.e. in the default case there are 2 bounces, while in the non-default case there is just one.

Intuitively, you can think of `post_scatter = false` meaning that the aov is accumulated on arrival at the head of the ray, while `post_scatter = true` means that the aov is accumulated on departure at the base of the ray.

## RenderOutput
Extra Aovs are output through RenderOutput objects just like light aovs.

```lua
RenderOutput("RenderOutput") {
    ["result"] = "light aov",
    ["light_aov"] = "C'U:my_aov'",
    ["math_filter"] = "average" -- "sum", "min", or "max" also work

}
```

Unlike light_aovs which only support one mode of math_filter: `"average"`, extra_aovs also support `"sum"`, `"min"`, and `"max"`. `"average"` basically means that the path throughput is multiplied by the extra_aov value and then added to the frame buffer.  `"sum"`, `"min"`, and `"max"` do not multiply the value by the path throughput. In the case of sum, the aov's value is added to the frame buffer, with min, the value replaces the current value if it is less than the current value, and with max, the new value replaces the current value if it is greater than the current value.

## Background Events
In addition to associating extra aov events with materials, there is limited support for extra aovs at background events. Since there is no material or intersection for background events, it is not possible to run arbitrary map shaders at background events.  It is possible to emit a color through. Currently we have one background event that emits pure white.  The label is `"U:bg_white"`. The primary use case for this event is the creation of transparency aovs.

## Examples
### A Transparency Aov
Moonray's alpha channel is opaque when encountering refractive objects, but provides a single value for objects with non-unit presence.  If we want to create a 3-channel transparency aov that takes both presence and refraction into account we can do so with the following LPE

```lua
RenderOutput("RenderOutput") {
    ["result"] = "light aov",
    ["light_aov"] = "C[sT]+'U:bg_white'",
}
```

The basic idea here is that any ray path that passes through objects (either via transmission or refraction) and ultimately hits the background should contribute to our transparency aov.  How much should it contribute?  Well it makes sense for it to contribute the throughput value for that path.  This is accomplished by emitting a pure white event, which is then multiplied by the path throughput and added to the frame buffer.

In the beauty image we have presence based transparency on the right, true refractive transparency with an ior of 1 in the middle, and true refractive transparency with an ior of 1.5 on the left.

![Beauty](../../../assets/images/moonray/how-to-guides/extra-aovs/result.png)

The resulting transparency aov is a 3-channel result that essentially tells us how much light from a pure white environment would shine through these transparent objects.  Note that in the case of the ior=1.5 object, this is not the same thing as what is scene from directly behind the object.

![Transparency AOV](../../../assets/images/moonray/how-to-guides/extra-aovs/resullt0.png)

### Mattes of objects seen through refraction
![Torus](../../../assets/images/moonray/how-to-guides/extra-aovs/scene.png)

Here we have a torus sitting inside a refractive glass object on top of a background plane.  Our desire is isolate a matte for the torus.  The alpha channel for this shot is not particularly helpful - it is just opaque white.

As a first attempt, I can create an extra aov on the torus material.  In this example I made the `"Cd"` attribute on the torus blue to really distinguish it from the main material result.

```lua
torusMatteMap = AttributeMap("torusExtraMap")
{
 ["map_type"] = "primitive attribute",
 ["primitive_attribute_name"] = "Cd", -- this is the default
 ["primitive_attribute_type"] = "rgb"
}
torusMatteAov = ExtraAovMap("/Scene/ExtraAovs/torusMatte")
{
 ["label"] = "torus_matte",
 ["color"] = bind(torusMatteMap),
}
torusMtlExtraAovsList = ListMap("torusMtlExtraAovsList")
{
 ["map0"] = torusMatteAov
}
torusMtl = DwaSolidDielectricMaterial("torusMtl")
{
 ["albedo"] = Rgb(0.8, 0.8, 0.4),
 ["extra_aovs"] = torusMtlExtraAovsList
}
```

_C[RT]'U:torus_matte'_
![Torus One Bounce](../../../assets/images/moonray/how-to-guides/extra-aovs/one_bounce.png)

_C[RT][RT]'U:torus_matte'_
![Torus Two Bounce](../../../assets/images/moonray/how-to-guides/extra-aovs/two_bounce.png)

_C[RT][RT][RT]'U:torus_matte'_
![Torus Three Bounce](../../../assets/images/moonray/how-to-guides/extra-aovs/three_bounce.png)

Those are reasonably interesting images.  They basically show us the path throughput of the blue channel for one, two, and three bounce paths that end at the torus.  But usually when we want to make a matte, we want the object for the matte to be "solid" where it should be solid.  In other words we want it to be solid blue except on what we perceive as the edges of the torus.  Mathematically we can think of this as a ratio between all the paths that hit the torus divided by all the paths that could have possibly hit the torus.  The denominator in this case is just all the rays that transmitted through the cube.  This value can be captured using the "sum" math filter and constant white extra_aov on the cube.

```lua
-- glass transmission matte gets <1, 1, 1>
glassTransmissionMatteMap = ConstantColorMap("glassTransmissionMatteMap") {}
glassTransmissionMatteAov = ExtraAovMap("glassTransmissionMatteAov")
{
 ["label"] = "glass_transmission_matte",
 ["color"] = bind(glassTransmissionMatteMap),
 ["post_scatter"] = true
}
glassTransmissionExtraAovsList = ListMap("glassTransmissionExtraAovsList")
{
 ["map0"] = glassTransmissionMatteAov
}
glass = DwaRefractiveMaterial("glass")
{
 ["roughness"] = 0.3,
 ["casts_caustics"] = true,
 ["extra_aovs"] = glassTransmissionExtraAovsList
}

RenderOutput("/Scene/output/torusMatteDenominator")
{
 ["file_name"] = "torus_matte_denom.exr",
 ["result"] = "light aov",
 ["light_aov"] = "CT'U:glass_transmission_matte'",
 ["channel_name"] = "torus_matte_denom",
 ["math_filter"] = "sum"
}
```

We created a pure white aov, assigned it to the glass cube and have it accumulate on all transmission rays "post scatter".  Furthermore we use a "sum" math filter on the output.  This aov provides a count of the number of transmission rays that passed through the glass cube.  These are all the rays that could possibly hit the torus.

_CT'U:glass_transmission_matte'_
![Matte Denom](../../../assets/images/moonray/how-to-guides/extra-aovs/matte_denom.png)

Now to get a count of all the rays that hit the torus we can use the same torus_matte aov as before, but we can output the result using the "sum" filter.  This results in the blue channel containing the number of rays that hit the torus.

```lua
RenderOutput("/Scene/output/torusMatteNumerator")
{
 ["file_name"] = "torus_matte_num.exr",
 ["result"] = "light aov",
 ["light_aov"] = "CT'U:torus_matte'",
 ["channel_name"] = "torus_matte_num",
 ["math_filter"] = "sum"
}
```

_CT'U:'torus_matte_num'_
![Torus Matte Num](../../../assets/images/moonray/how-to-guides/extra-aovs/torus_matte_num.png)

Our final matte result is just the division of these two images.

```
oiiotool torus_matte_num.exr torus_matte_denom.exr --div
```
![Torus Matte Div](../../../assets/images/moonray/how-to-guides/extra-aovs/torus_matte_div.png)