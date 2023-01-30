---
title: Bake Camera Example
---
### Basic

{%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.BakeCamera.examples.basic.images data=site.data.user-reference.scene-objects.cameras.BakeCamera-%}

```lua
local key = EnvLight("/Scene/lighting/key") { ... }

local lightSet = LightSet("/Scene/lighting/lightSet") {
    key,
}

geoms = {}
assignments = {}

local checkerMap = ImageMap("/Scene/surfacing/checkerMap") { ... }

local planeMtl = BaseMaterial("/Scene/surfacing/planeMtl") {
   ["diffuse color"] = bind(checkerMap),
}

local planeGeom = RdlMeshGeometry("/Scene/geometry/planeGeom") { ... }

local triGeom = RdlMeshGeometry("/Scene/geometry/triGeom") { ... }

table.insert(geoms, planeGeom)
table.insert(geoms, triGeom)
table.insert(assignments, {planeGeom, "", planeMtl, lightSet})
table.insert(assignments, {triGeom, "", planeMtl, lightSet})

GeometrySet("Scene/geometrySet")(geoms)
Layer("/Scene/layer")(assignments)

-------------------------------------------------------
BakeCamera("/Scene/rendering/camera") {
    ["node xform"] = translate(0, .75, 3),
    ["geometry"] = planeGeom,
    ["mode"] = 0 ,-- camera
    ["near"] = .0001,
    ["far"] = 1,
}
```

### Baking along a normal

{%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.BakeCamera.examples.bakingAlongNormal.images data=site.data.user-reference.scene-objects.cameras.BakeCamera-%}

```lua
local key = EnvLight("/Scene/lighting/key") { ... }

local lightSet = LightSet("/Scene/lighting/lightSet") {
    key,
}

geoms = {}
assignments = {}

local sphereMtl = BaseMaterial("/Scene/surfacing/sphereMtl") {
   ["specular roughness"] = 0,
   ["diffuse factor"] = 0,
}

local sphereGeom = MmGeometry("/Scene/geometry/sphere") { ... }

table.insert(geoms, sphereGeom)
table.insert(assignments, {sphereGeom, "", sphereMtl, lightSet})

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

{%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.BakeCamera.examples.generatingNormalMap.images data=site.data.user-reference.scene-objects.cameras.BakeCamera-%}

This example is similar to the previous example, except that the surfacing of the sphere contains a normal map. In order to take these normals into account, we can run a pre-pass that generates the normal map and then a second pass that generates a bake map along these normals. 

```lua
-- oiiotool sphere_normals.exr -ch "R=normal.x,G=normal.y,B=normal.z" -o sphere_normals_rgb.exr
-- maketx sphere_normals_rgb.exr --format exr -d half --nchannels 3 --oiio --wrap periodic --compression zip -o sphere_normals.tx
-- now sphere_normals.tx can be used as an input to our BakeCamera in the 2nd pass.
local key = EnvLight("/Scene/lighting/key") { ... }

local lightSet = LightSet("/Scene/lighting/lightSet") {
    key,
}

geoms = {}
assignments = {}

local normalMap = ImageMap("/normalMap") {
    ["texture"] = ...,
    ["wrap around"] = true
}

local sphereMtl = BaseMaterial("/Scene/surfacing/sphereMtl") {
   ["specular roughness"] = 0,
   ["diffuse factor"] = 0,
   ["input normal"] = bind(ImageMap("/normalMap")),
   ["input normal dial"] = 1.0
}

local sphereGeom = MmGeometry("/Scene/geometry/sphere") { ... }

table.insert(geoms, sphereGeom)
table.insert(assignments, {sphereGeom, "", sphereMtl, lightSet})

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
```

Once we have generated sphere_normals.tx we can use that texture map as an explicit input to the BakeCamera.

```lua
local key = EnvLight("/Scene/lighting/key") { ... }

local lightSet = LightSet("/Scene/lighting/lightSet") {
    key,
}

geoms = {}
assignments = {}

local normalMap = ImageMap("/normalMap") {
    ["texture"] = ...,
    ["wrap around"] = true
}

local sphereMtl = BaseMaterial("/Scene/surfacing/sphereMtl") {
   ["specular roughness"] = 0,
   ["diffuse factor"] = 0,
   ["input normal"] = bind(ImageMap("/normalMap")),
   ["input normal dial"] = 1.0
}

local sphereGeom = MmGeometry("/Scene/geometry/sphere") { ... }

table.insert(geoms, sphereGeom)
table.insert(assignments, {sphereGeom, "", sphereMtl, lightSet})

BakeCamera("/Scene/rendering/camera") {
    ["node xform"] = translate(0, .75, 3),
    ["geometry"] = sphereGeom,
    ["mode"] = 1, -- normal
    ["bias"] = .001,
    ["normal map"] = "sphere_normals.tx"
}

GeometrySet("Scene/geometrySet")(geoms)
Layer("/Scene/layer")(assignments)
```

### Using an Existing Normal Map
The baking step in the previous example will be inefficient if the normals can be supplied from an existing normal map. Typically these are provided in tangent space.

```lua
BakeCamera("/Scene/rendering/camera") {
    ["node xform"] = translate(0, .75, 3),
    ["geometry"] = sphereGeom,
    ["mode"] = 1, -- normal
    ["bias"] = .001,
    ["normal map"] = "path_to_existing_normal_map.exr",
    ["normal map space"] = 1 -- tangent space
}
```

### UDIMs

{%-include image-gallery.html images=site.data.user-reference.scene-objects.cameras.BakeCamera.examples.udims.images data=site.data.user-reference.scene-objects.cameras.BakeCamera-%}

```lua
local key = EnvLight("/Scene/lighting/key") { ... }

local lightSet = LightSet("/Scene/lighting/lightSet") {
    key,
}

geoms = {}
assignments = {}

local checkerMap = ImageMap("/Scene/surfacing/checkerMap") {
   ["texture"] = "..._<UDIM>.exr",
   ["wrap around"] = false,
}

local checkerMtl = BaseMaterial("/Scene/surfacing/checkerMtl") {
   ["diffuse color"] = bind(checkerMap),
}

local planeGeom = RdlMeshGeometry("/Scene/geometry/planeGeom") { ... }

local triGeom = RdlMeshGeometry("/Scene/geometry/triGeom") { ... }
		      
table.insert(geoms, planeGeom)
table.insert(geoms, triGeom)
table.insert(assignments, {planeGeom, "", checkerMtl, lightSet})
table.insert(assignments, {triGeom, "", checkerMtl, lightSet})

GeometrySet("Scene/geometrySet")(geoms)
Layer("/Scene/layer")(assignments)

BakeCamera("/Scene/rendering/camera") {
   ["node xform"] = translate(0, .75, 3),
   ["geometry"] = planeGeom,
   -- must be set via -rdla-set udim_to_bake value
   ["udim"] = udim_to_bake,
   ["near"] = .0001,
   ["far"] = 1,
}
```