---
title: Building MoonRay

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---
# Building MoonRay

MoonRay builds and runs on Linux. You can build in a Docker container or directly on a Linux system. The text in code boxes
```bash
like this
```
provides the commands needed to build in a Centos-7 container.

A Linux system used for building may have some of the required packages already installed, or even conflicting versions : in this case you will need to vary the procedure accordingly.

You will need a copy of the MoonRay source. The instructions assume that the source is in */source/openmoonray*

---
## Step 1. Base requirements
---

The base image for building in a container is constructed using *Dockerfile* in the *build_files* directory of the MoonRay source. It contains a number of MoonRay dependencies that are installed using *yum*, the Centos-7 package manager. 

To build directly on a Linux system, you will need to make sure all these are installed. The build process assumes that they are installed in their default locations (generally */usr/local*), but you should be able to install them elsewhere with suitable adjustments to the rest of the process. The Dockerfile also installs CMake, needed for the remainder of the process. 

You can leave out the Qt5 packages if you do not intend to build the MoonRay GUI programs.

```bash
> cd /source/openmoonray/build_files
> docker build -t openmoonray_base . --file Dockerfile
```

---
## Step 2. Build the remaining dependencies
---

The remaining MoonRay dependencies can be built from source and installed using CMake. *CMakeLists.txt* in the *build* directory contains a series of targets that download the sources and build each dependency. By default they are installed to */installs* to avoid conflicts with other versions that may be on the system, but you can change this by editing the *CMakeLists.txt* file.

Start the base container from step 1.

```bash
> docker run -v /source/openmoonray/build_files:/build_files:shared  --network=host --rm -it openmoonray_base
```

Run the CMake external projects build. The targets are set up to build one at a time. The build takes about 20 minutes on my machine.

```bash
> cd /build
> cmake ../build_files
> cmake --build . -- -j 64
```

Clean up the build residue, and copy '/build_files/other' into */installs*.

```bash
> rm -rf /build/*
> cp -r /build_files/other/* /installs
```

The container now has the requirements to build openmoonray installed.

To avoid re-running this step, commit the image as **openmoonray_build**. In another shell:

```bash
> docker ps

CONTAINER ID        IMAGE               ...
c3a90b08a53a        openmoonray_base    ...

> docker commit c3a90b08a53a openmoonray_build
```

You can then exit the container.

---
## Step 3. Build MoonRay
---

The entire OpenMoonRay code base is built by running CMake at the top level of the source tree. The locations of dependencies are provided to the build system using a CMake preset defined in *CMakePresets.json*. The source tree already contains a preset for building in a container created following the process described here, called **container-release**. If you have installed dependencies in alternate locations, create a new preset using the existing ones as a guide.

To continue the container build process, run the **openmoonray_build** container with the OpenMoonRay source mounted. 

```bash
> docker run -v /source/openmoonray:/openmoonray:shared -v /tmp:/tmp:shared --network=host --rm -it openmoonray_build
```

cd to the root of the source and build openmoonray:

```bash
> cd /openmoonray
> cmake --preset container-release 
> cmake --build --preset container-release -- -j 64
> mkdir /installs/openmoonray
> cmake --install ../build --prefix /installs/openmoonray
```

If you are building without Qt, add the argument ***-DBUILD_QT_APPS=NO*** to the first cmake command. The configure step will report failure to find Mkl : this is not an issue.

Set up the install and test moonray

```bash
> source /installs/openmoonray/scripts/setup.sh
> moonray -in /openmoonray/testdata/rectangle.rdla -out /tmp/rectangle.exr
```

To commit **openmoonray_run**, follow the same procedure as step 2.

---

## 4. Running moonray_gui 
---

To run **moonray_gui**, you need to set up X in the container. The steps required may vary depending on the host setup, but generally you will need to set the environment variables ***DISPLAY*** and ***XAUTHORITY***, and make sure the directory that *XAUTHORITY* points to is mounted in the container. 

You may also need to install additional packages. On my machine, the hotkeys in moonray_gui do not function if package *libxkbcommon-x11* is not installed.

```bash
> docker run -v /source/openmoonray:/openmoonray:shared -v /tmp:/tmp:shared -e DISPLAY=$DISPLAY -e XAUTHORITY=${XAUTHORITY} -v "${XAUTHORITY}:${XAUTHORITY}:z" --network=host --rm -it openmoonray_run

> yum install -y libxkbcommon-x11
> source /installs/openmoonray/scripts/setup.sh
> moonray_gui -in /openmoonray/testdata/rectangle.rdla -out /tmp/rectangle.exr
```