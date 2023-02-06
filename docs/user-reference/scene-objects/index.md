---
title: MoonRay Scene Classes
---
# Scene Objects

We define "scene objects" as the various constructs that describe a scene. This section includes attribute descriptions for all of these scene objects, along with some contextual information and examples. 

Scene objects in MoonRay have several canonical types and include the following:

<sl-card class="card-header">
  <div slot="header">
    <a href="./cameras/">Camera</a>
  </div>
  MoonRay has several standard cameras (Orthographic, Perspective) as well as several camera shaders used to generate map data (BakeCamera, SphericalCamera). 
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
  Displacement shaders are nodes that can displace geometry given an input map and/or displacement amount. 
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./display-filters/">DisplayFilter</a>
  </div>
  <img
    src="{{site.baseurl}}/assets/images/user-reference/scene-objects/display-filters/displayFilterExample.png"
    alt="Display filter example image"
  />
  DisplayFilters are compositing nodes that can alter pixel values as a post-process in MoonRay.
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./geometry/">Geometry</a>
  </div>
  <img
    src=""
    alt="Geometry example image"
  />
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./joint/">Joint</a>
  </div>
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./materials/">Material</a>
  </div>
  <img
    src="{{site.baseurl}}/assets/images/user-reference/how-to-guides/look-dev-transparent-surfaces/dispersion_on_example1.png"
    alt="Materials example image"
  />
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./maps/">Map</a>
  </div>
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
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./layer/">Layer</a>
  </div>
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./lights/">Light</a>
  </div>
  <img
    src="{{site.baseurl}}/assets/images/user-reference/scene-objects/light_example.png"
    alt="Light example image"
  />
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./light-filters/">LightFilter</a>
  </div>
  <img
    src="{{site.baseurl}}/assets/images/user-reference/scene-objects/light-filters/BarnDoorLightFilter/image10.png"
    alt="LightFilter example image"
  />
  
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./render-output/">RenderOutput</a>
  </div>
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./scene-variables/">SceneVariables</a>
  </div>
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./shadow-set/">ShadowSet</a>
  </div>
</sl-card>

<sl-card class="card-header">
  <div slot="header">
    <a href="./shadow-receiver-set/">ShadowReceiverSet</a>
  </div>
</sl-card>
