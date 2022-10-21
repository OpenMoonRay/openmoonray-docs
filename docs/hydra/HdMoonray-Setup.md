---
title: HdMoonray Setup

# uncomment if you want MathJax formatting available
# maths: 1

# format is YYYY-MM-DD 00:00:00 +0000
# last-modified-date: 2025-02-14 00:00:00 +0000
---

# HdMoonray Setup

The Hydra render delegate for Moonray is provided by the ***hdMoonray.so*** library.
It needs a configured installation of Moonray to work.

## Setup

If you are *hdMoonray* with the Pixar USD scene delegate (*usdImaging*), the Moonray materials and maps need to be registered with *Sdr* (Shader Description Registry). The additional plugins *moonrayShaderDiscovery.so* and *moonrayShaderParser.so* accomplish this. They require JSON description files for the Moonray shaders. These files are not created automatically by the Moonray build system : you have to run the `rdl2_json_exporter` command line program to generate them. This is only required once for a new build/install of Moonray. USD scene delegate support also includes some adapter classes, in ***hdMoonrayAdapters.so***. These add support for `GeometryLight`s and `LightFilter`s missing in Hydra -- they may not be needed (or function correctly) in more recent version of the scene delegate.

If the Moonray release is in `$REL`, a typical setup looks like this:

```bash
# tells Moonray where to find shader dsos
export RDL2_DSO_PATH=$REL/rdl2dso.proxy:${rel_rool}/rdl2dso
# only need to run this once for a Moonray build
$REL/bin/rdl2_json_exporter --out $REL/shader_json/ --sparse
# tells the Sdr plugins where to find the shader descriptions
export MOONRAY_CLASS_PATH=$REL/shader_json
# tells Arras where to find the session definition files
export ARRAS_SESSION_PATH=$REL/sessions
# adds the Arras runtime execComp to the path
export PATH=$REL/bin:${PATH}
# adds the pxr plugins to the plugin path 
export PXR_PLUGINPATH_NAME=$REL/plugin/usd:${PXR_PLUGINPATH_NAME}
```

## Modes

By default, `hdMoonray` uses Arras local mode to create a separate Moonray render process. If you have a distributed Arras pool set up, you can increase the number of render nodes using Arras distributed mode.

***Debug mode*** can be selected through a render setting. This causes hdMoonray to start up an in-process instance of Moonray, rather than using Arras. This can make it easier to debug issues, but has some disadvantages. Moonray's use of threads via the *TBB* library appears to interfere with GUI update in Houdini, causing the rendered view to freeze temporarily. In addition, if Moonray raises an assertion, the host application may be terminated. When running outside debug mode, Arras will simply restart the Moonray process if it exits. A few features available in normal mode are not available in debug mode, like pausing the render.

