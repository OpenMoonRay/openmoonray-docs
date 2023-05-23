---
title: Writing Map Shaders
---
# Writing Map Shaders
### Overview
Map shaders produce Color values and can be chained together with other Map shaders.
They sometimes referred to as "pattern generators", although that only describes one
use case.  They can also read primitive attributes, read image textures (or point clouds,
volume data, LUTs, anything really), combine or modify existing values, and much more.

A Map shader's job is to produce a color, given some set of inputs.

### Source files
There are typically 4 files that make up a shader's source:
* _\<ClassName\>.cc_
* _\<ClassName\>.ispc_
* _\<ClassName\>.json_
* CMakeLists.txt

The _.cc_ file is written in C++ and contains the class definition, the constructor/destructor, the `update()` function, and the static scalar `SampleFunc` function implementation.

The _.ispc_ file is written in ISPC and contains the vector `SampleFuncv` function implementation.  It is also common for the _.ispc_ source to contain any data structures or enumerations needed by the shader.

Attributes are declared in the _.json_ file via JSON.

### the shade() function
Each Map shader implements two static functions to support MoonRay's scalar and vector execution modes.  The `SampleFunc` and `SampleFuncv` function prototypes are defined in scene_rdl2's
[Types.h](https://github.com/dreamworksanimation/scene_rdl2/blob/release/lib/scene/rdl2/Types.h).
                                                                                                
Map shaders inherit two protected function pointer members (`mSampleFunc` and `mSampleFuncv`)   
which they must set, typically in the constructor.                                              

### The moonray::shading::State
The shading State provides the sample function with geometric data at the shading point.

```
// P: the position in render space
scene_rdl2::math::Vec3f &getP() const;

// Ng: the geometric normal in render space
scene_rdl2::math::Vec3f &getNg() const;

// N: the shading normal in render space
scene_rdl2::math::Vec3f &getN() const;

// dPds: the partial derivatives of P with respect to the s texture coordinate
scene_rdl2::math::Vec3f &getdPds() const;

// dPdt: the partial derivatives of P with respect to the t texture coordinate
scene_rdl2::math::Vec3f &getdPdt() const;

// dNds: the partial derivatives of N with respect to the s texture coordinate
scene_rdl2::math::Vec3f &getdNds() const;

// dNdt: the partial derivatives of N with respect to the t texture coordinate
scene_rdl2::math::Vec3f &getdNdt() const;

// wo: for 'omega_o' - the vector in render space from the shading point to the observer (ie. the camera).
// useful for non-photorealistic effects, eg. "facing ratio"... use with caution!
scene_rdl2::math::Vec3f &getWo() const;

// st: the s and t texture coordinates
scene_rdl2::math::Vec2f &getSt() const;

// minimum anisotropic roughness suggested by the renderer, See SceneVariable's "roughness_clamping_factor" attribute
scene_rdl2::math::Vec2f &getMinRoughness() const;

// the pointer to the geometry currently being shaded
scene_rdl2::rdl2::Geometry* getGeometryObject() const;

// dPdx: the partial derivatives of P with respect to horizontal screenspace
scene_rdl2::math::Vec3f getdPdx() const;

// dPdx: the partial derivatives of P with respect to the vertical screenspace
scene_rdl2::math::Vec3f getdPdy() const;

// ref_P: "ref_P" primitive attribute data
bool getRefP(scene_rdl2::math::Vec3f &refP) const;

// ref_N: "ref_N" primitive attribute data
bool getRefN(scene_rdl2::math::Vec3f &refN) const;

// the derivative wrt s for a Vec3f primitive attribute
bool getdVec3fAttrds(int key, scene_rdl2::math::Vec3f& dVec3fAttrds) const;

// the derivative wrt t for a Vec3f primitive attribute
bool getdVec3fAttrdt(int key, scene_rdl2::math::Vec3f& dVec3fAttrdt) const;

// the derivative wrt x for a Vec3f primitive attribute
bool getdVec3fAttrdx(int key, scene_rdl2::math::Vec3f& dVec3fAttrdx) const;

// the derivative wrt y for a Vec3f primitive attribute
bool getdVec3fAttrdy(int key, scene_rdl2::math::Vec3f& dVec3fAttrdy) const;

// the derivatives of the s and t texture coordinates with respect to x and y
float getdSdx() const;
float getdSdy() const;
float getdTdx() const;
float getdTdy() const;

// check if a primitive attribute and its derivatives wrt to s and t exist
bool isProvided(shading::AttributeKey key)   const;
bool isdsProvided(shading::AttributeKey key) const;
bool isdtProvided(shading::AttributeKey key) const;

bool isDisplacement()       const;
bool isEntering()           const;
bool isCausticPath()        const;
bool isSubsurfaceAllowed()  const;
bool isIndirect()           const;
bool isHifi()               const;

float getMediumIor() const;

int  getCameraId() const;

// Ns is the result of a normal mapping operation.
// The result may or may not be physically plausible from
// our particular view point.  This function detects this
// case and minimally bends the shading normal back towards
// the physically plausible geometric normal.  This unfortunately
// breaks bi-directional algorithms.  See "Microfacet-based
// Normal Mapping for Robust Monte Carlo Path Tracing" for
// an approach to normal mapping that can work bi-directionally.
//
// The solution employed here is descrbied in
// "The Iray Light Transport System" Section A.3 "Local Shading
// Normal Adaption".
//
scene_rdl2::math::Vec3f adaptNormal(const scene_rdl2::math::Vec3f &Ns) const;

// adaptToonNormal differs by checking if the integrator has
// indicated that no light culling should be performed. If so,
// the normal is not adapted. This is useful for certain NPR effects
// that use an arbitrary normal.
scene_rdl2::math::Vec3f adaptToonNormal(const scene_rdl2::math::Vec3f &Ns) const;

template <typename T> const T &getAttribute(shading::TypedAttributeKey<T> key) const;
template <typename T> T getdAttributedx(shading::TypedAttributeKey<T> key)     const;
template <typename T> T getdAttributedy(shading::TypedAttributeKey<T> key)     const;
template <typename T> T getdAttributeds(shading::TypedAttributeKey<T> key)     const;
template <typename T> T getdAttributedt(shading::TypedAttributeKey<T> key)     const;
```

[State](https://github.com/dreamworksanimation/moonray/blob/release/lib/rendering/bvh/shading/State.h)

### Related ISPC macros
The vectorized sample function (SampleFuncv) implementation is routinely followed by a call to the `DEFINE_MAP_SHADER` macro which is defined in [ShaderMacros.isph](https://github.com/dreamworksanimation/moonray/blob/release/lib/rendering/shading/ispc/ShaderMacros.isph)

```
DEFINE_MAP_SHADER(\<shader_name\>, \<sample_function_name\>)
```

This macro provides enables profiling of the vectorized sample function and defines a function `ispc::<shader_name>_getSampleFunc()` which is used to get a function pointer to the
vector ispc function in scalar code.

### Examples
While a lot more could be written here about the details of implementing a Map shader, much of the general information can be found in the the [Writing Shaders]({{ "/developer-reference/shaders/" | absolute_url }})  page.
Additionally there are hundreds of Map shaders in the moonray and moonshine codebases that can provide concrete examples.

See the [CheckerboardMap](https://github.com/dreamworksanimation/moonray/tree/release/dso/map/CheckerboardMap) for a simple example.
