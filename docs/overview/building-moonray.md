---
title: Building MoonRay

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# Building MoonRay

MoonRay builds on Linux using CMake.

The easiest way to build MoonRay is inside a container with all of the dependencies installed. All that is required to do this is Docker itself. The instructions for the current release are in the MoonRay source at *building/ContainerBuild.txt*, and also here:

[Building MoonRay in a Docker container](building-moonray-container)

The files in the *building* source directory also act as a reference for building MoonRay:

***Dockerfile*** lists the binary packages that need to be installed, both to build MoonRay and the dependencies. The *yum* install lines can be run directly on a Centos-7 machine outside a container.

***CMakeLists.txt*** defines a series of ExternalProject targets that download the source, build and install the remaining dependencies. You can use this file as-is directly on a Linux system, removing any libraries that the system already has installed. By default, dependencies are installed to */installs*, but you can change this by editing *CMakeLists.txt*. You can also use the information in the targets to build the dependencies manually.

Once the dependencies are installed, MoonRay is built by running CMake at the top level of the source. The location of each dependency can be specified by setting an environment variable, for example 

```
JSONCPP_ROOT = /installs
```

Generally CMake should be able to find libraries installed to their default location (usually */usr/local*) without setting the XXX_ROOT variable. The recommended way to set these variables is using a [CMake Preset](https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html). The preset for building in a container, in *CMakePresets.json*, can be used as an example.

```bash
cmake --preset <presetname>
cmake --build --preset <presetname> -- -j 64
cmake --install <build-dir> --prefix <install-dir>
```

`-j 64` uses up to 64 cores for the build. You can add `-DBUILD_QT_APPS=NO` to the first command to skip building the Qt5 GUI applications moonray_gui and arras_render.

To set up the environment variables needed to run MoonRay, source the bash script *scripts/setup.sh* that is copied into the install. Then you should be able to run the following simple test that MoonRay is working:

```bash
moonray -in /source/openmoonray/testdata/rectangle.rdla -out /tmp/rectangle.exr
```




