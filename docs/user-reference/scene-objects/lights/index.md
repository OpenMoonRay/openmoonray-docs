---
title: Lights in MoonRay
maths: 1
---

# Lights in MoonRay

Lights in MoonRay are not treated as solid objects, but rather as abstract entities that inject light into the scene.
(Note that it is possible to assign an emissive material to a geometry object as another way to illuminate a scene.
However, we are not referring to that kind of setup when we talk about lights.)

There are 8 types of light supported in MoonRay:
* [CylinderLight]({{ "/user-reference/scene-objects/lights/CylinderLight/" | absolute_url }})
* [DiskLight](    {{ "/user-reference/scene-objects/lights/DiskLight/"     | absolute_url }})
* [DistantLight]( {{ "/user-reference/scene-objects/lights/DistantLight/"  | absolute_url }})
* [EnvLight](     {{ "/user-reference/scene-objects/lights/EnvLight/"      | absolute_url }})
* [MeshLight](    {{ "/user-reference/scene-objects/lights/MeshLight/"     | absolute_url }})
* [RectLight](    {{ "/user-reference/scene-objects/lights/RectLight/"     | absolute_url }})
* [SphereLight](  {{ "/user-reference/scene-objects/lights/SphereLight/"   | absolute_url }})
* [SpotLight](    {{ "/user-reference/scene-objects/lights/SpotLight/"     | absolute_url }})

Two of the light types - DistantLight and EnvLight - are treated as having their illuminating surface at infinity.
The remaining six types are considered local lights in the sense that their 3D positions are determined by spatial
coordinates (for instance, a SphereLight is positioned by setting its *center* attribute).

Many attributes are shared by all light types. The full set of shared attributes can be found in the documentation
for each individual light, but basic examples include:
* *node_xform* - the light's transformation matrix
* *on* - to toggle the light on or off
* *mb* - whether the light is motion-blurred
* *visible_in_camera* - to toggle the visibility of the light's illuminating surface
* *texture* - the file path to the texture (if any) to be mapped onto the light's illuminating surface

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

MoonRay uses two sampling strategies to generate sampling directions at each path vertex: _light sampling_, in which
a position is chosen probabilistically on the illuminating surface of each light in the relevant LightSet, and
_bsdf sampling_, where the sampling directions are chosen probabilistically over the bsdf lobes of the material.
The two sampling strategies are combined using _multiple importance sampling_. For further details of this scheme,
see [Veach's classic thesis]({{"https://graphics.stanford.edu/papers/veach_thesis/thesis.pdf"}}).

