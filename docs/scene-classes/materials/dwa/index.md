---
title: Dwa Family of Materials

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

<!-- To set variables and metadata, such as a title and layout, for a page or post on your site, you can add YAML front matter to the top of any Markdown or HTML file. For more information, see "Front Matter" in the Jekyll documentation.  -->

# Dwa Family of Materials
<!-- All topics>

<!-- Concept info here: Explain the background and context of a this subject. --> 
>The **Dwa** materials represent a family of physically-based materials that are designed to be simple and easy to use and can achieve a wide variety of looks.

These materials are energy-conserving, except the [DwaToonMaterial](DwaToonMaterial) which can be forced to not be energy conserving for non-photoreal looks. The rest of the materials make it very easy to create realistic, well-behaved looks, and it is difficult to create looks that behave poorly or that do not look physically plausible.

It is best to feed the materials with physically-inspired values in order to best leverage the underlying models and benefits of energy conservation.

Under the hood, the **Dwa** family of materials are all built from the same core material. This helps provide consistency in terms of behavior and user interface across all materials. It also allows for the ability to layer any of the materials, regardless of which model, over any other material using a mask to control coverage. Specifically, layering is achieved through parameter blending.

## Standard Materials
The following materials are considered the standard materials to recreate any real-world surface:   

| Name | Description |
| ---- | ----------- |
| [DwaSolidDielectricMaterial](DwaSolidDielectricMaterial) | A streamlined material specifically targeted for modeling solid dielectric surfaces (anything that is non-metallic and non-refractive, eg. plastic, wood, stone, ceramic, candle wax). | 
| [DwaRefractiveMaterial](DwaRefractiveMaterial) | A streamlined material specifically targeted for modeling refractive surfaces (eg. glass, water, gemstones). | 
| [DwaMetalMaterial](DwaMetalMaterial) | A streamlined material specifically targeted for modeling metallic surfaces. | 
| [DwaSkinMaterial](DwaSkinMaterial) | A streamlined material specifically targeted for modeling skin, with multiple specular highlights. | 
| [DwaFabricMaterial](DwaFabricMaterial) | A streamlined material specifically targeted for modeling fabric surfaces. | 
|[DwaVelvetMaterial_v2](DwaVelvetMaterial_v2) | A streamlined material specifically targeted for modeling velvet surfaces. | 
| [DwaEmissiveMaterial](DwaEmissiveMaterial) | A streamlined material specifically targeted for modeling emissive surfaces that emit light. | 

## Specialty Materials
[DwaBaseMaterial](DwaBaseMaterial) is the core material with all attributes exposed. Although, we recommend to avoid DwaBaseMaterial itself and opt for one of the other _streamlined_ materials (DwaMetal, DwaRefractive, DwaSolidDielectric, etc) that best matches the type of material desired.  They are simpler to use and there is less danger of creating a result that is implausible by mixing two different models together (eg. "plasticky metal").

[DwaToonMaterial](DwaToonMaterial) is a highly customized version of DwaBaseMaterial with the addition of the classic toon ramp functionality. It allows for control of how an objects shades and gives the user complete control over normals and surface illumination — even surfaces that face away from the light.

## Utility Materials
Additionally, the following utility materials are provided: 

| Name | Description |
| ---- | ----------- | 
| [DwaLayerMaterial](DwaLayerMaterial) | Layers two or more materials together, one _over_ the other, using a mask to control the coverage. |
| [DwaTwoSidedMaterial](DwaTwoSidedMaterial) | Allows for assigning two different materials to the front and back of _thin geometry_, such as a playing card. |
| [DwaSwitchMaterial](DwaSwitchMaterial) | Allows for switching between two materials anywhere within a network, based on a `choice` attritbute. |
| [DwaMixMaterial](DwaMixMaterial) | Allows for switching between materials, but also blends adjacent materials when the `mix` value is in-between. |
| [DwaColorCorrectMaterial](DwaColorCorrectMaterial) | Provides common color-correction controls for making _global_ adjustments to an existing material. |
| [DwaAdjustMaterial](DwaAdjustMaterial) | For more generalized adjustments based on a predetermined set of primitive variables set on the mesh. |


<!-- Reference info here -->
## Shading Components 
### Specular Component
The specular component can represent dielectric and/or metallic specular, depending on which material is being used.

For dielectric models: the reflectance is primarily controlled via refractive index. It is non-mappable and should generally be set based on the physical properties of the type of material being represented.

For metals: the reflectance is primarily controlled via metallic color and metallic edge color. With metals, the reflectance is king (no transmission, no diffuse), so any colors are generally valid. Having said that, it doesn't hurt to start with values that are somewhat in the physical realm.

### Clearcoat Component
### Transmission Component
### Diffuse / Subsurface Scattering Component
### Fuzz Component
### Emission Component

## Layering 
>More details about layering and parameter blending

