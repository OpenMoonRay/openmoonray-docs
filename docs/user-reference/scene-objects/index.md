---
title: Scene Objects
---
# Scene Objects

We define <span class="define">scene objects</span> as the various constructs that describe a scene. This section includes attribute descriptions for all of these scene objects, along with some contextual information and examples. 

Scene objects in MoonRay have several canonical types and include the following:

| Scene Object | Description |
| ------------ | ----------- |
| [Camera](./cameras/) | MoonRay has several standard cameras (Orthographic, Perspective) as well as several camera shaders used to generate map data (BakeCamera, SphericalCamera).|
| [Displacement](./displacement/) | <span class="define">Displacement shaders</span> are nodes that can displace geometry given an input map and/or displacement amount.|
| [DisplayFilter](./display-filters/) | <span class="define">DisplayFilters</span> are compositing nodes that can alter pixel values as a post-process in MoonRay.|
| [Geometry](./geometry/) | |
| [Joint](./joint/Joint) | |
| [Layer](./layer/Layer) | A <span class="define">layer</span> contains a set of assignments to geometry objects or parts.|
| [Light](./lights/) | Lights in MoonRay are not treated as solid objects, but rather as abstract entities that inject light into the scene. There are 8 types of light supported in MoonRay. A <span class="define">LightSet</span> is a high-level grouping of lights, whose purpose is primarily to specify which lights influence any specific geometry object.|
| [LightFilter](./light-filters/) | <span class="define">LightFilters</span> can be used to alter a light, to give it a different shape, color, etc. As with the LightSet, a <span class="define">LightFilterSet</span> is a high-level grouping of light filters, whose purpose is to specify which light filters influence a specified geometry object.|
| [Material](./materials/) | Materials produce <span class="define">BSDFs</span> (bidirectional scattering distribution functions) which describe to the integrator how a surface scatters light at a given point and therefore its appearance. MoonRay supports multiple Fresnel models, but mostly uses dielectric (non-metals) and conductor (metals) Fresnel models.|
| [Map](./maps/) | <span class="define">Maps</span> are 2 or 3 dimensional patterns that are evaluated for each sample.|
| [MetaData](./meta-data/Metadata) | <span class="define">Metadata</span> is a list of attributes, along with their types and values. It is often used to specify arbitrary image header data.|
| [NormalMap](./normal-maps) | A <span class="define">normal map</span> is a RGB map used to alter the shading normals of a surface to produce a textured, light-responsive effect. MoonRay offers 11 types of normal maps.|
| [RenderOutput](./render-output/RenderOutput) | The <span class="define">RenderOutput</span> object is used to specify any output the renderer produces.|
| [SceneVariables](./scene-variables/SceneVariables) | <span class="define">SceneVariables</span> are the global rendering attributes.|
| [ShadowSet](./shadow-set/ShadowSet) | A <span class="define">ShadowSet</span> is a mechanism to suppress light emitted by specified lights from casting shadows off of specified geometry objects.|
| [ShadowReceiverSet](./shadow-receiver-set/ShadowReceiverSet) | A <span class="define">ShadowReceiverSet</span> is a mechanism to suppress light cast off of specified caster geometries (or their specified parts) onto specified receiver geometries.|
| [TraceSet](./trace-set/TraceSet) | A <span class="define">Trace Set</span> is a list of geometries and parts. It is used to specify a set of geometric primitives that a ray can trace. This can be useful in subsurface scattering, when we want to trace rays through geometries that have similar, but different, subsurface materials.|
| [UserData](./user-data/UserData) | An object used to encapsulate arbitrary, user-specified primitive attributes.|
| [Volumes](./volumes/) |  MoonRay supports both homogenous volumes with BaseVolume, and heterogeneous volumes with VdbVolume.|
