---
title: Dependencies
---

# MoonRay dependencies

The checked-out **openmoonray** source is the authority for dependency versions
and build settings. The platform dependency projects in
`building/Rocky9/CMakeLists.txt` and `building/macOS/CMakeLists.txt` pin the
versions they download and build. The Rocky package script pins or selects the
dependencies installed through DNF. The top-level CMake presets do not pin
dependency versions; they configure search paths, install paths, Python and ABI
settings, and platform build options.

## Canonical platform versions

The following versions are selected by the canonical Rocky Linux 9 and macOS
dependency setup in the current source. A dash means that the dependency is not
used on that platform. "Rocky 9 package" means that
`building/Rocky9/install_packages.sh` installs the version supplied by the
enabled Rocky Linux repositories rather than pinning an archive or Git
revision.

| Dependency | Rocky Linux 9 | macOS | License |
|------------|---------------|-------|---------|
| [CMake](https://github.com/Kitware/CMake) | 3.23.1 | 3.23.1 minimum | [BSD-3-Clause](https://github.com/Kitware/CMake/blob/master/LICENSE.rst) |
| [GCC](https://gcc.gnu.org/) | 11 | — (Apple Clang) | [GPL-3.0](https://gcc.gnu.org/onlinedocs/gcc/Copying.html) |
| [CUDA](https://developer.nvidia.com/cuda-downloads) (optional) | 11.8 | — | [NVIDIA CUDA Toolkit EULA](https://docs.nvidia.com/cuda/eula/) |
| [OptiX headers](https://github.com/NVIDIA/optix-dev) (optional) | 7.6.0 | — (Metal) | [NVIDIA SDK license](https://github.com/NVIDIA/optix-dev/blob/main/LICENSE.txt) |
| [Blosc](https://github.com/Blosc/c-blosc) | 1.21.2 | 1.21.6 | [BSD-3-Clause](https://github.com/Blosc/c-blosc/blob/main/LICENSE) |
| [Boost](https://www.boost.org/) | 1.75.0 | 1.78.0 | [BSL-1.0](https://www.boost.org/LICENSE_1_0.txt) |
| [JsonCpp](https://github.com/open-source-parsers/jsoncpp) | 1.9.5 | 1.9.5 | [MIT](https://github.com/open-source-parsers/jsoncpp/blob/master/LICENSE) |
| [Lua](https://www.lua.org/) | 5.4.4 | 5.4.4 | [MIT](https://www.lua.org/license.html) |
| [libmicrohttpd](https://www.gnu.org/software/libmicrohttpd/) | 0.9.72 | 0.9.72 | [LGPL-2.1-or-later](https://git.gnunet.org/libmicrohttpd.git/tree/COPYING) |
| [OpenSubdiv](https://github.com/PixarAnimationStudios/OpenSubdiv) | 3.5.0 | 3.5.0 | [Modified Apache-2.0](https://github.com/PixarAnimationStudios/OpenSubdiv/blob/release/LICENSE.txt) |
| [OpenEXR](https://github.com/AcademySoftwareFoundation/openexr) | 3.1.8 | 2.5.7 | [BSD-3-Clause](https://github.com/AcademySoftwareFoundation/openexr/blob/main/LICENSE.md) |
| [oneTBB](https://github.com/uxlfoundation/oneTBB) | 2020.3.3 | 2020 Update 3 | [Apache-2.0](https://github.com/uxlfoundation/oneTBB/blob/master/LICENSE.txt) |
| [OpenVDB](https://github.com/AcademySoftwareFoundation/openvdb) | 9.1.0 | 9.1.0 | [MPL-2.0](https://github.com/AcademySoftwareFoundation/openvdb/blob/master/LICENSE) |
| [Log4cplus](https://github.com/log4cplus/log4cplus) | 2.0.5 | 2.0.5 | [Apache-2.0](https://github.com/log4cplus/log4cplus/blob/master/LICENSE) |
| [CppUnit](https://freedesktop.org/wiki/Software/cppunit/) | 1.15.1 | 1.15.1 | [LGPL-2.1](https://git.libreoffice.org/cppunit/+/refs/heads/master/COPYING) |
| [Random123](https://github.com/DEShawResearch/random123) | 1.14.0 | 1.14.0 | [BSD-3-Clause](https://github.com/DEShawResearch/random123/blob/main/LICENSE) |
| [ISPC](https://github.com/ispc/ispc) | 1.21.0 | 1.20.0 | [BSD-3-Clause](https://github.com/ispc/ispc/blob/main/LICENSE.txt) |
| [Embree](https://github.com/RenderKit/embree) | 4.3.3 | 4.3.3 | [Apache-2.0](https://github.com/RenderKit/embree/blob/master/LICENSE.txt) |
| [OpenColorIO](https://github.com/AcademySoftwareFoundation/OpenColorIO) | 2.2.1 | 2.0.2 | [BSD-3-Clause](https://github.com/AcademySoftwareFoundation/OpenColorIO/blob/main/LICENSE) |
| [libtiff](https://gitlab.com/libtiff/libtiff) | Rocky 9 package | 4.0.7 | [libtiff license](https://gitlab.com/libtiff/libtiff/-/blob/master/LICENSE.md) |
| [libjpeg-turbo](https://github.com/libjpeg-turbo/libjpeg-turbo) | Rocky 9 package | 2.0.1 | [IJG/BSD/zlib](https://github.com/libjpeg-turbo/libjpeg-turbo/blob/main/LICENSE.md) |
| [pybind11](https://github.com/pybind/pybind11) | Rocky 9 package | 2.13.6 | [BSD-3-Clause](https://github.com/pybind/pybind11/blob/master/LICENSE) |
| [OpenImageIO](https://github.com/AcademySoftwareFoundation/OpenImageIO) | 2.4.8.0 | 2.3.20.0 | [Apache-2.0](https://github.com/AcademySoftwareFoundation/OpenImageIO/blob/main/LICENSE.md) |
| [Open Image Denoise](https://github.com/RenderKit/oidn) | 2.3.3 | 2.2.0 | [Apache-2.0](https://github.com/RenderKit/oidn/blob/master/LICENSE.txt) |
| [Qt](https://www.qt.io/product/framework) (optional) | Rocky 9 Qt 5 package | 5.12.12 | [LGPL-3.0 or commercial](https://www.qt.io/licensing/) |
| [OpenUSD](https://github.com/PixarAnimationStudios/OpenUSD) | 23.08 | 22.11 | [Modified Apache-2.0](https://github.com/PixarAnimationStudios/OpenUSD/blob/dev/LICENSE.txt) |
| [libuuid](https://sourceforge.net/projects/libuuid/) | Rocky 9 package | 1.0.3 | [BSD-3-Clause](https://sourceforge.net/p/libuuid/code/ci/master/tree/COPYING) |
| [OpenSSL](https://github.com/openssl/openssl) | Rocky 9 package | 3.0.8 | [Apache-2.0](https://github.com/openssl/openssl/blob/master/LICENSE.txt) |
| [curl](https://github.com/curl/curl) | Rocky 9 package | 7.88.1 | [curl license](https://github.com/curl/curl/blob/master/COPYING) |
| [FreeType](https://freetype.org/) | Rocky 9 package | 2.13.2 | [FTL or GPL-2.0](https://gitlab.freedesktop.org/freetype/freetype/-/blob/master/LICENSE.TXT) |
| [GLFW](https://github.com/glfw/glfw) | 3.4 | 3.4 | [Zlib](https://github.com/glfw/glfw/blob/master/LICENSE.md) |

The Rocky package script also installs Bison, Flex, Python 3 and its development
headers, OpenGL and window-system development packages, GIF and MNG libraries,
zlib, and the system JPEG, TIFF, UUID, OpenSSL, curl, and FreeType packages. It
pins libcgroup to `0.42.2-5.el9` when cgroup support is enabled. Consult the
script for the exact package set because repository package revisions can
change without a source update.

## Required by the default build

The build requires CMake 3.23.1 or newer, a C++17 compiler, Python 3 development
files, ISPC, Bison, and Flex. Git and Git LFS are required to obtain the complete
source tree.

The default source build uses these third-party libraries:

- Boost, Blosc, CppUnit, Embree, FreeType, GLFW, JsonCpp, libcurl,
  libmicrohttpd, libuuid, Log4cplus, Lua, OpenSSL, Random123, TBB, and zlib
- JPEG and TIFF libraries
- OpenColorIO, OpenEXR and Imath/IlmBase, OpenImageDenoise, OpenImageIO,
  OpenSubdiv, and OpenVDB
- OpenGL and the platform's window-system development libraries
- pybind11 for Python bindings

Lua must be built with position-independent code (`-fPIC`).

OpenUSD (found by CMake as `pxr`) is also required by the default build: the USD
scene classes and shader-discovery plug-ins are built unconditionally. The
platform dependency project builds its pinned OpenUSD version unless configured
with `-DNO_USD=1`. That option is for builds, such as the Houdini presets, that
provide a compatible OpenUSD installation elsewhere; it does not disable
MoonRay's USD-dependent components.

## Optional and platform-specific dependencies

- Linux GPU/XPU support and OptiX denoising use the NVIDIA CUDA toolkit and
  OptiX. The Rocky dependency project fetches the `optix-dev` headers at tag
  `v7.6.0`. Use `--nocuda` for package setup together with
  `-DMOONRAY_USE_OPTIX=NO` for the main build to omit them.
- Apple silicon XPU support uses Metal from Xcode. It can be disabled with
  `-DMOONRAY_USE_METAL=NO`.
- The GUI applications use Qt 5, OpenGL, GLFW, and OpenColorIO. On Rocky Linux,
  use `--noqt` together with `-DBUILD_QT_APPS=NO` to omit them.
- Intel MKL and Amorphous are used when found but are not required.
- MaterialX shader plug-ins are built only with
  `-DBUILD_MATERIALX_SHADERS=ON`.
- The Rocky package script installs libcgroup support by default; `--nocgroup`
  omits it.
- Houdini builds use Houdini's OpenUSD and Boost.Python libraries. With newer
  OpenUSD versions, HdMoonRay may also require Vulkan.

Names, versions, patches, and exact platform package selections can change
between source revisions. Check the platform dependency project, package
script, CMake presets, and `find_package` calls in the source being built.
