---
title: Building MoonRay on macOS Sonoma
---
# Building MoonRay on macOS Sonoma

---
## Base requirements
- Apple M-series hardware
- macOS Sonoma (macOS 14)
- Install Xcode
- Download and install CMake 3.26.5
    https://github.com/Kitware/CMake/releases/download/v3.26.5/cmake-3.26.5-macos-universal.dmg
    sudo "/Applications/CMake.app/Contents/bin/cmake-gui" --install


---
### Create the folders
Create a clean root folder for MoonRay.  Attempting to build atop a previous installation may cause issues.
```bash
mkdir -p /Applications/MoonRay/{installs,build,build-deps,source}
mkdir -p /Applications/MoonRay/installs/{bin,lib,include}
```

---
### Check out the OpenMoonRay source
```
cd /Applications/MoonRay/source
git clone --recurse-submodules <repository>
```

---
### Create symbolic links
```
cd /Applications/MoonRay
ln -s source/openmoonray/building .
ln -s source/openmoonray .
```

---
### Build the dependencies
```
cd /Applications/MoonRay/build-deps
cmake ../building/macOS
cmake --build .
```

---
### Build MoonRay
```
cd /Applications/MoonRay/openmoonray
cmake --preset container-macOS
cmake --build --preset container-macOS
```

---
### Run / test
```
source /Applications/MoonRay/installs/openmoonray/scripts/setup.sh
cd /Applications/MoonRay/openmoonray/testdata
moonray_gui -exec_mode xpu -info -in curves.rdla
```

---
### Cleanup
```
rm -rf /Applications/MoonRay/{build,build-deps,openmoonray/release}
```
