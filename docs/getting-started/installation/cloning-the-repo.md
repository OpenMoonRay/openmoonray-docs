---
title: Cloning the MoonRay source repository
---
# Cloning the MoonRay source repository

MoonRay is released as a set of repositories on GitHub. The main repository,
***openmoonray***, references the other repositories required to build MoonRay
as Git [submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules).

The *openmoonray* repo currently references 20 other repositories via *Git* submodules.
Some repositories use [Git LFS](https://git-lfs.com/) to track files. Ensure
that Git LFS is installed and initialized before cloning:

```bash
git lfs install
```

Clone the complete source tree with the `--recurse-submodules` option:

```bash
git clone --recurse-submodules https://github.com/OpenMoonRay/openmoonray.git
```

This downloads each repository into the structure expected by the top-level
CMake project. The repositories can also be cloned and built separately, but
then their build order and dependency locations must be configured manually.
