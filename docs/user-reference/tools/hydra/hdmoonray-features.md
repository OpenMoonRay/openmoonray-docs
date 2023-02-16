---
title: HdMoonRay Features
---

# HdMoonRay Features

HdMoonRay provides a Hydra interface to MoonRay by translating Hydra data into MoonRay's native RDL2 format.
The following sections provide more information on what is supported.

# Geometry

HdMoonray supports all three types of Hydra geometry: meshes, curves and points. In USD these are represented by the Mesh, BasisCurve and Point prim types.

***Primvars*** defined on the geometry are generally translated to their MoonRay equivalent : *UserData* objects. The data is then available for use by shaders.
## Meshes

Catmull-Clark and Bilinear subdivision surfaces are supported by MoonRay. Loop subdivision is not, and Catmull-Clark will be used if it is set. "holes" are not supported : `holeIndices` is ignored. `triangleSubdivisionRule` is ignored, since the alternate rule "smooth" is not supported by MoonRay.

***GeomSubsets*** in Mesh prims are translated to MoonRay *parts*, which have essentially the same function. Hydra only allows GeomSubsets on meshes, so you cannot use them with curves and points.

## Curves

MoonRay supports linear, bspline and bezier curve types. Catmull-Rom is not supported. “Pinned” and “periodic” USD curves are also not supported.

# Lights

All of the Lux lights are supported by translating to a MoonRay equivalent.

HdMoonRay supports Light, Shadow and Light Filter linking using collections, as specified in the UsdLux Linking API. 

The Lux “shapingAPI” changes the light class to the MoonRay SpotLight, if the shaping:coneAngle is less than 90. This will happen for any light type, but it does not match well unless a Lux DiskLight is used.

MoonRay-specific attributes can be set on lights by setting `moonray:<attrname>`. These override values set by translation from Lux. You can also select the MoonRay light class to use explicitly, by setting the attribute `moonray:class`.

# Cameras

Hydra cameras are translated to one of the MoonRay camera types `PerspectiveCamera` or `OrthogonalCamera`

As with lights, you can set any MoonRay-specific camera attribute using the `moonray:` prefix. You can also use any of the other MoonRay camera classes by setting `moonray:class` on the Camera prim.

# Materials

Materials are defined using the UsdShade model : i.e. as networks of connected Shader prims nested inside the Material prim.

You can use any of the MoonRay material and map shaders inside a material network. The USD scene delegate requires shaders to be registered with SDR : see [Hd MoonRay Setup](hdmoonray-setup) for information on how to set this up.

HdMoonRay creates a default material that is assigned to any geometry without an explicit assignment. This default material renders the geometry using the values of the displayColor and displayOpacity primvars. Also created is a solid magenta error material, used in place of materials that either cannot be found or fail to generate a valid MoonRay material object. 
# Instancing

HdMoonRay supports Usd native instancing and PointInstancer 

Nested (hierarchical) instance is supported, as is the inactiveIds metadata value used for non-animated masking.

Primvars defined on the PointInstancer are transferred to instances. Primvars that don’t have enough entries are repeated to give every instance a value.

MoonRay does not support different light links on different instances in the same instancer. Currently, the light links of the first instance encountered are used for all instances. 

Hydra itself does not currently support light linking to prims inside an instance prototype graph. The links must point to the instancing prim (the prim creating the instanced composition arc) or to one of its ancestors. Links to prims below this are ignored. 

# Motion Blur
Motion blur is fully supported.  Transformational motion blur is supported on cameras, lights, and geometry.  Geometry also supports deformational motion blur.   The type of motion blur for geometry is dependent on the `motion_blur_type` parameter setting and the data present.  The types are:

Type|Description
---|---
*static*|Treat the mesh as static.  No motion blur.
*velocity*|Will blur using the supplied vertex velocities(`v`)
*frame delta*|Will interpolate between the two supplied vertex positions
*acceleration*|Will blur using the supplied vertex velocities(`v`) and accelerations(`accel`)
*hermite*|Will use the supplied pair of positions(`P`) and velocities(`v`) to interpolate along a cubic hermite curve.
*best*(default)|Will choose the method which provides the highest quality with the given data.

When set to *best*, the type chosen is based on the following data being available in order of preference.

Type|Required Data
---|---
*hermite*|A pair of positions(`P`) and velocities(`v`)
*acceleration*|velocity(`v`) and acceleration(`accel`)
*velocity*|velocity(`v`)
*frame delta*|A pair of positions(`P`)

Motion blur types:
![]({{ "/assets/images/user-reference/tools/hydra/motion_blur.jpg" | absolute_url }})
*Left to right: geometry types (mesh, curves, and points).
Top to bottom: motion blur types (transform, frame delta, velocity, acceleration, and hermite).*
