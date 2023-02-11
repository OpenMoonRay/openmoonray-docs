---
title: About MoonRay
---
# About MoonRay

MoonRay is DreamWorks Animation's path-tracing production renderer, developed in-house and open-sourced in 2023.  It is easy to use and provides artists with fast iterations.  It can be integrated into wide variety of tools such as Houdini, Maya, Katana, Blender, in-house lighting tools, etc., with an appropriate plugin or via the [`hdMoonray`]({{site.baseurl}}/user-reference/tools/hydra/) Hydra render delegate.  MoonRay is provided as a service to our internal clients via our in-house cloud framework ["Arras"]({{site.baseurl}}/about/arras/).  Not only does this simplify application integration, but it also allows MoonRay to take advantage of massive machine scale distributed rendering.

MoonRay has rendered all of DreamWork's in-house features and shorts since [How To Train Your Dragon: The Hidden World](https://dreamworksanimation.com/movies/how-to-train-your-dragon-the-hidden-world).

## Structure

MoonRay was developed from scratch, leveraging state of the art open source components where appropriate.  No studio legacy code was used.  The architecture is cleanly divided across three different APIs:

- The rendering API for clients to initiate rendering,
- The shading API for the development of pluggable shaders or materials, and 
- The procedural API for the development of geometry generators.

MoonRay uses best-in-class open source libraries.  
* [Embree](https://www.embree.org/) is our ray-intersection engine
* We use [OpenImageIO](http://openimageio.org/) to generically handle different image file formats
* [OpenSubdiv](https://graphics.pixar.com/opensubdiv/docs/intro.html) is an open source geometry library
* [OpenVDB](https://www.openvdb.org/) is a volumetric representational format that we open sourced at DreamWorks
## Goals

All renderers have personalities.  _“Keep all the lanes of all the cores of all the machines busy all the time with meaningful work”_ is MoonRay's mantra and our personality.  This is our guiding principle for development.

Our goal was to achieve scalability up to real-time rendering leveraging all of the available hardware.  The need to trace and shade billions of rays implied thin interfaces and no data structure redundancy.  We embraced “Data Oriented Design”, which is a methodology that first grew in the games industry, but we applied it with great success in MoonRay.

With MoonRay, we range between 92 - 154 million core-hours for rendering a DreamWorks Feature. 

## A brief history

MoonRay was started as an experiment in about 2013 to produce an interactive renderer for product design with an effort called Nova.  After the experiment, our VFX Supervisor on [How To Train Your Dragon: The Hidden World](https://dreamworksanimation.com/movies/how-to-train-your-dragon-the-hidden-world) saw the results achieved with Nova and made an impassioned plea for MCRT.  

Here is the test scene he set up to convince the execs. He wanted to be sure that we knew this was only a test and not final surfacing, lighting, rigging, etc.

![MoonRay Test]({{ "/assets/images/getting-started/about/moonray/about_moonray.png" | absolute_url }})

This convinced the execs that the look could be achieved with MoonRay. And could handle the complexity of dense foliage, shading complexity, the ease of lighting set up, and the speed of rendering. His plea for MCRT was green-lit, and so MoonRay continues rendering features at DreamWorks today.




