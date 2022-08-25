# Source Contents

The open source release contains the following pieces of technology:

- the Moonray path-tracing renderer
- the majority of the scene object classes (materials, geometry, lights, cameras, etc) used at Dreamworks Animation (about 150 in total)
- a Hydra plugin for Moonray: HdMoonray
- the Arras execution and distribution framework, used to integrate Moonray into applications

The source is contained in multiple Git repositories. The `openmoonray` repository contains the top-level CMake build files, and uses submodules to link in all the others. The zipped source release is the `openmoonray` repository with the submodules filled in.

## Moonray

Four Git repositories make up the main source of Moonray, providing the command line renderer and libraries used to integrate Moonray and author scene objects:

- `scene_rdl2` provides the RDL2 scene description format used by Moonray. The in-memory format is called `SceneContext`. `scene_rdl2` can read and write SceneContexts in two file formats: RDLA and RDLB.
- `moonray_stats` is a small repository containing code to generate and output performance statistics for Moonray renders.
- `mcrt_denoise` contains the implementation of the Moonray denoiser.
- `moonray` is the main implemention of the renderer, and depends on the previous three repositories.

`moonray_gui` contains an interactive Qt application that performs a render and displays the frame buffer as the render progresses.

## Scene classes

The `moonray` repository contains a basic set of of scene class plugins for use with Moonray. The `moonshine` repository contains an additional set of scene classes. 

- **camera:** Bake DomeMaster3D Orthographic Perspective Spherical
- **displacement:** Combine Normal Vector *Switch*
- **display filter:** *Blend* *Constant* *Halftone* *Ramp* *Shadow* *Clamp*      *Convolution* *Image* *Remap* *TangentSpace* *Discretize* *Op* *RgbToFloat* *Toon*
*ColorCorrect* *Dof* *Over* *RgbToHsv*
- **geometry:** OpenVdb RdlCurve RdlInstancer RdlMesh RdlPoint *Box* *Sphere* *Template*
- **light:** Cylinder Disk Distant Env Mesh Rect Sphere Spot
- **light filter:** BarnDoor ColorRamp Cookie Intensity Vdb Combine Decay Rod
- **map:** Attribute Debug List UsdPrimvarReader_float2 UsdPrimvarReader_point UsdUVTexture Checkerboard ExtraAov OpenVdb UsdPrimvarReader_float3 UsdPrimvarReader_vector Image UsdPrimvarReader_float UsdPrimvarReader_int     UsdTransform2d *AxisAngle* *ColorCorrectLegacy* *Directional* *LOD* *ProjectSpherical* *SwitchColor* *Blend* *ColorCorrect* *FloatToRgb* *Noise* *ProjectTriplanar* *SwitchFloat* *Clamp* *ColorCorrectNuke* *Gradient* *NoiseWorley* *ProjectTriplanarUdim* *Template* *ColorCorrectSaturation* *HairColorPresets* *NormalToRgb* *Ramp* *Toon* *ColorCorrectContrast* *ColorCorrectTMI* *HairColumn* *Op* *Random* *TransformNormal* *ColorCorrectGainOffset* *ConstantColor* *Hair*  *OpSqrt* *Remap* *TransformSpace* *ColorCorrectGamma* *ConstantScalar* *HsvToRgb* *ProjectCamera* *RgbToFloat* *UVTransform* *ColorCorrectHsv* *Curvature* *Layer*     *ProjectCylindrical* *RgbToHsv* *Wireframe* *ColorCorrectHueShift* *Deformation* *LcToRgb* *ProjectPlanar* *RgbToLab*
- **normal map:** *Distort*  *ProjectCamera*  *ProjectTriplanar* *RgbToNormal* *UsdPrimvarReader_normal* *Combine* *Image* *ProjectPlanar*  *Random* *Switch*
- **material:** Axf Base Measured RaySwitch Switch UsdPreviewSurface *DwaColorCorrect*  *DwaLayer*  *DwaRefractive* *DwaSwitch* *GlitterFlake* *HairDiffuse* *Toon* *HairToon* *DwaAdjust* *DwaEmissive*      *DwaMetal* *DwaSkin* *DwaTwoSided* *Hair* *HairLayer*
*DwaBase* *DwaFabric* *DwaMix* *DwaSolidDielectric* *DwaVelvet* *HairColorCorrect* *MacroFlake*
- **volume:** Base Cutout

Names in *italics* are in the moonshine repository.

The `moonshine_usd` repository contains two geometry classes : Usd and UsdInstance.

## HdMoonray hydra plugin

The `hdMoonray` repository contains the Moonray Hydra render delegate plugin and several "adapter" plugins for usdimaging. The adapter plugins are needed to work around missing support in earlier versions of usdimaging, and should no longer be necessary as Hydra evolves.

The Moonray material and map shader classes need to be registered with the USD SDR library to use Moonray material networks. This is done with two plugins in `moonrayNdrPlugins`. These plugins read JSON descriptions of the shaders from `MOONRAY_CLASS_PATH`. Before using HdMoonray the JSON description file must be generated using the `rdl2_json_exporter` program.

HdMoonray requires Arras to build and run.

There are more instructions on how to configure and use HdMoonray in **hydra/README.md**

## Arras

Arras allows applications to use the Moonray renderer running in one or more separate processes. Arras itself is not specific to Moonray, and can be used to run other programs.

The `arras4_core` repository contains C++ interfaces and implementations of the central Arras components. It contains everything needed to create and run Arras components in "local" mode (i.e. in a single process on the same machine as the client).

`moonray_arras` (under the **moonray** top-level directory) contains the Moonray-specific Arras components:
- `mcrt_messages` defines the Arras messages used to communicate between client and render processes.
- `mcrt_computation` contains the Arras computations that execute Moonray rendering under Arras.
- `mcrt_dataio` contains code to compress rendered images, required by both client and render processes.

The **arras/distributed** directory holds the components needed to run distributed Arras renders:
- `arras4_node` runs on every render node
- a single instance of `minicoord` is run as a service to allocated and manage render nodes

`arras_render` is a GUI tool to execute Arras renders, and provides an example of Arras integration.



