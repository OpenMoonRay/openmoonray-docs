---

![]({{ "/assets/images/user-reference/scene-objects/light-filters/BarnDoorLightFilter/example.jpg" | absolute_url }})
{: style="width: 400px"}

The BarnDoorLightFilter functions like a [barn
door](https://en.wikipedia.org/wiki/Stage_lighting_accessories#Barn_doors)
in stage lighting. Typically there are four flaps attached to a light
that shape the lighting by restricting where the light can shine.

| ![]({{ "/assets/images/user-reference/scene-objects/light-filters/BarnDoorLightFilter/barndoorIllustration.jpg" | absolute_url }}){: style="width: 250px"} |
|--------------------------------------------------------------|
| Example of a Barn Door (in black) attached to a stage light. |

If the flaps were stitched to each other, the ends of the flaps would
form a rectangular portal that constrains the light.

This light filter operates by simulating such a portal, called the flap opening, shown in gray below:

![]({{ "/assets/images/user-reference/scene-objects/light-filters/BarnDoorLightFilter/image4.png" | absolute_url }})

The flap opening can be moved, resized, rotated, rounded, colored, and
blurred, with varying blur per side. Here is a rough overview of the
various shaping parameters.

![]({{ "/assets/images/user-reference/scene-objects/light-filters/BarnDoorLightFilter/image5.png" | absolute_url }})

The edge expands outwards and there are controls to scale the size of
each edge.

| ![]({{ "/assets/images/user-reference/scene-objects/light-filters/BarnDoorLightFilter/image6.png" | absolute_url }}){: style="width: 238px"}           |
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


<!--| ![]({{ "/assets/images/user-reference/scene-objects/light-filters/BarnDoorLightFilter/exampleAnalyticalPerspective.jpg" | absolute_url }}){: style="width: 300px"}  | ![]({{ "/assets/images/user-reference/scene-objects/light-filters/BarnDoorLightFilter/examplePhysicalPerspective.jpg" | absolute_url }}){: style="width: 300px"}  | ![]({{ "/assets/images/user-reference/scene-objects/light-filters/BarnDoorLightFilter/exampleModeOff.jpg" | absolute_url }}){: style="width: 300px"} |-->

| <img src="{{ "/assets/images/user-reference/scene-objects/light-filters/BarnDoorLightFilter/exampleAnalyticalPerspective.jpg" | absolute_url }}" width=245>  | <img src="{{ "/assets/images/user-reference/scene-objects/light-filters/BarnDoorLightFilter/examplePhysicalPerspective.jpg" | absolute_url }}" width=245>  | <img src="{{ "/assets/images/user-reference/scene-objects/light-filters/BarnDoorLightFilter/exampleModeOff.jpg" | absolute_url }}" width=245> |
|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|
| analytical mode                                      | physical mode                                        | no filter                                            |


There are two projection types, *perspective* and *orthographic*. These are
mainly useful for analytical mode, shown below. 


| ![]({{ "/assets/images/user-reference/scene-objects/light-filters/BarnDoorLightFilter/exampleAnalyticalPerspective.jpg" | absolute_url }}){: style="width: 245px"}  |  ![]({{ "/assets/images/user-reference/scene-objects/light-filters/BarnDoorLightFilter/exampleAnalyticalOrthographic.jpg" | absolute_url }}){: style="width: 245px"}   |  ![]({{ "/assets/images/user-reference/scene-objects/light-filters/BarnDoorLightFilter/exampleModeOff.jpg" | absolute_url }}){: style="width: 245px"}   |
|------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|
| perspective projection                          |  orthographic projection                        | no filter                      |


The modes affect the shape of the light beam. In physical mode, the projection type determines how big the
flap opening is:

- In the *perspective* projection type, the flap opening size scales with `projector_focal_distance` (roughly maintaining the same solid angle / cone size). 
- In the *orthogonal* projection type, the flap opening remains a fixed size. Apart from this, the projection type does not matter.
