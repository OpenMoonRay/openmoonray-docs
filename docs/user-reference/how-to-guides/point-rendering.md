---
title: Point Rendering
---
# Point Rendering

## Rendering Style
Points are rendered in MoonRay using the [Rdl2PointGeometry]({{ "/user-reference/scene-objects/geometry/RdlPointGeometry" | absolute_url }}) class.   By default they are rendered as spheres with their radius controlled using the `radius_list` parameter.

![]({{ "/assets/images/user-reference/how-to-guides/point-rendering/points-as-spheres.jpg" | absolute_url }})

Points can also be rendered as a hybrid geometry where intersections are handled as spheres but the shading is rendered as a camera facing disc.  To get this behavior the following primitive attributes must be defined per point using the `primitive_attribute` parameter.

|Attribute|Type|Description|
|N|Vec3f|Unit length normal used for shading normal and normal map transformation.|
|dPds|Vec3f|Derivative vector orthoganal to `N` used for shading, mipmap selection, and normal map transformation|
|dPdt|Vec3f|Derivative vector orthoganal to `N` and `dPds` used for shading and mipmap selection|

![]({{ "/assets/images/user-reference/how-to-guides/point-rendering/points-as-discs.jpg" | absolute_url }})

## Texture Mapping
Texture mapping can be applied by also defining a `uv` Vec3f primitive attribute (z component is not used).  As noted, the length of `dPds` will be used to select the appropriate mipmap is using the [ImageMap]({{ "/user-reference/scene-objects/maps/ImageMap" | absolute_url }}) class. 

![]({{ "/assets/images/user-reference/how-to-guides/point-rendering/texture-uvs.jpg" | absolute_url }})

## Normal Mapping
Normal mapping can also be applied using any of the normal map classes such as [ImageNormalMap]({{ "/user-reference/scene-objects/normal-maps/ImageNormalMap)" | absolute_url }}.

![]({{ "/assets/images/user-reference/how-to-guides/point-rendering/normal-mapping-tangent-space.jpg" | absolute_url }})

The input normals will be transformed from tangent space to render space using the coordinate frame defined by `N`, `dPds`, and `dPdt`.

![]({{ "/assets/images/user-reference/how-to-guides/point-rendering/normal-mapping.jpg" | absolute_url }})
