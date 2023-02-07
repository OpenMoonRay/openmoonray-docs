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
    src="{{site.baseurl}}/assets/images/user-reference/scene-objects/camera_example.jpg"
    alt="Displacement example image"
    style="object-position: center 20%"
  />
  <i>MoonRay has several standard cameras (Orthographic, Perspective) as well as several camera shaders used to generate map data (BakeCamera, SphericalCamera).</i>
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./displacement/">Displacement</a>
  </div>
  <img
    src="{{site.baseurl}}/assets/images/user-reference/scene-objects/displacement/CombineDisplacement/earChecker.jpg"
    alt="Displacement example image"
    style="object-position: center 20%"
  />
  <i>Displacement shaders are nodes that can displace geometry given an input map and/or displacement amount.</i> 
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./display-filters/">DisplayFilter</a>
  </div>
  <img
    src="{{site.baseurl}}/assets/images/user-reference/scene-objects/display-filters/displayFilterExample.png"
    alt="Display filter example image"
  />
  <i>DisplayFilters are compositing nodes that can alter pixel values as a post-process in MoonRay.</i>
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./geometry/">Geometry</a>
  </div>
  <img
    src="{{site.baseurl}}/assets/images/user-reference/scene-objects/geometry_example.jpg"
    alt="Geometry example image"
  />
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./joint/">Joint</a>
  </div>
  <img
    src="{{site.baseurl}}/assets/images/user-reference/scene-objects/joint_example.jpg"
    alt="Geometry example image"
  />
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./materials/">Material</a>
  </div>
  <img
    src="{{site.baseurl}}/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/dispersion_on_example1.png"
    alt="Materials example image"
  />
  <i>Materials produce BSDFs (bidirectional scattering distribution functions) which describe to the integrator how a surface scatters light at a given point and therefore its appearance. MoonRay supports multiple Fresnel models, but mostly uses dielectric (non-metals) and conductor (metals) Fresnel models.</i>
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./maps/">Map</a>
  </div>
  <img
    src="{{site.baseurl}}/assets/images/user-reference/scene-objects/maps/ToonMap/nadder.jpg"
    alt="Map example image"
  />
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./meta-data/">MetaData</a>
  </div>
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./normal-map/">NormalMap</a>
  </div>
  <img
    src="{{site.baseurl}}/assets/images/user-reference/scene-objects/normal_map_example.jpg"
    alt="Normal Map example image"
    style="object-position: center 70%"
  />
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./layer/">Layer</a>
  </div>
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./lights/">Light</a>, <a href="./light-set/LightSet">LightSet</a>
  </div>
  <img
    src="{{site.baseurl}}/assets/images/user-reference/adaptive-sampling/adaptive.png"
    alt="Light example image"
  />
  <i>Lights in MoonRay are not treated as solid objects, but rather as abstract entities that inject light into the scene. There are 8 types of light supported in MoonRay. A LightSet is a high-level grouping of lights, whose purpose is primarily to specify which lights influence any specific geometry object. </i>
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./light-filters/">LightFilter</a>, <a href="./light-filter-set/LightFilterSet">LightFilterSet</a>
  </div>
  <img
    src="{{site.baseurl}}/assets/images/user-reference/scene-objects/light_filter_example.png"
    alt="LightFilter example image"
    style="object-position: center 75%"
  />
  
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./render-output/">RenderOutput</a>
  </div>
  <img
    src="{{site.baseurl}}/assets/images/user-reference/how-to-guides/material-aovs/beauty.png"
    alt="Render Output example image"
  />
  <i>The RenderOutput object is used to specify any output the renderer produces.</i>
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./scene-variables/SceneVariables">SceneVariables</a>
  </div>
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./shadow-set/">ShadowSet</a>
  </div>
  <i> A ShadowSet is a mechanism to suppress light emitted by specified lights from casting shadows off of specified geometry objects. </i>
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./shadow-receiver-set/">ShadowReceiverSet</a>
  </div>
  <i> A ShadowReceiverSet is a mechanism to suppress light cast off of specified caster geometries (or their specified parts) onto specified receiver geometries. </i>
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./trace-set/">TraceSet</a>
  </div>
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./user-data/">UserData</a>
  </div>
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./volumes/">Volumes</a>
  </div>
  <img
    src="{{site.baseurl}}/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/baseVolume.png"
    alt="Volumes example image"
    style="object-position: center 30%"
  />
</sl-card>
