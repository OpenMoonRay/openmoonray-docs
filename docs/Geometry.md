# Geometry

### Attributes

> ray epsilon

+------+---------------------------------------------------------------+
| > *  | > ray \_epsilon                                               |
| *Nam |                                                               |
| e:** |                                                               |
+======+===============================================================+
| > *  | > *Float*                                                     |
| *Typ |                                                               |
| e:** |                                                               |
+------+---------------------------------------------------------------+
| >    | > 0.0                                                         |
| **De |                                                               |
| faul |                                                               |
| t:** |                                                               |
+------+---------------------------------------------------------------+
| >    | > When a secondary ray is f ired, any thing within this       |
| **Co | > distance of theintersection point will be ignored. Inst     |
| mmen | > ead, it is considered part of the                           |
| t:** | >                                                             |
|      | > current intersection\'s geometry . If zero, an              |
|      | > automatically calculated epsilon will be used .             |
+------+---------------------------------------------------------------+

> Example: A box hov ering ov er a ref lectiv e plane. The shadow and
> the ref lection of the box is v isible on the plane. The ray \_espilon
> of the plane is changing.

![](media/image1.jpeg){width="4.166666666666667in"
height="4.166666666666667in"}

> shadow ray epsilon

+------+---------------------------------------------------------------+
| > *  | > shadow_ray \_epsilon                                        |
| *Nam |                                                               |
| e:** |                                                               |
+======+===============================================================+
| > *  | > *Float*                                                     |
| *Typ |                                                               |
| e:** |                                                               |
+------+---------------------------------------------------------------+
| >    | > 0.0                                                         |
| **De |                                                               |
| faul |                                                               |
| t:** |                                                               |
+------+---------------------------------------------------------------+
| >    | > When a shadow ray is f ired, any thing within this distance |
| **Co | > of theintersection point will be ignored. If this v alue is |
| mmen | > less than \"ray \_epsilon\" , t                             |
| t:** | >                                                             |
|      | > hen it has no additional ef f ect.                          |
+------+---------------------------------------------------------------+

> Example: A box hov ering ov er a ref lectiv e plane. The shadow and
> the ref lection of the box is v isible on the plane. The shadow_ray
> \_espilon of the plane is changing.
>
> ![](media/image2.jpeg){width="4.1345089676290465in" height="4.125in"}
