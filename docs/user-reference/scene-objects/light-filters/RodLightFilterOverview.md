---

![]({{ "/assets/images/user-reference/scene-objects/light-filters/RodLightFilter/docsHeader.jpg" | absolute_url }})


The RodLightFilter is a movable, shapeable direct light blocker. The basic shape is a rounded box whose size, orientation, position, and roundness can be adjusted. Surfaces and media within the shape have their direct light contributions scaled according to the color of the filter.

The RodLightFilter scales the intensity of direct light within its volume, making objects within the volume darker or brighter. It can be used to control how dark and bright regions are by encapsulating them with the filter and setting the color.

The shape is based off a rectangular box whose dimensions may be given explicitly. The box may then be enlarged using a given radius which lets the box be rounded. An additional edge thickness determines a falloff zone where the shadow transitions from the values inside the rounded box to the values outside.

![]({{ "/assets/images/user-reference/scene-objects/light-filters/RodLightFilter/rect4542-1.png" | absolute_url }})

The rod can be placed using a transformation which supports curved motion blur, scaling, rotation and translation.

A Note About Performance

Each RodLightFilter incurs a small performance cost as each filter is checked for every light sample. We hope to improve this soon. At the moment, static (non-moving) filters are faster than moving ones, since the culling is faster for static filters.
