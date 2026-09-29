---
title: Building MoonRay on Rocky Linux 9
---
# Building MoonRay on Rocky Linux 9

Start with reading the [general build instructions](../general_build).

---
## Base Requirements
* CMake 3.23.1 (or greater)

---
### Step 1. Create the folders
Create a clean root folder for moonray.  Attempting to build atop a previous installation may cause issues.
The folders can be created in the location of your choosing, but these instruction, the provided CMake presets,
and several of the scripts mentioned below assume this location/structure.
```bash
mkdir -p /opt/MoonRay/{installs,build,build-deps,source}
mkdir -p /opt/MoonRay/installs/{bin,lib,include}
```

---
### Step 2. Clone the OpenMoonRay source
The *openmoonray* repo currently references 20 other repositories via *Git* submodules. Some use [Git LFS](https://git-lfs.com/) to track files. Install Git and Git LFS before cloning:

```bash
sudo dnf install -y git git-lfs
git lfs install
```

Now, to clone all the repositories into one structure, run the following git command:

```bash
cd /opt/MoonRay/source
git clone --recurse-submodules https://github.com/OpenMoonRay/openmoonray.git
```

Note: If building for Houdini, you'll potentially need to make the following changes before proceeding:
* Edit source/openmoonray/CMakeLinuxPresets.json to update HOUDINI_INSTALL_DIR
* Edit source/openmoonray/scripts/Rocky9/setupHoudini.sh to update HOUDINI_PATH
* Edit source/openmoonray/building/Rocky9/pxr-houdini/pxrTargets.cmake to update HPYTHONLIB and HPYTHONINC if needed

---
### Step 3. Install some of the dependencies via script/package manager
```bash
sudo -i
source /opt/MoonRay/source/openmoonray/building/Rocky9/install_packages.sh
export PATH=/installs/cmake-3.23.1-linux-x86_64/bin:${PATH}
```
The package script installs CUDA and Qt by default. The dependency build in
step 4 automatically fetches the NVIDIA `optix-dev` headers at tag `v7.6.0`;
no manual OptiX header download or copy is needed.

To omit CUDA, pass `--nocuda` here and add `-DMOONRAY_USE_OPTIX=NO` to the
step 5 configure command. To omit Qt, pass `--noqt` here and add
`-DBUILD_QT_APPS=NO` in step 5. For example, for a CPU-only build without GUI
applications, use these commands instead of the package commands above:

```bash
source /opt/MoonRay/source/openmoonray/building/Rocky9/install_packages.sh --nocuda --noqt
export PATH=/installs/cmake-3.23.1-linux-x86_64/bin:${PATH}
```

---
### Step 4. Build the remaining dependencies from source
Note: If building for Houdini you'll need to build moonray against Houdini's USD libraries.
Skip building USD during this step by passing `-DNO_USD=1` to CMake. If you previously installed
dependencies with USD enabled, clean the build-deps/ and installs/ directories before rebuilding,
or step 5 may fail to link against Houdini's USD libraries.
```
cd /opt/MoonRay/build-deps
cmake ../source/openmoonray/building/Rocky9
cmake --build . -- -j $(nproc)
```

---
### Step 5. Build MoonRay
Note: If building for Houdini, replace rocky9-release presets below with rocky9-houdini-release
```
cd /opt/MoonRay/source/openmoonray
cmake --preset rocky9-release
cmake --build --preset rocky9-release -- -j $(nproc)
```

For the CPU-only, non-Qt package setup shown in step 3, use the matching
configure command:

```
cmake --preset rocky9-release -DMOONRAY_USE_OPTIX=NO -DBUILD_QT_APPS=NO
cmake --build --preset rocky9-release -- -j $(nproc)
```

---
### Step 6. Run/Test
```
source /opt/MoonRay/installs/openmoonray/scripts/setup.sh
cd /opt/MoonRay/source/openmoonray/testdata
moonray -info -in curves.rdla
# If you built the GUI app:
moonray_gui -info -in curves.rdla
# If you built XPU support and have a supported GPU:
moonray_gui -exec_mode xpu -info -in curves.rdla
```

HOUDINI:
Open a terminal and run:
```
cd /opt/hfs20.0  # location of houdini install
source houdini_setup
source /opt/MoonRay/source/openmoonray/scripts/Rocky9/setupHoudini.sh
houdini
```

In the Main menu bar at top select Desktop->Solaris
In the Scene View tab on the main window, change from "obj" to "stage".
Click in the Solaris network editor, hit tab, type "sphere" and hit enter to place a sphere on the stage.
In the viewport menu, click on "Persp" and select "Moonray", this should trigger rendering.

---
### Step 8. Post-build/install Cleanup
```
rm -rf /opt/MoonRay/{build,build-deps}
```
