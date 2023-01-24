---
title: Cloning the MoonRay source repository
---
# Cloning the MoonRay source repository

MoonRay is released as a set of repositories on github. The "master" repository is called ***openmoonray***, and references all the other repos required to build MoonRay as git [submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules).

To clone the entire code base needed to build MoonRay, you need to use the ***--recurse-submodules*** option:

```bash
git clone --recurse-submodules https://github.com/dreamworksanimation/openmoonray.git
```