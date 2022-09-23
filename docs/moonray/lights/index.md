---
title: Lights in MoonRay
# uncomment if you want MathJax formatting available
maths: 1
---

# Lights in MoonRay

Lights in MoonRay are not treated as solid objects, but rather as abstract entities that inject light into the scene. (Note that it is possible to assign an emissive material to a geoemtry object as another way to illuminate a scene. However, we are not referring to that kind of setup when we talk about lights.)

There are 8 types of light supported in MoonRay:
* CylinderLight
* DiskLight
* DistantLight
* EnvLight
* MeshLight
* RectLight
* SphereLight
* SpotLight

(TO-DO: turn each of the types into a link once the pages are there.)

2 of the light types - DistantLight and EnvLight - are treated as having their illuminating surface at infinity. The remaining 6 types are considered local lights in the sense that their 3D positions are determined by spatial coordites (for instance, a SphereLight is positioned by setting its *center* attribute).

This section talks about the settings that are shared by all light types.

This section talks about how MoonRay samples the lights in the scene, in the context of MoonRay's 2 sampling mechamisms.

Here are some related things that this section also needs to talk about:
* LightSets
* ShadowSets
* LightFilters
* ShadowReceiverSets
* texture attributes on lights
* loads of other topics.

