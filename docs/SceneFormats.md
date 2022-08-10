# Moonray Scene Formats

Moonray uses a proprietary scene description format called RDL2. There are two primary file formats for RDL2:

- RDLA is a readable text format based on the programming language Lua
- RDLB is a binary format

You can use the program `rdl2_convert` to translate between the two formats, for example:

```
rdl2_convert -in scene_binary.rdlb -out scene_text.rdla
```

You can also read and write both formats from code using the `scene_rdl2` library.


## RDLA Format

An RDLA file is actually a Lua (https://www.lua.org) script, with some extensions to support RDL2 scene objects. It is intended primarily for authoring test data : you can use Lua features like functions and loops to automate and simplify the creation of test scenes. RDLA is less appropriate for large production scenes, since RDLB is much more efficient and compact in this situation.


### Objects, classes and attributes

An RDL2 scene is just a set of scene objects : each object having a name, class and attributes. In RDLA, an object is defined like this:

```Lua
BaseMaterial("/scene/sphere/base") {
    ["ior"] = 1.0,
    ["diffuse color"] = Rgb(0.8, 0.8, 0.2)
}
```

`BaseMaterial` is the class of the object, and `/scene/sphere/base` is the name. `ior` and `diffuse color` are attributes supported by the `BaseMaterial` class.

In most cases, classes are implemented as shared library plugins. Moonray searches for plugins on a path defined by the environment variable `RDL2_DSO_PATH`. In this case, assuming `RDL2_DSO_PATH` is set correctly, Moonray will find the library `BaseMaterial.so` somewhere on the path.

`BaseMaterial` has about 50 attributes in total. Attributes that you don't explicitly set take a default value defined by the class.

You can see the attributes of a class using the `rdl2_print` command:

```
$ rdl2_print BaseMaterial
BaseMaterial("Material") {
    ["anisotropic_direction"] = Vec2f(1, 0),  -- Vec2f, bindable
        -- label: anisotropic direction
    ["anisotropy"] = 0,  -- Float, bindable
    ["casts_caustics"] = false,  -- Bool
        -- label: casts caustics
    ["diffuse"] = true,  -- Bool
    ...
```

### Compound values

Compound values like `Rgb` are created using a construction function, as shown in the example. Some other examples of compound types  are `Rgba`, `Vec2`, `Vec3` and `Mat4`.

There are some additional functions to construct transform matrices:

```
translate(x, y, z)
rotate(degrees, axis_x, axis_y, axis_z)
scale(x, y, z)
```

All of the compound types have arithmetic operators defined. This is especially useful when setting transformation attributes:

```lua
SphereGeometry("/scene/sphere") {
    ["node xform"] = translate(4, 5, 6)*rotate(45, 0, 0, 1)*scale(2, 2, 2)
}
```

A few Moonray attributes expect a list of values. These are set using curly braces, like this:

```lua
RampMap("/scene/ramp") {
["colors"] = {Rgb(0.1, 0.2, 0.3), Rgb(0.4, 0.5, 0.6), Rgb(0.7, 0.8, 0.9)}
}
```

### Sets and object references

Some built-in classes are used to define a set of objects : `GeometrySet` and `LightSet` are examples. Sets are defined using curly braces, like lists, but the members are references to other objects. 

A simple way to reference an existing object is `ClassName("name")` -- using the actual class of the object instead of "ClassName", of course. This is exactly the same as the expression used to create an object : for any RDL2 class, `ClassName` is a Lua function that creates an object with the given name if it doesn't already exist, and returns the existing object if it does.

```lua
AreaSpotLight("/scene/key") {
    ...
}
AreaSpotLight("/scene/fill") {
	...
}
LightSet("/scene/lights") {
    AreaSpotLight("/scene/key"),
    AreaSpotLight("/scene/fill")
}
```

You can also use Lua variables to hold objects:

```lua
key = AreaSpotLight("/scene/key") {
    ...
}
fill = AreaSpotLight("/scene/fill") {
	...
}
-- Sets the LightSet to contain key and fill.
lights = LightSet("/scene/lights") {
    key,
    fill
}
```

Comment lines in Lua begin with two dashes (`--`)

### Layers

A layer contains a set of assignments to geometry objects or parts. 

The most general form of a layer entry specifies a geometry object, part name, material, light set, displacement and volume shader. However, you can leave out items from the end of this list, and it is common to just set geometry, material and light set. In RDLA, a layer looks like this:

```lua
sphere1 = SphereGeometry("/scene/sphere1")
sphere2 = SphereGeometry("/scene/sphere1")
sphere1_mat = BaseMaterial("/scene/sphere1/mat")
sphere2_mat = BaseMaterial("/scene/sphere2/mat")
lights = LightSet("/scene/lights")
  
layer = Layer("/scene/layer") {
    {sphere1, "", base1, lights},
    {sphere2, "", base2, lights}
}
```

In this example, the "part name" component of the layer assignments is set to an empty string (`""`), making the assignment affect the entire object. The set of part names available for partial object assignment depends on the geometry class being used.


### Bindings

Some attributes can accept a map binding as well as a value. Maps are 2 or 3 dimensional patterns that are evaluated for each sample. Bindings are created using the `bind` function:

```lua
BaseMaterial("/scene/sphere/base") {
    ["diffuse color"] = bind(CheckerboardMap("/seq/shot/checkermap"), Rgb(0.8, 0.8, 0.2))
}
```

The `CheckerboardMap` will be evaluated per sample during shading, and the resulting color value multiplied by the base value `Rgb(0.8,0.8,0.8)` to obtain the value for `diffuse color`.

Each class implementation can decide how to combine the evaluated map value and the attribute's base value : it is not required that the class multiply one by the other, although that is usually the case.

### Scene Variables

The scene variables object contains overall settings for the render. It can be accessed through the global variable `SceneVariables`. This is how to set scene variables in an RDLA file:

```lua
SceneVariables {
    ["image width"] = 1920
    ["image height"] = 1080
}
```

There are just over 100 different scene variables in total. You can list them all using `rdl2_print`:

```
$ rdl2_print SceneVariables
SceneVariables("SceneObject") {
    ["aperture_window"] = IntVector(-2147483648, -2147483648, -2147483648, -2147483648),  -- IntVector
        -- comment: Window of the camera aperture. Overrides image width / height. Order: xmin ymin xmax ymax, with origin at left bottom.
        -- label: aperture window
    ["athena_debug"] = false,  -- Bool
        -- label: athena debug
    ["batch_tile_order"] = 4,  -- Int, enumerable (morton)
        -- 0 = top
        -- 1 = bottom
        -- 2 = left
        -- 3 = right
        -- 4 = morton
    ...
```

### Scene Structure

RDL2 has no scene hierarchy : each scene object is independent and transforms are always defined in world space. By convention we often use /-separated paths as object names, creating an implicit structure, but this has no effect on Moonray's interpretation of the data. 

To be renderable, a scene must contain a layer, camera and geometry set. Moonray will use the first of each that it finds in the scene. The camera and layer to render with can also be specified using scene variables.

To light anything, lights need to be added to a light set and assigned to geometry in the layer.


## RDLB Format

RDLB files encode the scene objects in an optimized binary format. RDLB is faster to load and more compact than RDLA.








