---
title: HdMoonRay Setup
---

# HdMoonRay Setup

The Hydra render delegate for MoonRay is provided by the ***hdMoonray.so*** library.
It needs a configured installation of MoonRay to work.

## Setup

If you are using *hdMoonray* with the Pixar USD scene delegate (*usdImaging*), the MoonRay materials and maps need to be registered with *Sdr* (Shader Description Registry). The additional plugins *moonrayShaderDiscovery.so* and *moonrayShaderParser.so* accomplish this. They require JSON description files for the MoonRay shaders. These files are not created automatically by the MoonRay build system : you have to run the **rdl2_json_exporter** command-line program to generate them. This is only required once for a new build/install of MoonRay. USD scene delegate support also includes some adapter classes, in ***hdMoonrayAdapters.so***. These add support for `GeometryLight`s and `LightFilter`s missing in Hydra -- they may not be needed (or function correctly) in more recent versions of the scene delegate.

If the MoonRay release is in `$REL`, a typical setup looks like this:

```bash
# tells MoonRay where to find shader dsos
export RDL2_DSO_PATH=$REL/rdl2dso.proxy:$REL/rdl2dso
# only need to run this once for a MoonRay build
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

## Python and Hydra setup

HdMoonray needs to be built with versions of Python and Hydra that are binary-compatible with the versions used by the host application. Generally the application itself will set these up for use.

If you are using the `hd_render` command-line tool, then Python and USD/Hydra need to be set up before running it. The Python runtime linked into the tool will try to configure itself at runtime : if it fails to find the Python libraries you will see an error at startup and may need to set the PYTHONHOME environment variable.

If hd_render produces a series of errors saying that it is unable to load pxr/USD python modules, you may need to set PYTHONPATH to contain the USD python installation. In the container build of MoonRay, this is in /usr/local/lib/python, so you would do this:

```
export PYTHONPATH=/usr/local/lib/python:${PYTHONPATH}
```

hd_render may also report missing Python modules for HdMoonray plugins like MoonrayShaderDiscovery. This is harmless, since these modules do not have Python bindings.

## Modes

By default, `hdMoonray` uses Arras local mode (more [info](../../arras_render/#local-mode)) to create a separate MoonRay
render process. If you have a distributed Arras pool set up (more [info](../../arras_render/#multi-machine-mode)),
you can increase the number of render nodes using Arras distributed mode.

***Debug mode*** can be selected through a render setting. This causes hdMoonray to start up an in-process instance of MoonRay, rather than using Arras. This can make it easier to debug issues, but has some disadvantages. MoonRay's use of threads via the *TBB* library appears to interfere with GUI update in Houdini, causing the rendered view to freeze temporarily. In addition, if MoonRay raises an assertion, the host application may be terminated. When running outside debug mode, Arras will simply restart the MoonRay process if it exits. A few features available in normal mode are not available in debug mode, like pausing the render.

