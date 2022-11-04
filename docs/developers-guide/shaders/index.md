---
title: Writing Shaders

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# Writing Shaders
This page covers some general information about writing plug-ins (aka. _shaders_, _DSO's_)
for MoonRay. At the time of this writing, MoonRay includes about 163 plug-ins, (see [scene-classes]({{site.baseurl}}/scene-classes))
but additional plug-ins can be authored to extend MoonRay's functionality further.

Probably the best way to quickly understand what is required to write a new plug-in of a given
type is to look at the existing plug-ins of that type. This page covers some of the topics that
are common to all MoonRay plugin types. See links below for type-specific information.

The _moonray_, _moonshine_ and _moonshine_usd_ repositories all contain examples that can be followed
(in their respective _dso/_ directories).

----
## Plug-in Types
MoonRay supports several types of plug-ins. Each plug-in derives from one of the scene_rdl2 types and
implements its corresponding interface.

For some plug-in types a public API (using this term loosely) is provided which allows for authoring new plug-ins using only
the installed public header files. This allows them to be built separately from MoonRay itself --
in another repository, for example. For other types, a public API has not yet been created.
It is still possible to author new plug-ins of these types (this is open source, after all), but for
now it will be necessary to build them alongside MoonRay inside the _moonray_ source codebase.

|Type| Derives from | Has Public API?|
|------------|---------------|
|Camera|scene_rdl2::rdl2::Camera|no|
|Displacement|scene_rdl2::rdl2::Displacement|yes|
|DisplayFilter|scene_rdl2::rdl2::DisplayFilter|yes|
|Geometry|scene_rdl2::rdl2::Geometry|yes|
|Light|scene_rdl2::rdl2::Light|no|
|Light Filter|scene_rdl2::rdl2::LightFilter|no|
|Map|scene_rdl2::rdl2::Map|yes|
|Material|scene_rdl2::rdl2::Material|yes|
|NormalMap|scene_rdl2::rdl2::NormalMap|yes|
|VolumeShader|scene_rdl2::rdl2::VolumeShader|no|

All plug-in types are authored as C++ classes, but some plug-in types also include functions that
are written in ISPC.

----
## The Plug-in's Files and Directory Structure
Most MoonRay plug-ins comprise of several files as follows:

|File|Required|Purpose|
|----|-------|
| _\<ClassName\>\<Type\>.cc_ | always | The C++ source file which defines the class and scalar functions |
| _\<ClassName\>\<Type\>.ispc_ |for some plug-in types | An ISPC source file which implements one or more vector functions |
| _attributes.cc_ or _\<ClassName\>\<Type\>.json_ | always | A C++ or JSON file (dependending on plug-in type) which defines a list of user-facing attributes |
| _CMakeLists.txt_ | always | Used to build the plug-in with CMake |
| _SConscript_ | never | Used only for legacy internal DWA builds, not needed for new plug-ins |

All of the above files should be placed within their own source directory to satisy the one-dso-per-directory
requirement of the current build system. For example, the source files for a new "Checkerboard" map shader might be:
```bash
moonray/dso/map/CheckerboardMap/
├── CheckerboardMap.cc
├── CheckerboardMap.ispc
├── CheckerboardMap.json
└── CMakeLists.txt
```

Note - our convention is to append the plug-in type to the class name to make it easy to identify
what type it is when it appears in an .rdla file. For example, the class for a new Map shader might
be `CheckerboardMap`, and the class for a new Light shader might be called `FooLight`. In an .rdla
file they might appear as:

```lua
CheckerboardMap("/some/name/MyCheckerboard") {
    ...
}

FooLight("/some/name/MyFoo") {
    ...
}
```
----
## The Plug-in's Class Definition
Each plug-in defines a new C++ class and derives from one of the `scene_rdl2` types above, which are
all ultimately derived from `scene_rdl2::rdl2::SceneObject`. The class is typically declared in
the _ClassName.cc_ file.

The `RDL2_DSO_CLASS_BEGIN()` and `RDL2_DSO_CLASS_END()` macros surround the class definition
(no _class_ keyword needed) and add the boilerplate code common to all plug-in types.
`RDL2_DSO_CLASS_BEGIN()` takes a class name and the plug-in type it derives from.

For example, a Map shader plug-in might contain the following class definition:

```cpp
// CheckerboardMap.cc
RDL2_DSO_CLASS_BEGIN(CheckerboardMap, rdl2::Map)

public:
    CheckerboardMap(const rdl2::SceneClass &sceneClass, const std::string &name);
    ~CheckerboardMap() override {};

    void update() override;

private:
    static void sample(const rdl2::Map *self, shading::TLState *tls,
                       const shading::State &state, math::Color *sample);

RDL2_DSO_CLASS_END(CheckerboardMap)
```

As with any C++ class, each plug-in may define a constructor and destructor, and any number of static, public,
protected, private member functions or variables. You'll also add any _overrides_ here for any virtual function
that is inherited based on a parent class.

----
## Defining the Plug-in's Attributes
Plug-ins can declare a list of attributes that will be exposed to users to allow for controlling
the behavior. For some plug-in types these attributes are declared using C++ in a separate file
called `attributes.cc` which is found and included during the build process.  For other plug-in
types the attributes are declared using JSON in a separate .json file.

Here's an example of a simple `attributes.cc` file that declares a single bool attribute
called "do_something":
```cpp
// attributes.cc
#include <scene/rdl2/rdl2.h>

using namespace scene_rdl2;

RDL2_DSO_ATTR_DECLARE
    rdl2::AttributeKey<rdl2::Bool> attrDoSomething;

RDL2_DSO_ATTR_DEFINE(rdl2::Light)
    attrDoSomething =
        sceneClass.declareAttribute<rdl2::Bool>("do_something", false, {});
    sceneClass.setMetadata(attrDoSomething, "label", "do somthing");
    sceneClass.setGroup("Advanced", attrDoSomething);
RDL2_DSO_ATTR_END
```

Here's a simple example of an attribute declared using JSON:

_CheckerboardMap.json_
```json
{
    "name": "CheckerboardMap",
    "type": "Map",
    "attributes": {
        "attrUTiles": {
            "name": "num_u_tiles",
            "label": "num u tiles",
            "type": "Int",
            "default": "8",
            "comment": "number of checkerboard squares in the U direction"
        }
    }
}
```

See the source code, [this page]({{site.baseurl}}/developers-guide/scene_rdl2-library),
or the existing plug-ins for examples of how to declare SceneClass attributes and their metadata.

|Type|Attributes file|
|----|--------------|
|Camera|attributes.cc|
|Displacement|\<ClassName\>.json|
|DisplayFilter|\<ClassName\>.json|
|Geometry|attributes.cc|
|Light|attributes.cc|
|Light Filter|attributes.cc|
|Map|\<ClassName\>.json|
|Material|\<ClassName\>.json|
|NormalMap|\<ClassName\>.json|
|VolumeShader|attributes.cc|

----
## The SceneObject::update() Function
Plug-ins typically (but not necessarily) override the `update()` member function inherited from the
`scene_rdl2::rdl2::SceneObject` base class all plug-in types ultimately derive from.

The main responsibility of the `update()` function is initialization. It is called _before_ the MCRT stage
and can be used to allocate resources, perform computations, do book-keeping, build look-up tables,
etc. -- any necessary work that needs to be done when the class in instantiated or a user makes an update
to one of the attributes during interactive rendering.

For certain plug-in types and for any particular plug-in of any type, the `update()` function may not be 
needed. It is an opportunity to perform initialization or re-initialization on scene changes.

----
## The Plug-in Interfaces
Each plug-in type declares an interface that is specific to that plug-in type, and that
should be implemented by the plug-in. Some functions are to be implemented in C++, others in ISPC.

This table shows the type of plug-in, the name of the function(s) that comprise that plug-in type's interface
and the languages involved in writing a plug-in of the given type.

Note: This table is for example purposes only - it may be incomplete. Refer to the documentation
for each specific plug-in type for more information.

|Plug-in Type|Interface members|Language(s)|
|------------|-----------------|-----------|
|Camera|`setFocalLength() setFilmApertureWidth() computeProjectionMatrix()`|C++|
|Displacement|`displace() displacev()`|C++ ISPC|
|DisplayFilter|`getInputData() filterv()`|C++ ISPC|
|Geometry|`generate()`|C++|
|Light|`canIlluminate() eval() intersect() sample()`|C++ ISPC|
|Light Filter|`canIlluminate() eval()`|C++ ISPC|
|Map|`sample() samplev()`|C++ ISPC|
|Material|`shade() shadev()`|C++ ISPC|
|NormalMap|`sample() samplev()`|C++ ISPC|
|VolumeShader|`albedo() emission() extinct()`|C++|

For example, `Map` shader plug-ins implement a `sample()` function which is prototyped in `scene_rdl2::rdl2::Map`
and is responsible for computing a `Color` result.
```cpp
static void sample(const scene_rdl2::rdl2::Map *self,
                   moonray::shading::TLState *tls,
                   const moonray::shading::State &state,
                   scene_rdl2::math::Color *result);
```

`Material` shader plug-ins implement the `shade()` function which is prototyped  in `scene_rdl2::rdl2::Material`
and is responsible for configuring a `Bsdf` via the `BsdfBuilder` API.
```cpp
static void shade(const scene_rdl2::rdl2::Material* mtl,
                  moonray::shading::TLState *tls,
                  const moonray::shading::State &state,
                  moonray::shading::BsdfBuilder& bsdfBuilder);
```

----
## Building with CMake
MoonRay includes a CMake module called _MoonrayDso_ which defines two functions to facilitate the building of DSOs,
depending on the plug-in type:
_moonray_dso_simple()_ and _moonray_ispc_dso()_.

CheckerboardMap's _CMakeLists.txt_ file might contain the following:

```cmake
# CMakeLists.txt
moonray_ispc_dso(CheckerboardMap
    DEPENDENCIES
        Moonray::rendering_shading
        Moonray::shading_ispc
        SceneRdl2::scene_rdl2)
```

Note - if you are developing a new plug-in in the moonray or moonshine codebase, you'll also need to edit the
_CMakeLists.txt_ file in the plug-in's parent directory and add a line so that your plug-in's _CMakeLists.txt_
file can be discovered by the build system:

```
# parent directory's CMakeLists.txt
add_subdirectory(CheckerboardMap)
```

Refer to the type-specific documentation below for more details.

----
## Writing New Plug-ins
See the links below for information specific to each type, and on writing new plug-ins.

[Writing Camera Plug-ins](cameras)  
[Writing Displacement Plug-ins](displacement)  
[Writing DisplayFilter Plug-ins](display-filters)  
[Writing Geometry Procedural Plug-ins](geometry-procedurals)  
[Writing Light Plug-ins](lights)  
[Writing LightFilter Plug-ins](light-filters)  
[Writing Map Plug-ins](maps)  
[Writing Material Plug-ins](materials)  
[Writing NormalMap Plug-ins](normal-maps)  
[Writing Volume Shader Plug-ins](volume-shaders)
