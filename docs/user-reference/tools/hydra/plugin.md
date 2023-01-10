---
title: HdMoonRay Plugin

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

<!-- To set variables and metadata, such as a title and layout, for a page or post on your site, you can add YAML front matter to the top of any Markdown or HTML file. For more information, see "Front Matter" in the Jekyll documentation.  -->

# <Overview_or_introduction>
<!-- All topics>

<!-- Concept info here: Explain the background and context of a this subject. --> 

# HdMoonRay Hydra Plugin
HdMoonRay is a Hydra render delegate plugin for the MoonRay renderer.

The plugin has been tested with Houdini and usdview

## Supported Features
HdMoonRay has not been tested with non-USD applications, although it contains only a small amount of code that is in any way specific to USD. We generally describe the functionality of the plugin in terms of USD and USD prims, since this is more accessible to most readers than the internal Hydra types.

The prim types supported, and the MoonRay shaders that implement them, are listed in the table below. In most cases, any limitations are due to features not being available in the corresponding MoonRay shader, and could be addressed in HDMoonRay fairly easily if we choose to add MoonRay support for the feature.

| USD Prim type | MoonRay shader | Notes |
| ------------- | -------------- | ----- |
| BasisCurve | RdlCurveGeometry | no Catmull-Rom pinned or periodic curves |
| Camera | any MoonRay camera | no clippingPlanes "fit" type other than width simulated by changing focal length |
| xxxLight (any Lux light) | any MoonRay light | Spotlight api turns light into a disc, cone:softness is approximated using moonray's "inner_cone_angle" | 
| MoonRayLightFilter [^1] | any MoonRay light filter | USD doesn't define any specific filter types : all MoonRay light filters are supported. |
| Material | all MoonRay material and map shaders | Extra files needed for DCC for non UsdPreviewSurface materials |
| Mesh | RdlMeshGeometry | no loop subdivision, holes, or "smooth" triangleSubdivision mode |
| Points | RdlPointGeometry ||
| PreviewSurface shader | UsdPreviewSurface | only mipmapped textures | 
| Procedural [^1] | any geometry procedural ||
| Volume | VdbGeometry ||

## Limitations
There are several features that are incomplete or unsupported primarily due to limitations in Hydra itself, rather than in MoonRay or the HdMoonRay plugin. In some cases, these are simply things still on Pixar's "todo" list. For others, it is not clear whether Pixar intends to support the feature at all. Whether we can work around this to support the feature anyway depends on the details, and can change between Hydra and USD release versions. However, the trend is that limitations are easier to work around in later versions.

### Motion Blur
The main overall limitation is that **motion blur** isn't yet supported (except for camera motion).

### Geometry Parts
Parts are supported in USD using the GeometrySubset prim. This is only supported for the Mesh prim, and so there are no parts in USD (or Hydra) for procedural geometry, curves or points.

Parts can receive their own material bindings, but there is no support in USD or Hydra for setting visibility flags on individual parts. We've received a suggestion that mesh "holes" should be used to hide parts : this is supported by USD and Hydra but not by MoonRay. Our current feeling is that this wouldn't meet our production need.

### Primvars (user data)
Constant primvar attributes named primvars:moonray:xyz can be used to override the rdl2 attribute xyz on any Geometry. In particular this is used for visible_*, mesh_resolution, and side_type. This is not supported yet for parts or for instances.

Other primvars are translated into MoonRay user data for use by shaders, but this is only supported for BasisCurve, Mesh and Points. In particular there are no primvars for Procedural geometry including volumes and the Sphere primitive (for now hdMoonRay converts spheres to Mesh because of this).

[^1]: These are USD Prim types defined by DWA
