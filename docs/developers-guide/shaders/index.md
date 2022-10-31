---
title: Writing Shaders

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# Writing Shaders

### Plug-in Types
MoonRay supports several types of plug-ins (aka. "shaders", "DSO"). Each plug-in derives
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

Each plug-in defines a new C++ class and derives from one of the above types, which all
ultimately derive from `scene_rdl2::rdl2::SceneObject`. All plug-in types are defined using C++,
although some plug-in types require implementing one or more functions using ISPC.

### Class Definition
The `RDL2_DSO_CLASS_BEGIN()` and `RDL2_DSO_CLASS_END()` macros surround the class definition
and add the boilerplate code common to all plug-in types.  `RDL2_DSO_CLASS_BEGIN()` takes a
class name and the plug-in type it derives from.

For example, a Map shader plug-in might contain the following class definition:
```
RDL2_DSO_CLASS_BEGIN(ImageMap, scene_rdl2::rdl2::Map)

public:
    ImageMap(const scene_rdl2::rdl2::SceneClass &sceneClass, const std::string &name);
    ~ImageMap() override;
    void update() override;

private:
    static void sample(const scene_rdl2::rdl2::Map *self, moonray::shading::TLState *tls,
                       const moonray::shading::State &state, math::Color *result);

RDL2_DSO_CLASS_END(ImageMap)
```

Each plug-in may define a constructor and destructor, and any number of static/public/protected/private member
functions or variables.

### The _update()_ Function
Plug-ins typically (but not necessarily) override the `update()` member function inherited from
`scene_rdl2::rdl2::SceneObject`  This function is called once for each plug-in instance during
the render prep stage, and again any time a scene update is made during interactive rendering
that potentially affects the instance, such as when a user changes the value of an attribute
on the plug-in instance. The responsibility of the `update()` function is initialization.
It is called _before_ the MCRT stage and can be used to allocate resources, perform computations,
perform book-keeping, build look-up tables, etc. -- any necessary work before the MCRT stage begins.

### The Plug-in Interface
Each plug-in type above declares some interface that is specific to that plugin type, and that
must be implemented by the plug-in.

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

### Writing New Plug-ins
See below for information specific to each type, and on writing new plug-ins.

[Writing Camera Plug-ins](cameras)  
[Writing Displacement Plug-ins](displacement)  
[Writing DisplayFilter Plug-ins](display-filters)  
[Writing Geometry Procedural Plugi-ns](geometry-procedurals)  
[Writing Light plug-ins](lights)  
[Writing LightFilter plug-ins](light-filters)  
[Weiting Map Plug-ins](maps)  
[Writing Material plug-ins](materials)  
[Writing NormalMap plug-ins](normal-maps)  
[Writing Volume Shader plug-ins](volume-shaders)
