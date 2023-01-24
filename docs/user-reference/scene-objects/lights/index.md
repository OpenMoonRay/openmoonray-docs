---
title: Lights in MoonRay
maths: 1
---

# Lights in MoonRay

Lights in MoonRay are not treated as solid objects, but rather as abstract entities that inject light into the scene. (Note that it is possible to assign an emissive material to a geometry object as another way to illuminate a scene. However, we are not referring to that kind of setup when we talk about lights.)

There are 8 types of light supported in MoonRay:
* [CylinderLight](/openmoonray-docs/scene-classes/lights/CylinderLight)
* [DiskLight](/openmoonray-docs/scene-classes/lights/DiskLight)
* [DistantLight](/openmoonray-docs/scene-classes/lights/DistantLight)
* [EnvLight](/openmoonray-docs/scene-classes/lights/EnvLight)
* [MeshLight](/openmoonray-docs/scene-classes/lights/MeshLight)
* [RectLight](/openmoonray-docs/scene-classes/lights/RectLight)
* [SphereLight](/openmoonray-docs/scene-classes/lights/SphereLight)
* [SpotLight](/openmoonray-docs/scene-classes/lights/SpotLight)

Two of the light types - DistantLight and EnvLight - are treated as having their illuminating surface at infinity. The remaining six types are considered local lights in the sense that their 3D positions are determined by spatial coordinates (for instance, a SphereLight is positioned by setting its *center* attribute).

Many attributes are shared by all light types. The full set of shared attributes can be found in the documetation for each individual light, but basic examples include:
* node_xform - the light's transformation matrix
* on - to toggle the light on or off
* mb - whether the light is motion-blurred
* visible_in_camera - to toggle the visibility of the light's illuminating surface
* texture - the file path to the texture (if any) to be mapped onto the light's illuminating surface

By default, MoonRay's light transport behaves in a physically plausible way. It is often useful to be able to bend the rules of physics for artistic control, and so MoonRay supports several auxilliary constructs which modify the behavior of lights in a scene in both physical and non-physical ways, to create powerful and highly customizable effects:
* LightSets - a high-level grouping of lights. One important use of LightSets is to specify which lights influence any specific geometry object.
* ShadowSets - a mechanism to suppress light emitted by specified lights from casting shadows off of specified geometry objects.
* LightFilters - TO-DO: figure out how to write a 2nd-level list and add one here.
* ShadowReceiverSets - a mechamism to suppress light cast off of specified caster geometries (or their specified parts) onto specified receiver geometries.
* textures on lights - lights can have textures mapped onto their illuminating surfaces (and, in the case of a SpotLight, a texture can be projected onto the scene).

This section talks about how MoonRay samples the lights in the scene, in the context of MoonRay's 2 sampling mechamisms.
