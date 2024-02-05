---
title: rdl2_print
---
# rdl2_print

rdl2_print is the command-line utility for inspecting SceneClasses and SceneObjects.

It can be used as a "discovery" tool to find out the available attributes and their default values for any SceneClass.

It can also be used as a debugging tool to inspect all of the SceneObjects and their attributes in an existing scene, or to inspect a single SceneObject.

## Command-line options
Use the _-h_ flag to display the full list of command-line options.

```bash
$ rdl2_print -h
Usage:
    rdl2_print [options]
    Print SceneObjects in the given scene, or available SceneClasses when no scene is given.

    The RDL2_DSO_PATH environment variable and additional paths given by --dso-path are searched to find the SceneClasses (DSOs).

General options:
    -h, --help                                      Print this help message.
    -d, --dso-path      <path>                      Path to search for additional SceneClasses (DSOs). Option can appear multiple times.
    -f, --file          <scene file>                RDL2 file (.rdla|.rdlb) to load. Option can appear multiple times.

Filtering options:
    -a, --attr          <attribute name>            Attributes to filter by. Option can appear multiple times.
    -c, --class         <class name>                SceneClasses to filter by. Option can appear multiple times.
    -o, --object        <object name>               SceneObjects to filter by. Option can appear multiple times.

Formatting options:
    --no-attrs                                      Do not include attributes.
    --no-comments                                   Do not include attribute comments.
    --no-sort                                       Do not sort the classes and attributes alphabetically.

Examples:
    # print all available SceneClasses (found in RDL2_DSO_PATH) with attributes, comments and default values
    rdl2_print

    # print information about a single SceneClass
    rdl2_print -c ImageMap

    # print contents of an existing RDL2 scene
    rdl2_print -f scene.rdla

    # print contents of an existing RDL2 scene which has been split into ascii and binary formats
    rdl2_print -f scene.rdla -f scene.rdlb

    # print contents of an existing RDL2 scene, but listing only instances of a particular SceneClass
    rdl2_print -f scene.rdla -c RenderOutput

    # print contents of an existing RDL2 scene, but listing only a particular named SceneObject
    rdl2_print -f scene.rdla -o "/Scene/MyImageMap"

    # print contents of an existing RDL2 scene, but listing only instances of a particular SceneClass and only certain Attributes
    rdl2_print -f scene.rdla -c RenderOutput -a file_name -a checkpoint_file_name -a resume_file_name
```
