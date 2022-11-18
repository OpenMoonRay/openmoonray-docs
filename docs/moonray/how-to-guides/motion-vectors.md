---
title: Motion Vectors

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# Motion Vectors

```lua
RenderOutput("/output/motion_vectors") {
    ["result"] = "material aov",
    ["material aov"] = "motionvec",
    ["channel_suffix_mode"] = "rgb"
}
```
This example produces a two-channel (.R, .G) output that estimates pixel
motion in screen space units per frame. For reference, screen space is
the camera frustum space normalized from -1 on the left to +1 on the
right &#8211; i.e., not pixels. The values are resolution independent. Other systems may refer to these as _NDC coordinates_.

# More Details

Like all aovs rendered with the average filter, these values are
pre-multiplied by alpha, which is most likely not what you'll want to
work with. So you'll most likely want to do an unpremult operation on
this aov before doing any additional work with it.  You can create a
matte which matches your motion vector aov as:

```lua
RenderOutput("/alpha") {
    ["result"] = "material aov",
    ["material_aov"] = "matte",
    ["channel_name"] = "A"
}
```

Under the hood, the motion vector output makes use of an internally
generated primitive attribute, which contains the motion in render space
units per shutter interval.  You will not have a normal use for this
value, but just in case, it can be accessed as:

```lua
RenderOutput("/output/primattr_motion") {
    ["result"] = "material aov",
    ["material_aov"] = "vec3:motion",
    ["channel_suffix_mode"] = "rgb"
}
```
To produce a motion vector output, you must render with 3D motion-blur
active. Without active 3D motion-blur, the renderer does not store
motion information and will not be able to produce motion output. To
simulate a non-motion-blur render and still produce motion vector
output, use a very small shutter around the time you are
interested in. For example:

```lua
-- simulate a non-mb render with a near  
-- instantaneous shutter when producing motion vector output  
Camera("shot_cam") {  
    ["mb_shutter_open"] = -.0001,  
    ["mb_shutter_close"] = 0  
}
```

# Limitations

-   Motion is not correctly computed for multi-level instancing setups. 
    Only one level of instancing is considered when computing motion.

-   Motion from volumes is not computed.

# Full Example RDLA

![]({{site.baseurl}}/assets/images/moonray/how-to-guides/motion-vectors/image1.png)

```lua
SceneVariables {  
    ["image_width"] = 640,  
    ["image_height"] = 360,  
    ["output_file"] = ""  
}  

Camera("/scene/rendering/camera") {  
    ["node_xform"] = blur(translate(0, .08, 10), translate(0, 0, 10)),  
    -- use an extremely short shutter duration to produce, essentially,  
    -- a non-mb render that contains velocity information that is valid  
    -- at time 0.  one could move this short shutter around to produce  
    -- instantaneous velocity information at any desired moment in time.  
    ["mb_shutter_open"] = -0.0001,  
    ["mb_shutter_close"] = 0,  
    ["mb"] = true,  
}  
  
------------------------------------------------------------------------  
  
local key = EnvLight("/scene/lighting/key") {}  
  
local lightSet = LightSet("/scene/lighting/light_set") { key }  
------------------------------------------------------------------------  
  
local mtl = DwaSolidDielectricMaterial("/scene/surfacing/mtl") {}  
------------------------------------------------------------------------  
  
geoms = {}  
assignments = {}  
  
-- test quad mesh, camera motion only  
local planeGeom = RdlMeshGeometry("/scene/geometry/plane_geom") {  
    ["node_xform"] = translate(-3.0, 1.5, 0),  
    ["vertex_list"] = {Vec3(-0.5, -0.5, 0.0), Vec3(0.5, -0.5, 0.0),
Vec3(0.5, 0.5, 0.0), Vec3(-0.5, 0.5, 0.0)},  
    ["vertices_by_index"] = {0, 1, 2, 3},  
    ["face_vertex_count"] = {4},  
    ["is_subd"] = false  
}  
  
-- test quad mesh, camera motion + rotation  
local planeGeom1 = RdlMeshGeometry("/scene/geometry/plane_geom1") {  
    ["node_xform"] = blur(rotate(45, 0, 0, -1) * translate(-1.5, 1.5,
0), rotate(0, 0, 0, -1) * translate(-1.5, 1.5, 0)),  
    ["vertex_list"] = {Vec3(-0.5, -0.5, 0.0), Vec3(0.5, -0.5, 0.0),
Vec3(0.5, 0.5, 0.0), Vec3(-0.5, 0.5, 0.0)},  
    ["vertices_by_index"] = {0, 1, 2, 3},  
    ["face_vertex_count"] = {4},  
    ["is_subd"] = false  
}  
  
-- test quad mesh, camera motion + rotation/instancing  
local planeGeom2 = RdlMeshGeometry("/scene/geometry/plane_geom2") {  
    ["node_xform"] = blur(rotate(45, 0, 0, -1) * translate(0.0, 1.5,
0), rotate(0, 0, 0, -1) * translate(0.0, 1.5, 0)),  
    ["use_rotation_motion_blur"] = true,  
    ["vertex_list"] = {Vec3(-0.5, -0.5, 0.0), Vec3(0.5, -0.5, 0.0),
Vec3(0.5, 0.5, 0.0), Vec3(-0.5, 0.5, 0.0)},  
    ["vertices_by_index"] = {0, 1, 2, 3},  
    ["face_vertex_count"] = {4},  
    ["is_subd"] = false  
}  
  
-- test subd mesh, camera motion + rotation  
local planeGeom3 = RdlMeshGeometry("/scene/geometry/plane_geom3") {  
    ["node_xform"] = blur(rotate(45, 0, 0, -1) * translate(1.5, 1.5,
0), rotate(0, 0, 0, -1) * translate(1.5, 1.5, 0)),  
    ["vertex_list"] = {Vec3(-0.5, -0.5, 0.0), Vec3(0.5, -0.5, 0.0),
Vec3(0.5, 0.5, 0.0), Vec3(-0.5, 0.5, 0.0)},  
    ["vertices_by_index"] = {0, 1, 2, 3},  
    ["face_vertex_count"] = {4},  
    ["is_subd"] = true  
}  
  
-- test subd mesh, camera motion + rotation/instancing  
local planeGeom4 = RdlMeshGeometry("/scene/geometry/plane_geom4") {  
    ["node_xform"] = blur(rotate(45, 0, 0, -1) * translate(3.0, 1.5, 0), rotate(0, 0, 0, -1) * translate(3.0, 1.5, 0)),  
    ["use_rotation_motion_blur"] = true,  
    ["vertex_list"] = {Vec3(-0.5, -0.5, 0.0), Vec3(0.5, -0.5, 0.0),
Vec3(0.5, 0.5, 0.0), Vec3(-0.5, 0.5, 0.0)},  
    ["vertices_by_index"] = {0, 1, 2, 3},  
    ["face_vertex_count"] = {4},  
    ["is_subd"] = true  
}  
  
-- test tri mesh, camera motion + rotation  
local planeGeom5 = RdlMeshGeometry("/scene/geometry/plane_geom5") {  
    ["node_xform"] = blur(rotate(45, 0, 0, -1) * translate(-3.0, 0.0,
0), rotate(0, 0, 0, -1) * translate(-3.0, 0.0, 0)),  
    ["vertex_list"] = {Vec3(-0.5, -0.5, 0.0), Vec3(0.5, -0.5, 0.0),
Vec3(0.5, 0.5, 0.0)},  
    ["vertices_by_index"] = {0, 1, 2},  
    ["face_vertex_count"] = {3},  
    ["is_subd"] = false  
}  
  
-- test tri mesh, camera motion + rotation/instancing  
local planeGeom6 = RdlMeshGeometry("/scene/geometry/plane_geom6") {  
    ["node_xform"] = blur(rotate(45, 0, 0, -1) * translate(-1.5, 0.0,
0), rotate(0, 0, 0, -1) * translate(-1.5, 0.0, 0)),  
    ["use_rotation_motion_blur"] = true,  
    ["vertex_list"] = {Vec3(-0.5, -0.5, 0.0), Vec3(0.5, -0.5, 0.0),
Vec3(0.5, 0.5, 0.0)},  
    ["vertices_by_index"] = {0, 1, 2},  
    ["face_vertex_count"] = {3},  
    ["is_subd"] = false  
}  
  
-- test bezier curve camera motion  
-- TODO: replace with RdlCurveGeom and add line segement tests  
local curveGeom = McGeometry("/scene/geometry/curve_geom") {  
    ["node_xform"] = scale(.5, .5, .5) * translate(0.0, -0.25, 0.0),  
    ["model"] =
"/work/rd/raas/models/hair/[curly_hair.mc](http://curly_hair.mc)",  
    ["radius"] = 10  
}  
  
-- test bezier curve camera motion + translation  
local curveGeom1 = McGeometry("/scene/geometry/curve_geom1") {  
    ["node_xform"] = blur(scale(.5, .5, .5) * translate(1.0, -0.25,
0.0),  
        scale(.5, .5, .5) * translate(1.5, -0.25, 0.0)),  
    ["model"] =
"/work/rd/raas/models/hair/[curly_hair.mc](http://curly_hair.mc)",  
    ["radius"] = 10  
}  
  
-- test bezier curve via instance geometry  
local curveGeom2 = McGeometry("/scene/geometry/curve_geom2") {  
    ["model"] =
"/work/rd/raas/models/hair/[curly_hair.mc](http://curly_hair.mc)",  
    ["radius"] = 10  
}  
local ig0 = InstanceGeometry("/scene/geometry/ig0") {  
    ["references"] = { curveGeom2 },  
    ["positions"] = { Vec3(3.0, -0.25, 0.0) },  
    ["scales"] = { Vec3(.5, .5, .5) },  
    ["velocities"] = { Vec3(10.0, 0.0, 0.0) }  
}  
  
-- test points with camera motion  
local pointGeom = RdlPointGeometry("/scene/geometry/point_geom") {  
    ["node_xform"] = translate(-3.0, -1.5, 0),  
    ["vertex_list"] = { Vec3(-0.25, -0.25, 0.0), Vec3(0.25, 0.25, 0.0)
},  
    ["radius_list"] = { .125, .125 },  
}  
  
-- test points with rotation  
local pointGeom1 = RdlPointGeometry("/scene/geometry/point_geom1") {  
    ["node_xform"] = blur(rotate(45, 0, 0, 1) * translate(-1.5, -1.5,
0), rotate(0, 0, 0, 1) * translate(-1.5, -1.5, 0)),  
    ["vertex_list"] = { Vec3(-0.25, -0.25, 0.0), Vec3(0.25, 0.25, 0.0)
},  
    ["radius_list"] = { .125, .125 },  
}  
  
-- test points with rotation/instancing  
local pointGeom2 = RdlPointGeometry("/scene/geometry/point_geom2") {  
    ["node_xform"] = blur(rotate(45, 0, 0, 1) * translate(0.0, -1.5,
0), rotate(0, 0, 0, 1) * translate(0.0, -1.5, 0)),  
    ["use_rotation_motion_blur"] = true,  
    ["vertex_list"] = { Vec3(-0.25, -0.25, 0.0), Vec3(0.25, 0.25, 0.0)
},  
    ["radius_list"] = { .125, .125 },  
}  
  
  
table.insert(geoms, planeGeom)  
table.insert(geoms, planeGeom1)  
table.insert(geoms, planeGeom2)  
table.insert(geoms, planeGeom3)  
table.insert(geoms, planeGeom4)  
table.insert(geoms, planeGeom5)  
table.insert(geoms, planeGeom6)  
table.insert(geoms, curveGeom)  
table.insert(geoms, curveGeom1)  
table.insert(geoms, ig0)  
table.insert(geoms, pointGeom)  
table.insert(geoms, pointGeom1)  
table.insert(geoms, pointGeom2)  
table.insert(assignments, {planeGeom, "", mtl, lightSet})  
table.insert(assignments, {planeGeom1, "", mtl, lightSet})  
table.insert(assignments, {planeGeom2, "", mtl, lightSet})  
table.insert(assignments, {planeGeom3, "", mtl, lightSet})  
table.insert(assignments, {planeGeom4, "", mtl, lightSet})  
table.insert(assignments, {planeGeom5, "", mtl, lightSet})  
table.insert(assignments, {planeGeom6, "", mtl, lightSet})  
table.insert(assignments, {curveGeom, "", mtl, lightSet})  
table.insert(assignments, {curveGeom1, "", mtl, lightSet})  
table.insert(assignments, {curveGeom2, "", mtl, lightSet})  
table.insert(assignments, {ig0, "", undef(), lightSet})  
table.insert(assignments, {pointGeom, "", mtl, lightSet})  
table.insert(assignments, {pointGeom1, "", mtl, lightSet})  
table.insert(assignments, {pointGeom2, "", mtl, lightSet})  
  
GeometrySet("/scene/geometry_set")(geoms)  
Layer("/scene/layer")(assignments)  
  
------------------------------------------------------------------------  
-- this is the output we want to test  
RenderOutput("/output/motion_vectors") {  
    ["result"] = "material aov",  
    ["material_aov"] = "motionvec",  
    ["channel_suffix_mode"] = "rgb"  
}  
  
-- create a matte that we'll use to unpremult our result  
RenderOutput("/output/alpha") {  
    ["result"] = "material aov",  
    ["material_aov"] = "matte",  
    ["channel_name"] = "A"  
}  
  
-- blue channel should be identically 0  
-- so we create a material matte aov that will only match  
-- a non-existent geometry label  
RenderOutput("/output/blue") {  
    ["result"] = "material aov",  
    ["material_aov"] = "'does_not_exist'...matte",  
    ["channel_name"] = "B"  
}
```

## Script

```bash
# render, produce scene.exr  
moonray -in scene.rdla  
  
# rename motionvec.R,G and unpremult by alpha  
oiiotool scene.exr --ch "R=motionvec.R,G=motionvec.G,B,A" --unpremult -o
scene.exr
```