---
title: Scene Objects
---
# Scene Objects

We define "scene objects" as the various constructs that describe a scene. This section includes attribute descriptions for all of these scene objects, along with some contextual information and examples. 

Scene objects in MoonRay have several canonical types and include the following:

<sl-card class="card-header">
  <div slot="header">
    <a href="./cameras/">Camera</a>
  </div>
  <img
    src="/assets/images/user-reference/scene-objects/camera_example.jpg"
    alt="Camera example image"
    style="object-position: center 20%"
  />
  MoonRay has several standard cameras (Orthographic, Perspective) as well as several camera shaders used to generate map data (BakeCamera, SphericalCamera).
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./displacement/">Displacement</a>
  </div>
  <img
    src="/assets/images/user-reference/scene-objects/displacement/CombineDisplacement/earChecker.jpg"
    alt="Displacement example image"
    style="object-position: center 20%"
  />
  Displacement shaders are nodes that can displace geometry given an input map and/or displacement amount.
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./display-filters/">DisplayFilter</a>
  </div>
  <img
    src="/assets/images/user-reference/scene-objects/display-filters/displayFilterExample.png"
    alt="Display filter example image"
  />
  DisplayFilters are compositing nodes that can alter pixel values as a post-process in MoonRay.
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./geometry/">Geometry</a>
  </div>
  <img
    src="/assets/images/user-reference/scene-objects/geometry_example.jpg"
    alt="Geometry example image"
  />
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./joint/Joint">Joint</a>
  </div>
  <img
    src="/assets/images/user-reference/scene-objects/joint_example.jpg"
    alt="Joint example image"
  />
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./layer/Layer">Layer</a>
  </div>
  A Layer is an object that associates a Geometry with other scene objects. For instance, you would use this Layer object to relate a Geometry to its Material, or to a LightSet that should affect it.
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./lights/">Light</a>, <a href="./light-set/LightSet">LightSet</a>
  </div>
  <img
    src="/assets/images/user-reference/adaptive-sampling/adaptive.png"
    alt="Light example image"
  />
  Lights in MoonRay are not treated as solid objects, but rather as abstract entities that inject light into the scene. There are 8 types of light supported in MoonRay. A LightSet is a high-level grouping of lights, whose purpose is primarily to specify which lights influence any specific geometry object.
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./light-filters/">LightFilter</a>, <a href="./light-filter-set/LightFilterSet">LightFilterSet</a>
  </div>
  <img
    src="/assets/images/user-reference/scene-objects/light_filter_example.png"
    alt="LightFilter example image"
    style="object-position: center 75%"
  /> 
  LightFilters can be used to alter a light, to give it a different shape, color, etc. As with the LightSet, a LightFilterSet is a high-level grouping of light filters, whose purpose is to specify which light filters influence a specified geometry object.
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./materials/">Material</a>
  </div>
  <img
    src="/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/dispersion_on_example1.png"
    alt="Materials example image"
  />
  Materials produce BSDFs (bidirectional scattering distribution functions) which describe to the integrator how a surface scatters light at a given point and therefore its appearance. MoonRay supports multiple Fresnel models, but mostly uses dielectric (non-metals) and conductor (metals) Fresnel models.
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./maps/">Map</a>
  </div>
  <img
    src="/assets/images/user-reference/scene-objects/maps/ToonMap/nadder.jpg"
    alt="Map example image"
  />
  A map is a textural tool -- an input that can be projected onto a geometry surface. 
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./meta-data/Metadata">MetaData</a>
  </div>
  Metadata is a list of attributes, along with their types and values. It is often used to specify arbitrary image header data.
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./normal-maps/">NormalMap</a>
  </div>
  <img
    src="/assets/images/user-reference/scene-objects/normal_map_example.jpg"
    alt="Normal Map example image"
    style="object-position: center 70%"
  />
  A normal map is a RGB map used to alter the shading normals of a surface to produce a textured, light-responsive effect. MoonRay offers 11 types of normal maps.
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./render-output/">RenderOutput</a>
  </div>
  <img
    src="/assets/images/user-reference/how-to-guides/material-aovs/beauty.png"
    alt="Render Output example image"
  />
  The RenderOutput object is used to specify any output the renderer produces.
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./scene-variables/SceneVariables">SceneVariables</a>
  </div>
  SceneVariables are the global rendering attributes.
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./shadow-set/">ShadowSet</a>
  </div>
  A ShadowSet is a mechanism to suppress light emitted by specified lights from casting shadows off of specified geometry objects.
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./shadow-receiver-set/">ShadowReceiverSet</a>
  </div>
  A ShadowReceiverSet is a mechanism to suppress light cast off of specified caster geometries (or their specified parts) onto specified receiver geometries.
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./trace-set/">TraceSet</a>
  </div>
  A Trace Set is a list of geometries and parts. It is used to specify a set of geometric primitives that a ray can trace. This can be useful in subsurface scattering, when we want to trace rays through geometries that have similar, but different, subsurface materials.
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./user-data/">UserData</a>
  </div>
  An object used to encapsulate arbitrary, user-specified primitive attributes.
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./volumes/">Volumes</a>
  </div>
  <img
    src="/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/baseVolume.png"
    alt="Volumes example image"
    style="object-position: center 30%"
  />
  MoonRay supports both homogenous volumes with <strong>Base Volume</strong>, and heterogeneous volumes with <strong>Vdb Volume</strong>.
</sl-card>
