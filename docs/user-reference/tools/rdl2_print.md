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
    Print all SceneClasses found in the RDL2_DSO_PATH environment variable.

    rdl2_print [options] [<SceneClass name>]
    Print a specific SceneClass found in the RDL2_DSO_PATH environment variable.

    rdl2_print [options] [<RDL file>]
    Print all SceneObjects found in the RDL file.

    rdl2_print [options] [<RDL file> <SceneObject name>]
    Print a specific SceneObject found in the RDL file.  The default SceneVariables object is named __SceneVariables__.

Options:
    -d, ---dso_path         Specify an additional path to search for SceneClasses (DSOs).
    -h, --help              Print this help message.
    --no_sort               Do not sort the classes and attributes alphabetically.
    -s, --simple            Print without comments.

Examples:
    # print all available SceneClasses with attributes, comments and default values
    rdl2_print

    # print the attributes, comments and default values of the RectLight SceneClass
    rdl2_print RectLight

    # print the attributes with default values of the SceneVariables SceneClass
    rdl2_print -s SceneVariables

    # print the attributes of the SceneVariables instance in a given RDL file
    rdl2_print ./scene.rdla __SceneVariables__

    # print the attributes of the some SceneObject instance in a given RDL file
    rdl2_print ./scene.rdla /name/of/some/scene/object
```

