---
title: About MoonRay
---
# About MoonRay

<span class="define">MoonRay</span> is DreamWorks Animation's path-tracing production renderer, developed in-house and open-sourced in 2023.  It is easy to use and provides artists with fast iterations.  It can be integrated into wide variety of tools such as Houdini, Maya, Katana, Blender, in-house lighting tools, etc., with an appropriate plugin or via the [**hdMoonray**]({{ "/user-reference/tools/hydra/" | absolute_url }}) Hydra render delegate.  MoonRay is provided as a service to our internal clients via our in-house cloud framework [**Arras**]({{ "/getting-started/about/arras" | absolute_url }}).  Not only does this simplify application integration, but it also allows MoonRay to take advantage of massive machine scale distributed rendering.

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
* [OpenColorIO](https://opencolorio.org/) is our color management library
* We use [OpenImageDenoise](https://www.openimagedenoise.org/) as one of our denoising tools
* [OpenEXR](https://openexr.com/en/latest/) is our deep image format
* We use [USD](https://www.pixar.com/usd) as a scene description format (alongside our own rdl)

## Goals

>_Keep all the lanes of all the cores of all the machines busy all the time with meaningful work_ 

<div class="wrap-text-right" markdown="1">
<figure class="with-caption">
  <img src="{{ "/assets/images/getting-started/about/moonray/threads.png" | absolute_url }}">
  <figcaption>
  MoonRay saturating worker threads
  </figcaption>
</figure>
All renderers have personalities, and _"Keep all the lanes..."_ is MoonRay's mantra and our personality.  This is our guiding principle for development.

Our goal was to achieve scalability up to real-time rendering leveraging all of the available hardware.  The need to trace and shade billions of rays implied thin interfaces and no data structure redundancy.  We embraced “Data Oriented Design”, which is a methodology that first grew in the games industry, but we applied it with great success in MoonRay.
</div>  
With MoonRay, we range between 92 - 154 million core-hours for rendering a DreamWorks Feature. 



