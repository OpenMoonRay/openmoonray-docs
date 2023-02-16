---
title: MoonRay Normal Maps
---
# NormalMaps

NormalMaps create and manipulate surface normals, which change the direction a surface faces for the purpose of lighting. NormalMaps do not change the shape or silhouette of the geometry.

When viewing the attribute types in these documents, note that some inputs are NORMALMAP while others are RGB. NormalMaps are separated from _Map_ shaders-- a user must explicitly convert from one type to another using [RgbToNormalMap](RgbToNormalMap), to ensure that the manipulating colors vs. normals is intentional. 

NormalMap shaders in MoonRay include:

[CombineNormalMap](CombineNormalMap)  
[DistortNormalMap](DistortNormalMap)  
[ImageNormalMap](ImageNormalMap)  
[ProjectCameraNormalMap](ProjectCameraNormalMap)  
[ProjectPlanarNormalMap](ProjectPlanarNormalMap)  
[ProjectTriplanarNormalMap](ProjectTriplanarNormalMap)  
[ProjectTriplanarNormalMap_v2](ProjectTriplanarNormalMap_v2)  
[RandomNormalMap](RandomNormalMap)  
[RgbToNormalMap](RgbToNormalMap)  
[SwitchNormalMap](SwitchNormalMap)  
[TransformNormalMap](TransformNormalMap)  
