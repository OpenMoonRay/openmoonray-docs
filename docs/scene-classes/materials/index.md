---
title: Materials

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

<!-- To set variables and metadata, such as a title and layout, for a page or post on your site, you can add YAML front matter to the top of any Markdown or HTML file. For more information, see "Front Matter" in the Jekyll documentation.  -->

# Materials
<!-- All topics>

<!-- Concept info here: Explain the background and context of a this subject. --> 
>Materials produce [BSDFs](linkToShadingAPI?) (bidirectional scattering distribution functions) which describe to the integrator how a surface scatters light at a given point and therefore its appearance. A material can produce one or many BSDFs depending on how complex the surface is.

Broadly speaking BSDFs can be broken down into two major categories: BRDFs (reflection) and BTDFs (transmission). How much light is reflected versus transmitted is governed by the Fresnel equations. MoonRay supports multiple Fresnel models, but mostly uses dielectric (non-metals) and conductor (metals) Fresnel models.

Each material automatically creates the appropriate BSDFs and Fresnel models according to its input.


<!-- Reference info here -->
## [Dwa family of materials](dwa)
>The Dwa family of materials (prefixed with **Dwa**) is a suite of materials that are compatible and can be layered and combined in various ways. 

### Layering
MoonRay accomplishes layering through parameter blending. This means each layerable material is the same material under the hood and they share all the same parameters. Each specific Dwa material is a streamlined version of the DwaBaseMaterial and designed to achieve a specific look and work right out of the box. These streamlined materials are designed with ease of use in mind and only provide relevant parameters.

The key benefit of parameter blending is that it is incredibly fast and efficient. A complex multi-layer material gets resolved to a single new material. The parameters are intelligently blended so layering works even for dissimilar materials.

## [Hair materials](hair)
>Hair materials produce a separate type of BSDF called a BCSDF (bidirectional cylindrical scattering distribution function). A BCSDF models the reflection and transmission of light through a cylindrical fiber rather than a flat plane.

Hair materials are designed solely to be used on curve geometry to render hair, fur, or other fibers. They use an entirely different shading model and as such are not compatible with the Dwa materials. However, they are layerable with each other.

## Other materials
* MacroFlakeMaterial
* AxfMaterial
* BaseMaterial
* GlitterFlakeMaterial_v2
* MeasuredMaterial
* RaySwitchMaterial
* SwitchMaterial
* UsdPreviewSurface

## Other material topics
### [Presence](linkToPresence)
Sometimes you need to cut out or punch holes in a material so that it is not *present* in that region. For example a leaf on a flat card or a grate with many small holes. To accomplish this the **presence** attribute exists. This is not the same idea as opacity and it is intended to be used in a binary manner, the surface is either *present* or *not present*.
### Nested Dielectrics

### Caustics

### Material Assignments
