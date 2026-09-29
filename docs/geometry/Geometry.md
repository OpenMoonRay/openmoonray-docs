# Geometry

## Attributes

### ray epsilon

| **Name:**    | ray_epsilon                                                                                                                                                                                                                                |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Type:**    | *Float*                                                                                                                                                                                                                                    |
| **Default:** | 0.0                                                                                                                                                                                                                                        |
| **Comment:** | When a secondary ray is fired, anything within this distance of the intersection point will be ignored. Instead, it is considered part of the current intersection's geometry. If zero, an automatically calculated epsilon will be used. |

For example, increasing `ray_epsilon` on a reflective plane causes nearby
secondary-ray intersections, such as the reflection of a hovering box, to be
ignored over a larger distance.

<img src="media/image1.tmp" style="width:4.16667in;height:4.16667in" />

## shadow ray epsilon

| **Name:**    | shadow_ray_epsilon                                                                                                                                                               |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Type:**    | *Float*                                                                                                                                                                          |
| **Default:** | 0.0                                                                                                                                                                              |
| **Comment:** | When a shadow ray is fired, anything within this distance of the intersection point will be ignored. If this value is less than "ray_epsilon", then it has no additional effect. |

For example, increasing `shadow_ray_epsilon` on the plane causes nearby
shadow-ray intersections to be ignored over a larger distance. It does not
change the reflection; that is controlled by `ray_epsilon`.

<img src="media/image2.tmp" style="width:4.16667in;height:4.16667in" />
