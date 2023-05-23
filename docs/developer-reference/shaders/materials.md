---
title: Writing Material Shaders
---
# Writing Material Shaders
This page is work-in-progress...

### Overview
MoonRay provides the BsdfBuilder API for writing new Material shaders.  The goal of this API is to provide a relatively simple abstraction for describing an energy-conserving MoonRay
material without requiring direct low-level management and configuraion of MoonRays internal constructs, whose construction and management can become fairly complicated as the Material's
complexity grows.

Examples of these internal low-level constructs include the Bsdf class, the BsdfLobe classes, and Fresnel classes. A fully configured BSDF for a complex Material may include dozens of such
constructs, each allocated in a memory arena and carefully weighted and wrapped together to ensure energy conservation. The BsdfBuilder API provides high-level constructs that describe
each of MoonRay's supported shading models, and handles their construction, weighting, Fresnel behavior and energy conservation.

Each of MoonRay's supported shading models is exposed in the form of a `BsdfComponent`. These components are added in an ordered fashion using the BsdfBuilder, which keeps track of
previously added components and provides automatic weighting and Fresnel behavior tracking.

At the time of this writing MoonRay supports the following shading models:

```
MirrorBRDF                           LambertianBRDF              HairRBRDF
MirrorBTDF                           LambertianBTDF              HairTRTBRDF
MirrorBSDF                           FlatDiffuseBRDF             HairTTBTDF
MicrofacetAnisotropicClearcoat       OrenNayarBRDF               HairTRRTBRDF
MicrofacetIsotropicClearcoat         DipoleDiffusion             GlitterFlakeBRDF
MirrorClearcoat                      NormalizedDiffusion         StochasticFlakesBRDF
MicrofacetAnisotropicBRDF            RandomWalkSubsurface        ToonBRDF
MicrofacetIsotropicBRDF              FabricBRDF                  ToonSpecularBRDF
MicrofacetAnisotropicBTDF            VelvetBRDF                  HairToonSpecularBRDF
MicrofacetIsotropicBTDF              EyeCausticBRDF
MicrofacetAnisotropicBSDF            HairDiffuseBSDF             
MicrofacetIsotropicBSDF              HairBSDF
```

The BsdfBuilder API and associated components are implemented in both scalar and vector flavors.

### The Material class
Many of the topics covered in the general [Writing Shaders]({{ "/developer-reference/shaders/" | absolute_url }}) page apply to Material shaders, and it is advised that you look there first.
Material shaders derive from `scene_rdl2::rdl2::Material` and as such have a constructor, destructor, and update() function. The main workhorse of a Material shader is the shade() function.

The shade() function is responsible for configuring the BSDF using the BsdfBuilder API.
Note: it is critical that shaders do not allocate heap memory in the shade function, however if needed memory can be allocated in the arena provided by the shading::TLState.

