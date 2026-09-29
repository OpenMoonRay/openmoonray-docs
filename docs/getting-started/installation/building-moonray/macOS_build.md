---
title: Building MoonRay on macOS
---
# Building MoonRay on macOS

Start with reading the [general build instructions](../general_build).

---
## Base Requirements
- Apple M-series hardware
- Apple silicon running a macOS version listed as tested in the source build instructions:
  macOS 14.6 Sonoma, macOS 15.6 Sequoia, or macOS 26.0/26.5 Tahoe
- At least 17 GB of available disk space
- Install Xcode (tested with 15.4, 16.4, 26.0, and 26.6)
- Git and Git LFS
- `/usr/bin/python3` must be the macOS Python 3.9 shim supplied with Xcode
- Tahoe requires the Metal toolchain: `xcodebuild -downloadComponent MetalToolchain`
- Download and install CMake 3.26.5 (or greater):
    https://github.com/Kitware/CMake/releases/download/v3.26.5/cmake-3.26.5-macos-universal.dmg
    ```bash
    sudo "/Applications/CMake.app/Contents/bin/cmake-gui" --install
    ```

---
### Step 1. Create the folders
Create a clean root folder for moonray.  Attempting to build atop a previous installation may cause issues.
```bash
mkdir -p /Applications/MoonRay/{installs,build,build-deps,source}
mkdir -p /Applications/MoonRay/installs/{bin,lib,include}
```

---
### Step 2. Clone the OpenMoonRay source
The *openmoonray* repo references 20 other repositories via *Git* submodules. Some use [Git LFS](https://git-lfs.com/) to track files. Ensure Git LFS is installed before cloning:

```bash
git lfs install
```

Now, to clone all the repositories into one structure, run the following git command:

```bash
cd /Applications/MoonRay/source
git clone --recurse-submodules https://github.com/OpenMoonRay/openmoonray.git
```

---
### Step 3. Create symbolic links
```bash
cd /Applications/MoonRay
ln -s source/openmoonray/building .
ln -s source/openmoonray .
```

Note: If building for Houdini, you'll potentially need to make the following changes before proceeding:
* Edit source/openmoonray/CMakeMacOSPresets.json to update HOUDINI_INSTALL_DIR
* Edit source/openmoonray/scripts/macOS/setupHoudini.sh to update HOUDINI_PATH
* Edit source/openmoonray/building/macOS/pxr-houdini/pxrTargets.cmake to update HPYTHONLIB and HPYTHONINC if needed

---
### Step 4. Build the dependencies
Note: If building for Houdini you'll need to build moonray against Houdini's USD libraries.
Skip building USD during this step by using `cmake -DNO_USD=1 ../building/macOS` instead of the normal CMake command below. You should clean
the build-deps/ and installs/ directory if you have previously installed the dependencies
without passing `-DNO_USD=1`, to remove any USD-related files or step 5 may fail to link to
Houdini's USD libs.
```bash
cd /Applications/MoonRay/build-deps
cmake ../building/macOS
cmake --build .
```

---
### Step 5. Build MoonRay
Note: If building for Houdini, replace macos-release presets below with macos-houdini-release
```bash
cd /Applications/MoonRay/openmoonray
cmake --preset macos-release
cmake --build --preset macos-release
```

---
### Step 6. Run/Test
```bash
source /Applications/MoonRay/installs/openmoonray/scripts/setup.sh
cd /Applications/MoonRay/openmoonray/testdata
moonray -info -in curves.rdla
# If you built the GUI app:
moonray_gui -info -in curves.rdla
# If you built the Metal XPU path:
moonray_gui -exec_mode xpu -info -in curves.rdla
```

HOUDINI:
Open "Houdini Terminal" in Applications and run:
```bash
source /Applications/MoonRay/openmoonray/scripts/macOS/setupHoudini.sh
houdini
```

In the Main menu bar at top select Desktop->Solaris.
In the Scene View tab on the main window, change from "obj" to "stage" if it is not already set to "stage".
Click in the Solaris network editor, hit tab, type "sphere" and hit enter and then click to place a sphere on the stage.
In the viewport, click on "Persp" and select "Moonray", this should trigger rendering.

---
### Step 7. Post-build/install Cleanup
```bash
rm -rf /Applications/MoonRay/{build,build-deps}
```
