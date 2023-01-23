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

[DwaToonMaterial](DwaToonMaterial) is a highly customized version of DwaBaseMaterial with the addition of the classic toon ramp functionality. It allows for complete control of how an object shades and gives the user control over normals and surface illumination — even surfaces that face away from the light. This material is not strictly physically-based and will cause energy conservation issues.

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
Each shading component represents the different ways light can interact with a surface and they each generate their own separate BSDF lobe. They are listed here in order from top to bottom in the same order in which they receive lighting contribution from first to last.

### Fuzz Component
The fuzz component represents a virtual fuzz layer that is applied on top of the underlying material. It mimics a layer of particles or fibers on top of the material than catches lights only around glancing angles. It can be a useful lobe to create velvet, suede or even dust and peach-fuzz effects. This lobe will correctly distribute the remaining non-reflected energy back to the layers underneath. In the Dwa material system it sits on _top_ of all the other lobes.

### Clearcoat Component
The clearcoat component represents a virtual clearcoat or varnish layer that is applied on top of the underlying material. It has its own `clearcoat refractive index` (it is a different material altogether) and also supports absorption when `clearcoat thickness` > 0 and `clearcoat attenuation color` is non-white. The clearcoat component attenuates all other components.

### Specular Component
The specular component can represent dielectric and/or metallic specular, depending on which material is being used.

For dielectric models: the reflectance is primarily controlled via refractive index. It is non-mappable and should generally be set based on the physical properties of the type of material being represented.

For metals: the reflectance is primarily controlled via metallic color and metallic edge color. With metals, the reflectance is king (no transmission, no diffuse), so any colors are generally valid. Having said that, it doesn't hurt to start with values that are somewhat in the physical realm.

### Diffuse / Subsurface Scattering Component
Diffuse and subsurface are a single component. In order to enable subsurface scattering, simply set `scattering radius` > 0. When `scattering radius` is 0, Lambertian diffuse is used. Similarly, when `diffuse roughness` is 0 Lambertian diffuse is used, but if `diffuse roughness` is > 0 then the Oren-Nayar diffuse model is used.

### Transmission Component
The transmission component is useful for modeling refractive materials such as glass, clear plastic, water or other liquid, etc. The refractive index and roughness values are shared between the specular and transmission component by default, however, they can be overidden to be independent. 

## Layering 
The DwaLayerMaterial supports A over B compositing where the material specified with `material_A` is composited _over_ `material_B` using the `mask` to control the coverage. For efficiency, the material uses _parameter blending_ where, instead of fully evaluating both materials and blending the results, the individual parameters are blended and then the results are used to evaluate the material once.  

Due to the fact that only one material is actually evaluated there are a handful of parameters that cannot be blended and have to be assigned a single value. In these cases the DwaLayerMaterial provides _fallback attributes_ that can be set if there is a conflict between the child materials.


