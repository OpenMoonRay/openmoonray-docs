---
title: Building MoonRay in a Docker container
---
# Building MoonRay in a Docker container

The general documentation for building MoonRay is [here](../general_build). 

You can use exactly the same process for building in a container as you would use to build directly on a host system. However, there are also some modifications you can make, discussed in the general build instructions under **Container Build Tips**. This document illustrates these applied to a Centos 7 container build.

To keep it concrete, I've chosen specific directory locations inside the container : you can change these if needed:

- */source* location of the openmoonray repository clone
- */build* CMake build directory
- */install/moonray* location to install MoonRay

You will need Docker and a copy of the MoonRay source. To clone the source from the github repo (on the host), use this git command:

```bash
git clone --recurse-submodules https://github.com/dreamworksanimation/openmoonray.git 
```
You can place the clone anywhere : the rest of this document calls the directory you have cloned openmoonray into (on the host machine) ***openmoonray-dir***. It will be mounted at */source* inside the container.

This version of the build omits Cuda/GPU support, because GPU devices are not generally available inside a container. See the general build documentation for how to add GPU support.

The build process creates three Docker images:

- **openmoonray_base** is the initial Centos-7 environment for building.
- **openmoonray_build** adds all MoonRay's third-party dependencies into the base image
- **openmoonray_run** contains the final built version of MoonRay


---
## Step 1. Base requirements
---

This step creates the **openmoonray_base** image by adding some additional packages to a base Centos-7 container. 

The file *Dockerfile*, in the *building/Centos7* directory of the MoonRay source, is a Docker build script that constructs the base image : all you need to do is to execute it with the docker build command. It works by starting with the Centos-7 base and then installing additional packages (mostly using the *yum* package manager). The end result is much the same as starting a base Centos 7 container and running the *install_packages.sh* script inside it, but Docker caching will make the container much faster to build after the first time.

To perform this step, start a shell and cd to the "building/Centos7" directory inside your clone of the openmoonray repo, then run the docker build command as follows:

```bash
> cd <openmoonray-dir>/building/Centos7
> docker build -t openmoonray_base . --file Dockerfile
```

This will create the openmoonray_base image in your local Docker instance.

---
## Step 2. Build the remaining dependencies
---

This step creates the ***openmoonray_build*** container by downloading, building and installing the third-party libraries that MoonRay needs.

The *building/Centos7* directory in the openmoonray repo contains a file ***CMakeLists.txt***. This file defines a series of CMake targets that automatically download and install the third-party dependencies. 

This step begins by running a Docker container using the *openmoonray_base* image created in step 1. This container will not be able to access arbitrary files on your machine or the network : you must use the docker run "-v" option to mount the directory containing the source, like this:

```bash
> docker run -v <openmoonray-dir>:/source --network=host --rm -it openmoonray_base
```

If the command is successful, you will now be in a *bash* shell running as root in the container. You can check that the mounts were successful by checking that */source/building/Centos7* contains *CMakeLists.txt*.

To build the third-party libraries, run the CMake dependencies project in the container, like this:

```bash
> cd /build
> cmake /source/building/Centos7
> cmake --build . -- -j 64
```
The option "-j 64" tells CMake to use up to 64 cores on your machine for building. The build process takes a while (for reference, it is about 20 minutes on my machine), and you may see a number of warning messages pass by.

Once the build is complete, clean up the build residue by deleting the contents of */build*

```bash
> rm -rf /build/*
```

The dependencies required to build openmoonray are now installed into the container.

To save the container as an image, run 'docker ps` in another shell. This will show you the running container ID. Then you can use "docker commit" to save the container out to a new *openmoonray_build* image:

```bash
> docker ps

CONTAINER ID        IMAGE               ...
c3a90b08a53a        openmoonray_base    ...

> docker commit c3a90b08a53a openmoonray_build
```

The container ID will be different in your case. Do not exit the shell that is running the container until the commit command completes.

---
## Step 3. Build MoonRay
---

To build MoonRay itself, you need to start the *openmoonray_build* container with the root of the openmoonray source repo mounted. I also mount "/tmp" in the container, as somewhere to place test output images.

```bash
> docker run -v <openmoonray-dir>:/source -v /tmp:/tmp --network=host --rm -it openmoonray_build
```
The entire OpenMoonRay code base is built by running CMake at the top level of the source tree. 

We use the option ***-DMOONRAY_USE_CUDA=NO*** to build without GPU/XPU support. If you want to build MoonRay without the GUI apps moonray_gui and arras_render, add the option ***-DBUILD_QT_APPS=NO*** to the first cmake command below. 


Once in the container, cd to the /build directory (which should be empty -- if it isn't, remove all existing files). Then run the CMake build:

```bash
> cd /build
> export LUA_DIR=/usr/local
> cmake /source -DMOONRAY_USE_CUDA=NO
> cmake --build . -- -j 64
> mkdir /installs/openmoonray
> cmake --install ../build --prefix /installs/openmoonray
```

The build is configured to use the version of Lua we installed in step 2, rather than the one in */bin* by setting ***LUA_DIR*** to */usr/local*.

The configure step will report failure to find Mkl (unless you happen to have it installed). This does not cause a problem : Mkl is only linked into the commands if it was found.

Once the install is complete, */installs/openmoonray/bin* should contain a number of commands, including the main MoonRay command "moonray". You can set up the PATH and other required environment variables by sourcing the script */installs/openmoonray/scripts/setup.sh*, and then perform a test run of MoonRay in the container.

```bash
> source /installs/openmoonray/scripts/setup.sh
> moonray -in /source/testdata/rectangle.rdla -out /tmp/rectangle.exr
```

If everything is working, you should see output something like this:

```
Loading Scene File(s): /source/testdata/rectangle.rdla
Render prep time = 00:00:00.008
  [+] Rendering [======================] 100.0%
00:00:01  671.2 MB | ---------- Time ------------------------------------------
00:00:01  671.2 MB | Render time                      = 00:00:01.404000
00:00:01  671.2 MB | Total time                       = 00:00:01.442000
Wrote /tmp/rectangle.exr
```

To commit **openmoonray_run**, follow the same procedure as step 2:

```bash
> docker ps

CONTAINER ID        IMAGE               ...
71b4c31684f8       openmoonray_build    ...

> docker commit 71b4c31684f8 openmoonray_run
```

You can now continue to use moonray, or exit the container.

To restart the run container:

```bash
> docker run -v <openmoonray-dir>:/source -v /tmp:/tmp --network=host --rm -it openmoonray_run
```
This command mounts the moonray repo to provide access to the test data : moonray doesn't need the moonray source to run. You can add additional mounts via *-v*, to provide container access to input scenes or output image directories.

You will need to source the setup script again when restarting the container, because each run starts a new shell. You can test the MoonRay Hydra plugin using the hd_render command as follows:

```bash
> source /installs/openmoonray/scripts/setup.sh
> hd_render -in /source/testdata/sphere.usd -out /tmp/sphere.exr
```

## 4. Running moonray_gui
---

To run **moonray_gui**, you need to set up X in the container. The steps required may vary depending on the host setup, but generally you will need to set the environment variables ***DISPLAY*** and ***XAUTHORITY***, and make sure the directory that *XAUTHORITY* points to is mounted in the container. 

You may also need to install additional packages. For instance, the hotkeys in moonray_gui may not function if package *libxkbcommon-x11* is not installed.

```bash
> docker run -v <openmoonray-dir>:/source -v /tmp:/tmp -e DISPLAY=$DISPLAY -e XAUTHORITY=${XAUTHORITY} -v "${XAUTHORITY}:${XAUTHORITY}:z" --network=host --rm -it openmoonray_run

> yum install -y libxkbcommon-x11
> source /installs/openmoonray/scripts/setup.sh
> moonray_gui -in /source/testdata/rectangle.rdla -out /tmp/rectangle.exr
```
