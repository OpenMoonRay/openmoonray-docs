---
title: MoonRay Map Shaders
---
# Maps

Map shaders read and create colors and textures to link into Material shaders.

Maps are separated from _NormalMap_ and _Displacement_ shaders-- a user must explicitly convert from one type to another using a utility like [NormalToRgbMap](NormalToRgbMap), to ensure that the manipulating colors vs. normals is intentional. A NormalMap cannot be bound to an input meant for a Map, or vice-versa.


## Images and Procedural Colors
Read and create colors.

[CheckerboardMap](CheckerboardMap)  
[ConstantColorMap](ConstantColorMap)  
[ConstantScalarMap](ConstantScalarMap)  
[CurvatureMap](CurvatureMap)  
[DirectionalMap](DirectionalMap)  
[GradientMap](GradientMap)  
[HairColorPresetsMap](HairColorPresetsMap)  
[HairMap](HairMap)  
[ImageMap](ImageMap)  
[NoiseMap_v2](NoiseMap_v2)  
[NoiseWorleyMap_v2](NoiseWorleyMap_v2)  
[OpenVdbMap_v2](OpenVdbMap_v2)  
[RampMap](RampMap)  
[RandomMap](RandomMap)  
[ToonMap](ToonMap)  
[WireframeMap](WireframeMap)  
[UsdUVTexture](UsdUVTexture)  

## Attributes and Primvars
Read information from geometry.

[AttributeMap](AttributeMap)  
[TransformSpaceMap](TransformSpaceMap)  
[UsdPrimvarReader_float](UsdPrimvarReader_float)  
[UsdPrimvarReader_float2](UsdPrimvarReader_float2)  
[UsdPrimvarReader_float3](UsdPrimvarReader_float3)  
[UsdPrimvarReader_int](UsdPrimvarReader_int)  
[UsdPrimvarReader_normal](UsdPrimvarReader_normal)  
[UsdPrimvarReader_point](UsdPrimvarReader_point)  
[UsdPrimvarReader_vector](UsdPrimvarReader_vector)  
[UsdTransform2d](UsdTransform2d)  

## Mixing and Color Correction
Mix, pick, manipulate color signals.

[BlendMap](BlendMap)  
[ClampMap](ClampMap)  
[ColorCorrectContrastMap](ColorCorrectContrastMap)  
[ColorCorrectGainOffsetMap](ColorCorrectGainOffsetMap)  
[ColorCorrectGammaMap](ColorCorrectGammaMap)  
[ColorCorrectHueShiftMap](ColorCorrectHueShiftMap)  
[ColorCorrectMap](ColorCorrectMap)  
[ColorCorrectSaturationMap](ColorCorrectSaturationMap)  
[ColorCorrectTMIMap](ColorCorrectTMIMap)  
[LayerMap](LayerMap)  
[LODMap](LODMap)  
[OpMap](OpMap)  
[RemapMap](RemapMap)  
[SwitchColorMap](SwitchColorMap)  
[SwitchFloatMap](SwitchFloatMap)  

## Projection and UVs
Create and manipulate UVs, or textures that don't need UVs.

[HairColumnMap](HairColumnMap)  
[ProjectCameraMap](ProjectCameraMap)  
[ProjectCameraMap_v2](ProjectCameraMap_v2)  
[ProjectCylindricalMap](ProjectCylindricalMap)  
[ProjectPlanarMap](ProjectPlanarMap)  
[ProjectSphericalMap](ProjectSphericalMap)  
[ProjectTriplanarMap_v2](ProjectTriplanarMap_v2)  
[ProjectTriplanarUdimMap](ProjectTriplanarUdimMap)  
[UVTransformMap](UVTransformMap)  

## Conversion Utilities
Transform data between formats.

[FloatToRgbMap](FloatToRgbMap)  
[HsvToRgbMap](HsvToRgbMap)  
[NormalToRgbMap](NormalToRgbMap)  
[RgbToFloatMap](RgbToFloatMap)  
[RgbToHsvMap](RgbToHsvMap)  
[RgbToLabMap](RgbToLabMap)  

## Other Utilities

[AxisAngleMap](AxisAngleMap)  
[DebugMap](DebugMap)  
[DeformationMap](DeformationMap)  
[ExtraAovMap](ExtraAovMap)  

## Deprecated Map Shaders

In the course of supporting productions, certain maps need major interface additions or changes. In cases where these changes would break in-progress productions, entirely new maps are created for future use, often with a **_v2** suffix. The following maps are not actively supported:

[ColorCorrectNukeMap](ColorCorrectNukeMap)  
[ColorCorrectHsvMap](ColorCorrectHsvMap)  
[ColorCorrectLegacyMap](ColorCorrectLegacyMap)  
[ListMap](ListMap)  
[OpenVdbMap](OpenVdbMap)  
[ProjectTriplanarMap](ProjectTriplanarMap)  

## Development

[Writing Map Shaders]({{ "/developer-reference/shaders/maps" | absolute_url }})
