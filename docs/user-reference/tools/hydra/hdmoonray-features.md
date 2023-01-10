---
title: HdMoonRay Supported Features

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# HdMoonRay Supported Features

The main missing feature in HdMoonRay is motion blur : it currently only works for camera motion.

There are a few features missing from specific prim types because the MoonRay scene objects do not currently support them -- for example, loop mesh subdivision.

Generally hdMoonRay translates Hydra prims to the most appropriate MoonRay scene class. Sometimes MoonRay provides more alternatives than Hydra specifies : in these cases you can often request a specific MoonRay class using the attribute `moonray:class` set to the class name. For example, you can use a MoonRay `BakeCamera` by creating a Camera prim and setting `moonray:class` to "BakeCamera".

hdMoonRay often allows you to set MoonRay object attributes directly, using `moonray:<attr-name>`. For example, you can set the `side_type` attribute on geometry objects using `moonray:side_type`. Geometry objects may support the setting of certain object attributes through primvars.

The next sections cover specific prim types in more detail. The Hydra value ***refineLevel*** is referred to in the geometry sections : this is set by the "complexity" menu in usdview (Low=0, Medium=1, High=2) and the lod settings in Houdini.

## Camera

Camera prims become either `PerspectiveCamera` or `OrthogonalCamera` in MoonRay. You can use any of the other MoonRay Camera classes by creating a Camera prim and setting `moonray:class` to the MoonRay class name.

You can set any of the attributes on the Camera object by their MoonRay name, using `moonray:<attr-name>'. This overrides any value coming from the standard prim attributes.


## Coordinate System

Coordinate system support is very limited in hdMoonRay, in part because MoonRay users have generally associated coordinate systems with shaders rather than geometry. There are also some issues with coordinate system support in the current USD scene delegate, especially around instancing.

## Basis Curves

Basis curves are supported using MoonRay's `RdlCurveGeometry` class. `RdlCurveGeometry` supports ray-oriented or round geometry : these both approximate a "tube" render, but ray-oriented geometry is expected to be faster. Normal-oriented ribbons are not supported.

For the various values of `refineLevel`:

- 0 : force tesselation_rate to 1 and curve_subtype to ray-oriented (straight lines between control points)
- 1,2 : set curve_subtype to  moonray:curve_subtype, default to ray-oriented. Set tesselation_rate to moonray:tesselation_rate, default to 4.
- 3 : same except default curve_subtype is round.

The `widths` Usd attribute is divided by 2 to set the MoonRay `radius_list` value. 

Linear, bspline and bezier curve types are supported : Catmull-Rom is not.

“Pinned” and “periodic” USD curves are not supported. 

## Mesh

Mesh supports polygon meshes and subdivision surfaces using Catmull-Clark and Bilinear schemes. Loop subdivision is not supported, and Catmull-Clark will be used if it is set.

Subdivision is controlled by **refineLevel** : if refineLevel is zero then subdivision is turned off, otherwise it is set to `1<<refineLevel`. You can set the subdivision directly using `primvars:moonray:mesh_resolution`

These Mesh attributes are supported:

- points, normals
- cornerIndices, cornerSharpnesses
- creaseIndices, creaseLengths, creaseSharpnesses, faceVaryingLinearInterpolation, interpolateBoundary
- doubleSided, orientation, visibility

"holes" are not supported : holeIndices is ignored

triangleSubdivisionRule is ignored, since the alternate rule "smooth" is not supported by MoonRay

If orientation is set to "leftHanded", Hd MoonRay will set the reverse_normals flag to true, and will also negate every entry in the normal_list attribute. This also happens if the geometry's world transform has reflection (i.e. has a negative determinant). If both these things are true, they cancel each other.

hdMoonRay detects if usdview has been set to “flat shading”, in which case it turns off subdivision and smooth_normals on all meshes.

GeomSubsets are translated into MoonRay parts.

**Primvars**

Indexed primvars currently don’t work, though Hydra converts a few to non-indexed and they work.

primvars:points, if defined, is used to populate the vertex_list attribute of RdlMeshGeometry. The primvar takes precedence over the points Usd attribute.

primvars:normals and primvars:normal are both used to populate the normal_list attribute of RdlMeshGeometry. These primvars take precedence over the normals Usd attribute. If both primvars are specified, it is not clear which will be used.

primvars:st and primvars:uv are both used to populate the uv_list attribute of RdlMeshGeometry. This also accepts both float2 and float3 values (ignoring the 3rd value). If both st and uv are specified, it is not clear which will be used.

All other primvars defined for the Usd geometry are made available to shaders processing the geometry, as custom primitive attributes. To do this, Hd MoonRay generates UserData objects of the appropriate type, and populates them with the primvar's values. The UserData is then added to the RdlMeshGeometry object's primitive_attributes list.

HdMoonRay also generates UserData for the Hydra "primId" of the geometry primitive.


## Points

Points prims are turned into RdlPointGeometry. The radius is set to ½ the widths. A primvar called velocities is used to set the point velocity_list.

The Hydra adapter for points does not support GeomSubset, and so parts are not supported.

## Volume

Volumes are supported by OpenVdbGeometry.

You must put an opaque object behind the volume so that the Z is set, otherwise it is invisible in Hydra
Only OpenVdbAsset field types are supported
All fields must be from same .vdb file and can't change the name of the field
Primvars and parts are the same as Procedural

## Instancing

HdMoonRay supports Usd native instancing and PointInstancer using RdlInstancerGeometry.

Nested (hierarchical) instance is supported, as is the inactiveIds metadata value used for non-animated masking. The PointInstancer attribute invisibleIds, used for animated masking, does not appear to work.

Primvars defined on the PointInstancer are transferred to instances. Primvars that don’t have enough entries are repeated to give every instance a value.

Hydra/USD produces a lot of single-instance Instancers, when instancing is enabled on objects that only have one copy. This renders slower in MoonRay, and there is a patch to detect and not create the RdlInstancerGeometry, instead adding the transform to the actual geometry. However we currently think it would be better to fix this in Hydra and/or in MoonRay instead, as both will improve performance in many more cases.
Lighting Instances
MoonRay does not support different light links on different instances in the same instancer. Currently, the light links of the first instance encountered are used for all instances. 

Hydra itself does not currently support light linking to prims inside an instance prototype graph. The links must point to the instancing prim (the prim creating the instanced composition arc) or to one of its ancestors. Links to prims below this are ignored. Currently the Houdini lightlinker LOP prevents such links from being created.

## Lights

Each Lux light is translated to a MoonRay equivalent : for example, DomeLight is translated to EnvLight. Standard Usd attributes are translated to their MoonRay equivalents. and MoonRay-specific attributes can be set using the moonray: namespace prefix.
The “shapingAPI” changes the light class to the MoonRay SpotLight, if the shaping:coneAngle is less than 90. This will happen for any light type, but it does not match well unless a Lux diskLight is used. The cone:softness is simulated by setting innerConeAngle. Any of the attributes can be overridden by setting moonray: attributes.

Hd MoonRay supports Light, Shadow and Light Filter linking using collections, as specified in the UsdLux Linking API. See also Instancing > Lighting Instances
GeometryLight
GeometryLight is not mentioned in the Fuji spec, but Hd MoonRay supports it using MeshLight.

The geometry prim referenced by a GeometryLight must be invisible, or MoonRay will refuse to render the light. This is a limitation in MoonRay itself.

The geometry attribute of GeometryLight should be a rel, but to work with HdMoonRay it must be duplicated as moonray:geometry containing a prim path value (declared as string). This is because the current release of Hydra does not support rel properties on lights. In usd 0.20.11 and later, the geometry attribute works as expected.
Light Filters
All MoonRay filters are supported via MoonRayLightFilter. This schema is in usd_core_dwa_plugins and has no defined attributes. The MoonRay filter class should be specified by token moonray::class. All MoonRay filter attributes are specified as custom values moonray:attrname.

Light filters are linked to lights and geometry as specified by UsdLux:

in lights: rel filters = [filters]

in filters: collection filterLink of geometries


## Materials

Materials are defined using the UsdShade model : i.e. a networks of connected Shader prims nested inside the Material prim.

MoonRay classes used in a shader network must be registered with Sdr (the Shader Definition Registry). This is achieved automatically by ensuring that the two plugins moonrayShaderDiscovery and moonrayShaderParser are on PXR_PLUGIN_PATH, and that the environment variable MOONRAY_CLASS_PATH is pointing to the moonray and moonshine package coredata directories. If shaders are not registered correctly, Hydra will generate an error message about unknown shader types.

Currently only the existence of a shader node in the registry is important for Hd MoonRay to function : none of the Hydra code actually reads the details of the registration. This could change in future versions of Usd.

**Default Materials**

Hd MoonRay creates a default material that is assigned to any geometry without an explicit assignment using rel material:binding. This default material renders the geometry using the values of the displayColor and displayOpacity primvars (see Mesh > Primvars). Also created is a solid magenta error material, used in place of materials that either cannot be found or fail to generate a valid MoonRay material object. 
Motion Blur
Only Camera transforms, Camera focal length, and Point velocities are motion blurred. This is mostly due to a lack of accurate test data, Hydra and MoonRay both support motion blur and it can be converted.

Motion blur attributes such as velocities, accelerations and angularVelocities are converted by Hydra into primvars, which in turn leads Hd MoonRay to automatically generate UserData called "velocities" and "accelerations" for the mesh. However, MoonRay expects values called "velocity" and "acceleration", and will therefore ignore them.


