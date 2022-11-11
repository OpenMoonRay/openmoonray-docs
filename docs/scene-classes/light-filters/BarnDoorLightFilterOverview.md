---
# BarnDoorLightFilter 

The BarnDoorLightFilter functions like a [barn
door](https://en.wikipedia.org/wiki/Stage_lighting_accessories#Barn_doors)
in stage lighting. Typically there are four flaps attached to a light
that shape the lighting by restricting where the light can shine.

| ![]({{site.baseurl}}/assets/images/moonray/how-to-guides/barn-door-light-filter/image2.png)        | ![]({{site.baseurl}}/assets/images/moonray/how-to-guides/barn-door-light-filter/image3.jpeg)            |
|------------------------------------------------------|-------------------------------------------------------|
| Example photo of a Barn Door (black)                 | Photo of a Barn Door narrowing the light              |

If the flaps were stitched to each other, the ends of the flaps would
form a rectangular portal that constrains the light.

This light filter operates by simulating such a portal, called the flap opening, shown in gray below:

![]({{site.baseurl}}/assets/images/moonray/how-to-guides/barn-door-light-filter/image4.png)

The flap opening can be moved, resized, rotated, rounded, colored, and
blurred, with varying blur per side. Here is a rough overview of the
various shaping parameters.

![]({{site.baseurl}}/assets/images/moonray/how-to-guides/barn-door-light-filter/image5.png)

The edge expands outwards and there are controls to scale the size of
each edge.

| ![]({{site.baseurl}}/assets/images/moonray/how-to-guides/barn-door-light-filter/image6.png)           |
|------------------------------------------------------|
| edge size and per-edge scaling animation             |

There are two modes of the Barn Door, *analytical* and *physical*.

- In physical mode, the ray between the shading point and the light is
checked to see if it passes through the Barn Door rectangular portal.
Light rays masked by the portal are darkened.
- In analytic mode, the calculation is the same but the end of the ray on
the light is replaced by the singular position of the Barn Door (a
single point).  It treats the light as a point light for filter
shadowing.

| ![]({{site.baseurl}}/assets/images/moonray/how-to-guides/barn-door-light-filter/image7.png)              | ![]({{site.baseurl}}/assets/images/moonray/how-to-guides/barn-door-light-filter/image8.png)   | ![]({{site.baseurl}}/assets/images/moonray/how-to-guides/barn-door-light-filter/image9.png)     |
|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|
| analytical mode                                      | physical mode                                        | no filter                                            |

There are two projection types, *perspective* and *orthographic*. These are
mainly useful for analytical mode, shown below. 

| ![]({{site.baseurl}}/assets/images/moonray/how-to-guides/barn-door-light-filter/image7.png)       |  ![]({{site.baseurl}}/assets/images/moonray/how-to-guides/barn-door-light-filter/image10.png)   |  ![]({{site.baseurl}}/assets/images/moonray/how-to-guides/barn-door-light-filter/image9.png)   |
|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|
| perspective projection                          |  orthographic projection                        | no filter                      |

The modes affect the shape of the light beam. In physical mode, the projection type determines how big the
flap opening is:

- In the *perspective* projection type, the flap opening size scales with `projector_focal_distance` (roughly maintaining the same solid angle / cone size). 
- In the *orthogonal* projection type, the flap opening remains a fixed size. Apart from this, the projection type does not matter.