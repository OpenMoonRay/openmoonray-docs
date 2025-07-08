---
title: Dependencies
---

# MoonRay dependencies

These are the third-party libraries and tools that MoonRay and Arras depend on, at the time of writing. The files in the **openmoonray** repository */building* directory are generally a better reference, since that will be up-to-date for that particular version of the source, and also list build options.

The versions shown are the ones we have tested : other versions may also work.


| Dependency | Versions | License |
|------------|----------|---------|
| [Gcc](https://gcc.gnu.org/git/) | 6.3, 9.3, 11.3 | [GPL-3.0](https://gcc.gnu.org/onlinedocs/gcc-15.1.0/gcc/Copying.html)
| [CMake](https://github.com/Kitware/CMake) | 3.23.1 | [BSD-3-Clause](https://github.com/Kitware/CMake/blob/master/LICENSE.rst)
| [Boost](https://sourceforge.net/projects/boost) | 1.73, 1.75, 1.76 | [BSL-1.0](https://www.boost.org/doc/user-guide/bsl.html)
| [Lua](https://www.lua.org/ftp) | 5.3.5, 5.5.4 | [MIT](https://www.lua.org/license.html)
| [Python](https://www.python.org) | 2.7+ | [PSF-2.0](https://docs.python.org/3/license.html)
| [cppunit](http://dev-www.libreoffice.org/src/) | 1.15.1 | [Unlicense](https://github.com/cppunit/cppunit/blob/master/LICENSE)
| [log4cplus](https://github.com/log4cplus/log4cplus) | 1.1.2, 2.0.5 | [Apache-2.0](https://github.com/log4cplus/log4cplus/blob/master/LICENSE)
| [JsonCpp](https://github.com/open-source-parsers/jsoncpp) | 0.7, 1.9.5 | [MIT](https://github.com/open-source-parsers/jsoncpp/blob/master/LICENSE)
| [TBB](https://github.com/oneapi-src/oneTBB) | 2020.2.0, 2020.3 | [Apache-2.0](https://github.com/uxlfoundation/oneTBB/blob/master/LICENSE.txt)
| [ISPC](https://github.com/ispc/ispc) | 1.14.1, 1.20.0 | [BSD-3-Clause](https://github.com/ispc/ispc/blob/main/LICENSE.txt)
| [CUDA](https://developer.nvidia.com/cuda-downloads) (optional) | 11.1, 11.4, 12.1 | [Nvidia SDK](https://docs.nvidia.com/cuda/eula/index.html)
| [Optix](https://developer.nvidia.com/designworks/optix/download) (optional) | 7.6.0 | [Nvidia SDK](https://github.com/NVIDIA/optix-dev?tab=License-1-ov-file#readme)
| [OpenSubdiv](https://github.com/PixarAnimationStudios/OpenSubdiv) | 3.4.3, 3.5.0 | [Pixar (Modified Apache-2.0](https://github.com/PixarAnimationStudios/OpenSubdiv?tab=License-1-ov-file#readme)
| [OpenVDB](https://github.com/AcademySoftwareFoundation/openvdb) | 8.2.0.4, 9.1.0 | [Apache-2.0](https://github.com/AcademySoftwareFoundation/openvdb/?tab=Apache-2.0-1-ov-file#readme)
| [OpenImageIO](https://github.com/AcademySoftwareFoundation/OpenImageIO) | 2.2.15.1, 2.3.20 | [Apache-2.0](https://github.com/AcademySoftwareFoundation/OpenImageIO?tab=Apache-2.0-1-ov-file#readme)
| [OpenColorIO](https://github.com/AcademySoftwareFoundation/OpenColorIO) | 2.0.2 | [BSD-3-Clause](https://github.com/AcademySoftwareFoundation/OpenColorIO?tab=BSD-3-Clause-1-ov-file#readme)
| [OpenEXR](https://github.com/AcademySoftwareFoundation/openexr) | 2.5.7 | [BSD-3-Clause](https://github.com/AcademySoftwareFoundation/openexr?tab=BSD-3-Clause-1-ov-file#readme)
| [Random123](https://github.com/DEShawResearch/random123) | 1.08.3 | [BSD-3-Clause](https://github.com/DEShawResearch/random123?tab=License-1-ov-file)
| [Embree](https://github.com/embree/embree) | 4.2.0 | [Apache-2.0](https://github.com/RenderKit/embree?tab=Apache-2.0-1-ov-file#readme)
| [Intel MKL](https://www.intel.com/content/www/us/en/developer/tools/oneapi/onemkl.html#gs.nmqbjw) | 2020.3.279 | [ISSL](https://www.intel.com/content/www/us/en/developer/articles/tool/onemkl-license-faq.html)
| [Microhttpd](https://ftp.gnu.org/gnu/libmicrohttpd/) | 0.9.37 | [LGPL-2.0](https://www.gnu.org/software/libmicrohttpd/)
| [Curl](https://github.com/curl/curl) | 7.49 | [curl](https://github.com/curl/curl/blob/master/LICENSES/curl.txt)
| [OpenUSD](https://github.com/PixarAnimationStudios/OpenUSD) | 22.5 | [Pixar](https://github.com/PixarAnimationStudios/OpenUSD/blob/dev/LICENSE.txt)
| [Qt](https://www.qt.io/product/framework) | 5.12 | [Commercial or LGPL-3.0](https://www.qt.io/qt-licensing)

**Lua** must be built with the -fPIC option : e.g. *make linux MYCFLAGS=-fPIC*

**Microhttpd** and **Curl** are only needed when building or using Arras. Arras also needs **OpenSSL**.

Any version of **Python** greater than or equal to 2.7 should work, but boost and USD need to be built for that version.

**USD** is only needed for the MoonRay Hydra plugins and USD geometry objects

**Qt** is only needed by moonray_gui and arras_render.

