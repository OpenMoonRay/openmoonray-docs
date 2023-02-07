---
title: Writing Normal Map Shaders
---
# Writing Normal Map Shaders
Normal Map shaders produce `Vec3f` vector values and can be chained with other normal map shaders. They are very similar to regular Map shaders except rather than having a `sample` call that produces a color they have a `sampleNormal` call that produces a vector.

Each Normal Map shader implements two static functions to support MoonRay’s scalar and vector execution modes. The function prototypes are defined in scene_rdl2’s [Types.h](https://github.com/dreamworksanimation/scene_rdl2/blob/release/lib/scene/rdl2/Types.h) and they are `SampleNormalFunc` and `SampleNormalFuncv`.

Normal Map shaders inherit two protected function pointer members (`mSampleNormalFunc` and `mSampleNormalFuncv`) which they must set, typically in the constructor.

There are typically 4 files that make up a shader's source:
* _\<ClassName\>.cc_
* _\<ClassName\>.ispc_
* _\<ClassName\>.json_
* CMakeLists.txt

The _.cc_ file is written in C++ and contains the class definition, the constructor/destructor,
the `update()` function, and the static scalar `SampleNormalFunc` implementation.  The _.ispc_ file is
written in ISPC and contains the vector `SampleNormalFuncv` implementation.  It is also common for the
_.ispc_ source to contain any data structures needed by the shader during rendering.
Attributes are declared in the _.json_ file via JSON.

## The sampleNormal() function
A Normal Map shader implements two different sampleNormal functions that can be called by the renderer depending on the execution mode. The sampleNormal functions are responsible for generating the vector values that are then provided to the client shaders. The sampleNormal function is called for every shade point and can therefore be executed several millions of times in a single render which should be kept in mind when writing these functions.

* SampleNormalFunc - (implemented in C++ language)
* SampleNormalFuncv - (implemented in ISPC language)

## The update() function
The `update()` method is called before rendering begins and anytime the shader's attributes or bindings are modified. Because the above-mentioned sampleNormal functions are going to be potentially called millions of times, a shader writer should strive to use the `update()` method whenever possible to do any heap allocations or potentially expensive operations that do not depend on varying values/state. The results of these operations can then be stored as class members and later retrieved during sampling. It is fairly easy to cause major performance issues by doing something which would not be a big concern in "normal" code, but because it is happening millions of times across many threads it causes a bottleneck. Such "expensive operations" that should be kept in the `update()` function include: memory allocation/deallocation such as declaring a string, something that causes threads to lock such as querying or updating a container, and the construction of non-trivial types.


