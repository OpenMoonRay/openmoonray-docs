---
title: Moonray Hydra Delegate

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

<!-- To set variables and metadata, such as a title and layout, for a page or post on your site, you can add YAML front matter to the top of any Markdown or HTML file. For more information, see "Front Matter" in the Jekyll documentation.  -->

# <Overview_or_introduction>
<!-- All topics>

<!-- Concept info here: Explain the background and context of a this subject. --> 

# What is Hydra?
"An open source framework to transport live scene graph data to renderers"

Hydra allows 3D applications to use Hydra render plugins to render their scene data. Ideally, any Hydra-supporting application can make use of any renderer that has a Hydra plugin, and produce a good result. It is intended to support live rendering – meaning that the rendered image is continually updated as the 3D scene is changed. 

Hydra was originally developed by Pixar for live OpenGL rendering. It is currently being developed and expanded by them to support "final frame rendering". This includes live rendering using a "final frame quality" renderer, like Moonray or Renderman, and also batch rendering of actual final frames. There are many more things to consider for final frame quality rendering, and their development towards this goal is still in progress.

Both USD and Hydra are developed by Pixar, but Hydra isn't tied directly to the USD scene format : there are non-USD applications that support Hydra render plugins. Pixar provides a library called usd_imaging that does much of the work needed to implement Hydra support on top of a USD scene model.

The Hydra plugin for Moonray will allow it to be used in Hydra-supporting applications.

# HdMoonray Hydra Plugin
HdMoonray is a Hydra render delegate plugin for the Moonray renderer.

The plugin has been tested with Houdini and usdview. The HdMoonray project includes a commandline program, hd_render, that performs Hydra renders from a USD scene file. hd_render can use any Hydra render delegate except for Storm (the Pixar openGl renderer) : this limitation is simply because Storm requires OpenGL libraries to be linked into the main application, and we have chosen not to do this for hd_render.

## Supported Features
HdMoonray has not been tested with non-USD applications, although it contains only a small amount of code that is in any way specific to USD. We generally describe the functionality of the plugin in terms of USD and USD prims, since this is more accessible to most readers than the internal Hydra types.

The prim types supported, and the Moonray shaders that implement them, are listed in the table below. In most cases, any limitations are due to features not being available in the corresponding Moonray shader, and could be addressed in HDMoonray fairly easily if we choose to add Moonray support for the feature.

| USD Prim type | Moonray shader | Notes |
| ------------- | -------------- | ----- |
| BasisCurve | RdlCurveGeometry | no Catmull-Rom pinned or periodic curves |
| Camera | any Moonray camera | no clippingPlanes "fit" type other than width simulated by changing focal length |
| xxxLight (any Lux light) | any Moonray light | Spotlight api turns light into a disc, cone:softness is approximated using moonray's "inner_cone_angle" | 
| MoonrayLightFilter [^1] | any Moonray light filter | USD doesn't define any specific filter types : all Moonray light filters are supported. |
| Material | all Moonray material and map shaders | Extra files needed for DCC for non UsdPreviewSurface materials |
| Mesh | RdlMeshGeometry | no loop subdivision, holes, or "smooth" triangleSubdivision mode |
| Points | RdlPointGeometry ||
| PreviewSurface shader | UsdPreviewSurface | only mipmapped textures | 
| Procedural [^1] | any geometry procedural ||
| Volume | VdbGeometry ||

## Limitations
There are several features that are incomplete or unsupported primarily due to limitations in Hydra itself, rather than in Moonray or the HdMoonray plugin. In some cases, these are simply things still on Pixar's "todo" list. For others, it is not clear whether Pixar intends to support the feature at all. Whether we can work around this to support the feature anyway depends on the details, and can change between Hydra and USD release versions. However, the trend is that limitations are easier to work around in later versions.

### Motion Blur
The main overall limitation is that **motion blur** isn't yet supported (except for camera motion).

### Geometry Parts
Parts are supported in USD using the GeometrySubset prim. This is only supported for the Mesh prim, and so there are no parts in USD (or Hydra) for procedural geometry, curves or points.

Parts can receive their own material bindings, but there is no support in USD or Hydra for setting visibility flags on individual parts. We've received a suggestion that mesh "holes" should be used to hide parts : this is supported by USD and Hydra but not by Moonray. Our current feeling is that this wouldn't meet our production need.

### Primvars (user data)
Constant primvar attributes named primvars:moonray:xyz can be used to override the rdl2 attribute xyz on any Geometry. In particular this is used for visible_*, mesh_resolution, and side_type. This is not supported yet for parts or for instances.

Other primvars are translated into Moonray user data for use by shaders, but this is only supported for BasisCurve, Mesh and Points. In particular there are no primvars for Procedural geometry including volumes and the Sphere primitive (for now hdMoonray converts spheres to Mesh because of this).

[^1]: These are USD Prim types defined by DWA
