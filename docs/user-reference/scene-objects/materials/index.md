---
title: MoonRay Materials
---

<!-- To set variables and metadata, such as a title and layout, for a page or post on your site, you can add YAML front matter to the top of any Markdown or HTML file. For more information, see "Front Matter" in the Jekyll documentation.  -->

# Materials
![Materials]({{ "/assets/images/user-reference/scene-objects/materials/materials.jpg" | absolute_url }})

<!-- All topics>

<!-- Concept info here: Explain the background and context of a this subject. --> 
>Materials produce [BSDFs](linkToShadingAPI?) (bidirectional scattering distribution functions) which describe to the integrator how a surface scatters light at a given point and therefore its appearance. A material can produce one or many BSDFs depending on how complex the surface is.

Broadly speaking BSDFs can be broken down into two major categories: <span class="define">_BRDFs_</span> (reflection) and <span class="define">_BTDFs_</span> (transmission). How much light is reflected versus transmitted is governed by the Fresnel equations. MoonRay supports multiple Fresnel models, but mostly uses <span class="define">_dielectric_</span> (non-metals) and <span class="define">_conductor_</span> (metals) Fresnel models.

Each material automatically creates the appropriate BSDFs and Fresnel models according to its input.


<!-- Reference info here -->
## [Dwa family of materials](dwa)
>The Dwa family of materials (prefixed with **Dwa**) is a suite of materials that are compatible and can be layered and combined in various ways. 

### Layering
MoonRay accomplishes layering through parameter blending. This means each layerable material is the same material under the hood and they share all the same parameters. Each specific Dwa material is a streamlined version of the DwaBaseMaterial and designed to achieve a specific look and work right out of the box. These streamlined materials are designed with ease of use in mind and only provide relevant parameters.

The key benefit of parameter blending is that it is incredibly fast and efficient. A complex multi-layer material gets resolved to a single new material. The parameters are intelligently blended so layering works even for dissimilar materials.

## [Hair materials](hair)
>Hair materials produce a separate type of BSDF called a <span class="define">BCSDF</span> (bidirectional cylindrical scattering distribution function). A BCSDF models the reflection and transmission of light through a cylindrical fiber rather than a flat plane.

Hair materials are designed solely to be used on curve geometry to render hair, fur, or other fibers. They use an entirely different shading model and as such are not compatible with the Dwa materials. However, they are layerable with each other.

## Other materials
[RaySwitchMaterial](RaySwitchMaterial)  
Use to switch the shader network when secondary rays are evaluated for anything like shadows, transmission, or reflections

[SwitchMaterial](SwitchMaterial)  
Use to switch between up to 64 different other materials using the choice parameter

[UsdPreviewSurface](UsdPreviewSurface)  
Usd specification compliant material

## Other material topics

### Material Assignments
Materials are assigned via a [Layer]({{ "/user-reference/scene-objects/layer/Layer/" | absolute_url }}) assignment. At a minimum a geometry and material must be provided and by default the material will be lit by all lights in the scene. Further refinement of the material assignment can be achieved by providing a list of part names on the geometry, specifying a lightset, etc. Of note, displacement is applied separately from the material assignment.


### Normals
Most materials accept a normal map as input, however, there are exceptions like the HairMaterial_v3 which only uses the geometric normals of the curves it is applied to. If a normal map is not supplied, then the material will either use explicit normals if they have been provided as an attribute on the geometry or the geometric normals.

### Thin Geometry

Use thin geometry if you want the behavior of a thin surface, like a bubble or a balloon filled with air. This will essentially let light pass through without bending. It correctly handles _IORs_ (index of refraction) when exiting the surface via back-sided polygons.   

Thin geometry is also useful for planar or open surfaces modeled without thickness, eg. a leaf modeled without thickness or windows modeled single-sided.  

When something hits the back-side of a surface, MoonRay treats that ray as if it is coming from the inside of a surface and wants to correctly invert the IORs. When designated as _thin_geometry_, MoonRay treats it as if it is hitting a front-facing surface and does not invert IORs and does not bend the ray since any bending will be corrected upon exiting from the infinitely thin surface.   

Note: that _roughness_ will have no effect when _thin_geometry_ is on.

### Presence
Sometimes you need to cut out or punch holes in a material so that it is not *present* in that region. For example a leaf on a flat card or a grate with many small holes. To accomplish this the _presence_ attribute exists. This is not the same idea as opacity and it is intended to be used in a binary manner, the surface is either *present* or *not present*.

### [Nested Dielectrics]({{ "/user-reference/how-to-guides/overlapping-dielectrics/" | absolute_url }})
Special care must be taken when rendering _nested dielectrics_, or refractive objects that share a boundary and have different _IORs_ (index of refraction) such as water in a glass cup with a partially submerged ice cube. There is no gap of air between the objects like there is in most rendering scenarios so the refracted light rays must keep track of their IOR and the object priority. This is accomplished via the _priority_ attribute which only needs to be set in these scenarios.

### Caustics
A term for any light path that travels from a light source, to a specular surface, to a diffuse surface, to the camera. More commonly thought of as light rays focused by the curvature of a refractive or reflective surface such as the light pattern on the bottom of a pool or through a glass cup. Caustics by default are not enabled because of their rendering cost. However, in order to render accurate shadows cast by a refractive object or the focusing of light caused by a refractive or reflective surface _casts_caustics_ must be enabled on the specular material.
