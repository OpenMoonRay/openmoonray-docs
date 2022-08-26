# OpenMoonray dependencies

These are the third-party libraries and tools that Moonray and Arras depend on.

| Name           | Version    |  |
|----------------|------------|-----------------|
|Gcc             | 6.3 or 9.3 | https://gcc.gnu.org/git/
|CMake           | 3.23.1     | https://github.com/Kitware/CMake
|Boost           | 1.73       | https://sourceforge.net/projects/boost
|Lua             | 5.3.5      | https://www.lua.org/ftp
|cppunit         | 1.15.1     | http://dev-www.libreoffice.org/src/
|log4cplus       | 1.1.2      | https://github.com/log4cplus/log4cplus
|JsonCpp         | 0.7        | https://github.com/open-source-parsers/jsoncpp.git
|TBB             | 2020.2.0   | https://github.com/oneapi-src/oneTBB
|ISPC            | 1.14.1     | https://github.com/ispc/ispc
|CUDA            | 11.1       | https://developer.nvidia.com/cuda-downloads
|Optix           | 7.3.0      | https://developer.nvidia.com/designworks/optix/download
|OpenSubdiv      | 3.4.3      | https://github.com/PixarAnimationStudios/OpenSubdiv
|OpenVdb         | 8.2.0.4    | https://github.com/AcademySoftwareFoundation/openvdb
|OpenImageIO     | 2.2.15.1   | https://github.com/OpenImageIO/oiio
|OpenColorIO     | 2.0.2      | https://github.com/AcademySoftwareFoundation/OpenColorIO
|OpenExr         | 2.5.7      | https://github.com/AcademySoftwareFoundation/openexr
|Random123       | 1.08.3     | https://github.com/DEShawResearch/random123
|Embree          | 3.12.1     | https://github.com/embree/embree
|Intel MKL       | 2020.3.279 |
|Microhttpd      | 0.9.37     | https://ftp.gnu.org/gnu/libmicrohttpd/
|Curl            | 7.49       | https://github.com/curl/curl
|USD             | 21.8       | https://github.com/PixarAnimationStudios/USD
|Qt              | 5.12       |

**Lua** must be build with the -fPIC option : e.g. *make linux MYCFLAGS=-fPIC*

**Microhttpd** and **Curl** are only needed when building or using Arras. Arras also needs **OpenSSL**.

**USD** is only needed for the Moonray Hydra plugins and USD geometry objects

**Qt** is only needed by moonray_gui and arras_render.

At this time, Moonray requires the following DWA libraries that are not publically available:

|||
|--------------------|---------|
|Amorphous           | (in-house tool) |
|OpenImageIO_Moonray |  (OIIO with DWA modifications) |
|OpenDCX             | 2.3.0.0 (currently unpublished) |

We are in the process of removing these dependencies.