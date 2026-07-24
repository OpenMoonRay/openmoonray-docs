---
title: Cloning the MoonRay source repository
---
# Cloning the MoonRay source repository

MoonRay is released as a set of repositories on github. The main repository is called ***openmoonray***, and references all the other repos required to build MoonRay as git [submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules).

The *openmoonray* repo references 19 other repositories via *Git* submodules.
Some of the repositories use [Git LFS](https://git-lfs.com/) to track some of the files.  You'll want to ensure that you have Git LFS installed before cloning openmoonray.
You can install Git LFS using the following command:

```bash
git lfs install
```

Now, to clone all the repositories into one structure, run the following git command:

The source for every repository will be downloaded and organized into a directory structure that enables everything to be built using a single CMake project at the root of the *openmoonray* clone. Of course, you can also clone the repositories individually into any structure you want, but you will then need to build them separately.

To clone the entire code base needed to build MoonRay, you need to use the ***--recurse-submodules*** option:

```bash
git clone --recurse-submodules https://github.com/OpenMoonRay/openmoonray.git
```
