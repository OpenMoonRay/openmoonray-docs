---
title: Baking Textures
---

# Baking Textures
Baking in MoonRay is accomplished through the use of a BakeCamera camera shader. The BakeCamera,
like any other camera shader is responsible for turning sample locations on the image plane into
primary rays (ray origin and ray direction).

For each pixel location (px, py) in the image being rendered a (u,v) coordinate is computed as:
```
u = px / (image_width - 1)
v = py / (image_height - 1)
```
Once this (u,v) coordinate is computed, the corresponding 3D location, P, on the geometry being
baked is looked up. Any normal supplied with the mesh, N, is also available. In order to do this,
the geometry being baked must have a properly uvunwrapped parameterization. This is just a fancy
way of saying that a given (u, v) coordinate must map to at most one point location on the
geometry's surface. The BakeCamera does not check for this condition, it assumes it.

Once the 3D location is known, the primary ray origin and direction can be chosen according to one
of four modes.

* __0:__ __camera to surface__: The ray direction is chosen as the direction between the location of the bake
camera and the 3D surface point. The ray origin is chosen to be just slightly offset from P back
along this ray.
* __1:__ __surface along normal__: The ray direction is the surface normal, the ray origin is offset just
above the surface along the normal direction.
* __2:__ __surface along reflection vector__: The ray direction is the reflection vector defined by the bake
camera's location and the surface normal. The ray origin is the surface location, offset slightly
along the reflection vector direction.
* __3:__ __reverse normal__: The ray direction is the negative normal direction. The ray origin is offset just
slightly above the surface.
![]({{ "/assets/images/user-reference/how-to-guides/baking-textures/BakeModes.png" | absolute_url }})

Once the primary ray has been defined, there is nothing left that is specific to baking. All
features of MoonRay rendering are available, including Aovs. There are some features you should
avoid though. Motion-blur and depth of field are not implemented in the BakeCamera. So turning
those on could produce undesirable or unexpected results.

See the [BakeCamera]({{ "/user-reference/scene-objects/cameras/BakeCamera" | absolute_url }}) class reference for the
full list of attributes

The __node xform__ attribute is used to define the location of the bake camera. This location is
used in modes 0, and 2.

The __near__ and __far__ attributes are common to all camera types. When baking in modes 0 (from
camera to surface) or 3 (above surface reverse normal) these attributes are ignored. The near and far
clipping planes are computed automatically based on the "bias" parameter to ensure that the position
being baked in optimally inside these two clipping planes. In modes 1 (from surface along normal)
and 2 (from surface along reflection vector) the near and far attributes are used as set.

The __mb__ parameters are ignored by the BakeCamera. Motion-blur should not be used with the BakeCamera.

The __pixel sample map__ attribute isn't directly used by the BakeCamera (or any camera shader for
that matter), but it should function properly.

The __plus vp__ and __plus hvp__ attributes should not be used when Baking.

The __geometry__ attribute defines the geometry to bake. It can be any geometry object. But only
triangle, quad, and subdivision meshes will actually bake. For example, curves will not bake. The
meshes must have proper uv parameterization, where P is a true function of (u, v).

The __udim__ attribute defines the udim tile to bake. You can bake exactly one udim tile at a time.
Any geometry data that is outside the udim tile being baked is culled.

The __uv attribute__ attribute allows you to specify the name of a Vec2f primitive attribute to use
as the uv set to bake with respect to, rather than the mesh's default uv.

The __mode__ attribute defines how the primary rays are generated. See the introduction for a more
detailed explanation of the available modes.

The __bias__ attribute defines the ray origin offset in the various baking modes. It is essential
that this value be large enough to avoid false self-occlusion, but small enough to avoid incorrect
of intervening geometry. This setting will likely affect your choice for the "near" and "far"
attribute settings.  By default "use_relative_bias" is set to true.  In this mode, the bias value is
scaled by the magnitude of the position.  The intention is to avoid floating point precision issues
that are encountered when using a small bias to offset from world positions that are very large.  If
you encounter cracks in your bake maps, an offset that is too close to the surface being baked is the
likely cause.  Try increasing the bias value in those cases.

Internally, the BakeCamera produces an image map that maps (u, v) to P. By default, the size of this
map matches that of the image being rendered. Since this map is a discretization of a continuous
function, the default size might be inadequate, either too detailed or not detailed enough. Use the
"map factor" parameter to either increase or decrease the size of this internal lookup.

Normals require special handing. Only normals that are available on the geometry (either computed or
supplied explicitly) can be computed by the BakeCamera. In particular, shader supplied normals via
normal mapping are not available to the BakeCamera. Use the "normal map" attribute to supply a normal
map to the BakeCamera if you want it to use these normals when computing primary ray directions.

The __normal map space__ attribute defines the space of the user supplied normal map. If you baked
normals out of moonray as an aov, then you'll want to use "camera space". If you are using a painted
normal map, you'll most likely want to use "tangent space."

## Examples
### Basic

![]({{ "/assets/images/user-reference/how-to-guides/baking-textures/bake_mesh.png" | absolute_url }})
![]({{ "/assets/images/user-reference/how-to-guides/baking-textures/mesh.png" | absolute_url }})
```lua
-- bake_mesh.rdla
-- bake the lighting on the planeGeom, from the camera viewpoint
-- moonray -in bake_mesh.rdla -out bake_mesh.exr
--
SceneVariables {
 ["image width"] = 1000,
 ["image height"] = 1000,
}
-------------------------------------------------------
local key = EnvLight("/Scene/lighting/key") {
 ["texture"] = "//work/rd/raas/maps/env_maps/parking_lot-med.exr",
 ["visible in camera"] = 1
}
local lightSet = LightSet("/Scene/lighting/lightSet") {
 key,
}
-------------------------------------------------------
geoms = {}
assignments = {}
-------------------------------------------------------
local checkerMap = ImageMap("/Scene/surfacing/checkerMap") {
 ["texture"] = "/work/rd/raas/maps/misc/rgb_checker_black.exr",
}
-------------------------------------------------------
local planeMtl = BaseMaterial("/Scene/surfacing/planeMtl") {
 ["diffuse color"] = bind(checkerMap),
}
-------------------------------------------------------
local planeGeom = RdlMeshGeometry("/Scene/geometry/planeGeom") {
 ["vertex list"] = {Vec3(-0.5, 0.0, 0.5),
 Vec3( 0.5, 0.0, 0.5),
 Vec3( 0.5, 0.0, -0.5),
 Vec3(-0.5, 0.0, -0.5)},
 ["normal list"] = {Vec3(0, 1, 0),
 Vec3(0, 1, 0),
 Vec3(0, 1, 0),
 Vec3(0, 1, 0)},
 ["uv list"] = {Vec2(0.0, 0.0),
 Vec2(1.0, 0.0),
 Vec2(1.0, 1.0),
 Vec2(0.0, 1.0)},
 ["vertices by index"] = {0, 1, 2, 3},
 ["face vertex count"] = {4},
 ["is subd"] = false,
}
local triGeom = RdlMeshGeometry("/Scene/geometry/triGeom") {
 ["vertex list"] = {Vec3(-0.5, 0.25, 0.5),
 Vec3( 0.5, 0.25, 0.5),
 Vec3( 0, 0.25, -0.5)},
 ["normal list"] = {Vec3(0, 1, 0),
 Vec3(0, 1, 0),
 Vec3(0, 1, 0)},
 ["uv list"] = {Vec2(0.0, 0.0),
 Vec2(1.0, 0.0),
 Vec2(0.5, 1.0)},
 ["vertices by index"] = {0, 1, 2},
 ["face vertex count"] = {3},
 ["is subd"] = false,
}
table.insert(geoms, planeGeom)
table.insert(geoms, triGeom)
table.insert(assignments, {planeGeom, "", planeMtl, lightSet})
table.insert(assignments, {triGeom, "", planeMtl, lightSet})
-------------------------------------------------------
GeometrySet("Scene/geometrySet")(geoms)
Layer("/Scene/layer")(assignments)
-------------------------------------------------------
BakeCamera("/Scene/rendering/camera") {
 ["node xform"] = translate(0, .75, 3),
 ["geometry"] = planeGeom,
 ["mode"] = 0 ,-- camera
 ["near"] = .0001,
 ["far"] = 1,
```

### Baking along a normal
![]({{ "/assets/images/user-reference/how-to-guides/baking-textures/sphere.png" | absolute_url }})
![]({{ "/assets/images/user-reference/how-to-guides/baking-textures/sphere_bake.png" | absolute_url }})

```lua
-- Bake a sphere along its normal directions
-- raas_render -in sphere.rdla -out sphere.exr
--
SceneVariables {
 ["image width"] = 3000,
 ["image height"] = 3000,
}
-------------------------------------------------------
local key = EnvLight("/Scene/lighting/key") {
 ["texture"] = "//work/rd/raas/maps/env_maps/parking_lot-med.exr",
 ["visible in camera"] = 1
}
local lightSet = LightSet("/Scene/lighting/lightSet") {
 key,
}
-------------------------------------------------------
geoms = {}
assignments = {}
-------------------------------------------------------
local sphereMtl = BaseMaterial("/Scene/surfacing/sphereMtl") {
 ["specular roughness"] = 0,
 ["diffuse factor"] = 0,
}
-------------------------------------------------------
local sphereGeom = MmGeometry("/Scene/geometry/sphere") {
 ["node xform"] = translate(0, .75, 0),
 ["model"] = "/work/rd/raas/models/ball-new.mm"
}
table.insert(geoms, sphereGeom)
table.insert(assignments, {sphereGeom, "", sphereMtl, lightSet})
-------------------------------------------------------
BakeCamera("/Scene/rendering/camera") {
 ["node xform"] = translate(0, .75, 3),
 ["geometry"] = sphereGeom,
 ["mode"] = 1, -- normals
 ["bias"] = .001
}
GeometrySet("Scene/geometrySet")(geoms)
Layer("/Scene/layer")(assignments)
```

### Generating a Normal Map
![]({{ "/assets/images/user-reference/how-to-guides/baking-textures/sphere2.png" | absolute_url }})
![]({{ "/assets/images/user-reference/how-to-guides/baking-textures/sphere_normals.png" | absolute_url }})
![]({{ "/assets/images/user-reference/how-to-guides/baking-textures/sphere_bake2.png" | absolute_url }})

```lua
This example is similar to the previous example, except that the surfacing of the sphere contains a normal map. In order to take these normals into account, we can run a pre-pass that generates the normal map and then a second pass that generates a bake map along these normals.

-- sphere_bake_normals.rdla
-- This bakes a normal map as an aov output using reverse normals baking mode.
-- raas_render -in sphere_bake_normals.rdla
-- FIXME: why do I need to re-order and rename the normal map channels?
-- oiiotool sphere_normals.exr -ch "R=normal.x,G=normal.y,B=normal.z" -o sphere_normals_rgb.exr
-- maketx sphere_normals_rgb.exr --format exr -d half --nchannels 3 --oiio --wrap periodic --compression zip -o sphere_normals.tx
-- now sphere_normals.tx can be used as an input to our BakeCamera in the 2nd pass.
--
SceneVariables {
 ["image width"] = 1000,
 ["image height"] = 1000,
 ["output file"] = "" -- suppress output
}
-------------------------------------------------------
local key = EnvLight("/Scene/lighting/key") {
 ["texture"] = "//work/rd/raas/maps/env_maps/parking_lot-med.exr",
 ["visible in camera"] = 1
}
local lightSet = LightSet("/Scene/lighting/lightSet") {
 key,
}
-------------------------------------------------------
geoms = {}
assignments = {}
-------------------------------------------------------
local normalMap = ImageMap("/normalMap") {
 ["texture"] = "/work/rd/raas/maps/misc/normal/scales_crop.exr",
 ["wrap around"] = true
}
local sphereMtl = BaseMaterial("/Scene/surfacing/sphereMtl") {
 ["specular roughness"] = 0,
 ["diffuse factor"] = 0,
 ["input normal"] = bind(ImageMap("/normalMap")),
 ["input normal dial"] = 1.0
}
-------------------------------------------------------
local sphereGeom = MmGeometry("/Scene/geometry/sphere") {
 ["node xform"] = translate(0, .75, 0),
 ["model"] = "/work/rd/raas/models/ball-new.mm"
}
table.insert(geoms, sphereGeom)
table.insert(assignments, {sphereGeom, "", sphereMtl, lightSet})
-------------------------------------------------------
BakeCamera("/Scene/rendering/camera") {
 ["node xform"] = translate(0, .75, 3),
 ["geometry"] = sphereGeom,
 ["mode"] = 3, -- -N
 ["bias"] = .001,
 ["near"] = .0001,
 ["far"] = 1,
}
GeometrySet("Scene/geometrySet")(geoms)
Layer("/Scene/layer")(assignments)
RenderOutput("/Normals") {
 ["file name"] = "sphere_normals.exr",
 ["result"] = 7, -- material aov
 ["material aov"] = "normal"
}

Once we have generated sphere_normals.tx we can use that texture map as an explicit input to the BakeCamera.


-- sphere_bake.rdla
-- raas_render -in sphere_bake.rdla -out sphere_bake.exr
--
SceneVariables {
 ["image width"] = 1000,
 ["image height"] = 1000,
}
-------------------------------------------------------
local key = EnvLight("/Scene/lighting/key") {
 ["texture"] = "//work/rd/raas/maps/env_maps/parking_lot-med.exr",
 ["visible in camera"] = 1
}
local lightSet = LightSet("/Scene/lighting/lightSet") {
 key,
}
-------------------------------------------------------
geoms = {}
assignments = {}
-------------------------------------------------------
local normalMap = ImageMap("/normalMap") {
 ["texture"] = "/work/rd/raas/maps/misc/normal/scales_crop.exr",
 ["wrap around"] = true
}
local sphereMtl = BaseMaterial("/Scene/surfacing/sphereMtl") {
 ["specular roughness"] = 0,
 ["diffuse factor"] = 0,
 ["input normal"] = bind(ImageMap("/normalMap")),
 ["input normal dial"] = 1.0
}
-------------------------------------------------------
local sphereGeom = MmGeometry("/Scene/geometry/sphere") {
 ["node xform"] = translate(0, .75, 0),
 ["model"] = "/work/rd/raas/models/ball-new.mm"
}
table.insert(geoms, sphereGeom)
table.insert(assignments, {sphereGeom, "", sphereMtl, lightSet})
-------------------------------------------------------
BakeCamera("/Scene/rendering/camera") {
 ["node xform"] = translate(0, .75, 3),
 ["geometry"] = sphereGeom,
 ["mode"] = 1, -- normal
 ["bias"] = .001,
 ["normal map"] = "sphere_normals.tx"
}
GeometrySet("Scene/geometrySet")(geoms)
Layer("/Scene/layer")(assignments)
{noformat}
*Using an Existing Normal Map*
The baking step in the previous example will be inefficient if the normals can be supplied from an existing normal map. Typically these are provided in tangent space.
{noformat}
-- sphere_bake.rdla
-- raas_render -in sphere_bake.rdla -out sphere_bake.exr
--
SceneVariables {
 ["image width"] = 1000,
 ["image height"] = 1000,
}
-------------------------------------------------------
local key = EnvLight("/Scene/lighting/key") {
 ["texture"] = "//work/rd/raas/maps/env_maps/parking_lot-med.exr",
 ["visible in camera"] = 1
}
local lightSet = LightSet("/Scene/lighting/lightSet") {
 key,
}
-------------------------------------------------------
geoms = {}
assignments = {}
-------------------------------------------------------
local normalMap = ImageMap("/normalMap") {
 ["texture"] = "/work/rd/raas/maps/misc/normal/scales_crop.exr",
 ["wrap around"] = true
}
local sphereMtl = BaseMaterial("/Scene/surfacing/sphereMtl") {
 ["specular roughness"] = 0,
 ["diffuse factor"] = 0,
 ["input normal"] = bind(ImageMap("/normalMap")),
 ["input normal dial"] = 1.0
}
-------------------------------------------------------
local sphereGeom = MmGeometry("/Scene/geometry/sphere") {
 ["node xform"] = translate(0, .75, 0),
 ["model"] = "/work/rd/raas/models/ball-new.mm"
}
table.insert(geoms, sphereGeom)
table.insert(assignments, {sphereGeom, "", sphereMtl, lightSet})
-------------------------------------------------------
BakeCamera("/Scene/rendering/camera") {
 ["node xform"] = translate(0, .75, 3),
 ["geometry"] = sphereGeom,
 ["mode"] = 1, -- normal
 ["bias"] = .001,
 ["normal map"] = "/work/rd/raas/maps/misc/normal/scales_crop.exr",
 ["normal map space"] = 1 -- tangent space
}
GeometrySet("Scene/geometrySet")(geoms)
Layer("/Scene/layer")(assignments)
```

### UDIMs
![]({{ "/assets/images/user-reference/how-to-guides/baking-textures/mesh_udim.png" | absolute_url }})
![]({{ "/assets/images/user-reference/how-to-guides/baking-textures/bake_plane_1001.png" | absolute_url }})

```lua
-- bake_plane.rdla
-- in sh
-- for udim in 1001 1002 1003 1004 1011 1012 1013 1014 1021 1022 1023 1024 1031 1032 1033 1034
-- do
-- raas_render -in bake_plane.rdla -out bake_plane_${udim}.exr -rdla_set udim_to_bake $udim
-- done
--
SceneVariables {
 ["image width"] = 1000,
 ["image height"] = 1000,
}
-------------------------------------------------------
local key = EnvLight("/Scene/lighting/key") {
 ["texture"] = "/work/rd/raas/maps/env_maps/parking_lot-med.exr",
 ["visible in camera"] = 1
}
local lightSet = LightSet("/Scene/lighting/lightSet") {
 key,
}
-------------------------------------------------------
geoms = {}
assignments = {}
-------------------------------------------------------
local checkerMap = ImageMap("/Scene/surfacing/checkerMap") {
 ["texture"] = "/work/rd/raas/maps/misc/udim/rgb_checker_black_<UDIM>.exr",
 ["wrap around"] = false,
}
-------------------------------------------------------
local checkerMtl = BaseMaterial("/Scene/surfacing/checkerMtl") {
 ["diffuse color"] = bind(checkerMap),
}
-------------------------------------------------------
local vertList = {Vec3(-0.5, 0.0, 0.5),
 Vec3(-0.25, 0.0, 0.5),
 Vec3( 0.0, 0.0, 0.5),
 Vec3( 0.25, 0.0, 0.5),
 Vec3( 0.5, 0.0, 0.5),
Vec3(-0.5, 0.0, 0.25),
 Vec3(-0.25, 0.0, 0.25),
 Vec3( 0.0, 0.0, 0.25),
 Vec3( 0.25, 0.0, 0.25),
 Vec3( 0.5, 0.0, 0.25),
Vec3(-0.5, 0.0, 0.0),
 Vec3(-0.25, 0.0, 0.0),
 Vec3( 0.0, 0.0, 0.0),
 Vec3( 0.25, 0.0, 0.0),
 Vec3( 0.5, 0.0, 0.0),
Vec3(-0.5, 0.0, -0.25),
 Vec3(-0.25, 0.0, -0.25),
 Vec3( 0.0, 0.0, -0.25),
 Vec3( 0.25, 0.0, -0.25),
 Vec3( 0.5, 0.0, -0.25),
Vec3(-0.5, 0.0, -0.5),
 Vec3(-0.25, 0.0, -0.5),
 Vec3( 0.0, 0.0, -0.5),
 Vec3( 0.25, 0.0, -0.5),
 Vec3( 0.5, 0.0, -0.5)}

local planeGeom = RdlMeshGeometry("/Scene/geometry/planeGeom") {
 ["vertex list"] = vertList,
 ["vertices by index"] = {0, 1, 6, 5,
 1, 2, 7, 6,
 2, 3, 8, 7,
 3, 4, 9, 8,
5, 6, 11, 10,
 6, 7, 12, 11,
 7, 8, 13, 12,
 8, 9, 14, 13,
10, 11, 16, 15,
 11, 12, 17, 16,
 12, 13, 18, 17,
 13, 14, 19, 18,
15, 16, 21, 20,
 16, 17, 22, 21,
 17, 18, 23, 22,
 18, 19, 24, 23},
["normal list"] = {Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
 Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
 Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
 Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
 Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
 Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
 Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
 Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
 Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
 Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
 Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
 Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
 Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0)},

 ["uv list"] = {Vec2(0.000001, 0.000001), Vec2(0.999999, 0.000001), Vec2(0.999999, 0.999999), Vec2(0.000001, 0.999999),
 Vec2(1.000001, 0.000001), Vec2(1.999999, 0.000001), Vec2(1.999999, 0.999999), Vec2(1.000001, 0.999999),
 Vec2(2.000001, 0.000001), Vec2(2.999999, 0.000001), Vec2(2.999999, 0.999999), Vec2(2.000001, 0.999999),
 Vec2(3.000001, 0.000001), Vec2(3.999999, 0.000001), Vec2(3.999999, 0.999999), Vec2(3.000001, 0.999999),
Vec2(0.000001, 1.000001), Vec2(0.999999, 1.000001), Vec2(0.999999, 1.999999), Vec2(0.000001, 1.999999),
 Vec2(1.000001, 1.000001), Vec2(1.999999, 1.000001), Vec2(1.999999, 1.999999), Vec2(1.000001, 1.999999),
 Vec2(2.000001, 1.000001), Vec2(2.999999, 1.000001), Vec2(2.999999, 1.999999), Vec2(2.000001, 1.999999),
 Vec2(3.000001, 1.000001), Vec2(3.999999, 1.000001), Vec2(3.999999, 1.999999), Vec2(3.000001, 1.999999),
Vec2(0.000001, 2.000001), Vec2(0.999999, 2.000001), Vec2(0.999999, 2.999999), Vec2(0.000001, 2.999999),
 Vec2(1.000001, 2.000001), Vec2(1.999999, 2.000001), Vec2(1.999999, 2.999999), Vec2(1.000001, 2.999999),
 Vec2(2.000001, 2.000001), Vec2(2.999999, 2.000001), Vec2(2.999999, 2.999999), Vec2(2.000001, 2.999999),
 Vec2(3.000001, 2.000001), Vec2(3.999999, 2.000001), Vec2(3.999999, 2.999999), Vec2(3.000001, 2.999999),
Vec2(0.000001, 3.000001), Vec2(0.999999, 3.000001), Vec2(0.999999, 3.999999), Vec2(0.000001, 3.999999),
 Vec2(1.000001, 3.000001), Vec2(1.999999, 3.000001), Vec2(1.999999, 3.999999), Vec2(1.000001, 3.999999),
 Vec2(2.000001, 3.000001), Vec2(2.999999, 3.000001), Vec2(2.999999, 3.999999), Vec2(2.000001, 3.999999),
 Vec2(3.000001, 3.000001), Vec2(3.999999, 3.000001), Vec2(3.999999, 3.999999), Vec2(3.000001, 3.999999)},
 
["face vertex count"] = {4, 4, 4, 4,
 4, 4, 4, 4,
 4, 4, 4, 4,
 4, 4, 4, 4},
 ["is subd"] = false,
}
local triGeom = RdlMeshGeometry("/Scene/geometry/triGeom") {
 ["node xform"] = translate(0.0, 0.2, 0.0),
 ["vertex list"] = vertList,
 ["vertices by index"] = {0, 1, 6,
 1, 2, 7,
 2, 3, 8,
 3, 4, 9,
5, 6, 11,
 6, 7, 12,
 7, 8, 13,
 8, 9, 14,
10, 11, 16,
 11, 12, 17,
 12, 13, 18,
 13, 14, 19,
15, 16, 21,
 16, 17, 22,
 17, 18, 23,
 18, 19, 24},
["normal list"] = {Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
 Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
 Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
 Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
 Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
 Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
 Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
 Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
 Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
 Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
 Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
 Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0),
 Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0), Vec3(0.0, 1.0, 0.0)},
["uv list"] = {Vec2(0.000001, 0.000001), Vec2(0.999999, 0.000001), Vec2(0.999999, 0.999999),
 Vec2(1.000001, 0.000001), Vec2(1.999999, 0.000001), Vec2(1.999999, 0.999999),
 Vec2(2.000001, 0.000001), Vec2(2.999999, 0.000001), Vec2(2.999999, 0.999999),
 Vec2(3.000001, 0.000001), Vec2(3.999999, 0.000001), Vec2(3.999999, 0.999999),
Vec2(0.000001, 1.000001), Vec2(0.999999, 1.000001), Vec2(0.999999, 1.999999),
 Vec2(1.000001, 1.000001), Vec2(1.999999, 1.000001), Vec2(1.999999, 1.999999),
 Vec2(2.000001, 1.000001), Vec2(2.999999, 1.000001), Vec2(2.999999, 1.999999),
 Vec2(3.000001, 1.000001), Vec2(3.999999, 1.000001), Vec2(3.999999, 1.999999),
Vec2(0.000001, 2.000001), Vec2(0.999999, 2.000001), Vec2(0.999999, 2.999999),
 Vec2(1.000001, 2.000001), Vec2(1.999999, 2.000001), Vec2(1.999999, 2.999999),
 Vec2(2.000001, 2.000001), Vec2(2.999999, 2.000001), Vec2(2.999999, 2.999999),
 Vec2(3.000001, 2.000001), Vec2(3.999999, 2.000001), Vec2(3.999999, 2.999999),
Vec2(0.000001, 3.000001), Vec2(0.999999, 3.000001), Vec2(0.999999, 3.999999),
 Vec2(1.000001, 3.000001), Vec2(1.999999, 3.000001), Vec2(1.999999, 3.999999),
 Vec2(2.000001, 3.000001), Vec2(2.999999, 3.000001), Vec2(2.999999, 3.999999),
 Vec2(3.000001, 3.000001), Vec2(3.999999, 3.000001), Vec2(3.999999, 3.999999)},
 
["face vertex count"] = {3, 3, 3, 3,
 3, 3, 3, 3,
 3, 3, 3, 3,
 3, 3, 3, 3},
 ["is subd"] = false,
}
table.insert(geoms, planeGeom)
table.insert(geoms, triGeom)
table.insert(assignments, {planeGeom, "", checkerMtl, lightSet})
table.insert(assignments, {triGeom, "", checkerMtl, lightSet})

-------------------------------------------------------
GeometrySet("Scene/geometrySet")(geoms)
Layer("/Scene/layer")(assignments)
------------------------------------------------------
BakeCamera("/Scene/rendering/camera") {
 ["node xform"] = translate(0, .75, 3),
 ["geometry"] = planeGeom,
 -- must be set via -rdla-set udim_to_bake value
 ["udim"] = udim_to_bake,
 ["near"] = .0001,
 ["far"] = 1,
}
```
