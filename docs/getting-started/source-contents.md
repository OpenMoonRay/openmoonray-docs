---
title: What's Included?
---
# What's Included?

The open source release contains the following pieces of technology:

- [MoonRay]({{ "/getting-started/about/moonray" | absolute_url }}): path-tracing renderer
- [Scene Object Classes]({{ "/user-reference/scene-objects" | absolute_url }}): materials, geometry, lights, cameras, and other renderer plug-ins
- [HdMoonRay]({{ "/user-reference/tools/hydra" | absolute_url }}): the hydra plugin for MoonRay
- [Arras]({{ "/getting-started/about/arras/" | absolute_url }}): execution and distribution framework, used to integrate MoonRay into applications as well as provide multi-machine rendering

The source is contained in multiple Git repositories. The **openmoonray** repository contains the top-level CMake build files and uses submodules to link in the other repositories. The zipped source release is the **openmoonray** repository with the submodules filled in.

## MoonRay

Three Git repositories make up the main source of MoonRay, providing the command line renderer and libraries used to integrate MoonRay and author scene objects:

- **scene_rdl2** provides the [RDL2 scene description format]({{ "/getting-started/about/rdl-scene-format" | absolute_url }}) used by MoonRay. The in-memory format is called `SceneContext`. **scene_rdl2** can read and write SceneContexts in two file formats: RDLA and RDLB.
- **mcrt_denoise** contains the implementation of the MoonRay denoiser.
- **moonray** is the main implementation of the renderer, and depends on the previous two repositories.

**moonray_gui** contains an interactive Qt application that performs a render and displays the frame buffer as the render progresses.

The **materialx_shaders** repository provides optional MaterialX shader plug-ins.

The **moonray_dcc_plugins** repository contains integration files for digital
content creation applications. Its current `houdini` tree provides Houdini
digital assets, Python packages, and SOHO integration scripts.

The **render_profile_viewer** repository contains the Python application used to
inspect MoonRay render profile data, plus its launcher, documentation, and
tests.

## Scene classes

The **moonray** repository contains core scene-object plug-ins, **moonshine** provides additional scene-object plug-ins, and **moonshine_usd** provides USD geometry plug-ins. The source also includes optional MaterialX map shaders. For the current class inventory, see the [Scene Object Classes reference]({{ "/user-reference/scene-objects" | absolute_url }}), which is generated from the plug-in definitions.

The default build contains the following 166 non-test DSO scene classes. These
are the exact class names declared by the current `moonray`, `moonshine`, and
`moonshine_usd` CMake projects. Test-only classes and the optional
MaterialX-generated `ND_*` map classes are not included.

| Scene-object type | Classes |
|-------------------|---------|
| [Camera]({{ "/user-reference/scene-objects/cameras" | absolute_url }}) | `BakeCamera`, `DomeMaster3DCamera`, `FisheyeCamera`, `OrthographicCamera`, `PerspectiveCamera`, `SphericalCamera` |
| Displacement | `CombineDisplacement`, `NormalDisplacement`, `SwitchDisplacement`, `VectorDisplacement` |
| [Display filter]({{ "/user-reference/scene-objects/display-filters" | absolute_url }}) | `BlendDisplayFilter`, `ClampDisplayFilter`, `ColorCorrectDisplayFilter`, `ConstantDisplayFilter`, `ContactSheetDisplayFilter`, `ConvolutionDisplayFilter`, `DiscretizeDisplayFilter`, `DofDisplayFilter`, `HalftoneDisplayFilter`, `ImageDisplayFilter`, `OpDisplayFilter`, `OverDisplayFilter`, `RampDisplayFilter`, `RemapDisplayFilter`, `RgbToFloatDisplayFilter`, `RgbToHsvDisplayFilter`, `ShadowDisplayFilter`, `TangentSpaceDisplayFilter`, `ToonDisplayFilter` |
| [Geometry]({{ "/user-reference/scene-objects/geometry" | absolute_url }}) | `BoxGeometry`, `RdlCurveGeometry`, `RdlInstancerGeometry`, `RdlMeshGeometry`, `RdlPointGeometry`, `SphereGeometry`, `TemplateGeometry`, `UsdGeometry`, `UsdInstanceGeometry`, `VdbGeometry` |
| [Light]({{ "/user-reference/scene-objects/lights" | absolute_url }}) | `CylinderLight`, `DiskLight`, `DistantLight`, `EnvLight`, `MeshLight`, `PortalLight`, `RectLight`, `SphereLight`, `SpotLight` |
| [Light filter]({{ "/user-reference/scene-objects/light-filters" | absolute_url }}) | `BarnDoorLightFilter`, `ColorRampLightFilter`, `CombineLightFilter`, `CookieLightFilter`, `CookieLightFilter_v2`, `DecayLightFilter`, `IntensityLightFilter`, `RodLightFilter`, `VdbLightFilter` |
| [Map]({{ "/user-reference/scene-objects/maps" | absolute_url }}) | `AttributeMap`, `AxisAngleMap`, `BlendMap`, `CheckerboardMap`, `ClampMap`, `ColorCorrectContrastMap`, `ColorCorrectGainOffsetMap`, `ColorCorrectGammaMap`, `ColorCorrectHsvMap`, `ColorCorrectHueShiftMap`, `ColorCorrectLegacyMap`, `ColorCorrectMap`, `ColorCorrectSaturationMap`, `ColorCorrectTMIMap`, `ConstantColorMap`, `ConstantScalarMap`, `CurvatureMap`, `DebugMap`, `DeformationMap`, `DirectionalMap`, `ExtraAovMap`, `FloatToRgbMap`, `GradientMap`, `HairColorPresetsMap`, `HairColumnMap`, `HairMap`, `HsvToRgbMap`, `ImageMap`, `LayerMap`, `LayerMap_v2`, `ListMap`, `LODMap`, `MultiChannelToFloatMap`, `NoiseMap_v2`, `NoiseWorleyMap_v2`, `NoiseWorleyMap_v3`, `NormalToRgbMap`, `OpMap`, `OpSqrtMap`, `OpenVdbMap`, `OpenVdbMap_v2`, `ProjectCameraMap`, `ProjectCameraMap_v2`, `ProjectCylindricalMap`, `ProjectPlanarMap`, `ProjectSphericalMap`, `ProjectTriplanarMap`, `ProjectTriplanarMap_v2`, `ProjectTriplanarUdimMap`, `RampMap`, `RandomMap`, `RemapMap`, `RgbToFloatMap`, `RgbToHsvMap`, `RgbToLabMap`, `SwitchColorMap`, `SwitchFloatMap`, `TemplateMap`, `ToonMap`, `TransformNormalMap`, `TransformSpaceMap`, `TwoSidedMap`, `UsdPrimvarReader_float`, `UsdPrimvarReader_float2`, `UsdPrimvarReader_float3`, `UsdPrimvarReader_int`, `UsdPrimvarReader_point`, `UsdPrimvarReader_vector`, `UsdTransform2d`, `UsdUVTexture`, `UVTransformMap`, `WireframeMap` |
| [Normal map]({{ "/user-reference/scene-objects/normal-maps" | absolute_url }}) | `CombineNormalMap`, `DistortNormalMap`, `ImageNormalMap`, `ProjectCameraNormalMap`, `ProjectPlanarNormalMap`, `ProjectTriplanarNormalMap`, `ProjectTriplanarNormalMap_v2`, `RandomNormalMap`, `RgbToNormalMap`, `SwitchNormalMap`, `UsdPrimvarReader_normal` |
| [Material]({{ "/user-reference/scene-objects/materials" | absolute_url }}) | `DwaAdjustMaterial`, `DwaBaseMaterial`, `DwaColorCorrectMaterial`, `DwaEmissiveMaterial`, `DwaFabricMaterial`, `DwaLayerMaterial`, `DwaMetalMaterial`, `DwaMixMaterial`, `DwaRefractiveMaterial`, `DwaSkinMaterial`, `DwaSolidDielectricMaterial`, `DwaSwitchMaterial`, `DwaToonMaterial`, `DwaTwoSidedMaterial`, `DwaVelvetMaterial_v2`, `HairColorCorrectMaterial`, `HairDiffuseMaterial`, `HairLayerMaterial`, `HairMaterial_v3`, `HairToonMaterial`, `RaySwitchMaterial`, `SwitchMaterial`, `UsdPreviewSurface` |
| [Volume]({{ "/user-reference/scene-objects/volumes" | absolute_url }}) | `BaseVolume`, `CutoutVolume`, `VdbVolume` |

## HdMoonRay Hydra Plugin

The **hdMoonRay** repository contains the MoonRay Hydra render delegate plugin and *adapter* plugins for the USD scene delegate, including adapters for geometry lights and light filters.

The MoonRay material and map shader classes need to be registered with the USD SDR library to use MoonRay material networks. This is done with two plugins in **moonray_sdr_plugins**. These plugins read JSON descriptions of the shaders from `MOONRAY_CLASS_PATH`. The install's `scripts/setup.sh` creates these JSON descriptions with `rdl2_json_exporter` if they are missing.

HdMoonRay requires Arras to build and run.

There are more instructions on how to configure and use HdMoonRay in the Hydra plugin README file (**hydra/README.md**) and [here]({{ "/user-reference/tools/hydra" | absolute_url }}).

## Arras

Arras allows applications to use the MoonRay renderer running in one or more separate processes. Arras itself is not specific to MoonRay, and can be used to run other programs.

The **arras4_core** repository contains C++ interfaces and implementations of the central Arras components. It contains everything needed to create and run Arras components in *local mode* (in a single process on the same machine as the client).

**moonray_arras** (under the **moonray** top-level directory) contains the MoonRay-specific Arras components:
- **mcrt_messages** defines the Arras messages used to communicate between client and render processes.
- **mcrt_computation** contains the Arras computations that execute MoonRay rendering under Arras.
- **mcrt_dataio** contains code to decode rendered images and to merge partially rendered images,
required by both client and render processes.

The **arras/distributed** directory holds the components needed to run distributed Arras renders:
- **arras4_node** runs on every render node
- a single instance of `minicoord` is run as a service to allocate and manage render nodes

[**arras_render**](../../user-reference/tools/arras_render) is a GUI tool to execute Arras renders,
and provides an example of Arras integration.

## Render acceptance tests

The **rats** repository contains the Render Acceptance Test Suite used to detect
visual regressions by rendering small scenes and comparing the results with
canonical images. Its `tests` tree contains MoonRay and `hd_render` test scenes,
`assets` contains Git LFS-managed test data, and `cmake` contains the CTest
support used to generate render, comparison, and canonical-update tests.
