---
title: Dependencies
---

# MoonRay dependencies

These are the third-party libraries and tools that MoonRay and Arras depend on, at the time of writing. The files in the **openmoonray** repository */building* directory are generally a better reference, since that will be up-to-date for that particular version of the source, and also list build options.

| Name            | Notes                                                                                              |
|-----------------|-----------------------------------------------------|----------------------------------------------|
|[Blosc](https://github.com/Blosc/c-blosc)                              |                                              |
|[Boost](https://sourceforge.net/projects/boost)                        |                                              |
|[CMake](https://github.com/Kitware/CMake)                              |                                              |
|[cppunit](http://dev-www.libreoffice.org/src/)                         |                                              |
|[CUDA](https://developer.nvidia.com/cuda-downloads)                    |                                              |
|[Curl](https://github.com/curl/curl)                                   | only needed when building or using Arras     |
|[Embree](https://github.com/embree/embree)                             |                                              |
|[Gcc](https://gcc.gnu.org/git/)                                        |                                              |
|[Intel MKL]()                                                          |                                              |
|[ISPC](https://github.com/ispc/ispc)                                   |                                              |
|[JsonCpp](https://github.com/open-source-parsers/jsoncpp.git)          |                                              |
|[log4cplus](https://github.com/log4cplus/log4cplus)                    |                                              |
|[Lua](https://www.lua.org/ftp)                                         | must be built with the -fPIC option : e.g. *make linux MYCFLAGS=-fPIC*                                             |
|[Microhttpd](https://ftp.gnu.org/gnu/libmicrohttpd/)                   | only needed when building or using Arras     |
|[OpenColorIO](https://github.com/AcademySoftwareFoundation/OpenColorIO)|                                              |
|[OpenExr](https://github.com/AcademySoftwareFoundation/openexr)        |                                              |
|[OpenImageDenoise](https://github.com/OpenImageDenoise/oidn)           |                                              |
|[OpenImageIO](https://github.com/OpenImageIO/oiio)                     |                                              |
|[OpenSubdiv](https://github.com/PixarAnimationStudios/OpenSubdiv)      |                                              |
|[OpenVdb](https://github.com/AcademySoftwareFoundation/openvdb)        |                                              |
|[Optix](https://developer.nvidia.com/designworks/optix/download)       |                                              |
|[Python](https://www.python.org)                                       | Any version greater than or equal to 2.7 should work, but boost and USD need to be built for that version.                                             |
|Qt                                                                     | only needed by moonray_gui and arras_render                                             |
|[Random123](https://github.com/DEShawResearch/random123)               |                                              |
|[TBB](https://github.com/oneapi-src/oneTBB)                            |                                              |
|[USD](https://github.com/PixarAnimationStudios/USD)                    | only needed for the MoonRay Hydra plugins and USD geometry objects                                             |

Arras also needs **OpenSSL**.
