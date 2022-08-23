# Geometry

## Attributes

### ray epsilon

| **Name:**    | ray_epsilon                                                                                                                                                                                                                                |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Type:**    | *Float*                                                                                                                                                                                                                                    |
| **Default:** | 0.0                                                                                                                                                                                                                                        |
| **Comment:** | When a secondary ray is fired, anything within this distance of the intersection point will be ignored. Instead, it is considered part of the current intersection's geometry. If zero, an automatically calculated  epsilon will be used. |

Example: A box hovering over a reflective plane. The shadow and the
reflection of the box is visible on the plane. The ray_espilon of the
plane is changing.

<img src="media/image1.tmp" style="width:4.16667in;height:4.16667in" />

## shadow ray epsilon

| **Name:**    | shadow_ray_epsilon                                                                                                                                                               |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Type:**    | *Float*                                                                                                                                                                          |
| **Default:** | 0.0                                                                                                                                                                              |
| **Comment:** | When a shadow ray is fired, anything within this distance of the intersection point will be ignored. If this value is less than "ray_epsilon", then it has no additional effect. |

Example: A box hovering over a reflective plane. The shadow and the
reflection of the box is visible on the plane. The shadow_ray_espilon of
the plane is changing.

<img src="media/image2.tmp" style="width:4.16667in;height:4.16667in" />
