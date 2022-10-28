---
title: Point Rendering

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# Point Rendering

## Rendering Style
Points are rendered in Moonray using the [Rdl2PointGeometry]({{site.baseurl}}/scene-classes/geometry/RdlPointGeometry) class.   By default they are rendered as spheres with their radius controlled using the `radius_list` parameter.

![]({{site.baseurl}}/assets/images/moonray/how-to-guides/point-rendering/points-as-spheres.jpg)

Points can also be rendered as a hybrid geometry where intersections are handled as spheres but the shading is rendered as a camera facing disc.  To get this behavior the following primitive attributes must be defined per point using the `primitive_attribute` parameter.

|Attribute|Type|Description|
|N|Vec3f|Unit length normal used for shading normal and normal map transformation.|
|dPds|Vec3f|Derivative vector orthoganal to `N` used for shading, mipmap selection, and normal map transformation|
|dPdt|Vec3f|Derivative vector orthoganal to `N` and `dPds` used for shading and mipmap selection|

![]({{site.baseurl}}/assets/images/moonray/how-to-guides/point-rendering/points-as-discs.jpg)

## Texture Mapping
Texture mapping can be applied by also defining a `uv` Vec3f primitive attribute (z component it not used).  As noted, the length of `dPds` will be used to select the appropriate mipmap is using the [ImageMap]({{site.baseurl}}/scene-classes/map/ImageMap) class. 

![]({{site.baseurl}}/assets/images/moonray/how-to-guides/point-rendering/texture-uvs.jpg)

## Normal Mapping
Normal mapping can also be applied using any of the normal map classes such as [ImageNormalMap]({{site.baseurl}}/scene-classes/normal-maps/ImageNormalMap).

![]({{site.baseurl}}/assets/images/moonray/how-to-guides/point-rendering/normal-mapping-tangent-space.jpg)

The input normals will be transformed from tangent space to render space using the coordinate frame defined by `N`, `dPds`, and `dPdt`.

![]({{site.baseurl}}/assets/images/moonray/how-to-guides/point-rendering/normal-mapping.jpg)
