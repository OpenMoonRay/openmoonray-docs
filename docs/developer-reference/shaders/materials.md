---
title: Writing Material Shaders
---
# Writing Material Shaders
This page is work-in-progress...

### Terminology
First we'll quickly cover some of the high-level terminology and concepts involved in writing a Material shader for MoonRay.

In MoonRay a **BSDF** (Bidirectional Scattering Distribution Function) describes all of the ways light can interact with a surface,
and a Material shader is responsible for configuring the BSDF.

Let's consider the case where some amount of energy is emitted from a light source and travels through a scene until it strikes some area on a surface.
Depending on the properties of the surface's material some portion of that light may be immediately reflected in one more more directions, while another portion of light may enter
the medium and be absorbed never to escape.  Yet another portion of light may enter the medium, be refracted in one or more directions, and continue traveling through the
medium until it exits the medium where it is again refracted and continues travelling through the scene.

In this example, we have described 3 distinct light-surface interactions, or behaviors: reflection, absorption and transmittance.

MoonRay represents the different behaviors internally via several different types of `BsdfLobe` classes. Each "lobe" represents one type of interaction (eg. reflection or transmission), and
the lobes themselves have individual properties.  For example, some lobes have a scalar property named "roughness" which describes how light is scattered in different directions
as it is reflected or transmitted.  Some lobes have a color property named "albedo" which describes the portion of light that is reflected or transmitted versus the portion
that is absorbed by the medium.

The `Bsdf` class represents a collection of BsdfLobes and therefore describes all of the different ways light can interact with a surface.

Both the `Bsdf` and `BsdfLobe` classes are internal constructs that MoonRay's integrator interacts with, but the shader writer does not typically work with them directly.
Instead, a material shading API is provided as a layer of abstraction - allowing the shader writer to describe the desired behaviors (shading models), while allowing the implementation details
of these models to remain internal to the renderer. They are mentioned here as this terminology is likely familiar for those who have worked with other renderers.

These different behaviors are exposed to the shader writer in the form of a set of `BsdfComponents`, each representing some shading model.
The shader writer creates a set of BsdfComponents to describe the desired behaviors and adds them using the `BsdfBuilder`, which is then responsible for actually constructing the internal BsdfLobes and
adding them to the Bsdf.  These internal constructs are all created within a managed memory arena at shading time. The BsdfBuilder also handles creating the appropriate Fresnel constructs
and manages weighting the lobes to ensure energy conservation.  This behavior can be overridden if custom weighting or non-physical behavior is desired, and in fact because MoonRay is open source
the BsdfBuilder API can be bypassed entirely - but this is not recommended.

The goal of the `BsdfBuilder` shading API is to provide a relatively simple layer of abstraction between the desired shading models and the often complex underlying internal constructs
that ensure energy conservation and implement those behaviors. All of the [Dwa Family of Materials]({{ "/user-reference/scene-objects/materials/dwa" | absolute_url }}) that are included
with MoonRay are built using the BsdfBuilder API.

### The shade() function
work-in-progress...

### BsdfComponents and the BsdfBuilder API
Construction of a BsdfComponent should be done on the stack, not the heap. Each component is only needed temporarily as it simply serves as a part of the "recipe" for the desired combination of shading models.

Example snippet:
```c++
// I'd like a gray Lambertian diffuse reflection model, please...
const LambertianBRDF my_diffuse(state.getN(), math::Color(0.22f, 0.22f, 0.22f));

// add it to the BSDF, with 100% weight
bsdfBuilder.addLambertianBRDF(my_diffuse,
                              1.0f,                           // weight
                              ispc::BSDFBUILDER_PHYSICAL,     // use physical behavior
                              aovDiffuse);                    // label for LPE aovs
```

Note: it is critical that shader writers do not allocate memory at shade time. If needed, memory can be allocated in the arena provided by the shading::TLState. See below for more information.

Some BsdfComponents have multiple constructors which alter their behavior.

Example snippet:
```c++
// dielectric specular reflection
const MicrofacetIsotropicBRDF refl_dielectric(state.getN(),
                                              1.5f,                              // eta
                                              0.2f,                              // roughness
                                              ispc::MICROFACET_DISTRIBUTION_GGX,
                                              ispc::MICROFACET_GEOMETRIC_SMITH);

// metallic specular reflection
const MicrofacetIsotropicBRDF refl_metallic(state.getN(),
                                            math::Color(0.56f, 0.59f, 0.57f),    // reflectivity
                                            math::Color(0.86f, 0.99f, 0.92),     // edge tint
                                            0.2f,                                // roughness
                                            ispc::MICROFACET_DISTRIBUTION_GGX,
                                            ispc::MICROFACET_GEOMETRIC_SMITH);
```



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

### Examples
Coming soon
