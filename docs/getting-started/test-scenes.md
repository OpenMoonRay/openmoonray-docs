---
title: MoonRay Test Scenes
---
# Test Scenes for MoonRay

A selection of scenes converted to MoonRay's native RDL2 format are available for testing here: [example_scenes.zip]({{ "/assets/test-scenes/example_scenes.zip" | absolute_url }}).

The latest 2.2.0 version of the Netflix Animation Studios ALab scene, converted to MoonRay-native RDL scene format using `hd_usd2rdl`, including 4K mipmapped OpenEXR textures and baked procedurals, is available for testing here: <a href="https://d2k39ng9pbbkxu.cloudfront.net/ALab_2.2.0.zip">ALab_2.2.0.zip</a>.

This is the basis of the [texture cache profiling page]({{ "/user-reference/performance/alab/#texture-cache-size-considerations" | absolute_url }}).  Useful information for rendering is in the `moonray.memo` file inside the unzipped directory (`alab220/moonray.memo`), along with `alab220/middleQualityUniformHD.rdla` for a middle-quality rendering setup. That scene file requests a 98,304 MiB (96 GiB) texture cache; adjust it when the render machine does not have enough available memory.

A simple USD scene can be used for testing using MoonRay's Hydra plugin: [moonray_sphere.usd]({{ "/assets/test-scenes/moonray_sphere.usd" | absolute_url }}).

The "MoonRay Widget" shader ball model used in this documentation is released in USD ascii and binary formats: [MoonRayWidget.zip]({{ "/assets/test-scenes/MoonRayWidget.zip" | absolute_url }}).

To interactively render an RDL scene with the GUI, pass its input files with `-in`. For example, if the scene is split between paired ASCII and binary files:

```bash
moonray_gui -in scene.rdla -in scene.rdlb
```

## Credits

The example scenes were [curated by Benedikt Bitterli](https://benedikt-bitterli.me/resources/). They are designed to render modern, realistic scenes.

The ALab scene was created by Netflix Animation Studios and is hosted by ASWF's Digital Production Example Library (https://dpel.aswf.io/alab/) as a reference USD production scene for exploration. This scene was developed to be used in different environments, such as demonstrations and training materials and in the testing of USD support across software and pipeline. It is redistributed under the same [ASWF Digital Assets License v1.1](https://dpel.aswf.io/alab/alab-license/). Netflix Animation Studios ALab Copyright 2025 Netflix, Inc. All rights reserved.

The moonray_sphere.usd file was developed by DreamWorks as a simple test of hdMoonray rendering USD format data.  It is distributed under the [ASWF Digital Assets License v1.1]({{ "/getting-started/moonray-sphere-usd-license" | absolute_url }}).

The MoonRayWidget.zip file was developed by DreamWorks as a model to demonstrate various shader and material properties.  It is distributed under the [ASWF Digital Assets License v1.1]({{ "/getting-started/moonray-widget-license" | absolute_url }}).



