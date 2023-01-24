---
title: What's Included?

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# What's Included?

The open source release contains the following pieces of technology:

- [MoonRay](about/moonray): path-tracing renderer
- [Scene Object Classes]({{site.baseurl}}/user-reference/scene-objects): (materials, geometry, lights, cameras, etc) used at Dreamworks Animation (about 150 in total)
- [HdMoonRay]({{site.baseurl}}/user-reference/tools/hydra): the hydra plugin for MoonRay
- [Arras](about/arras): execution and distribution framework, used to integrate MoonRay into applications

The source is contained in multiple Git repositories. The `openmoonray` repository contains the top-level CMake build files, and uses submodules to link in all the others. The zipped source release is the `openmoonray` repository with the submodules filled in.

## MoonRay

Three Git repositories make up the main source of MoonRay, providing the command line renderer and libraries used to integrate MoonRay and author scene objects:

- `scene_rdl2` provides the [RDL2 scene description format](/about/rdl-scene-format.md) used by MoonRay. The in-memory format is called `SceneContext`. `scene_rdl2` can read and write SceneContexts in two file formats: RDLA and RDLB.
- `mcrt_denoise` contains the implementation of the MoonRay denoiser.
- `moonray` is the main implemention of the renderer, and depends on the previous three repositories.

`moonray_gui` contains an interactive Qt application that performs a render and displays the frame buffer as the render progresses.

## Scene classes

The `moonray` repository contains a basic set of of scene class plugins for use with MoonRay. The `moonshine` repository contains an additional set of scene classes. 

| |
|------|
|**Camera** | 
| Bake DomeMaster3D Orthographic Perspective Spherical |
|**Displacement**| 
| Combine Normal Vector Switch |
|**Display filter**|
| Blend Constant Halftone Ramp Shadow Clamp      Convolution Image Remap TangentSpace Discretize Op RgbToFloat Toon ColorCorrect Dof Over RgbToHsv |
|**Geometry**| 
| OpenVdb RdlCurve RdlInstancer RdlMesh RdlPoint Box Sphere Template |
|**Light**| 
|Cylinder Disk Distant Env Mesh Rect Sphere Spot |
|**Light Filter**| 
|BarnDoor ColorRamp Cookie Intensity Vdb Combine Decay Rod |
|**Map**| 
| Attribute Debug List UsdPrimvarReader_float2 UsdPrimvarReader_point UsdUVTexture Checkerboard ExtraAov OpenVdb UsdPrimvarReader_float3 UsdPrimvarReader_vector Image UsdPrimvarReader_float UsdPrimvarReader_int UsdTransform2d AxisAngle ColorCorrectLegacy Directional LOD ProjectSpherical SwitchColor Blend ColorCorrect FloatToRgb Noise ProjectTriplanar SwitchFloat Clamp ColorCorrectNuke Gradient NoiseWorley ProjectTriplanarUdim Template ColorCorrectSaturation HairColorPresets NormalToRgb Ramp Toon ColorCorrectContrast ColorCorrectTMI HairColumn Op Random TransformNormal ColorCorrectGainOffset ConstantColor Hair  OpSqrt Remap TransformSpace ColorCorrectGamma ConstantScalar HsvToRgb ProjectCamera RgbToFloat UVTransform ColorCorrectHsv Curvature Layer ProjectCylindrical RgbToHsv Wireframe ColorCorrectHueShift Deformation LcToRgb ProjectPlanar RgbToLab |
|**Normal Map**| 
| Distort  ProjectCamera  ProjectTriplanar RgbToNormal UsdPrimvarReader_normal Combine Image ProjectPlanar  Random Switch |
|**Material**| 
| Axf Base Measured RaySwitch Switch UsdPreviewSurface *DwaColorCorrect  DwaLayer  DwaRefractive DwaSwitch GlitterFlake HairDiffuse Toon HairToon DwaAdjust DwaEmissive      DwaMetal DwaSkin DwaTwoSided Hair HairLayer DwaBase DwaFabric DwaMix DwaSolidDielectric DwaVelvet HairColorCorrect MacroFlake |
|**Volume**| 
| Base Cutout |


The `moonshine_usd` repository contains two geometry classes : Usd and UsdInstance. 

## HdMoonRay Hydra Plugin

The `hdMoonRay` repository contains the MoonRay Hydra render delegate plugin and several *adapter* plugins for the USD scene delegate. The adapter plugins are needed to work around missing support in earlier versions of the USD scene delegate, and should no longer be necessary as Hydra evolves.

The MoonRay material and map shader classes need to be registered with the USD SDR library to use MoonRay material networks. This is done with two plugins in `moonrayNdrPlugins`. These plugins read JSON descriptions of the shaders from `MOONRAY_CLASS_PATH`. 
The JSON files are not built by the MoonRay *cmake* system : you will need to generate them using the `rdl2_json_exporter` program before using HdMoonRay for the first time.

HdMoonRay requires Arras to build and run.

There are more instructions on how to configure and use HdMoonRay in the Hydra plugin README file (**hydra/README.md**) and [here]({{site.baseurl}}/user-reference/tools/hydra).

## Arras

Arras allows applications to use the MoonRay renderer running in one or more separate processes. Arras itself is not specific to MoonRay, and can be used to run other programs.

The `arras4_core` repository contains C++ interfaces and implementations of the central Arras components. It contains everything needed to create and run Arras components in *local mode* (in a single process on the same machine as the client).

`moonray_arras` (under the **moonray** top-level directory) contains the MoonRay-specific Arras components:
- `mcrt_messages` defines the Arras messages used to communicate between client and render processes.
- `mcrt_computation` contains the Arras computations that execute MoonRay rendering under Arras.
- `mcrt_dataio` contains code to compress rendered images, required by both client and render processes.

The **arras/distributed** directory holds the components needed to run distributed Arras renders:
- `arras4_node` runs on every render node
- a single instance of `minicoord` is run as a service to allocate and manage render nodes

`arras_render` is a GUI tool to execute Arras renders, and provides an example of Arras integration.



