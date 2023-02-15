---
title: Building MoonRay
---
# Building MoonRay

The **openmoonray** repository contains instructions for building MoonRay in a Docker container and on a vanilla Centos-7 machine, in the directory **/building**. The same instructions are also here:

[Building MoonRay in a Docker container](building-moonray-container)

[Building MoonRay on Centos-7](building-moonray-centos-7)

Each of these documents follows a fixed procedure, which you can vary as appropriate. The rest of this document is an overview of the build process.

MoonRay builds on Linux using CMake. The top-level **CMakeLists.txt** file in the **openmoonray** repository builds all of MoonRay and Arras. You will need to populate all of the submodules that the **openmoonray** references before building (see [Cloning the Repo](../cloning-the-repo)). You can set the option *BUILD_QT_APPS* to *NO* to skip build of the GUI applications **moonray_gui** and **arras_render**.

The MoonRay build requires CMake 3.23 or newer. The instructions referenced above describe how to get and install this version, since it is newer than that provided by most Linux distributions. At DWA we build MoonRay with GCC-6 and GCC-9 : build instructions generally assume version 9, but you should be able to substitute version 6.
## Dependencies

The main preparation required is to install the third-party libraries and tools that the MoonRay build is dependent on. These are listed in a table [here](../moonray-dependencies). However the best reference to use is the files **Dockerfile** and **CMakeLists.txt** in the **/building** directory of the openmoonray repository. These will be up-to-date for the source version you have checked out, and contain more detail about build options.

***Dockerfile*** lists a set of binary packages that can be installed on Centos-7 using the package manager *yum*. We haven't tested building MoonRay on other Linux distributions, but these should have similar packages.

***CMakeLists.txt*** is a CMake project that can automatically download the remaining dependencies and build them from source. You can use it directly, or as a reference for the required libraries and their versions. The project doesn't have many configuration options : to change versions or install locations you will have to directly edit **CMakeLists.txt**

By default, the **CMakeLists.txt** dependency project installs dependencies to an alternate location ***/installs***. You can change this to install to the default location (usually **/usr/local**), or to a different alternate, by editing the file. You can also comment out any libraries that the machine already has.

## Building

CMake will generally automatically find dependencies installed to their default location. Otherwise, you need to set environment variables telling it where the dependencies are installed. For example, *JSONCPP_ROOT* should be set to the install location for JsonCpp, if it is not **/usr/local**.

These environment variables can be set using a [CMake Preset](https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html). The file **CMakePresets.json** at the root of the **openmoonray** repo provides presets ***container-release*** and ***container-debug*** for building with dependencies installed by the dependency CMake project. In this preset, most dependencies are specified to be in **/installs**, since that is where the dependencies project puts them. You can create new presets using these as a reference, if you have installed to a different location.

Once the correct versions of CMake and GCC are on the current PATH, and a suitable preset exists, the build process is straightforward:

```bash
cmake --preset <presetname>
cmake --build --preset <presetname> -- -j 64
cmake --install <build-dir> --prefix <install-dir>
```

`-j 64` uses up to 64 cores for the build. You can add `-DBUILD_QT_APPS=NO` to the first command to skip building the Qt5 GUI applications **moonray_gui** and **arras_render**.

To set up the environment variables needed to run MoonRay, source the bash script **scripts/setup.sh** that is copied into the install. Then you should be able to run the following simple test that MoonRay is working:

```bash
moonray -in /source/openmoonray/testdata/rectangle.rdla -out /tmp/rectangle.exr
```




