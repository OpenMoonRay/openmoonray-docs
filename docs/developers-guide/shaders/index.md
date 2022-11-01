---
title: Writing Shaders

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# Writing Shaders
This page covers some general information about writing plug-ins (aka. _shaders_, _DSO's_)
for MoonRay. At the time of this writing, MoonRay includes about 163 plug-ins, but additional
plug-ins can be authored to extend MoonRay's functionality further.

Once built, Plug-ins are found at run-time using the `RDL2_DSO_PATH` environment variable or via the
`-rdl_path` command-line argument to the `moonray` or `moonray_gui` executables.

Probably the best way to quickly understand what is required to write a new plugin of a given
type is to look at the existing plugins of that type.

### Plug-in Types
MoonRay supports several types of plug-ins. Each plug-in derives
from one of the following scene_rdl2 types and
implements its corresponding interface:
* `scene_rdl2::rdl2::Camera`
* `scene_rdl2::rdl2::Displacement`
* `scene_rdl2::rdl2::DisplayFilter`
* `scene_rdl2::rdl2::Geometry`
* `scene_rdl2::rdl2::Light`
* `scene_rdl2::rdl2::LightFilter`
* `scene_rdl2::rdl2::Map`
* `scene_rdl2::rdl2::Material`
* `scene_rdl2::rdl2::NormalMap`
* `scene_rdl2::rdl2::VolumeShader`

For some plug-in types an API is provided which allows for authoring new plug-ins using only
the installed public header files. This allows them to be built separately from MoonRay itself,
in another repository, for example. For other types, a public API has not yet been created.
It is still possible to author new plug-ins, but it will be necessary to build them alongside MoonRay.

All plug-in types are authored as C++ classes, but some plugin types include functions that
are written in ISPC.

### The Class Definition
Each plug-in defines a new C++ class and derives from one of the above types, which are
all ultimately derived from `scene_rdl2::rdl2::SceneObject`.

The `RDL2_DSO_CLASS_BEGIN()` and `RDL2_DSO_CLASS_END()` macros surround the class definition
and add the boilerplate code common to all plug-in types.  `RDL2_DSO_CLASS_BEGIN()` takes a
class name and the plug-in type it derives from.

For example, a Map shader plug-in might contain the following class definition:
```
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

Each plug-in may define a constructor and destructor, and any number of static/public/protected/private member
functions or variables, including those that implement the specific plug-in Type's interface.

### The _update()_ Function
Plug-ins typically (but not necessarily) override the `update()` member function inherited from
`scene_rdl2::rdl2::SceneObject`.

The main responsibility of the `update()` function is initialization.
It is called _before_ the MCRT stage and can be used to allocate resources, perform computations,
perform book-keeping, build look-up tables, etc. -- any necessary work before the MCRT stage begins.
It is called again any time a scene update is made that potentially affects the instance, such as
when a user changes the value of an attribute on the plug-in instance during interactive rendering .

For certain plug-in types, the `update()` function is less useful (eg. Geometry procedurals, where
they are generally executed immediately during the render prep stage, or after changes during interactive
rendering).

### Attributes
Plug-ins can declare a list of attributes that will be exposed to users to allow for controlling
the behavior. For most plug-in types these attributes are declared using C++ in a separate file
called `attributes.cc` which is found and included during the build process.

Here's an example of a simple `attributes.cc` file that declares a single bool attribute
called "do_something":
```
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

For certain plug-in types,
the attributes are declared using JSON in a separate `.json` file. The `.json` file is processed
and converted to an `attributes.cc` file by the build process. Here's a simple example of an
attribute declared using JSON:
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

### The Plug-in Interfaces
Each plug-in type above declares some interface that is specific to that plugin type, and that
must be implemented by the plug-in.

This table shows the type of plug-in, the name of the function(s) that comprise that plug-in type's interface,
The languages involved in writing a plug-in of the given type, how attributes are declared, and whether
a public API exists for writing new plug-ins using public the headers/API.
Some interface Functions are implemented in C++, others in ISPC.

Note: This table is for example purposes only - it may be incomplete. Refer to the documentation
for each specific plug-in type for more information.

|Plug-in Type|Interface members|Language(s)|Attributes|Has Public API?|
|------------|-----------------|-----------|
|Camera|`setFocalLength() setFilmApertureWidth() computeProjectionMatrix()`|C++|attributes.cc|no|
|Displacement|`displace() displacev()`|C++ ISPC|.json|yes|
|DisplayFilter|`getInputData() filterv()`|C++ ISPC|.json|yes|
|Geometry|`generate()`|C++|attributes.cc|yes|
|Light|`canIlluminate() eval() intersect() sample()`|C++ ISPC|attributes.cc|no|
|Light Filter|`canIlluminate() eval()`|C++ ISPC|attributes.cc|no|
|Map|`sample() samplev()`|C++ ISPC|.json|yes|
|Material|`shade() shadev()`|C++ ISPC|.json|yes|
|NormalMap|`sample() samplev()`|C++ ISPC|.json|yes|
|VolumeShader|`albedo() emission() extinct()`|C++|attributes.cc|no|

For example, `Map` shader plug-ins implement the `sample()` function declared in `scene_rdl2::rdl2::Map` which computes a `Color` result.
```
static void sample(const scene_rdl2::rdl2::Map *self,
                   moonray::shading::TLState *tls,
                   const moonray::shading::State &state,
                   scene_rdl2::math::Color *result);
```

`Material` shader plugins implement the `shade()` function declared in `scene_rdl2::rdl2::Material`, which is responsible for configuring a `Bsdf` via the `BsdfBuilder` API.
```
static void shade(const scene_rdl2::rdl2::Material* mtl,
                  moonray::shading::TLState *tls,
                  const moonray::shading::State &state,
                  moonray::shading::BsdfBuilder& bsdfBuilder);
```

Refer to the type-specific documentation below for details.

### Writing New Plug-ins
See the links below for information specific to each type, and on writing new plug-ins.

[Writing Camera Plug-ins](cameras)  
[Writing Displacement Plug-ins](displacement)  
[Writing DisplayFilter Plug-ins](display-filters)  
[Writing Geometry Procedural Plug-ins](geometry-procedurals)  
[Writing Light Plug-ins](lights)  
[Writing LightFilter Plug-ins](light-filters)  
[Weiting Map Plug-ins](maps)  
[Writing Material Plug-ins](materials)  
[Writing NormalMap Plug-ins](normal-maps)  
[Writing Volume Shader Plug-ins](volume-shaders)
