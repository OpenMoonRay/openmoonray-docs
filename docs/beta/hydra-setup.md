---
# Hydra setup

## General setup

HdMoonray needs a number of environment variables set to function. It also needs the JSON class description files to be generated for a release. This is the general setup for a Moonray release located in $REL

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

## Setup for the Moonray docker container

The env vars RDL2_DSO_PATH, ARRAS_SESSION_PATH and PATH are already set correctly when the container starts. The prebuilt release is read-only, but you can generate the JSON files in /tmp. The DWA build of USD uses PXR_PLUGIN_PATH in place of PXR_PLUGINPATH_NAME.

```bash
mkdir /tmp/shader_json
rdl2_json_exporter --out /tmp/shader_json/ --sparse
export MOONRAY_CLASS_PATH=/tmp/shader_json
export PXR_PLUGIN_PATH=/baked_packages/packages/remaining/openmoonray/1.0.0.9999/ext/plugin/usd:${PXR_PLUGIN_PATH}
```

You should then be able to render USD scenes with hd_render:

```bash
hd_render -in scene.usd -out image.exr
```

You may see warnings that Python modules corresponding to the hdMoonray plugins cannot be found. This should not cause any problem in the render.

