---
title: Scene Objects
---
# Scene Objects

We define *scene objects* as the various constructs that describe a scene.
This section includes attribute descriptions for all of these scene objects, along with some contextual information and examples. 

Scene objects in MoonRay have several canonical types and include the following:

#### [Camera](./cameras/)
MoonRay has several standard cameras (Orthographic, Perspective) as well as several camera shaders used to
generate map data (BakeCamera, SphericalCamera).

#### [Displacement](./displacement/)
Shader nodes that can displace geometry given an input map and/or displacement amount.

#### [DisplayFilter](./display-filters/)
Compositing nodes that can alter pixel values as a post-process in MoonRay.

#### [Geometry](./geometry/)
Procedurals that generate MoonRay primitives for rendering.

#### [Layer](./layer/Layer)
Assigns scene objects (e.g. materials, volumes, lights, etc) to geometry objects or parts.

#### [Light](./lights/)
Abstract entities that inject light into the scene.  Lights in MoonRay are not treated as solid objects.

#### [LightSet](./light-set/LightSet)
A high-level grouping of lights, whose purpose is primarily to specify which lights influence which specific geometry object.

#### [LightFilter](./light-filters/)
Used to alter a light, giving it a different shape, color, etc.

#### [LightFilterSet](./light-filter-set/LightFilterSet)
A high-level grouping of light filters, whose purpose is to specify which light filters influence which specific geometry object.

#### [Material](./materials/)
Define *BSDFs* (bidirectional scattering distribution functions) which describe to the integrator how a surface scatters
light at a given point which determines its appearance.

#### [Map](./maps/)
Generate patterns that are evaluated for each shading sample.

#### [MetaData](./meta-data/Metadata)
A list of attributes, along with their types and values. It is often used to specify arbitrary image header data.

#### [NormalMap](./normal-maps)
Used to alter the shading normals of a surface to produce a textured, light-responsive effect.

#### [RenderOutput](./render-output/RenderOutput)
Used to specify any output the renderer produces including the beauty pass and any AOVs.

#### [SceneVariables](./scene-variables/SceneVariables)
Global rendering settings.

#### [ShadowSet](./shadow-set/ShadowSet)
Prevent the associated geometry from casting shadows originating from the lights in this ShadowSet.

#### [ShadowReceiverSet](./shadow-receiver-set/ShadowReceiverSet)
A mechanism for suppressing the casting of designated shadows.

#### [TraceSet](./trace-set/TraceSet)
A list of geometries and parts. It is used to specify a set of geometric primitives that a ray can trace.
This can be useful in subsurface scattering, to trace rays through geometries that have similar, but different,
subsurface materials.

#### [UserData](./user-data/UserData)
An object used to encapsulate arbitrary, user-specified primitive attributes.

#### [Volumes](./volumes/)
MoonRay supports both homogenous volumes with BaseVolume, and heterogeneous volumes with VdbVolume.
