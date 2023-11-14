---
title: Lights in MoonRay
maths: 1
---

# Lights in MoonRay

## Overview

Lights in MoonRay are not treated as solid objects, but rather as abstract entities that inject light into the scene.
(Note that it is possible to assign an emissive material to a geometry object as another way to illuminate a scene.
However, we are not referring to that kind of setup when we talk about lights.)

The following Light types are included in MoonRay:
{% assign section = site.data.site-nav-tree[1].subitems[1].subitems[6].subitems %}
{%- for item in section -%}
- [{{ item.text }}]({{ item.path | replace: "index.md", "" | relative_url | replace: ".md", "/"}})
{% endfor %}

Two of the light types - DistantLight and EnvLight - are treated as having their illuminating surface at infinity.
The remaining six types are considered local lights in the sense that their 3D positions are determined by spatial
coordinates (for instance, a SphereLight is positioned by setting its *center* attribute).

## Attributes

Many attributes are shared by all light types. The full set of shared attributes can be found in the documentation
for each individual light, but basic examples include:
* *node_xform* - the light's transformation matrix
* *on* - to toggle the light on or off
* *mb* - whether the light is motion-blurred
* *visible_in_camera* - to toggle the visibility of the light's illuminating surface
* *texture* - the file path to the texture (if any) to be mapped onto the light's illuminating surface

## Light Sidedness

A _sidedness_ attribute is supported for DiskLight, RectLight, SphereLight, and CylinderLight. Changing the value
of this attribute controls which of the light source's two surfaces emits light.

For DiskLight and RectLight, the choice can be made between 0 ("regular", the default), 1 ("reverse"), or
2 ("2-sided").

SphereLights and CylinderLights, however, do not support the 2-sided mode, and the choice for them is limited to
regular and reverse sidedness (i.e. the 1-sided options). If a 2-sided SphereLight or CylinderLight is desired, it
can be emulated by pairing up 2 lights, one having regular and one having reverse sidedness.

<style> table th { width: 33.3333%; } </style>

| Regular     | Reverse     | 2-sided     |
| ----------- | ----------- | ----------- |
| ![Regular]({{ "/assets/images/user-reference/scene-objects/lights/DiskLight/disk_regular.png"     | absolute_url }}) | ![Reverse]({{ "/assets/images/user-reference/scene-objects/lights/DiskLight/disk_reverse.png"     | absolute_url }}) | ![2-sided]({{ "/assets/images/user-reference/scene-objects/lights/DiskLight/disk_2-sided.png" | absolute_url }}) |
| ![Regular]({{ "/assets/images/user-reference/scene-objects/lights/RectLight/rect_regular.png"     | absolute_url }}) | ![Reverse]({{ "/assets/images/user-reference/scene-objects/lights/RectLight/rect_reverse.png"     | absolute_url }}) | ![2-sided]({{ "/assets/images/user-reference/scene-objects/lights/RectLight/rect_2-sided.png" | absolute_url }}) |
| ![Regular]({{ "/assets/images/user-reference/scene-objects/lights/SphereLight/sphere_regular.png" | absolute_url }}) | ![Reverse]({{ "/assets/images/user-reference/scene-objects/lights/SphereLight/sphere_reverse.png" | absolute_url }})
| ![Regular]({{ "/assets/images/user-reference/scene-objects/lights/CylinderLight/cyl_regular.png"  | absolute_url }}) | ![Reverse]({{ "/assets/images/user-reference/scene-objects/lights/CylinderLight/cyl_reverse.png"  | absolute_url }})

Note that in both the DiskLight and RectLight cases, the behavior of a 2-sided light is identical to that of
a pair of 1-sided lights emitting in opposite directions.

Note also that a SphereLight with reverse sidedness will behave identically to one of regular sidedness if
it does not penetrate any geometry or volumes. A CylinderLight, however, will show differences regardless
of any penetration since the lack of end caps becomes apparent in the reverse-sidedness case.


## Modifying Light Behavior

By default, MoonRay's light transport behaves in a physically plausible way. It is often useful to be able to bend
the rules of physics for artistic control, and so MoonRay supports several auxilliary constructs which modify the
behavior of lights in a scene in both physical and non-physical ways, to create powerful and highly customizable
effects:
* [LightSets](         {{ "/user-reference/scene-objects/light-set/LightSet/"                    | absolute_url }}) -
a high-level grouping of lights. One important use of LightSets is to specify which lights influence any specific
 geometry object.
* [ShadowSets](        {{ "/user-reference/scene-objects/shadow-set/ShadowSet/"                  | absolute_url }}) -
a mechanism to suppress light emitted by specified lights from casting shadows off of specified geometry objects.
* [LightFilters](      {{ "/user-reference/scene-objects/light-filters/"                         | absolute_url }}) -
a set of filters that provide customized control over the emitted light field.
* [ShadowReceiverSets]({{ "/user-reference/scene-objects/shadow-receiver-set/ShadowReceiverSet/" | absolute_url }}) -
a mechamism to suppress light cast off of specified caster geometries (or their specified parts) onto specified
receiver geometries.
* textures on lights - lights can have textures mapped onto their illuminating surfaces (and, in the case of a
SpotLight, a texture can be projected onto the scene).

## Sampling

MoonRay uses two sampling strategies to generate sampling directions at each path vertex: _light sampling_, in which
a position is chosen probabilistically on the illuminating surface of each light in the relevant LightSet, and
_bsdf sampling_, where the sampling directions are chosen probabilistically over the bsdf lobes of the material.
The two sampling strategies are combined using _multiple importance sampling_. For further details of this scheme,
see [Veach's classic thesis]({{"https://graphics.stanford.edu/papers/veach_thesis/thesis.pdf"}}).

